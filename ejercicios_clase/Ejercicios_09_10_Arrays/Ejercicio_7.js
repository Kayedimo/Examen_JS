function generarTabla() {
    const n = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(n) || n < 1) {
        resultado.innerHTML = "<p style='color:red'>Por favor, introduce un número válido mayor que 0.</p>";
        return;
    }

    // Crear el array bidimensional
    let a = [];
    for (let i = 1; i <= n; i++) {
        let fila = [];
        for (let j = 1; j <= n; j++) {
        fila.push(i * j);
        }
        a.push(fila);
    }

    // Mostrar el array como tabla en HTML
    let html = `<table><caption>Tabla de multiplicar del 1 al ${n}</caption><thead><tr>`;
    for (let i = 1; i <= n; i++) {
        html += `<th>${i}</th>`;
    }
    html += "</tr></thead><tbody>";

    for (let i = 0; i < n; i++) {
        html += "<tr>";
        for (let j = 0; j < n; j++) {
        html += `<td>${a[i][j]}</td>`;
        }
        html += "</tr>";
    }

    html += "</tbody></table>";
    resultado.innerHTML = html;
    }