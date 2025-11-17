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
        
        // Convierte milisegundos a segundos totales
        const segundosTotales = Math.floor(diferencia / 1000);
        
        // Calcula horas, minutos y segundos
        const horas = Math.floor(segundosTotales / 3600);
        const minutos = Math.floor((segundosTotales % 3600) / 60);
        const segundos = segundosTotales % 60;
        
        // Formatea con dos dígitos (00, 01, 02, etc.)
        const horasFormateadas = String(horas).padStart(2, '0');
        const minutosFormateados = String(minutos).padStart(2, '0');
        const segundosFormateados = String(segundos).padStart(2, '0');
        
        // Muestra el tiempo en formato hh:mm:ss
        resultado.textContent = `Tiempo transcurrido: ${horasFormateadas}:${minutosFormateados}:${segundosFormateados}`;
    }
}

// Cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el botón
    const boton = document.getElementById('boton');
    // Agrega el evento click al botón
    boton.addEventListener('click', pulsarBoton);
});