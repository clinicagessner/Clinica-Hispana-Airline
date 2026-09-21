import type { MetadataRoute } from "next";
import { SERVICES, SITE_CONFIG, SERVICES_LAST_REVIEWED } from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import { locales } from "@/i18n/config";

type SitemapEntry = {
  url: string;
  lastModified: Date;
  alternates?: { languages: Record<string, string> };
};

// Fecha de la última edición **de contenido** de cada página estática, sacada
// del historial de git. Se actualiza en el mismo commit que cambia la página.
// Un `lastmod` con la fecha del build miente en cada despliegue y Google deja
// de fiarse de él justo cuando más falta hace, al reescribir el contenido.
const PAGE_DATES: Record<string, string> = {
  "": "2026-09-02", // carrusel de promociones
  "/services": "2026-09-21", // B3: descripciones del catálogo reescritas
  "/promociones": "2026-09-02",
  "/blog": "2026-09-21", // B3: los 9 posts reescritos
  "/privacy": "2026-05-05",
};


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.baseUrl;

  const createAlternates = (path: string) => ({
    languages: {
      es: `${baseUrl}${path}`,
      en: `${baseUrl}/en${path}`,
      "x-default": `${baseUrl}${path}`,
    },
  });

  const entry = (path: string, lastModified: Date): SitemapEntry[] =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === "es" ? "" : `/${locale}`}${path}`,
      lastModified,
      alternates: createAlternates(path),
    }));

  const staticRoutes = Object.entries(PAGE_DATES).flatMap(([path, date]) =>
    entry(path, new Date(date))
  );

  const serviceRoutes = SERVICES.flatMap((service) =>
    entry(
      `/services/${service.slug}`,
      new Date(service.dateModified ?? SERVICES_LAST_REVIEWED)
    )
  );

  const blogRoutes = getBlogPosts("es").flatMap((post) =>
    entry(`/blog/${post.slug}`, new Date(post.dateModified ?? post.date))
  );

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
