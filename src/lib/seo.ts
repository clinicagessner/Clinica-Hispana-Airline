import { SITE_CONFIG } from "@/lib/constants";

/** Marca tal cual va en los títulos. Lleva "Airline", que es la zona. */
export const BRAND = "Clínica Hispana Airline";

export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 155;

/** Corta en el último límite de palabra que quepa, sin dejar puntuación colgando. */
function trimToWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max + 1);
  const at = cut.lastIndexOf(" ");
  return cut.slice(0, at > 0 ? at : max).replace(/[\s,.;:–—-]+$/, "");
}

/**
 * Título con marca **si cabe en 60**. Si no cabe, manda la palabra clave: la
 * marca la añade Google desde el nodo `WebSite`, pero un título cortado a la
 * mitad lo reescribe él y se pierde el control.
 */
export function seoTitle(pageTitle: string, brand: string = BRAND): string {
  const title = pageTitle.trim();
  // Marca vacía = el título ya la lleva dentro (la home).
  if (!brand) return trimToWord(title, TITLE_MAX);
  const withBrand = `${title} | ${brand}`;
  if (withBrand.length <= TITLE_MAX) return withBrand;
  if (title.length <= TITLE_MAX) return title;
  return trimToWord(title, TITLE_MAX);
}

/** Descripción dentro de 155. Es una red de seguridad, no una excusa para no escribirlas. */
export function seoDescription(text: string, max: number = DESCRIPTION_MAX): string {
  return trimToWord(text.trim(), max);
}

type SocialInput = {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  locale?: string;
  publishedTime?: string;
  authors?: string[];
};

/**
 * `openGraph` y `twitter` completos. El `openGraph` de una página **reemplaza
 * entero** al del layout, así que si la página no pone imagen se queda sin
 * ninguna: por eso la imagen por defecto se resuelve aquí y no allí.
 */
export function buildSocial({
  title,
  description,
  url,
  image,
  imageAlt,
  type = "website",
  locale = "es",
  publishedTime,
  authors,
}: SocialInput) {
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${SITE_CONFIG.baseUrl}${image}`
    : `${SITE_CONFIG.baseUrl}/images/og-image.jpg`;

  return {
    openGraph: {
      type,
      locale: locale === "es" ? "es_MX" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_MX",
      siteName: SITE_CONFIG.name,
      title,
      description,
      url,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: imageAlt ?? title }],
      ...(publishedTime && { publishedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [imageUrl],
    },
  };
}
