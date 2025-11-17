// 3. Dado y dado alfabético
// Crea un formulario con dos botones, al pulsar uno nos mostrará un número 
// aleatorio del 1 al 6. Al pulsar el otro botón nos mostrará una letra aleatoria.

// Función que muestra un número aleatorio del 1 al 6
function mostrarNumero() {
    // Math.random() genera un número decimal entre 0 y 1
    // Multiplicamos por 6 para obtener un rango de 0 a 5.999...
    // Math.floor redondea hacia abajo, así obtenemos un entero entre 0 y 5
    // Sumamos 1 para que el rango sea de 1 a 6
    var numero = Math.floor(Math.random() * 6) + 1;
    // Mostramos el número en el div con id 'resultado-num'
    document.getElementById('resultado-num').innerHTML = numero;
}

// Función que muestra una letra aleatoria de la A a la Z
function mostrarLetra() {
    // Creamos un string con todas las letras mayúsculas
    var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Math.random() * letras.length da un número entre 0 y 25.999...
    // Math.floor redondea hacia abajo, obteniendo un índice entre 0 y 25
    var letra = letras[Math.floor(Math.random() * letras.length)];
    // Mostramos la letra en el div con id 'resultado-letra'
    document.getElementById('resultado-letra').innerHTML = letra;
}