// Capturamos los elementos del HTML
const chat = document.getElementById("chat");      // Área de texto donde se acumulan los mensajes
const input = document.getElementById("mensaje");  // Campo donde el usuario escribe el nuevo mensaje
const boton = document.getElementById("enviar");   // Botón para enviar el mensaje

// Función que se ejecuta al hacer clic en el botón
boton.addEventListener("click", function() {
  const texto = input.value;  // Guardamos el texto que escribió el usuario

  if (texto.trim() !== "") {  // Solo si el texto no está vacío
    chat.value += "\n" + texto;  // Añadimos el texto al final del chat, con salto de línea
    input.value = "";            // Limpiamos el campo de entrada
    input.focus();              // Devolvemos el foco al input para seguir escribiendo
  }
});

// “Capturo el texto del input, lo añado al textarea, borro el campo y devuelvo el foco con .focus().”
