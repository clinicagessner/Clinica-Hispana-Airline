# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

Bilingual medical clinic website (Spanish/English) for Houston, TX using Next.js 16 App Router with next-intl.

### Routing & i18n

- Routes are under `src/app/[locale]/` with Spanish (`es`) as default locale
- Locale prefix is `as-needed` - Spanish routes have no prefix, English uses `/en`
- Translations in `src/messages/{es,en}.json`
- i18n config: `src/i18n/config.ts`, `routing.ts`, `request.ts`

### Key Files

- `src/lib/constants.ts` - All business data: SITE_CONFIG, CONTACT_INFO, SERVICES[], PROMOTIONS[], SOCIAL_LINKS
- `src/lib/validations.ts` - Zod schemas for forms (contactFormSchema, contactFormSchemaEn)
- `src/app/actions/send-contact-email.ts` - Server action for contact form (uses Resend)
- `src/components/seo/json-ld.tsx` - MedicalClinic, FAQPage, BreadcrumbList schemas

### Component Organization

- `components/ui/` - shadcn/ui primitives (import individually, no barrel exports)
- `components/sections/` - Page sections: Hero, Services, Testimonials, FAQ, Contact, Location
- `components/layout/` - Header, Footer, FloatingButtons, LanguageSwitcher
- `components/forms/` - ContactForm with react-hook-form + Zod

### Data Flow

1. Business data lives in `constants.ts` - edit here to change services, contact info, promotions
2. Services use translation keys from messages JSON for display text
3. Contact form validates client-side with Zod, then server-side in server action
4. Emails sent via Resend API

## Development Rules

**Always:**
- Server Components by default, add `'use client'` only when needed
- Import shadcn components individually: `import { Button } from '@/components/ui/button'`
- Use CSS variables for colors (defined in globals.css)
- Mobile-first Tailwind classes
- `next/image` with descriptive alt text
- Translation keys for all user-facing text

**Never:**
- Barrel imports from `@/components/ui`
- Hardcoded colors
- Native `<img>` tags
- Framer Motion in hero section (CSS animations for LCP)

## Git Commits

- No references to AI in commit messages (no Co-Authored-By, no mentions of Claude, GPT, etc.)
- Use conventional commits format: `feat:`, `fix:`, `docs:`, `refactor:`, etc.

## Environment Variables

Required in `.env.local`:
- `RESEND_API_KEY` - For email sending
- `NEXT_PUBLIC_SITE_URL` - Production URL

Optional:
- `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID` - For Google reviews
- `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID` - Analytics
