// ============================================================
// EJERCICIO 2: Suma de Dos Números (CASTING)
// ============================================================

function sumar() {
    // PASO 1: Leer el primer número (como TEXTO)
    // Los inputs SIEMPRE dan texto, no números
    let texto1 = document.getElementById("numero1").value;
    
    // PASO 2: Leer el segundo número (como TEXTO)
    let texto2 = document.getElementById("numero2").value;
    
    // PASO 3: CONVERTIR los textos en números (CASTING)
    // Number("5") → 5 (ahora sí es un número)
    // SIN ESTO: "5" + "3" = "53" (junta textos) ❌
    // CON ESTO: 5 + 3 = 8 (suma números) ✓
    let numero1 = Number(texto1);
    let numero2 = Number(texto2);
    
    // PASO 4: Ahora SÍ podemos sumar correctamente
    let suma = numero1 + numero2;
    
    // PASO 5: Mostrar el resultado
    let mensaje = `<h1>Resultado: ${suma}</h1>`;
    document.getElementById("resultado").innerHTML = mensaje;
}

// IMPORTANTE:
// .value siempre da TEXTO
// Number() convierte TEXTO a NÚMERO
// Sin Number(): "5" + "3" = "53" ❌
// Con Number(): 5 + 3 = 8 ✓