import { SITE_CONFIG, CONTACT_INFO, SERVICES, SOCIAL_LINKS, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";

/**
 * Nodo de la clínica. `full` solo en la home: lleva rating, catálogo completo y
 * todos los datos de la ficha. El resto de páginas emiten `light`, que es el
 * mismo `@id` con lo mínimo para enlazar la entidad.
 *
 * Lo emite cada página, nunca un layout: si el layout pone uno y la página otro,
 * salen dos nodos con el mismo `@id` y Google se queda con el pobre.
 */
export async function JsonLdMedicalClinic({
  variant = "light",
}: {
  variant?: "full" | "light";
} = {}) {
  if (variant === "light") return <JsonLdClinicLight />;

  const googleData = await getGooglePlaceData();
  const ratingValue = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const reviewCount = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.baseUrl,
        telephone: CONTACT_INFO.phone,
        email: CONTACT_INFO.email,
        image: `${SITE_CONFIG.baseUrl}/images/clinic-interior.webp`,
        logo: `${SITE_CONFIG.baseUrl}/images/logo.webp`,
        priceRange: "$$",
        currenciesAccepted: "USD",
        // Atributos confirmados por el cliente desde la ficha de Google
        // (2026-09-21). El garaje gratuito está marcado como NO disponible y
        // por eso no aparece aquí.
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Estacionamiento en el lugar", value: true },
          { "@type": "LocationFeatureSpecification", name: "Estacionamiento gratuito", value: true },
          { "@type": "LocationFeatureSpecification", name: "Estacionamiento gratuito en la calle", value: true },
          { "@type": "LocationFeatureSpecification", name: "Entrada accesible para silla de ruedas", value: true },
          { "@type": "LocationFeatureSpecification", name: "Estacionamiento accesible para silla de ruedas", value: true },
          { "@type": "LocationFeatureSpecification", name: "Sanitarios accesibles para silla de ruedas", value: true },
          { "@type": "LocationFeatureSpecification", name: "Sanitarios", value: true },
          { "@type": "LocationFeatureSpecification", name: "No se requiere cita", value: true },
        ],
        // El nombre tal cual figura en la ficha de Google, sin tildes.
        alternateName: "Clinica Hispana Airline",
        paymentAccepted: "Cash, Credit Card, Debit Card",
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT_INFO.address,
          addressLocality: CONTACT_INFO.city,
          addressRegion: CONTACT_INFO.state,
          postalCode: CONTACT_INFO.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CONTACT_INFO.coordinates.lat,
          longitude: CONTACT_INFO.coordinates.lng,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue,
          reviewCount,
          bestRating: 5,
          worstRating: 1,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "09:00",
            closes: "21:00",
          },
        ],
        availableLanguage: [
          {
            "@type": "Language",
            name: "Spanish",
            alternateName: "es",
          },
          {
            "@type": "Language",
            name: "English",
            alternateName: "en",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios Médicos",
          // Los 29, no una muestra: el catálogo es lo que Google lee para saber
          // qué se ofrece aquí.
          itemListElement: [...SERVICES]
            .sort((a, b) => a.order - b.order)
            .map((service, index) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                "@id": `${SITE_CONFIG.baseUrl}/services/${service.slug}#procedure`,
                name: service.title,
                description: service.description,
                url: `${SITE_CONFIG.baseUrl}/services/${service.slug}`,
              },
              position: index + 1,
            })),
        },
        sameAs: [
          SOCIAL_LINKS.facebook,
          SOCIAL_LINKS.instagram,
          SOCIAL_LINKS.x,
          SOCIAL_LINKS.linkedin,
          SOCIAL_LINKS.google,
        ].filter(Boolean),
        // Los barrios son los que el propio sitio ya publica en cada servicio
        // ("Áreas que servimos"). Pendiente de completar con las zonas de
        // servicio de la ficha de Google cuando llegue el volcado del cliente.
        areaServed: [
          {
            "@type": "City",
            name: "Houston",
            "@id": "https://www.wikidata.org/wiki/Q16555",
          },
          ...[
            "Northside",
            "Independence Heights",
            "Lindale Park",
            "Near Northside",
            "Acres Homes",
            "Northline",
          ].map((name) => ({
            "@type": "Place",
            name: `${name}, Houston, TX`,
          })),
        ],
        // Solo valores válidos de MedicalSpecialty y solo los que no afirman un
        // titulado. "Gynecology" e "Immigration Medical Exam" salieron de aquí:
        // el segundo ni siquiera es un valor de schema.org y el primero necesita
        // confirmación escrita del cliente (§9 del playbook).
        medicalSpecialty: ["PrimaryCare", "PublicHealth"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.baseUrl}/#website`,
        url: SITE_CONFIG.baseUrl,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: {
          "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        },
        inLanguage: ["es-MX", "en-US"],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.baseUrl}/#webpage`,
        url: SITE_CONFIG.baseUrl,
        name: SITE_CONFIG.name,
        isPartOf: {
          "@id": `${SITE_CONFIG.baseUrl}/#website`,
        },
        about: {
          "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        },
        description: SITE_CONFIG.description,
        inLanguage: "es-MX",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function JsonLdFAQ({ questions }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function JsonLdBreadcrumb({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface MedicalProcedureSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  bodyLocation?: string;
  procedureType?: string;
}

export function JsonLdMedicalProcedure({
  name,
  description,
  image,
  url,
  bodyLocation,
  procedureType = "NoninvasiveProcedure",
}: MedicalProcedureSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${url}#procedure`,
    name,
    description,
    image: `${SITE_CONFIG.baseUrl}${image}`,
    url,
    procedureType: `https://schema.org/${procedureType}`,
    ...(bodyLocation && { bodyLocation }),
    howPerformed: description,
    // Solo la referencia: repetir aquí los datos de la clínica creaba un segundo
    // nodo MedicalClinic con el mismo @id en cada página de servicio.
    provider: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdCollectionPage({ name, description, url }: { name: string; description: string; url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: {
      "@id": `${SITE_CONFIG.baseUrl}/#website`,
    },
    about: {
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    },
    // Referencia, no un nodo: con "@type" aquí salía un segundo MedicalClinic
    // con el mismo @id en /blog, /services y /promociones.
    provider: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Nodo mínimo con el mismo `@id` que el completo de la home: identifica la
 * entidad en las páginas interiores sin repetir rating ni catálogo.
 */
function JsonLdClinicLight() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.baseUrl,
    telephone: CONTACT_INFO.phone,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.baseUrl}${SITE_CONFIG.logoUrl}`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.address,
      addressLocality: CONTACT_INFO.city,
      addressRegion: CONTACT_INFO.state,
      postalCode: CONTACT_INFO.zip,
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * `MedicalWebPage` de una página de servicio, con la fecha de última revisión
 * y quién la revisó. `reviewedBy` apunta por `@id` al nodo de la clínica: sin
 * médico nombrado, el revisor es la organización (§9).
 */
export function JsonLdMedicalWebPage({
  url,
  name,
  description,
  lastReviewed,
  locale,
}: {
  url: string;
  name: string;
  description: string;
  lastReviewed: string;
  locale: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: locale === "es" ? "es-MX" : "en-US",
    lastReviewed,
    reviewedBy: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
    about: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
    isPartOf: { "@id": `${SITE_CONFIG.baseUrl}/#website` },
    mainEntity: { "@id": `${url}#procedure` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
