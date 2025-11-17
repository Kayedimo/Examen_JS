// Funciones básicas
const suma = (x, y) => x + y;
const resta = (x, y) => x - y;
const multiplica = (x, y) => x * y;
const divide = (x, y) => x / y;

// Función que recibe dos números y una operación como callback
function calcula(x, y, operacion) {
  return operacion(x, y); // ejecuta la operación con los dos números
}

// Cálculos usando la función calcula
let r1 = calcula(5, 4, suma); // 9
let r2 = calcula(calcula(5, 4, suma), 1, resta); // 8
let r3 = calcula(calcula(calcula(5, 4, suma), 1, resta), 1, resta); // 7

let r4 = calcula(
  calcula(calcula(2, 2, multiplica), 3, suma), // 2*2=4 + 3 = 7
  7,
  suma
); // 7 + 7 = 14 → 14 / 2 = 7
r4 = calcula(r4, 2, divide); // 14 / 2 = 7

let r5 = calcula(
  calcula(8, 6, suma), // 14
  calcula(9, 2, resta), // 7
  divide
); // 14 / 7 = 2 → 2 * 3 = 6
r5 = calcula(r5, 3, multiplica);

// Mostramos los resultados en los <h1>
document.getElementById("res1").textContent = r1;
document.getElementById("res2").textContent = r2;
document.getElementById("res3").textContent = r3;
document.getElementById("res4").textContent = r4;
document.getElementById("res5").textContent = r5;
document.getElementById("res6").textContent = "Fin del ejercicio 2";

/***
 * Frase guía para examen:
“Uso calcula(x, y, operacion) para aplicar funciones como suma, resta, etc. Cada cálculo se agrupa en una sola línea.”


Notas clave:
- calcula recibe una función como argumento: eso es un callback.
- Las operaciones se pueden anidar para hacer cálculos más complejos.
- Se puede usar con funciones normales o flecha.

¿Seguimos con el ejercicio 3, que simula llamadas asincrónicas con callbacks en cada función? Lo preparo igual: HTML + JS + explicaciones defendibles. Vamos paso a paso.

 */