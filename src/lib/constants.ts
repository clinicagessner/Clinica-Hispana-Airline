import type { Service, Promotion, ContactInfo, SiteConfig, SocialLinks, FAQItem, BlogPost } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: "Clínica Hispana Airline",
  shortName: "Clínica Hispana",
  tagline: "Atención médica profesional 100% en español",
  description: "Clínica médica hispana en Houston, TX. Atención profesional en español, sin cita previa, aceptamos pacientes sin seguro. Medicina familiar, urgencias menores, laboratorio y más.",
  baseUrl: "https://www.clinicahispanaairline.com",
  locale: "es-MX",
  logoUrl: "/images/logo.webp",
};

export const CONTACT_INFO: ContactInfo = {
  address: "934 E Tidwell Rd",
  city: "Houston",
  state: "TX",
  zip: "77022",
  phone: "+13466264110",
  phoneFormatted: "+1 (346) 626-4110",
  email: "clinicahispanaairline@gmail.com",
  hours: "Lun-Vie: 9AM-9PM · Sáb-Dom: 10AM-6PM",
  hoursWeekday: "Lunes a Viernes: 9:00 AM - 9:00 PM",
  hoursWeekend: "Sábado y Domingo: 10:00 AM - 6:00 PM",
  googleMapsUrl: "https://www.google.com/maps/search/Clinica+Hispana+Airline+934+E+Tidwell+Rd+Houston+TX+77022",
  googleMapsEmbed: `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY}&q=place_id:ChIJsxclc5m5QIYRyAurHml5cWA&zoom=17`,
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJsxclc5m5QIYRyAurHml5cWA",
  placeId: "ChIJsxclc5m5QIYRyAurHml5cWA",
  coordinates: {
    lat: 29.8449012,
    lng: -95.384934,
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
    title: "Medicina Familiar en Houston",
    shortTitle: "Familiar",
    description: "Médico de familia en Houston TX con atención 100% en español. Cuidado integral desde niños hasta adultos mayores, sin cita previa.",
    longDescription: "Nuestro servicio de medicina familiar en Houston ofrece atención médica completa y continua para pacientes de todas las edades. Como médico general en Houston TX, nos enfocamos en la prevención, diagnóstico y tratamiento de enfermedades comunes. Atendemos sin cita previa, aceptamos pacientes con o sin seguro médico, y mantenemos un historial médico completo de cada miembro de su familia. Precios accesibles para la comunidad hispana de Houston.",
    icon: "Stethoscope",
    image: "/images/services/family-medicine.webp",
    category: "especial",
    keywords: ["medicina familiar Houston", "doctor familia Houston", "médico general Houston", "medicina familiar cerca de mi", "doctor español Houston"],
    features: [
      "Atención para todas las edades",
      "100% en español",
      "Sin cita previa",
      "Aceptamos pacientes sin seguro",
      "Historial médico completo",
      "Vacunas y prevención"
    ],
    highlighted: true,
    order: 1,
  },
  {
    id: "examenes-inmigracion",
    slug: "examenes-inmigracion",
    title: "Examen Médico de Inmigración I-693 Houston",
    shortTitle: "Inmigración",
    description: "Examen I-693 para Green Card en Houston con Civil Surgeons certificados por USCIS. Formulario completo el mismo día, atención en español.",
    longDescription: "¿Necesita examen médico de inmigración I-693 para su Green Card en Houston? Nuestros Civil Surgeons certificados por USCIS completan el formulario oficial con precisión y rapidez. Somos expertos en exámenes de inmigración en Houston TX y entendemos la importancia de acertar desde la primera vez. Ofrecemos citas rápidas, vacunas requeridas disponibles, atención 100% en español, y precios competitivos. Resultados y formularios listos el mismo día.",
    icon: "FileText",
    image: "/images/services/immigration.webp",
    category: "especial",
    keywords: ["examen médico inmigración Houston", "I-693 Houston", "civil surgeon Houston", "médico inmigración", "examen green card Houston"],
    features: [
      "Civil Surgeons certificados USCIS",
      "Formulario I-693 completo",
      "Vacunas requeridas disponibles",
      "Resultados el mismo día",
      "Atención 100% en español",
      "Precios competitivos"
    ],
    highlighted: true,
    order: 2,
  },
  {
    id: "enfermedades-transmision-sexual",
    slug: "enfermedades-transmision-sexual",
    title: "Pruebas STD Confidenciales Houston",
    shortTitle: "STD",
    description: "Pruebas de enfermedades de transmisión sexual en Houston TX. VIH, herpes, clamidia, gonorrea y sífilis. Resultados rápidos y confidenciales.",
    longDescription: "Ofrecemos pruebas confidenciales de enfermedades de transmisión sexual en Houston TX incluyendo VIH, herpes, clamidia, gonorrea, sífilis y más. Nuestro laboratorio en Houston proporciona resultados rápidos. Tratamiento disponible inmediatamente y consejería profesional en un ambiente discreto, privado y sin juicio. Atención 100% en español con precios accesibles.",
    icon: "Shield",
    image: "/images/services/std.webp",
    category: "especial",
    keywords: ["prueba STD Houston", "enfermedades transmisión sexual Houston", "prueba VIH Houston", "test ETS Houston confidencial"],
    features: [
      "Pruebas 100% confidenciales",
      "Resultados rápidos",
      "Tratamiento inmediato disponible",
      "Consejería profesional",
      "Ambiente discreto y privado",
      "Sin juicio"
    ],
    highlighted: false,
    order: 3,
  },
  {
    id: "urologia",
    slug: "urologia",
    title: "Urología en Houston TX",
    shortTitle: "Urología",
    description: "Servicios de urología en Houston para hombres y mujeres. Diagnóstico y tratamiento de próstata, infecciones urinarias e incontinencia.",
    longDescription: "Ofrecemos servicios de urología en Houston TX para hombres y mujeres, incluyendo diagnóstico y tratamiento de infecciones urinarias, problemas de próstata, incontinencia, y otras condiciones del sistema urinario. Nuestros especialistas en Houston brindan atención personalizada en español con tecnología moderna para diagnósticos precisos.",
    icon: "Activity",
    image: "/images/services/urology.webp",
    category: "especialidad",
    keywords: ["urología Houston", "urólogo Houston", "problemas próstata Houston", "urólogo español Houston"],
    features: [
      "Diagnóstico completo",
      "Tratamiento de infecciones",
      "Evaluación de próstata",
      "Incontinencia urinaria",
      "Atención hombres y mujeres",
      "Referencia a especialistas"
    ],
    highlighted: false,
    order: 4,
  },
  {
    id: "condiciones-cronicas",
    slug: "condiciones-cronicas",
    title: "Control de Diabetes e Hipertensión Houston",
    shortTitle: "Crónicas",
    description: "Manejo de diabetes, hipertensión y colesterol en Houston TX. Monitoreo continuo, ajuste de medicamentos y educación en español.",
    longDescription: "Programa integral para el manejo de condiciones crónicas en Houston TX: diabetes, hipertensión arterial, colesterol alto, y enfermedades cardíacas. Incluye monitoreo regular de glucosa y presión arterial, ajuste de medicamentos, y educación personalizada para el paciente en español. Nuestro equipo médico en Houston le ayuda a controlar su salud con seguimiento continuo y precios accesibles.",
    icon: "Heart",
    image: "/images/services/chronic-conditions.jpg",
    category: "especialidad",
    keywords: ["control diabetes Houston", "hipertensión Houston", "condiciones crónicas Houston", "médico diabetes español Houston"],
    features: [
      "Monitoreo de glucosa",
      "Control de presión arterial",
      "Manejo de colesterol",
      "Ajuste de medicamentos",
      "Educación en español",
      "Seguimiento continuo"
    ],
    highlighted: true,
    order: 5,
  },
  {
    id: "laboratorio",
    slug: "laboratorio",
    title: "Laboratorio Clínico Houston - Resultados el Mismo Día",
    shortTitle: "Laboratorio",
    description: "Análisis de sangre y laboratorio clínico en Houston TX. Glucosa, colesterol, hemograma, tiroides y más. Resultados el mismo día.",
    longDescription: "Nuestro laboratorio clínico en Houston TX cuenta con tecnología moderna para análisis rápidos y precisos. Ofrecemos pruebas de sangre completas, glucosa, colesterol, hemograma, panel metabólico, exámenes de orina y tiroides con resultados el mismo día. Nuestro equipo profesional garantiza análisis exactos para que usted y su médico puedan tomar decisiones informadas. Atención rápida en español, sin largas esperas.",
    icon: "Flask",
    image: "/images/services/laboratory.webp",
    category: "diagnostico",
    keywords: ["laboratorio clínico Houston", "análisis sangre Houston", "exámenes médicos Houston", "prueba glucosa Houston"],
    features: [
      "Resultados el mismo día",
      "Análisis de sangre completos",
      "Glucosa y colesterol",
      "Panel metabólico",
      "Exámenes de tiroides",
      "Sin largas esperas"
    ],
    highlighted: true,
    order: 6,
  },
  {
    id: "ultrasonido",
    slug: "ultrasonido",
    title: "Ultrasonido y Ecografía Houston TX",
    shortTitle: "Ultrasonido",
    description: "Estudios de ultrasonido en Houston: abdominal, pélvico, tiroides y más. Tecnología avanzada con resultados interpretados por profesionales.",
    longDescription: "Realizamos estudios de ultrasonido y ecografía en Houston TX para diagnóstico de condiciones abdominales, pélvicas, de tiroides, y más. Nuestra clínica en Houston cuenta con tecnología de imagen avanzada y resultados interpretados por profesionales médicos. Atención rápida en español con precios accesibles para la comunidad hispana.",
    icon: "Monitor",
    image: "/images/services/ultrasound.webp",
    category: "diagnostico",
    keywords: ["ultrasonido Houston", "ecografía Houston", "sonograma Houston", "ultrasonido abdominal Houston"],
    features: [
      "Ultrasonido abdominal",
      "Ultrasonido pélvico",
      "Ultrasonido de tiroides",
      "Resultados rápidos",
      "Tecnología avanzada",
      "Interpretación profesional"
    ],
    highlighted: false,
    order: 7,
  },
  {
    id: "ginecologia",
    slug: "ginecologia",
    title: "Ginecología en Houston - Salud de la Mujer",
    shortTitle: "Ginecología",
    description: "Servicios de ginecología en Houston TX en español. Papanicolaou, examen pélvico, examen de seno y atención prenatal. Sin cita previa.",
    longDescription: "Brindamos atención integral de ginecología en Houston TX para la salud de la mujer, incluyendo exámenes de Papanicolaou, exámenes de seno, examen pélvico completo, tratamiento de infecciones, menopausia y atención prenatal básica. Nuestro equipo médico femenino en Houston entiende sus necesidades y ofrece atención confidencial 100% en español. Aceptamos pacientes sin seguro.",
    icon: "GenderFemale",
    image: "/images/services/gynecology.webp",
    category: "mujer",
    keywords: ["ginecología Houston", "Papanicolaou Houston", "salud mujer Houston", "ginecólogo español Houston"],
    features: [
      "Examen de Papanicolaou",
      "Examen de seno",
      "Examen pélvico completo",
      "Tratamiento de infecciones",
      "Atención prenatal básica",
      "Consulta de menopausia"
    ],
    highlighted: true,
    order: 8,
  },
  {
    id: "planificacion-familiar",
    slug: "planificacion-familiar",
    title: "Planificación Familiar Houston TX",
    shortTitle: "Planificación",
    description: "Métodos anticonceptivos en Houston: píldoras, inyecciones, implantes y DIU. Consejería profesional en español para parejas.",
    longDescription: "Ofrecemos servicios de planificación familiar en Houston TX con consejería completa sobre métodos anticonceptivos: píldoras, inyecciones, implantes subdérmicos, y DIU. Nuestro equipo médico en Houston ayuda a las parejas a tomar decisiones informadas sobre planificación familiar. Atención confidencial en español con seguimiento continuo y precios accesibles.",
    icon: "Users",
    image: "/images/services/family-planning.webp",
    category: "mujer",
    keywords: ["planificación familiar Houston", "anticonceptivos Houston", "métodos anticonceptivos Houston", "DIU Houston"],
    features: [
      "Consejería personalizada",
      "Píldoras anticonceptivas",
      "Inyecciones anticonceptivas",
      "Implantes subdérmicos",
      "DIU disponible",
      "Seguimiento continuo"
    ],
    highlighted: false,
    order: 9,
  },
  {
    id: "vacunas-anticonceptivas",
    slug: "vacunas-anticonceptivas",
    title: "Inyección Anticonceptiva Houston",
    shortTitle: "Anticonceptivas",
    description: "Inyecciones anticonceptivas Depo-Provera en Houston TX. Aplicación profesional con seguimiento médico. Sin cita previa.",
    longDescription: "Aplicamos inyecciones anticonceptivas Depo-Provera en Houston TX con seguimiento médico adecuado. Opción conveniente y efectiva para mujeres que prefieren este método de planificación familiar. Nuestro personal médico en Houston garantiza aplicación profesional, seguimiento continuo y atención en español. Disponible sin cita previa.",
    icon: "Syringe",
    image: "/images/services/contraceptive-vaccines.webp",
    category: "mujer",
    keywords: ["inyección anticonceptiva Houston", "Depo-Provera Houston", "anticonceptivo inyectable Houston"],
    features: [
      "Inyección Depo-Provera",
      "Aplicación profesional",
      "Seguimiento médico",
      "Efectividad comprobada",
      "Sin cita previa",
      "Atención en español"
    ],
    highlighted: false,
    order: 10,
  },
  {
    id: "extraccion-implantes",
    slug: "extraccion-implantes",
    title: "Extracción de Implantes Anticonceptivos Houston",
    shortTitle: "Implantes",
    description: "Retiro seguro de Nexplanon e Implanon en Houston TX. Procedimiento rápido con anestesia local y recuperación inmediata.",
    longDescription: "Realizamos la extracción segura de implantes anticonceptivos subdérmicos (Nexplanon/Implanon) en Houston TX. Procedimiento rápido cuando sea necesario cambiarlos o cuando la paciente desee otro método anticonceptivo. Nuestro personal capacitado en Houston utiliza anestesia local para su comodidad, con recuperación rápida y consejería sobre opciones alternativas.",
    icon: "Scissors",
    image: "/images/services/implant-removal.webp",
    category: "mujer",
    keywords: ["extracción implante Houston", "quitar Nexplanon Houston", "remover implante anticonceptivo Houston"],
    features: [
      "Procedimiento seguro",
      "Personal capacitado",
      "Anestesia local incluida",
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
    title: "Electrocardiograma EKG Houston TX",
    shortTitle: "EKG",
    description: "Electrocardiograma en Houston para detectar arritmias y problemas cardíacos. Resultados inmediatos con interpretación profesional.",
    longDescription: "Realizamos electrocardiogramas (EKG/ECG) en Houston TX para evaluar la actividad eléctrica del corazón. Este estudio no invasivo ayuda a detectar arritmias, problemas de conducción, y otras condiciones cardíacas. Resultados inmediatos con interpretación profesional en español. Nuestro equipo médico en Houston puede referirle a especialistas si es necesario.",
    icon: "Activity",
    image: "/images/services/ekg.webp",
    category: "diagnostico",
    keywords: ["electrocardiograma Houston", "EKG Houston", "estudio corazón Houston", "ECG Houston TX"],
    features: [
      "Resultados inmediatos",
      "Detección de arritmias",
      "Evaluación cardíaca completa",
      "Procedimiento no invasivo",
      "Interpretación profesional",
      "Referencia a cardiólogo"
    ],
    highlighted: false,
    order: 12,
  },
  {
    id: "enfermedades-respiratorias",
    slug: "enfermedades-respiratorias",
    title: "Tratamiento Gripe y Enfermedades Respiratorias Houston",
    shortTitle: "Respiratorias",
    description: "Tratamiento de gripe, bronquitis, asma y COVID-19 en Houston TX. Diagnóstico rápido, nebulizaciones y pruebas disponibles.",
    longDescription: "Tratamos enfermedades respiratorias en Houston TX incluyendo gripe, resfriado común, bronquitis, sinusitis, asma, y COVID-19. Nuestro equipo médico en Houston ofrece diagnóstico rápido con pruebas disponibles, tratamiento efectivo, y nebulizaciones para su recuperación. Atención sin cita previa en español con precios accesibles.",
    icon: "Wind",
    image: "/images/services/respiratory.webp",
    category: "especial",
    keywords: ["enfermedades respiratorias Houston", "gripe Houston", "bronquitis Houston", "COVID Houston", "tratamiento asma Houston"],
    features: [
      "Diagnóstico rápido",
      "Tratamiento de gripe",
      "Bronquitis y sinusitis",
      "Pruebas de COVID-19",
      "Tratamiento de asma",
      "Nebulizaciones disponibles"
    ],
    highlighted: false,
    order: 13,
  },
  {
    id: "infecciones-urinarias",
    slug: "infecciones-urinarias",
    title: "Tratamiento Infecciones Urinarias Houston",
    shortTitle: "Urinarias",
    description: "Diagnóstico y tratamiento de infecciones urinarias UTI en Houston TX. Análisis de orina en sitio con resultados y tratamiento inmediato.",
    longDescription: "Diagnosticamos y tratamos infecciones urinarias (UTI) en Houston TX de manera efectiva. Realizamos análisis de orina en el sitio para diagnóstico rápido y prescribimos tratamiento antibiótico adecuado el mismo día. Atención para hombres y mujeres sin cita previa, con consejería para prevención de recurrencia. Servicio en español.",
    icon: "Droplet",
    image: "/images/services/urinary-infections.webp",
    category: "especial",
    keywords: ["infección urinaria Houston", "UTI Houston", "cistitis Houston", "tratamiento UTI Houston"],
    features: [
      "Diagnóstico rápido",
      "Análisis de orina en sitio",
      "Tratamiento el mismo día",
      "Prevención de recurrencia",
      "Hombres y mujeres",
      "Sin cita previa"
    ],
    highlighted: false,
    order: 14,
  },
  {
    id: "infecciones-vaginales",
    slug: "infecciones-vaginales",
    title: "Tratamiento Infecciones Vaginales Houston",
    shortTitle: "Vaginales",
    description: "Diagnóstico y tratamiento confidencial de candidiasis, vaginosis bacteriana y tricomoniasis en Houston TX. Ambiente discreto.",
    longDescription: "Ofrecemos diagnóstico y tratamiento confidencial de infecciones vaginales en Houston TX incluyendo candidiasis (hongos), vaginosis bacteriana, tricomoniasis y otras. Nuestro equipo médico femenino en Houston brinda atención en un ambiente discreto y de confianza, con consejería de prevención en español.",
    icon: "ShieldCheck",
    image: "/images/services/vaginal-infections.webp",
    category: "mujer",
    keywords: ["infección vaginal Houston", "candidiasis Houston", "vaginosis Houston", "tratamiento hongos Houston"],
    features: [
      "Diagnóstico confidencial",
      "Tratamiento efectivo",
      "Candidiasis y hongos",
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
    title: "Examen Físico DOT Houston - Licencia CDL",
    shortTitle: "DOT",
    description: "Examen médico DOT en Houston TX para licencia de conducir comercial CDL. Médicos certificados FMCSA, resultados el mismo día.",
    longDescription: "Realizamos exámenes médicos DOT (Department of Transportation) en Houston TX requeridos para obtener o renovar su licencia de conducir comercial (CDL). Nuestros médicos están certificados por FMCSA con resultados el mismo día. Formulario oficial incluido, examen de visión, y precios competitivos. Atención sin cita previa en español.",
    icon: "Truck",
    image: "/images/services/dot-exam.webp",
    category: "diagnostico",
    keywords: ["examen DOT Houston", "físico CDL Houston", "examen conductor comercial Houston", "DOT physical Houston"],
    features: [
      "Médicos certificados FMCSA",
      "Resultados el mismo día",
      "Formulario oficial DOT",
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
    title: "Exámenes Físicos Houston - Trabajo, Escuela, Deportes",
    shortTitle: "Generales",
    description: "Exámenes físicos en Houston TX para empleo, escuela, deportes y chequeo anual. Documentación oficial incluida, resultados rápidos.",
    longDescription: "Realizamos exámenes físicos generales en Houston TX para diversos propósitos: empleo, escuela, deportes, seguro de vida, y chequeos anuales de rutina. Documentación oficial incluida con resultados rápidos. Nuestro equipo médico en Houston ofrece atención completa en español con precios accesibles para toda la familia.",
    icon: "ClipboardCheck",
    image: "/images/services/general-exams.webp",
    category: "diagnostico",
    keywords: ["examen físico Houston", "físico laboral Houston", "examen escolar Houston", "chequeo médico Houston"],
    features: [
      "Exámenes para empleo",
      "Exámenes escolares",
      "Exámenes deportivos",
      "Chequeo anual completo",
      "Documentación oficial",
      "Resultados rápidos"
    ],
    highlighted: false,
    order: 17,
  },
  {
    id: "dolores-musculares",
    slug: "dolores-musculares",
    title: "Tratamiento Dolor de Espalda y Muscular Houston",
    shortTitle: "Musculares",
    description: "Evaluación y tratamiento de dolor muscular, articular y de espalda en Houston TX. Inyecciones disponibles y referencia a terapia física.",
    longDescription: "Ofrecemos evaluación completa y tratamiento del dolor muscular y articular en Houston TX, incluyendo dolor de espalda, cuello, hombros, rodillas y más. Nuestro enfoque integral puede incluir medicamentos, inyecciones para alivio del dolor, y referencia a terapia física. Atención en español con seguimiento continuo.",
    icon: "Bone",
    image: "/images/services/muscle-pain.webp",
    category: "especialidad",
    keywords: ["dolor muscular Houston", "dolor espalda Houston", "dolor articular Houston", "tratamiento dolor Houston"],
    features: [
      "Evaluación completa",
      "Tratamiento del dolor",
      "Dolor de espalda y cuello",
      "Dolor articular",
      "Inyecciones disponibles",
      "Referencia a terapia física"
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
  {
    id: "ubicacion-houston",
    question: "faq.q7",
    answer: "faq.a7",
  },
  {
    id: "examen-inmigracion",
    question: "faq.q8",
    answer: "faq.a8",
  },
  {
    id: "tiempo-espera",
    question: "faq.q9",
    answer: "faq.a9",
  },
  {
    id: "estacionamiento",
    question: "faq.q10",
    answer: "faq.a10",
  },
];

export const NAV_ITEMS = [
  { label: "nav.services", href: "/services" },
  { label: "nav.greenCard", href: "/#green-card" },
  { label: "nav.blog", href: "/blog" },
  { label: "nav.contact", href: "/#contact" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "bienvenidos-clinica-hispana-airline",
    title: "¡Bienvenidos a Clínica Hispana Airline!",
    description: "Conoce nuestra clínica médica hispana en Houston, TX. Atención profesional en español, precios accesibles y un equipo comprometido con tu salud.",
    date: "2026-03-16",
    dateModified: "2026-03-21",
    author: "Clínica Hispana Airline",
    image: "/images/blog/welcome.webp",
    featured: true,
    category: "Anuncios",
    readTime: 4,
    keywords: ["clínica hispana Houston", "médicos español Houston", "doctor hispano Houston TX", "atención médica español", "clínica sin cita Houston"],
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
  {
    slug: "guia-examen-medico-inmigracion-i693-houston",
    title: "Guía Completa: Examen Médico de Inmigración I-693 en Houston",
    description: "Todo lo que necesita saber sobre el examen médico I-693 para Green Card en Houston TX. Requisitos, vacunas, costos y qué esperar con Civil Surgeons certificados.",
    date: "2026-03-18",
    dateModified: "2026-03-21",
    author: "Clínica Hispana Airline",
    image: "/images/services/immigration.webp",
    featured: false,
    category: "Inmigración",
    readTime: 8,
    keywords: ["examen I-693 Houston", "civil surgeon Houston", "examen médico inmigración", "Green Card examen médico", "USCIS medical exam Houston"],
    content: `
# Guía Completa: Examen Médico de Inmigración I-693 en Houston

Si está en proceso de obtener su Green Card o ajuste de estatus migratorio, necesitará completar el **Formulario I-693**, el examen médico oficial requerido por USCIS. En esta guía le explicamos todo lo que necesita saber para completar este proceso en Houston, TX.

## ¿Qué es el Formulario I-693?

El Formulario I-693, conocido como "Report of Medical Examination and Vaccination Record", es un documento médico oficial que certifica que usted no tiene condiciones de salud que le impidan inmigrar a Estados Unidos.

## ¿Quién Puede Realizar el Examen I-693?

Solo médicos autorizados como **Civil Surgeons** por USCIS pueden realizar este examen. En Clínica Hispana Airline, contamos con Civil Surgeons certificados que realizan estos exámenes diariamente en Houston.

## ¿Qué Incluye el Examen Médico de Inmigración?

### Examen Físico Completo
- Revisión de historial médico
- Examen de visión y audición
- Evaluación de salud mental
- Examen físico general

### Pruebas de Laboratorio
- Análisis de sangre para sífilis
- Prueba de tuberculosis (TB)
- Otras pruebas según sea necesario

### Vacunas Requeridas
USCIS requiere que los solicitantes estén al día con las siguientes vacunas:

- Hepatitis A y B
- Influenza (gripe)
- Sarampión, paperas y rubéola (MMR)
- Tétanos y difteria
- Varicela
- COVID-19

## ¿Cuánto Cuesta el Examen I-693 en Houston?

Los costos varían según la clínica. En Clínica Hispana Airline ofrecemos precios competitivos que incluyen:
- Examen médico completo
- Formulario I-693 completado
- Asesoría en español

Las vacunas se cobran por separado según las que necesite.

## ¿Qué Documentos Necesito Traer?

1. **Identificación con foto** (pasaporte, ID de su país)
2. **Registro de vacunas** (si lo tiene)
3. **Historial médico** (si tiene condiciones crónicas)
4. **Formularios de USCIS** relacionados con su caso

## ¿Cuánto Tiempo Toma el Proceso?

En nuestra clínica en Houston, el examen típicamente se completa en **1-2 horas**. Si necesita vacunas adicionales, puede requerir una segunda visita para completar la serie.

El formulario I-693 tiene una **validez de 2 años** desde la fecha del examen, o 4 años si las vacunas fueron aplicadas en ese período.

## Consejos para su Cita

### Antes de la Cita
- Traiga todos sus documentos de vacunación
- Liste todos los medicamentos que toma
- Prepare información sobre su historial médico

### Durante el Examen
- Sea honesto sobre su historial de salud
- Haga preguntas si no entiende algo
- Nuestro personal habla español

### Después del Examen
- Guarde una copia del formulario
- No abra el sobre sellado
- Presente el formulario junto con su solicitud

## ¿Por Qué Elegir Clínica Hispana Airline?

- **Civil Surgeons certificados** con experiencia
- **Atención 100% en español**
- **Resultados el mismo día** en la mayoría de casos
- **Precios competitivos** y transparentes
- **Ubicación conveniente** en Houston TX
- **Sin cita previa** disponible

## Programe su Examen Hoy

No deje que el examen médico retrase su proceso migratorio. Contáctenos hoy para programar su examen I-693.

**Clínica Hispana Airline**
- Teléfono: (346) 626-4110
- Dirección: 934 E Tidwell Rd, Houston, TX 77022
- Horario: Lunes a Viernes 9AM-9PM, Fines de semana 10AM-6PM

*Este artículo es solo informativo y no constituye asesoría legal. Consulte con un abogado de inmigración para preguntas sobre su caso específico.*
    `,
  },
  {
    slug: "control-diabetes-houston-guia-pacientes",
    title: "Control de Diabetes en Houston: Guía para Pacientes Hispanos",
    description: "Aprenda a controlar su diabetes con nuestra guía completa. Monitoreo de glucosa, alimentación, medicamentos y cómo Clínica Hispana Airline puede ayudarle.",
    date: "2026-03-19",
    dateModified: "2026-03-21",
    author: "Clínica Hispana Airline",
    image: "/images/services/chronic-conditions.jpg",
    featured: false,
    category: "Salud",
    readTime: 7,
    keywords: ["control diabetes Houston", "médico diabetes español", "hemoglobina A1C Houston", "diabetes tipo 2 Houston", "tratamiento diabetes hispanos"],
    content: `
# Control de Diabetes en Houston: Guía para Pacientes Hispanos

La diabetes afecta a millones de hispanos en Estados Unidos, y Houston no es la excepción. En Clínica Hispana Airline, entendemos los desafíos únicos que enfrenta nuestra comunidad al manejar esta condición crónica.

## ¿Qué es la Diabetes?

La diabetes es una condición donde su cuerpo no produce suficiente insulina o no la usa correctamente. Esto causa que los niveles de azúcar (glucosa) en la sangre sean demasiado altos.

### Tipos de Diabetes

- **Diabetes Tipo 1**: El cuerpo no produce insulina
- **Diabetes Tipo 2**: El cuerpo no usa la insulina correctamente (más común)
- **Diabetes Gestacional**: Ocurre durante el embarazo

## Síntomas de la Diabetes

Esté atento a estos síntomas:

- Sed excesiva
- Orinar frecuentemente
- Hambre constante
- Pérdida de peso inexplicable
- Fatiga
- Visión borrosa
- Heridas que sanan lentamente
- Hormigueo en manos o pies

## Importancia del Control Regular

### Monitoreo de Glucosa
Revisar sus niveles de glucosa regularmente es fundamental:
- **En ayunas**: 80-130 mg/dL
- **2 horas después de comer**: menos de 180 mg/dL
- **Hemoglobina A1C**: menos de 7%

### Exámenes Regulares
En Clínica Hispana Airline realizamos:
- Pruebas de glucosa en ayunas
- Hemoglobina A1C (cada 3 meses)
- Panel metabólico completo
- Examen de pies y ojos

## Alimentación para Diabéticos

### Alimentos Recomendados
- Vegetales sin almidón (espinacas, brócoli, tomate)
- Proteínas magras (pollo, pescado, frijoles)
- Granos integrales (arroz integral, avena)
- Frutas con moderación

### Alimentos a Limitar
- Azúcares y dulces
- Bebidas azucaradas (sodas, jugos)
- Pan blanco y arroz blanco
- Alimentos fritos
- Alcohol

### Consejos Prácticos
1. Coma porciones más pequeñas
2. No se salte comidas
3. Lea las etiquetas de los alimentos
4. Cocine en casa más seguido
5. Tome agua en lugar de refrescos

## Ejercicio y Diabetes

El ejercicio ayuda a controlar el azúcar en la sangre:

- **Camine 30 minutos al día**
- Haga ejercicio después de comer
- Empiece despacio si no está acostumbrado
- Consulte con su médico antes de iniciar

## Medicamentos para la Diabetes

### Tipos Comunes
- **Metformina**: Ayuda al cuerpo a usar mejor la insulina
- **Sulfonilureas**: Estimulan la producción de insulina
- **Insulina**: Para casos que lo requieran

### Consejos Importantes
- Tome sus medicamentos a la misma hora
- No deje de tomarlos sin consultar
- Informe a su médico sobre efectos secundarios
- Mantenga un registro de sus medicamentos

## Complicaciones de la Diabetes No Controlada

Si no controla su diabetes, puede desarrollar:
- Problemas del corazón
- Daño a los riñones
- Problemas de visión
- Daño a los nervios
- Problemas de circulación
- Mayor riesgo de infecciones

## Cómo Podemos Ayudarle

En **Clínica Hispana Airline** ofrecemos:

### Servicios de Diabetes
- Consultas médicas en español
- Pruebas de glucosa y A1C
- Ajuste de medicamentos
- Educación sobre nutrición
- Monitoreo continuo
- Coordinación con especialistas

### Ventajas de Nuestra Clínica
- Atención 100% en español
- Sin cita previa
- Precios accesibles
- Aceptamos pacientes sin seguro
- Seguimiento personalizado

## Programa su Consulta

No espere hasta que la diabetes afecte su calidad de vida. Visite Clínica Hispana Airline para un chequeo completo y un plan de manejo personalizado.

**Contacto:**
- Teléfono: (346) 626-4110
- Dirección: 934 E Tidwell Rd, Houston, TX 77022

*Recuerde: el control de la diabetes es un trabajo de equipo entre usted y su médico.*
    `,
  },
  {
    slug: "salud-mujer-houston-servicios-ginecologia",
    title: "Salud de la Mujer en Houston: Servicios de Ginecología en Español",
    description: "Servicios de ginecología en Houston TX con atención en español. Papanicolaou, exámenes pélvicos, planificación familiar y más en Clínica Hispana Airline.",
    date: "2026-03-20",
    dateModified: "2026-03-21",
    author: "Clínica Hispana Airline",
    image: "/images/services/gynecology.webp",
    featured: false,
    category: "Salud de la Mujer",
    readTime: 6,
    keywords: ["ginecología Houston español", "Papanicolaou Houston", "salud mujer hispana", "examen pélvico Houston", "ginecólogo hispano Houston TX"],
    content: `
# Salud de la Mujer en Houston: Servicios de Ginecología en Español

La salud femenina requiere atención especializada y, en Clínica Hispana Airline, entendemos la importancia de que cada mujer se sienta cómoda y comprendida durante sus consultas médicas.

## ¿Por Qué es Importante la Atención Ginecológica Regular?

Muchas condiciones de salud femenina pueden prevenirse o tratarse efectivamente cuando se detectan temprano. Los exámenes regulares ayudan a:

- Detectar cáncer cervical temprano
- Identificar infecciones antes de que se compliquen
- Monitorear su salud reproductiva
- Prevenir enfermedades de transmisión sexual
- Manejar síntomas de menopausia

## Nuestros Servicios de Ginecología

### Examen de Papanicolaou
El Papanicolaou (Pap smear) es una prueba que detecta células anormales en el cuello uterino que podrían convertirse en cáncer.

**¿Cada cuánto debe hacerse?**
- Mujeres de 21-29 años: cada 3 años
- Mujeres de 30-65 años: cada 3-5 años con prueba de VPH
- Después de los 65: consulte con su médico

### Examen Pélvico
Incluye revisión de:
- Útero y ovarios
- Vagina y cuello uterino
- Detección de masas o anomalías

### Examen de Seno
- Detección de bultos o cambios
- Enseñanza de autoexamen
- Referencia para mamografía si es necesario

### Planificación Familiar
Ofrecemos consejería sobre:
- Píldoras anticonceptivas
- Inyecciones (Depo-Provera)
- Implantes (Nexplanon)
- DIU
- Otros métodos

### Atención Prenatal Básica
- Confirmación de embarazo
- Primeros controles prenatales
- Vitaminas prenatales
- Referencia a obstetra

## Condiciones que Tratamos

### Infecciones Vaginales
- Candidiasis (hongos)
- Vaginosis bacteriana
- Tricomoniasis
- Infecciones por levaduras

### Problemas Menstruales
- Períodos irregulares
- Sangrado abundante
- Dolor menstrual severo
- Síndrome premenstrual

### Síntomas de Menopausia
- Sofocos
- Sequedad vaginal
- Cambios de humor
- Problemas de sueño

### Infecciones del Tracto Urinario
- Diagnóstico rápido
- Tratamiento el mismo día
- Prevención de recurrencia

## La Importancia de la Atención en Español

Entendemos que hablar sobre salud íntima puede ser difícil, especialmente si hay barreras de idioma. En Clínica Hispana Airline:

- Todo nuestro personal habla español
- Explicamos los procedimientos claramente
- Respondemos todas sus preguntas
- Creamos un ambiente de confianza
- Respetamos su privacidad

## ¿Cuándo Debe Visitar al Ginecólogo?

Haga una cita si experimenta:
- Sangrado anormal
- Dolor pélvico persistente
- Secreción vaginal inusual
- Dolor durante las relaciones
- Bultos en los senos
- Períodos muy dolorosos
- Síntomas de infección

## Exámenes de Rutina Recomendados

| Edad | Exámenes Recomendados |
|------|----------------------|
| 21+ | Papanicolaou cada 3 años |
| 30+ | Papanicolaou + VPH cada 5 años |
| 40+ | Considerar mamografía anual |
| 50+ | Exámenes de densidad ósea |

## Por Qué Elegir Clínica Hispana Airline

- **Atención confidencial** en un ambiente cómodo
- **Personal femenino** disponible
- **Sin cita previa** para mayor conveniencia
- **Precios accesibles** para todas
- **Aceptamos pacientes sin seguro**
- **Ubicación conveniente** en Houston

## Programe su Consulta

Su salud es importante. No posponga sus exámenes ginecológicos.

**Clínica Hispana Airline**
- Teléfono: (346) 626-4110
- Dirección: 934 E Tidwell Rd, Houston, TX 77022
- Horario: Lunes a Viernes 9AM-9PM

*Cuidamos la salud de la mujer hispana en Houston.*
    `,
  },
  {
    slug: "laboratorio-clinico-houston-analisis-sangre",
    title: "Laboratorio Clínico en Houston: Análisis de Sangre con Resultados Rápidos",
    description: "Laboratorio clínico en Houston TX con resultados el mismo día. Análisis de sangre, glucosa, colesterol, tiroides y más. Precios accesibles en español.",
    date: "2026-03-21",
    dateModified: "2026-03-21",
    author: "Clínica Hispana Airline",
    image: "/images/services/laboratory.webp",
    featured: false,
    category: "Diagnóstico",
    readTime: 5,
    keywords: ["laboratorio clínico Houston", "análisis sangre Houston", "prueba glucosa Houston TX", "examen colesterol Houston", "resultados mismo día Houston"],
    content: `
# Laboratorio Clínico en Houston: Análisis de Sangre con Resultados Rápidos

Los análisis de laboratorio son fundamentales para diagnosticar enfermedades, monitorear condiciones crónicas y mantener una buena salud. En Clínica Hispana Airline, ofrecemos servicios de laboratorio clínico en Houston con resultados rápidos y precios accesibles.

## ¿Por Qué Son Importantes los Análisis de Laboratorio?

Los análisis de sangre pueden:
- Detectar enfermedades antes de que causen síntomas
- Monitorear condiciones como diabetes e hipertensión
- Verificar el funcionamiento de órganos vitales
- Evaluar la efectividad de tratamientos
- Identificar deficiencias nutricionales

## Análisis de Laboratorio Disponibles

### Panel Metabólico Básico
Evalúa el funcionamiento de riñones y metabolismo:
- Glucosa en sangre
- Electrolitos (sodio, potasio)
- Función renal (creatinina, BUN)

### Panel Metabólico Completo
Incluye todo lo anterior más:
- Función hepática (ALT, AST)
- Proteínas totales
- Bilirrubina

### Perfil de Lípidos (Colesterol)
- Colesterol total
- LDL (colesterol malo)
- HDL (colesterol bueno)
- Triglicéridos

### Pruebas de Tiroides
- TSH
- T3 y T4
- Evaluación de función tiroidea

### Hemograma Completo (CBC)
- Glóbulos rojos
- Glóbulos blancos
- Plaquetas
- Hemoglobina

### Pruebas de Diabetes
- Glucosa en ayunas
- Hemoglobina A1C (promedio de 3 meses)
- Tolerancia a la glucosa

### Otras Pruebas
- Análisis de orina
- Pruebas de embarazo
- Pruebas de ETS
- Vitamina D
- Hierro y ferritina

## ¿Cuándo Debe Hacerse Análisis de Sangre?

### Chequeos Anuales
Todo adulto debería hacerse un chequeo básico anual que incluya:
- Glucosa
- Colesterol
- Función renal
- Hemograma

### Condiciones Crónicas
Si tiene diabetes, hipertensión u otra condición, necesita análisis más frecuentes según indique su médico.

### Síntomas Específicos
Consulte si experimenta:
- Fatiga inexplicable
- Pérdida o ganancia de peso
- Sed excesiva
- Cambios en la orina

## Preparación para sus Análisis

### Ayuno
Algunas pruebas requieren ayuno de 8-12 horas:
- Glucosa en ayunas
- Perfil de lípidos
- Panel metabólico

### Hidratación
- Tome agua normalmente
- Evite café y té antes del examen

### Medicamentos
- Generalmente puede tomar sus medicamentos
- Consulte con su médico si tiene dudas

## Ventajas de Nuestro Laboratorio

### Resultados el Mismo Día
La mayoría de nuestras pruebas tienen resultados en pocas horas. No tiene que esperar días para saber sus resultados.

### Tecnología Moderna
Equipos de laboratorio actualizados para resultados precisos y confiables.

### Atención en Español
Nuestro personal le explica sus resultados en español, asegurando que entienda su estado de salud.

### Precios Accesibles
Ofrecemos precios competitivos y transparentes. Pregunte por nuestros paquetes de laboratorio.

### Sin Cita Previa
Puede visitarnos cuando le sea conveniente. Atendemos sin cita previa.

## Entendiendo sus Resultados

### Valores Normales Comunes

| Prueba | Rango Normal |
|--------|-------------|
| Glucosa en ayunas | 70-100 mg/dL |
| Colesterol total | <200 mg/dL |
| LDL | <100 mg/dL |
| HDL | >40 mg/dL (hombres), >50 mg/dL (mujeres) |
| Hemoglobina A1C | <5.7% |

*Los valores pueden variar según el laboratorio. Su médico interpretará sus resultados.*

## Programe sus Análisis

Mantenga su salud bajo control con análisis regulares.

**Clínica Hispana Airline**
- Teléfono: (346) 626-4110
- Dirección: 934 E Tidwell Rd, Houston, TX 77022
- Horario: Lunes a Viernes 9AM-9PM

*Resultados rápidos, atención en español, precios justos.*
    `,
  },
  {
    slug: "atencion-medica-sin-seguro-houston",
    title: "Atención Médica Sin Seguro en Houston: Opciones Accesibles",
    description: "¿No tiene seguro médico en Houston? Conozca sus opciones para recibir atención médica accesible y de calidad en Clínica Hispana Airline.",
    date: "2026-03-17",
    dateModified: "2026-03-21",
    author: "Clínica Hispana Airline",
    image: "/images/services/family-medicine.webp",
    featured: false,
    category: "Información",
    readTime: 5,
    keywords: ["médico sin seguro Houston", "clínica sin seguro Houston TX", "atención médica accesible Houston", "doctor barato Houston", "healthcare no insurance Houston"],
    content: `
# Atención Médica Sin Seguro en Houston: Opciones Accesibles

Millones de personas en Houston no tienen seguro médico, pero eso no significa que deban ignorar su salud. En Clínica Hispana Airline, creemos que todos merecen acceso a atención médica de calidad, independientemente de su situación de seguro.

## La Realidad del Seguro Médico en Houston

Muchas familias hispanas en Houston enfrentan desafíos para obtener seguro médico:
- Empleos que no ofrecen beneficios
- Costos elevados de primas
- Estatus migratorio
- Trabajos por cuenta propia

## Por Qué No Debe Ignorar su Salud

Posponer la atención médica puede resultar en:
- Condiciones que empeoran con el tiempo
- Emergencias médicas costosas
- Complicaciones evitables
- Mayor gasto a largo plazo

## Opciones de Atención Sin Seguro

### Clínicas Comunitarias
Clínicas como la nuestra ofrecen atención a precios accesibles para pacientes sin seguro.

### Programas de Asistencia
Algunos hospitales y clínicas ofrecen programas de pago basados en ingresos.

### Centros de Salud Federales (FQHC)
Financiados por el gobierno, atienden a todos independientemente de su capacidad de pago.

## Cómo Funciona la Atención en Clínica Hispana Airline

### Precios Transparentes
Le informamos el costo antes de cualquier servicio. Sin sorpresas.

### Opciones de Pago
- Efectivo
- Tarjetas de crédito/débito
- Planes de pago disponibles

### Servicios Incluidos
Todos nuestros servicios están disponibles para pacientes sin seguro:
- Consultas médicas
- Laboratorio
- Ultrasonido
- Vacunas
- Exámenes físicos

## Cómo Ahorrar en Atención Médica

### Prevención
Es más barato prevenir que tratar:
- Chequeos anuales
- Vacunas al día
- Control de condiciones crónicas

### Atención Temprana
No espere hasta que sea una emergencia. Tratar condiciones temprano es menos costoso.

### Clínicas vs. Emergencias
Las salas de emergencia son mucho más caras que las clínicas. Use las emergencias solo para verdaderas emergencias.

### Pregunte por Precios
No tenga pena de preguntar cuánto cuesta cada servicio antes de recibirlo.

## Programas de Vacunas Accesibles

Algunas vacunas están disponibles a bajo costo o gratis:
- Vacunas para niños
- Vacunas de influenza
- Programas comunitarios de vacunación

## Medicamentos Accesibles

### Medicamentos Genéricos
Igual de efectivos que los de marca a una fracción del costo.

### Programas de Descuento
Farmacias como Walmart, Costco y HEB ofrecen medicamentos a $4.

### Asistencia del Fabricante
Muchas farmacéuticas ofrecen programas de asistencia para pacientes.

## Su Salud es una Inversión

Aunque pueda parecer un gasto, invertir en su salud:
- Previene gastos mayores futuros
- Le permite trabajar y mantener a su familia
- Mejora su calidad de vida
- Protege a quienes dependen de usted

## Nuestro Compromiso

En **Clínica Hispana Airline** nos comprometemos a:
- Ofrecer precios justos y accesibles
- Atender a todos, con o sin seguro
- Nunca rechazar a un paciente por su situación económica
- Brindar atención de calidad en español

## Visite Clínica Hispana Airline

No permita que la falta de seguro le impida cuidar su salud.

**Contacto:**
- Teléfono: (346) 626-4110
- Dirección: 934 E Tidwell Rd, Houston, TX 77022
- Sin cita previa

*Atención médica de calidad al alcance de todos.*
    `,
  },
];
