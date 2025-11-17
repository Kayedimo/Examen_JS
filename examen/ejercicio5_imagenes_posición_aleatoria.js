// ============================================================
// EJERCICIO 5: Imágenes en Posición Aleatoria
// ============================================================


// Función para obtener una posición aleatoria
// ============================================================
// Este es un comentario explicando qué hace la siguiente función


function obtenerPosicionAleatoria(ancho, alto) {
// ============================================================
// FUNCIÓN: obtenerPosicionAleatoria
// ============================================================
// Esta función CALCULA una posición aleatoria para una imagen
//
// function = declara una función (bloque de código reutilizable)
// obtenerPosicionAleatoria = nombre de la función (descriptivo)
// (ancho, alto) = PARÁMETROS que recibe la función
//
// PARÁMETROS:
// ancho = ancho de la imagen en píxeles (ejemplo: 200)
// alto = alto de la imagen en píxeles (ejemplo: 150)
//
// ¿Para qué sirven los parámetros?
// Para saber el tamaño de la imagen y evitar que se salga
// de la pantalla
//
// RETORNA (devuelve):
// Un objeto con coordenadas { x, y }
// Ejemplo: { x: 450, y: 300 }
//
// ¿Cómo se llama esta función?
// pos = obtenerPosicionAleatoria(200, 150);
// → Le pasas ancho=200 y alto=150
// → Te devuelve { x: 450, y: 300 } (ejemplo)


    const maxX = window.innerWidth - ancho;
    // ============================================================
    // CALCULAR POSICIÓN HORIZONTAL MÁXIMA
    // ============================================================
    // const maxX = ... → Crear constante llamada maxX
    //
    // window.innerWidth = ancho VISIBLE de la ventana del navegador
    // → Si tu ventana mide 1920px de ancho, innerWidth = 1920
    //
    // - ancho = restar el ancho de la imagen
    //
    // ¿Por qué restar el ancho?
    // Para que la imagen NO se salga por la derecha
    //
    // EJEMPLO:
    // window.innerWidth = 1920px (ancho de ventana)
    // ancho = 200px (ancho de imagen)
    // maxX = 1920 - 200 = 1720px
    //
    // Si pones la imagen en x = 1720:
    // ┌────────────────────────┐
    // │                  [img] │ ← Empieza en 1720, termina en 1920
    // │        Ventana         │    (1720 + 200 = 1920)
    // └────────────────────────┘
    //                          ^
    //                        1920px
    //
    // La imagen cabe PERFECTAMENTE dentro de la ventana ✓
    //
    // Si no restáramos el ancho:
    // x = 1920 → imagen termina en 2120 → se sale 200px ❌
    //
    // const porque este valor NO cambia durante esta ejecución
    
    
    const maxY = window.innerHeight - alto;
    // ============================================================
    // CALCULAR POSICIÓN VERTICAL MÁXIMA
    // ============================================================
    // const maxY = ... → Crear constante llamada maxY
    //
    // window.innerHeight = alto VISIBLE de la ventana del navegador
    // → Si tu ventana mide 1080px de alto, innerHeight = 1080
    //
    // - alto = restar el alto de la imagen
    //
    // ¿Por qué restar el alto?
    // Para que la imagen NO se salga por abajo
    //
    // EJEMPLO:
    // window.innerHeight = 1080px
    // alto = 150px
    // maxY = 1080 - 150 = 930px
    //
    // Mismo concepto que maxX pero en vertical ✓
    
    
    // Espacio reservado para el botón (top: 20px + altura del botón + margen)
    // ============================================================
    // Comentario explicando qué es espacioBoton
    
    
    const espacioBoton = 80;
    // ============================================================
    // RESERVAR ESPACIO PARA EL BOTÓN
    // ============================================================
    // const espacioBoton = 80 → 80 píxeles reservados arriba
    //
    // ¿Por qué reservar espacio?
    // El botón está en la parte SUPERIOR de la página
    // Si ponemos una imagen en top = 0, se SUPERPONE al botón
    // El usuario no podría hacer clic en el botón ❌
    //
    // SOLUCIÓN:
    // Reservamos los primeros 80px para el botón
    // Las imágenes solo pueden aparecer DEBAJO de esos 80px
    //
    // DESGLOSE de los 80px:
    // - top: 20px (posición del botón desde arriba)
    // - ~40px (altura aproximada del botón)
    // - ~20px (margen de seguridad)
    // ───────
    // TOTAL: ~80px
    //
    // Esto asegura que el botón SIEMPRE sea clickeable ✓
    //
    // Ejemplo visual:
    // ┌─────────────────────┐
    // │ [   Botón   ]       │ ← 0-80px (zona reservada)
    // ├─────────────────────┤ ← 80px
    // │                     │
    // │  [img]       [img]  │ ← Las imágenes SOLO pueden aparecer aquí
    // │         [img]       │
    // └─────────────────────┘
    
    
    const x = Math.floor(Math.random() * maxX);
    // ============================================================
    // GENERAR POSICIÓN HORIZONTAL ALEATORIA
    // ============================================================
    // const x = ... → Crear constante para posición horizontal
    //
    // DESGLOSE:
    //
    // Math.random()
    // → Genera número decimal aleatorio entre 0 y 1
    // → Ejemplo: 0.7341
    //
    // * maxX
    // → Multiplica por maxX (límite máximo horizontal)
    // → Ejemplo: 0.7341 * 1720 = 1262.652
    //
    // Math.floor(...)
    // → Redondea HACIA ABAJO (elimina decimales)
    // → Ejemplo: Math.floor(1262.652) = 1262
    //
    // RESULTADO: x = 1262 (posición horizontal en píxeles)
    //
    // RANGO: x puede ser de 0 a maxX
    // → Si maxX = 1720, entonces x = 0 a 1720
    //
    // Es como tirar un dado gigante que va del 0 al 1720
    
    
    // La posición Y empieza después del espacio del botón
    // ============================================================
    // Comentario explicando la siguiente línea
    
    
    const y = espacioBoton + Math.floor(Math.random() * (maxY - espacioBoton));
    // ============================================================
    // GENERAR POSICIÓN VERTICAL ALEATORIA (DEBAJO DEL BOTÓN)
    // ============================================================
    // const y = ... → Crear constante para posición vertical
    //
    // Esta línea es MÁS COMPLEJA porque considera el espacioBoton
    //
    // DESGLOSE PASO A PASO:
    //
    // 1. (maxY - espacioBoton)
    //    Calcular el espacio DISPONIBLE para las imágenes
    //    
    //    Ejemplo:
    //    maxY = 930 (máximo vertical)
    //    espacioBoton = 80 (reservado para botón)
    //    maxY - espacioBoton = 930 - 80 = 850
    //    → Hay 850px disponibles DEBAJO del botón
    //
    // 2. Math.random() * (maxY - espacioBoton)
    //    Generar número aleatorio en ese rango
    //    
    //    Ejemplo:
    //    Math.random() = 0.5
    //    0.5 * 850 = 425
    //
    // 3. Math.floor(...)
    //    Redondear hacia abajo
    //    
    //    Math.floor(425) = 425
    //
    // 4. espacioBoton + ...
    //    SUMAR el espacioBoton al resultado
    //    
    //    80 + 425 = 505
    //
    // RESULTADO: y = 505
    //
    // ¿Por qué sumar espacioBoton?
    // Para que la posición empiece DESPUÉS del botón
    //
    // RANGO RESULTANTE:
    // y puede ser de 80 (espacioBoton) a 930 (maxY)
    //
    // NUNCA será menor de 80 → NUNCA tapa el botón ✓
    //
    // EJEMPLO VISUAL:
    // Sin espacioBoton:
    //   y = 0 a 930 → puede tapar botón ❌
    // Con espacioBoton:
    //   y = 80 a 930 → NUNCA tapa botón ✓
    
    
    return { x, y };
    // ============================================================
    // DEVOLVER (RETORNAR) LAS COORDENADAS
    // ============================================================
    // return = devolver un valor (salir de la función con un resultado)
    //
    // { x, y } = OBJETO con dos propiedades
    //
    // ES6 SHORTHAND SYNTAX (sintaxis corta):
    // { x, y } es igual a { x: x, y: y }
    //
    // DESGLOSE:
    // {
    //   x: x,    ← propiedad x con valor de la variable x
    //   y: y     ← propiedad y con valor de la variable y
    // }
    //
    // EJEMPLO:
    // Si x = 1262 y y = 505
    // Devuelve: { x: 1262, y: 505 }
    //
    // ¿Cómo se usa después?
    // const pos = obtenerPosicionAleatoria(200, 150);
    // console.log(pos.x); // 1262
    // console.log(pos.y); // 505
    //
    // Es como una caja con dos compartimentos:
    // ┌─────────────┐
    // │ x: 1262     │
    // │ y: 505      │
    // └─────────────┘
}
// Fin de la función obtenerPosicionAleatoria


// ============================================================
// 💡 EXPLICACIÓN ESTILO FEYNMAN: obtenerPosicionAleatoria
// ============================================================
// Imagina que tienes que pegar un sticker en una pizarra:
//
// 1. Mides la pizarra: 1920px ancho × 1080px alto
// 2. Mides el sticker: 200px ancho × 150px alto
// 3. Calculas dónde puede ir sin salirse:
//    - Horizontal: de 0 a 1720 (1920 - 200)
//    - Vertical: de 80 a 930 (1080 - 150, pero empieza en 80)
// 4. Tiras dos dados:
//    - Dado X: sale 1262
//    - Dado Y: sale 505
// 5. Pegas el sticker en (1262, 505)
// 6. ¡El sticker cabe perfectamente y no tapa el botón!


// Función para reposicionar todas las imágenes
// ============================================================
// Comentario explicando la siguiente función


function reposicionarImagenes() {
// ============================================================
// FUNCIÓN: reposicionarImagenes
// ============================================================
// Esta función MUEVE todas las imágenes a posiciones aleatorias
//
// function reposicionarImagenes() = función sin parámetros
// No recibe nada entre los paréntesis ()
//
// ¿Cuándo se ejecuta?
// 1. Al cargar la página (posicionamiento inicial)
// 2. Al hacer clic en el botón
// 3. Al redimensionar la ventana
//
// ¿Qué hace?
// 1. Busca TODAS las imágenes con class="imagen"
// 2. Para cada imagen:
//    - Obtiene su tamaño
//    - Calcula posición aleatoria
//    - Mueve la imagen a esa posición


    const imagenes = document.querySelectorAll('.imagen');
    // ============================================================
    // BUSCAR TODAS LAS IMÁGENES
    // ============================================================
    // const imagenes = ... → Crear constante
    //
    // document.querySelectorAll('.imagen')
    // → Busca TODOS los elementos con class="imagen"
    //
    // IMPORTANTE: querySelectorAll (plural)
    // querySelector → busca UNO (el primero)
    // querySelectorAll → busca TODOS
    //
    // '.imagen' = SELECTOR CSS
    // El punto . significa "clase"
    // → Busca elementos con class="imagen"
    //
    // En tu HTML tendrías:
    // <img class="imagen" src="...">
    // <img class="imagen" src="...">
    // <img class="imagen" src="...">
    //
    // RESULTADO:
    // imagenes es una LISTA (NodeList) con las 3 imágenes
    // Es como un array: [img1, img2, img3]
    //
    // Puedes recorrerla con:
    // - forEach (lo que usas) ✓
    // - for tradicional
    // - for...of
    //
    // DIFERENCIA: querySelector vs querySelectorAll
    // querySelector('.imagen') → solo la PRIMERA imagen
    // querySelectorAll('.imagen') → TODAS las imágenes ✓
    
    
    imagenes.forEach(img => {
    // ============================================================
    // RECORRER CADA IMAGEN
    // ============================================================
    // .forEach() = método para recorrer una lista
    //
    // Es como decir: "Para CADA imagen en la lista, haz esto:"
    //
    // SINTAXIS:
    // imagenes.forEach(img => { ... })
    //
    // img = parámetro (representa cada imagen en cada vuelta)
    // => = arrow function (función flecha)
    // { ... } = código que se ejecuta para cada imagen
    //
    // FLUJO:
    // Vuelta 1: img = primera imagen
    // Vuelta 2: img = segunda imagen
    // Vuelta 3: img = tercera imagen
    //
    // Es como hacer:
    // for (let i = 0; i < imagenes.length; i++) {
    //     let img = imagenes[i];
    //     // código
    // }
    // Pero forEach es MÁS LIMPIO y MODERNO ✓
    //
    // ARROW FUNCTION (=>):
    // Forma moderna de escribir funciones (ES6)
    //
    // Forma antigua:
    // imagenes.forEach(function(img) {
    //     // código
    // });
    //
    // Forma moderna (lo que usas):
    // imagenes.forEach(img => {
    //     // código
    // });
    // → Más corta y clara ✓
    
    
        const ancho = img.offsetWidth;
        // ============================================================
        // OBTENER ANCHO DE LA IMAGEN
        // ============================================================
        // const ancho = img.offsetWidth
        //
        // img.offsetWidth = ancho REAL del elemento en píxeles
        // Incluye: contenido + padding + bordes
        //
        // Ejemplo:
        // Si la imagen mide 200px de ancho
        // ancho = 200
        //
        // IMPORTANTE: offsetWidth vs otras propiedades
        //
        // .offsetWidth = ancho TOTAL (contenido + padding + borde)
        // → Lo que realmente ocupa ✓
        //
        // .clientWidth = ancho sin bordes (contenido + padding)
        //
        // .width = solo en CSS inline style
        //
        // Para este ejercicio, offsetWidth es PERFECTO ✓
        
        
        const alto = img.offsetHeight;
        // ============================================================
        // OBTENER ALTO DE LA IMAGEN
        // ============================================================
        // const alto = img.offsetHeight
        //
        // img.offsetHeight = alto REAL del elemento en píxeles
        //
        // Ejemplo:
        // Si la imagen mide 150px de alto
        // alto = 150
        //
        // Mismo concepto que offsetWidth pero vertical
        
        
        const pos = obtenerPosicionAleatoria(ancho, alto);
        // ============================================================
        // CALCULAR POSICIÓN ALEATORIA
        // ============================================================
        // const pos = obtenerPosicionAleatoria(ancho, alto)
        //
        // LLAMADA A LA FUNCIÓN que definimos antes
        //
        // Le pasamos:
        // - ancho de la imagen (200)
        // - alto de la imagen (150)
        //
        // Recibimos:
        // - Un objeto { x: 1262, y: 505 } (ejemplo)
        //
        // pos.x = posición horizontal
        // pos.y = posición vertical
        //
        // Esta posición es ALEATORIA y VÁLIDA
        // (no se sale de la pantalla ni tapa el botón)
        
        
        img.style.left = pos.x + 'px';
        // ============================================================
        // APLICAR POSICIÓN HORIZONTAL
        // ============================================================
        // img.style.left = ... → Cambiar propiedad CSS left
        //
        // pos.x + 'px' → Añadir "px" al número
        //
        // Ejemplo:
        // pos.x = 1262
        // pos.x + 'px' = "1262px"
        //
        // ¿Por qué añadir 'px'?
        // En CSS, las distancias necesitan UNIDADES:
        // left: 1262px ✓ CORRECTO
        // left: 1262   ✗ INCORRECTO (no funciona)
        //
        // En JavaScript:
        // img.style.left = "1262px" ✓
        // img.style.left = 1262     ✗ (no funciona)
        //
        // RESULTADO:
        // La imagen se mueve 1262px desde la IZQUIERDA
        //
        // IMPORTANTE:
        // Para que esto funcione, la imagen debe tener:
        // position: absolute (o fixed) en el CSS
        //
        // Sin position: absolute, left no tiene efecto
        
        
        img.style.top = pos.y + 'px';
        // ============================================================
        // APLICAR POSICIÓN VERTICAL
        // ============================================================
        // img.style.top = ... → Cambiar propiedad CSS top
        //
        // pos.y + 'px' → Añadir "px" al número
        //
        // Ejemplo:
        // pos.y = 505
        // pos.y + 'px' = "505px"
        //
        // RESULTADO:
        // La imagen se mueve 505px desde ARRIBA
        //
        // La imagen ahora está en la posición (1262, 505)
        //
        // ┌─────────────────────────┐
        // │ [Botón]                 │
        // │                         │
        // │          [Imagen]       │ ← En (1262, 505)
        // │                         │
        // └─────────────────────────┘
        
    });
    // Fin del forEach
    // Ya se movieron TODAS las imágenes a posiciones aleatorias
}
// Fin de la función reposicionarImagenes


// ============================================================
// 💡 EXPLICACIÓN ESTILO FEYNMAN: reposicionarImagenes
// ============================================================
// Imagina que tienes 3 stickers en una pizarra:
//
// 1. Haces una lista de los 3 stickers
// 2. Para CADA sticker:
//    a) Mides cuánto mide el sticker
//    b) Calculas una posición aleatoria (sin salirse)
//    c) Mueves el sticker a esa posición
// 3. ¡Todos los stickers están en nuevas posiciones aleatorias!


// Esperar a que el DOM esté completamente cargado
// ============================================================
// Comentario explicando DOMContentLoaded


document.addEventListener('DOMContentLoaded', function() {
// ============================================================
// EVENTO: Cuando la página termina de cargar
// ============================================================
// document.addEventListener('DOMContentLoaded', ...)
//
// DOMContentLoaded = evento que se dispara cuando:
// - El HTML está completamente cargado
// - El DOM está construido y listo
// - ANTES de que se carguen imágenes, hojas de estilo, etc.
//
// ¿Por qué usar esto?
// Para asegurarnos de que los elementos HTML existen
// antes de intentar manipularlos con JavaScript
//
// SIN DOMContentLoaded:
// script se ejecuta → busca elementos → NO existen todavía → ERROR ❌
//
// CON DOMContentLoaded:
// HTML carga → DOM listo → script se ejecuta → elementos existen → TODO OK ✓
//
// ALTERNATIVAS:
//
// 1. Poner <script> al FINAL del <body> (tu forma anterior)
//    → Funciona porque el HTML ya está cargado
//
// 2. Usar DOMContentLoaded (esta forma)
//    → Más profesional y seguro
//    → Funciona aunque el script esté en el <head>
//
// 3. Usar window.onload
//    → Espera a que TODO esté cargado (incluso imágenes)
//    → Más lento
//
// DOMContentLoaded es la MEJOR PRÁCTICA para JavaScript ✓
//
// function() { ... } = función que se ejecuta cuando el DOM esté listo


    // Event listener para el botón
    // ============================================================
    // Comentario explicando la siguiente línea
    
    
    document.getElementById('boton').addEventListener('click', reposicionarImagenes);
    // ============================================================
    // AÑADIR EVENTO AL BOTÓN
    // ============================================================
    // document.getElementById('boton')
    // → Busca el elemento con id="boton"
    //
    // .addEventListener('click', reposicionarImagenes)
    // → Añade un "escuchador" de clics
    //
    // 'click' = tipo de evento (clic del ratón)
    //
    // reposicionarImagenes = función que se ejecuta al hacer clic
    //
    // IMPORTANTE: SIN PARÉNTESIS
    // reposicionarImagenes    ✓ CORRECTO (referencia a la función)
    // reposicionarImagenes()  ✗ INCORRECTO (ejecuta la función inmediatamente)
    //
    // ¿Qué pasa cuando el usuario hace clic en el botón?
    // 1. Se detecta el clic
    // 2. Se ejecuta reposicionarImagenes()
    // 3. Todas las imágenes se mueven a nuevas posiciones
    //
    // Es como decir:
    // "Oye navegador, cuando hagan clic en el botón,
    //  ejecuta la función reposicionarImagenes"
    
    
    // Posicionar las imágenes al cargar la página
    // ============================================================
    // Comentario explicando la siguiente línea
    
    
    reposicionarImagenes();
    // ============================================================
    // POSICIONAMIENTO INICIAL
    // ============================================================
    // reposicionarImagenes() → Ejecutar la función AHORA
    //
    // IMPORTANTE: CON PARÉNTESIS
    // reposicionarImagenes() ✓ EJECUTA la función
    // reposicionarImagenes   ✗ Solo hace referencia, no ejecuta
    //
    // ¿Por qué ejecutarla aquí?
    // Para que las imágenes tengan posiciones aleatorias
    // desde el INICIO (cuando se carga la página)
    //
    // Sin esta línea:
    // - Las imágenes aparecen en posición por defecto (arriba izquierda)
    // - Solo se mueven cuando haces clic en el botón
    //
    // Con esta línea:
    // - Las imágenes YA aparecen en posiciones aleatorias ✓
    // - Luego puedes hacer clic para moverlas de nuevo
    
});
// Fin del addEventListener de DOMContentLoaded
// Fin de la función que se ejecuta cuando el DOM está listo


// Reposicionar al cambiar el tamaño de la ventana
// ============================================================
// Comentario explicando el siguiente código


window.addEventListener('resize', reposicionarImagenes);
// ============================================================
// EVENTO: Cuando se redimensiona la ventana
// ============================================================
// window.addEventListener('resize', ...)
//
// window = la ventana del navegador completa
//
// 'resize' = evento que se dispara cuando:
// - El usuario cambia el tamaño de la ventana
// - Arrastra el borde de la ventana para hacerla más grande/pequeña
// - Maximiza/minimiza la ventana
// - Rota el dispositivo móvil (portrait ↔ landscape)
//
// reposicionarImagenes = función que se ejecuta al redimensionar
//
// ¿Por qué hacer esto?
// Si cambias el tamaño de la ventana:
// - window.innerWidth y window.innerHeight cambian
// - Las posiciones calculadas antes pueden ser inválidas
// - Una imagen podría salirse de la nueva ventana más pequeña
//
// SOLUCIÓN:
// Recalcular posiciones cuando cambie el tamaño ✓
//
// FLUJO:
// 1. Usuario carga página → imágenes en posiciones aleatorias
// 2. Usuario hace ventana más pequeña → resize event
// 3. Se ejecuta reposicionarImagenes()
// 4. Imágenes se recolocan en nuevas posiciones válidas
// 5. ¡Nada se sale de la pantalla! ✓
//
// NOTA IMPORTANTE:
// Esta línea está FUERA del DOMContentLoaded
// Se añade después, pero funciona porque el DOM ya está listo
//
// También podría estar DENTRO del DOMContentLoaded:
// document.addEventListener('DOMContentLoaded', function() {
//     // código del botón
//     reposicionarImagenes();
//     window.addEventListener('resize', reposicionarImagenes);
// });
// → Ambas formas funcionan ✓


// ============================================================
// 🔍 FLUJO COMPLETO - EJEMPLO PASO A PASO:
// ============================================================

// 1. CARGA DE LA PÁGINA:
//    - HTML se carga
//    - JavaScript se carga
//    - DOMContentLoaded se dispara
//    - Se ejecuta: reposicionarImagenes()
//      • Busca las 3 imágenes
//      • Para cada imagen:
//        - Obtiene tamaño (200x150)
//        - Calcula posición aleatoria (no se sale, no tapa botón)
//        - Mueve imagen a esa posición
//    - Se añade evento click al botón
//    - Se añade evento resize a la ventana

// 2. USUARIO HACE CLIC EN EL BOTÓN:
//    - Se detecta el clic
//    - Se ejecuta: reposicionarImagenes()
//    - Todas las imágenes se mueven a NUEVAS posiciones aleatorias

// 3. USUARIO REDIMENSIONA LA VENTANA:
//    - Se detecta el resize
//    - Se ejecuta: reposicionarImagenes()
//    - Todas las imágenes se recolocan para adaptarse al nuevo tamaño


// ============================================================
// 📌 CONCEPTOS CLAVE PARA EL EXAMEN:
// ============================================================

// 1. FUNCIONES CON PARÁMETROS:
//    function nombre(param1, param2) { }

// 2. FUNCIONES SIN PARÁMETROS:
//    function nombre() { }

// 3. RETORNAR VALORES:
//    return { x, y };

// 4. window.innerWidth / innerHeight:
//    Dimensiones de la ventana visible

// 5. CALCULAR LÍMITES:
//    max = ventana - tamaño_elemento

// 6. querySelectorAll:
//    Busca TODOS los elementos que coincidan

// 7. forEach:
//    Recorre una lista elemento por elemento

// 8. offsetWidth / offsetHeight:
//    Tamaño real del elemento

// 9. CAMBIAR POSICIÓN:
//    elemento.style.left = valor + 'px'
//    elemento.style.top = valor + 'px'

// 10. EVENTOS:
//     DOMContentLoaded → DOM listo
//     click → clic del ratón
//     resize → cambio de tamaño de ventana

// 11. AÑADIR EVENTOS:
//     elemento.addEventListener(tipo, funcion)

// 12. EJECUTAR vs REFERENCIAR:
//     funcion()  → EJECUTA
//     funcion    → REFERENCIA (para addEventListener)


// ============================================================
// 💡 MEJORAS IMPLEMENTADAS (vs versión básica):
// ============================================================

// 1. ESPACIO PARA EL BOTÓN:
//    espacioBoton = 80 → botón siempre clickeable ✓

// 2. POSICIONAMIENTO INICIAL:
//    reposicionarImagenes() al cargar → imágenes ya dispersas ✓

// 3. RESPONSIVE:
//    resize event → se adapta al cambiar tamaño ventana ✓

// 4. CÓDIGO MODULAR:
//    Función obtenerPosicionAleatoria separada → reutilizable ✓

// 5. DOM READY:
//    DOMContentLoaded → seguro aunque script esté en <head> ✓


// ============================================================
// 📌 RESUMEN ULTRA CORTO:
// ============================================================
// 1. obtenerPosicionAleatoria(ancho, alto):
//    - Calcula límites (ventana - tamaño)
//    - Genera x aleatorio (0 a maxX)
//    - Genera y aleatorio (80 a maxY) para no tapar botón
//    - Devuelve { x, y }

// 2. reposicionarImagenes():
//    - Busca todas las imágenes
//    - Para cada una:
//      • Obtiene tamaño
//      • Calcula posición aleatoria
//      • Aplica posición (left, top)

// 3. EVENTOS:
//    - DOMContentLoaded → posicionar al cargar
//    - click en botón → reposicionar
//    - resize ventana → reposicionar