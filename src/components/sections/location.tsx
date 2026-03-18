import { getTranslations } from "next-intl/server";
import {
  MapPin,
  Car,
  Wheelchair,
  Bus,
  ShieldCheck,
  NavigationArrow,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";

export async function Location() {
  const t = await getTranslations("location");

  const features = [
    { icon: Car, label: t("features.parking") },
    { icon: Wheelchair, label: t("features.wheelchair") },
    { icon: Bus, label: t("features.bus") },
    { icon: ShieldCheck, label: t("features.security") },
  ];

  return (
    <section id="location" className="py-16 md:py-24 bg-slate-dark text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-white/70">{t("subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-2xl overflow-hidden">
            <iframe
              src={CONTACT_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la Clínica Hispana Houston"
              className="absolute inset-0"
            />
          </div>

          {/* Location Info */}
          <div className="flex flex-col justify-center">
            {/* Address Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="size-14 rounded-xl bg-red-primary flex items-center justify-center shrink-0">
                  <MapPin className="size-7" weight="fill" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    {t("howToGetHere")}
                  </h3>
                  <p className="text-white/80">
                    {CONTACT_INFO.address}
                    <br />
                    {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                  </p>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full gap-2 bg-white text-primary hover:bg-white/90"
              >
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <NavigationArrow className="size-5" weight="fill" />
                  {t("getDirections")}
                </a>
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/5 rounded-xl p-4"
                  >
                    <IconComponent
                      className="size-6 text-red-primary"
                      weight="duotone"
                    />
                    <span className="text-sm text-white/80">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
