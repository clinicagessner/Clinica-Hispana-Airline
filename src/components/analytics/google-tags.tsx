"use client";

import Script from "next/script";

/**
 * GA4, Google Ads, Meta Pixel y CallRail en un solo sitio y todos con
 * `lazyOnload`.
 *
 * Antes: `@next/third-parties` inyectaba su propio preload de gtm y el tag de
 * Ads cargaba otro `gtag/js` con `afterInteractive`. Entre los dos gtag, el
 * pixel y el swap de CallRail se iban 296 KB de JavaScript sin usar y el LCP
 * móvil se quedaba en 5,1 s.
 *
 * `lazyOnload` los baja cuando la página ya está interactiva. No se pierde
 * medición: GA4 y Ads encolan en `dataLayer` y envían al inicializarse.
 */

const GA4_ID = "G-YVEMRNF7VP";
const ADS_ID = "AW-718776156";
const META_PIXEL_ID = "1993259561579416";
const CALLRAIL_SWAP =
  "https://cdn.callrail.com/companies/257588879/cc932502d2a770c60e21/12/swap.js";

export function GoogleTags() {
  return (
    <>
      {/* Un solo gtag/js para GA4 y Ads */}
      <Script
        id="gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}');
          gtag('config', '${ADS_ID}');
        `}
      </Script>

      <Script id="meta-pixel" strategy="lazyOnload">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>

      <Script id="callrail-swap" src={CALLRAIL_SWAP} strategy="lazyOnload" />
    </>
  );
}
