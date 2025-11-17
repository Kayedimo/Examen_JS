const cocheA = document.getElementById("cocheA");
const cocheB = document.getElementById("cocheB");
const semaforo = document.getElementById("semaforo");

let posA = 0;
let posB = -100;
let enMarcha = true;

function mover() {
  if (enMarcha) {
    posA += 2;
    posB += 3;
    if (posA > window.innerWidth) posA = -60;
    if (posB > window.innerWidth) posB = -60;
  }
  cocheA.style.left = posA + "px";
  cocheB.style.left = posB + "px";
}

setInterval(mover, 30);

semaforo.addEventListener("click", () => {
  enMarcha = !enMarcha;
  semaforo.style.backgroundColor = enMarcha ? "green" : "red";
});

// “Uso setInterval para mover los coches y un botón que cambia entre verde

