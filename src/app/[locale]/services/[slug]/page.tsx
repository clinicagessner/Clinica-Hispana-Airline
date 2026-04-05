import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Phone,
  MapPin,
  Stethoscope,
  FirstAid,
  Flask,
  Heartbeat,
  Drop,
  Heart,
  GenderFemale,
  Syringe,
  Clipboard,
  Virus,
  Lightning,
  TestTube,
  ShieldCheck,
  FileText,
  Wind,
  Truck,
  Scissors,
  Users,
  Bone,
  Monitor,
  Pulse,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SERVICES, SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";
import { getLocalizedService } from "@/lib/utils";
import { JsonLdBreadcrumb, JsonLdMedicalProcedure } from "@/components/seo/json-ld";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  FirstAid,
  Flask,
  Heartbeat,
  Drop,
  Heart,
  GenderFemale,
  Syringe,
  Clipboard,
  Virus,
  Lightning,
  TestTube,
  Activity: Pulse,
  ShieldCheck,
  Shield: ShieldCheck,
  FileText,
  Wind,
  Truck,
  Scissors,
  Users,
  Bone,
  Monitor,
};

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  const locales = ["es", "en"];
  return locales.flatMap((locale) =>
    SERVICES.map((service) => ({
      locale,
      slug: service.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const rawService = SERVICES.find((s) => s.slug === slug);

  if (!rawService) {
    return {
      title: "Servicio no encontrado",
    };
  }

  const service = getLocalizedService(rawService, locale);
  const localePath = locale === "en" ? "/en" : "";

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}${localePath}/services/${slug}`,
      languages: {
        es: `/services/${slug}`,
        en: `/en/services/${slug}`,
      },
    },
    openGraph: {
      title: `${service.title} | ${SITE_CONFIG.name}`,
      description: service.description,
      url: `${SITE_CONFIG.baseUrl}${localePath}/services/${slug}`,
      images: [
        {
          url: `${SITE_CONFIG.baseUrl}${service.image}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug, locale } = await params;

  // Enable static rendering for this page
  setRequestLocale(locale);

  const t = await getTranslations("services");
  const rawService = SERVICES.find((s) => s.slug === slug);

  if (!rawService) {
    notFound();
  }

  const service = getLocalizedService(rawService, locale);
  const IconComponent = iconMap[service.icon] || Stethoscope;

  // Get related services (same category, excluding current)
  const relatedServices = SERVICES.filter(
    (s) => s.category === rawService.category && s.id !== rawService.id
  ).slice(0, 3).map((s) => getLocalizedService(s, locale));

  const localePath = locale === "en" ? "/en" : "";
  const breadcrumbs = [
    { name: locale === "en" ? "Home" : "Inicio", url: `${SITE_CONFIG.baseUrl}${localePath}` },
    { name: locale === "en" ? "Services" : "Servicios", url: `${SITE_CONFIG.baseUrl}${localePath}/services` },
    { name: service.title, url: `${SITE_CONFIG.baseUrl}${localePath}/services/${service.slug}` },
  ];

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={`${service.title} - Servicio médico Clínica Hispana Airline Houston TX`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            {/* Back Link */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="size-4" weight="bold" />
              {t("backToServices")}
            </Link>

            <div className="max-w-2xl">
              {/* Category Badge */}
              <Badge className="mb-4 bg-red-primary/90 hover:bg-red-primary text-white border-0">
                <IconComponent className="size-3.5 mr-1.5" weight="fill" />
                {service.category === "especial" ? "Servicio Principal" :
                 service.category === "diagnostico" ? "Diagnóstico" :
                 service.category === "especialidad" ? "Especialidad" :
                 service.category === "mujer" ? "Salud de la Mujer" :
                 "Servicio Médico"}
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 drop-shadow-lg">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-white/90 mb-6">
                {service.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="gap-2 bg-red-primary hover:bg-red-dark shadow-lg">
                  <a href={`tel:${CONTACT_INFO.phone}`}>
                    <Phone className="size-5" weight="fill" />
                    {t("callNow")}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-white/10 border-white/30 text-white hover:bg-white hover:text-slate-dark"
                >
                  <a
                    href={CONTACT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="size-5" weight="fill" />
                    {t("getDirections")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div
                className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-slate-dark prose-a:text-red-primary prose-strong:text-slate-dark prose-li:text-slate-600"
                dangerouslySetInnerHTML={{ __html: parseServiceContent(service.longDescription) }}
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-dark mb-8 text-center">
              {t("included")}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all"
                >
                  <div className="size-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <CheckCircle className="size-5" weight="fill" />
                  </div>
                  <span className="text-slate-dark font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-10 bg-red-primary">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-1">
                  ¿Listo para agendar su cita?
                </h3>
                <p className="text-white/90">
                  Llámenos ahora o visítenos sin cita previa
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-white text-red-primary hover:bg-white/90"
                >
                  <a href={`tel:${CONTACT_INFO.phone}`}>
                    <Phone className="size-5" weight="fill" />
                    {CONTACT_INFO.phoneFormatted}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-dark mb-8 text-center">
                Servicios Relacionados
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {relatedServices.map((related) => {
                  const RelatedIcon = iconMap[related.icon] || Stethoscope;
                  return (
                    <Link
                      key={related.id}
                      href={`/services/${related.slug}`}
                      className="group block"
                    >
                      <article className="relative h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-red-200">
                        <div className="relative h-32 overflow-hidden">
                          <Image
                            src={related.image}
                            alt={`${related.title} - Clínica Hispana Airline Houston`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                          <div className="absolute bottom-3 left-3">
                            <div className="size-9 rounded-lg bg-white/95 backdrop-blur-sm text-red-primary flex items-center justify-center shadow-md">
                              <RelatedIcon className="size-5" weight="duotone" />
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-heading font-bold text-slate-dark mb-1.5 group-hover:text-red-primary transition-colors">
                            {related.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                            {related.description}
                          </p>
                          <span className="inline-flex items-center gap-1 text-red-primary font-medium text-sm group-hover:gap-2 transition-all">
                            {t("learnMore")}
                            <ArrowRight className="size-4" weight="bold" />
                          </span>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <JsonLdBreadcrumb items={breadcrumbs} />
      <JsonLdMedicalProcedure
        name={service.title}
        description={service.description}
        image={service.image}
        url={`${SITE_CONFIG.baseUrl}${localePath}/services/${service.slug}`}
      />
    </>
  );
}

function parseServiceContent(content: string): string {
  let html = content
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/\n\n/gim, '</p><p>')
    .replace(/\n/gim, '<br>');

  html = `<p>${html}</p>`;

  html = html
    .replace(/<p><li>/g, '<ul><li>')
    .replace(/<\/li><\/p>/g, '</li></ul>')
    .replace(/<\/li><br><li>/g, '</li><li>')
    .replace(/<br><ul>/g, '</p><ul>')
    .replace(/<\/ul><br>/g, '</ul><p>')
    .replace(/<p><\/p>/g, '');

  return html;
}
