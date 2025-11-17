let intentos = 0;
const passwordCorrecto = "secreto";

document.getElementById("boton").addEventListener("click", function () {
    const input = document.getElementById("passwordInput").value;
    const mensaje = document.getElementById("mensaje");

    if (input === passwordCorrecto) {
    mensaje.textContent = "Bienvenido, acceso concedido.";
    document.getElementById("boton").disabled = true;
    } else {
    intentos++;
    if (intentos >= 3) {
    mensaje.textContent = "Has fallado 3 veces. Acceso bloqueado.";
    document.getElementById("boton").disabled = true;
    } else {
    mensaje.textContent = `Contraseña incorrecta. Intento ${intentos} de 3.`;
    }
    }
});