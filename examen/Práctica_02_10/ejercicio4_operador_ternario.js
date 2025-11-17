function calcular() {
    let nota = document.getElementById("nota").value; // .value para obtener el valor del input
    nota = Number(nota); // Convertir la entrada a número, tambien sirve si le pongo por delante "+"

    let resultado = isNaN(nota) || nota < 0 || nota > 10
        ? "Error: la nota debe ser un número entre 0 y 10"
        : nota < 5
        ? "Suspenso"
        : nota < 7
            ? "Aprobado"
            : nota < 9
            ? "Notable"
            : "Sobresaliente";

    document.getElementById("resultado").textContent = resultado;
}

// Revisar la opcion con +prompt y +alert
// let nota = +prompt("Introduce la nota (0-10):");
// let resultado = isNaN(nota) || nota < 0 || nota > 10
//     ? "Error: la nota debe ser un número entre 0 y 10"
//     : nota < 5 ? "Suspenso"
//     : nota < 7 ? "Aprobado"
//     : nota < 9 ? "Notable"
//     : "Sobresaliente";
// alert(resultado);
