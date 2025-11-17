// ============================================================
// EJERCICIO: Array de 50 elementos con bucle for infinito
// ============================================================


// Creamos un array de 50 elementos, todos inicializados en false
// ============================================================
// Este es tu comentario original


const miArray = new Array(50).fill(false);
// ============================================================
// CREAR Y LLENAR ARRAY EN UNA SOLA LÍNEA
// ============================================================
// const miArray = new Array(50).fill(false)
//
// Esta línea hace TODO de golpe:
// 1. Crea un array de 50 posiciones
// 2. Llena todas las posiciones con false
//
// DESGLOSE PASO A PASO:
//
// PARTE 1: new Array(50)
// ──────────────────────
// new Array(50) → Crea un array de 50 posiciones VACÍAS
//
// Resultado temporal:
// [empty, empty, empty, ... , empty]
//  ↑ 0    ↑ 1    ↑ 2         ↑ 49
//  (50 posiciones vacías)
//
// IMPORTANTE: Las posiciones están "vacías" (empty)
// NO están con false todavía
// Si intentaras acceder: miArray[0] → undefined
//
//
// PARTE 2: .fill(false)
// ─────────────────────
// .fill(false) → LLENA todas las posiciones con false
//
// fill = rellenar (como llenar un vaso)
// false = el valor con el que llenar
//
// Resultado final:
// [false, false, false, ... , false]
//  ↑ 0    ↑ 1    ↑ 2           ↑ 49
//  (50 posiciones con false)
//
//
// COMPARACIÓN CON EL MÉTODO TRADICIONAL:
//
// FORMA TRADICIONAL (con bucle for):
// let miArray = [];
// for (let i = 0; i < 50; i++) {
//     miArray[i] = false;
// }
// → Más líneas de código
// → Más educativo (ves el proceso paso a paso)
//
// TU FORMA (con new Array y fill):
// const miArray = new Array(50).fill(false);
// → UNA sola línea ✓
// → Más rápido de escribir ✓
// → Más profesional y moderno ✓
//
//
// ¿Por qué const y no let?
// Porque NO vamos a REASIGNAR el array
// (no haremos miArray = otroArray)
//
// Sí podemos CAMBIAR los valores DENTRO:
// miArray[0] = true; ✓ Esto SÍ se puede
//
// NO podemos reasignar:
// miArray = []; ✗ Esto da ERROR con const
//
//
// OTROS EJEMPLOS DE .fill():
//
// new Array(5).fill(0)
// → [0, 0, 0, 0, 0]
//
// new Array(3).fill("hola")
// → ["hola", "hola", "hola"]
//
// new Array(4).fill(true)
// → [true, true, true, true]


// Obtenemos el contenedor del HTML donde mostraremos los resultados
// ============================================================
// Tu comentario original


const contenedor = document.getElementById("resultado");
// ============================================================
// OBTENER REFERENCIA AL DIV
// ============================================================
// const contenedor = document.getElementById("resultado")
//
// document.getElementById("resultado")
// → Busca el elemento HTML con id="resultado"
//
// En tu HTML tienes:
// <div id="resultado"></div>
//
// Esta línea ENCUENTRA ese div y lo guarda en la variable
//
// Es como tener la DIRECCIÓN de una caja:
// No tienes la caja física, pero sabes dónde está
//
// ¿Para qué guardamos la referencia?
// Para poder añadir elementos <p> dentro de este div
//
// Más adelante haremos:
// contenedor.appendChild(elemento)
// → Añade un <p> dentro del div
//
// ¿Por qué const?
// Porque la referencia al div NO cambia
// Siempre apuntamos al mismo div


// Usamos un bucle for(;;), que es un bucle infinito, pero lo controlamos con una condición interna
// ============================================================
// Tu comentario original explicando el bucle


let i = 0; // Inicializamos el contador
// ============================================================
// INICIALIZAR CONTADOR
// ============================================================
// let i = 0 → Crear variable contador
//
// let (no const) porque i SÍ va a cambiar
// i empieza en 0 (primer índice del array)
//
// Este i es el ÍNDICE que usaremos para:
// 1. Acceder a cada posición del array: miArray[i]
// 2. Saber cuándo parar: if (i >= 50) break
// 3. Mostrar en pantalla: "Elemento 0", "Elemento 1"...
//
// Es como un contador de vueltas en una pista de carreras


for (;;) {
// ============================================================
// BUCLE FOR INFINITO
// ============================================================
// for (;;) → Bucle for SIN condiciones
//
// ESTRUCTURA NORMAL DE FOR:
// for (inicialización; condición; incremento) { }
//      ↓              ↓          ↓
// for (let i = 0;  i < 50;  i++)
//
// TU BUCLE:
// for (;;)
//      ↓    ↓   ↓
//      vacío vacío vacío
//
// ¿Qué significa for(;;)?
// Es un BUCLE INFINITO
// Se ejecuta para SIEMPRE hasta que algo lo DETENGA
//
// Es como una rueda que gira sin parar:
// vuelta 1, vuelta 2, vuelta 3... ∞
//
// ¿Cómo lo detenemos?
// Con la palabra clave break
// (más adelante en el if)
//
//
// ¿POR QUÉ usar for(;;) en vez de for normal?
//
// FOR NORMAL:
// for (let i = 0; i < miArray.length; i++) { }
// → Todo está en una línea
// → Más compacto
// → Más común
//
// FOR(;;) (lo que usas):
// let i = 0;
// for (;;) {
//     if (i >= miArray.length) break;
//     // código
//     i++;
// }
// → Más control explícito
// → Más flexible
// → Puedes poner el incremento donde quieras
//
// AMBAS FORMAS FUNCIONAN IGUAL ✓
//
// Tu forma es MÁS DIDÁCTICA porque:
// - Se ve claramente dónde inicializas (let i = 0)
// - Se ve claramente la condición (if break)
// - Se ve claramente el incremento (i++)
//
//
// OTROS NOMBRES PARA for(;;):
// - Bucle infinito
// - Bucle sin condición
// - for vacío
//
//
// PELIGRO: Si olvidas el break, el bucle NUNCA termina
// → El navegador se CONGELA
// → Tienes que cerrar la pestaña
//
// Por eso es CRÍTICO tener el if con break


  // Condición de salida: si el contador llega al tamaño del array, rompemos el bucle
  // ============================================================
  // Tu comentario original
  
  
    if (i >= miArray.length) break;
    // ============================================================
    // CONDICIÓN DE SALIDA
    // ============================================================
    // Esta es la línea que DETIENE el bucle infinito
    //
    // if (i >= miArray.length)
    // → Si i es mayor o igual que la longitud del array
    //
    // miArray.length = 50 (porque tiene 50 elementos)
    //
    // Cuando i = 50:
    // ¿50 >= 50? SÍ → entra en el if
    //
    //
    // break
    // ──────
    // break = "romper" / "salir"
    // Detiene el bucle INMEDIATAMENTE
    // Sale del for y continúa con el código después del for
    //
    // Es como pulsar el botón de STOP en un reproductor
    //
    //
    // FLUJO:
    // i = 0: ¿0 >= 50? NO → continúa
    // i = 1: ¿1 >= 50? NO → continúa
    // ...
    // i = 49: ¿49 >= 50? NO → continúa (última vuelta válida)
    // i = 50: ¿50 >= 50? SÍ → break (DETIENE el bucle)
    //
    //
    // ¿Por qué >= y no >?
    //
    // >= (mayor o igual):
    // Cuando i = 50 → DETIENE ✓
    // Si por error i fuera 51 → también DETIENE ✓
    // Más seguro
    //
    // > (solo mayor):
    // Cuando i = 50 → NO detiene (50 no es > 50)
    // Intenta acceder a miArray[50] → undefined ❌
    //
    // >= es MÁS SEGURO ✓
    //
    //
    // ALTERNATIVA: if (i === miArray.length)
    // También funcionaría pero >= es más defensivo
    //
    //
    // IMPORTANTE: Esta línea es CRÍTICA
    // Sin ella, el bucle sería realmente infinito
    // El navegador se congelaría ❌


    // creamos un nuevo elemento <p> para mostrar el valor del array en esa posición
    // ============================================================
    // Tu comentario original
    
    
    const elemento = document.createElement("p");
    // ============================================================
    // CREAR ELEMENTO <p> DINÁMICAMENTE
    // ============================================================
    // document.createElement("p")
    // → Crea un nuevo elemento <p> en memoria
    //
    // "p" = párrafo (HTML tag)
    //
    // Este <p> se crea en MEMORIA (RAM)
    // Todavía NO está en la página visible
    // Es como construir un ladrillo antes de ponerlo en la pared
    //
    // RESULTADO:
    // elemento = <p></p>
    // (un párrafo vacío, sin texto todavía)
    //
    //
    // OTROS ELEMENTOS QUE PUEDES CREAR:
    // document.createElement("div")  → <div></div>
    // document.createElement("span") → <span></span>
    // document.createElement("h1")   → <h1></h1>
    // document.createElement("img")  → <img>
    //
    //
    // ¿Por qué crear con JavaScript y no escribir en HTML?
    //
    // FORMA ESTÁTICA (HTML):
    // <p>Elemento 0: false</p>
    // <p>Elemento 1: false</p>
    // ...
    // → Tendríamos que escribir 50 <p> manualmente ❌
    //
    // FORMA DINÁMICA (JavaScript):
    // for (...) {
    //     const p = document.createElement("p");
    //     // ...
    // }
    // → Se crean automáticamente 50 <p> ✓
    //
    //
    // const elemento (no let):
    // Porque en cada vuelta creamos un NUEVO elemento
    // No reutilizamos el mismo


    // Le damos contenido al párrafo con el índice y el valor correspondiente
    // ============================================================
    // Tu comentario original
    
    
    elemento.textContent = `Elemento ${i}: ${miArray[i]}`;
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
    // <p>Elemento 0: false</p>
    //
    //
    // TEMPLATE STRING:
    // `Elemento ${i}: ${miArray[i]}`
    //
    // ${i} → Inserta el valor de i (índice)
    // ${miArray[i]} → Inserta el valor del array en posición i
    //
    // EJEMPLOS POR VUELTA:
    //
    // i = 0:
    // miArray[0] = false
    // `Elemento ${0}: ${false}`
    // → "Elemento 0: false"
    //
    // i = 1:
    // miArray[1] = false
    // `Elemento ${1}: ${false}`
    // → "Elemento 1: false"
    //
    // i = 49:
    // miArray[49] = false
    // `Elemento ${49}: ${false}`
    // → "Elemento 49: false"
    //
    //
    // DIFERENCIA: textContent vs innerHTML
    //
    // .textContent = ... (lo que usas):
    // → Solo TEXTO plano
    // → Si pones HTML, se muestra como texto
    // → Más SEGURO ✓
    // Ejemplo:
    // elemento.textContent = "<b>hola</b>"
    // → Muestra: <b>hola</b> (literalmente)
    //
    // .innerHTML = ...
    // → Interpreta HTML
    // → Puede ejecutar código
    // → Menos seguro
    // Ejemplo:
    // elemento.innerHTML = "<b>hola</b>"
    // → Muestra: hola (en negrita)
    //
    // Para este ejercicio, textContent es PERFECTO ✓
    // Solo necesitamos texto, no HTML


    // Lo agregamos al contenedor para que aparezca en la página
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
    // elemento = el <p> que acabamos de crear
    //
    // appendChild(elemento) → Añade elemento como ÚLTIMO HIJO
    //
    // ANTES (en el HTML):
    // <div id="resultado"></div>
    //
    // DESPUÉS (primera vuelta):
    // <div id="resultado">
    //     <p>Elemento 0: false</p>
    // </div>
    //
    // DESPUÉS (segunda vuelta):
    // <div id="resultado">
    //     <p>Elemento 0: false</p>
    //     <p>Elemento 1: false</p>
    // </div>
    //
    // Y así sucesivamente hasta tener 50 <p>
    //
    //
    // ¿Qué hace appendChild exactamente?
    // 1. Toma el elemento que creamos (el <p>)
    // 2. Lo "mueve" de la memoria a la página visible
    // 3. Lo coloca DENTRO del contenedor
    // 4. Lo pone al FINAL (después de los otros hijos)
    //
    // Es como pegar un sticker en un álbum:
    // - Tienes el sticker en la mano (createElement)
    // - Lo pegas en la página (appendChild)
    // - Ahora es visible en el álbum
    //
    //
    // ALTERNATIVAS:
    //
    // .append(elemento)
    // → Similar pero más moderno
    // → Puede añadir texto directamente
    //
    // .insertBefore(nuevo, referencia)
    // → Inserta ANTES de un elemento específico
    //
    // .prepend(elemento)
    // → Añade al PRINCIPIO (no al final)
    //
    //
    // ¿Por qué appendChild y no innerHTML?
    //
    // FORMA 1 (tu forma - appendChild):
    // for (...) {
    //     const p = document.createElement("p");
    //     p.textContent = "...";
    //     contenedor.appendChild(p);
    // }
    // → Más EFICIENTE ✓
    // → El navegador actualiza la página progresivamente
    //
    // FORMA 2 (innerHTML):
    // let html = "";
    // for (...) {
    //     html += "<p>...</p>";
    // }
    // contenedor.innerHTML = html;
    // → Funciona pero menos eficiente
    // → Reconstruye todo el contenedor cada vez
    //
    // Tu forma es MÁS PROFESIONAL ✓


    // ➕ Incrementamos el contador para pasar al siguiente elemento
    // ============================================================
    // Tu comentario original (con emoji ➕)
    
    
    i++;
    // ============================================================
    // INCREMENTAR CONTADOR
    // ============================================================
    // i++ → Sumar 1 a i
    //
    // Es una forma CORTA de escribir:
    // i = i + 1
    //
    // IMPORTANTE: Esta línea debe estar al FINAL del bucle
    // Para que se ejecute después de procesar el elemento
    //
    // FLUJO EN CADA VUELTA:
    // 1. Comprobar if (i >= 50) break
    // 2. Crear <p>
    // 3. Asignar texto al <p>
    // 4. Añadir <p> al div
    // 5. i++ (preparar siguiente vuelta)
    // 6. Volver al inicio del for
    //
    // EJEMPLO:
    // Vuelta 1: i = 0 → procesar → i++ → ahora i = 1
    // Vuelta 2: i = 1 → procesar → i++ → ahora i = 2
    // ...
    // Vuelta 50: i = 49 → procesar → i++ → ahora i = 50
    // Vuelta 51: i = 50 → if (50 >= 50) break → DETIENE
    //
    // Sin esta línea:
    // i siempre sería 0 → bucle infinito real ❌
    //
    //
    // ALTERNATIVAS DE INCREMENTO:
    // i++     → suma 1 (lo más común)
    // i += 1  → suma 1 (explícito)
    // i = i + 1 → suma 1 (muy explícito)
    // ++i     → suma 1 (pre-incremento)
    //
    // Todos hacen lo mismo en este contexto ✓
    //
    //
    // ¿Dónde más podrías poner el i++?
    // Al principio del bucle:
    // for (;;) {
    //     i++;  ← Al principio
    //     if (i > 50) break;
    //     // ...
    // }
    // → También funcionaría pero con lógica diferente
    //
    // Tu forma (al final) es la MÁS CLARA ✓
    
}
// ============================================================
// FIN DEL BUCLE
// ============================================================
// Cuando llegamos aquí:
// - El bucle terminó (se ejecutó break)
// - i = 50
// - Se crearon y añadieron 50 elementos <p>
// - La página muestra los 50 elementos


// ============================================================
// 🔍 FLUJO COMPLETO - EJEMPLO CON 3 ELEMENTOS:
// ============================================================

// INICIAL:
// miArray = [false, false, false]
// contenedor = <div id="resultado"></div>
// i = 0

// VUELTA 1:
// 1. for (;;) → empieza bucle
// 2. if (0 >= 3) break → NO (continúa)
// 3. elemento = <p></p>
// 4. elemento.textContent = "Elemento 0: false"
// 5. contenedor.appendChild(elemento)
//    → <div><p>Elemento 0: false</p></div>
// 6. i++ → i = 1

// VUELTA 2:
// 1. for (;;) → continúa bucle
// 2. if (1 >= 3) break → NO (continúa)
// 3. elemento = <p></p>
// 4. elemento.textContent = "Elemento 1: false"
// 5. contenedor.appendChild(elemento)
//    → <div><p>Elemento 0: false</p><p>Elemento 1: false</p></div>
// 6. i++ → i = 2

// VUELTA 3:
// 1. for (;;) → continúa bucle
// 2. if (2 >= 3) break → NO (continúa)
// 3. elemento = <p></p>
// 4. elemento.textContent = "Elemento 2: false"
// 5. contenedor.appendChild(elemento)
//    → <div><p>Elemento 0: false</p><p>Elemento 1: false</p><p>Elemento 2: false</p></div>
// 6. i++ → i = 3

// VUELTA 4:
// 1. for (;;) → continúa bucle
// 2. if (3 >= 3) break → SÍ → BREAK (sale del bucle)

// FIN


// ============================================================
// 📌 CONCEPTOS CLAVE PARA EL EXAMEN:
// ============================================================

// 1. CREAR ARRAY CON new Array:
//    new Array(50).fill(false)

// 2. BUCLE INFINITO:
//    for (;;) { }

// 3. BREAK:
//    break; → sale del bucle

// 4. CREAR ELEMENTOS:
//    document.createElement("tag")

// 5. ASIGNAR TEXTO:
//    elemento.textContent = "texto"

// 6. AÑADIR AL DOM:
//    padre.appendChild(hijo)

// 7. INCREMENTAR:
//    i++ → suma 1

// 8. LONGITUD DEL ARRAY:
//    array.length


// ============================================================
// 💡 VENTAJAS DE TU CÓDIGO:
// ============================================================

// 1. COMPACTO:
//    Una línea para crear y llenar el array ✓

// 2. DIDÁCTICO:
//    El for(;;) hace muy visible el proceso ✓

// 3. EFICIENTE:
//    appendChild es mejor que innerHTML para muchos elementos ✓

// 4. PROFESIONAL:
//    createElement + appendChild es el método estándar ✓

// 5. SEGURO:
//    textContent previene inyección de código ✓


// ============================================================
// 📌 RESUMEN ULTRA CORTO:
// ============================================================
// 1. Crear array: new Array(50).fill(false)
// 2. i = 0 (contador)
// 3. for(;;) bucle infinito
// 4. if (i >= 50) break (condición salida)
// 5. createElement("p") (crear párrafo)
// 6. textContent = "..." (añadir texto)
// 7. appendChild(p) (añadir al div)
// 8. i++ (siguiente vuelta)