# TerrenosQro

Página de venta de terrenos en Querétaro. HTML + CSS + JavaScript puro, sin frameworks ni compilación.

**Publicada en:** https://terrenos-qro-futuro.netlify.app/

Netlify está conectado a este repositorio: cada `git push` a `main` publica la página sola en 1–2 minutos.

## Estructura

```
index.html          Página (secciones y contenedores vacíos)
css/styles.css      Estilos
js/main.js          Datos de los terrenos + toda la interacción
images/<terreno>/   Fotos y plano de cada terreno (foto-1.webp, foto-2.webp, plano.webp)
images/compartir.jpg  Imagen que aparece al compartir el link en WhatsApp/Facebook
docs/<terreno>.pdf  Plano en PDF
```

## Cómo editar los terrenos

Todo se edita en **un solo lugar**: la lista `terrenos` al inicio de `js/main.js`.
Las tarjetas, las opciones del formulario, los mapas de la sección *Ubicación* y la ventana de detalles se generan solos a partir de ella.

- **Cambiar un precio:** cambia `tarjeta.precio` (lo que se ve en la tarjeta y el formulario) y la línea del precio en `caracteristicas` (la ventana de detalles).
- **Quitar un terreno:** borra su bloque `{ ... }` de la lista. Luego borra su carpeta en `images/` y su PDF en `docs/`.
- **Agregar un terreno:**
  1. Crea la carpeta `images/<id>/` con `foto-1.webp`, `foto-2.webp`, ... y, si tiene, `plano.webp`.
  2. Copia un bloque existente en la lista, cambia `id` (igual que el nombre de la carpeta), `fotos` (cuántas hay), `plano` (`true`/`false`) y los textos.
  3. `categoria: 'propio'` lo pone en *Mis terrenos*; `categoria: 'otro'` en *Otros proyectos*.

Si no queda ningún terreno con `categoria: 'otro'`, la sección *Otros proyectos* se oculta sola.

## Ver la página en tu computadora

Las tarjetas se generan con JavaScript, así que funciona con doble clic en `index.html`. Si algo no carga, usa un servidor local:

```bash
python -m http.server 5500
```

y abre http://localhost:5500
