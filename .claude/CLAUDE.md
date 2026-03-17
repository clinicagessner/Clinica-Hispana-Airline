# Clínica Hispana Houston - Configuración Claude

## Proyecto
Website para Clínica Médica Hispana en Houston, TX.
Sitio bilingüe (Español/Inglés) optimizado para SEO local.

## Stack Tecnológico
- Next.js 15+ (App Router)
- React 19+
- TypeScript 5+
- Tailwind CSS v4
- shadcn/ui
- next-intl (i18n)
- React Hook Form + Zod
- Framer Motion
- Resend (emails)

## Estructura del Proyecto
```
src/
├── app/
│   ├── [locale]/           # Rutas internacionalizadas
│   │   ├── layout.tsx      # Layout con metadata, fonts, providers
│   │   ├── page.tsx        # Homepage
│   │   ├── services/       # Páginas de servicios
│   │   └── privacy/        # Política de privacidad/HIPAA
│   ├── actions/            # Server actions
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sections/           # Secciones de página (hero, services, etc.)
│   ├── layout/             # Header, footer, floating buttons
│   ├── forms/              # Formularios
│   └── seo/                # JSON-LD schemas
├── lib/
│   ├── constants.ts        # Datos del negocio
│   ├── validations.ts      # Schemas Zod
│   └── utils.ts            # Helpers
├── messages/               # Traducciones es.json, en.json
├── i18n/                   # Configuración next-intl
└── types/                  # TypeScript types
```

## Paleta de Colores (Azul Médico)
- Primary: #1E3A5F (azul oscuro)
- Blue Primary: #2563EB
- Blue Light: #DBEAFE
- Background: #F0F7FF
- Slate Dark: #1E293B

## Reglas de Desarrollo

### SIEMPRE:
1. Server Components por defecto
2. Imports específicos (no barrel imports)
3. Validar con Zod en cliente Y servidor
4. next/image con alt descriptivo
5. Mobile-first CSS
6. CSS variables para colores
7. Translation keys para todo texto

### NUNCA:
1. Barrel imports de @/components/ui
2. Colores hardcodeados
3. <img> nativo (usar next/image)
4. Framer Motion en hero (usar CSS animations para LCP)

## Datos del Negocio
Editar en: `src/lib/constants.ts`
- SITE_CONFIG: nombre, URL, descripción
- CONTACT_INFO: dirección, teléfono, horarios
- SERVICES: lista de servicios médicos
- PROMOTIONS: promociones actuales

## Traducciones
- Español: `src/messages/es.json`
- Inglés: `src/messages/en.json`

## Variables de Entorno
Ver `.env.example` para configuración requerida.
