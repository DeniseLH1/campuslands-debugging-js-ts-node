# Flujo de trabajo para estudiantes

## 1. Actualiza tu repositorio

```bash
git checkout dev
git pull origin dev
```

## 2. Crea tu rama

```bash
git checkout -b nombre-apellido/ejercicio-001
```

## 3. Copia el archivo base a tu resolucion

Ejemplo:

```bash
mkdir -p ejercicios/ejercicio-001/resoluciones/juan-perez
cp ejercicios/ejercicio-001/codigo/scoreboard.js ejercicios/ejercicio-001/resoluciones/juan-perez/scoreboard.js
```

## 4. Depura

Ejecuta el test, lee el error, corrige y vuelve a ejecutar.

```bash
npm test -- ejercicios/ejercicio-001/tests/scoreboard.test.js
```

## 5. Documenta tu razonamiento

Agrega un README corto dentro de tu carpeta explicando:

- Que fallaba.
- Como lo encontraste.
- Que cambiaste.
- Como validaste.

## 6. Commit y push

```bash
git add ejercicios/ejercicio-001/resoluciones/juan-perez/
git commit -m "fix(ejercicio-001): corrige suma de puntos del ranking"
git push origin juan-perez/ejercicio-001
```

## 7. Pull Request

Abre PR hacia `dev`. Nunca hacia `main`.
