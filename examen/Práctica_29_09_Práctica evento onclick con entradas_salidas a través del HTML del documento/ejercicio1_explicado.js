// ============================================================
// EJERCICIO 1: Mensaje de Bienvenida
// ============================================================

// ============================================================
// 🎯 OBJETIVO DE ESTE EJERCICIO:
// ============================================================
// Aprender a:
// 1. Leer lo que el usuario escribe en un campo de texto
// 2. Hacer que un botón ejecute una función cuando lo pulsen
// 3. Mostrar un mensaje en la página web


// ============================================================
// 🎯 CONCEPTO: ¿Qué es una FUNCIÓN?
// ============================================================
// Una función es como una RECETA DE COCINA:
// - Le pones un nombre (ejemplo: "saludar")
// - Dentro escribes los pasos a seguir
// - Cuando la "llamas", se ejecutan esos pasos
//
// Ejemplo de la vida real:
// Función "hacerCafe":
//   1. Poner agua en la cafetera
//   2. Añadir café
//   3. Encender la cafetera
//   4. Esperar 5 minutos
//
// Cada vez que "llamas" a hacerCafe(), se hacen esos 4 pasos


// ============================================================
// 🎯 CONCEPTO: ¿Qué es document.getElementById()?
// ============================================================
// document = el documento HTML (la página web completa)
// getElementById = "busca un elemento por su ID"
// 
// Es como decir:
// "En esta página web, búscame la cosa que tiene el id='nombre'"
//
// Imagina que tienes una caja con etiquetas:
// - Una caja tiene la etiqueta "nombre"
// - Otra tiene la etiqueta "mensaje"
// getElementById te ayuda a encontrar la caja correcta


// ============================================================
// 📝 FUNCIÓN: saludar()
// ============================================================
// Esta función se ejecuta cuando el usuario pulsa el botón

function saludar() {
    // PASO 1: Buscar el cuadro de texto donde está el nombre
    // document.getElementById("nombre") → busca el elemento con id="nombre"
    // Esto nos devuelve el INPUT (el cuadro de texto)
    let inputNombre = document.getElementById("nombre");
    
    // PASO 2: Leer lo que el usuario escribió
    // .value es una PROPIEDAD que contiene el texto escrito
    // Es como abrir la caja y ver qué hay dentro
    let nombre = inputNombre.value;
    
    // También se puede hacer todo en una línea:
    // let nombre = document.getElementById("nombre").value;
    
    
    // PASO 3: Crear el mensaje de bienvenida
    // Usamos "template strings" (las comillas raras: ``)
    // Con ${nombre} metemos el valor de la variable nombre
    let mensajeBienvenida = `<h1>Bienvenido ${nombre}</h1>`;
    
    // Ejemplo:
    // Si nombre = "Kaye"
    // Entonces mensajeBienvenida = "<h1>Bienvenido Kaye</h1>"
    
    
    // PASO 4: Buscar el div donde mostraremos el mensaje
    let divMensaje = document.getElementById("mensaje");
    
    
    // PASO 5: Escribir el mensaje dentro del div
    // .innerHTML significa "el HTML que hay dentro"
    // Es como escribir algo dentro de una caja
    divMensaje.innerHTML = mensajeBienvenida;
}


// ============================================================
// 💡 EXPLICACIÓN ESTILO FEYNMAN (como si fueras un niño)
// ============================================================
// Imagina que tienes una máquina mágica:
//
// 1. Escribes tu nombre en un papel (el input)
// 2. Pones el papel en una ranura
// 3. Pulsas un botón rojo (el button)
// 4. La máquina lee tu nombre del papel
// 5. La máquina escribe "Bienvenido [tu nombre]" en una pantalla (el div)
//
// Eso es exactamente lo que hace este código:
// - El input es el papel donde escribes
// - El button es el botón que pulsas
// - La función saludar() es la máquina que procesa todo
// - El div es la pantalla donde aparece el mensaje


// ============================================================
// 📌 CONCEPTOS CLAVE PARA EL EXAMEN:
// ============================================================

// 1. LEER un valor de un input:
//    let valor = document.getElementById("id_del_input").value;

// 2. ESCRIBIR en un elemento HTML:
//    document.getElementById("id_del_elemento").innerHTML = "texto";

// 3. FUNCIÓN: bloque de código que se ejecuta cuando la llamas
//    function nombreFuncion() {
//        // código aquí
//    }

// 4. EVENTO onclick: se ejecuta cuando haces clic en un elemento
//    <button onclick="nombreFuncion()">Clic aquí</button>


// ============================================================
// 🔍 ¿QUÉ PASA PASO A PASO?
// ============================================================

// 1. El usuario abre la página
// 2. Ve un cuadro de texto y un botón
// 3. Escribe su nombre en el cuadro (ejemplo: "Kaye")
// 4. Pulsa el botón "Saludar"
// 5. Se ejecuta onclick="saludar()"
// 6. JavaScript busca el input con id="nombre"
// 7. Lee el texto que hay dentro: "Kaye"
// 8. Crea el mensaje: "<h1>Bienvenido Kaye</h1>"
// 9. Busca el div con id="mensaje"
// 10. Escribe el mensaje dentro del div
// 11. ¡El usuario ve "Bienvenido Kaye" en pantalla!


// ============================================================
// ⚠️ ERRORES COMUNES:
// ============================================================

// ERROR 1: Olvidar .value
// let nombre = document.getElementById("nombre");  // ❌ INCORRECTO
// Esto te da el ELEMENTO, no el texto

// let nombre = document.getElementById("nombre").value;  // ✓ CORRECTO
// Esto sí te da el texto


// ERROR 2: ID equivocado
// document.getElementById("name")  // ❌ Si el id es "nombre", esto falla


// ERROR 3: Olvidar las comillas en onclick
// <button onclick=saludar()>  // ❌ INCORRECTO
// <button onclick="saludar()">  // ✓ CORRECTO


// ============================================================
// 🧪 PRUEBA TÚ MISMA:
// ============================================================
// 1. Abre ejercicio1_bienvenida.html en el navegador
// 2. Escribe tu nombre en el cuadro
// 3. Pulsa el botón "Saludar"
// 4. Deberías ver: "Bienvenido [tu nombre]"


// ============================================================
// 📌 RESUMEN ULTRA CORTO:
// ============================================================
// 1. Usuario escribe en input
// 2. Usuario pulsa botón
// 3. JavaScript lee el input con .value
// 4. JavaScript escribe en div con .innerHTML
// 5. ¡Mensaje aparece en pantalla!