import type { Service, Promotion, ContactInfo, SiteConfig, SocialLinks, FAQItem, BlogPost } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: "Clínica Hispana Airline",
  shortName: "Clínica Hispana",
  tagline: "Atención médica profesional 100% en español",
  description: "Clínica médica hispana en Houston, TX. Atención profesional en español, sin cita previa, aceptamos pacientes sin seguro. Medicina familiar, urgencias menores, laboratorio y más.",
  baseUrl: "https://clinicahispanaairline.com",
  locale: "es-MX",
  logoUrl: "/images/logo.webp",
};

export const CONTACT_INFO: ContactInfo = {
  address: "934 E Tidwell Rd",
  city: "Houston",
  state: "TX",
  zip: "77022",
  phone: "+13466264110",
  phoneFormatted: "(346) 626-4110",
  email: "clinicahispanaairline@gmail.com",
  hours: "Lunes a Domingo: 9:00 AM - 9:00 PM",
  hoursWeekday: "Lunes a Viernes: 9:00 AM - 9:00 PM",
  hoursWeekend: "Sábado y Domingo: 10:00 AM - 6:00 PM",
  googleMapsUrl: "https://www.google.com/maps/place/Clinica+Hispana+Airline/@29.8279,-95.3577,17z/data=!3m1!4b1!4m6!3m5!1s0x8640b99b732517b3:0x6071796769ab0bc8",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.5!2d-95.3577!3d29.8279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b99b732517b3%3A0x6071796769ab0bc8!2sCl%C3%ADnica%20Hispana%20Airline!5e0!3m2!1sen!2sus!4v1710600000000!5m2!1sen!2sus",
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJsxclc5m5QIYRyAurHml5cWA",
  placeId: "ChIJsxclc5m5QIYRyAurHml5cWA",
  coordinates: {
    lat: 29.8279,
    lng: -95.3577,
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  x: "https://x.com/ClinHispAirline",
  facebook: "https://www.facebook.com/clinicahispanaairline/",
  linkedin: "https://www.linkedin.com/in/clinica-hispana-airline/",
  google: "https://g.co/kgs/1RwVVhT",
};

// Google Reviews data - Hardcoded for now, will be replaced with API
export const GOOGLE_REVIEWS_DATA = {
  totalReviews: 491,
  averageRating: 5.0,
  placeId: "ChIJsxclc5m5QIYRyAurHml5cWA",
};

export const SERVICES: Service[] = [
  {
    id: "medicina-familiar",
    slug: "medicina-familiar",
    title: "Medicina Familiar",
    shortTitle: "Familiar",
    description: "Atención médica integral para toda la familia, desde niños hasta adultos mayores.",
    longDescription: "Nuestro servicio de medicina familiar ofrece atención médica completa y continua para pacientes de todas las edades. Nos enfocamos en la prevención, diagnóstico y tratamiento de enfermedades comunes, manteniendo un historial médico completo de cada miembro de su familia.",
    icon: "Stethoscope",
    image: "/images/services/medicina-familiar.webp",
    category: "especial",
    keywords: ["medicina familiar Houston", "doctor familia Houston", "médico general Houston", "medicina familiar cerca de mi"],
    features: [
      "Atención para todas las edades",
      "Consultas en español",
      "Sin cita previa",
      "Seguimiento continuo",
      "Historial médico completo",
      "Vacunas y prevención"
    ],
    highlighted: true,
    order: 1,
  },
  {
    id: "examenes-inmigracion",
    slug: "examenes-inmigracion",
    title: "Exámenes Médicos de Inmigración",
    shortTitle: "Inmigración",
    description: "Exámenes médicos oficiales requeridos por USCIS para trámites de inmigración.",
    longDescription: "Realizamos exámenes médicos de inmigración (I-693) requeridos por el Servicio de Ciudadanía e Inmigración de Estados Unidos (USCIS). Nuestros médicos están autorizados como Civil Surgeons para completar estos formularios oficiales.",
    icon: "FileText",
    image: "/images/services/inmigracion.webp",
    category: "especial",
    keywords: ["examen médico inmigración Houston", "I-693 Houston", "civil surgeon Houston", "médico inmigración"],
    features: [
      "Médicos autorizados (Civil Surgeons)",
      "Formulario I-693 completo",
      "Vacunas requeridas disponibles",
      "Resultados rápidos",
      "Atención en español",
      "Precios competitivos"
    ],
    highlighted: true,
    order: 2,
  },
  {
    id: "enfermedades-transmision-sexual",
    slug: "enfermedades-transmision-sexual",
    title: "Enfermedades de Transmisión Sexual (STD)",
    shortTitle: "STD",
    description: "Pruebas confidenciales y tratamiento para enfermedades de transmisión sexual.",
    longDescription: "Ofrecemos pruebas confidenciales para detectar enfermedades de transmisión sexual incluyendo VIH, herpes, clamidia, gonorrea, sífilis y más. Tratamiento disponible y consejería profesional en un ambiente discreto y sin juicio.",
    icon: "Shield",
    image: "/images/services/std.webp",
    category: "especial",
    keywords: ["prueba STD Houston", "enfermedades transmisión sexual Houston", "prueba VIH Houston"],
    features: [
      "Pruebas confidenciales",
      "Resultados rápidos",
      "Tratamiento disponible",
      "Consejería profesional",
      "Ambiente discreto",
      "Sin juicio"
    ],
    highlighted: false,
    order: 3,
  },
  {
    id: "urologia",
    slug: "urologia",
    title: "Servicios de Urología",
    shortTitle: "Urología",
    description: "Diagnóstico y tratamiento de condiciones del sistema urinario y reproductivo masculino.",
    longDescription: "Ofrecemos servicios de urología para hombres y mujeres, incluyendo diagnóstico y tratamiento de infecciones urinarias, problemas de próstata, incontinencia, y otras condiciones del sistema urinario.",
    icon: "Activity",
    image: "/images/services/urologia.webp",
    category: "especialidad",
    keywords: ["urología Houston", "urólogo Houston", "problemas próstata Houston"],
    features: [
      "Diagnóstico completo",
      "Tratamiento de infecciones",
      "Problemas de próstata",
      "Incontinencia urinaria",
      "Atención para hombres y mujeres",
      "Referencia a especialistas"
    ],
    highlighted: false,
    order: 4,
  },
  {
    id: "condiciones-cronicas",
    slug: "condiciones-cronicas",
    title: "Manejo de Condiciones Crónicas",
    shortTitle: "Crónicas",
    description: "Control y seguimiento de diabetes, hipertensión, colesterol alto y otras condiciones.",
    longDescription: "Programa integral para el manejo de condiciones crónicas como diabetes, hipertensión arterial, colesterol alto, y enfermedades cardíacas. Incluye monitoreo regular, ajuste de medicamentos, y educación para el paciente.",
    icon: "Heart",
    image: "/images/services/condiciones-cronicas.webp",
    category: "especialidad",
    keywords: ["control diabetes Houston", "hipertensión Houston", "condiciones crónicas Houston"],
    features: [
      "Monitoreo de glucosa",
      "Control de presión arterial",
      "Manejo de colesterol",
      "Ajuste de medicamentos",
      "Educación del paciente",
      "Seguimiento continuo"
    ],
    highlighted: true,
    order: 5,
  },
  {
    id: "laboratorio",
    slug: "laboratorio",
    title: "Chequeo y Análisis de Laboratorio",
    shortTitle: "Laboratorio",
    description: "Análisis clínicos completos con resultados rápidos y precisos.",
    longDescription: "Contamos con laboratorio clínico equipado con tecnología moderna para realizar una amplia variedad de análisis. Ofrecemos resultados rápidos para que usted y su médico puedan tomar decisiones informadas sobre su salud.",
    icon: "Flask",
    image: "/images/services/laboratorio.webp",
    category: "diagnostico",
    keywords: ["laboratorio clínico Houston", "análisis sangre Houston", "exámenes médicos Houston"],
    features: [
      "Resultados el mismo día",
      "Análisis de sangre completos",
      "Pruebas de glucosa y colesterol",
      "Exámenes de orina",
      "Panel metabólico",
      "Pruebas de tiroides"
    ],
    highlighted: true,
    order: 6,
  },
  {
    id: "ultrasonido",
    slug: "ultrasonido",
    title: "Ultrasonido",
    shortTitle: "Ultrasonido",
    description: "Estudios de ultrasonido para diagnóstico de diversas condiciones médicas.",
    longDescription: "Realizamos estudios de ultrasonido para diagnóstico de condiciones abdominales, pélvicas, de tiroides, y más. Tecnología de imagen avanzada con resultados interpretados por profesionales.",
    icon: "Monitor",
    image: "/images/services/ultrasonido.webp",
    category: "diagnostico",
    keywords: ["ultrasonido Houston", "ecografía Houston", "sonograma Houston"],
    features: [
      "Ultrasonido abdominal",
      "Ultrasonido pélvico",
      "Ultrasonido de tiroides",
      "Resultados rápidos",
      "Tecnología avanzada",
      "Personal capacitado"
    ],
    highlighted: false,
    order: 7,
  },
  {
    id: "ginecologia",
    slug: "ginecologia",
    title: "Servicios de Ginecología",
    shortTitle: "Ginecología",
    description: "Atención integral de salud femenina incluyendo Papanicolaou y exámenes pélvicos.",
    longDescription: "Brindamos atención integral para la salud de la mujer, incluyendo exámenes de Papanicolaou, exámenes de seno, tratamiento de infecciones, y atención prenatal básica. Nuestro equipo entiende sus necesidades.",
    icon: "GenderFemale",
    image: "/images/services/ginecologia.webp",
    category: "mujer",
    keywords: ["ginecología Houston", "Papanicolaou Houston", "salud mujer Houston"],
    features: [
      "Examen de Papanicolaou",
      "Examen de seno",
      "Examen pélvico completo",
      "Tratamiento de infecciones",
      "Atención prenatal básica",
      "Menopausia"
    ],
    highlighted: true,
    order: 8,
  },
  {
    id: "planificacion-familiar",
    slug: "planificacion-familiar",
    title: "Planificación Familiar",
    shortTitle: "Planificación",
    description: "Consejería y métodos anticonceptivos para planificación familiar responsable.",
    longDescription: "Ofrecemos consejería completa sobre métodos anticonceptivos, incluyendo píldoras, inyecciones, implantes, y DIU. Ayudamos a las parejas a tomar decisiones informadas sobre planificación familiar.",
    icon: "Users",
    image: "/images/services/planificacion-familiar.webp",
    category: "mujer",
    keywords: ["planificación familiar Houston", "anticonceptivos Houston", "métodos anticonceptivos"],
    features: [
      "Consejería personalizada",
      "Píldoras anticonceptivas",
      "Inyecciones anticonceptivas",
      "Implantes subdérmicos",
      "DIU",
      "Seguimiento continuo"
    ],
    highlighted: false,
    order: 9,
  },
  {
    id: "vacunas-anticonceptivas",
    slug: "vacunas-anticonceptivas",
    title: "Vacunas Anticonceptivas",
    shortTitle: "Anticonceptivas",
    description: "Inyecciones anticonceptivas aplicadas por profesionales de salud.",
    longDescription: "Aplicamos inyecciones anticonceptivas como Depo-Provera con seguimiento médico adecuado. Opción conveniente y efectiva para mujeres que prefieren este método de planificación familiar.",
    icon: "Syringe",
    image: "/images/services/vacunas-anticonceptivas.webp",
    category: "mujer",
    keywords: ["inyección anticonceptiva Houston", "Depo-Provera Houston", "anticonceptivo inyectable"],
    features: [
      "Inyección Depo-Provera",
      "Aplicación profesional",
      "Seguimiento médico",
      "Efectividad comprobada",
      "Conveniente",
      "Sin cita previa"
    ],
    highlighted: false,
    order: 10,
  },
  {
    id: "extraccion-implantes",
    slug: "extraccion-implantes",
    title: "Extracción de Implantes",
    shortTitle: "Implantes",
    description: "Retiro seguro de implantes anticonceptivos subdérmicos.",
    longDescription: "Realizamos la extracción segura de implantes anticonceptivos subdérmicos (Nexplanon/Implanon) cuando sea necesario cambiarlos o cuando la paciente desee otro método anticonceptivo.",
    icon: "Scissors",
    image: "/images/services/extraccion-implantes.webp",
    category: "mujer",
    keywords: ["extracción implante Houston", "quitar Nexplanon Houston", "remover implante anticonceptivo"],
    features: [
      "Procedimiento seguro",
      "Personal capacitado",
      "Anestesia local",
      "Recuperación rápida",
      "Consejería post-extracción",
      "Opciones alternativas"
    ],
    highlighted: false,
    order: 11,
  },
  {
    id: "electrocardiograma",
    slug: "electrocardiograma",
    title: "Electrocardiograma",
    shortTitle: "EKG",
    description: "Estudio de la actividad eléctrica del corazón para detectar problemas cardíacos.",
    longDescription: "Realizamos electrocardiogramas (EKG/ECG) para evaluar la actividad eléctrica del corazón. Este estudio ayuda a detectar arritmias, problemas de conducción, y otras condiciones cardíacas.",
    icon: "Activity",
    image: "/images/services/electrocardiograma.webp",
    category: "diagnostico",
    keywords: ["electrocardiograma Houston", "EKG Houston", "estudio corazón Houston"],
    features: [
      "Resultados inmediatos",
      "Detección de arritmias",
      "Evaluación cardíaca",
      "Procedimiento no invasivo",
      "Interpretación profesional",
      "Referencia si es necesario"
    ],
    highlighted: false,
    order: 12,
  },
  {
    id: "enfermedades-respiratorias",
    slug: "enfermedades-respiratorias",
    title: "Enfermedades Respiratorias",
    shortTitle: "Respiratorias",
    description: "Diagnóstico y tratamiento de gripe, bronquitis, asma, COVID-19 y más.",
    longDescription: "Tratamos todo tipo de enfermedades respiratorias incluyendo gripe, resfriado común, bronquitis, sinusitis, asma, y COVID-19. Diagnóstico rápido y tratamiento efectivo para su recuperación.",
    icon: "Wind",
    image: "/images/services/respiratorias.webp",
    category: "especial",
    keywords: ["enfermedades respiratorias Houston", "gripe Houston", "bronquitis Houston", "COVID Houston"],
    features: [
      "Diagnóstico rápido",
      "Tratamiento de gripe",
      "Bronquitis y sinusitis",
      "Pruebas de COVID-19",
      "Tratamiento de asma",
      "Nebulizaciones"
    ],
    highlighted: false,
    order: 13,
  },
  {
    id: "infecciones-urinarias",
    slug: "infecciones-urinarias",
    title: "Infecciones Urinarias",
    shortTitle: "Urinarias",
    description: "Diagnóstico y tratamiento de infecciones del tracto urinario.",
    longDescription: "Diagnosticamos y tratamos infecciones urinarias de manera efectiva. Realizamos análisis de orina en el sitio para un diagnóstico rápido y prescribimos el tratamiento antibiótico adecuado.",
    icon: "Droplet",
    image: "/images/services/infecciones-urinarias.webp",
    category: "especial",
    keywords: ["infección urinaria Houston", "UTI Houston", "cistitis Houston"],
    features: [
      "Diagnóstico rápido",
      "Análisis de orina en sitio",
      "Tratamiento antibiótico",
      "Prevención de recurrencia",
      "Atención para hombres y mujeres",
      "Sin cita previa"
    ],
    highlighted: false,
    order: 14,
  },
  {
    id: "infecciones-vaginales",
    slug: "infecciones-vaginales",
    title: "Infecciones Vaginales",
    shortTitle: "Vaginales",
    description: "Diagnóstico y tratamiento de infecciones vaginales por hongos, bacterias y más.",
    longDescription: "Ofrecemos diagnóstico y tratamiento discreto para infecciones vaginales incluyendo candidiasis, vaginosis bacteriana, tricomoniasis y otras. Ambiente de confianza y privacidad.",
    icon: "ShieldCheck",
    image: "/images/services/infecciones-vaginales.webp",
    category: "mujer",
    keywords: ["infección vaginal Houston", "candidiasis Houston", "vaginosis Houston"],
    features: [
      "Diagnóstico confidencial",
      "Tratamiento efectivo",
      "Candidiasis",
      "Vaginosis bacteriana",
      "Ambiente discreto",
      "Consejería de prevención"
    ],
    highlighted: false,
    order: 15,
  },
  {
    id: "examen-dot",
    slug: "examen-dot",
    title: "Examen Médico DOT",
    shortTitle: "DOT",
    description: "Exámenes físicos certificados para licencia de conducir comercial (CDL).",
    longDescription: "Realizamos exámenes médicos DOT (Department of Transportation) requeridos para obtener o renovar la licencia de conducir comercial (CDL). Médicos certificados y resultados rápidos.",
    icon: "Truck",
    image: "/images/services/examen-dot.webp",
    category: "diagnostico",
    keywords: ["examen DOT Houston", "físico CDL Houston", "examen conductor comercial Houston"],
    features: [
      "Médicos certificados DOT",
      "Resultados el mismo día",
      "Formulario oficial FMCSA",
      "Examen de visión incluido",
      "Precios competitivos",
      "Sin cita previa"
    ],
    highlighted: false,
    order: 16,
  },
  {
    id: "examenes-generales",
    slug: "examenes-generales",
    title: "Exámenes Generales",
    shortTitle: "Generales",
    description: "Exámenes físicos completos para trabajo, escuela, deportes y más.",
    longDescription: "Realizamos exámenes físicos generales para diversos propósitos: empleo, escuela, deportes, seguro de vida, y chequeos anuales de rutina. Documentación oficial incluida.",
    icon: "ClipboardCheck",
    image: "/images/services/examenes-generales.webp",
    category: "diagnostico",
    keywords: ["examen físico Houston", "físico laboral Houston", "examen escolar Houston"],
    features: [
      "Exámenes para empleo",
      "Exámenes escolares",
      "Exámenes deportivos",
      "Chequeo anual",
      "Documentación oficial",
      "Resultados rápidos"
    ],
    highlighted: false,
    order: 17,
  },
  {
    id: "dolores-musculares",
    slug: "dolores-musculares",
    title: "Dolores Musculares",
    shortTitle: "Musculares",
    description: "Evaluación y tratamiento de dolor muscular, articular y de espalda.",
    longDescription: "Ofrecemos evaluación completa y tratamiento del dolor muscular y articular, incluyendo dolor de espalda, cuello, hombros, rodillas y más. Enfoque integral que puede incluir medicamentos y referencia a terapia física.",
    icon: "Bone",
    image: "/images/services/dolores-musculares.webp",
    category: "especialidad",
    keywords: ["dolor muscular Houston", "dolor espalda Houston", "dolor articular Houston"],
    features: [
      "Evaluación completa",
      "Tratamiento del dolor",
      "Dolor de espalda y cuello",
      "Dolor articular",
      "Inyecciones si es necesario",
      "Referencia a especialistas"
    ],
    highlighted: false,
    order: 18,
  },
];

export const PROMOTIONS: Promotion[] = [
  {
    id: "consulta-general",
    title: "Consulta Médica General",
    badge: "Más Popular",
    description: "Evaluación médica completa con nuestros especialistas.",
    includes: [
      "Examen físico completo",
      "Revisión de signos vitales",
      "Diagnóstico profesional",
      "Receta médica si es necesario",
    ],
  },
  {
    id: "paquete-diabetes",
    title: "Paquete Control Diabetes",
    badge: "Ahorre $50",
    description: "Todo lo necesario para mantener su diabetes bajo control.",
    includes: [
      "Consulta médica",
      "Examen de glucosa en ayunas",
      "Hemoglobina A1C",
      "Plan de alimentación",
    ],
  },
  {
    id: "chequeo-completo",
    title: "Chequeo Completo",
    badge: "Recomendado",
    description: "Evaluación integral de su estado de salud.",
    includes: [
      "Examen físico completo",
      "Panel de laboratorio básico",
      "Revisión de presión y glucosa",
      "Recomendaciones personalizadas",
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "cita-previa",
    question: "faq.q1",
    answer: "faq.a1",
  },
  {
    id: "sin-seguro",
    question: "faq.q2",
    answer: "faq.a2",
  },
  {
    id: "espanol",
    question: "faq.q3",
    answer: "faq.a3",
  },
  {
    id: "horarios",
    question: "faq.q4",
    answer: "faq.a4",
  },
  {
    id: "formas-pago",
    question: "faq.q5",
    answer: "faq.a5",
  },
  {
    id: "planes-pago",
    question: "faq.q6",
    answer: "faq.a6",
  },
];

export const NAV_ITEMS = [
  { label: "nav.home", href: "#home" },
  { label: "nav.services", href: "#services" },
  { label: "nav.testimonials", href: "#testimonials" },
  { label: "nav.faq", href: "#faq" },
  { label: "nav.location", href: "#location" },
  { label: "nav.contact", href: "#contact" },
  { label: "nav.blog", href: "/blog" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "bienvenidos-clinica-hispana-airline",
    title: "¡Bienvenidos a Clínica Hispana Airline!",
    description: "Conoce nuestra clínica médica hispana en Houston, TX. Atención profesional en español, precios accesibles y un equipo comprometido con tu salud.",
    date: "2026-03-16",
    author: "Clínica Hispana Airline",
    image: "/images/blog/bienvenidos.webp",
    featured: true,
    category: "Anuncios",
    readTime: 4,
    content: `
# ¡Bienvenidos a Clínica Hispana Airline!

Estamos emocionados de darles la bienvenida a nuestra página web. En **Clínica Hispana Airline**, nos dedicamos a brindar atención médica de calidad a la comunidad hispana de Houston, TX, y áreas circundantes.

## Nuestra Misión

Nuestra misión es simple pero poderosa: proporcionar atención médica **accesible, profesional y 100% en español** a todas las familias que nos visitan. Entendemos que la barrera del idioma puede ser un obstáculo significativo cuando se trata de su salud, por eso nos aseguramos de que cada paciente se sienta cómodo y comprendido.

## ¿Por Qué Elegirnos?

### Atención en Español
Todo nuestro personal habla español fluido. Desde el momento en que entra por nuestra puerta hasta que sale con su tratamiento, usted será atendido en su idioma.

### Sin Cita Previa
Sabemos que las emergencias de salud no esperan. Por eso ofrecemos atención sin cita previa para que pueda recibir el cuidado que necesita cuando lo necesita.

### Precios Accesibles
Creemos que la salud no debe ser un lujo. Ofrecemos precios justos y transparentes, y aceptamos pacientes con o sin seguro médico.

### Ubicación Conveniente
Estamos ubicados en **934 E Tidwell Rd, Houston, TX 77022**, con fácil acceso y amplio estacionamiento.

## Nuestros Servicios

Ofrecemos una amplia gama de servicios médicos para toda la familia:

- **Medicina Familiar** - Atención integral para todas las edades
- **Exámenes de Inmigración** - Formulario I-693 con médicos autorizados
- **Laboratorio Clínico** - Resultados rápidos y precisos
- **Ginecología** - Salud integral de la mujer
- **Condiciones Crónicas** - Manejo de diabetes, hipertensión y más
- **Ultrasonido y EKG** - Diagnóstico por imagen

## Nuestro Compromiso

Cada día nos esforzamos por:

1. **Escuchar** a nuestros pacientes con atención y empatía
2. **Diagnosticar** con precisión utilizando tecnología moderna
3. **Tratar** con los mejores estándares médicos
4. **Educar** sobre prevención y cuidado de la salud

## Visítenos Hoy

Los invitamos a conocer nuestras instalaciones y a nuestro equipo de profesionales de la salud. Estamos aquí para servirle a usted y a su familia.

**Horario de Atención:**
- Lunes a Viernes: 9:00 AM - 9:00 PM
- Sábado y Domingo: 10:00 AM - 6:00 PM

**Contáctenos:**
- Teléfono: (346) 626-4110
- Dirección: 934 E Tidwell Rd, Houston, TX 77022

¡Esperamos verle pronto!

*El equipo de Clínica Hispana Airline*
    `,
  },
];
