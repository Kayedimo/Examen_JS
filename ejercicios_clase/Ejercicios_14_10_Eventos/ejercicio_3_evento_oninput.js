document.addEventListener("DOMContentLoaded", function() {
  const box = document.getElementById("control-box");
  const widthRange = document.getElementById("width-range");
  const heightRange = document.getElementById("height-range");
  const topInput = document.getElementById("top-input");
  const leftInput = document.getElementById("left-input");
  const label = document.getElementById("dimension-label");

  // Actualizar ancho y alto con oninput
  widthRange.oninput = heightRange.oninput = function() {
    box.style.width = widthRange.value + "px";
    box.style.height = heightRange.value + "px";
    label.textContent = `Dimensiones: ${widthRange.value} x ${heightRange.value}`;
  };

  // Actualizar posición con onchange
  topInput.onchange = function() {
    box.style.top = topInput.value + "px";
  };

  leftInput.onchange = function() {
    box.style.left = leftInput.value + "px";
  };
});
