/** 1. Variables
 * “Una variable es como una caja donde guardo datos. 
 * let me permite cambiar el contenido, 
 * const no.”
 */
let nombre = "Yessenia"
let edad = 38


/** 2. CONDICIONALES
 * “Con if pregunto algo. Si se cumple, hago una acción. Si no, hago otra.”
 */

if (edad >= 18){
    console.log("Eres mayor de edad");
} else{
    console.log("Eres menor")
}

if(edad <= 0){
    console.log("No he nacido")
}else{
    console.log("Ya naci")
}

/** ELSE IF
 * “Con else if voy probando más condiciones si la primera no se cumple.”
 */

let nota = 8;

if(nota >= 9){
    console.log("Sobresaliente");
    }else if(nota >= 7){
        console.log("Notable");
    }else if(nota >= 5){
        console.log("Aprobado");
    }else{
        console.log("Suspenso");
    }
    
/**
 * Condicional con operador ternario
 */
let techo = 17; 
let mensaje = (techo >= 18) ? "Techo alto" : "Techo bajo"
console.log(mensaje);

let nota_carnet = 8;
let resultado = (nota_carnet >= 9) ? "Sobresaliente" :
                (nota_carnet >= 7) ? "Notable" :
                (nota_carnet >= 5) ? "Aprobado" :
                "Suspenso";

console.log(resultado);

/**
 * SWITCH
switch(value), compara el valor de las casos -> "Vor a revisar que valor tiene"
case "lunes", si el valor coincide, ejecuta el bloque -> "Si soy lunes, hago esto"
break, detiene el bloque para no seguir ejecutando -> "Ya entré lo que buscaba, paro aquí"
default:, se ejecuta si ningún case coincide -> "Si no coincide nada, hago esto por defecto"
 */

let dia = "martes";

switch(dia){
    case"lunes":
        console.log("Soy un gran lunes");
        break;
    case "martes":
        console.log("Soy por fin martes")
        break;
    default:
        console.log("Dia X")
}
/**
 *El switch compara un valor con varios casos. Si encuentra uno que coincide, ejecuta ese bloque
y se detiene con break. Si no hay coincidencia, usa default.
 * 
 */
/** 3. BUCLES
 * FOR
 * El for repite lo que hay dentro. Empieza en 0 y se detiene cuando la condición ya no se cumple.”
for(inicio, condición, actualización){
//código que se repite
    inicio = Declara la variable que controla el bucle let i = ( -> Empieza en 0.
    condición = Evalúa si el bucle debe seguir i < 3, mientras i sea menor que 3.
    actualización =  Cambia el valor de la variable, i ++ suma 1 cada vez.
}
*/

for(let i = 0; i < 3; i++){
    console.log("Hola" + i)
}
/**
 * ¿Qué hace?
- Empieza con i = 0
- Mientras i < 3, ejecuta console.log("Hola " + i)
- Luego suma 1 a i (i++)
- Se repite hasta que i ya no sea menor que 3
Resultado:
            Hola 0
            Hola 1
            Hola 2
“El for repite una acción. Empieza en un número, evalúa si debe seguir, y actualiza ese número en cada
vuelta.”
¿Cómo usarlo en tus ejercicios?
- Para recorrer una lista de productos
- Para sumar valores de un array
- Para mostrar mensajes repetidos
- Para contar elementos
*/

/**WHILE
 * let i = 0, es la variable inicial - i = 0 -> Empiezo en 0
 * while(i<, es la condición - i < 3 -> Mientras i sea mayor que 3
 * i++, actualización -i++ -> Suma 1 cada vez
 * El while repite mientras la condición sea verdadera. Si empieza falsa, no se ejecuta nada

 */
let i = 0;
while (i < 3){
console.log("Hola" + i)
i++;
}

/* En resumen uso:
FOR: SI TENGO UNA LISTA FIJA
WHILE: SI DEPENDE DE UNA CONDICIÓN QUE CAMBIA
DO - WHILE: SI QUIERO QUE SE EJECUTE POR LO MENOZ UNA VEZ
*/