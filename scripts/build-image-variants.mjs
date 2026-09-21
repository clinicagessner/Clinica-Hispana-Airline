// Genera variantes reducidas de los flyers de promociones.
//
// Por qué: `images.unoptimized` está activado (la cuota de Image Optimization
// de Vercel devuelve 402), así que Next sirve el archivo original y el atributo
// `sizes` no hace nada. En el carrusel de la home los 9 flyers de 1080x1350
// (~100 KB cada uno) se descargaban enteros para mostrarse a ~344 px: ~900 KB
// antes del LCP. El diálogo sigue usando el original, que es donde se lee.
//
// Uso: node scripts/build-image-variants.mjs   (corre en `prebuild`)
import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC = "public/images/promotions";
const OUT = path.join(SRC, "sm");
const WIDTH = 480; // 344 px de ancho real x1.4 de margen para pantallas densas

const files = (await readdir(SRC)).filter((f) => /\.(webp|png|jpe?g)$/i.test(f));
await mkdir(OUT, { recursive: true });

let before = 0;
let after = 0;

for (const f of files) {
  const from = path.join(SRC, f);
  const to = path.join(OUT, f.replace(/\.[^.]+$/, ".webp"));
  await sharp(from)
    .resize({ width: WIDTH, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(to);
  before += (await stat(from)).size;
  after += (await stat(to)).size;
}

const kb = (n) => Math.round(n / 1024);
console.log(
  `variantes: ${files.length} flyers  ${kb(before)} KB -> ${kb(after)} KB ` +
    `(${Math.round((1 - after / before) * 100)}% menos)`
);
