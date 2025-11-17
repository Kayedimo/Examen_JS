// Función que genera un array triangular con tantas filas como indique el argumento
function crearArrayTriangular(filas) {
  const resultado = []; // Creamos un array vacío que guardará todas las filas

  // Repetimos el proceso tantas veces como filas se pidan
  for (let i = 1; i <= filas; i++) {
    const fila = []; // Creamos una fila nueva vacía

    // En cada fila, agregamos los números del 1 hasta el número de fila actual
    for (let j = 1; j <= i; j++) {
      fila.push(j); // Añadimos el número j a la fila
    }

    resultado.push(fila); // Añadimos la fila completa al array principal
  }

  return resultado; // Devolvemos el array triangular completo
}

// Función que muestra los elementos del array en pantalla
function showArray(arr) {
  let salida = ""; // Variable para acumular el texto que se mostrará

  // Recorremos cada fila del array
  for (let i = 0; i < arr.length; i++) {
    salida += arr[i].join(", ") + "\n"; // Convertimos la fila en texto y la añadimos
  }

  // Mostramos el resultado en el elemento <pre>
  document.getElementById("resultado").textContent = salida.trim();
}

// Ejecutamos el ejemplo con 4 filas
const x = crearArrayTriangular(4);
showArray(x);

/**
“Uso dos bucles: el externo crea cada fila, el interno llena esa fila con números del 1 al i. 
Luego lo muestro con join() y salto de línea.”
 */