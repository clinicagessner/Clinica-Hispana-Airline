import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
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
import { JsonLdBreadcrumb } from "@/components/seo/json-ld";

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
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Servicio no encontrado",
    };
  }

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: `${service.title} | ${SITE_CONFIG.name}`,
      description: service.description,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  // Parallel fetching - eliminates waterfall
  const [{ slug }, t] = await Promise.all([
    params,
    getTranslations("services")
  ]);

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.icon] || Stethoscope;

  // Get related services (same category, excluding current)
  const relatedServices = SERVICES.filter(
    (s) => s.category === service.category && s.id !== service.id
  ).slice(0, 3);

  const breadcrumbs = [
    { name: "Inicio", url: SITE_CONFIG.baseUrl },
    { name: "Servicios", url: `${SITE_CONFIG.baseUrl}/services` },
    { name: service.title, url: `${SITE_CONFIG.baseUrl}/services/${service.slug}` },
  ];

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={service.title}
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
                {service.category === "especial" && "Servicio Principal"}
                {service.category === "diagnostico" && "Diagnóstico"}
                {service.category === "especialidad" && "Especialidad"}
                {service.category === "mujer" && "Salud de la Mujer"}
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 drop-shadow-lg">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-white/90 mb-6">
                {service.longDescription}
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

        {/* Features Section */}
        <section className="py-12 md:py-16">
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
                            alt={related.title}
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
    </>
  );
}
