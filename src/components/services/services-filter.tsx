"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  ArrowRight,
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
  Star,
  Pulse,
  ShieldCheck,
  FileText,
  Wind,
  Truck,
  Scissors,
  Users,
  Bone,
  Monitor,
  FunnelSimple,
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

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
  FileText,
  Wind,
  Truck,
  Scissors,
  Users,
  Bone,
  Monitor,
  Shield: ShieldCheck,
};

interface Category {
  id: string;
  label: string;
  iconName: string;
}

interface ServicesFilterProps {
  services: Service[];
  categories: Category[];
}

const categoryIconMap: Record<string, React.ElementType> = {
  Star,
  Stethoscope,
  TestTube,
  GenderFemale,
};

export function ServicesFilter({ services, categories }: ServicesFilterProps) {
  const t = useTranslations("services");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("all")}
            className={cn(
              "gap-2 rounded-full",
              activeCategory === "all" && "bg-red-primary hover:bg-red-dark"
            )}
          >
            <FunnelSimple className="size-4" weight="bold" />
            {t("filterAll")}
          </Button>

          {categories.map((cat) => {
            const Icon = categoryIconMap[cat.iconName] || Star;
            return (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "gap-2 rounded-full",
                  activeCategory === cat.id && "bg-red-primary hover:bg-red-dark"
                )}
              >
                <Icon className="size-4" weight="duotone" />
                {cat.label}
              </Button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Stethoscope;

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group block w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
              >
                <article className="relative h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-red-200">
                  {/* Image */}
                  <div className="relative h-36 sm:h-40 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Icon Badge */}
                    <div className="absolute bottom-3 left-3">
                      <div className="size-10 rounded-xl bg-white/95 backdrop-blur-sm text-red-primary flex items-center justify-center shadow-lg group-hover:bg-red-primary group-hover:text-white transition-colors">
                        <IconComponent className="size-5" weight="duotone" />
                      </div>
                    </div>

                    {/* Popular Badge */}
                    {service.highlighted && (
                      <Badge className="absolute top-3 right-3 bg-red-primary hover:bg-red-dark text-xs shadow-lg">
                        Popular
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-base sm:text-lg font-heading font-bold text-slate-dark mb-1.5 group-hover:text-red-primary transition-colors line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-red-primary font-medium text-sm group-hover:gap-2.5 transition-all">
                      {t("learnMore")}
                      <ArrowRight className="size-4" weight="bold" />
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* No results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t("noServices")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
