// ============================================================
// EJERCICIO 3: Dado Numérico y Dado Alfabético
// ============================================================

// FUNCIÓN 1: Generar número aleatorio del 1 al 6
function mostrarNumero() {
    // PASO 1: Generar número aleatorio
    // Math.random() → da un número entre 0 y 1 (ejemplo: 0.734)
    // * 6 → multiplica por 6 (ejemplo: 4.404)
    // Math.floor() → redondea hacia abajo (ejemplo: 4)
    // + 1 → suma 1 (ejemplo: 5)
    // RESULTADO: número entre 1 y 6 ✓
    var numero = Math.floor(Math.random() * 6) + 1;
    
    // PASO 2: Mostrar el número en la página
    document.getElementById('resultado-num').innerHTML = numero;
}

// FUNCIÓN 2: Generar letra aleatoria de A a Z
function mostrarLetra() {
    // PASO 1: Crear un texto con todas las letras del alfabeto
    // Es como tener una bolsa con 26 papelitos (uno por cada letra)
    var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    // PASO 2: Elegir una posición aleatoria
    // letras.length = 26 (hay 26 letras)
    // Math.random() * 26 → da 0 a 25.999...
    // Math.floor() → redondea abajo, da 0 a 25
    // Esto es como meter la mano en la bolsa y sacar un papelito
    var posicion = Math.floor(Math.random() * letras.length);
    
    // PASO 3: Sacar la letra de esa posición
    // letras[0] = "A"
    // letras[1] = "B"
    // letras[25] = "Z"
    var letra = letras[posicion];
    
    // PASO 4: Mostrar la letra en la página
    document.getElementById('resultado-letra').innerHTML = letra;
}

// ============================================================
// 💡 EXPLICACIÓN EXTRA: ¿Cómo funcionan los índices?
// ============================================================
// Un string es como una fila de cajas:
// 
// Posición:  0   1   2   3   4   5 ... 25
// Letra:    [A] [B] [C] [D] [E] [F] ... [Z]
//
// letras[0] → saca la letra de la posición 0 → "A"
// letras[5] → saca la letra de la posición 5 → "F"
// letras[25] → saca la letra de la posición 25 → "Z"