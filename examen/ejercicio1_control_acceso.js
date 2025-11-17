// ============================================================
// EJERCICIO 1: Control de Acceso con Contraseña
// ============================================================


let intentos = 0;
// ============================================================
// VARIABLE: Contador de intentos fallidos
// ============================================================
// let = variable (su valor SÍ puede cambiar)
// intentos = nombre de la variable
// 0 = valor inicial (todavía no ha fallado ninguna vez)
//
// Esta variable CUENTA cuántas veces el usuario se equivoca
// Cada vez que falle, sumaremos 1: intentos++
//
// Ejemplo del flujo:
// - Inicio: intentos = 0
// - Falla 1 vez: intentos = 1
// - Falla 2 veces: intentos = 2
// - Falla 3 veces: intentos = 3 → BLOQUEADO
//
// ¿Por qué let y no const?
// Porque el valor CAMBIA (de 0 a 1, a 2, a 3...)
//
// Es como una pizarra donde vas marcando palitos:
// Intento 1: |
// Intento 2: ||
// Intento 3: ||| → ¡Se acabó!


const passwordCorrecto = "secreto";
// ============================================================
// CONSTANTE: La contraseña correcta
// ============================================================
// const = constante (su valor NO puede cambiar NUNCA)
// passwordCorrecto = nombre de la constante
// "secreto" = la contraseña correcta (entre comillas porque es texto)
//
// Esta es la contraseña que el usuario debe adivinar
// Está "escrita en piedra" (no se puede cambiar)
//
// ¿Por qué const y no let?
// Porque el password correcto NUNCA cambia durante la ejecución
// Siempre es "secreto"
//
// ¿Por qué se ve en el código?
// En un sistema real, esto estaría en el SERVIDOR (backend)
// Aquí es solo para practicar JavaScript básico
//
// Es como la respuesta de un examen:
// El profesor tiene la respuesta correcta guardada
// Los alumnos intentan adivinarla


document.getElementById("boton").addEventListener("click", function () {
// ============================================================
// AÑADIR EVENTO AL BOTÓN
// ============================================================
// Esta línea es COMPLEJA, vamos a desglosarla por partes:
//
// PARTE 1: document.getElementById("boton")
// ─────────────────────────────────────────
// document → El documento HTML completo (la página web)
// .getElementById("boton") → Busca el elemento con id="boton"
// 
// En tu HTML tienes: <button id="boton">Ingresar</button>
// Esta línea ENCUENTRA ese botón
//
// Es como decir: "En esta página, búscame el botón que tiene id='boton'"
//
//
// PARTE 2: .addEventListener("click", ...)
// ─────────────────────────────────────────
// addEventListener = "añadir escuchador de eventos"
// Es como poner una alarma que detecta cuando pasa algo
//
// "click" = el tipo de evento que queremos detectar
// Significa: "Detecta cuando el usuario HAGA CLIC en el botón"
//
// Otros eventos posibles:
// "mouseover" → cuando el ratón pasa por encima
// "keypress" → cuando se pulsa una tecla
// "submit" → cuando se envía un formulario
//
//
// PARTE 3: function () { ... }
// ─────────────────────────────────────────
// function () { } = función anónima
// Es un bloque de código que se ejecuta cuando ocurre el evento
//
// "anónima" = sin nombre (no tiene nombre propio)
//
// Todo el código entre { y } se ejecuta cuando:
// 1. El usuario hace clic en el botón
// 2. El navegador detecta el clic
// 3. Se ejecuta esta función
//
//
// RESUMEN EN LENGUAJE HUMANO:
// "Oye navegador, cuando el usuario haga clic en el botón con id='boton',
//  ejecuta este código que te voy a dar"
//
//
// ALTERNATIVA (forma antigua, NO recomendada):
// En el HTML: <button onclick="miFuncion()">
// En JS: function miFuncion() { ... }
//
// ¿Por qué tu forma es MEJOR?
// - Separa HTML y JavaScript (más limpio)
// - Más flexible (puedes añadir múltiples eventos)
// - Es la forma moderna y profesional ✓


    const input = document.getElementById("passwordInput").value;
    // ============================================================
    // LEER LO QUE EL USUARIO ESCRIBIÓ
    // ============================================================
    // const input = ... → Crear una constante llamada "input"
    //
    // DESGLOSE:
    // document.getElementById("passwordInput") → Busca el <input> con id="passwordInput"
    // .value → Lee el TEXTO que el usuario escribió dentro
    //
    // En tu HTML tienes:
    // <input type="text" id="passwordInput" placeholder="Escribe el password">
    //
    // Esta línea OBTIENE lo que hay escrito ahí
    //
    // Ejemplo:
    // Si el usuario escribió "hola123"
    // Entonces: input = "hola123"
    //
    // Si el usuario escribió "secreto"
    // Entonces: input = "secreto"
    //
    // Si el usuario NO escribió nada (campo vacío)
    // Entonces: input = ""
    //
    // IMPORTANTE:
    // .value SIEMPRE devuelve TEXTO (string)
    // Aunque el usuario escriba 123, obtienes "123" (texto)
    //
    // ¿Por qué const?
    // Porque dentro de esta función, el valor NO cambia
    // Leemos el input UNA vez y lo usamos


    const mensaje = document.getElementById("mensaje");
    // ============================================================
    // OBTENER EL ELEMENTO DONDE MOSTRAREMOS MENSAJES
    // ============================================================
    // const mensaje = ... → Crear una constante llamada "mensaje"
    //
    // document.getElementById("mensaje") → Busca el <p> con id="mensaje"
    //
    // En tu HTML tienes:
    // <p id="mensaje"></p>
    //
    // Esta línea GUARDA ese elemento <p> en la variable "mensaje"
    // para poder escribir dentro de él después
    //
    // IMPORTANTE:
    // Aquí NO leemos el contenido (no usamos .value ni .textContent)
    // Solo guardamos una REFERENCIA al elemento
    //
    // Es como tener la DIRECCIÓN de una casa,
    // no el contenido de la casa
    //
    // Después usaremos: mensaje.textContent = "..."
    // para ESCRIBIR dentro de ese <p>


    if (input === passwordCorrecto) {
    // ============================================================
    // PRIMERA COMPROBACIÓN: ¿Es correcta la contraseña?
    // ============================================================
    // if = "si" (condicional)
    // input === passwordCorrecto → compara lo que escribió el usuario
    //                               con la contraseña correcta
    //
    // === significa "es ESTRICTAMENTE igual"
    // Compara:
    // 1. El VALOR (¿son iguales?)
    // 2. El TIPO (¿son del mismo tipo: texto, número, etc.?)
    //
    // Ejemplo:
    // Si input = "secreto" y passwordCorrecto = "secreto"
    // "secreto" === "secreto" → TRUE (verdadero)
    //
    // Si input = "hola" y passwordCorrecto = "secreto"
    // "hola" === "secreto" → FALSE (falso)
    //
    // Si es TRUE (verdadero):
    // → Se ejecuta el código entre { y }
    // → ¡El usuario acertó!
    //
    // Si es FALSE (falso):
    // → Se salta este bloque
    // → Va al else (el usuario falló)
    //
    // IMPORTANTE - DIFERENCIA: == vs ===
    // == compara solo el valor (puede convertir tipos)
    //    "5" == 5 → true (convierte "5" a 5)
    // === compara valor Y tipo (NO convierte)
    //    "5" === 5 → false (uno es texto, otro número)
    //
    // SIEMPRE usa === (es más seguro y preciso) ✓


    mensaje.textContent = "Bienvenido, acceso concedido.";
    // ============================================================
    // MOSTRAR MENSAJE DE ÉXITO
    // ============================================================
    // mensaje.textContent = ... → Escribir texto dentro del elemento
    //
    // mensaje → Es el <p id="mensaje"> que guardamos antes
    // .textContent → Propiedad que contiene el TEXTO del elemento
    // "Bienvenido, acceso concedido." → El texto que queremos mostrar
    //
    // Esto CAMBIA el HTML de:
    // <p id="mensaje"></p>
    // a:
    // <p id="mensaje">Bienvenido, acceso concedido.</p>
    //
    // En la pantalla aparece: Bienvenido, acceso concedido.
    //
    // ALTERNATIVAS:
    // .textContent → Solo texto plano (lo que usas) ✓
    // .innerHTML → Puede incluir HTML (ejemplo: "<b>texto</b>")
    //
    // Para este ejercicio, .textContent es PERFECTO
    // porque solo necesitas texto, no HTML
    //
    // Es como escribir en una pizarra:
    // Borras lo que había (nada, porque estaba vacío)
    // Escribes: "Bienvenido, acceso concedido."


    document.getElementById("boton").disabled = true;
    // ============================================================
    // DESHABILITAR EL BOTÓN
    // ============================================================
    // Esta es la línea que pide el ejercicio:
    // "document.querySelector("#boton").disabled = true;"
    //
    // Tú usas getElementById en vez de querySelector
    // → Ambas funcionan IGUAL para IDs ✓
    //
    // DESGLOSE:
    // document.getElementById("boton") → Busca el botón con id="boton"
    // .disabled → Propiedad que indica si está deshabilitado
    // = true → Lo ponemos en TRUE (verdadero)
    //
    // ¿Qué hace .disabled = true?
    // - El botón se pone GRIS
    // - Ya NO se puede hacer clic
    // - Visualmente parece "apagado"
    //
    // ¿Por qué deshabilitar el botón?
    // Porque el usuario ya ENTRÓ correctamente
    // No necesita intentar más veces
    //
    // Es como cerrar una puerta después de entrar:
    // Ya estás dentro, no necesitas volver a entrar
    //
    // Para volver a HABILITAR el botón (no lo hacemos aquí):
    // boton.disabled = false;


    } else {
    // ============================================================
    // ALTERNATIVA: El usuario se EQUIVOCÓ
    // ============================================================
    // else = "si no" (alternativa del if)
    //
    // Si llegamos aquí, significa:
    // input !== passwordCorrecto
    // → Lo que escribió NO es igual a "secreto"
    // → El usuario falló
    //
    // Ahora debemos:
    // 1. Contar este intento fallido
    // 2. Comprobar si quedan intentos
    // 3. Mostrar mensaje apropiado


    intentos++;
    // ============================================================
    // INCREMENTAR EL CONTADOR DE INTENTOS
    // ============================================================
    // intentos++ es una FORMA CORTA de escribir:
    // intentos = intentos + 1
    //
    // ++ se llama "operador de incremento"
    // Suma 1 al valor actual
    //
    // Ejemplo:
    // intentos = 0
    // intentos++ → ahora intentos = 1
    // intentos++ → ahora intentos = 2
    // intentos++ → ahora intentos = 3
    //
    // También existe -- (operador de decremento):
    // intentos-- → resta 1
    //
    // ¿Por qué incrementar?
    // Porque el usuario acaba de fallar
    // Necesitamos contar este intento fallido
    //
    // Es como marcar una rayita en la pizarra:
    // Intento 1: |
    // Intento 2: ||
    // Intento 3: |||


    if (intentos >= 3) {
    // ============================================================
    // COMPROBAR: ¿Se agotaron los 3 intentos?
    // ============================================================
    // Segundo if DENTRO del else
    // Esto se llama "if anidado" (un if dentro de otro)
    //
    // intentos >= 3 → "intentos es mayor o igual a 3"
    //
    // >= es el operador "mayor o igual que"
    // Operadores de comparación:
    // >  mayor que
    // >= mayor o igual que
    // <  menor que
    // <= menor o igual que
    //
    // ¿Por qué >= y no ==?
    // Por seguridad, aunque nunca debería ser > 3
    // Si por algún error intentos fuera 4, también se bloquea
    //
    // Si intentos >= 3 es TRUE:
    // → Ya falló 3 veces
    // → Se acabaron las oportunidades
    // → BLOQUEAR acceso


    mensaje.textContent = "Has fallado 3 veces. Acceso bloqueado.";
    // ============================================================
    // MOSTRAR MENSAJE DE BLOQUEO
    // ============================================================
    // Escribir en el <p id="mensaje">:
    // "Has fallado 3 veces. Acceso bloqueado."
    //
    // Este es el mensaje FINAL cuando se agotan los intentos
    // Es un mensaje de ERROR definitivo


    document.getElementById("boton").disabled = true;
    // ============================================================
    // DESHABILITAR EL BOTÓN (BLOQUEADO)
    // ============================================================
    // Igual que cuando acertaba, deshabilitamos el botón
    //
    // Pero ahora por DIFERENTE razón:
    // - Antes: porque acertó (éxito)
    // - Ahora: porque falló 3 veces (bloqueado)
    //
    // El botón se pone gris y ya no se puede hacer clic
    //
    // ¿Cómo se desbloquea?
    // Solo RECARGANDO la página (F5)
    // Esto reinicia todo (intentos vuelve a 0)


    } else {
    // ============================================================
    // ALTERNATIVA: Todavía quedan intentos
    // ============================================================
    // Si llegamos aquí:
    // - El usuario falló
    // - Pero intentos < 3 (todavía le quedan oportunidades)
    //
    // Ejemplo:
    // Si intentos = 1
    // ¿1 >= 3? NO
    // → Entra en este else
    // → Le quedan 2 intentos más


    mensaje.textContent = `Contraseña incorrecta. Intento ${intentos} de 3.`;
    // ============================================================
    // MOSTRAR MENSAJE DE INTENTO FALLIDO
    // ============================================================
    // Esta línea usa TEMPLATE STRINGS
    //
    // IMPORTANTE: Fíjate en las comillas:
    // ` ← acento grave (no es comilla simple ')
    //
    // Las comillas graves `` permiten:
    // 1. Escribir en múltiples líneas
    // 2. Insertar variables con ${}
    //
    // ${intentos} → Inserta el VALOR de la variable intentos
    //
    // Ejemplo:
    // Si intentos = 1:
    // `Contraseña incorrecta. Intento ${intentos} de 3.`
    // Se convierte en:
    // "Contraseña incorrecta. Intento 1 de 3."
    //
    // Si intentos = 2:
    // "Contraseña incorrecta. Intento 2 de 3."
    //
    // FORMA ANTIGUA (sin template strings):
    // mensaje.textContent = "Contraseña incorrecta. Intento " + intentos + " de 3.";
    // → Funciona igual pero es MÁS DIFÍCIL de leer
    //
    // Template strings son MUCHO más claros ✓
    //
    // Otros ejemplos de template strings:
    // `Hola ${nombre}, tienes ${edad} años`
    // `El resultado es ${5 + 3}` → "El resultado es 8"
    // `Tu puntuación: ${puntos}/100` → "Tu puntuación: 85/100"


    }
    // Aquí termina el if anidado (intentos >= 3)
    
    }
    // Aquí termina el else principal (usuario falló)
    
});
// Aquí termina el addEventListener
// Aquí termina la función anónima


// ============================================================
// 🔍 FLUJO COMPLETO - EJEMPLO PASO A PASO:
// ============================================================

// SITUACIÓN 1: Usuario escribe "hola" y pulsa el botón
// ─────────────────────────────────────────────────────
// 1. Se detecta el clic
// 2. Se ejecuta la función
// 3. input = "hola"
// 4. mensaje = <p id="mensaje">
// 5. ¿"hola" === "secreto"? NO → va al else
// 6. intentos++ → intentos = 1
// 7. ¿1 >= 3? NO → va al segundo else
// 8. Muestra: "Contraseña incorrecta. Intento 1 de 3."

// SITUACIÓN 2: Usuario escribe "test" y pulsa el botón
// ─────────────────────────────────────────────────────
// 1. Se detecta el clic
// 2. Se ejecuta la función
// 3. input = "test"
// 4. ¿"test" === "secreto"? NO → va al else
// 5. intentos++ → intentos = 2
// 6. ¿2 >= 3? NO → va al segundo else
// 7. Muestra: "Contraseña incorrecta. Intento 2 de 3."

// SITUACIÓN 3: Usuario escribe "abc" y pulsa el botón
// ─────────────────────────────────────────────────────
// 1. Se detecta el clic
// 2. Se ejecuta la función
// 3. input = "abc"
// 4. ¿"abc" === "secreto"? NO → va al else
// 5. intentos++ → intentos = 3
// 6. ¿3 >= 3? SÍ → entra en el if
// 7. Muestra: "Has fallado 3 veces. Acceso bloqueado."
// 8. boton.disabled = true → BOTÓN BLOQUEADO

// SITUACIÓN 4: Usuario escribe "secreto" y pulsa el botón
// ─────────────────────────────────────────────────────
// 1. Se detecta el clic
// 2. Se ejecuta la función
// 3. input = "secreto"
// 4. ¿"secreto" === "secreto"? SÍ → entra en el if
// 5. Muestra: "Bienvenido, acceso concedido."
// 6. boton.disabled = true → BOTÓN BLOQUEADO (pero por éxito)
// 7. NO ejecuta el else (ya acertó)


// ============================================================
// 📊 DIAGRAMA DE FLUJO:
// ============================================================
//
// Usuario pulsa botón
//         ↓
// Leer input del usuario
//         ↓
// ¿input === "secreto"?
//    ↙          ↘
//  SÍ            NO
//   ↓             ↓
// Mensaje      intentos++
// "Bienvenido"    ↓
//   ↓          ¿intentos >= 3?
// Deshabilitar  ↙        ↘
// botón       SÍ          NO
//              ↓           ↓
//          Mensaje      Mensaje
//          "Bloqueado"  "Intento X de 3"
//              ↓
//          Deshabilitar
//          botón


// ============================================================
// 📌 CONCEPTOS CLAVE PARA EL EXAMEN:
// ============================================================

// 1. let vs const:
//    let intentos = 0;        // Puede cambiar
//    const password = "secreto"; // NO puede cambiar

// 2. addEventListener:
//    elemento.addEventListener("click", function() {
//        // código aquí
//    });

// 3. Leer input:
//    let valor = elemento.value;

// 4. Escribir en elemento:
//    elemento.textContent = "texto";

// 5. Deshabilitar botón:
//    boton.disabled = true;

// 6. Comparación estricta:
//    === (compara valor Y tipo)

// 7. Incrementar:
//    intentos++ (suma 1)

// 8. Template strings:
//    `Texto ${variable}` (con acentos graves)

// 9. If anidado:
//    if (...) {
//        if (...) {
//        } else {
//        }
//    } else {
//    }


// ============================================================
// 💡 MEJORAS OPCIONALES (no son necesarias para el ejercicio):
// ============================================================

// MEJORA 1: Limpiar el input después de cada intento
// document.getElementById("passwordInput").value = "";

// MEJORA 2: Permitir Enter en vez de solo clic
// document.getElementById("passwordInput").addEventListener("keypress", function(e) {
//     if (e.key === "Enter") {
//         document.getElementById("boton").click();
//     }
// });

// MEJORA 3: Cambiar type="text" a type="password" en el HTML
// Para que se oculte lo que escribes (••••)


// ============================================================
// 📌 RESUMEN ULTRA CORTO:
// ============================================================
// 1. Definir intentos = 0 y password = "secreto"
// 2. Al hacer clic en el botón:
//    - Leer lo que escribió el usuario
//    - ¿Es correcto? → Mensaje de bienvenida + bloquear botón
//    - ¿Es incorrecto? → intentos++
//      • ¿intentos >= 3? → Mensaje de bloqueo + bloquear botón
//      • ¿intentos < 3? → Mensaje "Te quedan X intentos"