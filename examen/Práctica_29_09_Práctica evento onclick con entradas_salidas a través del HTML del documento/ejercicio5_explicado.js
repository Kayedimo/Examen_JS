// ============================================================
// EJERCICIO 5: Tres Dados con Suma Total
// ============================================================

// ============================================================
// 🎯 OBJETIVO:
// ============================================================
// Aprender a:
// 1. Usar VARIABLES GLOBALES para guardar datos entre funciones
// 2. Actualizar solo UNA parte y mantener el resto
// 3. Calcular sumas


// ============================================================
// 💡 CONCEPTO: Variables Globales
// ============================================================
// Una variable GLOBAL es como una pizarra en la pared:
// - Todas las funciones pueden leerla
// - Todas las funciones pueden escribir en ella
// - El valor NO se borra cuando termina una función
//
// Variable GLOBAL (fuera de funciones):
// let dado1 = 0;  // Todos pueden verla
//
// Variable LOCAL (dentro de funciones):
// function algo() {
//     let dado1 = 0;  // Solo esta función la ve
// }


// ============================================================
// 📝 VARIABLES GLOBALES: Guardamos los 3 dados
// ============================================================
// Estas variables están FUERA de las funciones
// Por eso TODAS las funciones pueden usarlas

// Al principio, los 3 dados valen 0
let dado1 = 0;
let dado2 = 0;
let dado3 = 0;


// ============================================================
// 💡 EXPLICACIÓN ESTILO FEYNMAN
// ============================================================
// Imagina que tienes 3 cajas en tu mesa:
// 
// Caja 1: Guarda el número del dado 1
// Caja 2: Guarda el número del dado 2  
// Caja 3: Guarda el número del dado 3
//
// Al principio todas tienen 0
//
// Cuando pulsas "Dado 1":
// - Lanzas un dado → sale 5
// - Cambias el número de Caja 1 a 5
// - Las otras cajas NO se tocan (siguen con su número)
//
// Luego muestras: Caja1=5, Caja2=0, Caja3=0, Suma=5


// ============================================================
// FUNCIÓN: lanzarDado1()
// ============================================================

function lanzarDado1() {
    // PASO 1: Generar número aleatorio 1-6
    dado1 = Math.floor(Math.random() * 6) + 1;
    
    // PASO 2: Mostrar los resultados
    // dado2 y dado3 NO cambian, se quedan como estaban
    mostrarResultados();
}


// ============================================================
// FUNCIÓN: lanzarDado2()
// ============================================================

function lanzarDado2() {
    // PASO 1: Generar número aleatorio 1-6
    dado2 = Math.floor(Math.random() * 6) + 1;
    
    // PASO 2: Mostrar los resultados
    // dado1 y dado3 NO cambian
    mostrarResultados();
}


// ============================================================
// FUNCIÓN: lanzarDado3()
// ============================================================

function lanzarDado3() {
    // PASO 1: Generar número aleatorio 1-6
    dado3 = Math.floor(Math.random() * 6) + 1;
    
    // PASO 2: Mostrar los resultados
    // dado1 y dado2 NO cambian
    mostrarResultados();
}


// ============================================================
// FUNCIÓN: mostrarResultados()
// ============================================================
// Esta función muestra los 3 dados y la suma

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


// ============================================================
// 🔍 EJEMPLO PASO A PASO:
// ============================================================

// INICIO:
// dado1 = 0
// dado2 = 0
// dado3 = 0

// Usuario pulsa "Dado 1":
// 1. Se ejecuta lanzarDado1()
// 2. dado1 = 4 (número aleatorio)
// 3. Se ejecuta mostrarResultados()
// 4. suma = 4 + 0 + 0 = 4
// 5. Muestra: Dado1=4, Dado2=0, Dado3=0, Suma=4

// Usuario pulsa "Dado 3":
// 1. Se ejecuta lanzarDado3()
// 2. dado3 = 6 (número aleatorio)
// 3. Se ejecuta mostrarResultados()
// 4. suma = 4 + 0 + 6 = 10
// 5. Muestra: Dado1=4, Dado2=0, Dado3=6, Suma=10

// Usuario pulsa "Dado 2":
// 1. Se ejecuta lanzarDado2()
// 2. dado2 = 2 (número aleatorio)
// 3. Se ejecuta mostrarResultados()
// 4. suma = 4 + 2 + 6 = 12
// 5. Muestra: Dado1=4, Dado2=2, Dado3=6, Suma=12


// ============================================================
// 📊 VARIABLES GLOBALES vs LOCALES
// ============================================================

// GLOBALES (fuera de funciones):
let global1 = 10;
let global2 = 20;

function funcionA() {
    console.log(global1); // ✓ Puede leer global1
    global2 = 30; // ✓ Puede cambiar global2
}

function funcionB() {
    console.log(global1); // ✓ También puede leer global1
    console.log(global2); // ✓ Ve el cambio (30, no 20)
}


// LOCALES (dentro de funciones):
function funcionC() {
    let local1 = 5; // Solo existe aquí
}

function funcionD() {
    console.log(local1); // ❌ ERROR: local1 no existe aquí
}


// ============================================================
// 📌 RESUMEN PARA EL EXAMEN:
// ============================================================

// Variable GLOBAL:
// - Se declara FUERA de las funciones
// - TODAS las funciones pueden verla y cambiarla
// - NO se borra cuando termina una función

// Variable LOCAL:
// - Se declara DENTRO de una función
// - SOLO esa función puede verla
// - Se borra cuando termina la función

// CUÁNDO USAR CADA UNA:
// - Global: Cuando necesitas compartir datos entre funciones
// - Local: Para datos temporales que solo usa una función


// ============================================================
// 🧪 PRUEBA:
// ============================================================
// 1. Pulsa "Dado 1" → debería mostrar un número del 1-6
// 2. Pulsa "Dado 2" → Dado 1 NO cambia, Dado 2 sí
// 3. Pulsa "Dado 3" → Dado 1 y 2 NO cambian, Dado 3 sí
// 4. La suma debe actualizarse siempre