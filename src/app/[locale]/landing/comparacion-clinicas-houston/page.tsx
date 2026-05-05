import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Calendar,
  ShieldCheck,
  CurrencyDollar,
  Translate,
  Car,
  Flask,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CONTACT_INFO,
  SITE_CONFIG,
  GOOGLE_REVIEWS_DATA,
  SERVICES,
} from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";

type Props = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Clínica Hispana en Houston | Atención el Mismo Día",
  description:
    "Atención médica profesional 100% en español. Sin cita previa, walk-ins. Más de 500 reseñas 5★ en Google. Llame: (346) 626-4110",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/landing/comparacion-clinicas-houston`,
  },
};

const offerings = [
  { label: "Reseñas en Google", icon: Star },
  { label: "Horario", icon: Clock, value: "7 días, hasta 9:00 PM" },
  { label: "Cita previa", icon: Calendar, value: "No se requiere" },
  { label: "Pago", icon: CurrencyDollar, value: "Con o sin seguro" },
  { label: "Idioma", icon: Translate, value: "100% Español" },
  { label: "Examen I-693", icon: ShieldCheck, value: "Civil Surgeon USCIS" },
  { label: "Estacionamiento", icon: Car, value: "Gratis y amplio" },
  { label: "Laboratorio", icon: Flask, value: "Resultados el mismo día" },
];

const differentiators = [
  { icon: Star, title: "Reseñas 5 estrellas", desc: "Cientos de pacientes hispanos satisfechos en Google." },
  { icon: Calendar, title: "Sin cita previa", desc: "Llegue y reciba atención el mismo día." },
  { icon: Clock, title: "Lunes a Domingo", desc: "Horario extendido de 9:00 AM a 9:00 PM." },
  { icon: Translate, title: "100% en español", desc: "Todo el personal habla su idioma." },
  { icon: ShieldCheck, title: "Sin seguro requerido", desc: "Aceptamos pacientes con o sin cobertura." },
  { icon: CurrencyDollar, title: "Precios accesibles", desc: "Tarifas transparentes antes de atenderle." },
  { icon: Car, title: "Estacionamiento gratis", desc: "Amplio parking frente a la clínica." },
  { icon: Flask, title: "Laboratorio en sitio", desc: "Resultados el mismo día sin enviarle a otro lugar." },
];

const faqItems = [
  {
    q: "¿Necesito hacer cita?",
    a: "No. Atendemos walk-ins durante todo nuestro horario (Lunes a Domingo, 9:00 AM - 9:00 PM). Llegue cuando le acomode y le atendemos lo más pronto posible.",
  },
  {
    q: "¿Atienden a pacientes sin seguro médico?",
    a: "Sí. Aceptamos pacientes con o sin seguro. Ofrecemos precios accesibles y le informamos el costo antes de cualquier servicio.",
  },
  {
    q: "¿Todo el personal habla español?",
    a: "Sí, atendemos 100% en español. Nuestra clínica fue creada para servir a la comunidad hispana de Houston.",
  },
  {
    q: "¿Tienen laboratorio en la clínica?",
    a: "Sí, contamos con laboratorio clínico en sitio. La mayoría de pruebas (glucosa, colesterol, A1C, tiroides, embarazo) tienen resultados el mismo día.",
  },
  {
    q: "¿Realizan exámenes de inmigración I-693?",
    a: "Sí. Contamos con Civil Surgeons certificados por USCIS para el examen médico I-693 requerido para la Green Card.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "Estamos en 934 E Tidwell Rd, Houston TX 77022, en el norte de Houston cerca de la autopista 59/69. Estacionamiento gratuito y fácil acceso en transporte público.",
  },
];

export default async function LandingComparacionClinicasHouston({ params }: Props) {
  const { locale } = await params;

  // Landing solo en español. Cualquier otro locale = 404.
  if (locale !== "es") {
    notFound();
  }

  setRequestLocale(locale);

  const googleData = await getGooglePlaceData();
  const totalReviews = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const averageRating = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const liveReviews = googleData?.reviews?.slice(0, 3) ?? [];

  const featuredServices = SERVICES.filter((s) => s.highlighted).slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero-bg.webp"
          alt="Clínica Hispana Airline en Houston TX"
          width={1920}
          height={1080}
          priority
          fetchPriority="high"
          quality={60}
          className="absolute inset-0 w-full h-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-900/80" />

        <div className="container relative z-10 mx-auto px-4 pt-28 md:pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-yellow-400" weight="fill" />
                ))}
              </div>
              <span className="text-white font-medium text-sm">
                {averageRating} con {totalReviews}+ reseñas en Google
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-5 leading-tight drop-shadow-lg">
              ¿Busca una mejor opción de clínica hispana en Houston?
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Atención médica profesional el mismo día, sin cita previa, sin seguro
              requerido. 100% en español, precios accesibles.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="text-base md:text-lg px-8 py-6 gap-2 shadow-lg shadow-red-primary/30">
                <a href={`tel:${CONTACT_INFO.phone}`} suppressHydrationWarning>
                  <Phone className="size-5" weight="fill" />
                  <span suppressHydrationWarning>Llamar {CONTACT_INFO.phoneFormatted}</span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 py-6 gap-2 bg-white text-slate-dark border-white hover:bg-white/90"
              >
                <a href={CONTACT_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="size-5" weight="fill" />
                  Cómo Llegar
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/80">
              Lunes a Domingo · 9:00 AM - 9:00 PM · Walk-ins bienvenidos
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="py-16 md:py-24 bg-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-dark mb-4">
              ¿Por qué los hispanos eligen Clínica Hispana Airline?
            </h2>
            <p className="text-lg text-muted-foreground">
              Atención médica accesible para usted y su familia, sin las complicaciones
              de hospitales grandes.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
            {differentiators.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 md:p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="size-11 rounded-xl bg-red-bg text-red-primary flex items-center justify-center mb-4">
                  <item.icon className="size-6" weight="duotone" />
                </div>
                <h3 className="font-heading font-bold text-slate-dark mb-1.5 text-base md:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lo que ofrecemos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-dark mb-4">
              Lo que ofrecemos
            </h2>
            <p className="text-lg text-muted-foreground">
              Todo lo que necesita en una sola visita, sin complicaciones.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {offerings.map((row, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-5 md:px-6 py-4 border-b border-slate-100 last:border-b-0"
              >
                <div className="size-10 rounded-lg bg-red-bg text-red-primary flex items-center justify-center shrink-0">
                  <row.icon className="size-5" weight="duotone" />
                </div>
                <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="font-semibold text-slate-dark">{row.label}</span>
                  <span className="text-muted-foreground text-sm md:text-base">
                    {row.label === "Reseñas en Google"
                      ? `${totalReviews}+ con ${averageRating}★`
                      : row.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios destacados */}
      <section className="py-16 md:py-24 bg-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-dark mb-4">
              Servicios principales
            </h2>
            <p className="text-lg text-muted-foreground">
              Atención médica integral para toda la familia hispana.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="relative h-64 rounded-2xl overflow-hidden group"
              >
                <Image
                  src={service.image}
                  alt={`${service.title} - Clínica Hispana Airline Houston`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <h3 className="text-lg font-heading font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm line-clamp-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reseñas */}
      {liveReviews.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-dark mb-4">
                Lo que dicen nuestros pacientes
              </h2>
              <p className="text-lg text-muted-foreground">
                Reseñas verificadas de Google de pacientes reales.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {liveReviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="size-4 text-yellow-400" weight="fill" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4 line-clamp-6">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="size-9 rounded-full bg-red-bg text-red-primary flex items-center justify-center font-semibold text-sm">
                      {review.author_name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-dark">{review.author_name}</p>
                      <p className="text-xs text-muted-foreground">{review.relative_time_description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ubicación */}
      <section className="py-16 md:py-24 bg-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-dark mb-4">
              Visítenos en Houston
            </h2>
            <p className="text-lg text-muted-foreground">
              Ubicados en el norte de Houston con acceso fácil y estacionamiento gratuito.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-red-primary shrink-0 mt-1" weight="fill" />
                <div>
                  <p className="font-semibold text-slate-dark">Dirección</p>
                  <p className="text-muted-foreground text-sm">
                    {CONTACT_INFO.address}, {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="size-5 text-red-primary shrink-0 mt-1" weight="fill" />
                <div>
                  <p className="font-semibold text-slate-dark">Horario</p>
                  <p className="text-muted-foreground text-sm">Lunes a Domingo: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="size-5 text-red-primary shrink-0 mt-1" weight="fill" />
                <div>
                  <p className="font-semibold text-slate-dark">Teléfono</p>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-red-primary hover:text-red-dark text-sm font-semibold"
                    suppressHydrationWarning
                  >
                    <span suppressHydrationWarning>{CONTACT_INFO.phoneFormatted}</span>
                  </a>
                </div>
              </div>
              <Button asChild size="lg" className="w-full gap-2 mt-2">
                <a href={CONTACT_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="size-5" weight="fill" />
                  Abrir en Google Maps
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-100 min-h-[280px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.9999999999995!2d-95.3698!3d29.8404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409bb97325b173!2sCl%C3%ADnica%20Hispana%20Airline!5e0!3m2!1ses!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 280 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Clínica Hispana Airline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-dark mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Respuestas a las dudas más comunes antes de su visita.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white border border-slate-100 rounded-2xl px-6 shadow-sm data-[state=open]:border-red-primary/30"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-dark hover:text-red-primary hover:no-underline py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 md:py-20 bg-red-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Reciba atención médica hoy mismo
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Llame ahora o llegue directo a la clínica. Sin cita previa, atención el mismo día.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="text-base md:text-lg px-8 py-6 gap-2 bg-white text-red-primary hover:bg-white/90"
              >
                <a href={`tel:${CONTACT_INFO.phone}`} suppressHydrationWarning>
                  <Phone className="size-5" weight="fill" />
                  <span suppressHydrationWarning>Llamar {CONTACT_INFO.phoneFormatted}</span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 py-6 gap-2 bg-transparent text-white border-white hover:bg-white hover:text-red-primary"
              >
                <a href={CONTACT_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="size-5" weight="fill" />
                  Cómo Llegar
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/80 flex items-center justify-center gap-2 flex-wrap">
              <CheckCircle className="size-4" weight="fill" />
              Sin cita previa
              <span className="opacity-50">·</span>
              <CheckCircle className="size-4" weight="fill" />
              Con o sin seguro
              <span className="opacity-50">·</span>
              <CheckCircle className="size-4" weight="fill" />
              100% en español
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
