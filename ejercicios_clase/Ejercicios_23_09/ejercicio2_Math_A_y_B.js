// Ejercicio 2: Objeto Math 

// Ejercicio A: número aleatorio entre 0 y 6 (con decimales)
let numeroDecimal = Math.random() * 6;
document.getElementById("decimal").innerHTML = numeroDecimal;

// Ejercicio B: número aleatorio entre 0 y 5 (sin decimales)
let numeroEntero = Math.floor(Math.random() * 6);
document.getElementById("entero").innerHTML = numeroEntero;

// número aleatroio entre 7 y 13
let numeroRango = Math.floor(Math.random() * (13 - 7 + 1) + 7);
document.getElementById("rango"). innerHTML = numeroRango;

// número aleatrorio entre  el 1 y el 6
let numero = Math.floor(Math.random() * 6) + 1;
document.getElementById("número").innerHTML = numero;

// probar ceil y round para aleatorio entre 7 y 13
//sobre entiende el razonamiento de la formula para los rangos ceil/round/floor
// y cuando se suma y cuando no
// verificar el codigo de abajo
let min = 7;
let max = 13;
for(let x=1; x <100; x++)
    dw( min + Math.round( (max -min) *
Math.random()), ",", "")
dw("------------")


