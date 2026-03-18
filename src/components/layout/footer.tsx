import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Phone, Envelope, MapPin, Clock, InstagramLogo, FacebookLogo, XLogo, LinkedinLogo, GoogleLogo } from "@phosphor-icons/react/dist/ssr";
import { SITE_CONFIG, CONTACT_INFO, SOCIAL_LINKS, NAV_ITEMS } from "@/lib/constants";

export async function Footer() {
  const t = await getTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.webp"
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-bold text-xl">
                {SITE_CONFIG.shortName}
              </span>
            </Link>
            <p className="text-white/70 text-sm mb-6">
              {t("footer.tagline")}
            </p>
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.facebook && (
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-primary transition-colors"
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
                  className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-primary transition-colors"
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
                  className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-primary transition-colors"
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
                  className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-primary transition-colors"
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
                  className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-primary transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramLogo className="size-5" weight="fill" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {t("footer.quickLinks")}
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {t(item.label)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {t("footer.contactInfo")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Phone className="size-5 shrink-0 mt-0.5" weight="fill" />
                  <span>{CONTACT_INFO.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Envelope className="size-5 shrink-0 mt-0.5" weight="fill" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <MapPin className="size-5 shrink-0 mt-0.5" weight="fill" />
                  <span>
                    {CONTACT_INFO.address}<br />
                    {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {t("contact.info.hours")}
            </h3>
            <div className="flex items-start gap-3 text-white/70 text-sm">
              <Clock className="size-5 shrink-0 mt-0.5" weight="fill" />
              <div>
                <p>{CONTACT_INFO.hoursWeekday}</p>
                <p>{CONTACT_INFO.hoursWeekend}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>{t("footer.copyright", { year: currentYear })}</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                {t("footer.privacy")}
              </Link>
              <span>|</span>
              <Link href="/privacy#hipaa" className="hover:text-white transition-colors">
                {t("footer.hipaa")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
