"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";

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

  const highlightedServices = SERVICES.filter((s) => s.highlighted).slice(0, 4);

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
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

        {/* Bento Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto"
        >
          {/* Card 1 - Large (spans 2 rows on md+) */}
          {highlightedServices[0] && (
            <motion.div
              variants={itemVariants}
              className="md:row-span-2 group"
            >
              <Link
                href={`/services/${highlightedServices[0].slug}`}
                className="block relative h-72 md:h-full min-h-[280px] md:min-h-[360px] rounded-2xl overflow-hidden"
              >
                <Image
                  src={highlightedServices[0].image}
                  alt={highlightedServices[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                    {highlightedServices[0].title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2">
                    {highlightedServices[0].description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                    {t("learnMore")}
                    <ArrowRight className="size-5" weight="bold" />
                  </span>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Card 2 - Top right */}
          {highlightedServices[1] && (
            <motion.div variants={itemVariants} className="group">
              <Link
                href={`/services/${highlightedServices[1].slug}`}
                className="block relative h-72 md:h-[calc(50%-10px)] min-h-[170px] rounded-2xl overflow-hidden"
              >
                <Image
                  src={highlightedServices[1].image}
                  alt={highlightedServices[1].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <h3 className="text-xl font-heading font-bold text-white mb-1">
                    {highlightedServices[1].title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-white/80 text-sm font-medium group-hover:text-white group-hover:gap-2 transition-all">
                    {t("learnMore")}
                    <ArrowRight className="size-4" weight="bold" />
                  </span>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Card 3 - Bottom right */}
          {highlightedServices[2] && (
            <motion.div variants={itemVariants} className="group">
              <Link
                href={`/services/${highlightedServices[2].slug}`}
                className="block relative h-72 md:h-[calc(50%-10px)] min-h-[170px] rounded-2xl overflow-hidden"
              >
                <Image
                  src={highlightedServices[2].image}
                  alt={highlightedServices[2].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <h3 className="text-xl font-heading font-bold text-white mb-1">
                    {highlightedServices[2].title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-white/80 text-sm font-medium group-hover:text-white group-hover:gap-2 transition-all">
                    {t("learnMore")}
                    <ArrowRight className="size-4" weight="bold" />
                  </span>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Card 4 - Bottom wide */}
          {highlightedServices[3] && (
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 group"
            >
              <Link
                href={`/services/${highlightedServices[3].slug}`}
                className="block relative h-72 md:h-52 rounded-2xl overflow-hidden"
              >
                <Image
                  src={highlightedServices[3].image}
                  alt={highlightedServices[3].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-center max-w-md">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {highlightedServices[3].title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3 line-clamp-2">
                    {highlightedServices[3].description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                    {t("learnMore")}
                    <ArrowRight className="size-5" weight="bold" />
                  </span>
                </div>
              </Link>
            </motion.div>
          )}
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
