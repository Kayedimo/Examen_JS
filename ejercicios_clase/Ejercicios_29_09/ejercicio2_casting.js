// 2. Casting
// Crea un formulario con dos campos numéricos y un botón, // de manera que al
// pulsar el botón nos muestre la suma en un <h1>.

// Función para sumar dos números del formulario y mostrar el resultado
function mostrarSuma() {
    // Obtenemos los valores de los inputs y los convertimos a número
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var suma = num1 + num2;
    // Mostramos el resultado en el h1 con id 'resultado'
    document.getElementById('resultado').innerHTML = suma;
}