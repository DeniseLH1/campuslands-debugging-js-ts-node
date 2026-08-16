# Ejercicio #1

## Error #1 — Cálculo de puntos

**Qué fallaba:**  
La función concatenaba los puntos como texto en lugar de sumarlos. El test esperaba el total de puntos como un número.

**Cómo lo encontré:**  
Al ejecutar el test observé que el resultado recibido no coincidía con el total esperado. Revisando la función encontré que se utilizaba `join()`, que concatenaba los valores.

**Qué cambié:**  
Reemplacé `join()` por `reduce()` para acumular los puntos numéricamente.

    return datos.map(item => item.puntos).reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);

**Cómo lo validé:**  
Ejecuté nuevamente el test y comprobé que la prueba de cálculo de puntos pasó correctamente.
