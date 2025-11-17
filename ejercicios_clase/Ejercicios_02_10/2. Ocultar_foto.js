const imagen = document.getElementById("harry");
const boton = document.getElementById("mostrarBtn");

// Al hacer clic en la imagen, se oculta
imagen.addEventListener("click", function () {
    imagen.style.display = "none";
});

// Al hacer clic en el botón, se vuelve a mostrar
boton.addEventListener("click", function () {
    imagen.style.display = "block";
});