// Variable para almacenar el tiempo inicial (en milisegundos)
let tiempoInicio = null;

// Función que se ejecuta al pulsar el botón
function pulsarBoton() {
    // Obtiene el div donde se muestra el resultado
    const resultado = document.getElementById('resultado');
    // Obtiene el botón
    const boton = document.getElementById('boton');
    
    // Si es la primera vez que se pulsa
    if (tiempoInicio === null) {
        // Guarda el tiempo actual en milisegundos desde 1-ene-1970
        tiempoInicio = Date.now();
        // Muestra el mensaje inicial
        resultado.textContent = 'Cronómetro iniciado';
        // Cambia el texto del botón
        boton.textContent = 'Púlsame';
    } else {
        // Si ya se había pulsado antes
        // Obtiene el tiempo actual
        const tiempoActual = Date.now();
        // Calcula la diferencia en milisegundos
        const diferencia = tiempoActual - tiempoInicio;
        
        // Convierte los milisegundos a segundos (dividir entre 1000)
        const segundos = Math.floor(diferencia / 1000);
        // Obtiene los milisegundos restantes
        const milisegundos = diferencia % 1000;
        
        // Muestra el tiempo transcurrido
        resultado.textContent = `Tiempo transcurrido: ${segundos} segundos y ${milisegundos} milisegundos`;
    }
}

// Cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el botón
    const boton = document.getElementById('boton');
    // Agrega el evento click al botón
    boton.addEventListener('click', pulsarBoton);
});