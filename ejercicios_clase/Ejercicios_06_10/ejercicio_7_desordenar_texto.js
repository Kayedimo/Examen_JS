// Función auxiliar para intercambiar dos caracteres en posiciones n y m
function swap(texto, n, m) {
    // Convierte el texto en un array de caracteres
    const arrayCaracteres = texto.split('');
    
    // Guarda temporalmente el carácter en la posición n
    const temp = arrayCaracteres[n];
    
    // Coloca el carácter de la posición m en la posición n
    arrayCaracteres[n] = arrayCaracteres[m];
    
    // Coloca el carácter temporal (que era n) en la posición m
    arrayCaracteres[m] = temp;
    
    // Une los caracteres en un string y lo retorna
    return arrayCaracteres.join('');
}

// Función que desordena un texto de manera aleatoria
function mess(text) {
    // Variable para almacenar el texto desordenado
    let textoDesordenado = text;
    
    // Recorre cada posición del texto (del primero al último)
    for (let i = 0; i < text.length; i++) {
        // Genera una posición aleatoria entre 0 y la longitud del texto
        // Math.random() genera un número entre 0 y 1
        // Multiplicamos por text.length para obtener un rango de 0 a longitud
        // Math.floor() redondea hacia abajo para obtener un número entero
        const posicionAleatoria = Math.floor(Math.random() * text.length);
        
        // Intercambia el carácter en la posición i con el de la posición aleatoria
        textoDesordenado = swap(textoDesordenado, i, posicionAleatoria);
    }
    
    // Retorna el texto desordenado
    return textoDesordenado;
}

// Función que se ejecuta al pulsar el botón
function desordenarTexto() {
    // Obtiene el input
    const input = document.getElementById('textoInput');
    // Obtiene el div resultado
    const resultado = document.getElementById('resultado');
    
    // Obtiene el texto del input
    const textoOriginal = input.value;
    
    // Llama a la función mess para desordenar el texto
    const textoDesordenado = mess(textoOriginal);
    
    // Muestra el resultado
    resultado.textContent = textoDesordenado;
}

// Cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el botón
    const boton = document.getElementById('botonDesordenar');
    // Agrega el evento click al botón
    boton.addEventListener('click', desordenarTexto);
});