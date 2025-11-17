function cambiarColor() {
    const selector = document.getElementById("color-select");
    const caja = document.getElementById("color-box");
    const colorElegido = selector.value;

    caja.style.backgroundColor = colorElegido;
}

