// Capturamos los elementos del HTML
const cocheA = document.getElementById("cocheA");  // Primer coche
const cocheB = document.getElementById("cocheB");  // Segundo coche
const semaforo = document.getElementById("semaforo"); // Botón tipo semáforo

// Posiciones iniciales
let posA = 0;
let posB = -100;

// Variable que controla si los coches están en marcha
let enMarcha = true;

// Función que mueve los coches
function moverCoches() {
  if (enMarcha) {
    posA += 2; // Avanza el coche A
    posB += 3; // Avanza el coche B (más rápido)

    // Si se salen de la pantalla, vuelven a empezar por la izquierda
    if (posA > window.innerWidth) posA = -60;
    if (posB > window.innerWidth) posB = -60;
  }

  // Aplicamos las posiciones a los coches
  cocheA.style.left = posA + "px";
  cocheB.style.left = posB + "px";
}

// Repetimos el movimiento cada 30 milisegundos
setInterval(moverCoches, 30);

// Cuando el usuario hace clic en el semáforo
semaforo.addEventListener("click", function() {
  enMarcha = !enMarcha; // Cambiamos el estado: si estaba en marcha, se detiene

  // Cambiamos el color del semáforo
  semaforo.style.backgroundColor = enMarcha ? "green" : "red";
});