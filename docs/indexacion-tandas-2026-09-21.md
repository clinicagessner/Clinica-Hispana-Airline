# Tandas de indexación — Airline

Actualizado el 2026-09-21 tras cerrar B3. Search Console permite ~10 peticiones
al día por propiedad.

**Orden:** primero reenviar `sitemap.xml` (ya lleva `lastmod` 2026-09-21 en 78 de
86 URLs), después pedir indexación una a una con la inspección de URLs.

## Tanda 1 — hoy

Las cuatro que estaban bloqueadas más las seis con más impresiones, que ahora
tienen contenido propio recién escrito.

```
https://www.clinicahispanaairline.com/services/infecciones-urinarias
https://www.clinicahispanaairline.com/en/services/examenes-inmigracion
https://www.clinicahispanaairline.com/services/tiroides
https://www.clinicahispanaairline.com/services/farmacia
https://www.clinicahispanaairline.com/services/ultrasonido
https://www.clinicahispanaairline.com/services/examenes-inmigracion
https://www.clinicahispanaairline.com/blog/laboratorio-clinico-houston-analisis-sangre
https://www.clinicahispanaairline.com/en/blog/atencion-medica-sin-seguro-houston
https://www.clinicahispanaairline.com/en/blog/guia-examen-medico-inmigracion-i693-houston
https://www.clinicahispanaairline.com/blog/examen-dot-cdl-camioneros-houston
```

| URL | Por qué está en esta tanda |
|---|---|
| `/services/infecciones-urinarias` | Google **no conocía la URL**. 24 impresiones pese a ello |
| `/en/services/examenes-inmigracion` | Google **no conocía la URL** |
| `/services/tiroides` | Descubierta y **nunca rastreada** |
| `/services/farmacia` | Descubierta y nunca rastreada. Además su texto cambió por §9 |
| `/services/ultrasonido` | **3.591 impresiones**, posición 11-28. La página con más recorrido del sitio |
| `/services/examenes-inmigracion` | 1.962 impresiones |
| `/blog/laboratorio-clinico...` | **2.526 impresiones** y era el texto más duplicado (96,6 %) |
| `/en/blog/atencion-medica-sin-seguro...` | 1.490 impresiones |
| `/en/blog/guia-examen-medico-inmigracion...` | 1.345 impresiones |
| `/blog/examen-dot-cdl-camioneros...` | 1.056 impresiones |

## Tanda 2 — mañana

Las inglesas que Google rastreó y descartó. Ahora tienen enlaces entrantes
propios (B1-b), contenido propio (B3) y `x-default`.

```
https://www.clinicahispanaairline.com/en/blog/examen-dot-cdl-camioneros-houston
https://www.clinicahispanaairline.com/en/blog/salud-mujer-houston-servicios-ginecologia
https://www.clinicahispanaairline.com/en/blog/bienvenidos-clinica-hispana-airline
https://www.clinicahispanaairline.com/en/services/condiciones-cronicas
https://www.clinicahispanaairline.com/en/services/anticonceptivos
https://www.clinicahispanaairline.com/en/services/extraccion-implantes
https://www.clinicahispanaairline.com/en/services/infecciones-urinarias
https://www.clinicahispanaairline.com/en/blog
https://www.clinicahispanaairline.com/blog/atencion-medica-sin-seguro-houston
https://www.clinicahispanaairline.com/services/electrocardiograma
```

## Tanda 3 — pasado mañana

El resto de servicios reescritos, por impresiones: `examenes-sangre`,
`condiciones-cronicas`, `ginecologia`, `enfermedades-respiratorias`,
`enfermedades-transmision-sexual`, `vacunas`, `alergias`, `drenaje-abscesos`,
`examen-fisico-escolar`, `prueba-embarazo`.

## No gastar peticiones en

`/en/privacy` y `/privacy`: páginas legales sin valor de búsqueda.

## Después

A las 2 semanas, volver a medir y comparar con la línea base:

```
node ~/Projects/clinicas/playbook/toolkit/gsc-fetch.mjs airline "https://www.clinicahispanaairline.com/" 90
```

y comparar `index-status.json` con el de `seo-data/2026-09-18/`.
