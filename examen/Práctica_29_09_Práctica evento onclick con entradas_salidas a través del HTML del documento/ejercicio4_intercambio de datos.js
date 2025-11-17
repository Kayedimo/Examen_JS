// ============================================================
// EJERCICIO 4: Intercambio de Datos entre Inputs
// ============================================================

// FUNCIÓN 1: Copiar de texto1 a texto2
function copiarADerecha() {
    // PASO 1: Leer lo que hay en texto1
    let contenido = document.getElementById("texto1").value;
    
    // PASO 2: Escribir ese texto en texto2
    document.getElementById("texto2").value = contenido;
    
    // PASO 3: Borrar texto1 (dejarlo vacío)
    document.getElementById("texto1").value = "";
}

// FUNCIÓN 2: Copiar de texto2 a texto1
function copiarAIzquierda() {
    // PASO 1: Leer lo que hay en texto2
    let contenido = document.getElementById("texto2").value;
    
    // PASO 2: Escribir ese texto en texto1
    document.getElementById("texto1").value = contenido;
    
    // PASO 3: Borrar texto2
    document.getElementById("texto2").value = "";
}

// IMPORTANTE:
// LEER input: .value
// ESCRIBIR input: .value = "texto"
// BORRAR input: .value = ""
//
// Inputs usan .value
// Divs usan .innerHTML