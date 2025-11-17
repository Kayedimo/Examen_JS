const suma = (x, y) => x + y;
const resta = (x, y) => x - y;
const multiplica = (x, y) => x * y;
const divide = (x, y) => x / y;

function calcula(x, y, operacion) {
  return operacion(x, y); // ejecuta la operación que le pasamos
}

const resultado = calcula(8, 2, divide); // ejemplo: 8 / 2 = 4
document.getElementById("resultado").textContent = "Resultado: " + resultado;

// “Paso la operación como función. calcula la ejecuta con los dos números.”



