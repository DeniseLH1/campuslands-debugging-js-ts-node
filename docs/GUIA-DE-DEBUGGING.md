# Guia de debugging

Debuguear no es adivinar. Es seguir evidencia.

## Metodo recomendado

1. Reproduce el error.
2. Lee el mensaje completo.
3. Ubica archivo, linea y test que falla.
4. Escribe una hipotesis concreta.
5. Revisa datos de entrada y salida esperada.
6. Corrige lo minimo necesario.
7. Ejecuta el test otra vez.
8. Explica la causa real.

## Preguntas que debes hacerte

- Que esperaba el test?
- Que recibio realmente?
- El error es de tipo, logica, async, HTTP o estructura?
- El dato llega bien a la funcion?
- El problema nace en la entrada, transformacion o salida?

## Tipos de errores que practicaras

- Variables mal nombradas.
- Condiciones invertidas.
- Mutacion de arreglos u objetos.
- Ordenamientos incorrectos.
- Conversiones de tipo.
- Promesas no esperadas.
- Status HTTP incorrectos.
- Validaciones incompletas.
- Contratos TypeScript mal definidos.
- Errores centralizados mal manejados.
