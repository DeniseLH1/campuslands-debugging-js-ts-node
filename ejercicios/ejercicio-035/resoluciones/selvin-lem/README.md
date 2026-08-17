# Ejercicio 035

## Error #1 — Comparación de tipos en búsqueda por ID

**Qué fallaba:**
El endpoint `GET /items/:id` no encontraba ningún registro, incluso cuando el id sí existía en el arreglo. Además, cuando no encontraba el item, respondía con status `200` en lugar de `404`.

**Cómo lo encontré:**
El test esperaba `found.body.name` igual a `'alpha'`, pero recibió `undefined`. Revisando el código encontré que se comparaba `current.id === req.params.id`. En Express, todo lo que llega en `req.params` es siempre de tipo `string`, mientras que los `id` del arreglo `items` son de tipo `number`. Con `===` (igualdad estricta), `1 === "1"` da `false`, así que `.find()` nunca encontraba coincidencia. También noté que el manejo de "no encontrado" devolvía `res.status(200)` en vez de `404`, contradiciendo el nombre del test.

**Qué cambié:**
Convertí `req.params.id` a número antes de comparar, y corregí el status de respuesta cuando el item no existe.

    app.get('/items/:id', (req, res) => {
      const item = items.find(current => current.id === Number(req.params.id));
      if (!item) return res.status(404).json({ error: 'not found' });
      return res.json(item);
    });

**Cómo lo validé:**
Ejecuté nuevamente el test y comprobé que la prueba "busca item por id numerico y devuelve 404 si no existe" pasó correctamente.