/** ARRAYS
 * Son como listas, que permiten guardar varios datos juntos
 * Se recorren con for
 * Un array es una lista de cosas, y cada cosa tiene un número de posición que empieza por "0".
*/
let países = ["Perú", "Brasil", "Bolivia"]
console.log(países[0]) // países[0] "Perú"
console.log(países[1]) // países[0] "Brasil"
console.log(países[2]) // países[0] "Bolivia"

let colores = ["rojo","azul","verde"];
/**
 *  - let → crea la variable
    - colores → nombre de tu caja
    - [...] → los elementos van entre corchetes
    - "rojo", "azul", "verde" → son los valores que guardas

 * ¿CÓMO ACCEDO A UN ELEMENTO?
    con console, para ver lo que hay en una posición, uso el nombre y el número entre corchertes.
 */
console.log(colores[1]);

// MÉTODOS

/** MÉTODO .PUSH()
 * push() -> Añadir elementos al final
Push mete algo nuevo al final de la caja.
*/
colores.push("amarillo");

/** MÉTODO .POP()
 * pop() -> Quitar el último elemento
Pop saca el último de la caja.
*/
colores.pop();

/** MÉTODO .LENGTH
 * .length -> Cuántos hay?
 *  .length me dice cuántos elementos hay en el array
 */

console.log(colores.length)

/** MÉTODO .INCLUDES()
 * .includes() -> Está esto en la caja? busca básicamente
*/
console.log(colores.includes("azul"));      // true
console.log(colores.includes("negro"));     // false

let productos = ["pan","leche","arroz","canela"]

productos.push("azúcar","sal")
productos.pop()
console.log(productos.length)
console.log(productos.includes("pilas"))

// Un array es una lista. Uso push para meter, pop para sacar, length para contar y includes para buscar.
/* Uso .length para saber cuántos elementos hay en el array y así recorrerlo sin pasarme.”


/** RECORRER ARRAYS CON FOR
¿Qué pasa aquí?
- productos.length vale 3
- El bucle se repite mientras i < 3
- i = 0, 1, 2 → son las posiciones válidas
- Cuando i = 3, ya no hay más elementos → se detiene
Uso un for para recorrer el array desde la posición 0 hasta el final, y voy imprimiendo cada elemento.
*/

let ciudades = ["Lima","Mollendo","Arequipa","Cuzco","Puno"]
for(let i = 0; i < ciudades.length; i++){
    console.log("Producto " + (i + 1) + ": " + productos[i])
/**Lo que imprime console:
 * "Producto "
Texto fijo → siempre dice “Producto ”
    (i + 1)
Número de producto → como i empieza en 0, le sumas 1 para que diga “Producto 1”, “Producto 2”...
    ": "
Separador → para que quede bonito
    productos[i]
El nombre del producto en esa posición
*/
}

let nombre = "Karina"
console.log("Yessenia " + nombre);
console.log("Una de los ciudades " + ciudades[1]);
console.log(`Hola, como estás? ${nombre}`)
// Uso console.log para mostrar texto y variables. Los uno con + para formar una frase.”

