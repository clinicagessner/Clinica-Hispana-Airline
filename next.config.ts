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
      // Old WordPress structural pages
      { source: "/servicios", destination: "/services", permanent: true },
      { source: "/servicios/:path*", destination: "/services", permanent: true },
      { source: "/nosotros", destination: "/", permanent: true },
      { source: "/nosotros/:path*", destination: "/", permanent: true },
      { source: "/department", destination: "/services", permanent: true },
      { source: "/department/:path*", destination: "/services", permanent: true },
      { source: "/doctor", destination: "/", permanent: true },
      { source: "/doctor/:path*", destination: "/", permanent: true },
      // Old WordPress content → closest service pages
      { source: "/ultrasonido", destination: "/services/ultrasonido", permanent: true },
      { source: "/ultrasonido/:path*", destination: "/services/ultrasonido", permanent: true },
      { source: "/impetigo", destination: "/services/medicina-familiar", permanent: true },
      { source: "/sifilis", destination: "/services/enfermedades-transmision-sexual", permanent: true },
      { source: "/artritis", destination: "/services/dolores-musculares", permanent: true },
      { source: "/calculos-renales", destination: "/services/infecciones-urinarias", permanent: true },
      { source: "/insuficiencia-renal", destination: "/services/medicina-familiar", permanent: true },
      { source: "/cancer-de-garganta", destination: "/services/medicina-familiar", permanent: true },
      { source: "/variante-del-covid-19-pirola-todo-lo-que-debes-saber", destination: "/services/enfermedades-respiratorias", permanent: true },
      // Old WordPress tag/category pages
      { source: "/tag/:slug*", destination: "/blog", permanent: true },
      { source: "/category/:slug*", destination: "/blog", permanent: true },
      { source: "/etiqueta-producto/:slug*", destination: "/services", permanent: true },
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
