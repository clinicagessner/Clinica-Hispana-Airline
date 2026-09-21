/**
 * Miniatura de un flyer de promoción.
 *
 * `images.unoptimized` está activado (cuota 402 de Vercel), así que Next sirve
 * el archivo tal cual y `sizes` no genera variantes. Las miniaturas las produce
 * `scripts/build-image-variants.mjs` en el prebuild. El original se reserva
 * para el diálogo, que es donde el flyer se lee.
 */
export function promoThumb(src: string): string {
  return src.replace(
    /^\/images\/promotions\/([^/]+)\.[^.]+$/,
    "/images/promotions/sm/$1.webp"
  );
}
