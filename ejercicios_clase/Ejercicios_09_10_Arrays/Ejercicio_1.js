// Creamos un array de 50 elementos, todos inicializados en false
const miArray = new Array(50).fill(false);

// Obtenemos el contenedor del HTML donde mostraremos los resultados
const contenedor = document.getElementById("resultado");

// Usamos un bucle for(;;), que es un bucle infinito, pero lo controlamos con una condición interna
let i = 0; // Inicializamos el contador

for (;;) {
  // Condición de salida: si el contador llega al tamaño del array, rompemos el bucle
    if (i >= miArray.length) break;

    // reamos un nuevo elemento <p> para mostrar el valor del array en esa posición
    const elemento = document.createElement("p");

    // Le damos contenido al párrafo con el índice y el valor correspondiente
    elemento.textContent = `Elemento ${i}: ${miArray[i]}`;

    // Lo agregamos al contenedor para que aparezca en la página
    contenedor.appendChild(elemento);

    // ➕ Incrementamos el contador para pasar al siguiente elemento
    i++;
}