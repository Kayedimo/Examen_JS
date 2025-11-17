// ============================================================
// EJERCICIO 3: Tabla de Multiplicar del 1 al 10
// ============================================================


let html = '<table>';
// ============================================================
// VARIABLE: Guardar TODO el HTML de la tabla
// ============================================================
// let html = '<table>'
//
// let = variable (su valor SÍ puede cambiar)
// html = nombre de la variable (guarda código HTML)
// '<table>' = valor inicial (etiqueta de apertura de tabla)
//
// ¿Por qué una variable string?
// El PDF advierte:
// "Es posible que el navegador intente renderizar correctamente 
//  la tabla si la vas escribiendo poco a poco sobre el documento"
//
// PROBLEMA si escribes línea por línea:
// document.write('<table>');
// document.write('<tr>');
// → El navegador intenta "arreglar" el HTML incompleto
// → Puede añadir etiquetas de cierre automáticamente
// → La tabla se rompe ❌
//
// SOLUCIÓN (lo que haces):
// let html = '<table>';
// html += '<tr>...';
// html += '</tr>';
// html += '</table>';
// document.getElementById('tabla').innerHTML = html;
// → Construyes TODO el HTML en memoria
// → Lo insertas de GOLPE al final
// → El navegador recibe HTML completo y válido ✓
//
// Es como armar un puzzle:
// ❌ MAL: Ir pegando pieza por pieza en la pared mientras armas
// ✓ BIEN: Armar el puzzle completo en la mesa, luego colgarlo
//
// IMPORTANTE: Las comillas
// '<table>' → Comillas simples para strings
// "<table>" → Comillas dobles (también válido)
// `<table>` → Acentos graves/template strings (también válido)
//
// Tu código usa comillas simples ✓


// Fila de encabezado
// ============================================================
// Comentario explicando qué viene después


html += '<tr><td class="simbolo">×</td>';
// ============================================================
// PRIMERA FILA: Fila de encabezado
// ============================================================
// html += ... → Añadir al final de la variable html
// += es CONCATENACIÓN: html = html + ...
//
// DESGLOSE del string que añadimos:
//
// '<tr>'
// → <tr> = table row (fila de tabla)
// → Empieza una NUEVA FILA
//
// '<td class="simbolo">×</td>'
// → <td> = table data (celda de datos)
// → class="simbolo" = aplica CSS: color verde, negrita
// → × = símbolo de multiplicación
// → </td> = cierra la celda
//
// IMPORTANTE: Comillas dentro de comillas
// html += '<td class="simbolo">×</td>';
//              ↑      ↑
//              Comillas DOBLES dentro de comillas SIMPLES
//
// Alternativas válidas:
// '<td class="simbolo">×</td>'  ✓ (lo que usas)
// "<td class='simbolo'>×</td>"  ✓ (dobles fuera, simples dentro)
// `<td class="simbolo">×</td>`  ✓ (template strings)
//
// RESULTADO hasta ahora:
// html = '<table><tr><td class="simbolo">×</td>'
//
// Estamos construyendo:
// ┌───┬───┬───┬───┐
// │ × │ ? │ ? │ ? │ ← Empezamos esta fila
// ├───┼───┼───┼───┤
// │ ? │   │   │   │
// └───┴───┴───┴───┘


for (let i = 1; i <= 10; i++) {
// ============================================================
// BUCLE FOR: Números del 1 al 10 (encabezado horizontal)
// ============================================================
// for = estructura de bucle (repetición)
//
// PARTES DEL FOR:
//
// 1. let i = 1
//    Inicialización: i empieza en 1
//    i = índice / contador
//
// 2. i <= 10
//    Condición: mientras i sea menor o igual a 10
//    Si es TRUE (verdadero) → continúa
//    Si es FALSE (falso) → termina el bucle
//
// 3. i++
//    Incremento: después de cada repetición, suma 1 a i
//    i++ es igual a: i = i + 1
//
// FLUJO:
// Vuelta 1: i = 1, ¿1 <= 10? SÍ → ejecuta código, luego i++ (i=2)
// Vuelta 2: i = 2, ¿2 <= 10? SÍ → ejecuta código, luego i++ (i=3)
// ...
// Vuelta 10: i = 10, ¿10 <= 10? SÍ → ejecuta código, luego i++ (i=11)
// Vuelta 11: i = 11, ¿11 <= 10? NO → TERMINA
//
// TOTAL: Se ejecuta 10 veces (i = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
//
// ¿Para qué sirve este bucle?
// Para añadir los números de la primera fila:
// × 1 2 3 4 5 6 7 8 9 10


    html += `<td class="encabezado">${i}</td>`;
    // ============================================================
    // AÑADIR CELDA CON NÚMERO
    // ============================================================
    // html += ... → Añadir al final
    //
    // IMPORTANTE: Aquí usas TEMPLATE STRINGS
    // `...` → Acentos graves (no comillas)
    //
    // ${i} → Inserta el VALOR de la variable i
    //
    // DIFERENCIA:
    // Comillas normales (NO funcionaría):
    // '<td class="encabezado">i</td>'
    // → Escribiría la LETRA "i" literalmente
    //
    // Template strings (lo que usas):
    // `<td class="encabezado">${i}</td>`
    // → Inserta el VALOR de i (1, 2, 3...)
    //
    // RESULTADO POR VUELTA:
    // Vuelta 1 (i=1): `<td class="encabezado">1</td>`
    // Vuelta 2 (i=2): `<td class="encabezado">2</td>`
    // Vuelta 3 (i=3): `<td class="encabezado">3</td>`
    // ...
    // Vuelta 10 (i=10): `<td class="encabezado">10</td>`
    //
    // FORMA ALTERNATIVA (sin template strings):
    // html += '<td class="encabezado">' + i + '</td>';
    // → Funciona igual pero es más difícil de leer
    //
    // Template strings son MÁS CLAROS ✓
    //
    // class="encabezado" → CSS: color gris
    
}
// Fin del bucle for
// Después de las 10 vueltas, html contiene:
// '<table><tr><td class="simbolo">×</td><td class="encabezado">1</td><td class="encabezado">2</td>...<td class="encabezado">10</td>'


html += '</tr>';
// ============================================================
// CERRAR LA PRIMERA FILA
// ============================================================
// html += '</tr>' → Añadir cierre de fila
//
// Ahora la primera fila está COMPLETA:
// <tr><td class="simbolo">×</td><td>1</td><td>2</td>...<td>10</td></tr>
//
// Visualmente hemos creado:
// ┌───┬───┬───┬───┬───┐
// │ × │ 1 │ 2 │...│ 10│ ← Fila completa ✓
// └───┴───┴───┴───┴───┘


// Filas de multiplicación
// ============================================================
// Comentario explicando qué viene después


for (let i = 1; i <= 10; i++) {
// ============================================================
// BUCLE EXTERNO: Filas (1 a 10)
// ============================================================
// Este es el PRIMER bucle de dos bucles ANIDADOS
//
// ¿Qué son bucles anidados?
// Un bucle DENTRO de otro bucle
//
// BUCLE EXTERNO (este):
// → Controla las FILAS
// → Se ejecuta 10 veces (filas 1 a 10)
//
// BUCLE INTERNO (el siguiente):
// → Controla las COLUMNAS
// → Se ejecuta 10 veces por cada fila
//
// TOTAL: 10 filas × 10 columnas = 100 celdas
//
// Es como leer un libro:
// FOR cada página (bucle externo):
//     FOR cada línea de esa página (bucle interno):
//         Leer la línea
//
// O como una cuadrícula:
// FOR cada fila (de arriba a abajo):
//     FOR cada columna (de izquierda a derecha):
//         Pintar celda
//
// FLUJO:
// i = 1 → Crear fila 1 (con 10 columnas)
// i = 2 → Crear fila 2 (con 10 columnas)
// ...
// i = 10 → Crear fila 10 (con 10 columnas)


    html += `<tr><td class="encabezado">${i}</td>`;
    // ============================================================
    // EMPEZAR NUEVA FILA + PRIMERA CELDA
    // ============================================================
    // `<tr>` → Empezar nueva fila
    // `<td class="encabezado">${i}</td>` → Primera celda de la fila
    //
    // La primera celda de cada fila es el NÚMERO de esa fila:
    // Fila 1: primera celda = 1
    // Fila 2: primera celda = 2
    // Fila 3: primera celda = 3
    // ...
    //
    // Visualmente:
    // ┌───┬───┬───┐
    // │ 1 │ ? │ ? │ ← Fila 1 empieza con 1
    // ├───┼───┼───┤
    // │ 2 │ ? │ ? │ ← Fila 2 empieza con 2
    // ├───┼───┼───┤
    // │ 3 │ ? │ ? │ ← Fila 3 empieza con 3
    // └───┴───┴───┘
    //
    // Estos son los números de la PRIMERA COLUMNA
    // class="encabezado" → CSS: color gris
    
    
    for (let j = 1; j <= 10; j++) {
    // ============================================================
    // BUCLE INTERNO: Columnas (1 a 10)
    // ============================================================
    // Este es el SEGUNDO bucle (dentro del primero)
    //
    // IMPORTANTE: Usamos j en vez de i
    // i = índice del bucle externo (fila)
    // j = índice del bucle interno (columna)
    //
    // Nombres comunes para índices:
    // i, j, k (en ese orden)
    //
    // Este bucle se ejecuta 10 veces por cada valor de i
    //
    // Ejemplo cuando i = 3:
    // j = 1: celda 3×1 = 3
    // j = 2: celda 3×2 = 6
    // j = 3: celda 3×3 = 9
    // ...
    // j = 10: celda 3×10 = 30
    //
    // TOTAL POR FILA: 10 celdas
    // TOTAL EN TODA LA TABLA: 10 filas × 10 columnas = 100 celdas
    
    
    html += `<td class="producto">${i * j}</td>`;
    // ============================================================
    // CELDA CON EL PRODUCTO (RESULTADO)
    // ============================================================
    // ${i * j} → Multiplicación de i por j
    //
    // i = número de la fila
    // j = número de la columna
    // i * j = producto (resultado de la multiplicación)
    //
    // EJEMPLOS:
    // i = 1, j = 1: ${1 * 1} = 1
    // i = 2, j = 3: ${2 * 3} = 6
    // i = 5, j = 7: ${5 * 7} = 35
    // i = 10, j = 10: ${10 * 10} = 100
    //
    // class="producto" → CSS: color morado
    //
    // DESGLOSE COMPLETO DE UNA FILA (ejemplo i=2):
    // Bucle externo: i = 2
    //   html += '<tr><td class="encabezado">2</td>'
    //   
    //   Bucle interno: j = 1
    //     html += '<td class="producto">2</td>'  (2×1=2)
    //   
    //   Bucle interno: j = 2
    //     html += '<td class="producto">4</td>'  (2×2=4)
    //   
    //   Bucle interno: j = 3
    //     html += '<td class="producto">6</td>'  (2×3=6)
    //   
    //   ... hasta j = 10
    //   
    //   html += '</tr>'
    //
    // Resultado: <tr><td>2</td><td>2</td><td>4</td><td>6</td>...<td>20</td></tr>
    
    }
    // Fin del bucle interno (j)
    // Ya se generaron las 10 columnas de esta fila
    
    
    html += '</tr>';
    // ============================================================
    // CERRAR LA FILA
    // ============================================================
    // Después de generar las 10 celdas (columnas)
    // cerramos la fila con </tr>
    //
    // La fila i está completa ✓
    
}
// Fin del bucle externo (i)
// Ya se generaron las 10 filas
// Cada fila tiene 11 celdas: 1 encabezado + 10 productos


html += '</table>';
// ============================================================
// CERRAR LA TABLA
// ============================================================
// Añadimos la etiqueta de cierre </table>
//
// AHORA la variable html contiene:
// '<table><tr>...</tr><tr>...</tr>...<tr>...</tr></table>'
//
// Es un string GIGANTE con TODO el HTML de la tabla
// ¡Pero todavía NO está en la página!


document.getElementById('tabla').innerHTML = html;
// ============================================================
// INSERTAR LA TABLA EN LA PÁGINA
// ============================================================
// Esta es la línea MÁS IMPORTANTE
// Aquí es donde la tabla APARECE en la página
//
// DESGLOSE:
//
// document.getElementById('tabla')
// → Busca el elemento con id="tabla"
// → En el HTML: <div id="tabla"></div>
//
// .innerHTML = html
// → innerHTML = "HTML interno" (contenido HTML del elemento)
// → Le asignamos el valor de la variable html
//
// ¿Qué pasa?
// ANTES:
// <div id="tabla"></div>  (vacío)
//
// DESPUÉS:
// <div id="tabla">
//     <table>
//         <tr><td class="simbolo">×</td><td>1</td>...</tr>
//         <tr><td class="encabezado">1</td><td>1</td>...</tr>
//         ...
//     </table>
// </div>
//
// ¡La tabla completa aparece en la página!
//
// VENTAJA de este método:
// El navegador recibe HTML COMPLETO Y VÁLIDO
// No intenta "arreglar" HTML incompleto
// La tabla se renderiza correctamente ✓


// ============================================================
// 🔍 FLUJO COMPLETO - EJEMPLO SIMPLIFICADO (tabla 3×3):
// ============================================================

// html = '<table>'
//
// Primera fila (encabezados):
// html += '<tr><td class="simbolo">×</td>'
// for i = 1 to 3:
//   html += `<td class="encabezado">${i}</td>`
// html += '</tr>'
// → html = '<table><tr><td>×</td><td>1</td><td>2</td><td>3</td></tr>'
//
// Fila 1 (i=1):
// html += '<tr><td class="encabezado">1</td>'
// for j = 1 to 3:
//   html += `<td class="producto">${1*j}</td>`
// html += '</tr>'
// → Añade: '<tr><td>1</td><td>1</td><td>2</td><td>3</td></tr>'
//
// Fila 2 (i=2):
// html += '<tr><td class="encabezado">2</td>'
// for j = 1 to 3:
//   html += `<td class="producto">${2*j}</td>`
// html += '</tr>'
// → Añade: '<tr><td>2</td><td>2</td><td>4</td><td>6</td></tr>'
//
// Fila 3 (i=3):
// Similar a fila 2
//
// html += '</table>'
//
// document.getElementById('tabla').innerHTML = html
// → ¡Tabla aparece en pantalla!


// ============================================================
// 📊 TABLA RESULTANTE (formato visual):
// ============================================================
//
//   ×    1    2    3  ...  10
//   1    1    2    3  ...  10
//   2    2    4    6  ...  20
//   3    3    6    9  ...  30
//   4    4    8   12  ...  40
//   5    5   10   15  ...  50
//   6    6   12   18  ...  60
//   7    7   14   21  ...  70
//   8    8   16   24  ...  80
//   9    9   18   27  ...  90
//  10   10   20   30  ... 100


// ============================================================
// 💡 EXPLICACIÓN: ¿Por qué NO escribir línea por línea?
// ============================================================

// ❌ FORMA INCORRECTA (puede dar problemas):
// document.write('<table>');
// document.write('<tr>');
// document.write('<td>1</td>');
// ...
//
// PROBLEMA:
// El navegador ve: <table><tr><td>1</td>
// Piensa: "Este HTML está incompleto, voy a arreglarlo"
// Añade </td></tr></table> automáticamente
// Resultado: tabla rota ❌

// ✅ FORMA CORRECTA (lo que haces):
// let html = '<table>';
// html += '<tr>...';
// html += '</table>';
// document.getElementById('tabla').innerHTML = html;
//
// VENTAJA:
// El navegador recibe: <table><tr><td>1</td></tr></table>
// HTML completo y válido
// No necesita "arreglarlo"
// Resultado: tabla perfecta ✓


// ============================================================
// 📌 CONCEPTOS CLAVE PARA EL EXAMEN:
// ============================================================

// 1. BUCLES ANIDADOS:
//    for (let i = 1; i <= 10; i++) {        // Filas
//        for (let j = 1; j <= 10; j++) {    // Columnas
//            // código
//        }
//    }

// 2. CONCATENACIÓN DE STRINGS:
//    html += "más texto"
//    // Igual a: html = html + "más texto"

// 3. TEMPLATE STRINGS:
//    `<td>${variable}</td>`
//    // Inserta el valor de la variable

// 4. ESTRUCTURA DE TABLA HTML:
//    <table>
//      <tr>          ← fila
//        <td></td>   ← celda
//      </tr>
//    </table>

// 5. INSERTAR HTML:
//    elemento.innerHTML = htmlString

// 6. GUARDAR TODO EN VARIABLE:
//    Construir HTML completo → luego insertar de golpe


// ============================================================
// 📌 RESUMEN ULTRA CORTO:
// ============================================================
// 1. Crear variable html con '<table>'
// 2. Añadir fila de encabezado (× 1 2 3...)
// 3. Bucle filas (i = 1 a 10):
//    - Empezar fila con número i
//    - Bucle columnas (j = 1 a 10):
//      - Añadir celda con i×j
//    - Cerrar fila
// 4. Cerrar tabla
// 5. Insertar todo en el div con innerHTML


// ============================================================
// 🧪 PRUEBA:
// ============================================================
// 1. Abre el HTML en el navegador
// 2. Deberías ver una tabla 11×11 (encabezados + 10×10 productos)
// 3. Primera fila: × 1 2 3 4 5 6 7 8 9 10 (gris)
// 4. Primera columna: 1 2 3 4 5 6 7 8 9 10 (gris)
// 5. Productos: en morado
// 6. Verifica: fila 7, columna 8 = 56 (7×8)
// 7. Verifica: fila 10, columna 10 = 100 (10×10)