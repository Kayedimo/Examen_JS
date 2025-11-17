// a. Fechas inválidas
let fecha1 = new Date(2025, 1, 31); // 31 de febrero → ajusta a marzo
let fecha2 = new Date(2025, 2, 32); // 32 de marzo → ajusta a abril
document.getElementById("fecha1").innerHTML = "31 de febrero ajustado: " + fecha1;
document.getElementById("fecha2").innerHTML = "32 de marzo ajustado: " + fecha2;

// b. Fecha base (Unix epoch)
let epoch = new Date(0);
document.getElementById("epoch").innerHTML = "Unix epoch: " + epoch;

// Revisar, para tener los milisegundos desde 1970 dividir entre 1000
// let ahora = new Date();
// let milisegundos = ahora.getMilliseconds();

// document.getElementById("milisegundos").innerHTML = "Milisegundos actuales: " + milisegundos;

// c. Diferencia entre dos fechas
let d1 = new Date();
let d3 = new Date("2025/12/23");
let diferenciaMs = d3 - d1;
let diferenciaDias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
document.getElementById("diferencia").innerHTML = "Días entre hoy y 23/12/2025: " + diferenciaDias;

// d. Días restantes para fin de año
let hoy = new Date();
let finDeAño = new Date(hoy.getFullYear(), 11, 31);
let msRestantes = finDeAño - hoy;
let diasRestantes = Math.floor(msRestantes / (1000 * 60 * 60 * 24));
document.getElementById("diasRestantes").innerHTML = "Días para fin de año: " + diasRestantes;

/*
let diasRestantes = Math.floor((d3 - d1) / (1000 * 60 * 60 * 24));
document.getElementById("diasRestantes").textContent = `Días para fin de año: ${diasRestantes}`;
*/

// e. Edad en años, meses y días
let nacimiento = new Date("1987/09/15"); // cambia esta fecha por la tuya
let edadAños = hoy.getFullYear() - nacimiento.getFullYear();
let edadMeses = hoy.getMonth() - nacimiento.getMonth();
let edadDías = hoy.getDate() - nacimiento.getDate();

if (edadMeses < 0 || (edadMeses === 0 && edadDías < 0)) {
    edadAños--;
    edadMeses += 12;
}
if (edadDías < 0) {
    edadMeses--;
    let mesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
    edadDías += mesAnterior.getDate();
}

document.getElementById("edad").innerHTML =
    "Edad: " + edadAños + " años, " + edadMeses + " meses, " + edadDías + " días";