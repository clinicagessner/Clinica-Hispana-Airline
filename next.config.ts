import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75],
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
      { source: "/vaginitis", destination: "/services/infecciones-vaginales", permanent: true },
      { source: "/vulvovaginitis", destination: "/services/infecciones-vaginales", permanent: true },

      // ============================================
      // URINARY TRACT / KIDNEY
      // ============================================
      { source: "/cistitis", destination: "/services/infecciones-urinarias", permanent: true },
      { source: "/calculos-renales", destination: "/services/infecciones-urinarias", permanent: true },
      { source: "/uretritis", destination: "/services/infecciones-urinarias", permanent: true },
      { source: "/incontinencia-urinaria", destination: "/services/infecciones-urinarias", permanent: true },
      { source: "/insuficiencia-renal", destination: "/services/medicina-familiar", permanent: true },
      { source: "/hemodialisis", destination: "/services/medicina-familiar", permanent: true },
      { source: "/prostatitis", destination: "/services/urologia", permanent: true },
      { source: "/vejiga", destination: "/services/urologia", permanent: true },

      // ============================================
      // PAIN / MUSCULOSKELETAL
      // ============================================
      { source: "/artritis", destination: "/services/dolores-musculares", permanent: true },
      { source: "/fibromialgia", destination: "/services/dolores-musculares", permanent: true },
      { source: "/bursitis", destination: "/services/dolores-musculares", permanent: true },
      { source: "/esguinces", destination: "/services/dolores-musculares", permanent: true },
      { source: "/desgarros", destination: "/services/dolores-musculares", permanent: true },
      { source: "/fracturas", destination: "/services/dolores-musculares", permanent: true },
      { source: "/escoliosis", destination: "/services/dolores-musculares", permanent: true },
      { source: "/torticolis", destination: "/services/dolores-musculares", permanent: true },
      { source: "/dedo-resorte", destination: "/services/dolores-musculares", permanent: true },
      { source: "/ganglion", destination: "/services/dolores-musculares", permanent: true },
      { source: "/osteoporosis", destination: "/services/dolores-musculares", permanent: true },
      { source: "/huesos", destination: "/services/dolores-musculares", permanent: true },

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
      { source: "/hemograma", destination: "/services/laboratorio", permanent: true },
      { source: "/cultivos", destination: "/services/laboratorio", permanent: true },
      { source: "/biopsia", destination: "/services/laboratorio", permanent: true },
      { source: "/pruebas", destination: "/services/laboratorio", permanent: true },

      // ============================================
      // ULTRASOUND / IMAGING
      // ============================================
      { source: "/ultrasonido", destination: "/services/ultrasonido", permanent: true },
      { source: "/ultrasonido/:path*", destination: "/services/ultrasonido", permanent: true },
      { source: "/ultrasonidos", destination: "/services/ultrasonido", permanent: true },

      // ============================================
      // FAMILY PLANNING / CONTRACEPTION
      // ============================================
      { source: "/anticonceptivos", destination: "/services/planificacion-familiar", permanent: true },
      { source: "/planificacion", destination: "/services/planificacion-familiar", permanent: true },

      // ============================================
      // GENERAL MEDICINE / OTHER CONDITIONS
      // → All map to family medicine as the catch-all
      // ============================================
      { source: "/impetigo", destination: "/services/medicina-familiar", permanent: true },
      { source: "/cancer-de-garganta", destination: "/services/medicina-familiar", permanent: true },
      { source: "/encefalitis", destination: "/services/medicina-familiar", permanent: true },
      { source: "/sarcoma", destination: "/services/medicina-familiar", permanent: true },
      { source: "/alopecia", destination: "/services/medicina-familiar", permanent: true },
      { source: "/hiperhidrosis", destination: "/services/medicina-familiar", permanent: true },
      { source: "/neurofibroma", destination: "/services/medicina-familiar", permanent: true },
      { source: "/gastritis", destination: "/services/medicina-familiar", permanent: true },
      { source: "/epilepsia", destination: "/services/medicina-familiar", permanent: true },
      { source: "/escarlatina", destination: "/services/medicina-familiar", permanent: true },
      { source: "/demencia", destination: "/services/medicina-familiar", permanent: true },
      { source: "/estres", destination: "/services/medicina-familiar", permanent: true },
      { source: "/ansiedad", destination: "/services/medicina-familiar", permanent: true },
      { source: "/depresion", destination: "/services/medicina-familiar", permanent: true },
      { source: "/anorexia", destination: "/services/medicina-familiar", permanent: true },
      { source: "/celulitis", destination: "/services/medicina-familiar", permanent: true },
      { source: "/adenoides", destination: "/services/medicina-familiar", permanent: true },
      { source: "/conjuntivitis", destination: "/services/medicina-familiar", permanent: true },
      { source: "/orzuelo", destination: "/services/medicina-familiar", permanent: true },
      { source: "/paperas", destination: "/services/medicina-familiar", permanent: true },
      { source: "/varicela", destination: "/services/medicina-familiar", permanent: true },
      { source: "/culebrillas", destination: "/services/medicina-familiar", permanent: true },
      { source: "/herpes-zoster", destination: "/services/medicina-familiar", permanent: true },
      { source: "/apendicitis", destination: "/services/medicina-familiar", permanent: true },
      { source: "/accidente-cerebrovascular", destination: "/services/medicina-familiar", permanent: true },
      { source: "/derrame-cerebral", destination: "/services/medicina-familiar", permanent: true },
      { source: "/hemorragia-nasal", destination: "/services/medicina-familiar", permanent: true },
      { source: "/epistaxis", destination: "/services/medicina-familiar", permanent: true },
      { source: "/alergia", destination: "/services/medicina-familiar", permanent: true },
      { source: "/alergias", destination: "/services/medicina-familiar", permanent: true },
      { source: "/fiebre", destination: "/services/medicina-familiar", permanent: true },
      { source: "/vacunas", destination: "/services/medicina-familiar", permanent: true },
      { source: "/hemorroides", destination: "/services/medicina-familiar", permanent: true },
      { source: "/hongos", destination: "/services/medicina-familiar", permanent: true },
      { source: "/heridas", destination: "/services/medicina-familiar", permanent: true },

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
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);
