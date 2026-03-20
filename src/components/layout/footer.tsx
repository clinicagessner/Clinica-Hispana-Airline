import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Phone, MapPin, Clock, InstagramLogo, FacebookLogo, XLogo, LinkedinLogo, GoogleLogo } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, CONTACT_INFO, SOCIAL_LINKS, NAV_ITEMS } from "@/lib/constants";

export async function Footer() {
  const t = await getTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14">
                <Image
                  src="/images/logo.webp"
                  alt={SITE_CONFIG.name}
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-bold text-xl">
                {SITE_CONFIG.shortName}
              </span>
            </Link>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              {t("footer.tagline")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="sm" className="gap-2 bg-red-primary hover:bg-red-dark">
                <a href={`tel:${CONTACT_INFO.phone}`}>
                  <Phone className="size-4" weight="fill" />
                  Llamar
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="gap-2 bg-white/10 border-white/50 text-white hover:bg-white hover:text-slate-dark hover:border-white">
                <a href={CONTACT_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="size-4" weight="fill" />
                  Ubicación
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-5">
              {t("footer.contactInfo")}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm group"
                >
                  <Phone className="size-5 shrink-0 mt-0.5 text-red-primary group-hover:text-white transition-colors" weight="fill" />
                  <span>{CONTACT_INFO.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm group"
                >
                  <MapPin className="size-5 shrink-0 mt-0.5 text-red-primary group-hover:text-white transition-colors" weight="fill" />
                  <span>
                    {CONTACT_INFO.address}<br />
                    {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Clock className="size-5 shrink-0 mt-0.5 text-red-primary" weight="fill" />
                <div>
                  <p>{CONTACT_INFO.hoursWeekday}</p>
                  <p>{CONTACT_INFO.hoursWeekend}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-5">
              {t("footer.quickLinks")}
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  {t(item.label)}
                </Link>
              ))}
              <Link
                href="/privacy"
                className="text-white/70 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200"
              >
                {t("footer.privacy")}
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-5">
              Síguenos
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {SOCIAL_LINKS.facebook && (
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-primary transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookLogo className="size-5" weight="fill" />
                </a>
              )}
              {SOCIAL_LINKS.x && (
                <a
                  href={SOCIAL_LINKS.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-primary transition-colors"
                  aria-label="X (Twitter)"
                >
                  <XLogo className="size-5" weight="fill" />
                </a>
              )}
              {SOCIAL_LINKS.linkedin && (
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo className="size-5" weight="fill" />
                </a>
              )}
              {SOCIAL_LINKS.google && (
                <a
                  href={SOCIAL_LINKS.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-primary transition-colors"
                  aria-label="Google Business"
                >
                  <GoogleLogo className="size-5" weight="fill" />
                </a>
              )}
              {SOCIAL_LINKS.instagram && (
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-primary transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramLogo className="size-5" weight="fill" />
                </a>
              )}
            </div>

            {/* Google Reviews Badge */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <GoogleLogo className="size-5 text-red-primary" weight="fill" />
                <span className="text-sm font-medium">Google Reviews</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="size-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-white/60 mt-1">5.0 estrellas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/60">
            <p>© {currentYear} {SITE_CONFIG.name}. Todos los derechos reservados.</p>
            <p>
              Creado por{" "}
              <a
                href="https://rcweb.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-light transition-colors font-medium"
              >
                RC Web Solutions LLC
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
