
//Ejercio factorial sin big int

let n = 128, fact = 1; 
// Creamos dos variables: n (el número del que queremos el factorial, empieza en 128)
//  y fact (donde guardamos el resultado, empieza en 1 porque es el neutro de la multiplicación).
while(n > 1) { 
// Mientras n sea mayor que 1, repetimos el bucle
    fact*= n--; 
// Multiplicamos fact por n y luego restamos 1 a n. Así calculamos el factorial de 128 (128*127*126...*1).
}

document.getElementById("fact").innerHTML = fact; 
// Busca en el HTML el elemento con id="fact" y pone dentro el resultado del factorial. 
// Así el usuario lo ve en la web.


//EJERCICIO 2
// a. Muestra en la página web un número aleatorio en el rango de 0 a 6 (con decimales)
let aleatorio = Math.random() * 6; 
// Genera un número decimal aleatorio entre 0 (incluido) y 6 (no incluido). 
// Math.random() da un número entre 0 y 1, al multiplicar por 6 el rango es 0-6.
document.getElementById("fact").innerHTML += '<br> Aleatorio (0-6): ' + aleatorio; 
// Añade el número aleatorio al contenido del elemento con id="fact",
// usando <br> para que salga en una línea nueva.

// b. Muestra un número aleatorio entero entre 0 y 5
let aleatorioEntero = Math.floor(Math.random() * 6); 
// Genera un número aleatorio entero entre 0 y 5. Math.floor 
// redondea hacia abajo, así solo salen enteros.
document.getElementById("fact1").innerHTML = 'Aleatorio entero (0-5): ' + aleatorioEntero; 
// Busca el elemento con id="fact1" y pone dentro el número aleatorio entero. 
// Así puedes mostrarlo en otra parte de la web.


// EJERCICIO 3: Objeto Date

// Definimos las fechas según el enunciado
let d1 = new Date(); // Fecha y hora actual
let d2 = new Date(2025, 11, 23); // 23 de diciembre de 2025 (mes 11 porque enero=0)
let d3 = new Date("2025/12/23"); // 23 de diciembre de 2025 (formato string)
let d4 = new Date(2025, 11, 23, 23, 59, 59); // 23 de diciembre de 2025, 23:59:59
let d5 = new Date("2025/12/31 23:59:59"); // 31 de diciembre de 2025, 23:59:59

// Mostramos las fechas en la web
document.getElementById("fact").innerHTML += '<br>d1: ' + d1;
document.getElementById("fact").innerHTML += '<br>d2: ' + d2;
document.getElementById("fact").innerHTML += '<br>d3: ' + d3;
document.getElementById("fact").innerHTML += '<br>d4: ' + d4;
document.getElementById("fact").innerHTML += '<br>d5: ' + d5;

// a. Visualiza las fechas de 31 de febrero y 32 de marzo de este año

let fecha1 = new Date(new Date().getFullYear(), 1, 31); // 31 de febrero (mes 1 porque enero=0)
let fecha2 = new Date(new Date().getFullYear(), 2, 32); // 32 de marzo (mes 2 porque enero=0)
// JavaScript ajusta automáticamente las fechas inválidas
document.getElementById("fact").innerHTML += '<br>Fecha 31 de febrero: ' + fecha1;
document.getElementById("fact").innerHTML += '<br>Fecha 32 de marzo: ' + fecha2;

// b. ¿Desde qué fecha se cuentan los milisegundos en Date?
// Respuesta: Desde el 1 de enero de 1970 (Unix epoch)
document.getElementById("fact").innerHTML += '<br>Los milisegundos en Date se cuentan desde el 1 de enero de 1970 (UTC)';

// c. Si restas 2 fechas, ¿qué obtienes?
let diferencia = d3 - d1; // Diferencia en milisegundos entre d3 y d1
document.getElementById("fact").innerHTML += '<br>Diferencia entre d3 y d1 (ms): ' + diferencia;

// d. ¿Cuántos días quedan para que acabe el año?
let hoy = new Date();
let finAnio = new Date(hoy.getFullYear(), 11, 31); // 31 de diciembre de este año
let msRestantes = finAnio - hoy;
let diasRestantes = Math.ceil(msRestantes / (1000 * 60 * 60 * 24));
document.getElementById("fact").innerHTML += '<br>Días para fin de año: ' + diasRestantes;

// e. ¿Cuántos años, meses y días tienes?
let nacimiento = new Date("1987/9/15"); // Cambia esta fecha por tu fecha de nacimiento (año, mes-1, día)
let ahora = new Date();
let edadAnios = ahora.getFullYear() - nacimiento.getFullYear();
let edadMeses = ahora.getMonth() - nacimiento.getMonth();
let edadDias = ahora.getDate() - nacimiento.getDate();
if (edadDias < 0) {
    edadMeses--;
    edadDias += new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
}
if (edadMeses < 0) {
    edadAnios--;
    edadMeses += 12;
}
document.getElementById("fact1").innerHTML += '<br>Edad: ' + edadAnios + ' años, ' + edadMeses + ' meses, ' + edadDias + ' días';
// Cambia la fecha de nacimiento para obtener tu edad real


// EJERCICIO 4: Objeto String

// a. Ventaja de los template string (`texto`)
// Permiten interpolar variables y expresiones fácilmente usando ${...}, y escribir texto multilínea.
let nombre = "Juan";
let saludo = `Hola, ${nombre}!`;
// Con comillas simples o dobles no se puede interpolar así:
// 'Hola, ' + nombre + '!'  // Menos legible

// b. Obtener el 5º carácter de una cadena
let cadena = "Ejemplo";
let quinto = cadena[4]; // Usando notación de array (índice 4, porque empieza en 0)
// También: cadena.charAt(4)

// c. ¿Para qué se utiliza indexOf(n)?
// Busca la posición (índice) de la primera aparición de n en la cadena. Si no existe, devuelve -1.
let pos = cadena.indexOf("m"); // Devuelve 4

// d. ¿Qué variable miembro almacena la longitud de la cadena?
// Es la propiedad .length
let longitud = cadena.length; // Devuelve 7

// e. ¿Qué operador se utiliza para encadenar varios strings?
// El operador +
let fraseConcat = "Hola" + " " + "mundo";

// f. Comparación de strings
let s1 = "gato";
let s2 = "Gato";
// "gato" > "Gato" porque las minúsculas tienen mayor valor Unicode que las mayúsculas
// Por eso "gato" es mayor que "Gato"
if(s1 == s2) {
    document.write(`"${s1}" es igual que "${s2}"`);
} else {
    document.write("ambas cadenas son distintas");
}

// g. Extraer "Escorial" de la cadena
let ciudad = "San Lorenzo de El Escorial";
let palabra = ciudad.slice(-9); // "Escorial" está en los últimos 9 caracteres
// También se puede usar substring:
let palabra2 = ciudad.substring(ciudad.length - 9);

/* Otra forma de hacerlo con lastIndexOf:
let frase ="San Lorenzo de El Escorial";
let espacio = frase.lastIndexOf(" ");
let ulti = frase.slice(espacio);

document.getElementById("fact").innerHTML += '<br>Palabra extraída: ' + ulti;

*/


// h. Métodos útiles de String (ver MDN para ejemplos):
// indexOf, lastIndexOf, startsWith, endsWith, includes, repeat, padEnd, padStart, trim, trimStart, trimEnd,
// toUpperCase, toLowerCase, slice, replace, replaceAll

// i. Script que solicita una frase y muestra la primera y última palabra
// Solicita una frase al usuario y muestra la primera y última palabra
let frase1 = prompt("Introduce una frase:"); // prompt solicita texto al usuario
let palabras1 = frase.trim().split(/\s+/); // trim elimina espacios extra, split(/\s+/) separa por uno o más espacios
let primera1 = palabras[0]; // Primera palabra
let ultima1 = palabras[palabras.length - 1]; // Última palabra
alert('Primera palabra: ' + primera + '\nÚltima palabra: ' + ultima); // Muestra ambas palabras en una ventana emergente

// Solicita una frase al usuario y muestra la primera y última palabra
let frase = prompt("Introduce una frase:"); // prompt solicita texto al usuario
let palabras = frase.trim().split(/\s+/); // trim elimina espacios extra, split(/\s+/) separa por uno o más espacios
let primera = palabras[0]; // Primera palabra
let ultima = palabras[palabras.length - 1]; // Última palabra
alert('Primera palabra: ' + primera + '\nÚltima palabra: ' + ultima); // Muestra ambas palabras en una ventana emergente


let nombres = "Perico";
let edad = 22


let solucion = "La persona  " + nombres + " tiene"



