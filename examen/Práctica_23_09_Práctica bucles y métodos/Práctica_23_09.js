/* Bucles  
1. Ejercicio 1a – Calcular 2⁵³ con un bucle for
Enunciado: Utiliza un bucle for para calcular 2 elevado a 53. Muestra también 2⁵³ + 1.
*/

// Empezamos en 1 porque es el neutro de la multiplicación
let resultado = 1;

for(let i = 0; i < 53; i++) {
 // Multiplicamos por 2 en cada vuelta
    resultado *= 2;  
}
console.log("El resultado de 2 a la 53 es ", resultado)

/**
 *  - Usamos un bucle for porque sabemos cuántas veces hay que repetir (53 veces).
    - Multiplicamos por 2 en cada iteración.
    - Guardamos el resultado en una variable acumuladora (resultado).
    - Al final, mostramos el resultado y el resultado + 1
Uso un bucle for porque sé que quiero repetir 53 veces. Empiezo en 1 y multiplico por 2 en cada vuelta.
Al final, muestro el resultado y también el resultado más 1.
*/

/* Con un bucle calcula 2 a la 128 (número de IPv6 disponibles)
Uso BigInt cuando el número es muy grande y puede perder precisión. Se escribe con n al final, y todos 
los números que multiplico también deben tener n
Si el número supera a 53 ya pierde precisión, usar a partir de aqui BigInt
Uso while si quiero repetir mientras se cumpla una condición. Con BigInt uso n al final
*/
resultadoWhile = 1n;
let i = 0n;

while(i < 128n){
    resultadoWhile *= 2n;
    i++;
}
console.log("El resultado es ", resultadoWhile)

/* Calcular el factorial de 128 con do - while
- El factorial de un número n es el producto de todos los enteros desde 1 hasta n.
*/

// Calculamos el factorial de 128 usando do-while y BigInt
let resultadoDoWhile = 1n; // Empezamos en 1n porque es el neutro de la multiplicación
i = 1n;

do {
  resultadoDoWhile *= i;      // Multiplicamos por el número actual
  i++;                      // Avanzamos al siguiente número
} while (i <= 128n);        // Repetimos hasta llegar a 128

console.log("128! =", resultadoDoWhile);

/** DO - WHILE
 * Es un bucle que siempre se ejecuta al menos una vez, porque primero hace la acción y luego verifica 
 * la condición
Imagina que entras a una tienda y te dan una muestra gratis sin preguntar.
Después te preguntan: “¿Quieres otra?”
→ Eso es un do-while: primero te da la muestra, luego pregunta si seguir.
*/

/** MATH.POW()
 * Math.pow(base, exponente)No se puede. Math.pow() solo funciona con Number, no con BigInt
 */

resultado = Math.pow(2,53);
console.log(" 2 ^ 53 es " + resultado)
console.log(" 2 ^ 53 es " + resultado + 1)


/** 2. OBJETO MATH
 * Math es un objeto especial que ya viene incluido en JavaScript.
Sirve para hacer cálculos matemáticos: potencias, raíces, redondeos, números aleatorios, etc.
Es como una caja de herramientas matemáticas.
Math.pow(x,y) Calcula X elevento a Y -> Math.pow(2,3)
Math.random() Número aleatorio entre 0 y 1
Math.floor(x) Redondea hacia abajo -> Math.floor(4.9) = 4
Math.ceil (x) Redondea hacia arriba -> Math.floor(4.1) = 5
Math.round (x) Redondea al más cercano -> Math.roun(4.6) = 5
Math.trunc(x) Quita los decimales -> Math.trunc(4.9) = 4 
 * EJERCICIO 2A – Número aleatorio entre 0 y 6
*/
let aleatorio = Math.random() * 6 
console.log("Un número aleatorio entre 0 y 6 " + aleatorio)
/*
Imagina que tienes una ruleta que gira y siempre se detiene en un número entre 0 y 1, como 0.123 o 0.987.
Si quieres que esa ruleta te dé un número entre 0 y 6, multiplicas el resultado por 6.
Uso Math.random() para obtener un número entre 0 y 1. Si quiero otro rango, lo multiplico. Por ejemplo, 
Math.random() * 6 me da un número entre 0 y casi 6. OJO incluye decimales
*/

/* EJERCICIO 2B – Número aleatorio entero entre 0 y 5, pero eliminando la parte decimal
El resultado debe ser un número entero del conjunto: { 0, 1, 2, 3, 4, 5 }.
*/

aleatorio = Math.floor(Math.random() * 6);
console.log(aleatorio)
/**
 *  Math.random()
    - Genera un número decimal entre 0 (incluido) y 1 (excluido)
    * 6
    - Multiplica ese número por 6 → ahora está entre 0 y casi 6 (por ejemplo: 5.999...)
    Math.floor(...)
    - Elimina la parte decimal → redondea hacia abajo
    - Ejemplo: Math.floor(5.999) → 5
 */

/** 3. OBJETO DATE
 * Es una herramienta de JavaScript que permite crear y trabajar con fechas y horas
¿Cómo se crea una fecha?
Los meses van de 0 a 11, así que diciembre es 11. Si la fecha parece incorrecta, puede ser por el formato
UTC. Uso toLocaleDateString() para verla bien.
*/
// Con números separados: new Date(año, mes, dia)
let fecha = new Date(2025, 11, 15); // diciembre es 11
/**
 * - Los meses van de 0 a 11 → enero = 0, diciembre = 11
    - Si el día no existe, JavaScript lo corrige automáticamente
Frase guía:
“Uso números separados. Los meses van del 0 al 11. Si el día no existe, se ajusta.”
*/

// Con fecha actual: new Date() sin parámetros
fecha = new Date()
console.log(fecha)
/**
 *  - Crea la fecha y hora actual
    - Útil para saber qué día es hoy, o cuánto tiempo ha pasado
Sin parámetros, me da la fecha y hora actual.
 */

// Con cadena de texto: new date("YYYY/MM/DD")
fecha = new Date("2025/11/15")
console.log(fecha)
/**
*   - Más clara visualmente
    - No necesitas recordar que diciembre es 11
    - Se interpreta como año/mes/día
Escribo la fecha como la pienso: año, mes, día. Evito errores con el número del mes.
*/

// Con cadena tipo ISO: new Date("YYYY-MM-DD") - NOS QUEDAMOS CON ESTE FORMATO
let fecha1 = new Date("2025-11-15") 
console.log(fecha1) 
/**
 *  - Formato estándar internacional
    - Funciona bien en navegadores modernos
    - También se puede usar con hora: "2025-12-15T10:30:00"

Uso el formato ISO para fechas claras y compatibles. También puedo incluir la hora.
*/
// Con milisegundos desde el 1 de enero de 1970 (empieza en 0 segundos)
let fechaSegundos = new Date(1235537511111)
console.log(fechaSegundos)

/**
 * Formas de crear fechas
new Date(2025, 11, 15);        // con números (mes 0–11)
new Date("2025/12/15");        // con cadena clara
new Date("2025-12-15");        // formato ISO
new Date(1762560000000);       // con milisegundos desde 1970
new Date();                    // fecha actual
 * 
 */

/** EJERCICIO 3A – Fechas imposibles: 31 de febrero y 32 de marzo
Enunciado:
Visualiza las fechas 31 de febrero y 32 de marzo de este año usando el objeto Date.
¿Qué busca este ejercicio?
Mostrar que JavaScript corrige automáticamente las fechas que no existen.
Por ejemplo:
- 31 de febrero → no existe → se convierte en 3 de marzo
- 32 de marzo → no existe → se convierte en 1 de abril
*/
let fecha_1 = new Date("2025-02-31");
let fecha_2 = new Date("2025-03-32");

console.log(fecha_1)
console.log(fecha_2)

fecha_1 = new Date(2025, 1,31)
fecha_2 = new Date(2025, 2, 32);

console.log(fecha_1)
console.log(fecha_2)

/**
 * EJERCICIO 3B – ¿Desde qué fecha se cuentan los milisegundos?
Muestra en la página web la fecha desde la cual se empiezan a contar los milisegundos en JavaScript.
El UNIX Epoch es el inicio del tiempo en programación: 1 de enero de 1970. Uso new Date(0) para mostrar esa fecha base
*/
let fecha_Epoch = new Date(0)
console.log(fecha_Epoch)

/** UNIX Epoch: inicio del tiempo en JavaScript
let fechaEpoch = new Date(0);
document.write(fechaEpoch.toLocaleString());
 * 
 */

let d1 = new Date()
let d2 = new Date(2025, 11, 23)
let d3 = new Date("2025/12/23")
let d4 = new Date(2025, 11, 23, 23, 59, 59)
let d5 = new Date("2025/12/31 23:59:59")

/** EJERCICIO 3C Si restas 2 fechas, por ejemplo d3 - d1 ¿qué obtienes?
*/
let resultado_d3_d1 = d3 - d1
console.log(resultado_d3_d1) // el resultado se da en milisegundos
//convertirmos
let convertir_dias = resultado_d3_d1/(1000 * 60 * 60 * 24)
console.log(convertir_dias)

// Otra forma - convertir a segundos, minutos, horas, días

let segundos = resultado_d3_d1/1000
console.log(segundos)
let minutos = segundos/60
console.log(minutos)
let horas = minutos/60
console.log(horas)
let dias = horas/24
console.log(dias)

// EJERCICIO 3D ¿Cuántos días quedan para que acabe el año?, adem´s hemos redondeado con "ceil"
let fecha_hoy = new Date()
let fecha_fin = new Date("2025-12-31")
let diferencia = fecha_fin - fecha_hoy
let dias_restantes = Math.ceil(diferencia/(1000*60*60*24))
console.log(dias_restantes)

/** EJERCICIO 3E. ¿Cuántos años tienes? ¿y meses? ¿y días?
Algunos métodos de los objetos Date:
    date.getDate()            // día del mes (1-31)
    date.getDay()             // día de la semana (0-6)
    date.getMonth()           // mes (0-11)
    date.getFullYear()        // año (yyyy)
    date.getHours()           // hora (0-23)
    date.getMinutes()         // minutos (0-59)
    date.getSeconds()         // segundos (0-59)
    date.getMilliseconds()    // milisegundos (0-999)
*/
    
let hoy = new Date()
let fecha_nacimiento = new Date("1987-9-15")
let años = hoy.getFullYear() - fecha_nacimiento.getFullYear()
let meses = hoy.getMonth() - fecha_nacimiento.getMonth()
dias = hoy.getDay() - fecha_nacimiento.getDay()

console.log("Tengo: " +  años + " años " + meses + " meses " + dias + " dias.")

/*** 4. OBJETO STRING
 * EJERCICIO 4A Cuando un texto se encierra entre acentos graves se denomina `template string` 
 * (o plantilla de texto). ¿Qué ventaja tienen los template string respecto a las otras dos formas de 
 * crear cadenas?
 * Explicación clara
En JavaScript puedes crear cadenas con:
- 'texto' → comillas simples
- "texto" → comillas dobles
- `texto` → template string (acentos graves)
La ventaja de los template strings es que permiten:
- Interpolación de variables → puedes insertar valores directamente con ${...}
- Multilínea → puedes escribir texto en varias líneas sin usar \n
*/

let nombre = "Yessenia";
let edad = 38;

// Template string con interpolación
// En variable si quiero reutilizar, directo si solo muestro.”
let mensaje = (`Hola, soy ${nombre} y tengo ${edad} años.`)
// Puedo usar console.log() directamente para mensajes rápidos. Si quiero reutilizar o modificar el texto, lo guardo en una variable.
console.log(`Hola, soy ${nombre} y tengo ${edad} años.`)

/** EJERCICIO 4B ¿Qué método se usa para obtener el 5º carácter de una cadena?
Para obtener el 5º carácter uso .charAt(4) o cadena[4]. El índice empieza en 0.
 */
// OPCIÓN 1: Usar .charAT
let texto = "Karina"
let letra = texto.charAt(4)
console.log(letra)

// OPCIÓN 2: Usar acceso por índice
letra = texto[4]; // también devuelve 'i'
console.log(letra)

/** EJERCICIO 4C ¿Para qué se utiliza el método indexOf()?
 * ¿Para qué se utiliza el método indexOf(n)? (piensa en java)
Uso indexOf() para saber en qué posición aparece una palabra. Si no está, devuelve -1
“indexOf() cuenta desde 0 e incluye espacios. Devuelve la posición del primer carácter 
de la palabra buscada

*/
let frase = "Madrid es la capital del reino"; // da 13
let posicion = frase.indexOf("capital");

console.log("La palabra 'capital' está en la posición: " + posicion);

/** EJERCICIO 4D ¿Qué variable miembro almacena la longitud de la cadena? (piensa en java)
Uso .length sin paréntesis para saber cuántos caracteres tiene una cadena.
Propiedad .length da la cantidad total de caracteres. No lleva paréntesis
sintaxis = let longitud = texto.length;
*/
let palabra = "Entusiasmo"
let longitud = palabra.length
console.log(longitud)

/**  EJERCICIO 4E ¿Qué operador se utiliza para encadenar varios strings?
 * El operador que se usa para encadenar (concatenar) strings en JavaScript es: "+"
 * Uso el operador + para unir cadenas. También convierte números en texto si están dentro
 */
let name = "Karina"
let apellido = "Diaz"

mensaje = "Hola soy " + name + " y mi apellido es " + apellido
console.log(mensaje)

/** EJERCICO 4F ¿Qué cadena es mayor: "gato" o "Gato"?
En JavaScript (y en la mayoría de lenguajes), las cadenas se comparan según el valor Unicode de cada 
carácter, de izquierda a derecha.
JavaScript compara texto carácter por carácter según su valor Unicode, y eso afecta
JavaScript compara texto por Unicode. Las mayúsculas valen menos que las minúsculas. 
Afecta orden, filtros y condiciones
* 
 */

let a = "gato";
let b = "Gato";

if (a > b) {
    console.log(a + " es mayor que " + b);
} else {
    console.log(b + " es mayor que " + a);
}
 
/** EJERCICIO 4G ¿Qué método usarías para extraer "Escorial" de "San Lorenzo de El Escorial"?
 * Busco el último espacio con lastIndexOf(" "). Me da la posición 17. 
Corto desde la 18 con slice(17 + 1) para sacar la última palabra
 * 
 */
frase = "San Lorenzo de El Escorial";
let espacio = frase.lastIndexOf(" ");
let ultima = frase.slice(espacio + 1);
console.log(ultima)
console.log(espacio)

frase = "San Lorenzo de El Escorial";
resultado = frase.lastIndexOf("o", 14);
console.log("Resultado: " + resultado);
/*
- Busca la letra "o"
- Empieza a buscar desde la posición 14 hacia atrás
- Devuelve la última "o" encontrada antes o en la posición 14
“lastIndexOf("o", 14) busca la última 'o' antes o en la posición 14. Devuelve 10.
let parte = texto.substring(4, 11);
*/

/** MÉTODO SUBSTRING
 *  - Empieza en la posición 4 → letra "L"
    - Termina justo antes de la posición 11 → letra "o"
    - Corta desde "L" hasta "o" incluido → "Lorenzo"
 */
frase = "San Lorenzo de El Escorial";
let parte = frase.substring(4, 11);

console.log(parte); // Devuelve "Lorenzo"


/* EJERCICIO 4H Métodos varios - sintaxis

    endsWith(searchString [, position])
- ✅ Sintaxis: cadena.endsWith("texto", hasta)
- 🧠 Comprueba si termina con "texto" hasta la posición dada
- 🧪 "Hola mundo".endsWith("mundo") → true
- 🗣️ “¿Termina con esto?”

🔹 includes(searchString [, position])
- ✅ Sintaxis: cadena.includes("texto", desde)
- 🧠 Comprueba si contiene "texto" desde la posición dada
- 🧪 "Hola mundo".includes("mun") → true
- 🗣️ “¿Está dentro?”

🔹 repeat(count)
- ✅ Sintaxis: cadena.repeat(n)
- 🧠 Repite la cadena n veces
- 🧪 "ja ".repeat(3) → "ja ja ja "
- 🗣️ “Repite el texto las veces que yo diga.”

🔹 padEnd(count [, string])
- ✅ Sintaxis: cadena.padEnd(longitud, relleno)
- 🧠 Rellena al final hasta alcanzar la longitud
- 🧪 "Yesse".padEnd(10, "_") → "Yesse_____"
- 🗣️ “Rellena al final hasta llegar al tamaño.”

🔹 padStart(count [, string])
- ✅ Sintaxis: cadena.padStart(longitud, relleno)
- 🧠 Rellena al inicio hasta alcanzar la longitud
- 🧪 "42".padStart(5, "0") → "00042"
- 🗣️ “Rellena al inicio hasta llegar al tamaño.”

🔹 trim()
- ✅ Sintaxis: cadena.trim()
- 🧠 Elimina espacios al principio y al final
- 🧪 "  hola  ".trim() → "hola"
- 🗣️ “Quita los espacios de los lados.”

🔹 trimStart() / trimEnd()
- ✅ Sintaxis: cadena.trimStart() / cadena.trimEnd()
- 🧠 Elimina espacios solo al inicio o al final
- 🧪 "  hola  ".trimStart() → "hola  "
- 🗣️ “Quita espacios solo al principio o al final.”

🔹 toUpperCase() / toLowerCase()
- ✅ Sintaxis: cadena.toUpperCase() / cadena.toLowerCase()
- 🧠 Convierte todo a mayúsculas o minúsculas
- 🧪 "hola".toUpperCase() → "HOLA"
- 🗣️ “Convierte a mayúsculas o minúsculas.”

🔹 slice(inicio [, fin])
- ✅ Sintaxis: cadena.slice(inicio, fin)
- 🧠 Corta desde inicio hasta fin (sin incluir fin)
- 🧪 "Escorial".slice(0, 3) → "Esc"
- 🗣️ “Corta desde una posición hasta otra.”

🔹 replace(pattern, replacement) / replaceAll(pattern, replacement)
- ✅ Sintaxis: cadena.replace("a", "x") / cadena.replaceAll("a", "x")
- 🧠 Cambia una o todas las apariciones del texto
- 🧪 "banana".replace("a", "x") → "bxnana"
"banana".replaceAll("a", "x") → "bxnxnx"
- 🗣️ “Cambia una o todas las veces que aparece algo.”

¿Quieres que te lo convierta en una hoja visual lista para imprimir o que practiquemos con frases reales como "Madrid capital de España"? Tú decides.

*/
/** EJERCICIO 4I
 * i. Con la siguiente instrucción:

    let edad = prompt("¿Cuántos años tienes?")
solicitamos al usuario una entrada de texto en una ventana emergente.

prompt en MDN
- Crea un script que solicite una frase al usuario y muestre las palabras primera y última de esa frase.
    P.ej. si el usuario introduce: "Madrid es la capital del reino", debe mostrar 'Madrid' y 'reino'.
¿Qué es prompt()?
Es una ventana emergente que aparece en el navegador para pedir al usuario que escriba algo.
    No forma parte del HTML visible
    No se ve en la página, solo como una caja flotante
    Es parte del modelo de diálogo del navegador, no del contenido

¿Cómo se ve?
let nombre = prompt("¿Cómo te llamas?");
    Aparece una ventana con el mensaje
    El usuario escribe y pulsa “Aceptar” o “Cancelar”
    El valor se guarda en la variable nombre

“prompt() abre una ventana flotante para pedir texto. No se ve en la página, solo en el navegador.”


¿Y si quiero que el usuario escriba en la página?
Entonces no usamos prompt(), sino un campo de texto (<input>) y un botón.
    Así el usuario escribe directamente en la página
    Tú controlas el diseño, el estilo y el momento de ejecución

*/
let escribeFrase = prompt("Escribe una frase: "); // pide al usuario una frase
/* ¿Por qué usamos .trim() antes de split()?
Porque cuando el usuario escribe una frase, puede poner espacios al principio o al final sin querer. 
Esos espacios no son palabras, pero si no los quitamos, pueden crear errores al separar la frase.
*/
let palabrasprompt = escribeFrase.trim().split(" ");          // limpia espacios y separa las palabras
let primeraPalabra = palabrasprompt[0];                   // primera palabra
let ultimaPalabra = palabrasprompt[palabrasprompt.length - 1];  // última palabra

// console.log("La primera palabra es: " + primeraPalabra)
// console.log("La última palabra es: " + ultimaPalabra)

document.getElementById("primera").textContent = "La primera palabra es: " + primeraPalabra
document.getElementById("ultima").textContent = "La última palabra es: " + ultimaPalabra



/**  Método PROMPT
• 	Abre una ventana emergente para que el usuario escriba algo
• 	Si escribes , la variable  guarda ese texto
• 	Frase guía: “Uso  para pedir texto al usuario.”
*/

/* .TRIM
Uso .trim() para limpiar los espacios de los lados. No toca los del medio
*/
frase =" Karina no para de estudiar ";
let limpia = frase.trim();
console.log(limpia)

/* .SPLIT
Sintaxis -> cadena.split(separador);
- separador: el carácter o texto que indica dónde cortar
- Si no encuentra el separador, devuelve un array con una sola posición (la cadena entera)
Cada palabra se convierte en un elemento del array
Uso .split(" ") para separar una frase en palabras. Me da un array con cada parte
Cuando usas .split("algo"), JavaScript busca ese “algo” dentro de la cadena.
Si no lo encuentra, no puede separar nada, porque no hay por dónde cortar
*/
frase ="Karina no para de estudiar";
let palabras = frase.split(" ");
console.log(palabras)

let compras = "pan, leche, cafe"
let productos = compras.split(",");
console.log(productos)

/** ACCESO POR INCIDE
Uso [n] para acceder al elemento en la posición n. Empieza en 0. El último es [length - 1]
 */
let ciudad = "Madrid";
letra = ciudad[0];

console.log(letra); // M

palabras = ["San", "Lorenzo", "Escorial"];
let primera = palabras[0];
ultima = palabras[palabras.length - 1];

console.log(primera); // San
console.log(ultima);  // Escorial



    