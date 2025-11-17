// Creamos un array con los días de la semana
const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Obtenemos el contenedor donde mostraremos los días
const contenedor = document.getElementById("resultado");

// Usamos el bucle for...of para recorrer directamente los valores del array
for (let dia of dias) {
  // Creamos un elemento <p> para mostrar el día
    const elemento = document.createElement("p");
    elemento.textContent = `Día: ${dia}`;

  // Lo agregamos al contenedor
    contenedor.appendChild(elemento);
}