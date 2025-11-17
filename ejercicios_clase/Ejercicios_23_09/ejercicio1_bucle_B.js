// 2^53 usando bucle for
let resultadoForBig53 = 1n;
for (let i = 0n; i < 53n; i++) {
  resultadoForBig53 *= 2n;
}
document.getElementById("resultadoForBig53").textContent = resultadoForBig53;

// 2^53 + 1
let resultadoBig53plus1 = resultadoForBig53 + 1n;
document.getElementById("resultadoBig53plus1").textContent = resultadoBig53plus1;

// 2^128 usando bucle while
let resultadoBig128 = 1n;
let j = 0n;
while (j < 128n) {
  resultadoBig128 *= 2n;
  j++;
}
document.getElementById("resultadoBig128").textContent = resultadoBig128;

// 128! usando bucle do-while
let resultadoBigFactorial128 = 1n;
let k = 1n;
do {
  resultadoBigFactorial128 *= k;
  k++;
} while (k <= 128n);
document.getElementById("resultadoBigFactorial128").textContent = resultadoBigFactorial128;