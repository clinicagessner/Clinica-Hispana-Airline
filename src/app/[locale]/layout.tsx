import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { ScrollAnimations } from "@/components/animations/scroll-animations";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTags } from "@/components/analytics/google-tags";
import { SITE_CONFIG, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { seoTitle, seoDescription, buildSocial } from "@/lib/seo";
import { getGooglePlaceData } from "@/lib/google-places";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  // Sin esto, rutas con punto (/ads.txt, /index.html) entran como locale y
  // devuelven la home con 200: un soft 404 para Google.
  if (!hasLocale(routing.locales, locale)) notFound();

  const [t, googleData] = await Promise.all([
    getTranslations({ locale, namespace: "metadata" }),
    getGooglePlaceData(),
  ]);
  const reviews = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const rating = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const ogDescription = t("ogDescription", { reviews, rating });

  return {
    // Sin `template`: cada página compone su propio título con `seoTitle`, que
    // solo añade la marca si cabe en 60. La plantilla metía 34 caracteres fijos
    // y dejaba 67 de las 86 URLs por encima del límite.
    title: {
      default: seoTitle(t("title"), ""),
      // "%s" = sin plantilla: la página manda su título ya compuesto.
      template: "%s",
    },
    description: seoDescription(t("description")),
    keywords: [
      "clínica hispana Houston",
      "médico español Houston",
      "doctor hispano Houston",
      "clínica médica Houston TX",
      "medicina familiar Houston",
      "urgencias menores Houston",
      "laboratorio clínico Houston",
      "Hispanic clinic Houston",
      "Spanish speaking doctor Houston",
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL(SITE_CONFIG.baseUrl),
    alternates: {
      canonical: locale === "en" ? "/en" : "/",
      languages: {
        es: "/",
        en: "/en",
        // Sin x-default Google no tiene señal de qué versión servir cuando la
        // consulta no determina idioma, y venía enseñando /en para búsquedas
        // en español. El sitemap ya lo declaraba; el HTML no.
        "x-default": "/",
      },
    },
    ...buildSocial({
      title: seoTitle(t("title"), ""),
      description: seoDescription(ogDescription),
      url: locale === "en" ? `${SITE_CONFIG.baseUrl}/en` : SITE_CONFIG.baseUrl,
      image: "/images/og-image.jpg",
      imageAlt: `${SITE_CONFIG.name} - Clínica médica hispana en Houston TX`,
      locale,
    }),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: [
        "DCDMoTBSEG-vc4DG4vI-mcHVC_b5UJCfrbAlyMHJx8U",
        "RmUdLh6Q3sdftfM2Zg9CvbwpnZh7cgOjf5yweef0TzY",
      ],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`${montserrat.variable} ${sourceSans.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#DC2626" />
        {/* Los preconnect a terceros se quitaron: abrían conexiones antes del
            LCP para scripts que ahora cargan con lazyOnload. El swap de
            CallRail vive en <GoogleTags />, no aquí en <head>. */}
        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1993259561579416&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <TooltipProvider>
            {children}
            <ScrollToTop />
            <ScrollAnimations />
            <Analytics />
          </TooltipProvider>
        </NextIntlClientProvider>
      </body>
      <GoogleTags />
    </html>
  );
}
