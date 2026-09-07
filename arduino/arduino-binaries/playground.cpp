const int echo = 2;
const int trigger = 3;

bool checkForMovement() {
 long duration, distance;

  digitalWrite(trigger, LOW);
  delayMicroseconds(2);

  digitalWrite(trigger, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigger, LOW);

  duration = pulseIn(echo, HIGH);

  distance = duration * 0.034 / 2;

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  static long previousDistance = 0;
  if (abs(distance - previousDistance) > 5) { 
    previousDistance = distance;
    Serial.println("Motion detected!");
    return true;
  }
}
void sendPostRequest(int room_id, int sensor_id, String location) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin("https://esp.up.railway.app/registers");
    http.addHeader("Content-Type", "application/json");

    String payload = "{\"room_id\":" + String(room_id) + 
                     ", \"sensor_id\":" + String(sensor_id) + 
                     ", \"location\":\"" + location + "\"}";

    int httpResponseCode = http.POST(payload);

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println(httpResponseCode);
      Serial.println(response);
    } else {
      Serial.print("Error on sending POST: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  } else {
    Serial.println("WiFi Disconnected");
  }
}

int lastPostTime = 0;

void setup() {
  pinMode(echo, INPUT);
  pinMode(trigger, OUTPUT);
}

void loop() {
  if (checkForMovement() == true){
      unsigned long currentTime = millis();
      if (currentTime - lastPostTime > 10000) {
        sendPostRequest(1, 1, "Living Room");
      Serial.println("Post request sent");
      lastPostTime = currentTime;
    }
  }
}
