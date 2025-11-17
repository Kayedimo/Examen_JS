// Capturamos los elementos del HTML
const chat = document.getElementById("chat");      // Área de texto donde se acumulan los mensajes
const input = document.getElementById("mensaje");  // Campo donde el usuario escribe el nuevo mensaje
const boton = document.getElementById("enviar");   // Botón para enviar el mensaje

// Función que añade el mensaje al chat
function enviarMensaje() {
  const texto = input.value;  // Guardamos el texto que escribió el usuario

  if (texto.trim() !== "") {  // Solo si el texto no está vacío
    chat.value += "\n" + texto;  // Añadimos el texto al final del chat
    input.value = "";            // Limpiamos el campo de entrada
    input.focus();              // Devolvemos el foco al input para seguir escribiendo
  }
}

// Evento al hacer clic en el botón
boton.addEventListener("click", enviarMensaje);

// Evento al pulsar una tecla dentro del input
input.addEventListener("keydown", function(ev) {
  // Si la tecla pulsada es Enter, ejecutamos la misma función que el botón
  if (ev.key === "Enter") {
    enviarMensaje();
  }
});

/*
Frase guía para examen:
“Uso keydown para detectar Enter y ejecutar la misma función que el botón. Así el chat responde tanto al clic como al teclado.”

Notas clave:
- ev.key === "Enter" detecta si la tecla pulsada fue Enter.
- Reutilizamos la función enviarMensaje() para no repetir código.
- input.focus() mejora la experiencia: el usuario puede seguir escribiendo sin tocar el ratón.

*/