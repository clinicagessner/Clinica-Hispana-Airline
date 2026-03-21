import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingButtons } from "@/components/layout/floating-buttons";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { JsonLdMedicalClinic } from "@/components/seo/json-ld";
import { ScrollAnimations } from "@/components/animations/scroll-animations";
import { SITE_CONFIG } from "@/lib/constants";
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
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
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
      canonical: "/",
      languages: {
        es: "/",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_MX" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_MX",
      url: SITE_CONFIG.baseUrl,
      siteName: SITE_CONFIG.name,
      title: t("title"),
      description: t("ogDescription"),
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("ogDescription"),
      images: ["/images/og-image.jpg"],
    },
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
      google: "YOUR_GOOGLE_VERIFICATION_CODE",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`${montserrat.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#DC2626" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <TooltipProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
            >
              Saltar al contenido
            </a>
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <FloatingButtons />
            <ScrollToTop />
            <JsonLdMedicalClinic />
            <ScrollAnimations />
          </TooltipProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
