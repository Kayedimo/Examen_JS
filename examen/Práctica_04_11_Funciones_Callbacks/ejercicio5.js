// Simulamos tiempos de respuesta aleatorios como si fueran del servidor
const t = () => [0,1,2,4,8,16,32,64,128,256,512,1024,2048,4096][parseInt(14 * Math.random())];

// API que nos da palabras con retraso
function en(fc)      { setTimeout(() => fc("En"), t()); }
function un(fc)      { setTimeout(() => fc("un"), t()); }
function lugar(fc)   { setTimeout(() => fc("lugar"), t()); }
function de(fc)      { setTimeout(() => fc("de"), t()); }
function la(fc)      { setTimeout(() => fc("la"), t()); }
function mancha(fc)  {
  setTimeout(() => {
    // Aquí el servidor estaría haciendo cosas...
    fc("Mancha");
  }, t());
}

// Función que muestra la frase completa en pantalla
function mostrarFrase(frase) {
  document.getElementById("frase").textContent = frase;
}

// Encadenamos las funciones para formar la frase
en(p1 => {
  un(p2 => {
    lugar(p3 => {
      de(p4 => {
        la(p5 => {
          mancha(p6 => {
            const fraseCompleta = `${p1} ${p2} ${p3} ${p4} ${p5} ${p6}`;
            mostrarFrase(fraseCompleta);
          });
        });
      });
    });
  });
});

/***
 * Frase guía para examen:
“Cada función espera un tiempo y luego llama a la siguiente. Así encadeno las palabras hasta formar la frase.”


Notas clave:
- Cada función simula una respuesta lenta del servidor con setTimeout.
- Usamos callbacks encadenadas para que cada palabra espere a la anterior.
- mostrarFrase() actualiza el contenido del <h1> con la frase final.
- No usamos return, porque el resultado llega después.

 */