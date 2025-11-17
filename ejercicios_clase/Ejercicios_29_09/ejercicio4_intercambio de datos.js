// 4. Intercambio de datos
// Crea un formulario con dos cuadros de texto y dos botones.
// - Al pulsar uno de los botones se escribirá el texto de un cuadro de texto en el 
// otro, borrándose éste.
// - Y viceversa, al pulsar el otro botón se copiará el texto en el otro sentido.

// Copia el texto de la caja1 a la caja2 y borra la caja1
function copiarDerecha() {
    var texto = document.getElementById('caja1').value; // Obtiene el texto de la primera caja
    document.getElementById('caja2').value = texto;     // Lo pone en la segunda caja
    document.getElementById('caja1').value = '';        // Borra la primera caja
}

// Copia el texto de la caja2 a la caja1 y borra la caja2
function copiarIzquierda() {
    var texto = document.getElementById('caja2').value; // Obtiene el texto de la segunda caja
    document.getElementById('caja1').value = texto;     // Lo pone en la primera caja
    document.getElementById('caja2').value = '';        // Borra la segunda caja
}
