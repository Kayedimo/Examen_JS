// ============================================================
// EJERCICIO 2: Ocultar y Mostrar Imagen
// ============================================================


const imagen = document.getElementById("harry");
// ============================================================
// GUARDAR REFERENCIA A LA IMAGEN
// ============================================================
// const imagen = ... → Crear una constante llamada "imagen"
//
// DESGLOSE:
// document → El documento HTML completo (la página web)
// .getElementById("harry") → Busca el elemento con id="harry"
//
// En tu HTML tienes:
// <img id="harry" src="..." alt="Harry Potter">
//
// Esta línea ENCUENTRA esa imagen y la guarda en la variable
//
// ¿Qué guardamos exactamente?
// Una REFERENCIA al elemento <img>
// No guardamos la imagen en sí, sino la "dirección" donde está
//
// Es como tener la DIRECCIÓN de una casa:
// No tienes la casa, pero sabes dónde está
// Cuando la necesites, puedes ir a esa dirección
//
// ¿Por qué const?
// Porque la referencia NO cambia
// Siempre apunta al mismo elemento <img>
//
// Lo que SÍ cambia es el ESTILO de la imagen:
// imagen.style.display = "none"  → se oculta
// imagen.style.display = "block" → se muestra
// Pero sigue siendo el MISMO elemento
//
// IMPORTANTE:
// Esta línea se ejecuta UNA SOLA VEZ cuando se carga la página
// Guardamos la referencia para usarla después


const boton = document.getElementById("mostrarBtn");
// ============================================================
// GUARDAR REFERENCIA AL BOTÓN
// ============================================================
// const boton = ... → Crear una constante llamada "boton"
//
// document.getElementById("mostrarBtn") → Busca el botón con id="mostrarBtn"
//
// En tu HTML tienes:
// <button id="mostrarBtn">Mostrar imagen</button>
//
// Esta línea ENCUENTRA ese botón y lo guarda en la variable
//
// Igual que con la imagen:
// - Guardamos una REFERENCIA (dirección)
// - No guardamos el botón en sí
// - Es una constante porque la referencia no cambia
//
// ¿Para qué guardamos la referencia?
// Para poder detectar cuando el usuario hace clic en él
// y ejecutar código
//
// ALTERNATIVA (sin guardar en variable):
// document.getElementById("mostrarBtn").addEventListener(...)
//
// Pero guardar en variable es MÁS CLARO:
// boton.addEventListener(...)
// → Se lee mejor ✓


// ============================================================
// EXPLICACIÓN: ¿Por qué guardar referencias al inicio?
// ============================================================
// VENTAJAS:
// 1. MÁS EFICIENTE:
//    Buscas el elemento UNA vez
//    No tienes que buscarlo cada vez que lo uses
//
// 2. MÁS CLARO:
//    boton.addEventListener(...)
//    imagen.style.display = "none"
//    → Se lee mejor que document.getElementById(...) cada vez
//
// 3. MENOS ERRORES:
//    Si te equivocas en el id, el error aparece al inicio
//    No en medio de tu código
//
// ES BUENA PRÁCTICA ✓


// Al hacer clic en la imagen, se oculta
// ============================================================
// Comentario explicando qué hace el siguiente código


imagen.addEventListener("click", function () {
// ============================================================
// DETECTAR CLIC EN LA IMAGEN
// ============================================================
// Esta línea AÑADE un "escuchador" de eventos a la imagen
//
// DESGLOSE POR PARTES:
//
// PARTE 1: imagen
// ────────────────
// Es la referencia al <img> que guardamos antes
// const imagen = document.getElementById("harry");
//
//
// PARTE 2: .addEventListener("click", ...)
// ─────────────────────────────────────────
// addEventListener = "añadir escuchador de eventos"
//
// Es como poner una alarma que detecta cuando pasa algo
// En este caso, detecta CLICS
//
// "click" = el tipo de evento
// Significa: "Cuando el usuario haga CLIC en la imagen"
//
// Otros eventos posibles:
// "mouseover" → cuando el ratón pasa por encima
// "mouseout" → cuando el ratón sale
// "dblclick" → doble clic
// "load" → cuando la imagen termina de cargar
//
//
// PARTE 3: function () { ... }
// ─────────────────────────────
// Es una FUNCIÓN ANÓNIMA
// = Una función sin nombre
//
// El código entre { y } se ejecuta cuando:
// 1. El usuario hace clic en la imagen
// 2. El navegador detecta el clic
// 3. Se ejecuta esta función
//
//
// RESUMEN EN LENGUAJE HUMANO:
// "Oye navegador, cuando el usuario haga clic en la imagen,
//  ejecuta este código que te voy a dar"
//
//
// FLUJO:
// 1. Usuario hace clic en la imagen de Harry Potter
// 2. El navegador detecta el clic
// 3. Se ejecuta la función
// 4. El código dentro de { } se ejecuta


    imagen.style.display = "none";
    // ============================================================
    // OCULTAR LA IMAGEN
    // ============================================================
    // Esta línea OCULTA la imagen
    //
    // DESGLOSE:
    //
    // imagen → La referencia al <img> que tenemos guardada
    //
    // .style → Accede a los ESTILOS CSS del elemento
    //          Aquí podemos cambiar cualquier propiedad CSS
    //
    // .display → Propiedad CSS que controla cómo se muestra el elemento
    //
    // = "none" → Le asignamos el valor "none" (ninguno)
    //
    //
    // ¿Qué hace display: none?
    // - El elemento se vuelve INVISIBLE
    // - NO ocupa espacio en la página
    // - Es como si no existiera
    //
    //
    // VALORES DE DISPLAY:
    //
    // "none"
    // → Oculto, NO ocupa espacio
    // → Usado aquí para OCULTAR ✓
    //
    // "block"
    // → Visible, ocupa todo el ancho disponible
    // → Usado para MOSTRAR (más adelante)
    //
    // "inline"
    // → Visible, solo ocupa su ancho (como texto)
    //
    // "inline-block"
    // → Visible, se comporta como inline pero permite width/height
    //
    //
    // ALTERNATIVAS PARA OCULTAR (mencionadas en el ejercicio):
    //
    // 1. visibility: hidden
    //    imagen.style.visibility = "hidden";
    //    → Invisible pero SIGUE ocupando espacio
    //    → Como un coche invisible: no lo ves pero está ahí
    //
    // 2. hidden attribute
    //    imagen.hidden = true;
    //    → Igual que display: none
    //    → Forma más moderna
    //
    // Tu solución con display: none es PERFECTA ✓
    //
    //
    // IMPORTANTE: Siempre añadir entre COMILLAS
    // imagen.style.display = "none";  ✓ CORRECTO
    // imagen.style.display = none;    ✗ INCORRECTO (da error)
    //
    //
    // ¿Qué pasa en la pantalla?
    // ANTES del clic:
    // ┌────────────────┐
    // │ [Imagen Harry] │ ← Visible
    // └────────────────┘
    // [ Mostrar imagen ]
    //
    // DESPUÉS del clic:
    // 
    // [ Mostrar imagen ] ← La imagen desapareció, el botón subió
    //
    // NO hay espacio vacío donde estaba la imagen
    // porque display: none NO ocupa espacio
    
});
// Aquí termina el addEventListener de la imagen
// Aquí termina la función anónima


// Al hacer clic en el botón, se vuelve a mostrar
// ============================================================
// Comentario explicando qué hace el siguiente código


boton.addEventListener("click", function () {
// ============================================================
// DETECTAR CLIC EN EL BOTÓN
// ============================================================
// Similar al addEventListener anterior, pero ahora en el BOTÓN
//
// boton → La referencia al <button> que guardamos antes
// .addEventListener("click", ...) → Detectar clics en el botón
// function () { } → Función que se ejecuta al hacer clic
//
//
// FLUJO:
// 1. Usuario hace clic en el botón "Mostrar imagen"
// 2. El navegador detecta el clic
// 3. Se ejecuta esta función
// 4. El código dentro de { } se ejecuta


    imagen.style.display = "block";
    // ============================================================
    // MOSTRAR LA IMAGEN
    // ============================================================
    // Esta línea MUESTRA la imagen que estaba oculta
    //
    // imagen.style.display = "block"
    //
    // "block" = mostrar como elemento de bloque
    //
    // ¿Qué hace display: block?
    // - El elemento se vuelve VISIBLE
    // - Ocupa todo el ancho disponible
    // - Aparece en una nueva línea
    //
    // Es el valor OPUESTO a "none"
    // "none" → ocultar
    // "block" → mostrar
    //
    //
    // ¿Por qué "block" y no otro valor?
    //
    // Las imágenes por defecto son display: inline
    // Pero "block" funciona perfectamente para mostrarlas
    //
    // También podrías usar:
    // imagen.style.display = "inline";       ✓ funciona
    // imagen.style.display = "inline-block"; ✓ funciona
    //
    // Pero "block" es el más común y claro ✓
    //
    //
    // ALTERNATIVAS PARA MOSTRAR:
    //
    // 1. visibility: visible
    //    imagen.style.visibility = "visible";
    //    (si usaste visibility: hidden para ocultar)
    //
    // 2. hidden attribute
    //    imagen.hidden = false;
    //    (si usaste imagen.hidden = true para ocultar)
    //
    //
    // ¿Qué pasa en la pantalla?
    // ANTES del clic (imagen oculta):
    // 
    // [ Mostrar imagen ]
    //
    // DESPUÉS del clic:
    // ┌────────────────┐
    // │ [Imagen Harry] │ ← Reaparece
    // └────────────────┘
    // [ Mostrar imagen ]
    //
    // La imagen vuelve a aparecer en su posición original
    
});
// Aquí termina el addEventListener del botón
// Aquí termina la función anónima


// ============================================================
// 🔍 FLUJO COMPLETO - EJEMPLO PASO A PASO:
// ============================================================

// AL CARGAR LA PÁGINA:
// ───────────────────────────────────────
// 1. Se carga el HTML
// 2. Se carga el JavaScript
// 3. Se ejecuta: const imagen = document.getElementById("harry");
//    → Se guarda la referencia a la imagen
// 4. Se ejecuta: const boton = document.getElementById("mostrarBtn");
//    → Se guarda la referencia al botón
// 5. Se ejecuta: imagen.addEventListener("click", ...)
//    → Se añade el detector de clics a la imagen
// 6. Se ejecuta: boton.addEventListener("click", ...)
//    → Se añade el detector de clics al botón
// 7. La página está lista
// 8. La imagen es VISIBLE (display: block por defecto)


// USUARIO HACE CLIC EN LA IMAGEN:
// ───────────────────────────────────────
// 1. Se detecta el clic en la imagen
// 2. Se ejecuta: imagen.style.display = "none";
// 3. La imagen DESAPARECE
// 4. El botón sigue visible


// USUARIO HACE CLIC EN EL BOTÓN:
// ───────────────────────────────────────
// 1. Se detecta el clic en el botón
// 2. Se ejecuta: imagen.style.display = "block";
// 3. La imagen REAPARECE
// 4. Ahora puede volver a hacer clic en la imagen para ocultarla


// ============================================================
// 📊 DIAGRAMA DE FLUJO:
// ============================================================
//
//      Página cargada
//      Imagen VISIBLE
//            ↓
//    ┌───────┴───────┐
//    ↓               ↓
// Clic en      Clic en
// IMAGEN       BOTÓN
//    ↓               ↓
// display:      display:
// "none"        "block"
//    ↓               ↓
// OCULTAR       MOSTRAR
//    ↓               ↓
//    └───────┬───────┘
//            ↓
//       Volver al inicio


// ============================================================
// 💡 DIFERENCIA: display vs visibility
// ============================================================

// DISPLAY: NONE
// ─────────────────────────────────────
// imagen.style.display = "none";
// 
// ✓ INVISIBLE
// ✓ NO ocupa espacio
// ✓ Los elementos de abajo SUBEN
//
// Ejemplo visual:
// ANTES:    DESPUÉS:
// Título    Título
// [Imagen]  [Botón] ← El botón subió
// [Botón]


// VISIBILITY: HIDDEN
// ─────────────────────────────────────
// imagen.style.visibility = "hidden";
//
// ✓ INVISIBLE
// ✗ SÍ ocupa espacio (deja hueco vacío)
// ✗ Los elementos NO se mueven
//
// Ejemplo visual:
// ANTES:    DESPUÉS:
// Título    Título
// [Imagen]  [       ] ← Espacio vacío
// [Botón]   [Botón]   ← NO se movió


// ============================================================
// 📌 CONCEPTOS CLAVE PARA EL EXAMEN:
// ============================================================

// 1. Guardar referencias:
//    const elemento = document.getElementById("id");

// 2. addEventListener:
//    elemento.addEventListener("click", function() {
//        // código
//    });

// 3. Cambiar estilos CSS:
//    elemento.style.propiedad = "valor";

// 4. Ocultar elemento:
//    elemento.style.display = "none";

// 5. Mostrar elemento:
//    elemento.style.display = "block";

// 6. Alternativas:
//    elemento.style.visibility = "hidden/visible";
//    elemento.hidden = true/false;


// ============================================================
// 💡 MEJORAS OPCIONALES:
// ============================================================

// MEJORA 1: Usar un solo botón que alterne (toggle)
// boton.addEventListener("click", function() {
//     if (imagen.style.display === "none") {
//         imagen.style.display = "block";
//         boton.textContent = "Ocultar imagen";
//     } else {
//         imagen.style.display = "none";
//         boton.textContent = "Mostrar imagen";
//     }
// });

// MEJORA 2: Animación suave con CSS
// En el CSS:
// img {
//     transition: opacity 0.3s;
// }
// En el JS:
// imagen.style.opacity = "0";  // Ocultar
// imagen.style.opacity = "1";  // Mostrar


// ============================================================
// 📌 RESUMEN ULTRA CORTO:
// ============================================================
// 1. Guardar referencias a imagen y botón
// 2. Clic en imagen → display: "none" (ocultar)
// 3. Clic en botón → display: "block" (mostrar)