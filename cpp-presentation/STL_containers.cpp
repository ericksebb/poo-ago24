//  STL Stands for Standard Template Libraries (Librerías de Plantillas Estándar)

#include <iostream>
#include <vector>
#include <map>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <algorithm>

// Existen tres tipos de contenedores:

// Contenedores de Secuencia: vector
// Contenedores Asociativos:
// Contenedores No Ordenados



// Ejemplo de uso del contenedor vector
void ejemploVector() {

    // Crear un vector de enteros con elementos iniciales uwu
    std::vector<int> numeros = {1, 2, 3, 4, 5};

    // 
    numeros.push_back(6);
    
    // 
    std::cout << "Elementos del vector: ";
    for (const auto& num : numeros) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
}


// Ejemplo de uso del contenedor map
void ejemploMap() {
    // Crear un map que asocia cadenas (nombres) con enteros (edades)
    std::map<std::string, int> edades;
    // Asignar valores al map
    edades["Alice"] = 30;
    edades["Bob"] = 25;
    
    // Imprimir los elementos del map
    std::cout << "Elementos del map: ";
    for (const auto& par : edades) {
        std::cout << par.first << ": " << par.second << " ";
    }
    std::cout << std::endl; // Nueva línea al final de la salida
}


// Ejemplo de uso del contenedor unordered_map
void ejemploUnorderedSet() {
    // Crear un unordered_set de enteros
    std::unordered_set<int> numeros = {1, 2, 3, 4, 5};
    // Agregar un elemento al unordered_set
    numeros.insert(6);

    // Intentar agregar un elemento duplicado (no se añadirá)
    numeros.insert(3);

    // Imprimir los elementos del unordered_set
    std::cout << "Elementos del unordered_set: ";
    for (const auto& num : numeros) {
        std::cout << num << " ";
    }
    std::cout << std::endl; // Nueva línea al final de la salida
}



// Algoritmos:

// Ejemplo de uso de algoritmos estándar con contenedores de la STL
void ejemploAlgoritmos() {
    // Crear un vector de enteros desordenados
    std::vector<int> numeros = {4, 2, 5, 1, 3};
    // Ordenar el vector usando el algoritmo sort
    std::sort(numeros.begin(), numeros.end());
    
    // Imprimir el vector ordenado
    std::cout << "Vector ordenado: ";
    for (const auto& num : numeros) {
        std::cout << num << " ";
    }
    std::cout << std::endl; // Nueva línea al final de la salida
    
    // Buscar un valor en el vector usando el algoritmo find
    auto it = std::find(numeros.begin(), numeros.end(), 3);
    if (it != numeros.end()) {
        // Imprimir la posición del valor encontrado
        std::cout << "Encontrado el 3 en la posición: " << std::distance(numeros.begin(), it) << std::endl;
    } else {
        // Indicar que el valor no fue encontrado
        std::cout << "El 3 no fue encontrado" << std::endl;
    }
}

// Función principal que llama a los ejemplos
int main() {
    ejemploVector();     // Llamar al ejemplo del vector
    ejemploMap();        // Llamar al ejemplo del map
    ejemploAlgoritmos(); // Llamar al ejemplo de algoritmos
    return 0;            // Indicar que el programa terminó correctamente
}