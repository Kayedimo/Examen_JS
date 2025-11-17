// ============================================================
// EJERCICIO: Mostrar días de la semana con bucle for...in
// ============================================================


// Creamos un array con los días de la semana
// ============================================================
// Tu comentario original


const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
// ============================================================
// CREAR ARRAY CON LOS 7 DÍAS DE LA SEMANA
// ============================================================
// (Esta línea es idéntica al ejercicio anterior)
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


// Usamos el bucle for...in para recorrer los índices del array
// ============================================================
// Tu comentario original


for (let indice in dias) {
// ============================================================
// BUCLE FOR...IN
// ============================================================
// for (let indice in dias) { }
//
// ¡Esta es la DIFERENCIA PRINCIPAL con el ejercicio anterior!
//
// for...in = bucle especial para recorrer ÍNDICES/PROPIEDADES
//
// SINTAXIS:
// for (let variable in objeto/array) {
//     // código
// }
//
// DESGLOSE:
//
// for = palabra clave para bucles
// let indice = variable que guardará el índice en cada vuelta
// in = palabra clave que significa "en" / "dentro de"
// dias = el array que queremos recorrer
//
//
// ¿QUÉ HACE for...in CON ARRAYS?
// ────────────────────────────────
// Recorre los ÍNDICES del array (no los valores)
//
// En cada vuelta:
// - indice toma el valor del ÍNDICE actual
// - NO toma el valor del elemento
//
// FLUJO:
// Vuelta 1: indice = "0" (como STRING)
// Vuelta 2: indice = "1" (como STRING)
// Vuelta 3: indice = "2" (como STRING)
// Vuelta 4: indice = "3" (como STRING)
// Vuelta 5: indice = "4" (como STRING)
// Vuelta 6: indice = "5" (como STRING)
// Vuelta 7: indice = "6" (como STRING)
//
// ⚠️ IMPORTANTE: indice es un STRING, NO un número
// indice = "0" (texto)
// NO es: indice = 0 (número)
//
//
// ¿CÓMO ACCEDER AL VALOR?
// ───────────────────────
// dias[indice]
// → Usas el índice para acceder al valor
//
// Ejemplo en vuelta 1:
// indice = "0"
// dias["0"] = dias[0] = "Lunes"
// (JavaScript convierte "0" a 0 automáticamente)
//
//
// COMPARACIÓN CON OTROS BUCLES:
// ──────────────────────────────
//
// FOR CLÁSICO:
// for (let i = 0; i < dias.length; i++) {
//     console.log(i);        // 0, 1, 2... (número)
//     console.log(dias[i]);  // "Lunes", "Martes"...
// }
// → Tienes control total
// → i es un NÚMERO
//
// FOR...IN (lo que usas):
// for (let indice in dias) {
//     console.log(indice);        // "0", "1", "2"... (string)
//     console.log(dias[indice]);  // "Lunes", "Martes"...
// }
// → Más corto
// → indice es un STRING
// → Recorre automáticamente todos los índices
//
// FOR...OF (alternativa):
// for (let dia of dias) {
//     console.log(dia);  // "Lunes", "Martes"...
// }
// → Solo tienes el VALOR
// → NO tienes el índice
// → Más simple si no necesitas índices
//
//
// ⚠️ ADVERTENCIA SOBRE for...in CON ARRAYS:
// ──────────────────────────────────────────
// for...in NO es lo ideal para arrays
// Está diseñado para OBJETOS
//
// PROBLEMAS POTENCIALES:
// 1. Los índices son STRINGS, no números
// 2. Si el array tiene propiedades extra, las recorre también
// 3. No garantiza el orden en todos los casos
//
// PARA ARRAYS es MEJOR usar:
// - for clásico ✓
// - for...of ✓
// - forEach ✓
//
// PERO funciona y es válido para aprender ✓
//
//
// ¿POR QUÉ "let indice" Y NO "const indice"?
// ──────────────────────────────────────────
// Porque indice CAMBIA en cada vuelta
// Vuelta 1: indice = "0"
// Vuelta 2: indice = "1" (cambió)
//
// Con const daría error ❌


  // Creamos un elemento <p> para mostrar el día correspondiente al índice
  // ============================================================
  // Tu comentario original
  
  
    const elemento = document.createElement("p");
    // ============================================================
    // CREAR ELEMENTO <p> DINÁMICAMENTE
    // ============================================================
    // (Esta línea es idéntica al ejercicio anterior)
    //
    // document.createElement("p")
    // → Crea un <p> en memoria
    // → Todavía no está visible
    //
    // elemento = <p></p> (vacío)


    elemento.textContent = `Día ${parseInt(indice) + 1}: ${dias[indice]}`;
    // ============================================================
    // ASIGNAR TEXTO AL PÁRRAFO
    // ============================================================
    // ⚠️ Esta línea tiene una DIFERENCIA IMPORTANTE con el anterior
    //
    // elemento.textContent = `Día ${parseInt(indice) + 1}: ${dias[indice]}`
    //
    // DESGLOSE:
    //
    // PARTE 1: ${parseInt(indice) + 1}
    // ─────────────────────────────────
    // parseInt(indice) → Convierte STRING a NÚMERO
    //
    // ¿Por qué parseInt?
    // Porque indice es un STRING ("0", "1", "2"...)
    // NO es un número (0, 1, 2...)
    //
    // PROBLEMA sin parseInt:
    // indice = "0" (string)
    // "0" + 1 = "01" ❌ (concatenación de strings)
    //
    // SOLUCIÓN con parseInt:
    // indice = "0" (string)
    // parseInt("0") = 0 (número)
    // 0 + 1 = 1 ✓ (suma de números)
    //
    //
    // parseInt(string) → CONVIERTE STRING A NÚMERO
    // ─────────────────────────────────────────────
    // parseInt("0") = 0
    // parseInt("1") = 1
    // parseInt("6") = 6
    // parseInt("10") = 10
    // parseInt("abc") = NaN (Not a Number)
    //
    // ALTERNATIVAS:
    // Number(indice) + 1     → también funciona ✓
    // +indice + 1            → también funciona ✓
    // parseInt(indice) + 1   → lo que usas ✓
    //
    // parseInt es MÁS EXPLÍCITO y CLARO ✓
    //
    //
    // DEMOSTRACIÓN DEL PROBLEMA:
    // ──────────────────────────
    // SIN parseInt:
    // indice = "0"
    // `Día ${indice + 1}`
    // `Día ${"0" + 1}`
    // `Día ${"01"}`
    // → "Día 01" ❌ INCORRECTO
    //
    // CON parseInt:
    // indice = "0"
    // `Día ${parseInt(indice) + 1}`
    // `Día ${parseInt("0") + 1}`
    // `Día ${0 + 1}`
    // `Día ${1}`
    // → "Día 1" ✓ CORRECTO
    //
    //
    // PARTE 2: ${dias[indice]}
    // ─────────────────────────
    // dias[indice] → Acceder al elemento en esa posición
    //
    // JavaScript convierte automáticamente:
    // dias["0"] → dias[0] → "Lunes"
    // dias["1"] → dias[1] → "Martes"
    // dias["6"] → dias[6] → "Domingo"
    //
    //
    // EJEMPLOS COMPLETOS POR VUELTA:
    // ───────────────────────────────
    //
    // VUELTA 1:
    // indice = "0" (string)
    // parseInt("0") = 0
    // 0 + 1 = 1
    // dias["0"] = "Lunes"
    // → "Día 1: Lunes"
    //
    // VUELTA 2:
    // indice = "1" (string)
    // parseInt("1") = 1
    // 1 + 1 = 2
    // dias["1"] = "Martes"
    // → "Día 2: Martes"
    //
    // VUELTA 7:
    // indice = "6" (string)
    // parseInt("6") = 6
    // 6 + 1 = 7
    // dias["6"] = "Domingo"
    // → "Día 7: Domingo"
    //
    //
    // COMPARACIÓN CON EL EJERCICIO ANTERIOR:
    // ───────────────────────────────────────
    // EJERCICIO ANTERIOR (for ;;):
    // let i = 0 (número desde el inicio)
    // elemento.textContent = `Día ${i + 1}: ${dias[i]}`
    // → i ya es número, no necesita conversión
    //
    // ESTE EJERCICIO (for...in):
    // let indice in dias (string)
    // elemento.textContent = `Día ${parseInt(indice) + 1}: ${dias[indice]}`
    // → indice es string, NECESITA parseInt


    // Lo agregamos al contenedor
    // ============================================================
    // Tu comentario original
    
    
    contenedor.appendChild(elemento);
    // ============================================================
    // AÑADIR EL <p> AL DIV
    // ============================================================
    // (Esta línea es idéntica al ejercicio anterior)
    //
    // contenedor.appendChild(elemento)
    // → Añade el <p> dentro del div
    // → Se coloca al final
    //
    // EVOLUCIÓN DEL HTML:
    // Vuelta 1: <div><p>Día 1: Lunes</p></div>
    // Vuelta 2: <div><p>Día 1: Lunes</p><p>Día 2: Martes</p></div>
    // ...hasta 7 vueltas
    
}
// ============================================================
// FIN DEL BUCLE FOR...IN
// ============================================================
// Cuando llegamos aquí:
// - El bucle recorrió todos los índices (0 a 6)
// - Se crearon y añadieron 7 elementos <p>
// - La página muestra los 7 días


// ============================================================
// 🔍 FLUJO COMPLETO DETALLADO:
// ============================================================

// INICIO:
// dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
// contenedor = <div id="resultado"></div>

// ────────────────────────────────────────────────────────────
// VUELTA 1:
// ────────────────────────────────────────────────────────────
// 1. for (let indice in dias) → empieza bucle
// 2. indice = "0" (STRING, primer índice)
// 3. elemento = <p></p>
// 4. parseInt("0") = 0 (número)
//    0 + 1 = 1
//    dias["0"] = "Lunes"
//    elemento.textContent = "Día 1: Lunes"
// 5. contenedor.appendChild(elemento)
//    → <div><p>Día 1: Lunes</p></div>

// ────────────────────────────────────────────────────────────
// VUELTA 2:
// ────────────────────────────────────────────────────────────
// 1. indice = "1" (STRING)
// 2. elemento = <p></p>
// 3. parseInt("1") = 1
//    1 + 1 = 2
//    dias["1"] = "Martes"
//    elemento.textContent = "Día 2: Martes"
// 4. contenedor.appendChild(elemento)

// ... VUELTAS 3 a 7 (mismo proceso)

// ────────────────────────────────────────────────────────────
// VUELTA 7 (última):
// ────────────────────────────────────────────────────────────
// 1. indice = "6" (STRING)
// 2. elemento = <p></p>
// 3. parseInt("6") = 6
//    6 + 1 = 7
//    dias["6"] = "Domingo"
//    elemento.textContent = "Día 7: Domingo"
// 4. contenedor.appendChild(elemento)

// FIN: No hay más índices, el bucle termina automáticamente


// ============================================================
// 📊 COMPARACIÓN: for(;;) vs for...in
// ============================================================

// EJERCICIO ANTERIOR: for(;;)
// ────────────────────────────
// let i = 0;
// for (;;) {
//     if (i >= dias.length) break;
//     // código...
//     i++;
// }
//
// CARACTERÍSTICAS:
// ✓ Control TOTAL (inicialización, condición, incremento)
// ✓ i es un NÚMERO
// ✓ Necesitas break manual
// ✓ Necesitas i++ manual
// ✓ Más líneas de código
// ✓ Muy DIDÁCTICO (ves cada parte)


// ESTE EJERCICIO: for...in
// ─────────────────────────
// for (let indice in dias) {
//     // código...
// }
//
// CARACTERÍSTICAS:
// ✓ Más COMPACTO (una línea)
// ✓ indice es un STRING ⚠️
// ✓ Break automático (cuando termina)
// ✓ Incremento automático
// ✓ Menos código
// ⚠️ Necesitas parseInt para sumas


// ============================================================
// 💡 ¿CUÁNDO USAR for...in?
// ============================================================

// ✅ BUENO PARA:
// ──────────────
// 1. OBJETOS (su propósito principal):
//    const persona = { nombre: "Ana", edad: 25 };
//    for (let clave in persona) {
//        console.log(clave + ": " + persona[clave]);
//    }
//    → "nombre: Ana"
//    → "edad: 25"
//
// 2. Cuando solo necesitas índices (sin hacer aritmética)
//
// 3. Para aprender y practicar diferentes tipos de bucles


// ⚠️ NO IDEAL PARA:
// ─────────────────
// 1. Arrays con muchas operaciones aritméticas
//    (porque los índices son strings)
//
// 2. Cuando el orden es crítico
//    (aunque normalmente funciona en orden)
//
// 3. Arrays con propiedades personalizadas
//    (recorrería también esas propiedades)


// ALTERNATIVAS MEJORES PARA ARRAYS:
// ──────────────────────────────────
//
// 1. FOR CLÁSICO (más común):
//    for (let i = 0; i < dias.length; i++) { }
//
// 2. FOR...OF (más moderno):
//    for (let dia of dias) { }
//    → Solo si no necesitas el índice
//
// 3. forEach (muy común):
//    dias.forEach((dia, indice) => { })
//    → Tienes valor E índice


// ============================================================
// 📌 CONCEPTOS CLAVE PARA EL EXAMEN:
// ============================================================

// 1. FOR...IN:
//    for (let variable in array/objeto) { }

// 2. for...in recorre ÍNDICES (no valores)

// 3. Los índices son STRINGS

// 4. parseInt(string):
//    Convierte string a número

// 5. PROBLEMA sin parseInt:
//    "0" + 1 = "01" (concatenación)

// 6. SOLUCIÓN con parseInt:
//    parseInt("0") + 1 = 1 (suma)

// 7. ACCEDER A VALORES:
//    array[indice]

// 8. for...in termina automáticamente
//    (no necesita break)

// 9. for...in es mejor para OBJETOS
//    que para ARRAYS


// ============================================================
// 🧪 EXPERIMENTOS PARA ENTENDER parseInt:
// ============================================================

// EXPERIMENTO 1: Sin parseInt
// ────────────────────────────
// let indice = "0";
// console.log(indice + 1);  // "01" ❌
// console.log(typeof (indice + 1));  // "string"

// EXPERIMENTO 2: Con parseInt
// ────────────────────────────
// let indice = "0";
// console.log(parseInt(indice) + 1);  // 1 ✓
// console.log(typeof (parseInt(indice) + 1));  // "number"

// EXPERIMENTO 3: Otros valores
// ────────────────────────────
// parseInt("42")    = 42
// parseInt("3.14")  = 3 (solo parte entera)
// parseInt("  10")  = 10 (ignora espacios)
// parseInt("abc")   = NaN (Not a Number)
// parseInt("10abc") = 10 (lee hasta encontrar no-número)


// ============================================================
// 💡 CÓDIGO EQUIVALENTE CON for...of
// ============================================================
// Si NO necesitaras mostrar "Día 1, Día 2..."
// Podrías usar for...of (más simple):

// for (let dia of dias) {
//     const elemento = document.createElement("p");
//     elemento.textContent = dia;  // Solo "Lunes", "Martes"...
//     contenedor.appendChild(elemento);
// }

// Pero entonces NO tendrías el índice
// Por eso for...in es útil cuando necesitas índices


// ============================================================
// 📌 RESUMEN ULTRA CORTO:
// ============================================================
// 1. for...in recorre ÍNDICES (como strings)
// 2. indice es STRING, no número
// 3. Usa parseInt(indice) para convertir a número
// 4. Accede al valor con array[indice]
// 5. No necesita break ni i++ (automático)
// 6. Mejor para objetos que para arrays
// 7. Funciona pero for clásico es más común para arrays