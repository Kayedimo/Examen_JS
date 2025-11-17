// Bucle for
// Inicializa la variable con 1 (porque cualquier número elevado a 0 es 1).
let resultadoFor = 1; 
// En cada vuelta, multiplica el resultado por 2.
for (let i = 0; i < 53; i++) {
  resultadoFor *= 2;
}
// Busca el elemento con id "resultadoFor" en el HTML y muestra el resultado dentro de él.
document.getElementById("resultadoFor").textContent = resultadoFor;

// Bucle while
// Empieza con 1.
let resultadoWhile = 1;
// Variable de control del bucle.
let i = 0;
// Multiplica por 2 en cada vuelta.
while (i < 53) {
  resultadoWhile *= 2;
//  Aumenta el contador.  
  i++;
}
// Busca el elemento con id "resultadoWhile" en el HTML y muestra el resultado dentro de él.
document.getElementById("resultadoWhile").textContent = resultadoWhile;

// Bucle do-while
let resultadoDoWhile = 1;
let j = 0;
do {
  resultadoDoWhile *= 2;
  j++;
} while (j < 53);
document.getElementById("resultadoDoWhile").textContent = resultadoDoWhile;


// Bucle For para 2^53 + 1
let resultadoForMas1 = resultadoFor + 1;
document.getElementById("resultadoForMas1").textContent = resultadoForMas1;

// Con un bucle calcula 2^128 (número de IPv6 disponibles)
let resultado = 1n; // BigInt para manejar números grandes
for (let i = 0n; i < 128n; i++) {
  resultado *= 2n;
}
document.getElementById("resultadoFor128").textContent = resultado;

// Calcula el factorial de 128
let factorial = 1n;
for (let i = 1n; i <=128n; i++){
  factorial *= i;
}
document.getElementById("resultadoFact128").textContent = factorial;