// a) Cálculos con bucles y números normales
let salida = '';

// 1. Calcular 2^53 usando for
let resultadoFor = 1; // Creamos una variable para guardar el resultado, empezando en 1 porque es el neutro de la multiplicación
for (let i = 0; i < 53; i++) { // Usamos un bucle for que repite 53 veces, una por cada exponente
    resultadoFor *= 2; // En cada vuelta multiplicamos el resultado por 2, así calculamos la potencia
}
salida += resultadoFor + '<br>';
salida += (resultadoFor + 1) + '<br>';


// 2. Calcular 2^128 usando while
let resultadoWhile = 1; // Variable para el resultado, empezando en 1
let j = 0; // Contador para el bucle
while (j < 128) { // El bucle se repite 128 veces
    resultadoWhile *= 2; // Multiplicamos por 2 en cada repetición
    j++; // Aumentamos el contador
}
salida += resultadoWhile + '<br>';

// 3. Calcular factorial de 128 usando do-while
let resultadoDoWhile = 1; // Variable para el resultado, empezando en 1
let k = 1; // Contador que empieza en 1
do { // El bucle do-while se ejecuta al menos una vez
    resultadoDoWhile *= k; // Multiplicamos el resultado por el contador (k)
    k++; // Aumentamos el contador
} while (k <= 128); // Repetimos hasta llegar a 128
salida += resultadoDoWhile + '<br>';

// b) Cálculos con BigInt y bucles diferentes

// 1. Calcular 2^53 con while y BigInt
let bigWhile = 1n; // Variable para el resultado, usando BigInt (n al final)
let iBig = 0n; // Contador como BigInt
while (iBig < 53n) { // El bucle se repite 53 veces usando BigInt
    bigWhile *= 2n; // Multiplicamos por 2n (BigInt)
    iBig++; // Aumentamos el contador
}
salida += bigWhile + '<br>';
salida += (bigWhile + 1n) + '<br>';

// 2. Calcular 2^128 con do-while y BigInt
let bigDoWhile = 1n; // Variable para el resultado, usando BigInt
let jBig = 0n; // Contador como BigInt
do { // El bucle do-while se ejecuta al menos una vez
    bigDoWhile *= 2n; // Multiplicamos por 2n en cada repetición
    jBig++; // Aumentamos el contador
} while (jBig < 128n); // Repetimos hasta llegar a 128n
salida += bigDoWhile + '<br>';

// 3. Calcular factorial de 128 con for y BigInt
let bigFact = 1n; // Variable para el resultado, usando BigInt
for (let m = 1n; m <= 128n; m++) { // Bucle for desde 1n hasta 128n
    bigFact *= m; // Multiplicamos el resultado por m en cada vuelta
}
salida += bigFact + '<br>';

// Mostrar resultados en la web si existe el div resultados
if (typeof document !== 'undefined') {
    var div = document.getElementById('resultados');
    if (div) div.innerHTML = salida;
}
