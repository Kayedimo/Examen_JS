// ============================================================
// EJERCICIO 4: Intercambio de Datos entre Inputs
// ============================================================

// ============================================================
// 🎯 OBJETIVO:
// ============================================================
// Aprender a:
// 1. LEER el valor de un input
// 2. ESCRIBIR un valor en un input
// 3. BORRAR el contenido de un input


// ============================================================
// 💡 CONCEPTO: Leer vs Escribir en Inputs
// ============================================================
// 
// LEER (obtener lo que hay escrito):
// let valor = document.getElementById("miInput").value;
//
// ESCRIBIR (poner texto en el input):
// document.getElementById("miInput").value = "nuevo texto";
//
// BORRAR (dejar vacío):
// document.getElementById("miInput").value = "";


// ============================================================
// 💡 EXPLICACIÓN ESTILO FEYNMAN
// ============================================================
// Imagina dos cajas de zapatos:
// 
// Caja 1: Tiene una nota que dice "Hola"
// Caja 2: Está vacía
//
// COPIAR de Caja 1 a Caja 2:
// 1. Lees lo que dice la nota de Caja 1: "Hola"
// 2. Escribes "Hola" en una nota nueva
// 3. Metes la nota nueva en Caja 2
// 4. Sacas la nota vieja de Caja 1 (la dejas vacía)
//
// Resultado:
// Caja 1: Vacía
// Caja 2: "Hola"


// ============================================================
// FUNCIÓN 1: copiarADerecha()
// ============================================================
// Copia el texto de texto1 a texto2
// Y borra texto1

function copiarADerecha() {
    // PASO 1: Leer lo que hay en texto1
    // Esto OBTIENE el texto, no lo borra
    let contenido = document.getElementById("texto1").value;
    
    // PASO 2: Escribir ese texto en texto2
    // Esto PONE el texto en texto2
    document.getElementById("texto2").value = contenido;
    
    // PASO 3: Borrar texto1
    // Esto VACÍA texto1 (lo deja en blanco)
    document.getElementById("texto1").value = "";
}


// ============================================================
// FUNCIÓN 2: copiarAIzquierda()
// ============================================================
// Copia el texto de texto2 a texto1
// Y borra texto2

function copiarAIzquierda() {
    // PASO 1: Leer lo que hay en texto2
    let contenido = document.getElementById("texto2").value;
    
    // PASO 2: Escribir ese texto en texto1
    document.getElementById("texto1").value = contenido;
    
    // PASO 3: Borrar texto2
    document.getElementById("texto2").value = "";
}


// ============================================================
// 🔍 EJEMPLO PASO A PASO:
// ============================================================

// SITUACIÓN INICIAL:
// texto1: "Hola mundo"
// texto2: ""

// Usuario pulsa el botón "→→"
// Se ejecuta copiarADerecha():

// 1. contenido = "Hola mundo" (lee texto1)
// 2. texto2.value = "Hola mundo" (escribe en texto2)
// 3. texto1.value = "" (borra texto1)

// SITUACIÓN FINAL:
// texto1: ""
// texto2: "Hola mundo"


// ============================================================
// 📊 DIFERENCIA: innerHTML vs value
// ============================================================

// .innerHTML → Para elementos HTML (div, h1, p, etc.)
// document.getElementById("miDiv").innerHTML = "<h1>Hola</h1>";

// .value → Para inputs (input, textarea, select)
// document.getElementById("miInput").value = "Hola";


// ⚠️ IMPORTANTE:
// Los INPUTS usan .value
// Los DIVS usan .innerHTML


// ============================================================
// 🎯 OPERACIONES BÁSICAS CON INPUTS:
// ============================================================

// LEER:
let texto = document.getElementById("miInput").value;

// ESCRIBIR:
document.getElementById("miInput").value = "Nuevo texto";

// BORRAR:
document.getElementById("miInput").value = "";

// AÑADIR AL FINAL:
let textoActual = document.getElementById("miInput").value;
document.getElementById("miInput").value = textoActual + " más texto";


// ============================================================
// ⚠️ ERRORES COMUNES:
// ============================================================

// ERROR 1: Usar innerHTML en lugar de value
// document.getElementById("miInput").innerHTML = "texto"; // ❌ NO funciona
// document.getElementById("miInput").value = "texto";     // ✓ CORRECTO

// ERROR 2: Olvidar leer el valor antes de borrar
function copiarMAL() {
    document.getElementById("texto1").value = ""; // ❌ Borra primero
    let contenido = document.getElementById("texto1").value; // Ya está vacío
    document.getElementById("texto2").value = contenido; // Copia ""
}

function copiarBIEN() {
    let contenido = document.getElementById("texto1").value; // ✓ Lee primero
    document.getElementById("texto2").value = contenido; 
    document.getElementById("texto1").value = ""; // Borra después
}


// ============================================================
// 📌 RESUMEN PARA EL EXAMEN:
// ============================================================

// LEER input:
// let valor = elemento.value;

// ESCRIBIR input:
// elemento.value = "texto";

// BORRAR input:
// elemento.value = "";

// RECORDAR:
// - Inputs → .value
// - Divs → .innerHTML


// ============================================================
// 🧪 PRUEBA:
// ============================================================
// 1. Escribe "Hola" en Texto 1
// 2. Pulsa el botón →→
// 3. "Hola" debería moverse a Texto 2
// 4. Texto 1 debería quedar vacío
//
// 5. Ahora pulsa el botón ←←
// 6. "Hola" debería volver a Texto 1
// 7. Texto 2 debería quedar vacío