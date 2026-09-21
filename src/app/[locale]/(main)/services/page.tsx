import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ServicesFilter } from "@/components/services/services-filter";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { getLocalizedService } from "@/lib/utils";
import { seoTitle, seoDescription, buildSocial } from "@/lib/seo";
import {
  JsonLdMedicalClinic,
  JsonLdCollectionPage,
} from "@/components/seo/json-ld";

const categoryInfo: Record<string, { label: string; labelEn: string; iconName: string }> = {
  "medicina-general": { label: "Medicina general", labelEn: "General medicine", iconName: "Stethoscope" },
  "salud-mujer": { label: "Salud de la mujer", labelEn: "Women's health", iconName: "GenderFemale" },
  examenes: { label: "Exámenes y certificados", labelEn: "Exams & certificates", iconName: "Clipboard" },
  laboratorio: { label: "Laboratorio y pruebas", labelEn: "Lab & testing", iconName: "TestTube" },
  tratamientos: { label: "Tratamientos", labelEn: "Treatments", iconName: "Syringe" },
};

const categoryOrder = ["medicina-general", "salud-mujer", "examenes", "laboratorio", "tratamientos"];

type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const localePath = locale === "en" ? "/en" : "";

  const url = `${SITE_CONFIG.baseUrl}${localePath}/services`;
  const title = seoTitle(t("title"));
  const description = seoDescription(
    locale === "en"
      ? "Medical services in Houston TX: family medicine, I-693 exams, lab tests, gynecology, ultrasound and DOT physicals. Walk-ins, Spanish-speaking staff."
      : "Servicios médicos en Houston TX: medicina familiar, exámenes I-693, laboratorio, ginecología, ultrasonido y examen DOT. Sin cita previa y en español."
  );

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: "/services",
        en: "/en/services",
      },
    },
    ...buildSocial({
      title,
      description,
      url,
      image: "/images/clinic-interior.webp",
      imageAlt: t("title"),
      locale,
    }),
  };
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("services");

  const categories = categoryOrder.map((id) => ({
    id,
    label: locale === "en" ? categoryInfo[id].labelEn : categoryInfo[id].label,
    iconName: categoryInfo[id].iconName,
  }));

  const sortedServices = [...SERVICES].sort((a, b) => a.order - b.order).map((s) => getLocalizedService(s, locale));

  const localePath = locale === "en" ? "/en" : "";

  return (
    <>
      <JsonLdMedicalClinic />
      <JsonLdCollectionPage
        name={t("title")}
        description={t("subtitle")}
        url={`${SITE_CONFIG.baseUrl}${localePath}/services`}
      />
      <main className="min-h-screen bg-background">
        {/* Hero Header */}
        <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-red-primary via-red-dark to-slate-900" />
          <div className="absolute inset-0 bg-[url('/images/clinic-interior.webp')] bg-cover bg-center opacity-10" />

          <div className="container relative z-10 mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 drop-shadow-lg">
                {t("title")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                {t("subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Services with Filter */}
        <ServicesFilter services={sortedServices} categories={categories} />
      </main>
    </>
  );
}
