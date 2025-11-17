// Creamos un array con los días de la semana
const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Obtenemos el contenedor donde mostraremos los días
const contenedor = document.getElementById("resultado");

// Usamos un bucle for(;;) para recorrer el array
let i = 0;
for (;;) {
    // Condición de salida: cuando llegamos al final del array
    if (i >= dias.length) break;

  // Creamos un elemento <p> para mostrar el día
    const elemento = document.createElement("p");
    elemento.textContent = `Día ${i + 1}: ${dias[i]}`;

    // Lo agregamos al contenedor
    contenedor.appendChild(elemento);

    // ➕ Incrementamos el contador
    i++;
}