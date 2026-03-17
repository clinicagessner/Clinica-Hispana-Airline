import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Stethoscope, FirstAid, Flask, Heartbeat, Drop, Heart, GenderFemale, Syringe, Clipboard, Virus, Lightning, TestTube } from "@phosphor-icons/react/dist/ssr";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";

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
  const t = await getTranslations("services");

  // Group services by category
  const categories = {
    especial: SERVICES.filter((s) => s.category === "especial"),
    diagnostico: SERVICES.filter((s) => s.category === "diagnostico"),
    especialidad: SERVICES.filter((s) => s.category === "especialidad"),
    mujer: SERVICES.filter((s) => s.category === "mujer"),
  };

  return (
    <div className="pt-24 pb-16 md:pb-24 bg-blue-warm min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-dark mb-4">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        {/* All Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.sort((a, b) => a.order - b.order).map((service) => {
            const IconComponent = iconMap[service.icon] || Stethoscope;

            return (
              <Link key={service.id} href={`/services/${service.slug}`}>
                <Card className="group h-full hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-3 left-3">
                      <div className="size-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                        <IconComponent className="size-5" weight="duotone" />
                      </div>
                    </div>

                    {service.highlighted && (
                      <Badge className="absolute top-3 right-3 bg-blue-primary text-xs">
                        Popular
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-4">
                    <h2 className="text-lg font-heading font-bold text-slate-dark mb-1 group-hover:text-blue-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-blue-primary font-medium text-sm group-hover:gap-2 transition-all">
                      {t("learnMore")}
                      <ArrowRight className="size-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
