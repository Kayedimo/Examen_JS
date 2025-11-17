// ============================================================
// EJERCICIO: Tabla de multiplicar con array bidimensional
// ============================================================
// Este ejercicio genera una tabla de multiplicar de n×n
// usando un ARRAY BIDIMENSIONAL (array de arrays)


function generarTabla() {
// ============================================================
// FUNCIÓN: generarTabla
// ============================================================
// function generarTabla() → Declarar función sin parámetros
//
// Esta función se ejecutará cuando:
// - El usuario haga clic en un botón
// - Se dispare un evento (submit, click, etc.)
//
// NO recibe parámetros porque:
// - Lee el valor directamente del input en el HTML
// - No necesita que le pasen datos desde fuera
//
// ¿Qué hace la función?
// 1. Lee el número del input
// 2. Valida que sea válido
// 3. Crea array bidimensional con productos
// 4. Genera HTML de tabla
// 5. Muestra la tabla en la página


    const n = parseInt(document.getElementById("numero").value);
    // ============================================================
    // LEER Y CONVERTIR EL VALOR DEL INPUT
    // ============================================================
    // const n = parseInt(document.getElementById("numero").value)
    //
    // DESGLOSE PASO A PASO:
    //
    // PARTE 1: document.getElementById("numero")
    // ───────────────────────────────────────────
    // → Busca el elemento HTML con id="numero"
    //
    // En tu HTML tendrás algo como:
    // <input type="number" id="numero" placeholder="Introduce un número">
    //
    // Esta parte ENCUENTRA ese input
    //
    //
    // PARTE 2: .value
    // ───────────────
    // → Lee el VALOR que el usuario escribió en el input
    //
    // .value devuelve siempre un STRING
    // Aunque el input sea type="number", .value es string
    //
    // Ejemplo:
    // Usuario escribe: 5
    // .value devuelve: "5" (string, no número)
    //
    //
    // PARTE 3: parseInt(...)
    // ──────────────────────
    // → Convierte el STRING a NÚMERO ENTERO
    //
    // parseInt("5") = 5 (número)
    // parseInt("10") = 10 (número)
    // parseInt("3.7") = 3 (solo parte entera)
    // parseInt("abc") = NaN (Not a Number)
    // parseInt("") = NaN (string vacío)
    //
    // ¿Por qué parseInt y no Number()?
    //
    // parseInt:
    // - Convierte a ENTERO
    // - parseInt("3.7") = 3
    // - Ignora parte decimal
    //
    // Number:
    // - Convierte a número (puede ser decimal)
    // - Number("3.7") = 3.7
    //
    // Para este ejercicio, parseInt es PERFECTO
    // porque queremos tablas de 3×3, 5×5, etc. (enteros)
    //
    //
    // RESULTADO:
    // const n = 5 (si el usuario escribió 5)
    // const n = 10 (si el usuario escribió 10)
    // const n = NaN (si el usuario escribió "abc" o nada)
    //
    //
    // ¿Por qué const?
    // Porque n NO va a cambiar durante la ejecución de la función


    const resultado = document.getElementById("resultado");
    // ============================================================
    // OBTENER REFERENCIA AL CONTENEDOR
    // ============================================================
    // const resultado = document.getElementById("resultado")
    //
    // Busca el elemento con id="resultado"
    //
    // En tu HTML tendrás:
    // <div id="resultado"></div>
    //
    // Esta variable guarda la REFERENCIA a ese div
    // Para poder escribir la tabla dentro más tarde


    if (isNaN(n) || n < 1) {
    // ============================================================
    // VALIDACIÓN: ¿Es un número válido?
    // ============================================================
    // if (isNaN(n) || n < 1)
    //
    // Esta línea VALIDA que el input sea correcto
    //
    // DESGLOSE:
    //
    // PARTE 1: isNaN(n)
    // ─────────────────
    // isNaN = "is Not a Number" (¿NO es un número?)
    //
    // isNaN(5) = false (5 SÍ es un número)
    // isNaN("abc") = true ("abc" NO es un número)
    // isNaN(NaN) = true (NaN NO es un número)
    // isNaN(undefined) = true
    //
    // Si el usuario:
    // - No escribió nada → parseInt devuelve NaN → isNaN(NaN) = true
    // - Escribió "abc" → parseInt devuelve NaN → isNaN(NaN) = true
    // - Escribió 5 → parseInt devuelve 5 → isNaN(5) = false
    //
    //
    // PARTE 2: n < 1
    // ──────────────
    // Comprueba si n es menor que 1
    //
    // n < 1 = true → Número inválido
    // n >= 1 = false → Número válido
    //
    // ¿Por qué < 1?
    // Porque no tiene sentido hacer una tabla de 0×0 o -5×-5
    // La tabla más pequeña es 1×1
    //
    //
    // PARTE 3: ||
    // ───────────
    // || = OR lógico (O)
    //
    // isNaN(n) || n < 1
    // → Si CUALQUIERA de las dos es true, entra en el if
    //
    // CASOS QUE ENTRAN EN EL IF (inválidos):
    // - Usuario no escribió nada → isNaN = true ✓
    // - Usuario escribió "abc" → isNaN = true ✓
    // - Usuario escribió 0 → n < 1 = true ✓
    // - Usuario escribió -5 → n < 1 = true ✓
    //
    // CASOS QUE NO ENTRAN (válidos):
    // - Usuario escribió 1 → isNaN = false, n < 1 = false ✗
    // - Usuario escribió 5 → isNaN = false, n < 1 = false ✗
    // - Usuario escribió 10 → isNaN = false, n < 1 = false ✗
    
    
        resultado.innerHTML = "<p style='color:red'>Por favor, introduce un número válido mayor que 0.</p>";
        // ============================================================
        // MOSTRAR MENSAJE DE ERROR
        // ============================================================
        // resultado.innerHTML = "..."
        //
        // Escribe HTML directamente dentro del div resultado
        //
        // CONTENIDO DEL HTML:
        // <p style='color:red'>Por favor, introduce un número válido mayor que 0.</p>
        //
        // <p> = párrafo
        // style='color:red' = estilo CSS inline (texto rojo)
        // Mensaje claro para el usuario
        //
        // NOTA: Usas comillas simples '' dentro de comillas dobles ""
        // Para que no haya conflicto:
        // "... style='color:red' ..." ✓ CORRECTO
        // "... style="color:red" ..." ✗ ERROR (comillas dentro de comillas)
        //
        // RESULTADO VISUAL:
        // El usuario ve en ROJO:
        // "Por favor, introduce un número válido mayor que 0."
        
        
        return;
        // ============================================================
        // SALIR DE LA FUNCIÓN
        // ============================================================
        // return; → Termina la función INMEDIATAMENTE
        //
        // Sin return, el código continuaría ejecutándose
        // Intentaría crear la tabla con un número inválido
        //
        // return SIN VALOR:
        // → Solo sale de la función
        // → No devuelve nada
        //
        // FLUJO:
        // 1. Usuario escribe "abc"
        // 2. n = NaN
        // 3. isNaN(NaN) = true → entra en if
        // 4. Muestra mensaje de error
        // 5. return → TERMINA la función
        // 6. NO ejecuta el código de abajo
    }
    // Fin del if de validación
    // Si llegamos aquí, n es un número válido >= 1


    // Crear el array bidimensional
    // ============================================================
    // Comentario explicando qué viene después
    
    
    let a = [];
    // ============================================================
    // CREAR ARRAY VACÍO PARA LA TABLA
    // ============================================================
    // let a = [] → Array vacío que contendrá las filas
    //
    // Este será un ARRAY BIDIMENSIONAL (array de arrays)
    //
    // ¿Qué es un array bidimensional?
    // Es un array donde cada elemento es OTRO array
    //
    // VISUALIZACIÓN:
    // a = [
    //   [1, 2, 3],    ← fila 0 (array)
    //   [2, 4, 6],    ← fila 1 (array)
    //   [3, 6, 9]     ← fila 2 (array)
    // ]
    //
    // Es como una TABLA o MATRIZ:
    //      col0  col1  col2
    // fila0  1    2     3
    // fila1  2    4     6
    // fila2  3    6     9
    //
    // ACCESO:
    // a[0] → primera fila → [1, 2, 3]
    // a[0][0] → elemento fila 0, columna 0 → 1
    // a[1][2] → elemento fila 1, columna 2 → 6
    // a[2][1] → elemento fila 2, columna 1 → 6
    //
    // SINTAXIS:
    // a[fila][columna]
    //
    // ¿Por qué let y no const?
    // Porque vamos a MODIFICAR el array (añadir filas con push)
    
    
    for (let i = 1; i <= n; i++) {
    // ============================================================
    // BUCLE EXTERNO: Crear cada FILA
    // ============================================================
    // for (let i = 1; i <= n; i++)
    //
    // Este es el PRIMER bucle de dos bucles ANIDADOS
    //
    // BUCLE EXTERNO (este):
    // → Controla las FILAS
    // → Se ejecuta n veces
    //
    // BUCLE INTERNO (el siguiente):
    // → Controla las COLUMNAS de cada fila
    // → Se ejecuta n veces por cada fila
    //
    // TOTAL: n × n iteraciones
    // Si n = 3: 3 × 3 = 9 productos calculados
    // Si n = 5: 5 × 5 = 25 productos calculados
    //
    //
    // DESGLOSE:
    //
    // let i = 1
    // → Empieza en 1 (no en 0)
    // → Porque las tablas de multiplicar empiezan en 1
    // → 1×1, 1×2, 1×3... (no 0×1)
    //
    // i <= n
    // → Mientras i sea menor o igual a n
    // → Si n = 5: i va de 1 a 5 (ambos inclusive)
    //
    // i++
    // → Incrementa i en cada vuelta
    //
    //
    // FLUJO (ejemplo n = 3):
    // Vuelta 1: i = 1 → Crear fila 1 (1×1, 1×2, 1×3)
    // Vuelta 2: i = 2 → Crear fila 2 (2×1, 2×2, 2×3)
    // Vuelta 3: i = 3 → Crear fila 3 (3×1, 3×2, 3×3)
    
    
        let fila = [];
        // ============================================================
        // CREAR ARRAY VACÍO PARA LA FILA ACTUAL
        // ============================================================
        // let fila = [] → Array vacío para esta fila
        //
        // En cada vuelta del bucle externo:
        // - Creamos un NUEVO array vacío
        // - Lo llenaremos con los productos de esta fila
        // - Luego lo añadiremos al array principal 'a'
        //
        // Es como crear una NUEVA FILA de la tabla
        // que luego añadiremos a la tabla completa
        //
        // IMPORTANTE: Se crea DENTRO del bucle
        // Para que cada vuelta tenga su propio array nuevo
        
        
        for (let j = 1; j <= n; j++) {
        // ============================================================
        // BUCLE INTERNO: Crear cada COLUMNA de la fila
        // ============================================================
        // for (let j = 1; j <= n; j++)
        //
        // Este es el SEGUNDO bucle (dentro del primero)
        //
        // Se ejecuta COMPLETAMENTE en cada vuelta del externo
        //
        // IMPORTANTE: Usamos j (no i)
        // i = índice del bucle externo (fila)
        // j = índice del bucle interno (columna)
        //
        // Nombres tradicionales para índices anidados:
        // i, j, k (en ese orden)
        //
        //
        // DESGLOSE:
        //
        // let j = 1
        // → Empieza en 1 (columnas de 1 a n)
        //
        // j <= n
        // → Mientras j sea menor o igual a n
        //
        // j++
        // → Incrementa j en cada vuelta
        //
        //
        // FLUJO COMPLETO (ejemplo n = 3):
        //
        // i = 1 (fila 1):
        //   j = 1 → calcular 1×1 = 1
        //   j = 2 → calcular 1×2 = 2
        //   j = 3 → calcular 1×3 = 3
        //   fila = [1, 2, 3]
        //
        // i = 2 (fila 2):
        //   j = 1 → calcular 2×1 = 2
        //   j = 2 → calcular 2×2 = 4
        //   j = 3 → calcular 2×3 = 6
        //   fila = [2, 4, 6]
        //
        // i = 3 (fila 3):
        //   j = 1 → calcular 3×1 = 3
        //   j = 2 → calcular 3×2 = 6
        //   j = 3 → calcular 3×3 = 9
        //   fila = [3, 6, 9]
        
        
        fila.push(i * j);
        // ============================================================
        // CALCULAR PRODUCTO Y AÑADIR A LA FILA
        // ============================================================
        // fila.push(i * j)
        //
        // DESGLOSE:
        //
        // i * j
        // ─────
        // → Multiplica i por j
        // → Este es el PRODUCTO de la tabla de multiplicar
        //
        // i = número de la fila
        // j = número de la columna
        // i × j = producto
        //
        // EJEMPLOS:
        // i = 1, j = 1: 1 × 1 = 1
        // i = 2, j = 3: 2 × 3 = 6
        // i = 5, j = 7: 5 × 7 = 35
        //
        //
        // fila.push(...)
        // ──────────────
        // → Añade el producto al FINAL del array fila
        //
        // .push() = método que añade elemento al final
        //
        // EVOLUCIÓN DEL ARRAY fila (ejemplo i = 2, n = 3):
        // Inicio: fila = []
        // j = 1: fila.push(2×1) → fila = [2]
        // j = 2: fila.push(2×2) → fila = [2, 4]
        // j = 3: fila.push(2×3) → fila = [2, 4, 6]
        //
        //
        // VISUALIZACIÓN COMPLETA (n = 3):
        //
        // i=1, j=1: fila=[1]
        // i=1, j=2: fila=[1, 2]
        // i=1, j=3: fila=[1, 2, 3]        ← fila completa
        //
        // i=2, j=1: fila=[2]               (nueva fila)
        // i=2, j=2: fila=[2, 4]
        // i=2, j=3: fila=[2, 4, 6]        ← fila completa
        //
        // i=3, j=1: fila=[3]               (nueva fila)
        // i=3, j=2: fila=[3, 6]
        // i=3, j=3: fila=[3, 6, 9]        ← fila completa
        
        }
        // Fin del bucle interno (j)
        // Aquí la fila está COMPLETA con n elementos
        
        
        a.push(fila);
        // ============================================================
        // AÑADIR FILA AL ARRAY PRINCIPAL
        // ============================================================
        // a.push(fila)
        //
        // Añade la fila completa al array principal 'a'
        //
        // fila es un ARRAY (ejemplo: [1, 2, 3])
        // Lo añadimos al array 'a'
        //
        // EVOLUCIÓN DEL ARRAY 'a' (ejemplo n = 3):
        //
        // Inicio: a = []
        //
        // i = 1 termina:
        // fila = [1, 2, 3]
        // a.push([1, 2, 3])
        // a = [[1, 2, 3]]
        //
        // i = 2 termina:
        // fila = [2, 4, 6]
        // a.push([2, 4, 6])
        // a = [[1, 2, 3], [2, 4, 6]]
        //
        // i = 3 termina:
        // fila = [3, 6, 9]
        // a.push([3, 6, 9])
        // a = [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
        //
        // RESULTADO FINAL:
        // a = [
        //   [1, 2, 3],    ← a[0] (fila 0)
        //   [2, 4, 6],    ← a[1] (fila 1)
        //   [3, 6, 9]     ← a[2] (fila 2)
        // ]
        //
        // ARRAY BIDIMENSIONAL COMPLETO ✓
        
    }
    // Fin del bucle externo (i)
    // Ahora 'a' contiene todas las filas


    // Mostrar el array como tabla en HTML
    // ============================================================
    // Comentario explicando qué viene después
    
    
    let html = `<table><caption>Tabla de multiplicar del 1 al ${n}</caption><thead><tr>`;
    // ============================================================
    // EMPEZAR A CONSTRUIR EL HTML DE LA TABLA
    // ============================================================
    // let html = `...` → Variable que guardará TODO el HTML
    //
    // Usamos template string (` `) para poder usar ${n}
    //
    // DESGLOSE DEL HTML:
    //
    // <table>
    // ───────
    // → Abre la tabla HTML
    //
    // <caption>Tabla de multiplicar del 1 al ${n}</caption>
    // ──────────────────────────────────────────────────────
    // → Título de la tabla
    // → ${n} inserta el valor de n
    // → Si n = 5: "Tabla de multiplicar del 1 al 5"
    //
    // <thead>
    // ───────
    // → Encabezado de la tabla (header)
    // → Separa la fila de encabezados del cuerpo
    //
    // <tr>
    // ────
    // → Table Row (fila de tabla)
    // → Empezamos la fila de encabezados
    //
    // NOTA: La fila NO está cerrada todavía
    // La cerraremos después de añadir los <th>
    //
    //
    // ¿Por qué let y no const?
    // Porque vamos a MODIFICAR html (añadir más contenido con +=)
    
    
    for (let i = 1; i <= n; i++) {
    // ============================================================
    // BUCLE: Crear encabezados de columnas
    // ============================================================
    // for (let i = 1; i <= n; i++)
    //
    // Este bucle añade los números en la fila de encabezados
    //
    // FLUJO (ejemplo n = 3):
    // i = 1 → añade <th>1</th>
    // i = 2 → añade <th>2</th>
    // i = 3 → añade <th>3</th>
    //
    // RESULTADO:
    // <tr><th>1</th><th>2</th><th>3</th></tr>
    
    
        html += `<th>${i}</th>`;
        // ============================================================
        // AÑADIR CELDA DE ENCABEZADO
        // ============================================================
        // html += `<th>${i}</th>`
        //
        // += → Añadir al final de html
        //
        // <th>${i}</th>
        // ─────────────
        // <th> = Table Header (encabezado de tabla)
        // ${i} = número de la columna
        // </th> = cierre
        //
        // <th> vs <td>:
        // <th> → encabezado (texto en NEGRITA, centrado)
        // <td> → celda normal de datos
        //
        // EVOLUCIÓN DE html (ejemplo n = 3):
        // Inicio: html = "<table><caption>...</caption><thead><tr>"
        // i = 1:  html += "<th>1</th>"
        // i = 2:  html += "<th>2</th>"
        // i = 3:  html += "<th>3</th>"
        // Resultado: "...<tr><th>1</th><th>2</th><th>3</th>"
        
    }
    // Fin del bucle de encabezados
    
    
    html += "</tr></thead><tbody>";
    // ============================================================
    // CERRAR ENCABEZADO Y EMPEZAR CUERPO
    // ============================================================
    // html += "</tr></thead><tbody>"
    //
    // DESGLOSE:
    //
    // </tr>
    // ─────
    // → Cierra la fila de encabezados
    //
    // </thead>
    // ────────
    // → Cierra la sección de encabezado
    //
    // <tbody>
    // ───────
    // → Abre el cuerpo de la tabla (body)
    // → Aquí irán las filas con los datos


    for (let i = 0; i < n; i++) {
    // ============================================================
    // BUCLE EXTERNO: Recorrer FILAS del array
    // ============================================================
    // for (let i = 0; i < n; i++)
    //
    // IMPORTANTE: Ahora i empieza en 0 (no en 1)
    // ¿Por qué?
    // Porque los índices de arrays empiezan en 0
    // a[0], a[1], a[2]...
    //
    // Este bucle recorre las FILAS del array bidimensional 'a'
    //
    // FLUJO (ejemplo n = 3):
    // i = 0 → procesar a[0] = [1, 2, 3]
    // i = 1 → procesar a[1] = [2, 4, 6]
    // i = 2 → procesar a[2] = [3, 6, 9]
    
    
        html += "<tr>";
        // ============================================================
        // EMPEZAR NUEVA FILA
        // ============================================================
        // html += "<tr>"
        //
        // Abre una nueva fila en la tabla HTML
        //
        // Cada fila contendrá n celdas <td>
        
        
        for (let j = 0; j < n; j++) {
        // ============================================================
        // BUCLE INTERNO: Recorrer COLUMNAS de la fila
        // ============================================================
        // for (let j = 0; j < n; j++)
        //
        // También empieza en 0
        // Porque accedemos a a[i][j] con índices base 0
        //
        // Este bucle recorre las COLUMNAS de cada fila
        //
        // FLUJO (ejemplo i = 1, n = 3):
        // j = 0 → a[1][0] = 2
        // j = 1 → a[1][1] = 4
        // j = 2 → a[1][2] = 6
        
        
        html += `<td>${a[i][j]}</td>`;
        // ============================================================
        // AÑADIR CELDA CON PRODUCTO
        // ============================================================
        // html += `<td>${a[i][j]}</td>`
        //
        // <td>${a[i][j]}</td>
        // ──────────────────
        // <td> = Table Data (celda de datos)
        // ${a[i][j]} = acceso al array bidimensional
        // </td> = cierre
        //
        //
        // ACCESO A ARRAY BIDIMENSIONAL:
        // a[i][j]
        // ───────
        // a[i] → accede a la fila i (que es un array)
        // [j] → accede al elemento j de esa fila
        //
        // EJEMPLOS (con n = 3):
        // a[0][0] = 1  (fila 0, columna 0)
        // a[0][1] = 2  (fila 0, columna 1)
        // a[1][0] = 2  (fila 1, columna 0)
        // a[1][2] = 6  (fila 1, columna 2)
        // a[2][2] = 9  (fila 2, columna 2)
        //
        //
        // CONSTRUCCIÓN DE UNA FILA (ejemplo i = 1):
        // j = 0: html += "<td>2</td>"
        // j = 1: html += "<td>4</td>"
        // j = 2: html += "<td>6</td>"
        // Resultado: "<tr><td>2</td><td>4</td><td>6</td>"
        
        }
        // Fin del bucle interno (j)
        // La fila tiene todas sus celdas
        
        
        html += "</tr>";
        // ============================================================
        // CERRAR FILA
        // ============================================================
        // html += "</tr>"
        //
        // Cierra la fila HTML
        //
        // Ahora la fila está completa:
        // <tr><td>2</td><td>4</td><td>6</td></tr>
        
    }
    // Fin del bucle externo (i)
    // Todas las filas están generadas


    html += "</tbody></table>";
    // ============================================================
    // CERRAR LA TABLA
    // ============================================================
    // html += "</tbody></table>"
    //
    // DESGLOSE:
    //
    // </tbody>
    // ────────
    // → Cierra el cuerpo de la tabla
    //
    // </table>
    // ────────
    // → Cierra la tabla completa
    //
    // AHORA html contiene la tabla HTML COMPLETA


    resultado.innerHTML = html;
    // ============================================================
    // INSERTAR LA TABLA EN LA PÁGINA
    // ============================================================
    // resultado.innerHTML = html
    //
    // Escribe el HTML completo dentro del div resultado
    //
    // ANTES:
    // <div id="resultado"></div>
    //
    // DESPUÉS:
    // <div id="resultado">
    //     <table>
    //         <caption>Tabla de multiplicar del 1 al 3</caption>
    //         <thead>
    //             <tr><th>1</th><th>2</th><th>3</th></tr>
    //         </thead>
    //         <tbody>
    //             <tr><td>1</td><td>2</td><td>3</td></tr>
    //             <tr><td>2</td><td>4</td><td>6</td></tr>
    //             <tr><td>3</td><td>6</td><td>9</td></tr>
    //         </tbody>
    //     </table>
    // </div>
    //
    // ¡La tabla aparece en la pantalla!
    
    }
// ============================================================
// FIN DE LA FUNCIÓN generarTabla
// ============================================================


// ============================================================
// 🔍 FLUJO COMPLETO EJEMPLO (n = 3):
// ============================================================

// USUARIO ESCRIBE: 3
// HACE CLIC EN EL BOTÓN
// SE EJECUTA: generarTabla()

// 1. n = parseInt("3") = 3
// 2. resultado = <div id="resultado">
// 3. Validación: isNaN(3) = false, 3 < 1 = false → NO entra en if ✓
// 4. Crear array bidimensional:
//    a = []
//    i = 1: fila = [1, 2, 3] → a = [[1, 2, 3]]
//    i = 2: fila = [2, 4, 6] → a = [[1, 2, 3], [2, 4, 6]]
//    i = 3: fila = [3, 6, 9] → a = [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
// 5. Generar HTML:
//    - Abrir tabla + caption + thead
//    - Añadir encabezados: <th>1</th><th>2</th><th>3</th>
//    - Cerrar thead, abrir tbody
//    - Para cada fila del array:
//      • Abrir <tr>
//      • Para cada columna: <td>valor</td>
//      • Cerrar </tr>
//    - Cerrar tbody y table
// 6. Insertar en la página: resultado.innerHTML = html
// 7. ¡Tabla visible en pantalla!


// ============================================================
// 📊 RESULTADO VISUAL (n = 3):
// ============================================================
//
//    Tabla de multiplicar del 1 al 3
//    ┌───┬───┬───┐
//    │ 1 │ 2 │ 3 │ ← encabezados
//    ├───┼───┼───┤
//    │ 1 │ 2 │ 3 │ ← fila 1
//    │ 2 │ 4 │ 6 │ ← fila 2
//    │ 3 │ 6 │ 9 │ ← fila 3
//    └───┴───┴───┘


// ============================================================
// 📌 CONCEPTOS CLAVE PARA EL EXAMEN:
// ============================================================

// 1. ARRAY BIDIMENSIONAL:
//    let arr = [[1, 2], [3, 4]]
//    arr[0][1] = 2

// 2. BUCLES ANIDADOS:
//    for (i) {
//        for (j) {
//            // i×j iteraciones
//        }
//    }

// 3. VALIDACIÓN DE INPUT:
//    isNaN(n) || n < 1

// 4. parseInt():
//    Convierte string a entero

// 5. .value:
//    Lee contenido de input (devuelve string)

// 6. .push():
//    Añade elemento al final del array

// 7. ESTRUCTURA HTML TABLA:
//    <table>
//      <caption>título</caption>
//      <thead><tr><th>...</th></tr></thead>
//      <tbody><tr><td>...</td></tr></tbody>
//    </table>

// 8. innerHTML:
//    Escribe HTML dentro de un elemento

// 9. return:
//    Sale de la función


// ============================================================
// 💡 MEJORAS OPCIONALES:
// ============================================================

// MEJORA 1: Validar número máximo
// if (n > 20) {
//     resultado.innerHTML = "<p style='color:orange'>Número muy grande. Máximo: 20</p>";
//     return;
// }

// MEJORA 2: Añadir CSS inline para estilo
// html = `<table style="border-collapse:collapse">...`;

// MEJORA 3: Resaltar diagonal principal
// if (i === j) {
//     html += `<td style="background:yellow">${a[i][j]}</td>`;
// }


// ============================================================
// 📌 RESUMEN ULTRA CORTO:
// ============================================================
// 1. Leer n del input con parseInt
// 2. Validar: isNaN o < 1 → error
// 3. Crear array 2D: for i { for j { fila.push(i*j) } a.push(fila) }
// 4. Generar HTML: tabla con encabezados + filas de datos
// 5. Insertar en página: innerHTML