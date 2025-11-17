// Funciones básicas sin callback

// Función normal para sumar
function suma(x, y) {
  let resultado = x + y; // sumamos los dos números
  return resultado;      // devolvemos el resultado
}

// Función flecha para restar
const resta = (x, y) => x - y; // quitamos el segundo número al primero

// Función flecha para multiplicar
const multiplica = (x, y) => x * y; // multiplicamos los dos números

// Función normal para dividir
function divide(x, y) {
  let resultado = x / y; // dividimos el primero entre el segundo
  return resultado;
}

// Cálculos en una sola línea
let r1 = suma(5, 4);                      // 9
let r2 = resta(suma(5, 4), 1);           // 8
let r3 = resta(resta(suma(5, 4), 1), 1); // 7

let r4 = divide(suma(3, multiplica(2, 2)) + 7, 2); // (3 + 4 + 7) / 2 = 14 / 2 = 7
let r5 = multiplica(divide(suma(8, 6), resta(9, 2)), 3); // (14 / 7) * 3 = 6

// Mostramos los resultados en los <h1>
document.getElementById("res1").textContent = r1;
document.getElementById("res2").textContent = r2;
document.getElementById("res3").textContent = r3;
document.getElementById("res4").textContent = r4;
document.getElementById("res5").textContent = r5;
document.getElementById("res6").textContent = "Fin del ejercicio 1";

/*
Frase guía para examen:
“Uso funciones normales y flecha para operar sin callback. Cada cálculo se hace en una sola línea y se muestra en pantalla.”


Notas clave:
- Las funciones flecha son más cortas, pero no tienen return ni llaves si son de una sola línea.
- Cada cálculo se hace en una sola línea combinando funciones.
- document.getElementById(...).textContent sirve para mostrar el resultado en pantalla.


*/