// ============================================================
// EJERCICIO 1: Mensaje de Bienvenida
// ============================================================

// Esta función se ejecuta cuando el usuario pulsa el botón
function saludar() {
    // PASO 1: Buscar el cuadro de texto donde está el nombre
    // document.getElementById("nombre") → busca el elemento con id="nombre"
    let inputNombre = document.getElementById("nombre");
    
    // PASO 2: Leer lo que el usuario escribió
    // .value es la propiedad que contiene el texto escrito
    let nombre = inputNombre.value;
    
    // PASO 3: Crear el mensaje de bienvenida
    // Usamos template strings (comillas raras: ``)
    // Con ${nombre} metemos el valor de la variable nombre
    let mensajeBienvenida = `<h1>Bienvenido ${nombre}</h1>`;
    
    // PASO 4: Buscar el div donde mostraremos el mensaje
    let divMensaje = document.getElementById("mensaje");
    
    // PASO 5: Escribir el mensaje dentro del div
    // .innerHTML significa "el HTML que hay dentro"
    divMensaje.innerHTML = mensajeBienvenida;
}

// RESUMEN:
// 1. Leer input: .value
// 2. Escribir en div: .innerHTML