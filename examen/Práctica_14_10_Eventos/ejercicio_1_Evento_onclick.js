// ============================================================
// EJERCICIO: Cambiar color de bandas al hacer clic
// ============================================================
// Este código genera colores hexadecimales aleatorios
// y los aplica a bandas cuando se hace clic en ellas


// Función para generar un color aleatorio en formato hexadecimal
// ============================================================
// Tu comentario original


function colorAleatorio() {
// ============================================================
// FUNCIÓN: colorAleatorio
// ============================================================
// function colorAleatorio() → Función sin parámetros
//
// ¿Qué hace?
// Genera un color aleatorio en formato hexadecimal
//
// ¿Qué es un color hexadecimal?
// Es un formato para representar colores en CSS/HTML
// Formato: #RRGGBB
// - # = símbolo de color hexadecimal
// - RR = componente ROJO (Red) de 00 a FF
// - GG = componente VERDE (Green) de 00 a FF
// - BB = componente AZUL (Blue) de 00 a FF
//
// EJEMPLOS:
// #FF0000 = rojo puro (máximo rojo, 0 verde, 0 azul)
// #00FF00 = verde puro
// #0000FF = azul puro
// #FFFFFF = blanco (máximo de todo)
// #000000 = negro (mínimo de todo)
// #FF5733 = naranja (mezcla de rojo, verde y azul)
//
// Cada componente va de 00 (0 en decimal) a FF (255 en decimal)
//
// RETORNA:
// Un string con el color aleatorio, ejemplo: "#A3F2B8"


    const letras = "0123456789ABCDEF";
    // ============================================================
    // CARACTERES HEXADECIMALES
    // ============================================================
    // const letras = "0123456789ABCDEF"
    //
    // String con todos los caracteres VÁLIDOS en hexadecimal
    //
    // SISTEMA HEXADECIMAL:
    // ───────────────────
    // Base 16 (no base 10 como decimal)
    //
    // Dígitos válidos:
    // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
    //
    // Valores:
    // 0 = 0 (decimal)
    // 1 = 1
    // ...
    // 9 = 9
    // A = 10 (decimal)
    // B = 11
    // C = 12
    // D = 13
    // E = 14
    // F = 15
    //
    // LONGITUD:
    // letras.length = 16 (16 caracteres)
    //
    // ACCESO:
    // letras[0] = "0"
    // letras[9] = "9"
    // letras[10] = "A"
    // letras[15] = "F"
    //
    // ¿Por qué const?
    // Porque este string NO cambia nunca


    let color = "#";
    // ============================================================
    // INICIALIZAR VARIABLE COLOR
    // ============================================================
    // let color = "#"
    //
    // Empezamos el color con "#"
    // Todos los colores hexadecimales empiezan con #
    //
    // Iremos AÑADIENDO 6 caracteres más
    // Resultado final: "#" + 6 caracteres = 7 caracteres totales
    // Ejemplo: "#A3F2B8"
    //
    // ¿Por qué let?
    // Porque vamos a MODIFICAR color (añadir caracteres con +=)


    for (let i = 0; i < 6; i++) {
    // ============================================================
    // BUCLE: Generar 6 caracteres hexadecimales
    // ============================================================
    // for (let i = 0; i < 6; i++)
    //
    // Este bucle se ejecuta EXACTAMENTE 6 veces
    //
    // ¿Por qué 6?
    // Porque un color hexadecimal tiene 6 dígitos (RR GG BB)
    // #RRGGBB
    //  123456 ← 6 dígitos
    //
    // DESGLOSE:
    //
    // let i = 0
    // → Empieza en 0
    //
    // i < 6
    // → Mientras i sea menor que 6
    // → Se ejecuta para i = 0, 1, 2, 3, 4, 5 (6 veces)
    //
    // i++
    // → Incrementa en cada vuelta
    //
    // FLUJO:
    // Vuelta 1: i = 0 → añadir carácter 1
    // Vuelta 2: i = 1 → añadir carácter 2
    // Vuelta 3: i = 2 → añadir carácter 3
    // Vuelta 4: i = 3 → añadir carácter 4
    // Vuelta 5: i = 4 → añadir carácter 5
    // Vuelta 6: i = 5 → añadir carácter 6
    
    
        color += letras[Math.floor(Math.random() * 16)];
        // ============================================================
        // AÑADIR CARÁCTER HEXADECIMAL ALEATORIO
        // ============================================================
        // color += letras[Math.floor(Math.random() * 16)]
        //
        // Esta línea es COMPLEJA, desglosémosla paso a paso:
        //
        //
        // PARTE 1: Math.random()
        // ──────────────────────
        // Math.random() → Genera número DECIMAL aleatorio
        // Rango: de 0 (inclusive) a 1 (exclusivo)
        //
        // EJEMPLOS:
        // Math.random() = 0.0
        // Math.random() = 0.732541
        // Math.random() = 0.999999
        // Math.random() = 0.5
        //
        // IMPORTANTE:
        // - SIEMPRE es decimal (con decimales)
        // - NUNCA llega exactamente a 1
        // - Puede ser exactamente 0
        //
        //
        // PARTE 2: Math.random() * 16
        // ────────────────────────────
        // Multiplicamos por 16
        //
        // ¿Por qué 16?
        // Porque hay 16 caracteres hexadecimales (0-9, A-F)
        // letras.length = 16
        //
        // RESULTADO:
        // Número decimal de 0 (inclusive) a 16 (exclusivo)
        //
        // EJEMPLOS:
        // 0.0 × 16 = 0.0
        // 0.5 × 16 = 8.0
        // 0.732541 × 16 = 11.720656
        // 0.999999 × 16 = 15.999984
        //
        // Rango: [0, 16)
        // → 0 SÍ puede salir
        // → 16 NO puede salir
        //
        //
        // PARTE 3: Math.floor(...)
        // ─────────────────────────
        // Math.floor() → Redondea HACIA ABAJO (elimina decimales)
        //
        // EJEMPLOS:
        // Math.floor(11.720656) = 11
        // Math.floor(15.999984) = 15
        // Math.floor(0.5) = 0
        // Math.floor(8.9) = 8
        //
        // RESULTADO FINAL:
        // Número ENTERO de 0 a 15
        //
        // Posibles valores: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
        //
        // ¡Son exactamente 16 valores! ✓
        // Perfectos para indexar el string "letras"
        //
        //
        // PARTE 4: letras[...]
        // ────────────────────
        // Acceso al string "letras" usando el índice aleatorio
        //
        // letras = "0123456789ABCDEF"
        //
        // EJEMPLOS:
        // Índice = 0  → letras[0]  = "0"
        // Índice = 5  → letras[5]  = "5"
        // Índice = 9  → letras[9]  = "9"
        // Índice = 10 → letras[10] = "A"
        // Índice = 15 → letras[15] = "F"
        //
        // RESULTADO:
        // Un CARÁCTER hexadecimal aleatorio
        //
        //
        // PARTE 5: color += ...
        // ─────────────────────
        // color += carácter → Añadir carácter al final de color
        //
        // Es igual a: color = color + carácter
        //
        //
        // EJEMPLO COMPLETO DE UNA EJECUCIÓN:
        // ───────────────────────────────────
        //
        // Inicio: color = "#"
        //
        // Vuelta 1:
        // Math.random() = 0.7 → 0.7 × 16 = 11.2 → Math.floor(11.2) = 11
        // letras[11] = "B"
        // color += "B" → color = "#B"
        //
        // Vuelta 2:
        // Math.random() = 0.3 → 0.3 × 16 = 4.8 → Math.floor(4.8) = 4
        // letras[4] = "4"
        // color += "4" → color = "#B4"
        //
        // Vuelta 3:
        // Math.random() = 0.95 → 0.95 × 16 = 15.2 → Math.floor(15.2) = 15
        // letras[15] = "F"
        // color += "F" → color = "#B4F"
        //
        // Vuelta 4:
        // Math.random() = 0.1 → 0.1 × 16 = 1.6 → Math.floor(1.6) = 1
        // letras[1] = "1"
        // color += "1" → color = "#B4F1"
        //
        // Vuelta 5:
        // Math.random() = 0.6 → 0.6 × 16 = 9.6 → Math.floor(9.6) = 9
        // letras[9] = "9"
        // color += "9" → color = "#B4F19"
        //
        // Vuelta 6:
        // Math.random() = 0.8 → 0.8 × 16 = 12.8 → Math.floor(12.8) = 12
        // letras[12] = "C"
        // color += "C" → color = "#B4F19C"
        //
        // RESULTADO FINAL: color = "#B4F19C"
        //
        //
        // VISUALIZACIÓN:
        // ──────────────
        // #  B   4   F   1   9   C
        // ↑  ↑   ↑   ↑   ↑   ↑   ↑
        // |  1   2   3   4   5   6  (caracteres añadidos)
        // inicio
        
    }
    // Fin del bucle
    // Ahora color tiene 7 caracteres: "#" + 6 dígitos
    
    
    return color;
    // ============================================================
    // DEVOLVER EL COLOR GENERADO
    // ============================================================
    // return color → Devuelve el string con el color
    //
    // EJEMPLO:
    // return "#B4F19C"
    //
    // Cuando llamas a la función:
    // const miColor = colorAleatorio();
    // → miColor = "#B4F19C"
    //
    // Este color se puede usar en CSS:
    // elemento.style.backgroundColor = miColor;
    // → Fondo de color #B4F19C
    
    }
// Fin de la función colorAleatorio


// ============================================================
// 💡 EXPLICACIÓN: ¿Por qué funciona este algoritmo?
// ============================================================
//
// OBJETIVO: Generar número aleatorio de 0 a 15
//
// PASO 1: Math.random()
// → Genera 0.0 ≤ x < 1.0
//
// PASO 2: × 16
// → Genera 0.0 ≤ x < 16.0
//
// PASO 3: Math.floor()
// → Genera 0, 1, 2... 15 (enteros)
//
// RESULTADO:
// 16 valores posibles (0 a 15) ✓
// Cada uno con la misma probabilidad ✓
//
// Es como tirar un dado de 16 caras


// ============================================================
// 🎨 EJEMPLOS DE COLORES GENERADOS:
// ============================================================
// #FF0000 → Rojo puro
// #00FF00 → Verde puro
// #0000FF → Azul puro
// #FFFF00 → Amarillo (rojo + verde)
// #FF00FF → Magenta (rojo + azul)
// #00FFFF → Cyan (verde + azul)
// #A3F2B8 → Verde claro
// #8B4513 → Marrón
// #FFC0CB → Rosa


    // Seleccionamos las tres bandas
    // ============================================================
    // Tu comentario original
    
    
    const bandas = document.querySelectorAll(".banda");
    // ============================================================
    // SELECCIONAR TODOS LOS ELEMENTOS CON CLASE "banda"
    // ============================================================
    // const bandas = document.querySelectorAll(".banda")
    //
    // document.querySelectorAll(".banda")
    // → Busca TODOS los elementos con class="banda"
    //
    // ".banda" = SELECTOR CSS
    // El punto . significa "clase"
    //
    // En tu HTML tendrás:
    // <div class="banda"></div>
    // <div class="banda"></div>
    // <div class="banda"></div>
    //
    // RESULTADO:
    // bandas = NodeList con 3 elementos
    // Es como un array: [banda1, banda2, banda3]
    //
    //
    // DIFERENCIA: querySelector vs querySelectorAll
    //
    // querySelector(".banda")
    // → Devuelve SOLO EL PRIMERO
    // → resultado = 1 elemento
    //
    // querySelectorAll(".banda")
    // → Devuelve TODOS
    // → resultado = NodeList con todos
    //
    // Para este ejercicio NECESITAMOS querySelectorAll
    // porque queremos aplicar el evento a TODAS las bandas ✓
    //
    //
    // NodeList vs Array:
    // ──────────────────
    // NodeList es "similar" a un array pero NO es un array real
    // Tiene .forEach() ✓
    // Tiene .length ✓
    // NO tiene .map(), .filter(), etc. ❌
    //
    // Pero para este ejercicio .forEach() es suficiente ✓


    // Añadimos el evento onclick a cada banda
    // ============================================================
    // Tu comentario original
    
    
    bandas.forEach(banda => {
    // ============================================================
    // RECORRER CADA BANDA
    // ============================================================
    // bandas.forEach(banda => { ... })
    //
    // .forEach() = método para recorrer una lista
    // Es como decir: "Para CADA banda, haz esto:"
    //
    // banda => { ... }
    // ─────────────────
    // Arrow function (función flecha)
    //
    // banda = parámetro (representa cada banda en cada vuelta)
    // => = sintaxis de arrow function
    // { ... } = código que se ejecuta para cada banda
    //
    //
    // FLUJO:
    // Vuelta 1: banda = primera banda (banda[0])
    // Vuelta 2: banda = segunda banda (banda[1])
    // Vuelta 3: banda = tercera banda (banda[2])
    //
    //
    // FORMA ALTERNATIVA (sin arrow function):
    // bandas.forEach(function(banda) {
    //     // código
    // });
    //
    // Tu forma con arrow function es MÁS MODERNA ✓
    
    
    banda.addEventListener("click", () => {
    // ============================================================
    // AÑADIR EVENTO CLICK A LA BANDA
    // ============================================================
    // banda.addEventListener("click", () => { ... })
    //
    // .addEventListener("click", ...)
    // → Añade un "escuchador" de eventos
    // → Detecta cuando el usuario hace CLIC en la banda
    //
    // "click" = tipo de evento
    // Otros eventos posibles:
    // "mouseover" → ratón pasa por encima
    // "mouseout" → ratón sale
    // "dblclick" → doble clic
    //
    //
    // () => { ... }
    // ─────────────
    // Arrow function SIN PARÁMETROS
    //
    // Código que se ejecuta cuando:
    // 1. Usuario hace clic en la banda
    // 2. Navegador detecta el clic
    // 3. Se ejecuta esta función
    //
    //
    // IMPORTANTE: Arrow function vacía ()
    // () → Sin parámetros
    // No necesitamos el evento (e) aquí
    //
    // Si quisiéramos el evento:
    // (e) => { console.log(e); }
    //
    // Pero para este ejercicio no lo necesitamos ✓
    
    
        banda.style.backgroundColor = colorAleatorio(); // 🎨 Cambia el color al azar
        // ============================================================
        // CAMBIAR COLOR DE FONDO DE LA BANDA
        // ============================================================
        // banda.style.backgroundColor = colorAleatorio()
        //
        // DESGLOSE:
        //
        // banda
        // ─────
        // → La banda actual (el elemento en el que se hizo clic)
        //
        // .style
        // ──────
        // → Acceso a los ESTILOS CSS del elemento
        //
        // .backgroundColor
        // ────────────────
        // → Propiedad CSS para el color de fondo
        //
        // En CSS sería: background-color
        // En JavaScript: backgroundColor (camelCase)
        //
        // IMPORTANTE: Conversión CSS → JavaScript
        // CSS: background-color → JavaScript: backgroundColor
        // CSS: font-size → JavaScript: fontSize
        // CSS: border-radius → JavaScript: borderRadius
        //
        //
        // colorAleatorio()
        // ────────────────
        // → LLAMADA a la función colorAleatorio
        // → Ejecuta la función
        // → Devuelve un color aleatorio, ejemplo: "#A3F2B8"
        //
        // IMPORTANTE: CON PARÉNTESIS ()
        // colorAleatorio() ✓ EJECUTA la función
        // colorAleatorio   ✗ Solo referencia, no ejecuta
        //
        //
        // RESULTADO:
        // banda.style.backgroundColor = "#A3F2B8"
        //
        // El fondo de la banda cambia a ese color
        //
        //
        // FLUJO COMPLETO:
        // ───────────────
        // 1. Usuario hace clic en la banda
        // 2. Se ejecuta la arrow function
        // 3. Se llama a colorAleatorio()
        // 4. colorAleatorio() genera "#A3F2B8"
        // 5. Se asigna a backgroundColor
        // 6. ¡La banda cambia de color!
        //
        //
        // Tu emoji: 🎨 "Cambia el color al azar"
        // ¡Perfecto comentario visual! ✓
        
    });
    // Fin del addEventListener
    
});
// Fin del forEach
// Ahora TODAS las bandas tienen el evento click añadido


// ============================================================
// 🔍 FLUJO COMPLETO:
// ============================================================

// INICIO:
// 1. Se carga la página
// 2. Se ejecuta el script
// 3. querySelectorAll busca todas las .banda
// 4. forEach recorre cada banda
// 5. Para cada banda:
//    - addEventListener añade detector de clic
// 6. Script terminado, página lista

// USUARIO HACE CLIC EN BANDA 1:
// 1. Se detecta el clic
// 2. Se ejecuta la arrow function
// 3. colorAleatorio() se ejecuta:
//    - Genera 6 caracteres aleatorios
//    - Retorna "#B4F19C" (ejemplo)
// 4. banda.style.backgroundColor = "#B4F19C"
// 5. ¡La banda 1 cambia a ese color!

// USUARIO HACE CLIC EN BANDA 2:
// 1-5. Mismo proceso, pero con la banda 2
// 6. Genera otro color diferente, ejemplo: "#2A8E5F"

// USUARIO HACE CLIC EN BANDA 1 OTRA VEZ:
// 1-5. Mismo proceso
// 6. Genera otro color nuevo, ejemplo: "#FF6B9D"
// 7. La banda 1 cambia de nuevo (sobreescribe el anterior)


// ============================================================
// 📌 CONCEPTOS CLAVE PARA EL EXAMEN:
// ============================================================

// 1. COLOR HEXADECIMAL:
//    #RRGGBB (6 dígitos de 0-9, A-F)

// 2. Math.random():
//    Genera decimal de 0 (inclusive) a 1 (exclusivo)

// 3. Math.floor():
//    Redondea hacia abajo (elimina decimales)

// 4. GENERAR ENTERO ALEATORIO:
//    Math.floor(Math.random() * max)
//    Genera entero de 0 a max-1

// 5. querySelectorAll():
//    Busca TODOS los elementos (devuelve NodeList)

// 6. querySelector():
//    Busca SOLO EL PRIMERO

// 7. .forEach():
//    Recorre lista elemento por elemento

// 8. addEventListener():
//    Añade detector de eventos

// 9. Arrow function:
//    () => { código }

// 10. .style.propiedad:
//     Acceso a estilos CSS


// ============================================================
// 💡 MEJORAS OPCIONALES:
// ============================================================

// MEJORA 1: Animar la transición de color
// banda.style.transition = "background-color 0.5s";

// MEJORA 2: Mostrar el código del color
// banda.textContent = color;

// MEJORA 3: Evitar colores muy oscuros
// function colorAleatorioClaro() {
//     // Asegurar que cada componente sea > 80
// }

// MEJORA 4: Copiar color al portapapeles al hacer clic
// navigator.clipboard.writeText(color);

// MEJORA 5: Doble clic para resetear a blanco
// banda.addEventListener("dblclick", () => {
//     banda.style.backgroundColor = "#FFFFFF";
// });


// ============================================================
// 🧪 OTRAS FORMAS DE GENERAR COLORES ALEATORIOS:
// ============================================================

// FORMA 1: Con RGB (tu forma, convertida a hex) ✓

// FORMA 2: RGB directo (más simple pero menos común)
function colorAleatorioRGB() {
    const r = Math.floor(Math.random() * 256); // 0-255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
// Ejemplo: "rgb(180, 75, 200)"

// FORMA 3: HSL (colores más armónicos)
function colorAleatorioHSL() {
    const h = Math.floor(Math.random() * 360); // tono 0-360
    const s = 50 + Math.floor(Math.random() * 50); // saturación 50-100%
    const l = 50 + Math.floor(Math.random() * 30); // luminosidad 50-80%
    return `hsl(${h}, ${s}%, ${l}%)`;
}
// Ejemplo: "hsl(240, 75%, 65%)"

// FORMA 4: Con toString(16) (elegante)
function colorAleatorioToString() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}
// 16777215 = FFFFFF en hexadecimal (16^6 - 1)


// ============================================================
// 📌 RESUMEN ULTRA CORTO:
// ============================================================
// 1. colorAleatorio(): Genera "#" + 6 caracteres hex aleatorios
// 2. querySelectorAll(".banda"): Selecciona todas las bandas
// 3. forEach: Recorre cada banda
// 4. addEventListener("click"): Detecta clics
// 5. banda.style.backgroundColor = color: Cambia color