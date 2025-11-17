// ============================================================
// EJERCICIO: Mostrar días de la semana con bucle for...of
// ============================================================


// Creamos un array con los días de la semana
// ============================================================
// Tu comentario original


const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
// ============================================================
// CREAR ARRAY CON LOS 7 DÍAS DE LA SEMANA
// ============================================================
// (Esta línea es idéntica a los ejercicios anteriores)
//
// const dias = [...] → Array con 7 strings
//
// Índice:   0        1         2           3         4          5          6
//         ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
//
// dias.length = 7
// dias[0] = "Lunes"
// dias[6] = "Domingo"


// Obtenemos el contenedor donde mostraremos los días
// ============================================================
// Tu comentario original


const contenedor = document.getElementById("resultado");
// ============================================================
// OBTENER REFERENCIA AL DIV
// ============================================================
// (Esta línea también es idéntica)
//
// document.getElementById("resultado")
// → Busca el div con id="resultado"
// → Lo guarda en la variable contenedor


// Usamos el bucle for...of para recorrer directamente los valores del array
// ============================================================
// Tu comentario original (¡PERFECTO! Describe exactamente qué hace)


for (let dia of dias) {
// ============================================================
// BUCLE FOR...OF
// ============================================================
// for (let dia of dias) { }
//
// ¡Esta es la DIFERENCIA PRINCIPAL con los anteriores!
//
// for...of = bucle especial para recorrer VALORES (ES6+)
//
// SINTAXIS:
// for (let variable of iterable) {
//     // código
// }
//
// DESGLOSE:
//
// for = palabra clave para bucles
// let dia = variable que guardará el VALOR en cada vuelta
// of = palabra clave que significa "de" / "dentro de"
// dias = el array que queremos recorrer
//
//
// ¿QUÉ HACE for...of CON ARRAYS?
// ──────────────────────────────
// Recorre los VALORES del array (NO los índices)
//
// En cada vuelta:
// - dia toma el VALOR del elemento actual
// - NO toma el índice
//
// FLUJO:
// Vuelta 1: dia = "Lunes"
// Vuelta 2: dia = "Martes"
// Vuelta 3: dia = "Miércoles"
// Vuelta 4: dia = "Jueves"
// Vuelta 5: dia = "Viernes"
// Vuelta 6: dia = "Sábado"
// Vuelta 7: dia = "Domingo"
//
// ✨ IMPORTANTE: dia ES EL VALOR DIRECTAMENTE
// NO necesitas hacer dias[i]
// Ya tienes "Lunes", "Martes", etc.
//
//
// COMPARACIÓN CON OTROS BUCLES:
// ─────────────────────────────
//
// FOR CLÁSICO:
// for (let i = 0; i < dias.length; i++) {
//     console.log(i);        // 0, 1, 2... (índice)
//     console.log(dias[i]);  // "Lunes", "Martes"... (valor)
// }
// → Tienes el ÍNDICE
// → Debes acceder al valor con dias[i]
//
// FOR...IN:
// for (let indice in dias) {
//     console.log(indice);        // "0", "1", "2"... (índice como string)
//     console.log(dias[indice]);  // "Lunes", "Martes"... (valor)
// }
// → Tienes el ÍNDICE (como string)
// → Debes acceder al valor con dias[indice]
// → Necesitas parseInt para aritmética
//
// FOR...OF (lo que usas) ✨:
// for (let dia of dias) {
//     console.log(dia);  // "Lunes", "Martes"... (valor directamente)
// }
// → Tienes el VALOR directamente ✓
// → NO tienes el índice
// → MÁS SIMPLE cuando solo necesitas valores ✓
//
//
// ¿POR QUÉ for...of ES MEJOR PARA ARRAYS?
// ───────────────────────────────────────
//
// VENTAJAS:
// ✅ MÁS SIMPLE: Código más corto y claro
// ✅ MÁS LEGIBLE: Se lee como lenguaje natural
//    "para cada día de días"
// ✅ MODERNO: ES6+ (2015), estándar actual
// ✅ DIRECTO: No necesitas índices ni acceder con []
// ✅ SEGURO: No puedes equivocarte con índices
// ✅ DISEÑADO PARA ARRAYS: A diferencia de for...in
//
// DESVENTAJA:
// ❌ NO tienes el índice (posición)
//    Si necesitas mostrar "Día 1:", no puedes
//
//
// ¿CUÁNDO USAR for...of?
// ─────────────────────
// ✅ Cuando solo necesitas los VALORES
// ✅ Cuando NO necesitas la posición/índice
// ✅ Código más limpio y moderno
// ✅ Es la MEJOR OPCIÓN para recorrer arrays modernamente
//
//
// ALTERNATIVA: forEach
// ────────────────────
// dias.forEach(dia => {
//     console.log(dia);
// });
// → Similar a for...of
// → Aún más funcional
// → Ambas son excelentes opciones ✓
//
//
// ¿POR QUÉ "let dia" Y NO "const dia"?
// ───────────────────────────────────
// Aunque dia cambia en cada vuelta, puedes usar const:
//
// for (const dia of dias) { }  ✓ También válido
//
// ¿Por qué funciona con const?
// Porque en cada iteración se crea una NUEVA variable
// No se "reasigna", se crea nueva
//
// Ambas formas son correctas:
// for (let dia of dias) { }    ✓ Tu forma
// for (const dia of dias) { }  ✓ También válido
//
// En la práctica, let es más común para bucles


  // Creamos un elemento <p> para mostrar el día
  // ============================================================
  // Tu comentario original
  
  
    const elemento = document.createElement("p");
    // ============================================================
    // CREAR ELEMENTO <p> DINÁMICAMENTE
    // ============================================================
    // (Esta línea es idéntica a los ejercicios anteriores)
    //
    // document.createElement("p")
    // → Crea un <p> en memoria
    // → Todavía no está visible
    //
    // elemento = <p></p> (vacío)


    elemento.textContent = `Día: ${dia}`;
    // ============================================================
    // ASIGNAR TEXTO AL PÁRRAFO
    // ============================================================
    // ⭐ ESTA LÍNEA ES MÁS SIMPLE QUE EN LOS ANTERIORES
    //
    // elemento.textContent = `Día: ${dia}`
    //
    // COMPARACIÓN CON EJERCICIOS ANTERIORES:
    //
    // FOR (;;):
    // elemento.textContent = `Día ${i + 1}: ${dias[i]}`
    // → Necesitas i + 1 para el número
    // → Necesitas dias[i] para acceder al valor
    //
    // FOR...IN:
    // elemento.textContent = `Día ${parseInt(indice) + 1}: ${dias[indice]}`
    // → Necesitas parseInt(indice) + 1
    // → Necesitas dias[indice] para acceder al valor
    //
    // FOR...OF (lo que usas):
    // elemento.textContent = `Día: ${dia}`
    // → Solo usas dia directamente ✓
    // → MÁS SIMPLE ✓
    //
    //
    // DESGLOSE:
    //
    // `Día: ${dia}`
    // → Template string con interpolación
    //
    // ${dia}
    // → Inserta el VALOR de dia
    //
    // dia ya ES el valor ("Lunes", "Martes"...)
    // NO necesitas:
    // - dias[i] ✗
    // - dias[indice] ✗
    // - parseInt() ✗
    //
    // ¡Simplemente dia! ✨
    //
    //
    // NOTA IMPORTANTE:
    // ───────────────
    // En este ejercicio NO muestras números (Día 1, Día 2...)
    // Solo muestras: "Día: Lunes", "Día: Martes"...
    //
    // Esto es porque for...of NO te da el índice
    // Si necesitaras números, tendrías que usar otro bucle
    //
    //
    // EJEMPLOS POR VUELTA:
    // ───────────────────
    //
    // VUELTA 1:
    // dia = "Lunes"
    // `Día: ${dia}`
    // `Día: ${"Lunes"}`
    // → "Día: Lunes"
    //
    // VUELTA 2:
    // dia = "Martes"
    // → "Día: Martes"
    //
    // VUELTA 7:
    // dia = "Domingo"
    // → "Día: Domingo"
    //
    //
    // VARIACIONES SI QUISIERAS NÚMEROS:
    // ─────────────────────────────────
    // NO puedes con for...of puro
    // Necesitarías:
    //
    // OPCIÓN 1: for clásico
    // OPCIÓN 2: for...in con parseInt
    // OPCIÓN 3: forEach con índice:
    // dias.forEach((dia, i) => {
    //     elemento.textContent = `Día ${i + 1}: ${dia}`;
    // });
    //
    // OPCIÓN 4: Array.entries() (avanzado):
    // for (let [indice, dia] of dias.entries()) {
    //     elemento.textContent = `Día ${indice + 1}: ${dia}`;
    // }


  // Lo agregamos al contenedor
  // ============================================================
  // Tu comentario original
  
  
    contenedor.appendChild(elemento);
    // ============================================================
    // AÑADIR EL <p> AL DIV
    // ============================================================
    // (Esta línea es idéntica a los ejercicios anteriores)
    //
    // contenedor.appendChild(elemento)
    // → Añade el <p> dentro del div
    // → Se coloca al final
    //
    // EVOLUCIÓN DEL HTML:
    //
    // INICIO:
    // <div id="resultado"></div>
    //
    // VUELTA 1:
    // <div id="resultado">
    //     <p>Día: Lunes</p>
    // </div>
    //
    // VUELTA 2:
    // <div id="resultado">
    //     <p>Día: Lunes</p>
    //     <p>Día: Martes</p>
    // </div>
    //
    // ... hasta las 7 vueltas
    //
    // FINAL:
    // <div id="resultado">
    //     <p>Día: Lunes</p>
    //     <p>Día: Martes</p>
    //     <p>Día: Miércoles</p>
    //     <p>Día: Jueves</p>
    //     <p>Día: Viernes</p>
    //     <p>Día: Sábado</p>
    //     <p>Día: Domingo</p>
    // </div>
    
}
// ============================================================
// FIN DEL BUCLE FOR...OF
// ============================================================
// Cuando llegamos aquí:
// - El bucle recorrió todos los valores
// - Se crearon y añadieron 7 elementos <p>
// - La página muestra los 7 días
//
// VENTAJA: El bucle termina automáticamente
// NO necesitas break ni condición de salida


// ============================================================
// 🔍 FLUJO COMPLETO DETALLADO:
// ============================================================

// INICIO:
// dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
// contenedor = <div id="resultado"></div>

// ────────────────────────────────────────────────────────────
// VUELTA 1:
// ────────────────────────────────────────────────────────────
// 1. for (let dia of dias) → empieza bucle
// 2. dia = "Lunes" (primer valor del array)
// 3. elemento = <p></p> (crear párrafo)
// 4. elemento.textContent = "Día: Lunes"
//    → <p>Día: Lunes</p>
// 5. contenedor.appendChild(elemento)
//    → <div><p>Día: Lunes</p></div>

// ────────────────────────────────────────────────────────────
// VUELTA 2:
// ────────────────────────────────────────────────────────────
// 1. dia = "Martes" (segundo valor)
// 2. elemento = <p></p>
// 3. elemento.textContent = "Día: Martes"
// 4. contenedor.appendChild(elemento)
//    → <div><p>Día: Lunes</p><p>Día: Martes</p></div>

// ... VUELTAS 3 a 7 (mismo proceso)

// ────────────────────────────────────────────────────────────
// VUELTA 7 (última):
// ────────────────────────────────────────────────────────────
// 1. dia = "Domingo" (último valor)
// 2. elemento = <p></p>
// 3. elemento.textContent = "Día: Domingo"
// 4. contenedor.appendChild(elemento)

// FIN: No hay más elementos, el bucle termina automáticamente


// ============================================================
// 📊 COMPARACIÓN: TRES FORMAS DE RECORRER ARRAYS
// ============================================================

// ════════════════════════════════════════════════════════════
// 1. FOR CLÁSICO (control total)
// ════════════════════════════════════════════════════════════
/* for (let i = 0; i < dias.length; i++) {
    const elemento = document.createElement("p");
    elemento.textContent = `Día ${i + 1}: ${dias[i]}`;
    contenedor.appendChild(elemento);
}*/
// VENTAJAS:
// ✅ Tienes el ÍNDICE (i)
// ✅ Control total (puedes saltar elementos, ir al revés...)
// ✅ Puedes mostrar números: "Día 1", "Día 2"...
//
// DESVENTAJAS:
// ❌ Más líneas en la declaración
// ❌ Debes acceder con dias[i]
// ❌ Más propenso a errores de índices


// ════════════════════════════════════════════════════════════
// 2. FOR...IN (para objetos principalmente)
// ════════════════════════════════════════════════════════════
/* for (let indice in dias) {
    const elemento = document.createElement("p");
    elemento.textContent = `Día ${parseInt(indice) + 1}: ${dias[indice]}`;
    contenedor.appendChild(elemento);
}*/
// VENTAJAS:
// ✅ Tienes el índice
// ✅ Más corto que for clásico
//
// DESVENTAJAS:
// ❌ El índice es STRING (no número)
// ❌ Necesitas parseInt para aritmética
// ❌ NO es ideal para arrays (mejor para objetos)
// ❌ Debes acceder con dias[indice]


// ════════════════════════════════════════════════════════════
// 3. FOR...OF (lo que usas) - MEJOR PARA ARRAYS ⭐
// ════════════════════════════════════════════════════════════
/* for (let dia of dias) {
    const elemento = document.createElement("p");
    elemento.textContent = `Día: ${dia}`;
    contenedor.appendChild(elemento);
} */
// VENTAJAS:
// ✅ MÁS SIMPLE y legible ⭐
// ✅ Tienes el VALOR directamente
// ✅ NO necesitas índices ni acceder con []
// ✅ ES6+ moderno
// ✅ Diseñado específicamente para arrays
// ✅ Menos propenso a errores
//
// DESVENTAJAS:
// ❌ NO tienes el índice
// ❌ No puedes mostrar "Día 1", "Día 2"...


// ════════════════════════════════════════════════════════════
// 4. BONUS: forEach (también excelente)
// ════════════════════════════════════════════════════════════
/* dias.forEach(dia => {
    const elemento = document.createElement("p");
    elemento.textContent = `Día: ${dia}`;
    contenedor.appendChild(elemento);
}); */
// Similar a for...of pero más funcional


// ============================================================
// 💡 ¿CUÁNDO USAR CADA UNO?
// ============================================================

// USA FOR...OF CUANDO:
// ✅ Solo necesitas los VALORES
// ✅ Recorres un array de principio a fin
// ✅ Quieres código moderno y limpio
// ✅ NO necesitas el índice/posición
// → ES LA MEJOR OPCIÓN PARA TU CASO ⭐

// USA FOR CLÁSICO CUANDO:
// ✅ Necesitas el ÍNDICE
// ✅ Necesitas control preciso (saltar, ir al revés...)
// ✅ Necesitas mostrar números de posición
// ✅ Múltiples arrays sincronizados

// USA FOR...IN CUANDO:
// ✅ Recorres un OBJETO (no array)
// ✅ Necesitas las CLAVES de un objeto
// Ejemplo:
// const persona = { nombre: "Ana", edad: 25 };
// for (let clave in persona) {
//     console.log(clave + ": " + persona[clave]);
// }

// USA forEach CUANDO:
// ✅ Estilo funcional
// ✅ Necesitas valor E índice
// ✅ Callbacks son más convenientes


// ============================================================
// 📌 CONCEPTOS CLAVE PARA EL EXAMEN:
// ============================================================

// 1. FOR...OF:
//    for (let valor of array) { }

// 2. for...of recorre VALORES (no índices)

// 3. El valor está disponible directamente
//    (no necesitas array[i])

// 4. NO tienes el índice/posición

// 5. Es el bucle MÁS MODERNO para arrays

// 6. Código más SIMPLE y LEGIBLE

// 7. Termina automáticamente
//    (no necesita break ni condición)

// 8. ES6+ (2015) - estándar moderno

// 9. Diseñado específicamente para iterables
//    (arrays, strings, Maps, Sets...)

// 10. DIFERENCIA vs for...in:
//     for...of → VALORES ✓
//     for...in → ÍNDICES/CLAVES


// ============================================================
// 🎯 RESULTADO VISUAL:
// ============================================================
// En la página se verá:
//
// Día: Lunes
// Día: Martes
// Día: Miércoles
// Día: Jueves
// Día: Viernes
// Día: Sábado
// Día: Domingo
//
// NOTA: NO hay números (Día 1, Día 2...)
// Porque for...of no da el índice


// ============================================================
// 💡 SI QUISIERAS AÑADIR NÚMEROS CON for...of:
// ============================================================
// Necesitarías Array.entries() (avanzado):
/*
for (let [indice, dia] of dias.entries()) {
    const elemento = document.createElement("p");
    elemento.textContent = `Día ${indice + 1}: ${dia}`;
    contenedor.appendChild(elemento);
}
*/
// DESGLOSE:
// dias.entries() → devuelve pares [índice, valor]
// [indice, dia] → destructuring (separa el par)
// Ahora tienes AMBOS: índice Y valor ✓

// Pero si necesitas índices, el for clásico es más simple


// ============================================================
// 🧪 OTROS USOS DE for...of:
// ============================================================

// RECORRER UN STRING:
// ───────────────────
const palabra = "Hola";
for (let letra of palabra) {
    console.log(letra);  // H, o, l, a
}

// RECORRER UN SET:
// ────────────────
const numeros = new Set([1, 2, 3, 4]);
for (let num of numeros) {
    console.log(num);  // 1, 2, 3, 4
}

// RECORRER UN MAP:
// ────────────────
const mapa = new Map([["a", 1], ["b", 2]]);
for (let [clave, valor] of mapa) {
    console.log(clave, valor);  // a 1, b 2
}


// ============================================================
// ⭐ POR QUÉ TU CÓDIGO ES EXCELENTE:
// ============================================================

// 1. ✅ Usas for...of (el bucle MÁS MODERNO para arrays)
// 2. ✅ Código SIMPLE y LIMPIO
// 3. ✅ NO hay parseInt innecesario
// 4. ✅ NO hay índices manuales
// 5. ✅ Fácil de leer y mantener
// 6. ✅ Menos propenso a errores
// 7. ✅ Estilo ES6+ profesional
// 8. ✅ Perfecto para el caso de uso


// ============================================================
// 📌 RESUMEN ULTRA CORTO:
// ============================================================
// 1. for...of recorre VALORES directamente
// 2. NO tienes índice (solo el valor)
// 3. Código MÁS SIMPLE que otros bucles
// 4. Perfecto cuando solo necesitas valores
// 5. ES6+ moderno y profesional
// 6. Mejor bucle para arrays (sin índices)
// 7. dia ES el valor, no necesitas dias[i]
/*

## 🎯 **RESULTADO VISUAL:**
```
Día: Lunes
Día: Martes
Día: Miércoles
Día: Jueves
Día: Viernes
Día: Sábado
Día: Domingo
}
*/