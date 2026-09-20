import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlProxy = createMiddleware({
  ...routing,
  localeDetection: false // No detectar idioma del navegador, siempre usar español por defecto
});

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Una sola forma canónica de cada URL: /Services/Tiroides y /services/tiroides
  // no pueden ser dos páginas indexables distintas.
  if (pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 308);
  }

  return intlProxy(request);
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};
