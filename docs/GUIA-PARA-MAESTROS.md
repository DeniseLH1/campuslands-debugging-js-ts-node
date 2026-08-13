# Guia para maestros

## Criterios de revision

Revisar cada PR con este orden:

1. Base del PR: debe apuntar a `dev`.
2. Estructura: debe usar `resoluciones/nombre-apellido/`.
3. Alcance: no debe modificar archivos base ni respuestas de otros alumnos.
4. Codigo: debe resolver el bug sin hacks innecesarios.
5. Validacion: debe indicar comando de test usado.
6. Explicacion: debe incluir razonamiento claro.

## Cuando rechazar

Rechazar si:

- Apunta a `main`.
- Rompe estructura.
- Borra archivos base.
- Sube `node_modules` o archivos basura.
- La solucion no ejecuta.
- Cambia tests para hacerlos pasar sin corregir el bug.

## Feedback recomendado

```text
Rechazado por estructura: tu solucion debe estar en ejercicios/ejercicio-000/resoluciones/nombre-apellido/. Corrige la ubicacion y vuelve a abrir PR hacia dev.
```

```text
Aprobado: el test pasa y la explicacion identifica correctamente la causa del bug. Buen trabajo aislando entrada, transformacion y salida.
```
