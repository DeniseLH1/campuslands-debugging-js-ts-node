# Campuslands Debugging JS TS Node

Repositorio educativo para aprender a depurar errores reales en JavaScript, TypeScript y APIs REST con Node.js.

El objetivo no es copiar soluciones. El objetivo es aprender a leer errores, reproducir fallos, aislar causas, corregir con criterio y validar con pruebas.

## Que vas a practicar

- Lectura de mensajes de error.
- Uso de tests para reproducir bugs.
- Depuracion con hipotesis.
- Correccion de funciones JavaScript.
- Correccion de tipos y contratos TypeScript.
- Correccion de endpoints REST con Node.js y Express.
- Manejo correcto de status HTTP, validaciones, errores y datos.
- Git profesional con ramas, commits claros y pull requests hacia `dev`.

## Estructura

```text
campuslands-debugging-js-ts-node/
+-- README.md
+-- CONTRIBUTING.md
+-- package.json
+-- tsconfig.json
+-- docs/
|   +-- FLUJO-DE-TRABAJO.md
|   +-- GUIA-DE-DEBUGGING.md
|   +-- GUIA-PARA-MAESTROS.md
+-- scripts/
|   +-- validar-estructura.js
+-- ejercicios/
    +-- ejercicio-001/
    |   +-- README.md
    |   +-- codigo/
    |   +-- tests/
    |   +-- resoluciones/
    |       +-- .gitkeep
    +-- ...
```

## Niveles

Los ejercicios van del `001` al `050`. La dificultad sube de manera progresiva:

- `001-018`: JavaScript y logica de depuracion.
- `019-034`: TypeScript, tipos, contratos y datos.
- `035-050`: APIs REST con Node.js y Express.

## Instalacion

```bash
git clone https://github.com/anndreloopez012/campuslands-debugging-js-ts-node.git
cd campuslands-debugging-js-ts-node
npm install
```

## Como resolver un ejercicio

1. Crea tu rama desde `dev`.
2. Lee el README del ejercicio.
3. Ejecuta el test del ejercicio.
4. Observa el error.
5. Formula una hipotesis.
6. Copia el codigo base dentro de `resoluciones/tu-nombre/` y corrige ahi.
7. Ejecuta nuevamente el test o replica el caso con tu archivo.
8. Haz commit con mensaje profesional.
9. Sube tu rama y abre PR hacia `dev`.

Ejemplo:

```bash
git checkout dev
git pull origin dev
git checkout -b nombre-apellido/ejercicio-001
npm test -- ejercicios/ejercicio-001/tests/scoreboard.test.js
```

## Regla de entrega

Cada alumno debe crear una carpeta propia dentro de `resoluciones/` del ejercicio correspondiente.

Formato correcto:

```text
ejercicios/ejercicio-001/resoluciones/juan-perez/scoreboard.js
```

No se acepta:

```text
ejercicios/ejercicio-001/resoluciones/scoreboard.js
ejercicios/ejercicio-001/juan-perez.js
```

## Ramas principales

- `main`: produccion academica. No se trabaja directo aqui.
- `dev`: integracion de ejercicios revisados.
- Ramas de alumnos: `nombre-apellido/ejercicio-000`.

Todo PR de alumno debe apuntar a `dev`.

## Validacion de estructura

```bash
npm run validar:estructura
```

Este comando revisa que cada ejercicio mantenga README, carpeta de codigo, tests y carpeta de resoluciones.
