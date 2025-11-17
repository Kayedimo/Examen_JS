function crearEscalera(n) {
  const escalera = [];

  for (let i = 1; i <= n; i++) {
    const fila = [];
    for (let j = 1; j <= i; j++) {
      fila.push(j); // añadimos el número j a la fila
    }
    escalera.push(fila); // añadimos la fila al array principal
  }

  return escalera;
}

function showArray(arr) {
  let salida = "";
  for (let i = 0; i < arr.length; i++) {
    salida += arr[i].join(" ") + "\n";
  }
  document.getElementById("resultado").textContent = salida.trim();
}

const escalera = crearEscalera(5);
showArray(escalera);

/*
Frase guía:
“Uso dos bucles: el externo crea cada fila, el interno llena esa fila con números del 1 al i.”
*/