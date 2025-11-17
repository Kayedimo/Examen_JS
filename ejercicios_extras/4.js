const t = () => [0, 16, 64, 128, 256, 512, 1024][parseInt(7 * Math.random())];

function hola(fc)     { setTimeout(() => fc("Hola"), t()); }
function desde(fc)    { setTimeout(() => fc("desde"), t()); }
function madrid(fc)   { setTimeout(() => fc("Madrid"), t()); }

function mostrarFrase(texto) {
  document.getElementById("frase").textContent = texto;
}

hola(p1 => {
  desde(p2 => {
    madrid(p3 => {
      mostrarFrase(`${p1} ${p2} ${p3}`);
    });
  });
});

// “Cada palabra llega con retraso. Encadeno las funciones para formar la frase final.”



