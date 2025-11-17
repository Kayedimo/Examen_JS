let html = '<table>';

// Fila de encabezado
html += '<tr><td class="simbolo">×</td>';
for (let i = 1; i <= 10; i++) {
    html += `<td class="encabezado">${i}</td>`;
}
html += '</tr>';

// Filas de multiplicación
for (let i = 1; i <= 10; i++) {
    html += `<tr><td class="encabezado">${i}</td>`;
    for (let j = 1; j <= 10; j++) {
    html += `<td class="producto">${i * j}</td>`;
    }
    html += '</tr>';
}

html += '</table>';
document.getElementById('tabla').innerHTML = html;

// ojo intenta hacerlo con el css fuera y ver como seria el codigo