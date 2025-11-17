// Función que intercambia dos caracteres en posiciones n y m
function swap(texto, n, m) {
    // Convierte el texto en un array de caracteres
    // Ejemplo: "Paloma" -> ["P", "a", "l", "o", "m", "a"]
    const arrayCaracteres = texto.split('');
    
    // Guarda temporalmente el carácter en la posición n
    const temp = arrayCaracteres[n];
    
    // Coloca el carácter de la posición m en la posición n
    arrayCaracteres[n] = arrayCaracteres[m];
    
    // Coloca el carácter temporal (que era n) en la posición m
    arrayCaracteres[m] = temp;
    
    // Une los caracteres en un string
    // Ejemplo: ["a", "a", "l", "o", "m", "P"] -> "aalomP"
    const textoIntercambiado = arrayCaracteres.join('');
    
    // Retorna el texto con los caracteres intercambiados
    return textoIntercambiado;
}

// Función que se ejecuta al pulsar el botón
function intercambiarCaracteres() {
    // Obtiene el input de texto
    const inputTexto = document.getElementById('textoInput');
    // Obtiene el input de posición 1
    const inputPos1 = document.getElementById('posicion1');
    // Obtiene el input de posición 2
    const inputPos2 = document.getElementById('posicion2');
    // Obtiene el div resultado
    const resultado = document.getElementById('resultado');
    
    // Obtiene el texto
    const texto = inputTexto.value;
    // Obtiene la posición n (convertido a número)
    const n = parseInt(inputPos1.value);
    // Obtiene la posición m (convertido a número)
    const m = parseInt(inputPos2.value);
    
    // Verifica que las posiciones sean válidas
    if (n < 0 || m < 0 || n >= texto.length || m >= texto.length) {
        resultado.textContent = 'Error: Posiciones inválidas';
        return;
    }
    
    // Llama a la función swap para intercambiar
    const textoIntercambiado = swap(texto, n, m);
    
    // Muestra el resultado
    resultado.textContent = textoIntercambiado;
}

// Cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el botón
    const boton = document.getElementById('botonIntercambiar');
    // Agrega el evento click al botón
    boton.addEventListener('click', intercambiarCaracteres);
});

/*
---

## 📚 Cómo funciona la función `swap()`:

**Ejemplo paso a paso con "Paloma", n=0, m=5:**

1. **Convertir a array:**
```
   "Paloma" → ["P", "a", "l", "o", "m", "a"]
                ↑                           ↑
              pos 0                       pos 5
```

2. **Guardar temporalmente:**
```
   temp = "P"  (guarda el carácter de la posición 0)
```

3. **Primer intercambio:**
```
   arrayCaracteres[0] = arrayCaracteres[5]
   ["a", "a", "l", "o", "m", "a"]
     ↑
   Ahora la posición 0 tiene "a"
```

4. **Segundo intercambio:**
```
   arrayCaracteres[5] = temp
   ["a", "a", "l", "o", "m", "P"]
                              ↑
   Ahora la posición 5 tiene "P"
```

5. **Unir en texto:**
```
   ["a", "a", "l", "o", "m", "P"] → "aalomP" */