# Tandas de indexación — Airline, 2026-09-21

Search Console permite ~10 peticiones de indexación al día por propiedad.
**Primero reenviar `sitemap.xml`**, después pedir indexación una a una con la
herramienta de inspección de URLs.

Origen: `index-status.json` de `seo-data/2026-09-18/` (14 URLs sin indexar de 86)
cruzado con las impresiones de los últimos 90 días.

## Tanda 1 — hoy

Las diez donde **el arreglo ya está en producción**: enlaces entrantes propios
(B1-b), metadatos dentro de límite (B1-a) y `x-default`.

```
https://www.clinicahispanaairline.com/services/infecciones-urinarias
https://www.clinicahispanaairline.com/en/services/examenes-inmigracion
https://www.clinicahispanaairline.com/services/tiroides
https://www.clinicahispanaairline.com/services/farmacia
https://www.clinicahispanaairline.com/en/blog/examen-dot-cdl-camioneros-houston
https://www.clinicahispanaairline.com/en/blog/salud-mujer-houston-servicios-ginecologia
https://www.clinicahispanaairline.com/en/blog/bienvenidos-clinica-hispana-airline
https://www.clinicahispanaairline.com/en/services/condiciones-cronicas
https://www.clinicahispanaairline.com/en/services/anticonceptivos
https://www.clinicahispanaairline.com/en/services/extraccion-implantes
```

## Tanda 2 — mañana

```
https://www.clinicahispanaairline.com/en/services/infecciones-urinarias
https://www.clinicahispanaairline.com/en/blog
```

## No pedir todavía

| URL | Por qué |
|---|---|
| `/blog/atencion-medica-sin-seguro-houston` | Rastreada y descartada. Su problema es contenido duplicado con las clínicas hermanas, y eso solo lo arregla B3. Pedirla ahora gasta una petición sin cambiar la causa |
| `/en/privacy` | Página legal, sin valor de búsqueda. No merece una de las 10 |

## Después

Repetir la inspección a las 2 semanas: `node toolkit/gsc-fetch.mjs airline "https://www.clinicahispanaairline.com/" 90`
y comparar `index-status.json` con el del 2026-09-18.
