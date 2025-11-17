const boton = document.querySelector("button");
const inputHora = document.getElementById("hora");
const inputMensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
  const ahora = new Date();
  const horaElegida = inputHora.value;
  const mensaje = inputMensaje.value;

  if (!horaElegida || !mensaje) return;

  const partes = horaElegida.split(":");
  const h = parseInt(partes[0]);
  const m = parseInt(partes[1]);

  const objetivo = new Date();
  objetivo.setHours(h);
  objetivo.setMinutes(m);
  objetivo.setSeconds(0);
  objetivo.setMilliseconds(0);

  const diferencia = objetivo.getTime() - ahora.getTime();

  if (diferencia <= 0) {
    alert("Esa hora ya pasó.");
    return;
  }

  setTimeout(() => {
    alert("Alarma: " + mensaje);
  }, diferencia);
});

/*“Calculo la diferencia entre ahora y la hora elegida, y uso setTimeout para mostrar el mensaje.”
*/