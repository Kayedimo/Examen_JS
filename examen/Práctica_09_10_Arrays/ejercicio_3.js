// ============================================================
// EJERCICIO: Mostrar días de la semana con bucle for(;;)
// ============================================================


// Creamos un array con los días de la semana
// ============================================================
// Tu comentario original


const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
// ============================================================
// CREAR ARRAY CON LOS 7 DÍAS DE LA SEMANA
// ============================================================
// const dias = [...] → Crear constante con un array
//
// Este array contiene 7 STRINGS (textos)
// Cada uno es el nombre de un día de la semana
//
// ESTRUCTURA DEL ARRAY:
// Índice:   0        1         2           3         4          5          6
//         ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
//
// IMPORTANTE: Los índices empiezan en 0, NO en 1
// dias[0] = "Lunes" (primer día)
// dias[1] = "Martes" (segundo día)
// dias[6] = "Domingo" (séptimo día)
//
// dias.length = 7 (número total de elementos)
//
//
// ¿Por qué const y no let?
// Porque NO vamos a REASIGNAR el array completo
// NO haremos: dias = otroArray
//
// Podríamos cambiar valores DENTRO:
// dias[0] = "Monday" ✓ Esto SÍ se puede (aunque no lo haremos)
//
// Pero NO podemos reasignar:
// dias = ["Monday", "Tuesday"...] ✗ ERROR con const
//
//
// SINTAXIS DE ARRAYS:
// const arr = [elemento1, elemento2, elemento3]
// → Los elementos van entre corchetes []
// → Separados por comas ,
// → Los strings van entre comillas ""
//
//
// DIFERENCIA: Array de strings vs array de números
// Array de strings (tu caso):
// ["Lunes", "Martes"] → Cada elemento entre comillas
//
// Array de números:
// [1, 2, 3, 4] → Sin comillas
//
// Array mixto (también válido):
// ["Lunes", 1, true, "Martes"] → Diferentes tipos
//
//
// INICIALIZACIÓN DIRECTA (lo que haces):
// const dias = ["Lunes", "Martes"...]
// → Creas el array Y lo llenas en UNA línea ✓
// → Más claro y compacto
//
// ALTERNATIVA (menos común aquí):
// const dias = [];
// dias[0] = "Lunes";
// dias[1] = "Martes";
// ...
// → Más líneas, menos práctico para este caso


// Obtenemos el contenedor donde mostraremos los días
// ============================================================
// Tu comentario original


const contenedor = document.getElementById("resultado");
// ============================================================
// OBTENER REFERENCIA AL DIV
// ============================================================
// document.getElementById("resultado")
// → Busca el elemento HTML con id="resultado"
//
// En tu HTML tendrás:
// <div id="resultado"></div>
//
// Esta línea ENCUENTRA ese div y lo guarda en la variable
//
// Es como obtener la DIRECCIÓN de una caja:
// No tienes la caja física en la variable,
// pero tienes la forma de acceder a ella
//
// ¿Para qué guardamos esta referencia?
// Para poder añadir elementos <p> dentro del div
// Más adelante haremos:
// contenedor.appendChild(elemento)
//
// ¿Por qué const?
// Porque la referencia al div NO cambia
// Siempre apuntamos al mismo elemento HTML
//
// NOTA: Si getElementById no encuentra el elemento:
// contenedor = null → daría error después
// Por eso es importante que el id="resultado" exista en el HTML


// Usamos un bucle for(;;) para recorrer el array
// ============================================================
// Tu comentario original


let i = 0;
// ============================================================
// INICIALIZAR CONTADOR/ÍNDICE
// ============================================================
// let i = 0 → Crear variable contador
//
// ¿Por qué let y no const?
// Porque i SÍ va a cambiar (0, 1, 2, 3, 4, 5, 6)
//
// i = índice del array
// Usaremos i para:
// 1. Acceder a cada día: dias[i]
// 2. Controlar cuándo parar: if (i >= 7)
// 3. Mostrar el número del día: i + 1
//
// Empieza en 0 porque:
// - Los arrays empiezan en índice 0
// - dias[0] = "Lunes" (primer elemento)
//
// Es como un contador de vueltas que empieza en 0


for (;;) {
// ============================================================
// BUCLE FOR INFINITO
// ============================================================
// for (;;) → Bucle sin condiciones explícitas
//
// SINTAXIS NORMAL DE FOR:
// for (inicialización; condición; incremento) { }
//
// TU BUCLE:
// for (;;) → Las tres partes están VACÍAS
//
// ¿Qué significa?
// Es un BUCLE INFINITO
// Se ejecuta para siempre hasta que algo lo DETENGA
//
// Es como un motor que gira sin parar:
// vuelta 1, vuelta 2, vuelta 3... ∞
//
// ¿Cómo lo detenemos?
// Con la palabra clave: break
// (dentro del if más abajo)
//
//
// ¿POR QUÉ usar for(;;)?
//
// VENTAJAS:
// ✓ Control TOTAL sobre cuándo parar
// ✓ Puedes poner condiciones complejas
// ✓ Muy DIDÁCTICO (se ve claramente cada parte)
// ✓ Útil para lógica más compleja
//
// ALTERNATIVA (for clásico):
// for (let i = 0; i < dias.length; i++) { }
// → Todo en una línea
// → Más compacto
// → Igualmente válido
//
// Ambas formas son CORRECTAS ✓
//
//
// PELIGRO: Si olvidas el break
// El bucle NUNCA terminaría
// → Navegador congelado ❌
// → Tendrías que cerrar la pestaña
//
// Por eso el if con break es CRÍTICO


    // Condición de salida: cuando llegamos al final del array
    // ============================================================
    // Tu comentario original
    
    
    if (i >= dias.length) break;
    // ============================================================
    // CONDICIÓN DE SALIDA DEL BUCLE
    // ============================================================
    // Esta es la línea que DETIENE el bucle infinito
    //
    // if (i >= dias.length)
    // → Si i es mayor o igual que la longitud del array
    //
    // dias.length = 7 (porque hay 7 días)
    //
    // FLUJO:
    // i = 0: ¿0 >= 7? NO → continúa
    // i = 1: ¿1 >= 7? NO → continúa
    // i = 2: ¿2 >= 7? NO → continúa
    // i = 3: ¿3 >= 7? NO → continúa
    // i = 4: ¿4 >= 7? NO → continúa
    // i = 5: ¿5 >= 7? NO → continúa
    // i = 6: ¿6 >= 7? NO → continúa (última vuelta válida)
    // i = 7: ¿7 >= 7? SÍ → break (DETIENE)
    //
    //
    // break
    // ──────
    // break = "romper" / "salir"
    // Sale INMEDIATAMENTE del bucle
    // Continúa con el código después del for
    //
    // Es como pulsar STOP en un reproductor
    //
    //
    // ¿Por qué >= y no ==?
    //
    // >= (mayor o igual) - LO QUE USAS ✓
    // Cuando i = 7 → DETIENE
    // Si por error i fuera 8 → también DETIENE
    // Más SEGURO
    //
    // == (igual)
    // Cuando i = 7 → DETIENE
    // Si por error i fuera 8 → NO detiene ❌
    // Menos seguro
    //
    // > (mayor que)
    // Cuando i = 7 → NO detiene (7 no es > 7) ❌
    // Cuando i = 8 → DETIENE
    // Intenta acceder a dias[7] → undefined ❌
    //
    // >= es la OPCIÓN MÁS SEGURA ✓
    //
    //
    // ¿Por qué i >= 7 y no i >= dias.length?
    //
    // i >= 7 (literal):
    // Funciona pero está "hardcodeado"
    // Si cambias el array, tienes que cambiar el código
    //
    // i >= dias.length (lo que usas) ✓
    // Más FLEXIBLE
    // Si añades/quitas días, el código sigue funcionando
    // PROFESIONAL ✓
    //
    //
    // IMPORTANTE: Sin esta línea = bucle infinito real
    // El navegador se congelaría ❌


  // Creamos un elemento <p> para mostrar el día
  // ============================================================
  // Tu comentario original
  
  
    const elemento = document.createElement("p");
    // ============================================================
    // CREAR ELEMENTO <p> DINÁMICAMENTE
    // ============================================================
    // document.createElement("p")
    // → Crea un nuevo elemento <p> en MEMORIA
    //
    // "p" = párrafo (etiqueta HTML)
    //
    // Este <p> existe en MEMORIA (RAM)
    // Todavía NO está visible en la página
    //
    // Es como fabricar un ladrillo antes de usarlo en la pared
    //
    // RESULTADO:
    // elemento = <p></p>
    // Un párrafo VACÍO, sin texto todavía
    //
    //
    // OTROS ELEMENTOS QUE PODRÍAS CREAR:
    // document.createElement("div")   → <div></div>
    // document.createElement("span")  → <span></span>
    // document.createElement("h1")    → <h1></h1>
    // document.createElement("li")    → <li></li>
    // document.createElement("button") → <button></button>
    //
    //
    // ¿Por qué crear con JavaScript?
    //
    // FORMA ESTÁTICA (HTML):
    // <p>Día 1: Lunes</p>
    // <p>Día 2: Martes</p>
    // ...
    // → Tendrías que escribir 7 <p> manualmente ❌
    // → Si cambias los días, cambias el HTML
    //
    // FORMA DINÁMICA (JavaScript) - LO QUE HACES:
    // for (...) {
    //     const p = document.createElement("p");
    //     // ...
    // }
    // → Se crean automáticamente 7 <p> ✓
    // → Si cambias el array, el HTML se adapta solo ✓
    //
    //
    // const elemento (no let):
    // Porque en cada vuelta creamos un NUEVO elemento
    // No reutilizamos el mismo
    // Cada vuelta: nuevo <p>, nuevo elemento


    elemento.textContent = `Día ${i + 1}: ${dias[i]}`;
    // ============================================================
    // ASIGNAR TEXTO AL PÁRRAFO
    // ============================================================
    // elemento.textContent = ... → Poner texto dentro del <p>
    //
    // textContent = propiedad que contiene el TEXTO de un elemento
    //
    // ANTES:
    // <p></p> (vacío)
    //
    // DESPUÉS:
    // <p>Día 1: Lunes</p>
    //
    //
    // TEMPLATE STRING:
    // `Día ${i + 1}: ${dias[i]}`
    //
    // DESGLOSE:
    //
    // ${i + 1}
    // ────────
    // Inserta el valor de i + 1
    //
    // ¿Por qué i + 1 y no solo i?
    // Porque i empieza en 0 pero queremos mostrar:
    // "Día 1", "Día 2", "Día 3"... (no "Día 0")
    //
    // i = 0 → i + 1 = 1 → "Día 1"
    // i = 1 → i + 1 = 2 → "Día 2"
    // i = 6 → i + 1 = 7 → "Día 7"
    //
    // Es la forma de convertir el índice (0-6)
    // en número humano (1-7)
    //
    //
    // ${dias[i]}
    // ──────────
    // Inserta el valor del array en la posición i
    //
    // dias[i] = acceder al elemento i del array
    //
    // i = 0 → dias[0] = "Lunes"
    // i = 1 → dias[1] = "Martes"
    // i = 6 → dias[6] = "Domingo"
    //
    //
    // EJEMPLOS COMPLETOS POR VUELTA:
    //
    // VUELTA 1 (i = 0):
    // `Día ${0 + 1}: ${dias[0]}`
    // `Día ${1}: ${"Lunes"}`
    // → "Día 1: Lunes"
    //
    // VUELTA 2 (i = 1):
    // `Día ${1 + 1}: ${dias[1]}`
    // `Día ${2}: ${"Martes"}`
    // → "Día 2: Martes"
    //
    // VUELTA 3 (i = 2):
    // `Día ${2 + 1}: ${dias[2]}`
    // `Día ${3}: ${"Miércoles"}`
    // → "Día 3: Miércoles"
    //
    // ...
    //
    // VUELTA 7 (i = 6):
    // `Día ${6 + 1}: ${dias[6]}`
    // `Día ${7}: ${"Domingo"}`
    // → "Día 7: Domingo"
    //
    //
    // FORMA ALTERNATIVA (sin template strings):
    // elemento.textContent = "Día " + (i + 1) + ": " + dias[i];
    // → Funciona igual pero MÁS DIFÍCIL de leer
    // → Template strings son MÁS CLAROS ✓
    //
    //
    // DIFERENCIA: textContent vs innerHTML
    //
    // .textContent (lo que usas) ✓
    // → Solo TEXTO plano
    // → Si pones HTML, se muestra como texto literal
    // → Más SEGURO (previene inyección de código)
    //
    // Ejemplo:
    // elemento.textContent = "<b>Lunes</b>"
    // → Muestra: <b>Lunes</b> (literalmente)
    //
    // .innerHTML
    // → Interpreta HTML
    // → Puede ejecutar código
    //
    // Ejemplo:
    // elemento.innerHTML = "<b>Lunes</b>"
    // → Muestra: Lunes (en negrita)
    //
    // Para este ejercicio, textContent es PERFECTO ✓


    // Lo agregamos al contenedor
    // ============================================================
    // Tu comentario original
    
    
    contenedor.appendChild(elemento);
    // ============================================================
    // AÑADIR EL <p> AL DIV
    // ============================================================
    // contenedor.appendChild(elemento)
    //
    // contenedor = el <div id="resultado">
    // .appendChild() = "añadir hijo"
    // elemento = el <p> que acabamos de crear y llenar
    //
    // appendChild(elemento) → Añade elemento al FINAL
    //
    //
    // ¿Qué hace exactamente?
    // 1. Toma el <p> que está en memoria
    // 2. Lo "mueve" a la página visible
    // 3. Lo coloca DENTRO del contenedor
    // 4. Lo pone al FINAL (después de los hermanos anteriores)
    //
    // Es como pegar stickers en un álbum:
    // - Fabricas el sticker (createElement)
    // - Le escribes texto (textContent)
    // - Lo pegas en la página (appendChild)
    //
    //
    // EVOLUCIÓN DEL HTML:
    //
    // INICIO (HTML original):
    // <div id="resultado"></div>
    //
    // DESPUÉS DE VUELTA 1 (i = 0):
    // <div id="resultado">
    //     <p>Día 1: Lunes</p>
    // </div>
    //
    // DESPUÉS DE VUELTA 2 (i = 1):
    // <div id="resultado">
    //     <p>Día 1: Lunes</p>
    //     <p>Día 2: Martes</p>
    // </div>
    //
    // DESPUÉS DE VUELTA 3 (i = 2):
    // <div id="resultado">
    //     <p>Día 1: Lunes</p>
    //     <p>Día 2: Martes</p>
    //     <p>Día 3: Miércoles</p>
    // </div>
    //
    // ... Y así hasta las 7 vueltas
    //
    // FINAL (después de 7 vueltas):
    // <div id="resultado">
    //     <p>Día 1: Lunes</p>
    //     <p>Día 2: Martes</p>
    //     <p>Día 3: Miércoles</p>
    //     <p>Día 4: Jueves</p>
    //     <p>Día 5: Viernes</p>
    //     <p>Día 6: Sábado</p>
    //     <p>Día 7: Domingo</p>
    // </div>
    //
    //
    // ALTERNATIVAS A appendChild:
    //
    // .append(elemento)
    // → Similar pero más moderno
    // → Puede añadir texto directamente también
    //
    // .prepend(elemento)
    // → Añade al PRINCIPIO (no al final)
    //
    // .insertBefore(nuevo, referencia)
    // → Inserta ANTES de un elemento específico
    //
    // .insertAdjacentElement(posición, elemento)
    // → Más control sobre dónde insertar
    //
    // appendChild es el ESTÁNDAR y más común ✓
    //
    //
    // ¿Por qué appendChild y no innerHTML?
    //
    // FORMA 1: appendChild (tu forma) ✓
    // for (...) {
    //     const p = document.createElement("p");
    //     p.textContent = "...";
    //     contenedor.appendChild(p);
    // }
    // → Más EFICIENTE (el navegador optimiza)
    // → Más PROFESIONAL
    // → Cada elemento es un objeto manipulable
    //
    // FORMA 2: innerHTML
    // let html = "";
    // for (...) {
    //     html += "<p>...</p>";
    // }
    // contenedor.innerHTML = html;
    // → Funciona pero menos eficiente
    // → Todo es un string, no objetos
    //
    // Tu forma es MEJOR PRÁCTICA ✓


    // ➕ Incrementamos el contador
    // ============================================================
    // Tu comentario original (con emoji)
    
    
    i++;
    // ============================================================
    // INCREMENTAR CONTADOR
    // ============================================================
    // i++ → Sumar 1 a i
    //
    // Es forma CORTA de escribir:
    // i = i + 1
    //
    //
    // FLUJO DEL CONTADOR:
    // Inicio: i = 0
    // Vuelta 1: procesar día 0 → i++ → ahora i = 1
    // Vuelta 2: procesar día 1 → i++ → ahora i = 2
    // Vuelta 3: procesar día 2 → i++ → ahora i = 3
    // Vuelta 4: procesar día 3 → i++ → ahora i = 4
    // Vuelta 5: procesar día 4 → i++ → ahora i = 5
    // Vuelta 6: procesar día 5 → i++ → ahora i = 6
    // Vuelta 7: procesar día 6 → i++ → ahora i = 7
    // Vuelta 8: if (7 >= 7) break → DETIENE
    //
    //
    // IMPORTANTE: Esta línea DEBE estar al final del bucle
    // Para que se ejecute DESPUÉS de procesar cada día
    //
    // ORDEN CORRECTO (lo que haces):
    // 1. Comprobar if break
    // 2. Crear <p>
    // 3. Asignar texto
    // 4. Añadir al DOM
    // 5. i++ (preparar siguiente vuelta) ✓
    //
    //
    // Sin esta línea:
    // i siempre sería 0
    // → Bucle infinito REAL
    // → Siempre procesa "Día 1: Lunes"
    // → Navegador congelado ❌
    //
    //
    // ALTERNATIVAS DE INCREMENTO:
    // i++       → suma 1 (lo más común) ✓
    // i += 1    → suma 1 (explícito)
    // i = i + 1 → suma 1 (muy explícito)
    // ++i       → suma 1 (pre-incremento)
    //
    // Todos hacen lo mismo aquí ✓
    //
    //
    // ¿Podrías poner i++ en otro lugar?
    //
    // AL PRINCIPIO:
    // for (;;) {
    //     i++;
    //     if (i > 7) break;
    //     // código...
    // }
    // → Tendríamos que cambiar la lógica
    // → Menos claro
    //
    // Tu forma (AL FINAL) es la MÁS CLARA ✓
    
}
// ============================================================
// FIN DEL BUCLE
// ============================================================
// Cuando llegamos aquí:
// - El bucle ha terminado (se ejecutó break)
// - i = 7
// - Se crearon y añadieron 7 elementos <p>
// - La página muestra los 7 días de la semana


// ============================================================
// 🔍 FLUJO COMPLETO DETALLADO:
// ============================================================

// INICIO:
// dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
// contenedor = <div id="resultado"></div>
// i = 0

// ────────────────────────────────────────────────────────────
// VUELTA 1:
// ────────────────────────────────────────────────────────────
// 1. for (;;) → empieza bucle
// 2. if (0 >= 7) break → NO (0 no es >= 7, continúa)
// 3. elemento = <p></p> (crear párrafo vacío)
// 4. elemento.textContent = `Día ${0 + 1}: ${dias[0]}`
//    → elemento.textContent = "Día 1: Lunes"
//    → <p>Día 1: Lunes</p>
// 5. contenedor.appendChild(elemento)
//    → <div id="resultado">
//        <p>Día 1: Lunes</p>
//      </div>
// 6. i++ → i = 1

// ────────────────────────────────────────────────────────────
// VUELTA 2:
// ────────────────────────────────────────────────────────────
// 1. for (;;) → continúa bucle
// 2. if (1 >= 7) break → NO (continúa)
// 3. elemento = <p></p>
// 4. elemento.textContent = "Día 2: Martes"
// 5. contenedor.appendChild(elemento)
//    → <div id="resultado">
//        <p>Día 1: Lunes</p>
//        <p>Día 2: Martes</p>
//      </div>
// 6. i++ → i = 2

// ────────────────────────────────────────────────────────────
// VUELTA 3 a 6:
// ────────────────────────────────────────────────────────────
// (Mismo proceso para Miércoles, Jueves, Viernes, Sábado)

// ────────────────────────────────────────────────────────────
// VUELTA 7 (última):
// ────────────────────────────────────────────────────────────
// 1. for (;;) → continúa bucle
// 2. if (6 >= 7) break → NO (continúa)
// 3. elemento = <p></p>
// 4. elemento.textContent = "Día 7: Domingo"
// 5. contenedor.appendChild(elemento)
//    → <div id="resultado">
//        <p>Día 1: Lunes</p>
//        <p>Día 2: Martes</p>
//        <p>Día 3: Miércoles</p>
//        <p>Día 4: Jueves</p>
//        <p>Día 5: Viernes</p>
//        <p>Día 6: Sábado</p>
//        <p>Día 7: Domingo</p>
//      </div>
// 6. i++ → i = 7

// ────────────────────────────────────────────────────────────
// VUELTA 8 (no se ejecuta completamente):
// ────────────────────────────────────────────────────────────
// 1. for (;;) → continúa bucle
// 2. if (7 >= 7) break → SÍ → BREAK (sale del bucle)

// FIN DEL PROGRAMA


// ============================================================
// 📌 CONCEPTOS CLAVE PARA EL EXAMEN:
// ============================================================

// 1. CREAR ARRAY CON VALORES:
//    const arr = ["valor1", "valor2", "valor3"]

// 2. LONGITUD DEL ARRAY:
//    arr.length → número de elementos

// 3. ACCEDER A ELEMENTOS:
//    arr[i] → elemento en posición i

// 4. ÍNDICES:
//    Empiezan en 0
//    Último índice = length - 1

// 5. BUCLE FOR INFINITO:
//    for (;;) { }

// 6. BREAK:
//    break; → sale del bucle

// 7. CREAR ELEMENTOS:
//    document.createElement("etiqueta")

// 8. ASIGNAR TEXTO:
//    elemento.textContent = "texto"

// 9. AÑADIR AL DOM:
//    padre.appendChild(hijo)

// 10. INCREMENTAR:
//     i++ → suma 1

// 11. TEMPLATE STRINGS:
//     `Texto ${variable}`

// 12. ARITMÉTICA SIMPLE:
//     i + 1 → convertir índice (0-6) a número humano (1-7)


// ============================================================
// 💡 VARIACIONES INTERESANTES:
// ============================================================

// VARIACIÓN 1: Mostrar solo en índice (sin +1)
// elemento.textContent = `Índice ${i}: ${dias[i]}`
// → "Índice 0: Lunes", "Índice 1: Martes"...

// VARIACIÓN 2: Añadir emojis
// const dias = ["🌙 Lunes", "🔥 Martes", "🌊 Miércoles"...]
// → "Día 1: 🌙 Lunes"

// VARIACIÓN 3: Resaltar fin de semana
// if (i >= 5) {
//     elemento.style.color = "red";
// }
// → Sábado y Domingo en rojo

// VARIACIÓN 4: Lista ordenada
// const elemento = document.createElement("li");
// → <li>Lunes</li> en vez de <p>


// ============================================================
// 📌 RESUMEN ULTRA CORTO:
// ============================================================
// 1. Array con 7 días: ["Lunes"...]
// 2. Buscar contenedor div
// 3. i = 0 (contador)
// 4. for(;;) bucle infinito
// 5. if (i >= 7) break (salir)
// 6. createElement("p") (crear)
// 7. textContent = "Día X: DiaSemana" (llenar)
// 8. appendChild(p) (mostrar)
// 9. i++ (siguiente)
/*

## 🎯 **RESULTADO VISUAL:**
```
Día 1: Lunes
Día 2: Martes
Día 3: Miércoles
Día 4: Jueves
Día 5: Viernes
Día 6: Sábado
Día 7: Domingo */