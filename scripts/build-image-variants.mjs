// Genera variantes reducidas de las imágenes que se muestran pequeñas.
//
// Por qué: `images.unoptimized` está activado (la cuota de Image Optimization
// de Vercel devuelve 402), así que Next sirve el archivo original y el atributo
// `sizes` **no hace nada**. Sin variantes físicas, el móvil se descarga el
// archivo pensado para escritorio.
//
// Qué se reduce y qué no:
//   - Flyers de promoción: en carrusel y rejilla se ven a ~344 px. El diálogo
//     usa el original, que es donde el flyer se lee.
//   - Imágenes de servicio: en las tarjetas se ven a ~33vw. La página de
//     detalle las usa con `sizes="100vw"`, así que ahí va el original.
//   - Logo: se muestra a 192 px como máximo y el archivo es de 600 px.
//
// Uso: node scripts/build-image-variants.mjs   (corre en `prebuild`)
import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const kb = (n) => Math.round(n / 1024);

/** Genera `<dir>/sm/<nombre>.webp` a `width` px para cada imagen de `dir`. */
async function variants(dir, width, { quality = 78 } = {}) {
  const out = path.join(dir, "sm");
  const files = (await readdir(dir)).filter((f) => /\.(webp|png|jpe?g)$/i.test(f));
  await mkdir(out, { recursive: true });

  let before = 0;
  let after = 0;
  for (const f of files) {
    const from = path.join(dir, f);
    const to = path.join(out, f.replace(/\.[^.]+$/, ".webp"));
    await sharp(from)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(to);
    before += (await stat(from)).size;
    after += (await stat(to)).size;
  }
  const pct = before ? Math.round((1 - after / before) * 100) : 0;
  console.log(
    `  ${path.basename(dir).padEnd(12)} ${String(files.length).padStart(3)} img  ` +
      `${String(kb(before)).padStart(5)} KB -> ${String(kb(after)).padStart(5)} KB  (${pct}% menos)`
  );
}

console.log("variantes de imagen:");
// 480 px cubre 344 px de ancho real en pantallas densas
await variants("public/images/promotions", 480);
// 768 px cubre 33vw en escritorio y 100vw en móvil dentro de una tarjeta
await variants("public/images/services", 768);
// el logo se muestra a 192 px como máximo
await variants("public/images", 384, { quality: 85 });
