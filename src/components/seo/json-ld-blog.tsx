import { SITE_CONFIG } from "@/lib/constants";
import type { BlogPost } from "@/types";

type Props = {
  post: BlogPost;
  locale: string;
};

export function JsonLdBlogPosting({ post, locale }: Props) {
  const url = `${SITE_CONFIG.baseUrl}/${locale}/blog/${post.slug}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: post.title,
    description: post.description,
    image: post.image
      ? `${SITE_CONFIG.baseUrl}${post.image}`
      : `${SITE_CONFIG.baseUrl}/images/og-image.jpg`,
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_CONFIG.baseUrl,
    },
    // Referencia al nodo de la clínica que emite la propia página: antes era un
    // MedicalClinic anónimo, o sea una segunda entidad para Google.
    publisher: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
    // Sin médico nombrado, el revisor es la organización (§9 del playbook).
    reviewedBy: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
    lastReviewed: post.dateModified || post.date,
    inLanguage: locale === "es" ? "es-MX" : "en-US",
    wordCount: post.content.split(/\s+/).length,
    articleSection: post.category || "Salud",
    keywords: post.keywords?.length
      ? post.keywords.join(", ")
      : [
          "clínica hispana Houston",
          "salud",
          "medicina familiar Houston",
          post.category?.toLowerCase() || "salud",
        ].join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "es" ? "Inicio" : "Home",
        item: SITE_CONFIG.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_CONFIG.baseUrl}/${locale}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
