// Práctica: evento onclick con entradas/salidas a través del HTML del documento
// 1. Lectura de atributo y evento: Crea un formulario con un cuadro de texto y un
// botón. En el cuadro de texto excribiremos nuestro nombre, y al pulsar el botón
// nos mostrará un mensaje de bienvenda en un <h1>.


// Creamos la función que se ejecuta al hacer clic en el botón
function mostrarBienvenida() {
    // Obtenemos el valor del input con id 'nombre'
    var nombre = document.getElementById('nombre').value;
    // Mostramos el mensaje en el elemento h1 con id 'mensaje'
    document.getElementById('mensaje').innerHTML = 'Bienvenido ' + nombre;
}

// Este script debe usarse junto con un HTML como este:
// <form>
//   <input type="text" id="nombre" placeholder="Escribe tu nombre">
//   <button type="button" onclick="mostrarBienvenida()">Enviar</button>
// </form>
// <h1 id="mensaje"></h1>