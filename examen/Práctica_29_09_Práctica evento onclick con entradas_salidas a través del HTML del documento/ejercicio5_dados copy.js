// 5. Dados
// Crea un formulario con tres botones que lancen dados de 6 caras.
// Cada vez que se pulse uno de los botones se mostrará abajo su resultado, con los
// resultados obtenidos del lanzamiento de los otros dos dados (inicialmente valdrán 0).
// Al pulsar cualquiera de ellos se mostrará la suma de todas las caras.

// Variables para guardar el valor de cada dado
let dado1 = 0;
let dado2 = 0;
let dado3 = 0;

// Función para lanzar el dado correspondiente
function lanzarDado(num) {
    // Genera un número aleatorio entre 1 y 6
    let valor = Math.floor(Math.random() * 6) + 1;
    if (num === 1) dado1 = valor;
    if (num === 2) dado2 = valor;
    if (num === 3) dado3 = valor;
    mostrarResultado();
}

// Función para mostrar el resultado y la suma
function mostrarResultado() {
    let suma = dado1 + dado2 + dado3;
    // Muestra los valores y la suma en el formato solicitado
    document.getElementById('resultado').innerHTML =
        `<span>${dado1}</span> <span class='simbolo'>+</span> <span>${dado2}</span> <span class='simbolo'>+</span> <span>${dado3}</span> <span class='simbolo'>=</span> <span>${suma}</span>`;
}
// Inicializa la visualización al cargar la página
mostrarResultado();