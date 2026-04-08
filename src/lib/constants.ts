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
  hours: "Lunes a Domingo: 9:00 AM - 9:00 PM",
  hoursWeekday: "Lunes a Viernes: 9:00 AM - 9:00 PM",
  hoursWeekend: "Sábado y Domingo: 9:00 AM - 9:00 PM",
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
    longDescription: "Nuestro servicio de medicina familiar en Houston ofrece atención médica completa y continua para pacientes de todas las edades, desde recién nacidos hasta adultos mayores. Como médico general en Houston TX, nos enfocamos en la prevención, diagnóstico y tratamiento de enfermedades comunes.\n\nAtendemos sin cita previa en nuestra clínica ubicada en 934 E Tidwell Rd, Houston TX 77022, aceptamos pacientes con o sin seguro médico, y mantenemos un historial médico completo de cada miembro de su familia.\n\n**¿Qué incluye nuestra consulta de medicina familiar?**\n\nDurante su visita, nuestro médico realizará un examen físico completo, revisión de signos vitales (presión arterial, temperatura, peso, pulso), evaluación de síntomas actuales, y diagnóstico profesional. Si es necesario, se prescribirá medicamento y se ordenarán estudios de laboratorio con resultados el mismo día.\n\n**Condiciones que tratamos:**\n\n- Resfriados, gripe e infecciones respiratorias\n- Dolor de garganta, oído e infecciones\n- Alergias estacionales\n- Dolores musculares y articulares\n- Problemas digestivos\n- Control de presión arterial y glucosa\n- Chequeos preventivos anuales\n- Vacunas para niños y adultos\n\n**¿Por qué elegir Clínica Hispana Airline para medicina familiar?**\n\nNuestro equipo médico atiende 100% en español, entiende las necesidades de la comunidad hispana de Houston, y ofrece precios accesibles sin comprometer la calidad de atención. Estamos abiertos de lunes a viernes de 9AM a 9PM y sábados y domingos de 10AM a 6PM, para que pueda visitarnos cuando lo necesite sin largas esperas.",
    titleEn: "Family Medicine in Houston TX",
    descriptionEn: "Family doctor in Houston TX with 100% Spanish-speaking staff. Comprehensive care for patients of all ages — from newborns to seniors — no appointment needed.",
    longDescriptionEn: "Our family medicine practice in Houston provides complete, continuous medical care for patients of all ages, from newborns to the elderly. As a trusted general practitioner in Houston TX, we focus on prevention, diagnosis, and treatment of common illnesses and chronic conditions.\n\nWe welcome walk-in patients at our clinic located at 934 E Tidwell Rd, Houston TX 77022. We accept patients with or without health insurance and maintain a complete medical history for every member of your family.\n\n**What does a family medicine visit include?**\n\nDuring your visit, our physician will perform a thorough physical examination, review your vital signs (blood pressure, temperature, weight, and pulse), assess your current symptoms, and provide a professional diagnosis. When needed, prescriptions and same-day lab orders are available on-site.\n\n**Conditions we treat:**\n\n- Colds, flu, and respiratory infections\n- Sore throat, ear infections, and sinusitis\n- Seasonal allergies\n- Muscle and joint pain\n- Digestive issues and stomach problems\n- Blood pressure and blood sugar management\n- Annual preventive checkups\n- Vaccines for children and adults\n\n**Why choose Clínica Hispana Airline for family medicine?**\n\nOur medical team is fully bilingual and deeply understands the needs of Houston's Hispanic community. We offer affordable, high-quality care with no long waits. We're open Monday through Friday from 9AM to 9PM, and Saturday and Sunday from 10AM to 6PM.",
    icon: "Stethoscope",
    image: "/images/services/family-medicine.webp",
    category: "especial",
    keywords: ["medicina familiar Houston", "doctor familia Houston", "médico general Houston", "medicina familiar cerca de mi", "doctor español Houston"],
    keywordsEn: ["family medicine Houston", "family doctor Houston TX", "general practitioner Houston", "family doctor near me Houston", "Spanish speaking doctor Houston"],
    features: [
      "Atención para todas las edades",
      "100% en español",
      "Sin cita previa",
      "Aceptamos pacientes sin seguro",
      "Historial médico completo",
      "Vacunas y prevención"
    ],
    featuresEn: ["Care for all ages", "100% Spanish-speaking staff", "No appointment needed", "Uninsured patients welcome", "Complete medical history", "Vaccines & preventive care"],
    highlighted: true,
    order: 1,
  },
  {
    id: "examenes-inmigracion",
    slug: "examenes-inmigracion",
    title: "Examen Médico de Inmigración I-693 Houston",
    shortTitle: "Inmigración",
    description: "Examen I-693 para Green Card en Houston con Civil Surgeons certificados por USCIS. Formulario completo el mismo día, atención en español.",
    longDescription: "¿Necesita el examen médico de inmigración I-693 para su Green Card en Houston? En Clínica Hispana Airline contamos con Civil Surgeons certificados por USCIS que completan el formulario oficial con precisión y rapidez. Somos expertos en exámenes de inmigración en Houston TX y entendemos la importancia de acertar desde la primera vez.\n\n**¿Qué incluye el examen médico I-693?**\n\nEl examen de inmigración es un requisito obligatorio para obtener la residencia permanente (Green Card) en Estados Unidos. Durante su visita, nuestro Civil Surgeon realizará:\n\n- Examen físico completo\n- Revisión de historial médico y vacunas\n- Prueba de tuberculosis (TB test)\n- Análisis de sangre requeridos por USCIS\n- Aplicación de vacunas faltantes según el calendario de inmunización de CDC\n- Llenado completo y firma del formulario I-693\n\n**¿Qué documentos necesita traer?**\n\n- Identificación válida con foto (pasaporte, ID estatal o licencia)\n- Récord de vacunas previas (si los tiene disponibles)\n- Formulario I-693 en blanco (nosotros también podemos proporcionarlo)\n\n**¿Cuánto tiempo toma el proceso?**\n\nEn la mayoría de los casos, completamos todo el examen y el formulario I-693 en una sola visita. Los resultados de laboratorio y el formulario firmado están listos el mismo día, para que usted pueda enviarlo a USCIS sin demoras.\n\n**¿Por qué elegir Clínica Hispana Airline para su examen I-693?**\n\nNuestros Civil Surgeons tienen amplia experiencia con el proceso de inmigración y completan el formulario correctamente la primera vez, evitando rechazos o retrasos en su caso. Atención 100% en español, vacunas requeridas disponibles en la clínica, y precios competitivos. Ubicados en 934 E Tidwell Rd, Houston TX 77022, con horario extendido de lunes a domingo.",
    titleEn: "I-693 Immigration Medical Exam Houston",
    descriptionEn: "USCIS-certified Civil Surgeons in Houston TX for Green Card immigration medical exams. Complete I-693 form same day, full service in English and Spanish.",
    longDescriptionEn: "Need an I-693 immigration medical exam for your Green Card in Houston? At Clínica Hispana Airline, our USCIS-certified Civil Surgeons complete the official I-693 form accurately and efficiently. We specialize in immigration physicals in Houston TX and understand how important it is to get everything right the first time.\n\n**What does the I-693 immigration medical exam include?**\n\nThe immigration physical is a mandatory requirement to obtain permanent residency (Green Card) in the United States. During your visit, our Civil Surgeon will perform:\n\n- Complete physical examination\n- Medical history and vaccination record review\n- Tuberculosis (TB) test\n- Required blood tests per USCIS guidelines\n- Administration of any missing vaccines per CDC immunization schedule\n- Complete completion and signing of Form I-693\n\n**What documents should you bring?**\n\n- Valid government-issued photo ID (passport, state ID, or driver's license)\n- Previous vaccination records (if available)\n- Blank Form I-693 (we can also provide one for you)\n\n**How long does the process take?**\n\nIn most cases, we complete the full exam and Form I-693 in a single visit. Lab results and the signed form are ready the same day, so you can submit your application to USCIS without delay.\n\n**Why choose Clínica Hispana Airline for your I-693 exam?**\n\nOur Civil Surgeons have extensive experience with the immigration process and complete the form correctly the first time — avoiding rejections or delays in your case. Full Spanish-language service available, required vaccines on-site, and competitive pricing. Located at 934 E Tidwell Rd, Houston TX 77022, with extended hours Monday through Sunday.",
    icon: "FileText",
    image: "/images/services/immigration.webp",
    category: "especial",
    keywords: ["examen médico inmigración Houston", "I-693 Houston", "civil surgeon Houston", "médico inmigración", "examen green card Houston"],
    keywordsEn: ["immigration medical exam Houston", "I-693 Houston TX", "civil surgeon Houston", "immigration doctor Houston", "Green Card medical exam Houston"],
    features: [
      "Civil Surgeons certificados USCIS",
      "Formulario I-693 completo",
      "Vacunas requeridas disponibles",
      "Resultados el mismo día",
      "Atención 100% en español",
      "Precios competitivos"
    ],
    featuresEn: ["USCIS-certified Civil Surgeons", "Complete I-693 form", "Required vaccines available", "Same-day results", "Full Spanish-language service", "Competitive pricing"],
    highlighted: true,
    order: 2,
  },
  {
    id: "enfermedades-transmision-sexual",
    slug: "enfermedades-transmision-sexual",
    title: "Pruebas STD Confidenciales Houston",
    shortTitle: "STD",
    description: "Pruebas de enfermedades de transmisión sexual en Houston TX. VIH, herpes, clamidia, gonorrea y sífilis. Resultados rápidos y confidenciales.",
    longDescription: "Ofrecemos pruebas confidenciales de enfermedades de transmisión sexual (ETS/STD) en Houston TX. Nuestro laboratorio proporciona resultados rápidos con tratamiento disponible inmediatamente y consejería profesional en un ambiente discreto, privado y sin juicio.\n\n**Pruebas disponibles:**\n\n- VIH (HIV)\n- Herpes (HSV-1 y HSV-2)\n- Clamidia\n- Gonorrea\n- Sífilis (RPR/VDRL)\n- Hepatitis B y C\n- Tricomoniasis\n- VPH (Virus del Papiloma Humano)\n\n**¿Cómo funciona el proceso?**\n\nPuede visitarnos sin cita previa. La consulta es completamente privada y confidencial. Nuestro médico evaluará sus síntomas, ordenará las pruebas necesarias (análisis de sangre, orina, o hisopado según el caso), y recibirá sus resultados de forma segura. Si el resultado es positivo, el tratamiento antibiótico o antiviral se prescribe el mismo día.\n\n**¿Por qué es importante hacerse pruebas?**\n\nMuchas enfermedades de transmisión sexual no presentan síntomas visibles pero pueden causar complicaciones serias si no se tratan a tiempo, incluyendo infertilidad, daño a órganos, y transmisión a la pareja. Las pruebas regulares son la mejor forma de proteger su salud y la de su familia.\n\n**Ambiente seguro y sin juicio**\n\nEntendemos que este tema puede ser difícil de hablar. En Clínica Hispana Airline, nuestro equipo médico en Houston le atiende con respeto, profesionalismo y total confidencialidad. Atención 100% en español con precios accesibles para la comunidad hispana.",
    titleEn: "Confidential STD Testing Houston TX",
    descriptionEn: "STD testing in Houston TX — HIV, herpes, chlamydia, gonorrhea, and syphilis. Fast, confidential results with same-day treatment available.",
    longDescriptionEn: "We offer confidential sexually transmitted disease (STD/STI) testing in Houston TX. Our on-site lab provides fast results with immediate treatment available and professional counseling — all in a discreet, private, and judgment-free environment.\n\n**Available STD tests:**\n\n- HIV\n- Herpes (HSV-1 and HSV-2)\n- Chlamydia\n- Gonorrhea\n- Syphilis (RPR/VDRL)\n- Hepatitis B and C\n- Trichomoniasis\n- HPV (Human Papillomavirus)\n\n**How does the process work?**\n\nNo appointment is necessary. Your visit is completely private and confidential. Our physician will review your symptoms, order the appropriate tests (blood draw, urine sample, or swab depending on your situation), and deliver your results securely. If a result comes back positive, antibiotic or antiviral treatment is prescribed the same day.\n\n**Why is STD testing important?**\n\nMany sexually transmitted infections have no visible symptoms but can lead to serious complications if left untreated — including infertility, organ damage, and transmission to partners. Regular testing is the best way to protect your health and the health of those around you.\n\n**A safe, judgment-free environment**\n\nWe understand that this topic can be difficult to discuss. At Clínica Hispana Airline, our medical team treats every patient with respect, professionalism, and complete confidentiality. Full Spanish-language service available with affordable pricing for Houston's Hispanic community.",
    icon: "Shield",
    image: "/images/services/std.webp",
    category: "especial",
    keywords: ["prueba STD Houston", "enfermedades transmisión sexual Houston", "prueba VIH Houston", "test ETS Houston confidencial"],
    keywordsEn: ["STD testing Houston", "STI testing Houston TX", "HIV test Houston", "confidential STD test Houston", "sexual health clinic Houston"],
    features: [
      "Pruebas 100% confidenciales",
      "Resultados rápidos",
      "Tratamiento inmediato disponible",
      "Consejería profesional",
      "Ambiente discreto y privado",
      "Sin juicio"
    ],
    featuresEn: ["100% confidential testing", "Fast results", "Same-day treatment available", "Professional counseling", "Discreet, private environment", "Judgment-free care"],
    highlighted: false,
    order: 3,
  },
  {
    id: "urologia",
    slug: "urologia",
    title: "Urología en Houston TX",
    shortTitle: "Urología",
    description: "Servicios de urología en Houston para hombres y mujeres. Diagnóstico y tratamiento de próstata, infecciones urinarias e incontinencia.",
    longDescription: "Ofrecemos servicios de urología en Houston TX para hombres y mujeres, incluyendo diagnóstico y tratamiento de condiciones del sistema urinario y reproductivo masculino. Nuestro equipo médico en Houston brinda atención personalizada en español con tecnología moderna para diagnósticos precisos.\n\n**Condiciones que evaluamos y tratamos:**\n\n- Infecciones urinarias recurrentes\n- Problemas de próstata (agrandamiento, PSA elevado)\n- Incontinencia urinaria\n- Dolor al orinar o sangre en la orina\n- Cálculos renales\n- Disfunción eréctil\n- Infecciones del tracto urinario en hombres\n- Evaluación de vejiga\n\n**¿Qué incluye la consulta de urología?**\n\nDurante su visita, nuestro médico realizará una evaluación completa de sus síntomas, examen físico, y ordenará los estudios necesarios como análisis de orina, análisis de sangre (incluyendo PSA para hombres), o ultrasonido si es necesario. Todo disponible en nuestra clínica en Houston.\n\n**¿Cuándo debe consultar por urología?**\n\nSi experimenta dolor al orinar, necesidad frecuente de ir al baño, dificultad para vaciar la vejiga, sangre en la orina, o dolor en la zona pélvica o lumbar, es importante consultar a un profesional. La detección temprana puede prevenir complicaciones mayores.\n\n**Atención especializada en Houston**\n\nSi su condición requiere atención especializada adicional, nuestro equipo médico le referirá a urólogos certificados de confianza en el área de Houston. Atención en español, sin cita previa, con precios accesibles.",
    titleEn: "Urology Services Houston TX",
    descriptionEn: "Urology care in Houston for men and women. Diagnosis and treatment of prostate conditions, urinary tract infections, and incontinence.",
    longDescriptionEn: "We provide urology services in Houston TX for both men and women, including diagnosis and treatment of urinary tract and male reproductive system conditions. Our Houston medical team delivers personalized, Spanish-language care using modern diagnostic technology for accurate results.\n\n**Conditions we evaluate and treat:**\n\n- Recurrent urinary tract infections (UTIs)\n- Prostate issues (enlarged prostate, elevated PSA)\n- Urinary incontinence\n- Pain or burning during urination, or blood in urine\n- Kidney stones\n- Erectile dysfunction\n- Male urinary tract infections\n- Bladder evaluation\n\n**What does a urology consultation include?**\n\nDuring your visit, our physician will conduct a complete evaluation of your symptoms, perform a physical exam, and order any necessary tests — including urinalysis, blood work (PSA screening for men), or an ultrasound if indicated. All diagnostic services are available in our Houston clinic.\n\n**When should you see a doctor for urology concerns?**\n\nIf you experience painful urination, frequent urges to urinate, difficulty emptying your bladder, blood in your urine, or pelvic and lower back pain, it's important to seek professional evaluation. Early detection can prevent more serious complications.\n\n**Specialized care in Houston**\n\nIf your condition requires additional specialist care, our medical team will refer you to trusted, board-certified urologists in the Houston area. Spanish-language service available, walk-ins welcome, with affordable pricing.",
    icon: "Activity",
    image: "/images/services/urology.webp",
    category: "especialidad",
    keywords: ["urología Houston", "urólogo Houston", "problemas próstata Houston", "urólogo español Houston"],
    keywordsEn: ["urology Houston TX", "urologist Houston", "prostate problems Houston", "Spanish speaking urologist Houston", "urinary tract specialist Houston"],
    features: [
      "Diagnóstico completo",
      "Tratamiento de infecciones",
      "Evaluación de próstata",
      "Incontinencia urinaria",
      "Atención hombres y mujeres",
      "Referencia a especialistas"
    ],
    featuresEn: ["Comprehensive diagnosis", "Infection treatment", "Prostate evaluation", "Urinary incontinence care", "Men & women welcome", "Specialist referrals available"],
    highlighted: false,
    order: 4,
  },
  {
    id: "condiciones-cronicas",
    slug: "condiciones-cronicas",
    title: "Control de Diabetes e Hipertensión Houston",
    shortTitle: "Crónicas",
    description: "Manejo de diabetes, hipertensión y colesterol en Houston TX. Monitoreo continuo, ajuste de medicamentos y educación en español.",
    longDescription: "Programa integral para el manejo de condiciones crónicas en Houston TX. La diabetes, hipertensión arterial y colesterol alto son condiciones que afectan a millones de hispanos en Estados Unidos. En Clínica Hispana Airline ofrecemos un programa de seguimiento continuo para ayudarle a controlar su salud.\n\n**¿Qué incluye nuestro programa de control de condiciones crónicas?**\n\n- Monitoreo regular de glucosa en sangre y hemoglobina A1C\n- Medición y control de presión arterial\n- Panel de colesterol y lípidos\n- Evaluación de función renal y hepática\n- Ajuste de medicamentos según sus niveles\n- Educación personalizada sobre dieta y estilo de vida\n- Plan de seguimiento con visitas programadas\n\n**Diabetes: por qué el control es importante**\n\nLa diabetes no controlada puede causar daño a los riñones, pérdida de visión, problemas de circulación y neuropatía. Con monitoreo regular y ajuste de medicamentos, la mayoría de los pacientes logran mantener sus niveles de glucosa en rango saludable y prevenir complicaciones.\n\n**Hipertensión: el enemigo silencioso**\n\nLa presión arterial alta generalmente no presenta síntomas pero aumenta el riesgo de ataque cardíaco y derrame cerebral. Nuestro equipo médico en Houston monitorea su presión en cada visita y ajusta su tratamiento para mantenerla bajo control.\n\n**¿Por qué elegir Clínica Hispana Airline?**\n\nNuestro equipo médico habla español, entiende los factores culturales y alimenticios de la comunidad hispana, y ofrece educación en un idioma que usted comprende completamente. Laboratorio en la clínica con resultados el mismo día, precios accesibles, y horario extendido para que no tenga que faltar al trabajo.",
    titleEn: "Diabetes & Hypertension Management Houston",
    descriptionEn: "Diabetes, hypertension, and cholesterol management in Houston TX. Ongoing monitoring, medication adjustments, and patient education in English and Spanish.",
    longDescriptionEn: "We offer a comprehensive chronic condition management program in Houston TX. Diabetes, high blood pressure, and high cholesterol affect millions of Hispanic Americans — and at Clínica Hispana Airline, we provide a structured, ongoing monitoring program to help you take control of your health.\n\n**What our chronic condition program includes:**\n\n- Regular blood glucose and hemoglobin A1C monitoring\n- Blood pressure measurement and control\n- Cholesterol and lipid panel testing\n- Kidney and liver function evaluation\n- Medication adjustments based on your current levels\n- Personalized education on diet and lifestyle changes\n- Scheduled follow-up visits and care plan\n\n**Diabetes: why consistent management matters**\n\nUncontrolled diabetes can cause kidney damage, vision loss, poor circulation, and neuropathy. With regular monitoring and timely medication adjustments, most patients are able to keep their blood sugar levels in a healthy range and avoid serious complications.\n\n**Hypertension: the silent threat**\n\nHigh blood pressure typically presents no symptoms, yet it significantly increases the risk of heart attack and stroke. Our Houston medical team checks your blood pressure at every visit and fine-tunes your treatment to keep it under control.\n\n**Why choose Clínica Hispana Airline?**\n\nOur medical team is fluent in Spanish and understands the cultural and dietary factors unique to the Hispanic community. We offer education you can truly understand, on-site lab services with same-day results, affordable pricing, and extended hours so you never have to miss work for an appointment.",
    icon: "Heart",
    image: "/images/services/chronic-conditions.jpg",
    category: "especialidad",
    keywords: ["control diabetes Houston", "hipertensión Houston", "condiciones crónicas Houston", "médico diabetes español Houston"],
    keywordsEn: ["diabetes management Houston", "hypertension doctor Houston TX", "chronic conditions clinic Houston", "Spanish speaking diabetes doctor Houston", "high blood pressure treatment Houston"],
    features: [
      "Monitoreo de glucosa",
      "Control de presión arterial",
      "Manejo de colesterol",
      "Ajuste de medicamentos",
      "Educación en español",
      "Seguimiento continuo"
    ],
    featuresEn: ["Blood glucose monitoring", "Blood pressure control", "Cholesterol management", "Medication adjustments", "Patient education in Spanish", "Ongoing follow-up care"],
    highlighted: true,
    order: 5,
  },
  {
    id: "laboratorio",
    slug: "laboratorio",
    title: "Laboratorio Clínico Houston - Resultados el Mismo Día",
    shortTitle: "Laboratorio",
    description: "Análisis de sangre y laboratorio clínico en Houston TX. Glucosa, colesterol, hemograma, tiroides y más. Resultados el mismo día.",
    longDescription: "Nuestro laboratorio clínico en Houston TX cuenta con tecnología moderna para análisis rápidos y precisos. Ofrecemos una amplia gama de pruebas de laboratorio con resultados el mismo día, para que usted y su médico puedan tomar decisiones informadas sin esperar días.\n\n**Pruebas de laboratorio disponibles:**\n\n- Hemograma completo (CBC)\n- Glucosa en ayunas y hemoglobina A1C\n- Panel de colesterol y lípidos\n- Panel metabólico completo (CMP)\n- Función tiroidea (TSH, T3, T4)\n- Función hepática y renal\n- Análisis de orina completo\n- Prueba de embarazo\n- Ácido úrico\n- Vitamina D y B12\n- Panel de hierro y ferritina\n- Pruebas de ETS (VIH, hepatitis, sífilis)\n\n**¿Cómo funciona el proceso?**\n\nPuede visitarnos sin cita previa. Nuestro personal capacitado realiza la toma de muestra de sangre de forma rápida y profesional. Para pruebas de glucosa y colesterol, se recomienda ayuno de 8-12 horas. Los resultados están disponibles el mismo día en la mayoría de los casos.\n\n**¿Para qué sirven los análisis de sangre?**\n\nLos exámenes de laboratorio son fundamentales para detectar condiciones de salud antes de que presenten síntomas, monitorear enfermedades crónicas como diabetes e hipertensión, y evaluar el funcionamiento general de sus órganos.\n\n**Laboratorio en la clínica**\n\nA diferencia de otros laboratorios en Houston que requieren cita y tardan días en entregar resultados, nuestro laboratorio está dentro de la clínica. Esto significa que su médico puede ordenar y revisar sus resultados en la misma visita, ahorrándole tiempo y visitas adicionales. Atención en español con precios accesibles.",
    titleEn: "Clinical Laboratory Houston - Same-Day Results",
    descriptionEn: "Blood tests and clinical lab services in Houston TX. Glucose, cholesterol, CBC, thyroid panels, and more — results available the same day.",
    longDescriptionEn: "Our clinical laboratory in Houston TX features modern technology for fast, accurate analysis. We offer a wide range of lab tests with same-day results so you and your doctor can make informed decisions without waiting days.\n\n**Available lab tests:**\n\n- Complete blood count (CBC)\n- Fasting glucose and hemoglobin A1C\n- Cholesterol and lipid panel\n- Comprehensive metabolic panel (CMP)\n- Thyroid function (TSH, T3, T4)\n- Liver and kidney function\n- Complete urinalysis\n- Pregnancy test\n- Uric acid\n- Vitamin D and B12\n- Iron and ferritin panel\n- STD testing (HIV, hepatitis, syphilis)\n\n**How does it work?**\n\nNo appointment needed. Our trained staff performs blood draws quickly and professionally. For glucose and cholesterol tests, an 8–12 hour fast is recommended. Results are available the same day in most cases.\n\n**Why do blood tests matter?**\n\nLab tests are essential for detecting health conditions before symptoms appear, monitoring chronic diseases like diabetes and hypertension, and evaluating the overall function of your vital organs.\n\n**On-site lab — no referral needed**\n\nUnlike standalone labs in Houston that require appointments and take days to return results, our laboratory is located inside the clinic. This means your doctor can order and review your results during the same visit — saving you time and extra trips. Spanish-language service available with affordable, transparent pricing.",
    icon: "Flask",
    image: "/images/services/laboratory.webp",
    category: "diagnostico",
    keywords: ["laboratorio clínico Houston", "análisis sangre Houston", "exámenes médicos Houston", "prueba glucosa Houston"],
    keywordsEn: ["clinical laboratory Houston", "blood test Houston TX", "same-day lab results Houston", "glucose test Houston", "medical lab near me Houston"],
    features: [
      "Resultados el mismo día",
      "Análisis de sangre completos",
      "Glucosa y colesterol",
      "Panel metabólico",
      "Exámenes de tiroides",
      "Sin largas esperas"
    ],
    featuresEn: ["Same-day results", "Comprehensive blood panels", "Glucose & cholesterol testing", "Metabolic panel", "Thyroid testing", "No long waits"],
    highlighted: true,
    order: 6,
  },
  {
    id: "ultrasonido",
    slug: "ultrasonido",
    title: "Ultrasonido y Ecografía Houston TX",
    shortTitle: "Ultrasonido",
    description: "Estudios de ultrasonido en Houston: abdominal, pélvico, tiroides y más. Tecnología avanzada con resultados interpretados por profesionales.",
    longDescription: "Realizamos estudios de ultrasonido y ecografía en Houston TX para diagnóstico de diversas condiciones médicas. Nuestra clínica cuenta con equipo de imagen avanzado y resultados interpretados por profesionales médicos.\n\n**Tipos de ultrasonido disponibles:**\n\n- Ultrasonido abdominal (hígado, vesícula, páncreas, riñones)\n- Ultrasonido pélvico (útero, ovarios, vejiga)\n- Ultrasonido de tiroides\n- Ultrasonido de tejidos blandos\n- Ultrasonido renal\n- Ecografía obstétrica básica\n\n**¿Cuándo se necesita un ultrasonido?**\n\nSu médico puede ordenar un ultrasonido cuando sospecha de cálculos en la vesícula o riñón, quistes, masas o inflamación en órganos internos, problemas de tiroides, dolor abdominal o pélvico inexplicable, o como parte de un chequeo de rutina.\n\n**¿Cómo funciona el estudio?**\n\nEl ultrasonido es un procedimiento no invasivo, sin dolor y sin radiación. Se utiliza una sonda que emite ondas de sonido para crear imágenes de los órganos internos. Dependiendo del tipo de estudio, puede requerir ayuno previo o vejiga llena. Nuestro personal le indicará las instrucciones de preparación al momento de agendar.\n\n**Resultados el mismo día**\n\nLas imágenes son interpretadas por profesionales y los resultados se entregan el mismo día. Si se detecta alguna anomalía, nuestro médico le explicará los hallazgos en español y le indicará los pasos a seguir, incluyendo referencia a especialistas si es necesario. Precios accesibles para la comunidad hispana de Houston.",
    titleEn: "Ultrasound & Sonogram Services Houston TX",
    descriptionEn: "Diagnostic ultrasound in Houston: abdominal, pelvic, thyroid, and more. Advanced imaging technology with professional interpretation and fast results.",
    longDescriptionEn: "We perform diagnostic ultrasound and sonography studies in Houston TX for a wide range of medical conditions. Our clinic is equipped with advanced imaging technology and results are interpreted by qualified medical professionals.\n\n**Types of ultrasound available:**\n\n- Abdominal ultrasound (liver, gallbladder, pancreas, kidneys)\n- Pelvic ultrasound (uterus, ovaries, bladder)\n- Thyroid ultrasound\n- Soft tissue ultrasound\n- Renal ultrasound\n- Basic obstetric ultrasound\n\n**When is an ultrasound needed?**\n\nYour doctor may order an ultrasound when there is suspicion of gallstones or kidney stones, cysts, masses, or organ inflammation, thyroid nodules, unexplained abdominal or pelvic pain, or as part of a routine health checkup.\n\n**What to expect during the procedure**\n\nAn ultrasound is completely non-invasive, painless, and does not use radiation. A handheld probe is used to send sound waves that create images of your internal organs. Depending on the type of study, you may need to fast beforehand or arrive with a full bladder. Our staff will provide preparation instructions when you schedule.\n\n**Same-day results with professional interpretation**\n\nImages are reviewed by medical professionals and results are delivered the same day. If an abnormality is found, our physician will explain the findings in plain language and outline the next steps — including specialist referrals if needed. Affordable pricing for Houston's Hispanic community.",
    icon: "Monitor",
    image: "/images/services/ultrasound.webp",
    category: "diagnostico",
    keywords: ["ultrasonido Houston", "ecografía Houston", "sonograma Houston", "ultrasonido abdominal Houston"],
    keywordsEn: ["ultrasound Houston TX", "sonogram Houston", "pelvic ultrasound Houston", "abdominal ultrasound Houston", "diagnostic imaging Houston"],
    features: [
      "Ultrasonido abdominal",
      "Ultrasonido pélvico",
      "Ultrasonido de tiroides",
      "Resultados rápidos",
      "Tecnología avanzada",
      "Interpretación profesional"
    ],
    featuresEn: ["Abdominal ultrasound", "Pelvic ultrasound", "Thyroid ultrasound", "Fast results", "Advanced imaging technology", "Professional interpretation"],
    highlighted: false,
    order: 7,
  },
  {
    id: "ginecologia",
    slug: "ginecologia",
    title: "Ginecología en Houston - Salud de la Mujer",
    shortTitle: "Ginecología",
    description: "Servicios de ginecología en Houston TX en español. Papanicolaou, examen pélvico, examen de seno y atención prenatal. Sin cita previa.",
    longDescription: "Brindamos atención integral de ginecología en Houston TX para la salud de la mujer en todas las etapas de su vida. Nuestro equipo médico entiende sus necesidades y ofrece atención confidencial 100% en español.\n\n**Servicios de ginecología que ofrecemos:**\n\n- Examen de Papanicolaou (Pap smear)\n- Examen clínico de seno\n- Examen pélvico completo\n- Diagnóstico y tratamiento de infecciones vaginales\n- Evaluación de irregularidades menstruales\n- Consulta de menopausia y manejo de síntomas\n- Atención prenatal básica\n- Pruebas de embarazo y orientación\n- Detección de VPH\n\n**¿Cada cuánto debe hacerse el Papanicolaou?**\n\nLas guías médicas recomiendan que las mujeres entre 21 y 65 años se realicen el Papanicolaou cada 3 años, o cada 5 años si se combina con la prueba de VPH. Sin embargo, su médico puede recomendar una frecuencia diferente según su historial. Este examen es fundamental para la detección temprana del cáncer cervical.\n\n**Salud de la mujer en cada etapa**\n\nYa sea que esté buscando anticoncepción, planificando un embarazo, experimentando síntomas de menopausia, o simplemente necesite su chequeo anual, nuestro equipo en Houston le brinda la atención que necesita en un ambiente cómodo y de confianza.\n\n**Atención confidencial y respetuosa**\n\nEntendemos que los temas de salud femenina pueden ser sensibles. En Clínica Hispana Airline, cada consulta es privada y confidencial. Atendemos sin cita previa, aceptamos pacientes con o sin seguro, y ofrecemos precios accesibles para la comunidad hispana de Houston.",
    titleEn: "Gynecology in Houston - Women's Health Care",
    descriptionEn: "Women's gynecology services in Houston TX. Pap smears, pelvic exams, breast exams, and basic prenatal care — no appointment needed, Spanish-speaking staff.",
    longDescriptionEn: "We provide comprehensive gynecology care in Houston TX to support women's health at every stage of life. Our medical team understands your needs and offers confidential, compassionate care with full Spanish-language service.\n\n**Gynecology services we offer:**\n\n- Pap smear (cervical cancer screening)\n- Clinical breast exam\n- Complete pelvic exam\n- Diagnosis and treatment of vaginal infections\n- Evaluation of irregular periods and menstrual concerns\n- Menopause consultation and symptom management\n- Basic prenatal care\n- Pregnancy testing and counseling\n- HPV detection\n\n**How often should you get a Pap smear?**\n\nMedical guidelines recommend that women between 21 and 65 get a Pap smear every 3 years, or every 5 years when combined with an HPV test. Your doctor may recommend a different frequency based on your personal history. This screening is essential for the early detection of cervical cancer.\n\n**Women's health at every stage**\n\nWhether you're seeking birth control, planning a pregnancy, managing menopause symptoms, or simply due for your annual checkup, our Houston team provides the care you need in a comfortable, trustworthy environment.\n\n**Confidential and respectful care**\n\nWe understand that women's health topics can feel sensitive. At Clínica Hispana Airline, every visit is private and confidential. We welcome walk-ins, accept patients with or without insurance, and offer affordable pricing for Houston's Hispanic community.",
    icon: "GenderFemale",
    image: "/images/services/gynecology.webp",
    category: "mujer",
    keywords: ["ginecología Houston", "Papanicolaou Houston", "salud mujer Houston", "ginecólogo español Houston"],
    keywordsEn: ["gynecology Houston TX", "Pap smear Houston", "women's health clinic Houston", "Spanish speaking gynecologist Houston", "OB GYN Houston"],
    features: [
      "Examen de Papanicolaou",
      "Examen de seno",
      "Examen pélvico completo",
      "Tratamiento de infecciones",
      "Atención prenatal básica",
      "Consulta de menopausia"
    ],
    featuresEn: ["Pap smear screening", "Breast exam", "Complete pelvic exam", "Infection treatment", "Basic prenatal care", "Menopause consultation"],
    highlighted: true,
    order: 8,
  },
  {
    id: "planificacion-familiar",
    slug: "planificacion-familiar",
    title: "Planificación Familiar Houston TX",
    shortTitle: "Planificación",
    description: "Métodos anticonceptivos en Houston: píldoras, inyecciones, implantes y DIU. Consejería profesional en español para parejas.",
    longDescription: "Ofrecemos servicios de planificación familiar en Houston TX con consejería completa y personalizada sobre los métodos anticonceptivos disponibles. Nuestro equipo médico ayuda a las mujeres y parejas a tomar decisiones informadas sobre su salud reproductiva.\n\n**Métodos anticonceptivos disponibles:**\n\n- Píldoras anticonceptivas (varias opciones)\n- Inyecciones anticonceptivas (Depo-Provera)\n- Implantes subdérmicos (Nexplanon)\n- Dispositivo intrauterino (DIU)\n- Parches anticonceptivos\n- Anillo vaginal\n- Métodos de barrera\n\n**¿Cómo elegir el método correcto?**\n\nDurante la consulta de planificación familiar, nuestro médico evaluará su historial médico, edad, estilo de vida, planes futuros de embarazo, y cualquier condición de salud existente. Con esta información, le recomendará las opciones más adecuadas para usted y le explicará los beneficios y posibles efectos secundarios de cada método.\n\n**Seguimiento continuo**\n\nLa planificación familiar no termina con la elección de un método. Ofrecemos visitas de seguimiento para asegurarnos de que su método funcione bien, ajustar si es necesario, y responder cualquier pregunta. Si desea cambiar de método o planificar un embarazo, le acompañamos en la transición.\n\n**Atención confidencial en Houston**\n\nTodas las consultas de planificación familiar son privadas y confidenciales. Atendemos en español, sin cita previa, y con precios accesibles. Ubicados en 934 E Tidwell Rd, Houston TX 77022.",
    titleEn: "Family Planning Houston TX",
    descriptionEn: "Contraception options in Houston: birth control pills, injections, implants, and IUDs. Professional counseling in English and Spanish for individuals and couples.",
    longDescriptionEn: "We offer family planning services in Houston TX with comprehensive, personalized counseling on all available contraceptive methods. Our medical team helps women and couples make well-informed decisions about their reproductive health.\n\n**Available contraceptive methods:**\n\n- Birth control pills (multiple formulations available)\n- Contraceptive injections (Depo-Provera)\n- Subdermal implants (Nexplanon)\n- Intrauterine device (IUD)\n- Contraceptive patch\n- Vaginal ring\n- Barrier methods\n\n**How do we help you choose the right method?**\n\nDuring your family planning consultation, our physician will review your medical history, age, lifestyle, future pregnancy plans, and any existing health conditions. Using this information, we'll recommend the most suitable options and clearly explain the benefits and possible side effects of each method.\n\n**Ongoing follow-up care**\n\nFamily planning doesn't end when you choose a method. We offer follow-up visits to make sure your chosen method is working well, make adjustments if needed, and answer any questions. If you decide to change methods or are ready to plan a pregnancy, we'll guide you through every step of the transition.\n\n**Confidential care in Houston**\n\nAll family planning consultations are completely private and confidential. Spanish-language service available, walk-ins welcome, with affordable pricing. Located at 934 E Tidwell Rd, Houston TX 77022.",
    icon: "Users",
    image: "/images/services/family-planning.webp",
    category: "mujer",
    keywords: ["planificación familiar Houston", "anticonceptivos Houston", "métodos anticonceptivos Houston", "DIU Houston"],
    keywordsEn: ["family planning Houston TX", "birth control Houston", "contraception clinic Houston", "IUD Houston TX", "contraceptive options Houston"],
    features: [
      "Consejería personalizada",
      "Píldoras anticonceptivas",
      "Inyecciones anticonceptivas",
      "Implantes subdérmicos",
      "DIU disponible",
      "Seguimiento continuo"
    ],
    featuresEn: ["Personalized counseling", "Birth control pills", "Contraceptive injections", "Subdermal implants", "IUD available", "Ongoing follow-up care"],
    highlighted: false,
    order: 9,
  },
  {
    id: "vacunas-anticonceptivas",
    slug: "vacunas-anticonceptivas",
    title: "Inyección Anticonceptiva Houston",
    shortTitle: "Anticonceptivas",
    description: "Inyecciones anticonceptivas Depo-Provera en Houston TX. Aplicación profesional con seguimiento médico. Sin cita previa.",
    longDescription: "Aplicamos inyecciones anticonceptivas Depo-Provera en Houston TX con seguimiento médico profesional. Esta es una opción conveniente y altamente efectiva para mujeres que prefieren un método anticonceptivo que no requiere tomar una píldora diaria.\n\n**¿Qué es la inyección Depo-Provera?**\n\nLa inyección anticonceptiva Depo-Provera contiene la hormona progestina y se aplica cada 3 meses (12 semanas). Tiene una efectividad superior al 99% cuando se aplica a tiempo y es una de las opciones más prácticas de anticoncepción disponibles.\n\n**Ventajas de la inyección anticonceptiva:**\n\n- Solo necesita aplicarse cada 3 meses\n- No requiere recordar tomar una píldora diaria\n- Alta efectividad anticonceptiva\n- Puede reducir cólicos menstruales\n- Discreta — nadie necesita saber que la usa\n- Reversible — la fertilidad regresa después de suspenderla\n\n**¿Cómo es el proceso?**\n\nEn su primera visita, nuestro médico evaluará su historial médico para asegurarse de que este método sea seguro para usted. La inyección se aplica en el brazo o glúteo y toma solo unos minutos. Le programaremos un recordatorio para su próxima aplicación en 12 semanas.\n\n**Seguimiento médico incluido**\n\nCon cada aplicación, nuestro equipo verifica que no haya efectos secundarios y responde sus preguntas. Si en algún momento desea cambiar de método, le orientamos sobre las alternativas disponibles. Atención en español, sin cita previa, con precios accesibles en Houston TX.",
    titleEn: "Birth Control Shot Houston TX",
    descriptionEn: "Depo-Provera contraceptive injections in Houston TX. Professional administration with medical follow-up. No appointment needed.",
    longDescriptionEn: "We provide professional Depo-Provera contraceptive injections in Houston TX with medical follow-up. This is a convenient and highly effective option for women who prefer a birth control method that doesn't require taking a daily pill.\n\n**What is the Depo-Provera shot?**\n\nThe Depo-Provera injection contains the hormone progestin and is administered every 3 months (12 weeks). It has over 99% effectiveness when administered on time and is one of the most practical contraceptive options available.\n\n**Benefits of the birth control shot:**\n\n- Only needs to be administered every 3 months\n- No daily pill to remember\n- Highly effective contraception\n- Can reduce menstrual cramps\n- Discreet — no one needs to know you use it\n- Reversible — fertility returns after stopping\n\n**How does the process work?**\n\nDuring your first visit, our physician will review your medical history to ensure this method is safe for you. The injection is administered in the arm or buttock and takes just a few minutes. We'll schedule a reminder for your next injection in 12 weeks.\n\n**Medical follow-up included**\n\nWith each injection, our team checks for side effects and answers your questions. If at any point you wish to switch methods, we'll guide you through the available alternatives. Spanish-language service, walk-ins welcome, affordable pricing in Houston TX.",
    icon: "Syringe",
    image: "/images/services/contraceptive-vaccines.webp",
    category: "mujer",
    keywords: ["inyección anticonceptiva Houston", "Depo-Provera Houston", "anticonceptivo inyectable Houston"],
    keywordsEn: ["birth control shot Houston", "Depo-Provera Houston TX", "contraceptive injection Houston", "birth control clinic Houston", "women's health Houston"],
    features: [
      "Inyección Depo-Provera",
      "Aplicación profesional",
      "Seguimiento médico",
      "Efectividad comprobada",
      "Sin cita previa",
      "Atención en español"
    ],
    featuresEn: ["Depo-Provera injection", "Professional administration", "Medical follow-up", "Proven effectiveness", "No appointment needed", "Spanish & English care"],
    highlighted: false,
    order: 10,
  },
  {
    id: "extraccion-implantes",
    slug: "extraccion-implantes",
    title: "Extracción de Implantes Anticonceptivos Houston",
    shortTitle: "Implantes",
    description: "Retiro seguro de Nexplanon e Implanon en Houston TX. Procedimiento rápido con anestesia local y recuperación inmediata.",
    longDescription: "Realizamos la extracción segura de implantes anticonceptivos subdérmicos (Nexplanon e Implanon) en Houston TX. Este procedimiento es necesario cuando el implante ha cumplido su vida útil (3-5 años), cuando la paciente desea cambiar de método, o cuando planifica un embarazo.\n\n**¿Cuándo debe retirarse el implante?**\n\n- Cuando ha pasado su fecha de vencimiento (3 años para Nexplanon, 3 años para Implanon)\n- Si desea quedar embarazada\n- Si experimenta efectos secundarios que desea resolver\n- Si prefiere cambiar a otro método anticonceptivo\n\n**¿Cómo es el procedimiento de extracción?**\n\nLa extracción del implante es un procedimiento ambulatorio que toma aproximadamente 15-20 minutos. Nuestro médico localiza el implante en su brazo, aplica anestesia local para que no sienta dolor, y realiza una pequeña incisión para retirarlo. Se coloca un vendaje y puede retomar sus actividades normales el mismo día.\n\n**Después de la extracción**\n\nLa fertilidad regresa rápidamente después de retirar el implante. Si desea un nuevo implante o cambiar a otro método anticonceptivo, podemos hacerlo en la misma visita. Nuestro equipo le brindará consejería sobre todas las opciones disponibles.\n\n**Atención profesional en Houston**\n\nNuestro personal está capacitado para realizar este procedimiento de forma segura y cómoda. Atención en español, sin cita previa, con precios accesibles. Ubicados en 934 E Tidwell Rd, Houston TX 77022.",
    titleEn: "Contraceptive Implant Removal Houston TX",
    descriptionEn: "Safe removal of Nexplanon and Implanon implants in Houston TX. Quick procedure with local anesthesia and immediate recovery.",
    longDescriptionEn: "We perform safe removal of contraceptive implants (Nexplanon and Implanon) in Houston TX. This procedure is needed when the implant has reached its expiration (3-5 years), when you wish to switch methods, or when planning a pregnancy.\n\n**When should the implant be removed?**\n\n- When it has passed its expiration date (3 years for Nexplanon/Implanon)\n- If you want to become pregnant\n- If you experience side effects you want to resolve\n- If you prefer to switch to a different contraceptive method\n\n**What to expect during the procedure**\n\nImplant removal is an outpatient procedure that takes approximately 15-20 minutes. Our physician locates the implant in your arm, applies local anesthesia so you feel no pain, and makes a small incision to remove it. A bandage is placed and you can resume normal activities the same day.\n\n**After the removal**\n\nFertility returns quickly after removing the implant. If you want a new implant or to switch to another contraceptive method, we can do it during the same visit. Our team will provide counseling on all available options.\n\n**Professional care in Houston**\n\nOur staff is trained to perform this procedure safely and comfortably. Spanish-language service, walk-ins welcome, affordable pricing. Located at 934 E Tidwell Rd, Houston TX 77022.",
    icon: "Scissors",
    image: "/images/services/implant-removal.webp",
    category: "mujer",
    keywords: ["extracción implante Houston", "quitar Nexplanon Houston", "remover implante anticonceptivo Houston"],
    keywordsEn: ["implant removal Houston", "Nexplanon removal Houston TX", "Implanon removal Houston", "contraceptive implant extraction Houston", "birth control implant removal Houston"],
    features: [
      "Procedimiento seguro",
      "Personal capacitado",
      "Anestesia local incluida",
      "Recuperación rápida",
      "Consejería post-extracción",
      "Opciones alternativas"
    ],
    featuresEn: ["Safe removal procedure", "Trained medical staff", "Local anesthesia included", "Quick recovery", "Post-removal counseling", "Alternative contraceptive options"],
    highlighted: false,
    order: 11,
  },
  {
    id: "electrocardiograma",
    slug: "electrocardiograma",
    title: "Electrocardiograma EKG Houston TX",
    shortTitle: "EKG",
    description: "Electrocardiograma en Houston para detectar arritmias y problemas cardíacos. Resultados inmediatos con interpretación profesional.",
    longDescription: "Realizamos electrocardiogramas (EKG/ECG) en Houston TX para evaluar la actividad eléctrica de su corazón. Este estudio rápido y no invasivo es fundamental para detectar problemas cardíacos a tiempo.\n\n**¿Qué detecta un electrocardiograma?**\n\n- Arritmias (latidos irregulares del corazón)\n- Problemas de conducción eléctrica\n- Señales de ataque cardíaco previo\n- Agrandamiento del corazón\n- Efectos de medicamentos en el corazón\n- Niveles anormales de electrolitos\n\n**¿Cuándo necesita un EKG?**\n\nSu médico puede ordenar un electrocardiograma si experimenta dolor en el pecho, falta de aire, mareos, palpitaciones, o desmayos. También se realiza como parte de exámenes preventivos, antes de cirugías, o para monitorear condiciones cardíacas existentes. Es un requisito común en exámenes físicos para empleo y deportes.\n\n**¿Cómo es el procedimiento?**\n\nEl EKG es completamente indoloro y toma solo 5-10 minutos. Se colocan pequeños electrodos adhesivos en su pecho, brazos y piernas que registran la actividad eléctrica del corazón. No requiere preparación especial y puede retomar sus actividades inmediatamente después.\n\n**Resultados inmediatos**\n\nLos resultados del electrocardiograma están disponibles de inmediato. Nuestro médico interpretará el estudio en español, le explicará los hallazgos, y si se detecta alguna anomalía, le referirá a un cardiólogo de confianza en Houston. Atención sin cita previa con precios accesibles.",
    titleEn: "EKG Electrocardiogram Houston TX",
    descriptionEn: "Electrocardiogram EKG testing in Houston TX to detect arrhythmias and heart conditions. Immediate results with professional interpretation.",
    longDescriptionEn: "We perform electrocardiograms (EKG/ECG) in Houston TX to evaluate your heart's electrical activity. This quick, non-invasive test is essential for detecting heart problems early.\n\n**What does an EKG detect?**\n\n- Arrhythmias (irregular heartbeats)\n- Electrical conduction problems\n- Signs of a previous heart attack\n- Enlarged heart\n- Effects of medications on the heart\n- Abnormal electrolyte levels\n\n**When do you need an EKG?**\n\nYour doctor may order an electrocardiogram if you experience chest pain, shortness of breath, dizziness, palpitations, or fainting. It is also performed as part of preventive exams, before surgeries, or to monitor existing cardiac conditions. It is commonly required for employment and sports physicals.\n\n**How does the procedure work?**\n\nThe EKG is completely painless and takes only 5-10 minutes. Small adhesive electrodes are placed on your chest, arms, and legs to record the heart's electrical activity. No special preparation is needed and you can resume your activities immediately after.\n\n**Immediate results**\n\nEKG results are available right away. Our physician will interpret the study, explain the findings, and if any abnormality is detected, refer you to a trusted cardiologist in Houston. Walk-ins welcome with affordable pricing.",
    icon: "Activity",
    image: "/images/services/ekg.webp",
    category: "diagnostico",
    keywords: ["electrocardiograma Houston", "EKG Houston", "estudio corazón Houston", "ECG Houston TX"],
    keywordsEn: ["EKG Houston TX", "electrocardiogram Houston", "ECG test Houston", "heart test Houston TX", "cardiac evaluation Houston"],
    features: [
      "Resultados inmediatos",
      "Detección de arritmias",
      "Evaluación cardíaca completa",
      "Procedimiento no invasivo",
      "Interpretación profesional",
      "Referencia a cardiólogo"
    ],
    featuresEn: ["Immediate results", "Arrhythmia detection", "Complete cardiac evaluation", "Non-invasive procedure", "Professional interpretation", "Cardiology referral available"],
    highlighted: false,
    order: 12,
  },
  {
    id: "enfermedades-respiratorias",
    slug: "enfermedades-respiratorias",
    title: "Tratamiento Gripe y Enfermedades Respiratorias Houston",
    shortTitle: "Respiratorias",
    description: "Tratamiento de gripe, bronquitis, asma y COVID-19 en Houston TX. Diagnóstico rápido, nebulizaciones y pruebas disponibles.",
    longDescription: "Tratamos enfermedades respiratorias en Houston TX incluyendo gripe, resfriado, bronquitis, sinusitis, asma y COVID-19. Nuestro equipo médico ofrece diagnóstico rápido con pruebas disponibles y tratamiento efectivo para su recuperación.\n\n**Condiciones respiratorias que tratamos:**\n\n- Gripe (influenza) y resfriado común\n- Bronquitis aguda y crónica\n- Sinusitis e infecciones de senos paranasales\n- Asma y crisis asmáticas\n- COVID-19 y sus variantes\n- Neumonía\n- Faringitis y amigdalitis\n- Tos persistente\n\n**Diagnóstico rápido en la clínica**\n\nContamos con pruebas rápidas de influenza y COVID-19 con resultados en minutos. Nuestro médico evaluará sus síntomas, escuchará sus pulmones, y determinará el tratamiento más efectivo para su condición.\n\n**Tratamientos disponibles:**\n\n- Medicamentos antivirales (para gripe y COVID-19 si se detectan a tiempo)\n- Antibióticos (para infecciones bacterianas confirmadas)\n- Nebulizaciones con broncodilatadores\n- Inyecciones de esteroides para inflamación severa\n- Medicamentos para la tos y descongestión\n- Inhaladores para asma\n\n**¿Cuándo debe buscar atención médica?**\n\nVisite nuestra clínica si tiene fiebre alta que no baja con medicamentos, dificultad para respirar, tos con sangre o flema de color verde/amarillo por más de una semana, dolor en el pecho al respirar, o si sus síntomas empeoran después de 3-5 días. La atención temprana previene complicaciones.\n\nAtención sin cita previa en español, con precios accesibles para la comunidad hispana de Houston.",
    titleEn: "Flu & Respiratory Illness Treatment Houston TX",
    descriptionEn: "Treatment for flu, bronchitis, asthma, and COVID-19 in Houston TX. Rapid diagnosis, nebulizer treatments, and on-site testing available.",
    longDescriptionEn: "We treat respiratory illnesses in Houston TX including flu, common cold, bronchitis, sinusitis, asthma, and COVID-19. Our medical team offers rapid diagnosis with on-site testing and effective treatment for your recovery.\n\n**Respiratory conditions we treat:**\n\n- Influenza and common cold\n- Acute and chronic bronchitis\n- Sinusitis and sinus infections\n- Asthma and asthma attacks\n- COVID-19 and its variants\n- Pneumonia\n- Pharyngitis and tonsillitis\n- Persistent cough\n\n**Rapid diagnosis at the clinic**\n\nWe have rapid flu and COVID-19 tests with results in minutes. Our physician will evaluate your symptoms, listen to your lungs, and determine the most effective treatment for your condition.\n\n**Available treatments:**\n\n- Antiviral medications (for flu and COVID-19 when detected early)\n- Antibiotics (for confirmed bacterial infections)\n- Nebulizer treatments with bronchodilators\n- Steroid injections for severe inflammation\n- Cough and decongestant medications\n- Inhalers for asthma\n\n**When should you seek medical care?**\n\nVisit our clinic if you have a high fever that won't break with medication, difficulty breathing, cough with blood or green/yellow phlegm for more than a week, chest pain when breathing, or if your symptoms worsen after 3-5 days. Early care prevents complications.\n\nWalk-in care available, Spanish-language service, affordable pricing for Houston's Hispanic community.",
    icon: "Wind",
    image: "/images/services/respiratory.webp",
    category: "especial",
    keywords: ["enfermedades respiratorias Houston", "gripe Houston", "bronquitis Houston", "COVID Houston", "tratamiento asma Houston"],
    keywordsEn: ["flu treatment Houston TX", "respiratory illness Houston", "bronchitis treatment Houston", "COVID-19 clinic Houston", "asthma treatment Houston"],
    features: [
      "Diagnóstico rápido",
      "Tratamiento de gripe",
      "Bronquitis y sinusitis",
      "Pruebas de COVID-19",
      "Tratamiento de asma",
      "Nebulizaciones disponibles"
    ],
    featuresEn: ["Rapid diagnosis", "Flu treatment", "Bronchitis & sinusitis care", "COVID-19 testing", "Asthma management", "On-site nebulizer treatments"],
    highlighted: false,
    order: 13,
  },
  {
    id: "infecciones-urinarias",
    slug: "infecciones-urinarias",
    title: "Tratamiento Infecciones Urinarias Houston",
    shortTitle: "Urinarias",
    description: "Diagnóstico y tratamiento de infecciones urinarias UTI en Houston TX. Análisis de orina en sitio con resultados y tratamiento inmediato.",
    longDescription: "Diagnosticamos y tratamos infecciones urinarias (UTI) en Houston TX de manera efectiva. Las infecciones del tracto urinario son una de las condiciones más comunes, especialmente en mujeres, y requieren atención médica oportuna para evitar complicaciones.\n\n**Síntomas comunes de infección urinaria:**\n\n- Ardor o dolor al orinar\n- Necesidad frecuente y urgente de ir al baño\n- Orina turbia, oscura o con olor fuerte\n- Dolor en la parte baja del abdomen o espalda\n- Sensación de no vaciar la vejiga completamente\n- Fiebre o escalofríos (puede indicar infección más seria)\n\n**Diagnóstico rápido en la clínica**\n\nRealizamos análisis de orina en el sitio con resultados en minutos. Esto nos permite confirmar la infección, identificar el tipo de bacteria, y prescribir el antibiótico más efectivo el mismo día. No necesita esperar días por resultados de laboratorio externo.\n\n**Tratamiento el mismo día**\n\nUna vez confirmado el diagnóstico, nuestro médico le prescribirá el tratamiento antibiótico adecuado. La mayoría de los pacientes experimentan mejoría significativa dentro de 24-48 horas de iniciar el tratamiento.\n\n**Prevención de infecciones recurrentes**\n\nSi sufre de infecciones urinarias frecuentes, nuestro equipo médico le brindará consejería personalizada sobre medidas preventivas, cambios en hábitos, e hidratación adecuada para reducir la frecuencia de recurrencia.\n\nAtención para hombres y mujeres, sin cita previa, en español. Ubicados en 934 E Tidwell Rd, Houston TX 77022.",
    titleEn: "UTI Urinary Tract Infection Treatment Houston TX",
    descriptionEn: "Diagnosis and treatment of urinary tract infections UTI in Houston TX. On-site urinalysis with same-day results and immediate treatment.",
    longDescriptionEn: "We diagnose and treat urinary tract infections (UTIs) in Houston TX effectively. UTIs are one of the most common conditions, especially in women, and require timely medical care to avoid complications.\n\n**Common UTI symptoms:**\n\n- Burning or pain during urination\n- Frequent and urgent need to urinate\n- Cloudy, dark, or strong-smelling urine\n- Lower abdominal or back pain\n- Feeling of not emptying the bladder completely\n- Fever or chills (may indicate a more serious infection)\n\n**Rapid diagnosis at the clinic**\n\nWe perform on-site urinalysis with results in minutes. This allows us to confirm the infection, identify the type of bacteria, and prescribe the most effective antibiotic the same day. No need to wait days for external lab results.\n\n**Same-day treatment**\n\nOnce the diagnosis is confirmed, our physician will prescribe the appropriate antibiotic treatment. Most patients experience significant improvement within 24-48 hours of starting treatment.\n\n**Preventing recurrent infections**\n\nIf you suffer from frequent UTIs, our medical team will provide personalized counseling on preventive measures, habit changes, and proper hydration to reduce recurrence.\n\nCare for men and women, walk-ins welcome, Spanish-language service. Located at 934 E Tidwell Rd, Houston TX 77022.",
    icon: "Droplet",
    image: "/images/services/urinary-infections.webp",
    category: "especial",
    keywords: ["infección urinaria Houston", "UTI Houston", "cistitis Houston", "tratamiento UTI Houston"],
    keywordsEn: ["UTI treatment Houston TX", "urinary tract infection Houston", "bladder infection Houston", "same-day UTI care Houston", "urinalysis Houston TX"],
    features: [
      "Diagnóstico rápido",
      "Análisis de orina en sitio",
      "Tratamiento el mismo día",
      "Prevención de recurrencia",
      "Hombres y mujeres",
      "Sin cita previa"
    ],
    featuresEn: ["Rapid diagnosis", "On-site urinalysis", "Same-day treatment", "Recurrence prevention guidance", "Care for men & women", "No appointment needed"],
    highlighted: false,
    order: 14,
  },
  {
    id: "infecciones-vaginales",
    slug: "infecciones-vaginales",
    title: "Tratamiento Infecciones Vaginales Houston",
    shortTitle: "Vaginales",
    description: "Diagnóstico y tratamiento confidencial de candidiasis, vaginosis bacteriana y tricomoniasis en Houston TX. Ambiente discreto.",
    longDescription: "Ofrecemos diagnóstico y tratamiento confidencial de infecciones vaginales en Houston TX. Estas condiciones son muy comunes y tratables, pero requieren diagnóstico profesional para recibir el tratamiento correcto.\n\n**Tipos de infecciones vaginales que tratamos:**\n\n- Candidiasis (infección por hongos/levaduras)\n- Vaginosis bacteriana\n- Tricomoniasis\n- Infecciones mixtas\n- Irritación y resequedad vaginal\n\n**Síntomas que debe consultar:**\n\n- Flujo vaginal anormal (cambio en color, olor o cantidad)\n- Picazón o irritación vaginal\n- Ardor al orinar\n- Dolor durante las relaciones\n- Enrojecimiento o hinchazón\n- Olor inusual\n\n**¿Por qué es importante el diagnóstico profesional?**\n\nMuchas mujeres intentan tratar las infecciones vaginales con productos de venta libre sin saber exactamente qué tipo de infección tienen. Los tratamientos para hongos no funcionan contra bacterias, y viceversa. Un diagnóstico correcto asegura el tratamiento efectivo desde el primer día.\n\n**Ambiente discreto y de confianza**\n\nEntendemos que este tema puede ser incómodo de discutir. En Clínica Hispana Airline, nuestro equipo médico le atiende con total privacidad, respeto y profesionalismo. La consulta incluye evaluación, diagnóstico, y prescripción de tratamiento. También ofrecemos consejería sobre medidas de prevención para evitar infecciones recurrentes.\n\nAtención confidencial en español, sin cita previa, con precios accesibles en Houston TX.",
    titleEn: "Vaginal Infection Treatment Houston TX",
    descriptionEn: "Confidential diagnosis and treatment of yeast infections, bacterial vaginosis, and trichomoniasis in Houston TX. Discreet and professional care.",
    longDescriptionEn: "We offer confidential diagnosis and treatment of vaginal infections in Houston TX. These conditions are very common and treatable, but require professional diagnosis to receive the correct treatment.\n\n**Types of vaginal infections we treat:**\n\n- Candidiasis (yeast infection)\n- Bacterial vaginosis\n- Trichomoniasis\n- Mixed infections\n- Vaginal irritation and dryness\n\n**Symptoms to watch for:**\n\n- Abnormal vaginal discharge (change in color, odor, or amount)\n- Vaginal itching or irritation\n- Burning during urination\n- Pain during intercourse\n- Redness or swelling\n- Unusual odor\n\n**Why is professional diagnosis important?**\n\nMany women try to treat vaginal infections with over-the-counter products without knowing exactly what type of infection they have. Yeast treatments don't work against bacteria, and vice versa. An accurate diagnosis ensures effective treatment from day one.\n\n**Discreet and trustworthy environment**\n\nWe understand this topic can be uncomfortable to discuss. At Clínica Hispana Airline, our medical team treats you with complete privacy, respect, and professionalism. The consultation includes evaluation, diagnosis, and treatment prescription. We also offer counseling on prevention measures.\n\nConfidential care in Spanish, walk-ins welcome, affordable pricing in Houston TX.",
    icon: "ShieldCheck",
    image: "/images/services/vaginal-infections.webp",
    category: "mujer",
    keywords: ["infección vaginal Houston", "candidiasis Houston", "vaginosis Houston", "tratamiento hongos Houston"],
    keywordsEn: ["vaginal infection treatment Houston", "yeast infection Houston TX", "bacterial vaginosis Houston", "BV treatment Houston", "women's health clinic Houston"],
    features: [
      "Diagnóstico confidencial",
      "Tratamiento efectivo",
      "Candidiasis y hongos",
      "Vaginosis bacteriana",
      "Ambiente discreto",
      "Consejería de prevención"
    ],
    featuresEn: ["Confidential diagnosis", "Effective treatment", "Yeast infection & candidiasis care", "Bacterial vaginosis treatment", "Discreet clinical environment", "Prevention counseling"],
    highlighted: false,
    order: 15,
  },
  {
    id: "examen-dot",
    slug: "examen-dot",
    title: "Examen Físico DOT Houston - Licencia CDL",
    shortTitle: "DOT",
    description: "Examen médico DOT en Houston TX para licencia de conducir comercial CDL. Médicos certificados FMCSA, resultados el mismo día.",
    longDescription: "Realizamos exámenes médicos DOT (Department of Transportation) en Houston TX, requeridos para obtener o renovar su licencia de conducir comercial (CDL). Nuestros médicos están certificados por FMCSA y registrados en el National Registry of Certified Medical Examiners.\n\n**¿Qué incluye el examen físico DOT?**\n\n- Examen de visión (agudeza visual y campo visual)\n- Examen de audición\n- Medición de presión arterial y pulso\n- Análisis de orina (proteína, sangre, glucosa)\n- Examen físico general (corazón, pulmones, abdomen, columna)\n- Evaluación neurológica básica\n- Revisión de historial médico y medicamentos\n- Llenado del formulario oficial MCSA-5875\n\n**¿Quién necesita el examen DOT?**\n\nTodo conductor que opera vehículos comerciales que requieren licencia CDL (Clase A, B, o C) debe pasar un examen físico DOT cada 24 meses. Esto incluye conductores de camiones, autobuses, vehículos de transporte de materiales peligrosos, y otros vehículos comerciales.\n\n**Resultados el mismo día**\n\nCompletamos el examen y el formulario oficial en una sola visita. Si cumple con todos los requisitos, recibirá su certificado médico DOT (Medical Examiner's Certificate) el mismo día para que pueda presentarlo inmediatamente al DMV o a su empleador.\n\n**Condiciones que pueden afectar la certificación**\n\nSi tiene diabetes, hipertensión, apnea del sueño, u otra condición crónica, nuestro médico evaluará si cumple con los estándares de FMCSA y le indicará los pasos necesarios. En muchos casos, con documentación adecuada de su médico tratante, puede obtener la certificación.\n\nAtención sin cita previa en español, con precios competitivos en Houston TX.",
    titleEn: "DOT Physical Exam Houston TX - CDL Medical Certificate",
    descriptionEn: "DOT physical exam in Houston TX for commercial driver's license CDL. FMCSA-certified medical examiners, same-day results and official certificate.",
    longDescriptionEn: "We perform DOT (Department of Transportation) physical exams in Houston TX required to obtain or renew your commercial driver's license (CDL). Our physicians are FMCSA-certified and registered in the National Registry of Certified Medical Examiners.\n\n**What does the DOT physical exam include?**\n\n- Vision exam (visual acuity and field of vision)\n- Hearing exam\n- Blood pressure and pulse measurement\n- Urinalysis (protein, blood, glucose)\n- General physical exam (heart, lungs, abdomen, spine)\n- Basic neurological evaluation\n- Medical history and medication review\n- Official MCSA-5875 form completion\n\n**Who needs a DOT physical?**\n\nEvery driver operating commercial vehicles requiring a CDL (Class A, B, or C) must pass a DOT physical every 24 months. This includes truck drivers, bus operators, hazmat transporters, and other commercial vehicle operators.\n\n**Same-day results**\n\nWe complete the exam and official paperwork in a single visit. If you meet all requirements, you'll receive your DOT Medical Examiner's Certificate the same day so you can present it immediately to the DMV or your employer.\n\n**Conditions that may affect certification**\n\nIf you have diabetes, hypertension, sleep apnea, or another chronic condition, our physician will evaluate whether you meet FMCSA standards and guide you through the necessary steps. In many cases, with proper documentation from your treating physician, certification can be obtained.\n\nWalk-ins welcome, Spanish-language service, competitive pricing in Houston TX.",
    icon: "Truck",
    image: "/images/services/dot-exam.webp",
    category: "diagnostico",
    keywords: ["examen DOT Houston", "físico CDL Houston", "examen conductor comercial Houston", "DOT physical Houston"],
    keywordsEn: ["DOT physical Houston TX", "CDL medical exam Houston", "FMCSA physical Houston", "commercial driver physical Houston", "DOT exam same day Houston"],
    features: [
      "Médicos certificados FMCSA",
      "Resultados el mismo día",
      "Formulario oficial DOT",
      "Examen de visión incluido",
      "Precios competitivos",
      "Sin cita previa"
    ],
    featuresEn: ["FMCSA-certified medical examiners", "Same-day results", "Official DOT examination forms", "Vision screening included", "Competitive pricing", "No appointment needed"],
    highlighted: false,
    order: 16,
  },
  {
    id: "examenes-generales",
    slug: "examenes-generales",
    title: "Exámenes Físicos Houston - Trabajo, Escuela, Deportes",
    shortTitle: "Generales",
    description: "Exámenes físicos en Houston TX para empleo, escuela, deportes y chequeo anual. Documentación oficial incluida, resultados rápidos.",
    longDescription: "Realizamos exámenes físicos generales en Houston TX para diversos propósitos. Ya sea que necesite un examen para empleo, escuela, deportes, o simplemente un chequeo anual, nuestro equipo médico le atiende de forma rápida y profesional.\n\n**Tipos de exámenes físicos disponibles:**\n\n- Examen físico para empleo (pre-employment physical)\n- Examen escolar para niños y adolescentes\n- Examen físico deportivo (sports physical)\n- Chequeo anual de rutina\n- Examen para seguro de vida\n- Examen físico para campamentos\n- Certificado médico general\n\n**¿Qué incluye el examen físico?**\n\n- Medición de signos vitales (presión, temperatura, peso, talla)\n- Examen de visión\n- Evaluación cardíaca y pulmonar\n- Examen abdominal\n- Evaluación musculoesquelética\n- Revisión de historial de vacunas\n- Documentación oficial firmada por el médico\n\n**Exámenes para empleo**\n\nMuchos empleadores en Houston requieren un examen físico antes de contratar. Completamos la documentación requerida por su empleador y podemos agregar pruebas de laboratorio o drogas si son necesarias para su posición.\n\n**Exámenes escolares y deportivos**\n\nLas escuelas de Texas requieren exámenes físicos para inscripción y participación en deportes. Realizamos estos exámenes para niños y adolescentes, verificando que estén en condiciones de salud para sus actividades.\n\nDocumentación oficial incluida, resultados rápidos, atención en español, y precios accesibles para toda la familia en Houston TX.",
    titleEn: "Physical Exams Houston TX - Employment, School & Sports",
    descriptionEn: "Physical exams in Houston TX for employment, school, sports, and annual wellness. Official documentation included with fast results.",
    longDescriptionEn: "We perform general physical exams in Houston TX for various purposes. Whether you need an exam for employment, school, sports, or an annual checkup, our medical team provides fast, professional care.\n\n**Types of physical exams available:**\n\n- Pre-employment physical (pre-hire)\n- School physicals for children and teens\n- Sports physical (athletic clearance)\n- Annual wellness checkup\n- Life insurance physical\n- Camp physicals\n- General medical certificate\n\n**What does the physical exam include?**\n\n- Vital signs (blood pressure, temperature, weight, height)\n- Vision screening\n- Heart and lung evaluation\n- Abdominal examination\n- Musculoskeletal assessment\n- Vaccination record review\n- Official documentation signed by physician\n\n**Employment physicals**\n\nMany Houston employers require a physical exam before hiring. We complete your employer's required documentation and can add lab tests or drug screening if needed for your position.\n\n**School and sports physicals**\n\nTexas schools require physical exams for enrollment and sports participation. We perform these exams for children and teenagers, verifying they are in good health for their activities.\n\nOfficial documentation included, fast results, Spanish-language service, affordable pricing for the whole family in Houston TX.",
    icon: "ClipboardCheck",
    image: "/images/services/general-exams.webp",
    category: "diagnostico",
    keywords: ["examen físico Houston", "físico laboral Houston", "examen escolar Houston", "chequeo médico Houston"],
    keywordsEn: ["physical exam Houston TX", "employment physical Houston", "school physical Houston", "sports physical Houston", "annual check-up Houston TX"],
    features: [
      "Exámenes para empleo",
      "Exámenes escolares",
      "Exámenes deportivos",
      "Chequeo anual completo",
      "Documentación oficial",
      "Resultados rápidos"
    ],
    featuresEn: ["Employment physicals", "School physicals", "Sports physicals", "Annual wellness exams", "Official documentation included", "Fast same-visit results"],
    highlighted: false,
    order: 17,
  },
  {
    id: "dolores-musculares",
    slug: "dolores-musculares",
    title: "Tratamiento Dolor de Espalda y Muscular Houston",
    shortTitle: "Musculares",
    description: "Evaluación y tratamiento de dolor muscular, articular y de espalda en Houston TX. Inyecciones disponibles y referencia a terapia física.",
    longDescription: "Ofrecemos evaluación completa y tratamiento del dolor muscular y articular en Houston TX. El dolor de espalda, cuello y articulaciones es una de las causas más comunes de consulta médica y puede afectar significativamente su calidad de vida y capacidad de trabajo.\n\n**Condiciones que evaluamos y tratamos:**\n\n- Dolor de espalda baja (lumbalgia)\n- Dolor de cuello y cervical\n- Dolor de hombros\n- Dolor de rodillas\n- Dolor articular general\n- Espasmos musculares\n- Ciática (dolor que baja por la pierna)\n- Lesiones musculares por trabajo o ejercicio\n- Artritis y dolor articular crónico\n\n**¿Qué incluye la evaluación?**\n\nNuestro médico realizará un examen físico detallado de la zona afectada, evaluará su rango de movimiento, y determinará la causa del dolor. Si es necesario, se ordenarán estudios adicionales como radiografías o ultrasonido para un diagnóstico más preciso.\n\n**Opciones de tratamiento:**\n\n- Medicamentos antiinflamatorios y relajantes musculares\n- Inyecciones para alivio del dolor (trigger points)\n- Terapia con calor o frío\n- Recomendaciones de ejercicios y estiramientos\n- Referencia a terapia física\n- Referencia a ortopedista si es necesario\n\n**¿Cuándo debe buscar atención?**\n\nConsulte si el dolor persiste más de una semana, le impide trabajar o dormir, se acompaña de entumecimiento o debilidad, o es resultado de una lesión o accidente. La evaluación temprana puede prevenir que el dolor se vuelva crónico.\n\nAtención en español, sin cita previa, con precios accesibles en Houston TX.",
    titleEn: "Muscle & Back Pain Treatment Houston TX",
    descriptionEn: "Evaluation and treatment of muscle, joint, and back pain in Houston TX. Injections available and referrals to physical therapy when needed.",
    longDescriptionEn: "We offer comprehensive evaluation and treatment for muscle and joint pain in Houston TX. Back pain, neck pain, and joint issues are among the most common reasons for medical visits and can significantly affect your quality of life and ability to work.\n\n**Conditions we evaluate and treat:**\n\n- Lower back pain (lumbalgia)\n- Neck and cervical pain\n- Shoulder pain\n- Knee pain\n- General joint pain\n- Muscle spasms\n- Sciatica (pain radiating down the leg)\n- Work or exercise-related muscle injuries\n- Arthritis and chronic joint pain\n\n**What does the evaluation include?**\n\nOur physician will perform a detailed physical exam of the affected area, assess your range of motion, and determine the cause of your pain. If needed, additional studies such as X-rays or ultrasound will be ordered for a more precise diagnosis.\n\n**Treatment options:**\n\n- Anti-inflammatory medications and muscle relaxants\n- Pain relief injections (trigger points)\n- Heat or cold therapy\n- Exercise and stretching recommendations\n- Physical therapy referral\n- Orthopedic referral if needed\n\n**When should you seek care?**\n\nConsult if pain persists more than a week, prevents you from working or sleeping, is accompanied by numbness or weakness, or results from an injury or accident. Early evaluation can prevent pain from becoming chronic.\n\nSpanish-language service, walk-ins welcome, affordable pricing in Houston TX.",
    icon: "Bone",
    image: "/images/services/muscle-pain.webp",
    category: "especialidad",
    keywords: ["dolor muscular Houston", "dolor espalda Houston", "dolor articular Houston", "tratamiento dolor Houston"],
    keywordsEn: ["back pain treatment Houston TX", "muscle pain clinic Houston", "joint pain Houston TX", "pain management Houston", "neck pain treatment Houston"],
    features: [
      "Evaluación completa",
      "Tratamiento del dolor",
      "Dolor de espalda y cuello",
      "Dolor articular",
      "Inyecciones disponibles",
      "Referencia a terapia física"
    ],
    featuresEn: ["Complete pain evaluation", "Targeted pain treatment", "Back & neck pain management", "Joint pain assessment", "Pain relief injections available", "Physical therapy referrals"],
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

- [**Medicina Familiar**](/services/medicina-familiar) - Atención integral para todas las edades, desde niños hasta adultos mayores. Chequeos preventivos, manejo de enfermedades agudas y seguimiento de salud general.
- [**Exámenes de Inmigración**](/services/examenes-inmigracion) - Formulario I-693 realizado por Civil Surgeons certificados por USCIS. Proceso completo en español.
- [**Laboratorio Clínico**](/services/laboratorio) - Análisis de sangre, orina y más con resultados rápidos y precisos. Sin necesidad de ir a otro lugar.
- [**Ginecología**](/services/ginecologia) - Salud integral de la mujer: Papanicolaou, examen pélvico, planificación familiar y más.
- [**Condiciones Crónicas**](/services/condiciones-cronicas) - Manejo especializado de diabetes, hipertensión, colesterol alto y otras condiciones de largo plazo.
- [**Ultrasonido y EKG**](/services/ultrasonido) - Diagnóstico por imagen disponible en nuestra clínica, sin referencias externas.
- [**Enfermedades Respiratorias**](/services/enfermedades-respiratorias) - Tratamiento de asma, bronquitis, neumonía y otras condiciones pulmonares.
- [**Urología**](/services/urologia) - Atención de problemas urinarios y del sistema reproductor masculino.
- [**Vacunas y Anticonceptivos**](/services/vacunas-anticonceptivas) - Esquemas de vacunación completos para todas las edades y métodos anticonceptivos.

## La Comunidad Hispana de Houston y sus Necesidades de Salud

Houston es una de las ciudades con mayor población hispana en todo Estados Unidos. Según datos del Censo, más de **1.5 millones de hispanos** viven en el área metropolitana de Houston, representando cerca del 44% de la población total. A pesar de ello, muchos enfrentan barreras importantes para acceder a atención médica de calidad:

- **Barrera del idioma**: Muchos hispanos en Houston hablan poco o ningún inglés, lo que dificulta comunicar síntomas con precisión y entender diagnósticos.
- **Falta de seguro médico**: Las tasas de personas sin seguro son más altas en la comunidad hispana que en otros grupos.
- **Desconfianza del sistema de salud**: Experiencias negativas previas o desconocimiento de los servicios disponibles generan miedo o rechazo a buscar atención.
- **Horarios incompatibles**: Muchos trabajadores hispanos tienen horarios que no encajan con los horarios típicos de clínicas y consultorios.

En Clínica Hispana Airline entendemos estas realidades de primera mano. Por eso diseñamos nuestros servicios para eliminar estas barreras: personal completamente bilingüe, horarios extendidos de lunes a viernes hasta las 9 PM y fines de semana, precios transparentes y atención con o sin seguro médico.

## Clínica Hispana Airline vs. la Sala de Emergencias

Muchos pacientes en Houston acuden a las salas de emergencia de hospitales incluso para situaciones que no son urgentes, porque no saben a dónde más ir. Esto puede generar facturas médicas de miles de dólares y esperas de varias horas. Clínica Hispana Airline es la alternativa inteligente para la mayoría de necesidades de salud:

| Situación | Sala de Emergencias | Clínica Hispana Airline |
|---|---|---|
| Gripe, fiebre, tos | Espera 3-6 horas, costo alto | Atención rápida, precio accesible |
| Control de diabetes o presión | Generalmente no disponible | Sí, con seguimiento continuo |
| Examen de inmigración I-693 | No disponible | Civil Surgeons certificados |
| Resultados de laboratorio | Días de espera | Mismo día en muchos casos |
| Atención en español | No garantizada | 100% en español |

Para condiciones que ponen en riesgo la vida como ataques al corazón, derrames cerebrales o accidentes graves, siempre llame al 911 o vaya a la sala de emergencias más cercana. Para todo lo demás, **estamos aquí para usted**.

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
- Sábado y Domingo: 9:00 AM - 9:00 PM

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

Solo médicos autorizados como **Civil Surgeons** por USCIS pueden realizar este examen. En [Clínica Hispana Airline](/services/examenes-inmigracion), contamos con Civil Surgeons certificados que realizan estos exámenes diariamente en Houston.

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

Nuestro [laboratorio clínico](/services/laboratorio) realiza todos estos análisis en el mismo lugar, por lo que no necesitará ir a otro sitio para completar los requisitos de laboratorio del I-693.

### Vacunas Requeridas
USCIS requiere que los solicitantes estén al día con el esquema de vacunación recomendado por el Advisory Committee on Immunization Practices (ACIP). A continuación se detallan las vacunas más comunes exigidas:

- **Hepatitis A**: Serie de 2 dosis; protege contra infección hepática viral
- **Hepatitis B**: Serie de 3 dosis; obligatoria para todos los solicitantes
- **Influenza (gripe)**: Una dosis anual; requerida durante la temporada de influenza
- **Sarampión, paperas y rubéola (MMR)**: 2 dosis; especialmente importante para nacidos antes de 1957
- **Tétanos, difteria y tos ferina (Tdap/Td)**: Refuerzo cada 10 años
- **Varicela**: 2 dosis si no tuvo la enfermedad de niño
- **Meningococo**: Para ciertos grupos de edad
- **Neumococo**: Para adultos mayores o con condiciones crónicas
- **COVID-19**: Esquema completo según las pautas vigentes de USCIS
- **HPV (Virus del Papiloma Humano)**: Para solicitantes de 11 a 26 años

Si ya tiene algunas vacunas, traiga su cartilla de vacunación o registros médicos. El Civil Surgeon determinará qué vacunas faltan y solo se aplicarán las que realmente necesite.

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

## Errores Comunes que Debe Evitar

Muchos solicitantes cometen errores que retrasan su proceso migratorio o invalidan su formulario I-693. Estos son los más frecuentes:

### 1. No traer registros de vacunación
Si no lleva prueba de vacunas previas, el Civil Surgeon estará obligado a repetirlas, lo que aumenta el costo y el número de visitas. Busque su cartilla antes de la cita.

### 2. Elegir un médico no autorizado por USCIS
Solo los **Civil Surgeons designados** pueden firmar el I-693. Si otro médico realiza el examen, USCIS lo rechazará. Verifique siempre que la clínica esté en la lista oficial de USCIS.

### 3. Abrir el sobre sellado
Una vez que el Civil Surgeon sella el sobre con el formulario, usted **no debe abrirlo**. Si el sobre llega abierto o dañado, USCIS lo rechazará y deberá repetir el examen.

### 4. Presentar el formulario después de su vencimiento
El I-693 es válido por 2 años desde la fecha de la firma del Civil Surgeon, y por 4 años si las vacunas fueron administradas durante ese tiempo. Calcule bien sus tiempos para no tener que repetir el proceso.

### 5. No declarar condiciones médicas previas
Ocultar condiciones de salud puede resultar en complicaciones más graves durante el proceso. Los problemas de salud no necesariamente impiden la inmigración; existen waivers (dispensas) para muchas condiciones.

### 6. Esperar hasta el último momento
En Houston, las clínicas con Civil Surgeons pueden tener tiempos de espera, especialmente durante periodos de alta demanda. Reserve su cita con al menos 2-3 semanas de anticipación antes de su entrevista con USCIS.

## ¿Qué Pasa si mi I-693 es Rechazado?

Si USCIS rechaza su formulario I-693, no entre en pánico. Existen varias razones comunes y soluciones para cada una:

### El formulario está incompleto o tiene errores
USCIS puede devolver el formulario si hay secciones vacías, firmas que faltan o información incorrecta. En este caso, deberá regresar al Civil Surgeon para que corrija o complete el documento. En Clínica Hispana Airline revisamos el formulario cuidadosamente antes de sellarlo.

### El sobre llegó abierto o dañado
Deberá repetir el examen médico completo. Asegúrese de guardar el sobre en un lugar seguro y no abrirlo bajo ninguna circunstancia.

### El formulario está vencido
Si presentó el I-693 después de su fecha de vencimiento, necesitará un nuevo examen. Guarde la fecha de firma del formulario y calcule los plazos con su abogado de inmigración.

### Condición médica que requiere evaluación adicional
En algunos casos, USCIS puede solicitar evaluaciones adicionales por un especialista. El Civil Surgeon le orientará sobre los pasos a seguir, y en muchos casos es posible solicitar un waiver médico ante USCIS.

Si su formulario fue rechazado, contáctenos. Podemos ayudarle a entender el motivo y programar un nuevo examen o corregir el problema lo antes posible.

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

No deje que el examen médico retrase su proceso migratorio. Contáctenos hoy para programar su [examen de inmigración I-693](/services/examenes-inmigracion).

**Clínica Hispana Airline**
- Teléfono: (346) 626-4110
- Dirección: 934 E Tidwell Rd, Houston, TX 77022
- Horario: Lunes a Domingo 9AM-9PM

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

## Prediabetes: El Paso Previo que Muchos Ignoran

Antes de desarrollar diabetes tipo 2, la mayoría de las personas pasan por una etapa llamada **prediabetes**. En esta etapa, los niveles de glucosa en sangre están más altos de lo normal, pero todavía no lo suficiente para ser clasificados como diabetes.

### ¿Por qué es importante detectarla?

La prediabetes es una señal de alerta. Sin intervención, entre el 15% y el 30% de las personas con prediabetes desarrollan diabetes tipo 2 en un plazo de cinco años. Sin embargo, con cambios en el estilo de vida, **es posible revertir la prediabetes completamente**.

### Valores de referencia para prediabetes
- **Glucosa en ayunas**: entre 100 y 125 mg/dL
- **Prueba de tolerancia a la glucosa (2 horas)**: entre 140 y 199 mg/dL
- **Hemoglobina A1C**: entre 5.7% y 6.4%

### ¿Quién está en riesgo?

En la comunidad hispana de Houston, el riesgo de prediabetes es especialmente alto debido a factores genéticos, dietéticos y de estilo de vida. Están en mayor riesgo:

- Personas con sobrepeso u obesidad
- Adultos mayores de 45 años
- Personas con antecedentes familiares de diabetes
- Mujeres que tuvieron diabetes gestacional
- Personas con presión arterial alta o colesterol elevado
- Personas con poco o ningún ejercicio físico

Si tiene alguno de estos factores de riesgo, solicite una prueba de glucosa en nuestro [laboratorio clínico](/services/laboratorio). La detección temprana puede cambiar el curso de su salud.

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
En Clínica Hispana Airline realizamos todos los estudios necesarios para el control de la diabetes. Consulte nuestros servicios de [condiciones crónicas](/services/condiciones-cronicas) y [laboratorio](/services/laboratorio):
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

### Plan de Alimentación Diario de Ejemplo

Adaptar la dieta a los gustos de la cocina hispana es posible sin sacrificar el control glucémico. Aquí un ejemplo de menú diario balanceado:

**Desayuno**
- 2 huevos revueltos con espinacas y tomate
- 1 tortilla de maíz pequeña
- Café negro o té sin azúcar

**Media Mañana**
- 1 manzana pequeña o 1 taza de melón
- Un puñado de nueces sin sal

**Almuerzo**
- Sopa de verduras sin papa (chayote, ejote, zanahoria)
- Pechuga de pollo a la plancha
- 1/2 taza de frijoles negros
- Ensalada de lechuga y tomate con limón

**Merienda de la Tarde**
- Verduras crudas (pepino, jícama, zanahoria) con jugo de limón y chile en polvo sin azúcar

**Cena**
- Pescado al vapor o a la plancha (tilapia, salmón)
- 1/2 taza de arroz integral
- Brócoli o calabacitas salteadas con ajo
- Agua con limón sin azúcar

Este es solo un ejemplo. Nuestros médicos en Houston pueden orientarle en un plan de alimentación personalizado que tome en cuenta sus preferencias, costumbres y condición médica específica.

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

## Salud Mental y Diabetes

Uno de los aspectos menos reconocidos del manejo de la diabetes es su impacto en la salud mental. Vivir con una enfermedad crónica puede ser emocionalmente agotador, y la comunidad hispana en Houston enfrenta presiones adicionales como el estrés laboral, las responsabilidades familiares y, en algunos casos, el estatus migratorio.

### El estrés y el azúcar en sangre

El estrés emocional no es solo un problema psicológico; tiene efectos físicos directos sobre los niveles de glucosa. Cuando una persona está estresada, el cuerpo libera hormonas como el cortisol y la adrenalina, que elevan el azúcar en sangre. Para alguien con diabetes, esto puede dificultar el control glucémico incluso si sigue correctamente su dieta y medicación.

### Depresión y diabetes

Las personas con diabetes tienen hasta el **doble de probabilidades** de desarrollar depresión en comparación con personas sin diabetes. La depresión, a su vez, puede dificultar el autocuidado: hay menos motivación para hacer ejercicio, seguir la dieta o tomar los medicamentos. Es un ciclo que puede romperse con la ayuda adecuada.

### Señales de alerta emocional
- Sentirse sin esperanza o muy triste la mayor parte del tiempo
- Perder interés en actividades que antes disfrutaba
- Dificultad para concentrarse o tomar decisiones
- Cambios en el sueño o el apetito
- Sentir que la diabetes es una carga demasiado grande

### Qué puede hacer

- **Hable con su médico**: El primer paso es reconocer que el bienestar emocional es parte del tratamiento de la diabetes. En Clínica Hispana Airline abordamos al paciente de forma integral.
- **Busque apoyo en su comunidad**: Houston cuenta con grupos de apoyo para diabéticos hispanos. Compartir experiencias con otras personas que viven la misma situación puede ser muy reconfortante.
- **Practique técnicas de manejo del estrés**: Respiración profunda, oración, tiempo en familia y actividad física moderada tienen efectos comprobados sobre el estrés y los niveles de glucosa.
- **No se aísle**: La cultura hispana valora la familia y la comunidad. Apóyese en sus seres queridos y permita que ellos también participen en su proceso de salud.

Cuidar su mente es tan importante como cuidar su azúcar. Si siente que el peso emocional está afectando su tratamiento, hable con nosotros. Estamos aquí para escucharle.

## Cómo Podemos Ayudarle

En **Clínica Hispana Airline** ofrecemos atención integral para el [manejo de condiciones crónicas como la diabetes](/services/condiciones-cronicas):

### Servicios de Diabetes
- Consultas médicas en español
- Pruebas de glucosa y A1C en nuestro [laboratorio](/services/laboratorio)
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

No espere hasta que la diabetes afecte su calidad de vida. Visite Clínica Hispana Airline en Houston para un chequeo completo y un plan de manejo personalizado.

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

## Cómo Hacer el Autoexamen de Seno

El autoexamen mensual de seno es una herramienta sencilla que puede salvar vidas. Realizarlo de forma regular le permite conocer cómo se sienten sus senos normalmente y detectar cambios a tiempo.

**El mejor momento para hacerlo:** Entre 3 y 5 días después del inicio de su período, cuando los senos están menos sensibles. Si ya pasó la menopausia, elija un día fijo del mes.

**Pasos frente al espejo:**
1. Párese con los brazos a los lados y observe ambos senos buscando cambios de tamaño, forma o color de la piel
2. Levante los brazos por encima de la cabeza y repita la observación
3. Ponga las manos sobre las caderas, tense los músculos y verifique que no haya hundimientos ni irregularidades

**Pasos acostada:**
1. Acuéstese y ponga una almohada bajo el hombro derecho; coloque el brazo derecho detrás de la cabeza
2. Con los tres dedos del medio de la mano izquierda, haga movimientos circulares firmes pero suaves desde el pezón hacia afuera, cubriendo todo el seno
3. Repita el proceso en el seno izquierdo
4. Revise también las axilas, donde pueden aparecer nódulos linfáticos inflamados

**Consulte de inmediato si nota:**
- Un bulto nuevo o engrosamiento en el seno o la axila
- Cambios en el tamaño o la forma del seno
- Hundimientos, arrugas o protuberancias en la piel
- Enrojecimiento, descamación o costras en el pezón
- Secreción del pezón (especialmente si es sanguinolenta)
- Dolor persistente en un área específica

Nuestros servicios de [ginecología en Houston](/services/ginecologia) incluyen la enseñanza personalizada del autoexamen durante cada consulta.

## Menopausia: Síntomas y Opciones de Tratamiento

La menopausia es una etapa natural en la vida de toda mujer, pero sus síntomas pueden afectar significativamente la calidad de vida. En Clínica Hispana Airline atendemos a muchas mujeres hispanas en Houston que buscan orientación clara y en español sobre cómo manejar esta transición.

### Síntomas más comunes de la menopausia
- **Sofocos y sudoración nocturna:** Sensaciones repentinas de calor que pueden durar entre 1 y 5 minutos
- **Sequedad vaginal e irritación:** Causadas por la disminución de estrógeno, pueden afectar la vida íntima
- **Cambios de humor e irritabilidad:** Fluctuaciones hormonales que impactan el bienestar emocional
- **Problemas de sueño:** Dificultad para conciliar el sueño o despertarse con frecuencia
- **Pérdida de densidad ósea:** Mayor riesgo de osteoporosis después de la menopausia
- **Cambios en el peso y la distribución de grasa**

### Opciones de tratamiento disponibles

**Terapia Hormonal (TH):** Estrógeno solo o combinado con progesterona. Es el tratamiento más efectivo para los sofocos y la sequedad vaginal. Su médico evaluará si es adecuada para usted según su historial de salud.

**Tratamientos no hormonales:**
- Antidepresivos en dosis bajas (para sofocos intensos)
- Lubricantes y cremas vaginales sin hormona
- Suplementos de calcio y vitamina D para proteger los huesos
- Cambios en la alimentación y el ejercicio regular

**Remedios naturales con evidencia limitada:**
- Fitoestrógenos (soja, trébol rojo) — discútalos con su médico antes de usarlos
- Técnicas de manejo del estrés y meditación

No sufra en silencio. Consulte con nuestro equipo médico en Houston para encontrar el plan que mejor se adapte a su situación.

## Salud Sexual y Prevención de ITS

La salud sexual es una parte integral del bienestar general de la mujer. Las infecciones de transmisión sexual (ITS) son más comunes de lo que muchas personas creen, y muchas veces no producen síntomas, por lo que las pruebas regulares son esenciales.

### ¿Por qué hacerse pruebas de ITS?

- Muchas ITS como la clamidia y la gonorrea no causan síntomas hasta que ya han generado daño en los órganos reproductivos
- El VIH no tratado puede progresar sin señales visibles durante años
- El diagnóstico temprano permite tratamientos efectivos y evita complicaciones como infertilidad
- Protege su salud y la de su pareja

### ITS que evaluamos y tratamos

- **Clamidia y gonorrea:** Las ITS bacterianas más frecuentes; tratables con antibióticos
- **Sífilis:** Detectable con análisis de sangre; muy tratable en etapas tempranas
- **VIH:** Prueba rápida disponible; con tratamiento moderno es una condición manejable
- **Herpes genital:** Manejo del brote y reducción del riesgo de transmisión
- **VPH (Virus del Papiloma Humano):** Relacionado con cambios cervicales detectados en el Papanicolaou
- **Tricomoniasis:** Infección parasitaria tratable con medicamento oral

### Prevención

- Uso consistente del condón masculino o femenino
- Vacuna contra el VPH (disponible hasta los 45 años en muchos casos)
- Comunicación abierta con su pareja sobre pruebas recientes
- Chequeos ginecológicos anuales como parte de su rutina de salud

Nuestros servicios de [enfermedades de transmisión sexual](/services/enfermedades-transmision-sexual) son completamente confidenciales y se realizan en un ambiente de respeto y confianza. También ofrecemos [planificación familiar](/services/planificacion-familiar) integral que incluye orientación sobre salud sexual y anticoncepción. Si ha tenido síntomas como flujo inusual o irritación, consulte nuestra página sobre [infecciones vaginales](/services/infecciones-vaginales) para más información.

## Por Qué Elegir Clínica Hispana Airline

- **Atención confidencial** en un ambiente cómodo
- **Personal femenino** disponible
- **Sin cita previa** para mayor conveniencia
- **Precios accesibles** para todas
- **Aceptamos pacientes sin seguro**
- **Ubicación conveniente** en Houston

## Programe su Consulta

Su salud es importante. No posponga sus exámenes ginecológicos. Somos la clínica de referencia para miles de mujeres hispanas en Houston TX, incluyendo las áreas de Greenspoint, Northline, Aldine y el norte de la ciudad.

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

## Cómo Leer sus Resultados de Laboratorio

Recibir una hoja llena de números y abreviaturas puede ser confuso. Aquí le explicamos, en términos sencillos, qué significan los valores más comunes.

### Qué significan las columnas

Casi todos los reportes de laboratorio muestran tres columnas: su resultado, el rango de referencia y una bandera (H para alto, L para bajo, o nada si está normal). El **rango de referencia** es el intervalo en el que se encuentran la mayoría de las personas sanas, pero recuerde que pequeñas variaciones pueden ser normales para usted.

### Valores alterados más frecuentes

| Resultado | Alto puede indicar | Bajo puede indicar |
|-----------|-------------------|-------------------|
| Glucosa en ayunas | Pre-diabetes o diabetes | Hipoglucemia |
| Colesterol LDL | Mayor riesgo cardiovascular | Generalmente no es problema |
| Hemoglobina | Deshidratación | Anemia |
| Glóbulos blancos | Infección o inflamación | Sistema inmune debilitado |
| TSH (tiroides) | Hipotiroidismo | Hipertiroidismo |
| Creatinina | Posible daño renal | Desnutrición o masa muscular baja |

**Importante:** Un valor fuera del rango no siempre significa enfermedad. Su médico interpretará los resultados junto con sus síntomas e historial. Nunca tome decisiones de salud basadas solo en los números.

### Preguntas que puede hacerle a su médico
- ¿Este resultado requiere tratamiento o solo seguimiento?
- ¿Debo repetir el examen en algún tiempo?
- ¿Necesito cambiar algo en mi dieta o medicamentos?

## Paquetes y Paneles de Laboratorio Más Solicitados

Muchas personas en Houston TX buscan paquetes de análisis que ofrezcan más valor por su dinero. En Clínica Hispana Airline agrupamos las pruebas más solicitadas:

### Paquete de Chequeo General
Ideal para adultos que no se han hecho análisis en más de un año:
- Hemograma completo (CBC)
- Panel metabólico completo
- Perfil de lípidos
- Glucosa en ayunas
- Análisis de orina

### Paquete Cardiovascular
Para personas con historial familiar de enfermedades del corazón o hipertensión:
- Perfil de lípidos completo
- Proteína C reactiva (PCR)
- Homocisteína
- Panel metabólico básico

### Paquete Hormonal Femenino
Muy solicitado por mujeres en Houston con síntomas de menopausia o irregularidades menstruales:
- TSH, T3, T4
- FSH y LH
- Estradiol
- Prolactina

Pregunte en recepción por los paquetes disponibles y sus precios actuales.

## Análisis de Laboratorio para Condiciones Específicas

### Monitoreo de la Diabetes

Las personas con diabetes en Houston necesitan análisis periódicos para mantener la condición bajo control y prevenir complicaciones como daño renal, ocular y nervioso.

**Análisis esenciales para diabéticos:**
- **Hemoglobina A1C:** Cada 3-6 meses; mide el promedio de glucosa en sangre de los últimos 2-3 meses. Meta: menos de 7% para la mayoría de diabéticos
- **Panel metabólico completo:** Incluye función renal (creatinina, BUN) y hepática
- **Perfil de lípidos:** Los diabéticos tienen mayor riesgo cardiovascular
- **Microalbuminuria en orina:** Detecta daño renal temprano

Nuestros servicios de [condiciones crónicas](/services/condiciones-cronicas) incluyen seguimiento completo de la diabetes con análisis regulares y orientación nutricional.

### Análisis Durante el Embarazo

El embarazo requiere vigilancia especial desde las primeras semanas:
- **Hemograma completo:** Para detectar anemia, frecuente durante el embarazo
- **Glucosa:** Detección de diabetes gestacional (habitualmente entre semanas 24 y 28)
- **Prueba de sangre Rh:** Para saber el tipo de sangre y factor Rh
- **Pruebas de ETS:** Sífilis, VIH, hepatitis B — exigidas en el control prenatal
- **Función tiroidea (TSH):** El hipotiroidismo no tratado puede afectar el desarrollo del bebé

### Salud Cardiovascular

Las enfermedades del corazón son la principal causa de muerte en Houston y en todo Estados Unidos. Los análisis preventivos marcan la diferencia:
- Perfil de lípidos completo (idealmente cada año)
- Glucosa en ayunas (la diabetes dobla el riesgo cardíaco)
- Proteína C reactiva de alta sensibilidad (marcador de inflamación)
- Electrocardiograma si su médico lo indica — disponible también en nuestra clínica

Visite nuestra página de [laboratorio clínico](/services/laboratorio) para conocer todos los análisis disponibles sin cita previa en Houston TX.

## Programe sus Análisis

Mantenga su salud bajo control con análisis regulares. Servimos a la comunidad hispana en Houston, incluyendo los vecindarios de Northside, Eastwood, Magnolia Park y Greater Greenspoint.

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

## Sus Derechos como Paciente Sin Seguro

No tener seguro médico no significa que usted no tenga derechos. Aquí le explicamos lo que la ley y las buenas prácticas médicas le garantizan en Houston TX:

### Lo que tiene derecho a recibir sin importar su seguro

- **Atención de emergencia:** La ley federal (EMTALA) obliga a cualquier sala de emergencias que recibe fondos federales a estabilizarle, independientemente de su capacidad de pago o estatus migratorio
- **Información clara sobre costos:** Tiene derecho a preguntar y recibir una estimación del costo antes de recibir cualquier servicio. Nadie debería sorprenderle con una factura inesperada
- **Privacidad de su información:** La ley HIPAA protege su historial médico. Sus datos no se comparten con instituciones de migración ni con empleadores
- **Atención sin discriminación:** Ninguna clínica o hospital puede negarle la atención por su origen étnico, idioma o estatus migratorio
- **Explicación en su idioma:** Tiene derecho a que le expliquen su diagnóstico y tratamiento en español, o con un intérprete si es necesario

### Preguntas que siempre puede hacer

- "¿Cuánto cuesta esta consulta o este análisis?"
- "¿Existe algún programa de descuento para pacientes sin seguro?"
- "¿Puedo pagar en cuotas?"
- "¿Cuál es la opción más económica para mi situación?"

En Clínica Hispana Airline respondemos estas preguntas con gusto y sin hacerle sentir incómodo.

## Cuánto Puede Ahorrar: Clínica vs. Sala de Emergencia

Uno de los errores más costosos que cometen las familias sin seguro es ir a la sala de emergencia para condiciones que pueden atenderse en una clínica. La diferencia en costos puede ser enorme:

| Condición | Sala de Emergencia (promedio) | Clínica Comunitaria (aproximado) |
|-----------|-------------------------------|----------------------------------|
| Infección urinaria | $1,200 – $2,500 | $60 – $120 |
| Gripe o resfriado severo | $900 – $2,000 | $50 – $100 |
| Presión alta sin crisis | $1,500 – $3,000 | $60 – $130 |
| Análisis de sangre básico | $800 – $1,500 | $30 – $80 |
| Infección de garganta | $700 – $1,800 | $50 – $100 |

*Los costos son estimados y varían según el hospital y la clínica. Las salas de emergencia en Houston pueden cobrar adicionalmente por instalaciones, médicos de guardia y otros servicios.*

La regla es sencilla: **use la sala de emergencia solo para emergencias reales** — dificultad para respirar, dolor de pecho, pérdida de conciencia, sangrado que no para, accidentes graves. Para todo lo demás, una clínica como la nuestra le ofrece la misma calidad a una fracción del costo.

Nuestros servicios de [medicina familiar](/services/medicina-familiar) y [exámenes generales](/services/examenes-generales) están disponibles sin seguro y sin cita previa en Houston TX.

## Opciones de Salud para sus Hijos

Si usted no tiene seguro, sus hijos podrían calificar para programas de cobertura de bajo costo o gratuita en Texas:

### CHIP (Children's Health Insurance Program)

El programa CHIP de Texas cubre a niños menores de 19 años cuyos padres no califican para Medicaid pero tampoco pueden costear un seguro privado. Los beneficios incluyen visitas al médico, vacunas, análisis de laboratorio, cuidado dental y visión.

**¿Cómo aplicar?**
- En línea en YourTexasBenefits.com
- Por teléfono al 2-1-1 (servicio en español disponible)
- En muchas clínicas comunitarias de Houston le ayudan a llenar la solicitud

### Clínicas Escolares en Houston

El Distrito Escolar Independiente de Houston (HISD) y otros distritos del área cuentan con enfermeras y clínicas dentro de las escuelas que ofrecen:
- Exámenes de visión y audición
- Vacunas requeridas para la inscripción escolar
- Primeros auxilios y seguimiento de condiciones crónicas como el asma

### Vacunas Gratuitas para Niños

El programa federal **Vaccines for Children (VFC)** garantiza que todos los niños menores de 19 años reciban las vacunas del esquema nacional sin costo si no tienen seguro o si su seguro no las cubre. En Clínica Hispana Airline participamos en este programa.

### Cuándo Llevar a su Hijo al Médico

No espere una emergencia. Lleve a sus hijos a chequeos preventivos incluso si se ven bien:
- Al nacer: controles de recién nacido
- Cada 2-3 meses durante el primer año
- Anualmente a partir del año de edad

Para análisis de sangre pediátricos y pruebas de detección, visite nuestra página de [laboratorio clínico](/services/laboratorio) donde atendemos pacientes de todas las edades.

## Nuestro Compromiso

En **Clínica Hispana Airline** nos comprometemos a:
- Ofrecer precios justos y accesibles
- Atender a todos, con o sin seguro
- Nunca rechazar a un paciente por su situación económica
- Brindar atención de calidad en español

## Visite Clínica Hispana Airline

No permita que la falta de seguro le impida cuidar su salud. Atendemos a familias hispanas en Houston TX, incluyendo las comunidades de Northside Village, Denver Harbor, Lindale Park y toda el área norte de la ciudad.

**Contacto:**
- Teléfono: (346) 626-4110
- Dirección: 934 E Tidwell Rd, Houston, TX 77022
- Sin cita previa

*Atención médica de calidad al alcance de todos.*
    `,
  },
];
