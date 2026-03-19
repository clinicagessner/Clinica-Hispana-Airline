"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Stethoscope, FirstAid, Flask, Heartbeat, Drop, Heart, GenderFemale, Syringe, Clipboard, Virus, Lightning, TestTube } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/lib/constants";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function Services() {
  const t = useTranslations("services");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlightedServices = SERVICES.filter((s) => s.highlighted).slice(0, 3);

  return (
    <section id="services" className="py-16 md:py-24 bg-red-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-dark mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {highlightedServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Stethoscope;

            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="group h-full hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-gradient(to top, var(--slate-900/70), var(--slate-900/20), transparent)" />

                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="size-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                        <IconComponent className="size-6" weight="duotone" />
                      </div>
                    </div>

                    {/* Highlighted Badge */}
                    {service.highlighted && (
                      <Badge className="absolute top-4 right-4 bg-red-primary">
                        Popular
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-bold text-slate-dark mb-2 group-hover:text-red-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Features Preview */}
                    <ul className="space-y-1 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-primary flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-red-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-red-primary font-medium text-sm hover:gap-2 transition-all"
                    >
                      {t("learnMore")}
                      <ArrowRight className="size-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href="/services">
              {t("viewAll")}
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
