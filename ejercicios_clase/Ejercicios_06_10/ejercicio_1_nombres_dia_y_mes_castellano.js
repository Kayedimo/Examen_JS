// Array con los nombres de los días de la semana en castellano
// Índice 0=domingo, 1=lunes, 2=martes, etc.
const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

// Array con los nombres de los meses en castellano
// Índice 0=enero, 1=febrero, 2=marzo, etc.
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

// Función que muestra la fecha en formato castellano
function mostrarFecha() {
    // Obtiene el elemento input de fecha del DOM
    const inputFecha = document.getElementById('inputFecha');
    // Obtiene el elemento div donde se mostrará el resultado
    const resultado = document.getElementById('resultado');
    
    // Obtiene el valor del input (formato YYYY-MM-DD, ejet fechmplo: "2025-10-06")
    const valorFecha = inputFecha.value;
    
    // Verifica que haya una fecha seleccionada
    if (valorFecha) {
        // Crea un objeto Date con la fecha seleccionada
        // Se agrega "T00:00:00" para evitar problemas de zona horaria
        const fecha = new Date(valorFecha + "T00:00:00");
        
        // Obtiene el día del mes (1-31)
        const numeroDia = fecha.getDate();
        // Obtiene el número de mes (0-11, donde 0=enero)
        const numeroMes = fecha.getMonth();
        // Obtiene el año (ejemplo: 2025)
        const año = fecha.getFullYear();
        
        // Obtiene el día de la semana (0-6, donde 0=domingo, 1=lunes, etc.)
        const diaSemana = fecha.getDay();
        
        // Obtiene el nombre del día usando el array dias
        const nombreDia = dias[diaSemana];
        // Obtiene el nombre del mes usando el array meses
        const nombreMes = meses[numeroMes];
        
        // Construye el texto y lo muestra en el div resultado
        // Ejemplo: "El 6 de octubre del 2025 es lunes"
        resultado.textContent = `El ${numeroDia} de ${nombreMes} del ${año} es ${nombreDia}`;
    }
}

// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el elemento input de fecha
    const inputFecha = document.getElementById('inputFecha');
    
    // Muestra la fecha inicial (la que viene por defecto en el input)
    mostrarFecha();
    
    // Agrega un evento que se ejecuta cuando cambia la fecha (al perder el foco)
    inputFecha.addEventListener('change', mostrarFecha);
    // Agrega un evento que se ejecuta al escribir o cambiar la fecha
    inputFecha.addEventListener('input', mostrarFecha);
});