// ============================================================
// EJERCICIO 2: Suma de Dos Números (CASTING)
// ============================================================

// ============================================================
// 🎯 OBJETIVO DE ESTE EJERCICIO:
// ============================================================
// Aprender CASTING: Convertir texto en número
//
// PROBLEMA:
// Cuando lees un input con .value, SIEMPRE obtienes TEXTO (string)
// Si escribes "5" en un input, .value te da el texto "5", no el número 5
//
// ¿Por qué es un problema?
// "5" + "3" = "53" (junta textos)
// 5 + 3 = 8 (suma números)
//
// Solución: Convertir el texto en número


// ============================================================
// 🎯 CONCEPTO: ¿Qué es CASTING?
// ============================================================
// CASTING = Convertir un tipo de dato en otro
//
// En JavaScript hay 3 formas de convertir texto a número:
// 1. Number(texto) → convierte a número
// 2. parseInt(texto) → convierte a número entero
// 3. parseFloat(texto) → convierte a número decimal
//
// Nosotros usaremos Number() porque es la más simple


// ============================================================
// 💡 EXPLICACIÓN ESTILO FEYNMAN
// ============================================================
// Imagina que tienes cajas de colores:
//
// 📦 Caja AZUL = para guardar TEXTOS
//    Dentro puede haber: "hola", "5", "perro"
//
// 📦 Caja ROJA = para guardar NÚMEROS
//    Dentro puede haber: 5, 3.14, 100
//
// El input SIEMPRE te da una caja AZUL (texto)
// Pero para sumar necesitas cajas ROJAS (números)
//
// Number() es como cambiar de caja:
// Number("5") → saca el "5" de la caja azul y lo mete en la caja roja como 5


// ============================================================
// 📝 FUNCIÓN: sumar()
// ============================================================

function sumar() {
    // PASO 1: Leer el primer número (como TEXTO)
    // Esto nos da "5" (texto), no 5 (número)
    let texto1 = document.getElementById("numero1").value;
    
    // PASO 2: Leer el segundo número (como TEXTO)
    // Esto nos da "3" (texto), no 3 (número)
    let texto2 = document.getElementById("numero2").value;
    
    
    // ⚠️ SI SUMAMOS AHORA, PASA ESTO:
    // let mal = texto1 + texto2;
    // Si texto1 = "5" y texto2 = "3"
    // Resultado: "53" (junta los textos) ❌ INCORRECTO
    
    
    // PASO 3: CONVERTIR los textos en números (CASTING)
    // Number("5") → 5 (ahora sí es un número)
    let numero1 = Number(texto1);
    let numero2 = Number(texto2);
    
    // También se puede hacer en una sola línea:
    // let numero1 = Number(document.getElementById("numero1").value);
    
    
    // PASO 4: Ahora SÍ podemos sumar correctamente
    // 5 + 3 = 8 ✓ CORRECTO
    let suma = numero1 + numero2;
    
    
    // PASO 5: Mostrar el resultado
    // Creamos el mensaje en HTML
    let mensaje = `<h1>Resultado: ${suma}</h1>`;
    
    // Escribimos el mensaje en el div
    document.getElementById("resultado").innerHTML = mensaje;
}


// ============================================================
// 🔍 EJEMPLO PASO A PASO:
// ============================================================

// Usuario escribe "5" en el primer input
// Usuario escribe "3" en el segundo input
// Usuario pulsa el botón "Sumar"

// Se ejecuta la función sumar():

// 1. texto1 = "5" (es texto, no número)
// 2. texto2 = "3" (es texto, no número)

// 3. numero1 = Number("5") = 5 (ahora es número)
// 4. numero2 = Number("3") = 3 (ahora es número)

// 5. suma = 5 + 3 = 8 (suma correcta)

// 6. mensaje = "<h1>Resultado: 8</h1>"

// 7. Se escribe el mensaje en el div
// 8. ¡El usuario ve "Resultado: 8" en pantalla!


// ============================================================
// 📊 DIFERENCIA: Texto vs Número
// ============================================================

// CON TEXTO (sin Number):
let textoA = "5";
let textoB = "3";
let resultadoMalo = textoA + textoB;
// resultadoMalo = "53" ❌ INCORRECTO (juntó textos)

// CON NÚMERO (con Number):
let numeroA = Number("5");
let numeroB = Number("3");
let resultadoBueno = numeroA + numeroB;
// resultadoBueno = 8 ✓ CORRECTO (sumó números)


// ============================================================
// 🎯 3 FORMAS DE CONVERTIR TEXTO A NÚMERO:
// ============================================================

// 1. Number() - La más usada
let num1 = Number("5");      // 5
let num2 = Number("3.14");   // 3.14
let num3 = Number("hola");   // NaN (Not a Number - No es un número)

// 2. parseInt() - Solo números enteros (sin decimales)
let ent1 = parseInt("5");      // 5
let ent2 = parseInt("3.14");   // 3 (corta los decimales)
let ent3 = parseInt("5abc");   // 5 (ignora las letras del final)

// 3. parseFloat() - Números con decimales
let dec1 = parseFloat("5");      // 5
let dec2 = parseFloat("3.14");   // 3.14
let dec3 = parseFloat("3.14abc"); // 3.14


// ============================================================
// ⚠️ ERRORES COMUNES:
// ============================================================

// ERROR 1: No convertir a número
function sumarMAL() {
    let a = document.getElementById("numero1").value;
    let b = document.getElementById("numero2").value;
    let suma = a + b;  // ❌ Esto junta textos: "5" + "3" = "53"
}

// CORRECTO:
function sumarBIEN() {
    let a = Number(document.getElementById("numero1").value);
    let b = Number(document.getElementById("numero2").value);
    let suma = a + b;  // ✓ Esto suma números: 5 + 3 = 8
}


// ERROR 2: Usar + para convertir (avanzado, pero confuso)
let numero = +"5";  // Funciona, pero es difícil de leer
// Mejor usa: Number("5")


// ============================================================
// 📌 PARA EL EXAMEN - RESUMEN:
// ============================================================

// ¿Qué es CASTING?
// → Convertir un tipo de dato en otro

// ¿Por qué necesito CASTING con inputs?
// → Porque .value SIEMPRE da texto, no números

// ¿Cómo convierto texto a número?
// → Number(texto)

// Ejemplo completo:
// let numero = Number(document.getElementById("miInput").value);


// ============================================================
// 🧪 PRUEBA:
// ============================================================
// 1. Escribe 5 en el primer campo
// 2. Escribe 3 en el segundo campo
// 3. Pulsa "Sumar"
// 4. Deberías ver: "Resultado: 8"
//
// Si ves "53", significa que olvidaste el Number()


// ============================================================
// 💡 TRUCO PARA RECORDAR:
// ============================================================
// .value siempre da TEXTO 📄
// Number() convierte TEXTO en NÚMERO 🔢
// Sin Number(): "5" + "3" = "53" ❌
// Con Number(): 5 + 3 = 8 ✓