// ============================================================
// EJERCICIO 5: Tres Dados con Suma Total
// ============================================================

// VARIABLES GLOBALES: Fuera de las funciones
// Todas las funciones pueden verlas y cambiarlas
let dado1 = 0;
let dado2 = 0;
let dado3 = 0;

function lanzarDado1() {
    // Generar número aleatorio 1-6
    dado1 = Math.floor(Math.random() * 6) + 1;
    
    // Mostrar los resultados
    mostrarResultados();
}

function lanzarDado2() {
    // Generar número aleatorio 1-6
    dado2 = Math.floor(Math.random() * 6) + 1;
    
    // Mostrar los resultados
    mostrarResultados();
}

function lanzarDado3() {
    // Generar número aleatorio 1-6
    dado3 = Math.floor(Math.random() * 6) + 1;
    
    // Mostrar los resultados
    mostrarResultados();
}

function mostrarResultados() {
    // PASO 1: Calcular la suma de los 3 dados
    let suma = dado1 + dado2 + dado3;
    
    // PASO 2: Crear el mensaje HTML
    let mensaje = `
        <h2>Resultados:</h2>
        <p>🎲 Dado 1: ${dado1}</p>
        <p>🎲 Dado 2: ${dado2}</p>
        <p>🎲 Dado 3: ${dado3}</p>
        <h3>Suma total: ${suma}</h3>
    `;
    
    // PASO 3: Mostrar el mensaje
    document.getElementById("resultados").innerHTML = mensaje;
}

// CONCEPTO CLAVE:
// Variables GLOBALES = fuera de funciones
// Todas las funciones pueden usarlas
// NO se borran cuando termina una función