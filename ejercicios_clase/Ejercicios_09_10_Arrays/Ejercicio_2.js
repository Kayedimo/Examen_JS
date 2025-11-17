// Creamos el array con 50 elementos, todos inicialmente en false
const miArray = new Array(50).fill(false);

// 🔁 Recorremos el array usando un bucle for(;;)
let i = 0;
for (;;) {
  // Condición de salida del bucle
    if (i >= miArray.length) break;

  // Modificamos el valor del array en la posición i: lo reemplazamos por i³
  miArray[i] = Math.pow(i, 3); // También se puede usar: i * i * i

    i++;
}

// Mostramos los nuevos valores en pantalla
const contenedor = document.getElementById("resultado");

miArray.forEach((valor, indice) => {
    const elemento = document.createElement("p");
    elemento.textContent = `Índice ${indice} → ${valor}`;
    contenedor.appendChild(elemento);
});