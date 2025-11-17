// Capturamos el botón y el campo de hora
const boton = document.querySelector("button");       // Este es el botón que el usuario va a pulsar
const inputHora = document.getElementById("hora");    // Este es el campo donde el usuario elige la hora

// Cuando el usuario hace clic en el botón, se ejecuta esta función
boton.addEventListener("click", function() {
  // Creamos un reloj con la hora actual
  const ahora = new Date();

  // Guardamos la hora que el usuario escribió (formato "HH:MM")
  const horaObjetivo = inputHora.value;

  // Si el campo está vacío, no hacemos nada
  if (!horaObjetivo) return;

  // Separamos la hora y los minutos que escribió el usuario
  const partes = horaObjetivo.split(":");
  const hora = parseInt(partes[0]);   // Por ejemplo: "14" → 14
  const minutos = parseInt(partes[1]); // Por ejemplo: "20" → 20

  // Creamos un nuevo reloj con la hora objetivo
  const objetivo = new Date();
  objetivo.setHours(hora);           // Le decimos qué hora queremos
  objetivo.setMinutes(minutos);      // Le decimos qué minutos queremos
  objetivo.setSeconds(0);            // Ponemos los segundos en cero
  objetivo.setMilliseconds(0);       // También los milisegundos en cero

  // Calculamos cuántos milisegundos faltan desde ahora hasta la hora objetivo
  const diferencia = objetivo.getTime() - ahora.getTime();

  // Si la hora ya pasó, mostramos un aviso
  if (diferencia <= 0) {
    alert("Esa hora ya pasó. Elige una hora futura.");
    return;
  }

  // Esperamos esa cantidad de milisegundos y luego mostramos la alarma
  setTimeout(function() {
    const actual = new Date(); // Hora exacta en que suena la alarma
    const mensaje = `@dww.es\nSon las ${actual.toLocaleTimeString()}`;
    alert(mensaje); // Mostramos el mensaje en pantalla
  }, diferencia);
});

/**
 * Frase guía para examen:
“Calculo la diferencia entre la hora actual y la hora elegida, y uso setTimeout para mostrar la alarma cuando se cumpla.”


Notas clave:
- new Date() crea un reloj con la hora actual.
- .getTime() convierte la hora en milisegundos.
- setTimeout(función, milisegundos) espera y luego ejecuta.
- .split(":") separa la hora escrita en dos partes: hora y minutos.
- .toLocaleTimeString() muestra la hora actual en formato legible.

 * 
 */

