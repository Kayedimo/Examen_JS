// Función para obtener una posición aleatoria
function obtenerPosicionAleatoria(ancho, alto) {
    const maxX = window.innerWidth - ancho;
    const maxY = window.innerHeight - alto;
    
    // Espacio reservado para el botón (top: 20px + altura del botón + margen)
    const espacioBoton = 80;
    
    const x = Math.floor(Math.random() * maxX);
    // La posición Y empieza después del espacio del botón
    const y = espacioBoton + Math.floor(Math.random() * (maxY - espacioBoton));
    
    return { x, y };
}

// Función para reposicionar todas las imágenes
function reposicionarImagenes() {
    const imagenes = document.querySelectorAll('.imagen');
    
    imagenes.forEach(img => {
        const ancho = img.offsetWidth;
        const alto = img.offsetHeight;
        const pos = obtenerPosicionAleatoria(ancho, alto);
        
        img.style.left = pos.x + 'px';
        img.style.top = pos.y + 'px';
    });
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Event listener para el botón
    document.getElementById('boton').addEventListener('click', reposicionarImagenes);
    
    // Posicionar las imágenes al cargar la página
    reposicionarImagenes();
});

// Reposicionar al cambiar el tamaño de la ventana
window.addEventListener('resize', reposicionarImagenes);