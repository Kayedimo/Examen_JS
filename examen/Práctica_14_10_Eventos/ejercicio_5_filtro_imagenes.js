// Capturamos los elementos del HTML que vamos a usar

// Imagen que queremos modificar con filtros
const imagen = document.getElementById("imagen");

// Control deslizante para ajustar el desenfoque (blur)
const blurSlider = document.getElementById("blur");

// Control deslizante para ajustar el efecto sepia
const sepiaSlider = document.getElementById("sepia");

// Elemento donde mostraremos el valor actual del blur
const valorBlur = document.getElementById("valor-blur");

// Elemento donde mostraremos el valor actual del sepia
const valorSepia = document.getElementById("valor-sepia");


// Función que actualiza los filtros visuales de la imagen
function actualizarFiltros() {
    // Guardamos el valor actual del desenfoque
    const blur = blurSlider.value;

    // Guardamos el valor actual del sepia
    const sepia = sepiaSlider.value;

    // Aplicamos ambos filtros a la imagen usando CSS
    // blur en píxeles y sepia en porcentaje
    imagen.style.filter = `blur(${blur}px) sepia(${sepia}%)`;

    // Actualizamos los textos para mostrar los valores actuales
    valorBlur.textContent = `${blur}px`;
    valorSepia.textContent = `${sepia}%`;
}


// Cuando el usuario mueve los controles, actualizamos los filtros en tiempo real
blurSlider.addEventListener("input", actualizarFiltros);
sepiaSlider.addEventListener("input", actualizarFiltros);


// Cuando el usuario termina de ajustar (y suelta el control), mostramos un mensaje en consola
blurSlider.addEventListener("change", () => console.log("Blur ajustado"));
sepiaSlider.addEventListener("change", () => console.log("Sepia ajustado"));

/**
 * 🧠 Frase guía para examen:
“Capturo los valores de los sliders y los aplico como filtros CSS a la imagen. Actualizo también los textos para mostrar los valores.”

✅ Notas clave:
- input actualiza mientras el usuario desliza.
- change se activa solo cuando el usuario termina de ajustar.
- style.filter permite aplicar varios efectos visuales combinados.

 */