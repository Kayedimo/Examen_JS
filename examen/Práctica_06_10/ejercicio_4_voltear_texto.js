// Función que invierte un texto
function reverse(texto) {
    // Convierte el texto en un array de caracteres
    // Ejemplo: "hola" -> ["h", "o", "l", "a"]
    const arrayCaracteres = texto.split('');
    
    // Invierte el orden del array
    // Ejemplo: ["h", "o", "l", "a"] -> ["a", "l", "o", "h"]
    const arrayInvertido = arrayCaracteres.reverse();
    
    // Une los caracteres en un string
    // Ejemplo: ["a", "l", "o", "h"] -> "aloh"
    const textoInvertido = arrayInvertido.join('');
    
    // Retorna el texto invertido
    return textoInvertido;
}

// Función que se ejecuta al pulsar el botón
function invertirTexto() {
    // Obtiene el input
    const input = document.getElementById('textoInput');
    // Obtiene el div resultado
    const resultado = document.getElementById('resultado');
    
    // Obtiene el texto del input
    const textoOriginal = input.value;
    
    // Llama a la función reverse para invertir el texto
    const textoInvertido = reverse(textoOriginal);
    
    // Muestra el resultado
    resultado.textContent = textoInvertido;
}

// Cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el botón
    const boton = document.getElementById('botonInvertir');
    // Agrega el evento click al botón
    boton.addEventListener('click', invertirTexto);
});