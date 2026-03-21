import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { ServicesFilter } from "@/components/services/services-filter";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";

const categoryInfo: Record<string, { label: string; labelEn: string; iconName: string }> = {
  especial: { label: "Especiales", labelEn: "Special", iconName: "Star" },
  especialidad: { label: "Especialidades", labelEn: "Specialties", iconName: "Stethoscope" },
  diagnostico: { label: "Diagnóstico", labelEn: "Diagnostics", iconName: "TestTube" },
  mujer: { label: "Salud Mujer", labelEn: "Women's Health", iconName: "GenderFemale" },
};

const categoryOrder = ["especial", "diagnostico", "mujer", "especialidad"];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("services");

  return {
    title: t("title"),
    description: `${t("subtitle")} - ${SITE_CONFIG.name}`,
    openGraph: {
      title: t("title"),
      description: t("subtitle"),
    },
  };
}

export default async function ServicesPage() {
  // Parallel fetching - eliminates waterfall
  const [t, locale] = await Promise.all([
    getTranslations("services"),
    getLocale()
  ]);

  const categories = categoryOrder.map((id) => ({
    id,
    label: locale === "en" ? categoryInfo[id].labelEn : categoryInfo[id].label,
    iconName: categoryInfo[id].iconName,
  }));

  const sortedServices = [...SERVICES].sort((a, b) => a.order - b.order);

  return (
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
  );
}
