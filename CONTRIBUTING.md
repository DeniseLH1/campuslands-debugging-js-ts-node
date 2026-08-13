# Contribuir al repositorio

Este repositorio usa un flujo academico profesional. La meta es que cada estudiante practique Git como se trabaja en equipos reales.

## Flujo obligatorio

```bash
git checkout dev
git pull origin dev
git checkout -b nombre-apellido/ejercicio-001
```

Despues de resolver:

```bash
git status
git add ejercicios/ejercicio-001/resoluciones/nombre-apellido/
git commit -m "fix(ejercicio-001): corrige calculo de ranking"
git push origin nombre-apellido/ejercicio-001
```

Luego abre Pull Request hacia `dev`.

## Estructura obligatoria de entrega

```text
ejercicios/ejercicio-000/resoluciones/nombre-apellido/archivo.ext
```

No modifiques archivos base del ejercicio salvo que el instructor lo indique. Tu solucion debe vivir en tu carpeta personal.

## Commits profesionales

Usamos estilo Conventional Commits:

- `feat`: agrega una nueva solucion, archivo o mejora funcional.
- `fix`: corrige un error en una solucion existente.
- `docs`: cambia documentacion.
- `test`: agrega o corrige pruebas.
- `refactor`: mejora el codigo sin cambiar comportamiento.
- `chore`: cambios de mantenimiento.

Ejemplos:

```bash
git commit -m "feat(ejercicio-014): agrega solucion de agenda de tatuajes"
git commit -m "fix(ejercicio-036): corrige validacion de creacion de motos"
git commit -m "docs(ejercicio-021): documenta pasos de depuracion"
```

## Rechazo automatico

El PR puede rechazarse si:

- Apunta a `main`.
- Sube archivos fuera de `resoluciones/nombre-apellido/`.
- Borra o modifica archivos base.
- Modifica entregas de otros estudiantes.
- No sigue el formato de nombre.
- No explica la solucion.

## Buenas practicas

- Haz commits pequenos.
- Escribe mensajes claros.
- Ejecuta el test antes de subir.
- No subas `node_modules`.
- No subas capturas si el ejercicio pide codigo.
- No copies soluciones de otros companeros.
