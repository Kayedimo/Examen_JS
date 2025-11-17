// Función que crea el tablero de buscaminas
function initBuscamines(filas, columnas, minas) {
  // Creamos un tablero vacío con ceros
  const tablero = [];

  for (let i = 0; i < filas; i++) {
    const fila = [];
    for (let j = 0; j < columnas; j++) {
      fila.push(0); // Ponemos un 0 en cada casilla
    }
    tablero.push(fila); // Añadimos la fila al tablero
  }

  // Colocamos las minas aleatoriamente
  let colocadas = 0;
  while (colocadas < minas) {
    // Elegimos una posición aleatoria
    const x = Math.floor(Math.random() * filas);
    const y = Math.floor(Math.random() * columnas);

    // Si esa casilla no tiene mina, la colocamos
    if (tablero[x][y] !== "*") {
      tablero[x][y] = "*";
      colocadas++; // Contamos una mina más
    }
  }

  return tablero; // Devolvemos el tablero completo
}

// Función para mostrar el tablero en pantalla
function showArray(arr) {
  let salida = "";

  for (let i = 0; i < arr.length; i++) {
    salida += arr[i].join(" ") + "\n"; // Unimos los elementos con espacio
  }

  document.getElementById("resultado").textContent = salida.trim();
}

// Creamos un tablero de 7 filas, 11 columnas y 15 minas
const tablero = initBuscamines(7, 11, 15);
showArray(tablero);

/**
Frase guía para examen:
“Creo un array con ceros, luego coloco minas aleatorias usando Math.random() y lo muestro con join().”

Notas clave:
- Math.random() genera números aleatorios entre 0 y 1.
- Math.floor() redondea hacia abajo para obtener posiciones enteras.
- while se repite hasta que se colocan todas las minas.
- join(" ") convierte una fila en texto con espacios.
- textContent muestra el tablero en pantalla.
 */

/**
 * Este ejercicio consiste en crear una función que genere un tablero de buscaminas: un array de dos dimensiones con minas (*) y casillas vacías (0). Tú decides cuántas filas, columnas y minas quieres, y el programa las reparte aleatoriamente.

¿Qué hace el ejercicio?
Crea una función llamada initBuscamines(filas, columnas, minas) que devuelve un array bidimensional con:
- filas y columnas según lo que tú digas.
- minas colocadas aleatoriamente como *.
- El resto de casillas son 0.
Luego usamos showArray() para visualizar el tablero como en la imagen.

 * 
 */