/** FUNCIONES
 * ¿Qué es una función?
Una función es como una receta:
- Tiene un nombre
- Puede recibir ingredientes (datos)
- Hace algo con ellos
- Y puede devolver un resultado
Una función es un bloque que hace algo. Le doy datos (parámetros) y puede devolver un resultado 
* 
*/
// CREAR UNA FUNCIÓN

function saludar(){
    console.log("Hola Yessenia")
}

/*  Como se lee lo de arriba:  
- function → palabra clave
- saludar → nombre de la función
- { ... } → lo que hace la función
*/

/** USAR LA FUNCIÓN
 * Llamas a la función por su nombre, como si dijeras:
“Haz lo que dice la receta.”
*/ 
saludar();


/** FUNCIÓN CON INGREDIENTES - PARÁMETROS
    - nombre → es el dato que recibe
    - "Hola " + nombre → construye el mensaje
 */

function saludar(nombre){
    console.log("Hola " + nombre)
}

saludar("Yessenia");
saludar("Jair");

/** FUNCION QUE DEVUELVE ALGO - RETURN
*
*
*
*/
function sumar(a, b){
    return a + b;
}
// OPCIÓN 1: GUARDAR RESULTADO EN VARIABLE
let resultado = sumar(3, 4);
console.log("El resultado es " + resultado)

// OPCIÓN 2: MOSTRAR EL RESULTADO DIRECTAMENTE EN EL CONSOLE LOG
console.log("El resultado es " + sumar(5, 8))

/**
 * Si quiero guardar el resultado de una función, uso una variable. 
 * Y si solo lo quiero mostrar, puedo usarlo directamente.
¿Cuándo conviene usar una variable?
        - Si vas a usar el resultado más de una vez
        - Si quieres explicar mejor el código
        - Si necesitas modificarlo o compararlo después
*/

/*** FUNCIONES CON ARRAYS
 * Ahora vamos a hacer que la función reciba un array y lo recorra.
 * Puedes:
    - Recorrer un array dentro de una función.
    - Pasar un array como parámetro.
    - Aplicar una función a cada elemento del array
 */
// 1. Recorrer Array: 
let comidas = ["causa","papa rellena", "arroz con pollo"]

function mostrar_comidas(lista){
    for(let i = 0; i < lista.length; i++)
        console.log("Comida " + (i + 1) + ": " + lista[i]);
}
mostrar_comidas(comidas);
/**
 *  - Lista es el array que recibe
    - for recorre cada fruta
    - console.log muestra cada una
Resultado:
    - Comida 1: ....
    - Comida 2: ....
    - Comida 3: ....
Paso un array a la función como parámetro. Lo recorro con for y muestro cada elemento
*/
/** CONTAR COMIDAS CON MAS DE 12 LETRAS
 * Queremos que la función:
    - Reciba el array como parámetro
    - Recorra cada comida
    - Cuente cuántas tienen más de 12 letras
 */

    function contadorComidas(lista){
    let contador = 0;                       // aquí se guardan cuantas cumplen la condición
    for(let i = 0; i < lista.length; i++){
        if(lista[i].length < 10){
            contador++;
        }
    }
    console.log("El total de comidas con más de 10 letras es " + contador++)
// El console va fuera del for y del if porque queremos esperar a terminar el recorrido completo, 
// y entonces mostrar el total.
}

    contadorComidas(comidas);

comidas = ["causa","papa rellena", "arroz con pollo", "ají de gallina"]

function filtrar_comidas(lista){
    let resultado = []
    for(i = 0; i < lista.length; i++){
        if(lista[i].length > 10){
            resultado.push(lista[i]);
        }
    }
return resultado;
}
let comidas_largas = filtrar_comidas(comidas);
console.log("Comidas largas", comidas_largas)

/**
 * Filtrar comidas que empiezan por una letra
 * Crear una función que reciba un array de comidas y una letra, y devuelva un nuevo array con las comidas que empiezan por esa letra.
*/
// Función con dos parámetros:
function filtrarPorLetra(lista, letra) {
    let resultado = [];

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].startsWith(letra)) {
        resultado.push(lista[i]);
    }
    }
return resultado;
}
// Llamada de la función
let comidas_letra_a = filtrarPorLetra(comidas,"a")
    console.log("Comidas que empiezas con a: " )
for(let i = 0; i < comidas_letra_a.length; i++){
    console.log("- " + comidas_letra_a[i])
}

/**
 * - startsWith(letra) verifica si la comida empieza con esa letra.
    - Si sí, la añadimos al nuevo array resultado.
    - Al final, devolvemos ese array y lo mostramos línea por línea
Uso startsWith() para filtrar por letra inicial. Si cumple, lo guardo con push() 
y devuelvo el nuevo array
*/