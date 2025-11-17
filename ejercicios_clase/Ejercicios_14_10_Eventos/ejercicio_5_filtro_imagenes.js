// Capturamos elementos
const imagen = document.getElementById("imagen");
const blurSlider = document.getElementById("blur");
const sepiaSlider = document.getElementById("sepia");
const valorBlur = document.getElementById("valor-blur");
const valorSepia = document.getElementById("valor-sepia");

// Función para actualizar filtros
function actualizarFiltros() {
    const blur = blurSlider.value;
    const sepia = sepiaSlider.value;

    // Aplicamos los filtros combinados 
    imagen.style.filter = `blur(${blur}px) sepia(${sepia}%)`;

    // Mostramos los valores actuales
    valorBlur.textContent = `${blur}px`;
    valorSepia.textContent = `${sepia}%`;
}

// Eventos input para actualizar en tiempo real
blurSlider.addEventListener("input", actualizarFiltros);
sepiaSlider.addEventListener("input", actualizarFiltros);

// Eventos change si quieres hacer algo al finalizar
blurSlider.addEventListener("change", () => console.log("Blur ajustado"));
sepiaSlider.addEventListener("change", () => console.log("Sepia ajustado"));