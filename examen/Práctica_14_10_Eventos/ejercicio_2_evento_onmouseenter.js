// Función para generar un color aleatorio en formato hexadecimal
function colorAleatorio() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
    }

// Creamos la tabla con al menos 50 celdas (por ejemplo, 10 filas × 10 columnas = 100 celdas)
const tabla = document.getElementById("tabla");

for (let fila = 0; fila < 10; fila++) {
    const tr = document.createElement("tr");

    for (let col = 0; col < 10; col++) {
        const td = document.createElement("td");

        // 🖱️ Evento mouseenter: cambia el color al pasar el ratón
        td.addEventListener("mouseenter", () => {
        td.style.backgroundColor = colorAleatorio();
        });

        tr.appendChild(td);
    }

    tabla.appendChild(tr);
}
