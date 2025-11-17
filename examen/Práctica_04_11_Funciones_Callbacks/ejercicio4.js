// Simulamos funciones que tardan en responder usando setTimeout

function suma(x, y, fc) {
  setTimeout(() => {
    let resultado = x + y;
    fc(resultado); // llamamos a la función cuando el resultado está listo
  }, 2000 * Math.random()); // tiempo aleatorio entre 0 y 2 segundos
}

function resta(x, y, fc) {
  setTimeout(() => {
    let resultado = x - y;
    fc(resultado);
  }, 2000 * Math.random());
}

function multiplica(x, y, fc) {
  setTimeout(() => {
    let resultado = x * y;
    fc(resultado);
  }, 2000 * Math.random());
}

function divide(x, y, fc) {
  setTimeout(() => {
    let resultado = x / y;
    fc(resultado);
  }, 2000 * Math.random());
}

// Función para mostrar el resultado en pantalla
function mostrar(id, valor) {
  document.getElementById(id).textContent = valor;
}

// Ejercicio: 5 + 4
suma(5, 4, res => mostrar("res1", res)); // resultado: 9

// Ejercicio: 5 + 4 - 1
suma(5, 4, res => {
  resta(res, 1, res2 => mostrar("res2", res2)); // resultado: 8
});

// Ejercicio: 5 + 4 - 1 - 1
suma(5, 4, res => {
  resta(res, 1, res2 => {
    resta(res2, 1, res3 => mostrar("res3", res3)); // resultado: 7
  });
});

// Ejercicio: (3 + (2 * 2) + 7) / 2
multiplica(2, 2, r1 => {
  suma(3, r1, r2 => {
    suma(r2, 7, r3 => {
      divide(r3, 2, r4 => mostrar("res4", r4)); // resultado: 7
    });
  });
});

// Ejercicio: ((8 + 6) / (9 - 2)) * 3
suma(8, 6, r1 => {
  resta(9, 2, r2 => {
    divide(r1, r2, r3 => {
      multiplica(r3, 3, r4 => mostrar("res5", r4)); // resultado: 6
    });
  });
});

/***
 * Frase guía para examen:
“Simulo asincronía con setTimeout. Cada función espera un tiempo aleatorio y luego llama a la callback con el resultado.”


Notas clave:
- setTimeout simula que el servidor tarda en responder.
- No usamos return, porque el resultado llega después.
- Las operaciones se encadenan dentro de otras callbacks.
- mostrar(id, valor) actualiza el contenido del <h1> correspondiente.

 */