import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Phone, CaretDown, Star, ShieldCheck, CurrencyDollar, CalendarCheck } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.webp"
        alt="Clínica Hispana Houston - Atención médica profesional"
        fill
        priority
        quality={85}
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-24 pb-32 md:pt-28 md:pb-40">
        <div className="max-w-3xl">
          {/* Title */}
          <h1 className="animate-hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight">
            {t("title")}
          </h1>

          {/* Subtitle */}
          <p className="animate-hero-subtitle text-xl sm:text-2xl md:text-3xl text-white/90 mb-6 md:mb-8 font-light">
            {t("subtitle")}
          </p>

          {/* Features List */}
          <ul className="animate-hero-features flex flex-wrap gap-x-6 gap-y-2 mb-8 md:mb-10">
            {(["1", "2", "3"] as const).map((key) => (
              <li key={key} className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
                <span className="size-2 rounded-full bg-blue-primary" />
                {t(`features.${key}`)}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="animate-hero-cta flex flex-col sm:flex-row gap-4 mb-12 md:mb-16">
            <Button asChild size="lg" className="text-base sm:text-lg px-8 py-6">
              <Link href="#contact">{t("cta")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-8 py-6 bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white"
            >
              <a href={`tel:${CONTACT_INFO.phone}`} className="gap-2">
                <Phone className="size-5" weight="bold" />
                {t("ctaSecondary")}
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-hero-scroll absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2">
          <Link
            href="#services"
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors group"
          >
            <span className="text-sm mb-2">{t("scrollDown")}</span>
            <CaretDown className="size-6 animate-hero-bounce group-hover:text-blue-primary" weight="bold" />
          </Link>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="animate-hero-badges absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-4 md:py-5">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
            {/* Google Rating */}
            <div className="flex items-center gap-2 text-white/90">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="size-5" weight="fill" />
                <span className="font-bold">4.9</span>
              </div>
              <span className="text-sm text-white/70">{t("badges.rating")}</span>
            </div>

            {/* Uninsured Welcome */}
            <div className="flex items-center gap-2 text-white/90">
              <ShieldCheck className="size-5 text-blue-primary" weight="fill" />
              <span className="text-sm">{t("badges.uninsured")}</span>
            </div>

            {/* Affordable */}
            <div className="flex items-center gap-2 text-white/90">
              <CurrencyDollar className="size-5 text-green-400" weight="fill" />
              <span className="text-sm">{t("badges.prices")}</span>
            </div>

            {/* Same Day */}
            <div className="flex items-center gap-2 text-white/90">
              <CalendarCheck className="size-5 text-blue-primary" weight="fill" />
              <span className="text-sm">{t("badges.sameDay")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
