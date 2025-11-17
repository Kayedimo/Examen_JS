// Creamos el tablero con minas
function initBuscamines(filas, columnas, minas) {
  const tablero = [];

  // Paso 1: rellenamos el tablero con ceros
  for (let i = 0; i < filas; i++) {
    const fila = [];
    for (let j = 0; j < columnas; j++) {
      fila.push(0); // cada casilla empieza con 0
    }
    tablero.push(fila);
  }

  // Paso 2: colocamos las minas aleatoriamente
  let colocadas = 0;
  while (colocadas < minas) {
    const x = Math.floor(Math.random() * filas);
    const y = Math.floor(Math.random() * columnas);

    if (tablero[x][y] !== "*") {
      tablero[x][y] = "*";
      colocadas++;
    }
  }

  // Paso 3: contamos las minas alrededor de cada casilla
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (tablero[i][j] === "*") continue; // si es mina, no contamos

      let contador = 0;

      // Recorremos las 8 casillas vecinas
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          if (dx === 0 && dy === 0) continue; // saltamos la casilla actual

          const ni = i + dx;
          const nj = j + dy;

          // Verificamos que la vecina esté dentro del tablero
          if (ni >= 0 && ni < filas && nj >= 0 && nj < columnas) {
            if (tablero[ni][nj] === "*") {
              contador++; // si hay mina, sumamos
            }
          }
        }
      }

      tablero[i][j] = contador; // guardamos el número de minas vecinas
    }
  }

  return tablero;
}

// Mostramos el tablero en pantalla
function showArray(arr) {
  let salida = "";
  for (let i = 0; i < arr.length; i++) {
    salida += arr[i].join(" ") + "\n";
  }
  document.getElementById("resultado").textContent = salida.trim();
}

// Creamos y mostramos el tablero
const tablero = initBuscamines(7, 10, 15);
showArray(tablero);