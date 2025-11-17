// Esta función se llama cambiarColor y se ejecuta cuando el usuario elige un color en el menú desplegable
function cambiarColor() {

    // Paso 1: accedemos al elemento <select> que tiene los colores disponibles
    // Lo buscamos por su ID "color-select"
    const selector = document.getElementById("color-select");

    // Paso 2: accedemos al elemento que queremos cambiar de color
    // Lo buscamos por su ID "color-box"
    const caja = document.getElementById("color-box");

    // Paso 3: obtenemos el valor actual seleccionado en el menú
    // Por ejemplo: "red", "blue", "green", etc.
    const colorElegido = selector.value;

    // Paso 4: aplicamos ese color como fondo de la caja
    // Usamos style.backgroundColor para cambiar el color visualmente
    caja.style.backgroundColor = colorElegido;
}

/*
Frase guía para examen:
“Busco el color elegido en el menú y lo aplico como fondo a la caja usando .style.backgroundColor.”

Notas clave:
- getElementById("...") sirve para acceder a elementos HTML por su ID.
- .value obtiene lo que el usuario ha seleccionado.
- .style.backgroundColor cambia el color de fondo del elemento.
¿Quieres que lo conectemos con un HTML de ejemplo para que lo puedas probar y defender en clase? Puedo ayudarte a armarlo paso a paso.

*/