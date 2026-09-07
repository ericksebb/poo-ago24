#include <WiFi.h>
#include <HTTPClient.h>
#include <LiquidCrystal_I2C.h>

//  Network credentials and device MAC address if you want to use with static IP.

const char* ssid = "Pinguinos_de_Madagascar";
const char* password = "Paligienco.2023";
const char* mac = "08:d1:f9:ed:fc:20";
const char* backend = "https://esp.up.railway.app/registers";

//  Define pins for the HC-SR04 sensor inside an array in case multiple are installed.

const int sharedTrigPin = 26;
const int echoPin = 27;

//  Define pins and values for monitoring

const int statusLed  = 18;  //  on startup
const int motionLed  = 19;  //  on startup
const int batteryPin = 32;  //  Do not declare in setup as it is an analog pin
const int currentPin = 35;  //  Do not declare in setup as it is an analog pin
const int buzzerPin =  16;  //  used when battery is low and by alarm

//  Define values for the voltage divider

const float R1 = 6.79;
const float R2 = 6.72;
const float VREF = 3.3;

//  Define values for the ACS712 current sensor

const float sensitivity = 0.185;
const float offset = 2.5;

//  Define global variables used in code

unsigned long lastPostTime = 0;
unsigned long lastBatteryCheck = 0;
int httpResponseCode;
int previousDistance;
const int threshold = 5;
long duration, distance;

LiquidCrystal_I2C lcd(0x27, 16, 2);

enum ConnectionStatus {
  CONNECTED,
  NOT_CONNECTED
};

// ConnectionStatus status;
  ConnectionStatus status = (WiFi.status() == WL_CONNECTED) ? CONNECTED : NOT_CONNECTED;

//  Define functions

void clearDisplayRow(int row) {
  lcd.setCursor(0, row);
  for (int i = 0; i < 16; i++) {
    lcd.print(" ");
  }
  lcd.setCursor(0, row);
}

void wifiConnect() {
  int wirelessTimeOut = 1;
  int retryBase = 1000;
  int retryTime;

  WiFi.begin(ssid, password);
  lcd.setCursor(0, 0);
  lcd.print("Connecting to WiFi:");
  lcd.setCursor(0, 1);
  lcd.print(ssid);
  Serial.println("Connecting to WiFi...");
  delay(1500);

  while ((WiFi.status() != WL_CONNECTED) && wirelessTimeOut <= 5) {
    retryTime = (retryBase * wirelessTimeOut) * 2;
    clearDisplayRow(0);
    lcd.setCursor(0, 0);
    lcd.print("Retrying in");
    Serial.print("Retrying in ");
    clearDisplayRow(1);
    lcd.setCursor(0, 1);
    lcd.print(retryTime / 1000);
    lcd.print(" seconds.");
    Serial.print(retryTime / 1000);
    Serial.println(" seconds.");
    WiFi.begin(ssid, password);
    delay(retryTime);
    wirelessTimeOut++;
  }

  if (WiFi.status() != WL_CONNECTED) {
    clearDisplayRow(0);
    lcd.setCursor(0, 0);
    lcd.print("Error connecting");
    Serial.print("Could not connect to the network: '");
    clearDisplayRow(1);
    lcd.setCursor(0, 1);
    lcd.print(ssid);
    Serial.print(ssid);
    Serial.println("', starting in offline mode.");
    status = NOT_CONNECTED;
  } else {
    clearDisplayRow(0);
    lcd.setCursor(0, 0);
    lcd.print("Connected to:");
    Serial.print("Connected to WiFi: ");
    clearDisplayRow(1);
    lcd.setCursor(0, 1);
    lcd.print(ssid);
    Serial.println(ssid);
    Serial.println("");
    status = CONNECTED;
  }
}

bool checkForMovement() {
  digitalWrite(sharedTrigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(sharedTrigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(sharedTrigPin, LOW);

  duration = pulseIn(echoPin, HIGH);

  distance = duration * 0.034 / 2;

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  if (previousDistance != -1 && abs(distance - previousDistance) > threshold) {
    previousDistance = distance;
    Serial.println("Movement detected");
    digitalWrite(motionLed, HIGH);
    digitalWrite(statusLed, HIGH);
    delay(1000);
    digitalWrite(motionLed, LOW);
    digitalWrite(statusLed, LOW);
    delay(100);
    return true;
  }

  previousDistance = distance;
  return false;
}

void sendPostRequest(int room_id, int sensor_id, String location) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(backend);
    http.addHeader("Content-Type", "application/json");

    String payload = "{\"room_id\":" + String(room_id) +
                     ", \"sensor_id\":" + String(sensor_id) +
                     ", \"location\":\"" + location + "\"}";

    int httpResponseCode = http.POST(payload);

    if (httpResponseCode > 0) {
      String response = http.getString();
      clearDisplayRow(0);
      lcd.setCursor(0, 0);
      lcd.print("POST sent");
      clearDisplayRow(1);
      lcd.setCursor(0, 1);
      lcd.print("Code: ");
      lcd.print(httpResponseCode);
        Serial.println(httpResponseCode);
        Serial.println(response);
    } else {
      clearDisplayRow(0);
      lcd.setCursor(0, 0);
      lcd.print("Error on POST");
      clearDisplayRow(1);
      lcd.setCursor(0, 1);
      lcd.print("Code: ");
      lcd.print(httpResponseCode);
        Serial.print("Error on sending POST: ");
        Serial.println(httpResponseCode);
    }
    http.end();
  } else if (httpResponseCode < 0){
      Serial.println("WiFi Disconnected");
    clearDisplayRow(0);
    lcd.setCursor(0, 0);
    lcd.print("WiFi");
    lcd.setCursor(0, 1);
    lcd.print("Disconnected");
  }
}

void activateAlarm(){
  digitalWrite(buzzerPin, HIGH);
  delay(10000);
  digitalWrite(buzzerPin, LOW);
  delay(1000);
  for (int i = 0; i < 60; i++) {
    digitalWrite(buzzerPin, HIGH);
    delay(245);
    digitalWrite(buzzerPin, LOW);
    delay(245);
    }
}

float readBatteryVoltage() {
  int batteryAdcValue = analogRead(batteryPin);
  float measuredVoltage = batteryAdcValue * (VREF / 4095.0);
  float batteryVoltage = measuredVoltage * ((R1 + R2) / R2);
  clearDisplayRow(0);
  lcd.setCursor(0, 0);
  lcd.print("Voltage: ");
  lcd.print(batteryVoltage);
    Serial.print("Battery Voltage: ");
    Serial.println(batteryVoltage);
  return batteryVoltage;
}

void readCurrent() {
  int currentAdcValue = analogRead(currentPin);
  float measuredVoltage = currentAdcValue * (VREF / 4095.0);
  float current = (measuredVoltage - offset) / sensitivity;
  clearDisplayRow(0);
  lcd.setCursor(0, 0);
  lcd.print("Current: ");
  lcd.print(current);
    Serial.print("Current: ");
    Serial.println(current);
}

void setup() {
  pinMode(sharedTrigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(statusLed, OUTPUT);
  pinMode(motionLed, OUTPUT);
  pinMode(buzzerPin, OUTPUT);
  lcd.init();
  lcd.backlight();
  analogReadResolution(12);
  Serial.begin(115200);
  digitalWrite(statusLed, HIGH);
  wifiConnect();
  digitalWrite(statusLed, LOW);
}

void loop() {

  switch (status)
  {
  case CONNECTED:
      digitalWrite(statusLed, HIGH);
      delay(500);
      digitalWrite(statusLed, LOW);
      delay(500);
      if (checkForMovement() == true){
      unsigned long currentTime = millis();
        if (currentTime - lastPostTime > 10000) {
          sendPostRequest(1, 1, "Doorframe");
          clearDisplayRow(0);
          lcd.setCursor(0, 0);
          lcd.print("Motion detected");
            Serial.println("POST request sent");
          lastPostTime = currentTime;
        }
      }
  break;

  case NOT_CONNECTED:
      digitalWrite(statusLed, HIGH);
      delay(50);
      digitalWrite(statusLed, LOW);
      delay(1000);
      if (checkForMovement() == true){
        clearDisplayRow(0);
        lcd.setCursor(0, 0);
        lcd.print("Motion detected");

        activateAlarm();
      }

  break;
  }

  if (readBatteryVoltage() < 3.3) {
    clearDisplayRow(0);
    clearDisplayRow(1);
    lcd.setCursor(0, 0);
    lcd.print("Low battery");
      Serial.println("Low battery");
    unsigned long batteryCheck = millis();
    if (batteryCheck - lastBatteryCheck > 120000) {
      for (int i = 0; i < 4; i++) {
        digitalWrite(buzzerPin, HIGH);
        delay(245);
        digitalWrite(buzzerPin, LOW);
        delay(245);
        lastBatteryCheck = batteryCheck;
      }
    }
  }
  readCurrent();
}
