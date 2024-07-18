#include <iostream>
#include <vector>
#include <map>
#include <algorithm>

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