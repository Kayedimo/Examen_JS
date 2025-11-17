let escribeFrase = prompt("Escribe una frase: "); // pide al usuario una frase
/* ¿Por qué usamos .trim() antes de split()?
Porque cuando el usuario escribe una frase, puede poner espacios al principio o al final sin querer. 
Esos espacios no son palabras, pero si no los quitamos, pueden crear errores al separar la frase.
*/
let palabras = escribeFrase.trim().split(" ");          // limpia espacios y separa las palabras
let primeraPalabra = palabras[0];                   // primera palabra
let ultimaPalabra = palabras[palabras.length - 1];  // última palabra

// console.log("La primera palabra es: " + primeraPalabra)
// console.log("La última palabra es: " + ultimaPalabra)

document.getElementById("primera").textContent = "La primera palabra es: " + primeraPalabra
document.getElementById("ultima").textContent = "La última palabra es: " + ultimaPalabra