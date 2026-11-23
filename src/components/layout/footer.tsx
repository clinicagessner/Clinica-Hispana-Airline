import Link from "next/link";
import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { Phone, MapPin, Clock, InstagramLogo, YoutubeLogo, FacebookLogo, XLogo, LinkedinLogo, TiktokLogo, PinterestLogo, GoogleLogo, House } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, CONTACT_INFO, SOCIAL_LINKS, NAV_ITEMS, GOOGLE_REVIEWS_DATA, SERVICES } from "@/lib/constants";

/** Etiqueta corta en inglés de cada servicio para el pie (en español se usa `shortTitle`). */
const SERVICE_LABEL_EN: Record<string, string> = {
  "condiciones-cronicas": "Chronic Conditions",
  "tiroides": "Thyroid",
  "alergias": "Allergies",
  "enfermedades-respiratorias": "Respiratory Illness",
  "examen-fisico-escolar": "School Physical",
  "ginecologia": "Gynecology",
  "prueba-embarazo": "Pregnancy Test",
  "anticonceptivos": "Birth Control",
  "extraccion-implantes": "Implant Removal",
  "salud-hombre": "Men's Health",
  "examenes-sangre": "Blood Tests",
  "infecciones-urinarias": "Urinary Infections",
  "examen-heces": "Stool Test",
  "prueba-strep": "Strep Test",
  "prueba-tuberculosis": "TB Test",
  "enfermedades-transmision-sexual": "STD Testing",
  "examen-alcohol-drogas": "Drug & Alcohol Testing",
  "electrocardiograma": "EKG",
  "ultrasonido": "Ultrasound",
  "examen-dot": "DOT Physical",
  "examenes-inmigracion": "Immigration Exam",
  "vacunas": "Vaccines",
  "sueros-vitaminados": "IV Vitamin Therapy",
  "suturas-heridas": "Stitches",
  "curacion-heridas": "Wound Care",
  "cirugias-menores": "Minor Surgery",
  "drenaje-abscesos": "Abscess Drainage",
  "unas-encarnadas": "Ingrown Nails",
  "farmacia": "Pharmacy",
};

const FOOTER_CATEGORIES = [
  { key: "medicina-general", es: "Medicina general", en: "General medicine" },
  { key: "salud-mujer", es: "Salud de la mujer", en: "Women's health" },
  { key: "examenes", es: "Exámenes y certificados", en: "Exams & certificates" },
  { key: "laboratorio", es: "Laboratorio y pruebas", en: "Lab & testing" },
  { key: "tratamientos", es: "Tratamientos", en: "Treatments" },
] as const;
import { getGooglePlaceData } from "@/lib/google-places";

type FooterProps = {
  phoneOverride?: { phone: string; phoneFormatted: string };
};

export async function Footer({ phoneOverride }: FooterProps = {}) {
  const [t, locale, googleData] = await Promise.all([
    getTranslations(),
    getLocale(),
    getGooglePlaceData(),
  ]);
  const currentYear = new Date().getFullYear();
  const rating = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const reviews = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const phone = phoneOverride?.phone ?? CONTACT_INFO.phone;
  const phoneFormatted = phoneOverride?.phoneFormatted ?? CONTACT_INFO.phoneFormatted;

  const getLocalizedHref = (href: string) => {
    if (locale === "es") return href;
    return href.startsWith("/") ? `/${locale}${href}` : `/${locale}/${href}`;
  };

  return (
    <footer className="bg-slate-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href={getLocalizedHref("/")} className="flex items-center gap-3 mb-4">
              <div className="relative w-20 h-20">
                <Image
                  src="/images/sm/logo.webp"
                  alt={SITE_CONFIG.name}
                  fill
                  sizes="80px"
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
                <a href={`tel:${phone}`} suppressHydrationWarning>
                  <Phone className="size-4" weight="fill" />
                  {t("cta.callNow")}
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="gap-2 bg-white/10 border-white/50 text-white hover:bg-white hover:text-slate-dark hover:border-white">
                <a href={CONTACT_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="size-4" weight="fill" />
                  {t("cta.getDirections")}
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
                  href={`tel:${phone}`}
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm group"
                  suppressHydrationWarning
                >
                  <Phone className="size-5 shrink-0 mt-0.5 text-red-primary group-hover:text-white transition-colors" weight="fill" />
                  <span suppressHydrationWarning>{phoneFormatted}</span>
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
                  <p>{t("footer.hoursWeekday")}</p>
                  <p>{t("footer.hoursWeekend")}</p>
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
                  href={getLocalizedHref(item.href)}
                  className="text-white/70 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  {t(item.label)}
                </Link>
              ))}
              <Link
                href={getLocalizedHref("/privacy")}
                className="text-white/70 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200"
              >
                {t("footer.privacy")}
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-5">
              {t("footer.followUs")}
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
              {SOCIAL_LINKS.youtube && (
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-primary transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeLogo className="size-5" weight="fill" />
                </a>
              )}
              {SOCIAL_LINKS.tiktok && (
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-primary transition-colors"
                  aria-label="TikTok"
                >
                  <TiktokLogo className="size-5" weight="fill" />
                </a>
              )}
              {SOCIAL_LINKS.pinterest && (
                <a
                  href={SOCIAL_LINKS.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-primary transition-colors"
                  aria-label="Pinterest"
                >
                  <PinterestLogo className="size-5" weight="fill" />
                </a>
              )}
              {SOCIAL_LINKS.nextdoor && (
                <a
                  href={SOCIAL_LINKS.nextdoor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-primary transition-colors"
                  aria-label="Nextdoor"
                >
                  <House className="size-5" weight="fill" />
                </a>
              )}
              {SOCIAL_LINKS.yelp && (
                <a
                  href={SOCIAL_LINKS.yelp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-primary transition-colors"
                  aria-label="Yelp"
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
                    <path d="m7.6885 15.1415-3.6715.8483c-.3769.0871-.755.183-1.1452.155-.2611-.0188-.5122-.0414-.7606-.213a1.179 1.179 0 0 1-.331-.3594c-.3486-.5519-.3656-1.3661-.3697-2.0004a6.2874 6.2874 0 0 1 .3314-2.0642 1.857 1.857 0 0 1 .1073-.2474 2.3426 2.3426 0 0 1 .1255-.2165 2.4572 2.4572 0 0 1 .1563-.1975 1.1736 1.1736 0 0 1 .399-.2831 1.082 1.082 0 0 1 .4592-.0837c.2355.0016.5139.052.91.1734.0555.0191.1237.0382.1856.0572.3277.1013.7048.2404 1.1499.3987.6863.2404 1.3663.487 2.0463.7397l1.2117.4423c.2217.0807.4363.18.6412.297.174.0984.3273.2298.4512.387a1.217 1.217 0 0 1 .192.4309 1.2205 1.2205 0 0 1-.872 1.4522c-.0468.0151-.0852.0239-.1085.0293l-1.105.2553-.0031-.001zM18.8208 7.565a1.8506 1.8506 0 0 0-.2042-.1754 2.4082 2.4082 0 0 0-.2077-.1394 2.3607 2.3607 0 0 0-.2269-.109 1.1705 1.1705 0 0 0-.482-.0796 1.0862 1.0862 0 0 0-.4498.1263c-.2107.1048-.4388.2732-.742.5551-.042.0417-.0947.0886-.142.133-.2502.2351-.5286.5252-.8599.863a114.6363 114.6363 0 0 0-1.5166 1.5629l-.8962.9293a4.1897 4.1897 0 0 0-.4466.5483 1.541 1.541 0 0 0-.2364.5459 1.2199 1.2199 0 0 0 .0107.4518l.0046.02a1.218 1.218 0 0 0 1.4184.923 1.162 1.162 0 0 0 .1105-.0213l4.7781-1.104c.3766-.087.7587-.1667 1.097-.3631.2269-.1316.4428-.262.5909-.5252a1.1793 1.1793 0 0 0 .1405-.4683c.0733-.6512-.2668-1.3908-.5403-1.963a6.2792 6.2792 0 0 0-1.2001-1.7103zM8.9703.0754a8.6724 8.6724 0 0 0-.83.1564c-.2754.066-.548.1383-.8146.2236-.868.2844-2.0884.8063-2.295 1.8065-.1165.5655.1595 1.1439.3737 1.66.2595.6254.614 1.1889.9373 1.7777.8543 1.5545 1.7245 3.0993 2.5922 4.6457.259.4617.5416 1.0464 1.043 1.2856a1.058 1.058 0 0 0 .1013.0383c.2248.0851.4699.1016.7041.0471a4.3015 4.3015 0 0 0 .0418-.0097 1.2136 1.2136 0 0 0 .5658-.3397 1.1033 1.1033 0 0 0 .079-.0822c.3463-.435.3454-1.0833.3764-1.6134.1042-1.771.2139-3.5423.3009-5.3142.0332-.6712.1055-1.3333.0655-2.0096-.0328-.5579-.0368-1.1984-.3891-1.6563-.6218-.8073-1.9476-.741-2.8523-.6158zm2.084 15.9505a1.1053 1.1053 0 0 0-1.2306-.4145 1.1398 1.1398 0 0 0-.1526.0633 1.4806 1.4806 0 0 0-.2171.1354c-.1992.1475-.3668.3392-.5196.5315-.0386.049-.074.1143-.12.1562l-.7686 1.0573a113.9168 113.9168 0 0 0-1.2913 1.789c-.278.3895-.5184.7184-.7083 1.0094-.036.0547-.0734.116-.1075.1647-.2277.3522-.3566.6092-.4228.8381a1.0945 1.0945 0 0 0-.046.4721c.0211.1655.0768.3246.1635.467.046.0715.0957.1406.1487.207a2.334 2.334 0 0 0 .1754.1825 1.843 1.843 0 0 0 .2108.1732c.5304.369 1.1112.6342 1.722.8391a6.0958 6.0958 0 0 0 1.5716.3004c.091.0046.1821.0025.2728-.006a2.3878 2.3878 0 0 0 .2506-.0351 2.3862 2.3862 0 0 0 .2447-.071 1.1927 1.1927 0 0 0 .4175-.2658c.1127-.113.1994-.249.2541-.3989.0889-.2214.1473-.5026.1857-.92.0034-.0593.0118-.1305.0177-.1958.0304-.3463.0443-.7531.0666-1.2315.0375-.7357.067-1.4681.0903-2.2026 0 0 .0495-1.3053.0494-1.306.0113-.3008.002-.6342-.0814-.9336a1.396 1.396 0 0 0-.1756-.4054zm8.6754 2.0439c-.1605-.176-.3878-.3514-.7462-.5682-.0518-.0288-.1124-.0674-.1684-.1009-.2985-.1795-.658-.3684-1.078-.5965a120.7615 120.7615 0 0 0-1.9427-1.042l-1.1515-.6107c-.0597-.0175-.1203-.0607-.1766-.0878-.2212-.1058-.4558-.2045-.6992-.2498a1.4915 1.4915 0 0 0-.2545-.0265 1.1527 1.1527 0 0 0-.1648.01 1.1077 1.1077 0 0 0-.9227.9133 1.4186 1.4186 0 0 0 .0159.439c.0563.3065.1932.6096.3346.875l.615 1.1526c.3422.65.6884 1.2963 1.0435 1.9406.229.4202.4196.7799.5982 1.078.0338.056.0721.1163.1011.1682.2173.3584.392.584.569.7458.1146.1107.252.195.4026.247.1583.0525.326.071.4919.0546a2.368 2.368 0 0 0 .251-.0435c.0817-.022.1622-.048.241-.0784a1.863 1.863 0 0 0 .2475-.1143 6.1018 6.1018 0 0 0 1.2818-.9597c.4596-.4522.8659-.9454 1.182-1.51.044-.08.0819-.163.1138-.2483a2.49 2.49 0 0 0 .0773-.2411c.0186-.083.033-.1669.0429-.2513a1.188 1.188 0 0 0-.0565-.491 1.0933 1.0933 0 0 0-.248-.4041zm2.86 3.742a.8523.8523 0 0 1-.111.4236c-.074.132-.178.2377-.3115.3172a.8428.8428 0 0 1-.4385.119.847.847 0 0 1-.4373-.1179.8526.8526 0 0 1-.3125-.3171.8548.8548 0 0 1-.111-.4248c0-.1526.038-.2958.1143-.4294a.8405.8405 0 0 1 .315-.3159.849.849 0 0 1 .4315-.1156.8514.8514 0 0 1 .4294.1144.84.84 0 0 1 .316.3148.8494.8494 0 0 1 .1156.4317zm-.1202 0c0-.1328-.0332-.256-.0996-.3698s-.1564-.2038-.2702-.2702a.7125.7125 0 0 0-.371-.1007.7204.7204 0 0 0-.3698.0996.7487.7487 0 0 0-.2713.2702.7181.7181 0 0 0-.0996.3709c0 .132.0332.2557.0996.371a.7355.7355 0 0 0 .2713.2713.7354.7354 0 0 0 .3698.0985.7205.7205 0 0 0 .3698-.0996.7423.7423 0 0 0 .2702-.2691.7186.7186 0 0 0 .1008-.3721zm-.577.0584.2724.4522h-.1922l-.237-.4052h-.1546v.4052h-.1695v-1.02h.2988c.1268 0 .2195.0247.2783.0744.0595.0496.0892.1252.0892.2267a.2785.2785 0 0 1-.0492.1625c-.032.0466-.0775.0813-.1362.1042zm-.0412-.1408a.1532.1532 0 0 0 .056-.1214c0-.0573-.0164-.0981-.0491-.1225-.0329-.0251-.0847-.0377-.1557-.0377h-.1214v.3285h.1237c.061 0 .1098-.0157.1465-.047z" />
                  </svg>
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
              <p className="text-xs text-white/60 mt-1">{t("footer.stars", { rating, reviews })}</p>
            </div>
          </div>
        </div>

        {/* Servicios por categoría: enlaza todas las páginas de servicio desde cada página */}
        <nav
          aria-label={locale === "en" ? "Our services" : "Nuestros servicios"}
          className="mt-12 pt-10 border-t border-white/10"
        >
          <h3 className="font-heading font-bold text-lg mb-6">
            {locale === "en" ? "Our services" : "Nuestros servicios"}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {FOOTER_CATEGORIES.map((cat) => (
              <div key={cat.key}>
                <p className="text-sm font-semibold text-white mb-3">{locale === "en" ? cat.en : cat.es}</p>
                <ul className="space-y-2">
                  {SERVICES.filter((s) => s.category === cat.key)
                    .sort((a, b) => a.order - b.order)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={getLocalizedHref(`/services/${s.slug}`)}
                          className="text-white/70 hover:text-white transition-colors text-sm"
                        >
                          {locale === "en" ? SERVICE_LABEL_EN[s.slug] ?? s.shortTitle : s.shortTitle}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/60">
            <p>{t("footer.copyright", { year: currentYear })}</p>
            <p>
              {t("footer.madeBy")}{" "}
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
