import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    // Optimizador de Vercel desactivado: la cuenta tiene topada la cuota de Image
    // Optimization (/_next/image devuelve HTTP 402). Servimos los originales,
    // ya comprimidos a mano (WebP q80 + PNG pngquant/oxipng).
    unoptimized: true,
    qualities: [50, 60, 75],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "lucide-react", "@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-select"],
  },
  async redirects() {
    return [
      // ============================================
      // OLD WORDPRESS STRUCTURAL PAGES
      // ============================================
      { source: "/servicios", destination: "/services", permanent: true },
      { source: "/servicios/:path*", destination: "/services", permanent: true },
      { source: "/nosotros", destination: "/", permanent: true },
      { source: "/nosotros/:path*", destination: "/", permanent: true },
      { source: "/department", destination: "/services", permanent: true },
      { source: "/department/:path*", destination: "/services", permanent: true },
      { source: "/doctor", destination: "/", permanent: true },
      { source: "/doctor/:path*", destination: "/", permanent: true },
      { source: "/doctors", destination: "/", permanent: true },
      { source: "/doctors/:path*", destination: "/", permanent: true },

      // ============================================
      // TAG / CATEGORY / DATE ARCHIVES
      // ============================================
      { source: "/tag/:slug*", destination: "/blog", permanent: true },
      { source: "/category/:slug*", destination: "/blog", permanent: true },
      { source: "/etiqueta-producto/:slug*", destination: "/services", permanent: true },
      { source: "/:year(\\d{4})/:month(\\d{2})", destination: "/blog", permanent: true },
      { source: "/:year(\\d{4})", destination: "/blog", permanent: true },

      // ============================================
      // RESPIRATORY / FLU / COVID
      // ============================================
      { source: "/gripe", destination: "/services/enfermedades-respiratorias", permanent: true },
      { source: "/tuberculosis", destination: "/services/enfermedades-respiratorias", permanent: true },
      { source: "/asbestosis", destination: "/services/enfermedades-respiratorias", permanent: true },
      { source: "/enfisema-pulmonar", destination: "/services/enfermedades-respiratorias", permanent: true },
      { source: "/pulmones", destination: "/services/enfermedades-respiratorias", permanent: true },
      { source: "/variante-del-covid-19-pirola-todo-lo-que-debes-saber", destination: "/services/enfermedades-respiratorias", permanent: true },

      // ============================================
      // CHRONIC CONDITIONS (DIABETES, BP, ETC)
      // ============================================
      { source: "/diabetes", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/dislipidemias", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/obesidad", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/tiroides", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/hipotiroidismo", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/hipertiroidismo", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/bocio", destination: "/services/condiciones-cronicas", permanent: true },

      // ============================================
      // STD / SEXUAL HEALTH
      // ============================================
      { source: "/sifilis", destination: "/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/vih", destination: "/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/sida", destination: "/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/clamidia", destination: "/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/gonorrea", destination: "/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/herpes", destination: "/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/ets", destination: "/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/its", destination: "/services/enfermedades-transmision-sexual", permanent: true },

      // ============================================
      // WOMEN'S HEALTH / GYNECOLOGY
      // ============================================
      { source: "/papanicolau", destination: "/services/ginecologia", permanent: true },
      { source: "/menopausia", destination: "/services/ginecologia", permanent: true },
      { source: "/cervicitis", destination: "/services/ginecologia", permanent: true },
      { source: "/ginecologo", destination: "/services/ginecologia", permanent: true },
      { source: "/vaginitis", destination: "/services/ginecologia", permanent: true },
      { source: "/vulvovaginitis", destination: "/services/ginecologia", permanent: true },

      // ============================================
      // URINARY TRACT / KIDNEY
      // ============================================
      { source: "/cistitis", destination: "/services/infecciones-urinarias", permanent: true },
      { source: "/calculos-renales", destination: "/services/infecciones-urinarias", permanent: true },
      { source: "/uretritis", destination: "/services/infecciones-urinarias", permanent: true },
      { source: "/incontinencia-urinaria", destination: "/services/infecciones-urinarias", permanent: true },
      { source: "/insuficiencia-renal", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/hemodialisis", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/prostatitis", destination: "/services/salud-hombre", permanent: true },
      { source: "/vejiga", destination: "/services/salud-hombre", permanent: true },

      // ============================================
      // PAIN / MUSCULOSKELETAL
      // ============================================
      { source: "/artritis", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/fibromialgia", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/bursitis", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/esguinces", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/desgarros", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/fracturas", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/escoliosis", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/torticolis", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/dedo-resorte", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/ganglion", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/osteoporosis", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/huesos", destination: "/services/condiciones-cronicas", permanent: true },

      // ============================================
      // CARDIOVASCULAR / EKG
      // ============================================
      { source: "/electrocardiograma-ecg", destination: "/services/electrocardiograma", permanent: true },
      { source: "/electrocardiogramas", destination: "/services/electrocardiograma", permanent: true },
      { source: "/soplo", destination: "/services/electrocardiograma", permanent: true },
      { source: "/fibrilacion-auricular", destination: "/services/electrocardiograma", permanent: true },
      { source: "/varices", destination: "/services/electrocardiograma", permanent: true },

      // ============================================
      // LABORATORY / DIAGNOSTICS
      // ============================================
      { source: "/hemograma", destination: "/services/examenes-sangre", permanent: true },
      { source: "/cultivos", destination: "/services/examenes-sangre", permanent: true },
      { source: "/biopsia", destination: "/services/examenes-sangre", permanent: true },
      { source: "/pruebas", destination: "/services/examenes-sangre", permanent: true },

      // ============================================
      // ULTRASOUND / IMAGING
      // ============================================
      { source: "/ultrasonido", destination: "/services/ultrasonido", permanent: true },
      { source: "/ultrasonido/:path*", destination: "/services/ultrasonido", permanent: true },
      { source: "/ultrasonidos", destination: "/services/ultrasonido", permanent: true },

      // ============================================
      // FAMILY PLANNING / CONTRACEPTION
      // ============================================
      { source: "/anticonceptivos", destination: "/services/anticonceptivos", permanent: true },
      { source: "/planificacion", destination: "/services/anticonceptivos", permanent: true },

      // ============================================
      // GENERAL MEDICINE / OTHER CONDITIONS
      // → All map to family medicine as the catch-all
      // ============================================
      { source: "/impetigo", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/cancer-de-garganta", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/encefalitis", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/sarcoma", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/alopecia", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/hiperhidrosis", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/neurofibroma", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/gastritis", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/epilepsia", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/escarlatina", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/demencia", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/estres", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/ansiedad", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/depresion", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/anorexia", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/celulitis", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/adenoides", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/conjuntivitis", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/orzuelo", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/paperas", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/varicela", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/culebrillas", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/herpes-zoster", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/apendicitis", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/accidente-cerebrovascular", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/derrame-cerebral", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/hemorragia-nasal", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/epistaxis", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/alergia", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/alergias", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/fiebre", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/vacunas", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/hemorroides", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/hongos", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/heridas", destination: "/services/condiciones-cronicas", permanent: true },

      // ============================================
      // GENERIC TOPIC PAGES (taxonomy/keyword pages)
      // ============================================
      { source: "/enfermedades", destination: "/services", permanent: true },
      { source: "/afeccion", destination: "/services", permanent: true },
      { source: "/sintomas", destination: "/services", permanent: true },
      { source: "/tratamiento", destination: "/services", permanent: true },
      { source: "/prevencion", destination: "/services", permanent: true },
      { source: "/tipos", destination: "/services", permanent: true },
      { source: "/clasificacion", destination: "/services", permanent: true },
      { source: "/pronostico", destination: "/services", permanent: true },
      { source: "/contagio", destination: "/services", permanent: true },
      { source: "/transmision", destination: "/services", permanent: true },
      { source: "/infeccion", destination: "/services", permanent: true },
      { source: "/bacterias", destination: "/services", permanent: true },
      { source: "/virus", destination: "/services", permanent: true },
      { source: "/secrecion", destination: "/services", permanent: true },
      { source: "/hemorragia", destination: "/services", permanent: true },
      { source: "/oxigeno", destination: "/services", permanent: true },
      { source: "/antiinflamatorios", destination: "/services", permanent: true },
      { source: "/engrosamiento", destination: "/services", permanent: true },
      { source: "/ojo", destination: "/services", permanent: true },
      { source: "/parpados", destination: "/services", permanent: true },
      { source: "/epidermis", destination: "/services", permanent: true },
      { source: "/invierno", destination: "/services", permanent: true },

      // ============================================
      // LEGACY 404 RECOVERY (audit 2026-05)
      // ============================================
      { source: "/examen-medico-migratorio", destination: "/services/examenes-inmigracion", permanent: true },
      { source: "/que-es-el-examen-de-papanicolaou", destination: "/services/ginecologia", permanent: true },
      { source: "/que-es-la-taquicardia", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/que-es-un-accidente-cerebrovascular", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/que-es-una-biopsia", destination: "/services/examenes-sangre", permanent: true },
      { source: "/que-es-la-sinusitis", destination: "/services/enfermedades-respiratorias", permanent: true },
      { source: "/que-son-las-hemorroides", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/vih-sida", destination: "/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/gangrena", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/diarrea-sintomas", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/extraccion-de-implante-hormonal", destination: "/services/ginecologia", permanent: true },
      { source: "/extraccion-de-unas", destination: "/services/condiciones-cronicas", permanent: true },
      // ============================================
      // OLD SERVICE SLUGS (29-service catalog migration)
      // ============================================
      { source: "/services/medicina-familiar", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/services/dolores-musculares", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/services/laboratorio", destination: "/services/examenes-sangre", permanent: true },
      { source: "/services/examenes-generales", destination: "/services/examen-fisico-escolar", permanent: true },
      { source: "/services/urologia", destination: "/services/salud-hombre", permanent: true },
      { source: "/services/planificacion-familiar", destination: "/services/anticonceptivos", permanent: true },
      { source: "/services/vacunas-anticonceptivas", destination: "/services/vacunas", permanent: true },
      { source: "/services/infecciones-vaginales", destination: "/services/ginecologia", permanent: true },

      // ============================================
      // LOS MISMOS, EN INGLÉS
      // ============================================
      // Se escribieron solo para las rutas en español: las mismas URLs con /en
      // delante devolvían 404. En 90 días, 217 impresiones cayeron ahí
      // (/en/services/urologia 130, /en/services/medicina-familiar 87).
      { source: "/en/servicios", destination: "/en/services", permanent: true },
      { source: "/en/servicios/:path*", destination: "/en/services", permanent: true },
      { source: "/en/department", destination: "/en/services", permanent: true },
      { source: "/en/department/:path*", destination: "/en/services", permanent: true },
      { source: "/en/tag/:slug*", destination: "/en/blog", permanent: true },
      { source: "/en/category/:slug*", destination: "/en/blog", permanent: true },
      { source: "/en/etiqueta-producto/:slug*", destination: "/en/services", permanent: true },
      { source: "/en/:year(\\d{4})/:month(\\d{2})", destination: "/en/blog", permanent: true },
      { source: "/en/:year(\\d{4})", destination: "/en/blog", permanent: true },
      { source: "/en/gripe", destination: "/en/services/enfermedades-respiratorias", permanent: true },
      { source: "/en/tuberculosis", destination: "/en/services/enfermedades-respiratorias", permanent: true },
      { source: "/en/asbestosis", destination: "/en/services/enfermedades-respiratorias", permanent: true },
      { source: "/en/pulmones", destination: "/en/services/enfermedades-respiratorias", permanent: true },
      { source: "/en/variante-del-covid-19-pirola-todo-lo-que-debes-saber", destination: "/en/services/enfermedades-respiratorias", permanent: true },
      { source: "/en/diabetes", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/dislipidemias", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/obesidad", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/tiroides", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/hipotiroidismo", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/hipertiroidismo", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/bocio", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/sifilis", destination: "/en/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/en/vih", destination: "/en/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/en/sida", destination: "/en/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/en/clamidia", destination: "/en/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/en/gonorrea", destination: "/en/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/en/herpes", destination: "/en/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/en/ets", destination: "/en/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/en/its", destination: "/en/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/en/papanicolau", destination: "/en/services/ginecologia", permanent: true },
      { source: "/en/menopausia", destination: "/en/services/ginecologia", permanent: true },
      { source: "/en/cervicitis", destination: "/en/services/ginecologia", permanent: true },
      { source: "/en/ginecologo", destination: "/en/services/ginecologia", permanent: true },
      { source: "/en/vaginitis", destination: "/en/services/ginecologia", permanent: true },
      { source: "/en/vulvovaginitis", destination: "/en/services/ginecologia", permanent: true },
      { source: "/en/cistitis", destination: "/en/services/infecciones-urinarias", permanent: true },
      { source: "/en/calculos-renales", destination: "/en/services/infecciones-urinarias", permanent: true },
      { source: "/en/uretritis", destination: "/en/services/infecciones-urinarias", permanent: true },
      { source: "/en/incontinencia-urinaria", destination: "/en/services/infecciones-urinarias", permanent: true },
      { source: "/en/insuficiencia-renal", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/hemodialisis", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/prostatitis", destination: "/en/services/salud-hombre", permanent: true },
      { source: "/en/vejiga", destination: "/en/services/salud-hombre", permanent: true },
      { source: "/en/artritis", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/fibromialgia", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/bursitis", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/esguinces", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/desgarros", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/fracturas", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/escoliosis", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/torticolis", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/dedo-resorte", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/ganglion", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/osteoporosis", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/huesos", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/electrocardiograma-ecg", destination: "/en/services/electrocardiograma", permanent: true },
      { source: "/en/electrocardiogramas", destination: "/en/services/electrocardiograma", permanent: true },
      { source: "/en/soplo", destination: "/en/services/electrocardiograma", permanent: true },
      { source: "/en/fibrilacion-auricular", destination: "/en/services/electrocardiograma", permanent: true },
      { source: "/en/varices", destination: "/en/services/electrocardiograma", permanent: true },
      { source: "/en/hemograma", destination: "/en/services/examenes-sangre", permanent: true },
      { source: "/en/cultivos", destination: "/en/services/examenes-sangre", permanent: true },
      { source: "/en/biopsia", destination: "/en/services/examenes-sangre", permanent: true },
      { source: "/en/pruebas", destination: "/en/services/examenes-sangre", permanent: true },
      { source: "/en/ultrasonido", destination: "/en/services/ultrasonido", permanent: true },
      { source: "/en/ultrasonido/:path*", destination: "/en/services/ultrasonido", permanent: true },
      { source: "/en/ultrasonidos", destination: "/en/services/ultrasonido", permanent: true },
      { source: "/en/anticonceptivos", destination: "/en/services/anticonceptivos", permanent: true },
      { source: "/en/planificacion", destination: "/en/services/anticonceptivos", permanent: true },
      { source: "/en/impetigo", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/cancer-de-garganta", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/sarcoma", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/alopecia", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/hiperhidrosis", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/neurofibroma", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/gastritis", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/epilepsia", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/escarlatina", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/demencia", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/estres", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/ansiedad", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/depresion", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/anorexia", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/celulitis", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/adenoides", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/conjuntivitis", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/orzuelo", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/paperas", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/varicela", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/culebrillas", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/herpes-zoster", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/apendicitis", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/accidente-cerebrovascular", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/derrame-cerebral", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/hemorragia-nasal", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/epistaxis", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/alergia", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/alergias", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/fiebre", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/vacunas", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/hemorroides", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/hongos", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/heridas", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/afeccion", destination: "/en/services", permanent: true },
      { source: "/en/sintomas", destination: "/en/services", permanent: true },
      { source: "/en/tratamiento", destination: "/en/services", permanent: true },
      { source: "/en/prevencion", destination: "/en/services", permanent: true },
      { source: "/en/tipos", destination: "/en/services", permanent: true },
      { source: "/en/clasificacion", destination: "/en/services", permanent: true },
      { source: "/en/pronostico", destination: "/en/services", permanent: true },
      { source: "/en/contagio", destination: "/en/services", permanent: true },
      { source: "/en/transmision", destination: "/en/services", permanent: true },
      { source: "/en/infeccion", destination: "/en/services", permanent: true },
      { source: "/en/bacterias", destination: "/en/services", permanent: true },
      { source: "/en/virus", destination: "/en/services", permanent: true },
      { source: "/en/secrecion", destination: "/en/services", permanent: true },
      { source: "/en/hemorragia", destination: "/en/services", permanent: true },
      { source: "/en/oxigeno", destination: "/en/services", permanent: true },
      { source: "/en/antiinflamatorios", destination: "/en/services", permanent: true },
      { source: "/en/ojo", destination: "/en/services", permanent: true },
      { source: "/en/parpados", destination: "/en/services", permanent: true },
      { source: "/en/epidermis", destination: "/en/services", permanent: true },
      { source: "/en/invierno", destination: "/en/services", permanent: true },
      { source: "/en/examen-medico-migratorio", destination: "/en/services/examenes-inmigracion", permanent: true },
      { source: "/en/que-es-el-examen-de-papanicolaou", destination: "/en/services/ginecologia", permanent: true },
      { source: "/en/que-es-la-taquicardia", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/que-es-un-accidente-cerebrovascular", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/que-es-una-biopsia", destination: "/en/services/examenes-sangre", permanent: true },
      { source: "/en/que-es-la-sinusitis", destination: "/en/services/enfermedades-respiratorias", permanent: true },
      { source: "/en/que-son-las-hemorroides", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/vih-sida", destination: "/en/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/en/gangrena", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/diarrea-sintomas", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/extraccion-de-implante-hormonal", destination: "/en/services/ginecologia", permanent: true },
      { source: "/en/extraccion-de-unas", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/services/medicina-familiar", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/services/dolores-musculares", destination: "/en/services/condiciones-cronicas", permanent: true },
      { source: "/en/services/laboratorio", destination: "/en/services/examenes-sangre", permanent: true },
      { source: "/en/services/examenes-generales", destination: "/en/services/examen-fisico-escolar", permanent: true },
      { source: "/en/services/urologia", destination: "/en/services/salud-hombre", permanent: true },
      { source: "/en/services/planificacion-familiar", destination: "/en/services/anticonceptivos", permanent: true },
      { source: "/en/services/vacunas-anticonceptivas", destination: "/en/services/vacunas", permanent: true },
      { source: "/en/services/infecciones-vaginales", destination: "/en/services/ginecologia", permanent: true },

    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
          {
            // Los dominios salen de las peticiones reales de la home medidas
            // con Lighthouse, no de una lista genérica. `analytics.google.com`
            // va desde el principio a propósito: omitirlo bloquea GA4 en
            // silencio y los datos se pierden durante meses sin avisar.
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "object-src 'none'",
              "frame-ancestors 'none'",
              "form-action 'self'",
              "upgrade-insecure-requests",
              [
                "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
                "https://www.googletagmanager.com https://www.google-analytics.com",
                "https://connect.facebook.net https://cdn.callrail.com https://js.callrail.com",
                "https://www.google.com https://www.googleadservices.com",
                "https://googleads.g.doubleclick.net https://*.vercel-scripts.com",
              ].join(" "),
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              [
                "img-src 'self' data: blob:",
                "https://lh3.googleusercontent.com https://maps.gstatic.com",
                "https://maps.googleapis.com https://www.google-analytics.com",
                "https://www.google.com https://www.facebook.com",
                "https://googleads.g.doubleclick.net https://ad.doubleclick.net",
              ].join(" "),
              [
                "connect-src 'self'",
                "https://analytics.google.com https://*.analytics.google.com",
                "https://*.google-analytics.com https://www.googletagmanager.com",
                "https://maps.googleapis.com https://connect.facebook.net",
                "https://*.callrail.com https://*.vercel-insights.com",
                // Conversiones de Google Ads: sin estos tres la CSP bloquea
                // /ccm/collect y /rmkt/collect y las conversiones dejan de
                // registrarse en silencio, con las campañas corriendo igual.
                "https://googleads.g.doubleclick.net https://ad.doubleclick.net",
                "https://www.google.com https://www.googleadservices.com",
              ].join(" "),
              "frame-src 'self' https://www.google.com https://www.facebook.com https://td.doubleclick.net",
              "media-src 'self'",
              "worker-src 'self' blob:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);
