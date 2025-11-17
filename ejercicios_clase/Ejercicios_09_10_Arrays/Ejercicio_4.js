// Creamos un array con los días de la semana
const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Obtenemos el contenedor donde mostraremos los días
const contenedor = document.getElementById("resultado");

// Usamos el bucle for...in para recorrer los índices del array
for (let indice in dias) {
  // Creamos un elemento <p> para mostrar el día correspondiente al índice
    const elemento = document.createElement("p");
    elemento.textContent = `Día ${parseInt(indice) + 1}: ${dias[indice]}`;

    // Lo agregamos al contenedor
    contenedor.appendChild(elemento);
}