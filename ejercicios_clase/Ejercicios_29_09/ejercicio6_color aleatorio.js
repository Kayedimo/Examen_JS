// 6. Color aleatorio
// Crea un formulario con tres botones que lancen dados de 256 caras (del 0 al 255).
// Como en el ejercicio anterior, cada vez que se pulse uno de los botones se 
// mostrará abajo su resultado (inicialmente valdrán 0).
// También, al pulsar cualquiera de ellos se mostrará en un <div> el color 
// resultante de combinar esos tres valores
// (estilo CSS: background-color: rgb(dado1, dado2, dado3) ).

// Variables para guardar el valor de cada color
let rojo = 0;
let verde = 0;
let azul = 0;

// Función para lanzar el dado correspondiente (0-255)
function lanzarColor(num) {
    let valor = Math.floor(Math.random() * 256); // Número aleatorio entre 0 y 255
    if (num === 1) rojo = valor;
    if (num === 2) verde = valor;
    if (num === 3) azul = valor;
    mostrarColor();
}

// Función para mostrar los valores y el color
function mostrarColor() {
    document.getElementById('valor-rojo').innerHTML = rojo;
    document.getElementById('valor-verde').innerHTML = verde;
    document.getElementById('valor-azul').innerHTML = azul;
    document.getElementById('colorbox').style.backgroundColor = `rgb(${rojo},${verde},${azul})`;
}
// Inicializa la visualización al cargar la página
mostrarColor();
