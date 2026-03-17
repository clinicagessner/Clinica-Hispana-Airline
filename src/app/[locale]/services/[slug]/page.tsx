import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, Check, Phone, MapPin, Stethoscope, FirstAid, Flask, Heartbeat, Drop, Heart, GenderFemale, Syringe, Clipboard, Virus, Lightning, TestTube } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  const { slug, locale } = await params;
  const t = await getTranslations("services");

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
      <div className="pt-24 pb-16 md:pb-24 bg-blue-warm min-h-screen">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-blue-primary hover:text-blue-dark mb-8 transition-colors"
          >
            <ArrowLeft className="size-5" />
            {t("backToServices")}
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Service Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {service.highlighted && (
                <Badge className="absolute top-4 left-4 bg-blue-primary">
                  Popular
                </Badge>
              )}
            </div>

            {/* Service Info */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="size-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                  <IconComponent className="size-7" weight="duotone" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground capitalize">
                    {service.category === "especial" && "Servicio Principal"}
                    {service.category === "diagnostico" && "Diagnóstico"}
                    {service.category === "especialidad" && "Especialidad"}
                    {service.category === "mujer" && "Salud de la Mujer"}
                  </p>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-dark mb-4">
                {service.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                {service.longDescription}
              </p>

              {/* Features */}
              <div className="bg-white rounded-xl p-6 mb-8">
                <h2 className="font-heading font-bold text-lg text-slate-dark mb-4">
                  {t("included")}
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check
                        className="size-5 text-success shrink-0 mt-0.5"
                        weight="bold"
                      />
                      <span className="text-slate-primary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gap-2">
                  <a href={`tel:${CONTACT_INFO.phone}`}>
                    <Phone className="size-5" weight="bold" />
                    {t("callNow")}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <a
                    href={CONTACT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="size-5" weight="bold" />
                    {t("getDirections")}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="mt-16 md:mt-24">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-dark mb-8">
                Servicios Relacionados
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map((related) => {
                  const RelatedIcon = iconMap[related.icon] || Stethoscope;
                  return (
                    <Link key={related.id} href={`/services/${related.slug}`}>
                      <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                        <CardContent className="p-6">
                          <div className="size-12 rounded-xl bg-blue-light text-blue-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <RelatedIcon className="size-6" weight="duotone" />
                          </div>
                          <h3 className="font-heading font-bold text-slate-dark mb-2 group-hover:text-blue-primary transition-colors">
                            {related.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {related.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <JsonLdBreadcrumb items={breadcrumbs} />
    </>
  );
}
