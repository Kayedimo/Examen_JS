// Esperamos a que todo el contenido HTML esté cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {

  // Accedemos al elemento que queremos modificar visualmente (la caja)
  const box = document.getElementById("control-box");

  // Accedemos al control deslizante que ajusta el ancho
  const widthRange = document.getElementById("width-range");

  // Accedemos al control deslizante que ajusta el alto
  const heightRange = document.getElementById("height-range");

  // Accedemos al campo de texto que define la posición desde arriba (top)
  const topInput = document.getElementById("top-input");

  // Accedemos al campo de texto que define la posición desde la izquierda (left)
  const leftInput = document.getElementById("left-input");

  // Accedemos a la etiqueta donde se mostrarán las dimensiones actuales
  const label = document.getElementById("dimension-label");

  // Cuando el usuario mueve cualquiera de los dos rangos (ancho o alto), se actualiza la caja
  widthRange.oninput = heightRange.oninput = function() {
    // Cambiamos el ancho de la caja según el valor del rango
    box.style.width = widthRange.value + "px";

    // Cambiamos el alto de la caja según el valor del rango
    box.style.height = heightRange.value + "px";

    // Actualizamos el texto de la etiqueta para mostrar las nuevas dimensiones
    label.textContent = `Dimensiones: ${widthRange.value} x ${heightRange.value}`;
  };

  // Cuando el usuario cambia el valor del campo "top", actualizamos la posición vertical
  topInput.onchange = function() {
    box.style.top = topInput.value + "px";
  };

  // Cuando el usuario cambia el valor del campo "left", actualizamos la posición horizontal
  leftInput.onchange = function() {
    box.style.left = leftInput.value + "px";
  };
});

/*
🧠 Frase guía para examen:
“Espero a que cargue el HTML, luego uso .oninput para cambiar tamaño en tiempo real y .onchange para mover la caja según los valores escritos.”

✅ Notas clave:
- oninput se activa mientras el usuario desliza el rango.
- onchange se activa cuando el usuario termina de escribir y sale del campo.
- .style.propiedad permite modificar el estilo directamente desde JavaScript.
¿Quieres que lo conectemos con un HTML visual para que puedas probarlo y defenderlo en clase? Puedo ayudarte a armarlo con etiquetas y estructura clara.

*/