// Función que elimina caracteres repetidos de un texto
function unique(text) {
    // Variable para almacenar el resultado
    let textoUnico = '';
    
    // Recorre cada carácter del texto
    for (let i = 0; i < text.length; i++) {
        // Obtiene el carácter actual
        const caracter = text[i];
        
        // Verifica si el carácter ya está en textoUnico
        // indexOf devuelve -1 si no lo encuentra
        if (textoUnico.indexOf(caracter) === -1) {
            // Si no está, lo agrega
            textoUnico += caracter;
        }
        // Si ya está, no hace nada (lo ignora)
    }
    
    // Retorna el texto sin caracteres repetidos
    return textoUnico;
}

// Función que se ejecuta al pulsar el botón
function procesarTexto() {
    // Obtiene el input
    const input = document.getElementById('textoInput');
    // Obtiene el div resultado
    const resultado = document.getElementById('resultado');
    
    // Obtiene el texto del input
    const textoOriginal = input.value;
    
    // Llama a la función unique para eliminar repetidos
    const textoSinRepetidos = unique(textoOriginal);
    
    // Muestra el resultado
    resultado.textContent = textoSinRepetidos;
}

// Cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene el botón
    const boton = document.getElementById('botonProcesar');
    // Agrega el evento click al botón
    boton.addEventListener('click', procesarTexto);
});

/*```
## 📚 Cómo funciona la función `unique()`:

**Paso a paso con el ejemplo:**

**Entrada:** `"IES Virgen de la Paloma"`

**Proceso:**
1. Recorre cada letra una por una
2. Si la letra NO está en `textoUnico`, la agrega
3. Si YA está, la ignora

**Ejemplo detallado:**
```
'I' → No está → textoUnico = 'I'
'E' → No está → textoUnico = 'IE'
'S' → No está → textoUnico = 'IES'
' ' → No está → textoUnico = 'IES '
'V' → No está → textoUnico = 'IES V'
'i' → No está → textoUnico = 'IES Vi'
'r' → No está → textoUnico = 'IES Vir'
'g' → No está → textoUnico = 'IES Virg'
'e' → No está → textoUnico = 'IES Virge'
'n' → No está → textoUnico = 'IES Virgen'
' ' → YA está → se ignora
'd' → No está → textoUnico = 'IES Virgend'
'e' → YA está → se ignora
' ' → YA está → se ignora
'l' → No está → textoUnico = 'IES Virgenl'
'a' → No está → textoUnico = 'IES Virgenla'
... */