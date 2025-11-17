// Función que muestra los elementos de un array de 1 o 2 dimensiones
function showArray(arr) {
  let salida = ""; // Variable para acumular el texto que se mostrará

  // Recorremos cada elemento del array principal
  for (let i = 0; i < arr.length; i++) {
    // Si el elemento es otro array (subarray), lo recorremos
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        salida += arr[i][j] + " ";
      }
      salida += "\n"; // Salto de línea después de cada subarray
    } else {
      // Si es un valor simple, lo añadimos directamente
      salida += arr[i] + " ";
    }
  }

  // Mostramos el resultado en el elemento <pre>
  document.getElementById("resultado").textContent = salida.trim();
}

// Ejemplos de prueba
const uno = [1, 2, 2];
const dos = [[1, 2], [1, 2, 3], [1, 2, 3, 4]];

// Puedes probar uno u otro
showArray(uno);
showArray(dos);

/**
 * Frase guía para examen:
“Uso Array.isArray() para detectar subarrays y recorrerlos con doble bucle. 
Acumulo el resultado en una cadena y lo muestro con textContent.”
 */