// ============================================================
// 🔍 EJEMPLO COMPLETO PASO A PASO:
// ============================================================

// AL CARGAR LA PÁGINA:
// 1. Se ejecutan las 3 líneas de variables globales:
//    rojo = 0, verde = 0, azul = 0
// 2. Se ejecuta mostrarColor()
// 3. Pantalla muestra: "0  0  0"
// 4. Cuadro es negro: rgb(0, 0, 0)

// USUARIO PULSA BOTÓN ROJO:
// 1. HTML ejecuta: onclick="lanzarColor(1)"
// 2. Se llama a la función lanzarColor(1)
// 3. num = 1
// 4. valor = 200 (aleatorio)
// 5. Como num === 1, se ejecuta: rojo = 200
// 6. Se llama a mostrarColor()
// 7. Pantalla muestra: "200  0  0"
// 8. Cuadro cambia a: rgb(200, 0, 0) (rojo oscuro)

// USUARIO PULSA BOTÓN VERDE:
// 1. HTML ejecuta: onclick="lanzarColor(2)"
// 2. Se llama a la función lanzarColor(2)
// 3. num = 2
// 4. valor = 150 (aleatorio)
// 5. Como num === 2, se ejecuta: verde = 150
// 6. Se llama a mostrarColor()
// 7. Pantalla muestra: "200  150  0"
// 8. Cuadro cambia a: rgb(200, 150, 0) (naranja)

// USUARIO PULSA BOTÓN AZUL:
// 1. HTML ejecuta: onclick="lanzarColor(3)"
// 2. Se llama a la función lanzarColor(3)
// 3. num = 3
// 4. valor = 80 (aleatorio)
// 5. Como num === 3, se ejecuta: azul = 80
// 6. Se llama a mostrarColor()
// 7. Pantalla muestra: "200  150  80"
// 8. Cuadro cambia a: rgb(200, 150, 80) (marrón claro)


// ============================================================
// 📌 CONCEPTOS CLAVE PARA EL EXAMEN:
// ============================================================

// 1. VARIABLES GLOBALES:
//    - Se declaran FUERA de las funciones
//    - Todas las funciones pueden verlas y cambiarlas
//    - NO se borran cuando termina una función

// 2. PARÁMETROS:
//    - Son valores que le pasas a una función
//    - Se ponen entre paréntesis: function lanzarColor(num)
//    - Al llamarla le das el valor: lanzarColor(1)

// 3. NÚMERO ALEATORIO 0-255:
//    Math.floor(Math.random() * 256)

// 4. CAMBIAR CONTENIDO HTML:
//    document.getElementById('id').innerHTML = valor;

// 5. CAMBIAR COLOR DE FONDO:
//    elemento.style.backgroundColor = "rgb(r, g, b)";

// 6. TEMPLATE STRINGS:
//    `texto ${variable}`
//    Ejemplo: `rgb(${rojo},${verde},${azul})`


// ============================================================
// 🎨 TABLA DE COLORES RGB COMUNES:
// ============================================================
//
// Negro:    rgb(0, 0, 0)
// Blanco:   rgb(255, 255, 255)
// Rojo:     rgb(255, 0, 0)
// Verde:    rgb(0, 255, 0)
// Azul:     rgb(0, 0, 255)
// Amarillo: rgb(255, 255, 0)
// Cyan:     rgb(0, 255, 255)
// Magenta:  rgb(255, 0, 255)
// Gris:     rgb(128, 128, 128)
// Naranja:  rgb(255, 165, 0)
// Morado:   rgb(128, 0, 128)


// ============================================================
// 📌 RESUMEN ULTRA RÁPIDO:
// ============================================================
//
// 1. Tres variables globales guardan RGB (0-255)
// 2. lanzarColor(num) genera número aleatorio y lo guarda
// 3. mostrarColor() actualiza números y color del cuadro
// 4. Cada botón llama lanzarColor con diferente parámetro
// 5. Template strings crean el formato rgb(r, g, b)
// 6. .style.backgroundColor cambia el color del cuadro


// ============================================================
// 💡 VENTAJA DE ESTE CÓDIGO:
// ============================================================
// Igual que en el ejercicio 5, usas UNA función con parámetro
// en lugar de 3 funciones separadas:
//
// En lugar de:
// function lanzarRojo() { ... }
// function lanzarVerde() { ... }
// function lanzarAzul() { ... }
//
// Tienes:
// function lanzarColor(num) { ... }
//
// Esto evita repetir código y es más elegante ✓
/*

## 🎓 **RESUMEN VISUAL DEL FLUJO:**
```
INICIO (al cargar página):
  ↓
[Variables globales]
rojo = 0, verde = 0, azul = 0
  ↓
[mostrarColor()]
Pantalla: "0  0  0"
Cuadro: negro
  ↓
[Usuario pulsa botón ROJO]
  ↓
[lanzarColor(1)]
  ↓
valor = 200 (aleatorio)
rojo = 200
  ↓
[mostrarColor()]
  ↓
Pantalla: "200  0  0"
Cuadro: rojo oscuro
*/