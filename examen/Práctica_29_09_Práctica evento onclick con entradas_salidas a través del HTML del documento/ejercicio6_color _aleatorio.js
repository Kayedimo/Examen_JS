// ============================================================
// EJERCICIO 6: Color Aleatorio RGB
// ============================================================
// 
// 🎯 OBJETIVO:
// Crear un generador de colores RGB aleatorios
// RGB = Red (Rojo), Green (Verde), Blue (Azul)
// Cada color va de 0 (nada) a 255 (máximo)


// ============================================================
// 💡 CONCEPTO: ¿Qué son los colores RGB?
// ============================================================
// RGB es como mezclar pinturas:
// 
// Imagina que tienes 3 botes de pintura:
// 🔴 ROJO: Puedes echar de 0 a 255 gotas
// 🟢 VERDE: Puedes echar de 0 a 255 gotas
// 🔵 AZUL: Puedes echar de 0 a 255 gotas
//
// Mezclas las gotas en un papel:
// - 255 rojo + 0 verde + 0 azul = ROJO PURO
// - 0 rojo + 255 verde + 0 azul = VERDE PURO
// - 0 rojo + 0 verde + 255 azul = AZUL PURO
// - 255 rojo + 255 verde + 0 azul = AMARILLO
// - 0 rojo + 0 verde + 0 azul = NEGRO
// - 255 rojo + 255 verde + 255 azul = BLANCO


// ============================================================
// 📦 VARIABLES GLOBALES: Guardan los valores RGB
// ============================================================
// Estas variables están FUERA de las funciones
// Por eso TODAS las funciones pueden verlas y cambiarlas
// NO se borran cuando termina una función

let rojo = 0;   // Componente ROJO (de 0 a 255)
let verde = 0;  // Componente VERDE (de 0 a 255)
let azul = 0;   // Componente AZUL (de 0 a 255)

// Al principio todos valen 0:
// rgb(0, 0, 0) = COLOR NEGRO


// ============================================================
// 💡 CONCEPTO: Variables Globales vs Locales
// ============================================================
// 
// VARIABLE GLOBAL (fuera de funciones):
// let rojo = 0;  ← Todas las funciones la ven
//
// VARIABLE LOCAL (dentro de función):
// function algo() {
//     let rojo = 0;  ← Solo esta función la ve
// }
//
// Las variables globales son como una PIZARRA EN LA PARED:
// - Todos pueden leerla
// - Todos pueden escribir en ella
// - NO se borra cuando terminas de usarla


// ============================================================
// FUNCIÓN: lanzarColor(num)
// ============================================================
// Esta función genera un número aleatorio de 0 a 255
// y lo guarda en el color correspondiente
//
// PARÁMETRO:
// num = número que indica QUÉ color cambiar
//       1 = rojo
//       2 = verde
//       3 = azul

function lanzarColor(num) {
    // ============================================================
    // PASO 1: Generar número aleatorio de 0 a 255
    // ============================================================
    
    // Math.random() da un número entre 0 y 1
    // Ejemplo: 0.7341
    
    // Math.random() * 256 da un número entre 0 y 256
    // Ejemplo: 0.7341 * 256 = 187.9296
    
    // Math.floor() redondea HACIA ABAJO (elimina decimales)
    // Ejemplo: Math.floor(187.9296) = 187
    
    // RESULTADO: Números del 0 al 255 ✓
    // (256 valores posibles: 0, 1, 2, 3, ... 254, 255)
    
    let valor = Math.floor(Math.random() * 256);
    
    // Ejemplo de valores que puede generar:
    // Math.random() = 0.0 → 0.0 * 256 = 0.0 → Math.floor(0.0) = 0
    // Math.random() = 0.5 → 0.5 * 256 = 128.0 → Math.floor(128.0) = 128
    // Math.random() = 0.999 → 0.999 * 256 = 255.744 → Math.floor(255.744) = 255
    
    
    // ============================================================
    // PASO 2: Guardar el valor en la variable correspondiente
    // ============================================================
    // Usamos IF para decidir QUÉ color cambiar
    // Comprobamos el parámetro 'num' que recibimos
    
    if (num === 1) {
        // Si num es igual a 1, cambiamos el ROJO
        rojo = valor;
    }
    // === significa "es ESTRICTAMENTE igual"
    // Compara valor Y tipo
    // 1 === 1 → true (verdadero)
    // 1 === 2 → false (falso)
    // 1 === "1" → false (uno es número, otro es texto)
    
    if (num === 2) {
        // Si num es igual a 2, cambiamos el VERDE
        verde = valor;
    }
    
    if (num === 3) {
        // Si num es igual a 3, cambiamos el AZUL
        azul = valor;
    }
    
    // NOTA: Los otros colores NO cambian
    // Solo cambia el que corresponde al número que recibimos
    
    
    // ============================================================
    // PASO 3: Actualizar la pantalla
    // ============================================================
    mostrarColor();
    // Llamamos a la función mostrarColor() para que actualice:
    // - Los números en pantalla
    // - El color del cuadro
}


// ============================================================
// 💡 EJEMPLO: ¿Qué pasa cuando llamas lanzarColor(2)?
// ============================================================
//
// Estado inicial:
// rojo = 0, verde = 0, azul = 0
//
// Usuario pulsa el botón VERDE:
// 1. Se ejecuta lanzarColor(2)
// 2. num = 2 (el parámetro que recibió)
// 3. valor = 180 (número aleatorio, por ejemplo)
// 4. Comprueba: ¿num === 1? NO (2 no es igual a 1)
//    → NO entra en ese if, rojo sigue siendo 0
// 5. Comprueba: ¿num === 2? SÍ (2 es igual a 2)
//    → SÍ entra en ese if
//    → verde = 180
// 6. Comprueba: ¿num === 3? NO (2 no es igual a 3)
//    → NO entra en ese if, azul sigue siendo 0
// 7. Llama a mostrarColor()
// 8. Actualiza la pantalla
//
// Estado final:
// rojo = 0, verde = 180, azul = 0


// ============================================================
// FUNCIÓN: mostrarColor()
// ============================================================
// Esta función hace 2 cosas:
// 1. Muestra los 3 números RGB en pantalla
// 2. Cambia el color de fondo del cuadro

function mostrarColor() {
    // ============================================================
    // PARTE 1: Mostrar los números en pantalla
    // ============================================================
    
    // MOSTRAR EL VALOR DEL ROJO
    document.getElementById('valor-rojo').innerHTML = rojo;
    // Desglosado:
    // document → El documento HTML completo (la página web)
    // .getElementById('valor-rojo') → Busca el elemento con id="valor-rojo"
    //                                  Es el <span id="valor-rojo">
    // .innerHTML → El contenido HTML dentro del elemento
    // = rojo → Le asigna el valor de la variable rojo
    //
    // Ejemplo:
    // Si rojo = 123
    // Entonces el HTML cambia a: <span id="valor-rojo">123</span>
    // Y en pantalla se ve: 123
    
    
    // MOSTRAR EL VALOR DEL VERDE
    document.getElementById('valor-verde').innerHTML = verde;
    // Hace lo mismo pero con el elemento id="valor-verde"
    // Y usa el valor de la variable verde
    
    
    // MOSTRAR EL VALOR DEL AZUL
    document.getElementById('valor-azul').innerHTML = azul;
    // Hace lo mismo pero con el elemento id="valor-azul"
    // Y usa el valor de la variable azul
    
    
    // ============================================================
    // PARTE 2: Cambiar el color del cuadro
    // ============================================================
    
    document.getElementById('colorbox').style.backgroundColor = `rgb(${rojo},${verde},${azul})`;
    // Desglosado:
    // document.getElementById('colorbox') → Busca el <div id="colorbox">
    // .style → Accede a los ESTILOS CSS del elemento
    // .backgroundColor → La propiedad de color de fondo
    // = `rgb(${rojo},${verde},${azul})` → Le asigna un color RGB
    //
    // Ejemplo paso a paso:
    // Si rojo = 255, verde = 100, azul = 50
    //
    // Template string: `rgb(${rojo},${verde},${azul})`
    // Se convierte en: "rgb(255,100,50)"
    //
    // El navegador interpreta: rgb(255, 100, 50)
    // Y pinta el cuadro de ese color (naranja en este caso)
}


// ============================================================
// 💡 CONCEPTO: Template Strings
// ============================================================
// Template strings usan ACENTOS GRAVES: `texto`
// Permiten meter variables con ${variable}
//
// Ejemplo:
let nombre = "Kaye";
let saludo = `Hola ${nombre}`;
// saludo = "Hola Kaye"
//
// En nuestro código:
// `rgb(${rojo},${verde},${azul})`
//
// Si rojo=255, verde=100, azul=50:
// Se convierte en: "rgb(255,100,50)"


// ============================================================
// 💡 CONCEPTO: Acceder a estilos CSS con JavaScript
// ============================================================
//
// En CSS escribes:
// background-color: red;
//
// En JavaScript escribes:
// elemento.style.backgroundColor = "red";
//
// DIFERENCIAS:
// CSS: background-color (con guión -)
// JS: backgroundColor (sin guión, mayúscula después)
//
// REGLA: Quita el guión y pon MAYÚSCULA la siguiente letra
// CSS: font-size → JS: fontSize
// CSS: border-radius → JS: borderRadius
// CSS: margin-top → JS: marginTop


// ============================================================
// LÍNEA ESPECIAL: Inicializar al cargar la página
// ============================================================
mostrarColor();
// Esta línea está FUERA de las funciones
// Se ejecuta AUTOMÁTICAMENTE cuando se carga la página
//
// ¿Por qué la ponemos?
// Para que aparezca "0  0  0" desde el principio
// Y el cuadro empiece negro: rgb(0, 0, 0)
//
// Sin esta línea:
// - No aparecerían los números hasta pulsar un botón
// - El cuadro no tendría color hasta pulsar un botón
