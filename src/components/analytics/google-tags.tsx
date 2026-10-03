"use client";

import { useEffect } from "react";
import Script from "next/script";

/**
 * GA4, Google Ads y Meta Pixel se cargan con la PRIMERA interacción del visitante
 * (toque, clic, tecla o scroll), no al cargar la página. Decisión del usuario
 * (2026-10-03, lote B1 de Airline): las tres etiquetas sumaban ~1,1 s de bloqueo
 * del hilo principal en móvil y la home no pasaba de ~55 en Lighthouse.
 *
 * Coste asumido: quien entra y sale sin tocar ni desplazar nada no se mide.
 * Las conversiones de Ads sí: para llamar, escribir o enviar el formulario hay
 * que tocar la página, y ese toque ya dispara la carga. `dataLayer` y `gtag`
 * existen desde el montaje, así que todo lo que se encole antes se envía al cargar.
 * Sigue habiendo un solo gtag.js para GA4 y Ads.
 *
 * CallRail NO espera a la interacción: cambia el número de teléfono visible y,
 * si llegara tarde, la llamada de un visitante de Ads iría al número sin rastrear.
 */

const GA4_ID = "G-YVEMRNF7VP";
const ADS_ID = "AW-718776156";
const META_PIXEL_ID = "1993259561579416";
const CALLRAIL_SWAP =
  "https://cdn.callrail.com/companies/257588879/cc932502d2a770c60e21/12/swap.js";

const INTERACTION_EVENTS = ["pointerdown", "touchstart", "keydown", "scroll", "wheel"] as const;

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: Fbq;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: Fbq;
    _fbq?: Fbq;
    __tagsLoaded?: boolean;
    __gtagConfigured?: boolean;
  }
}

function loadScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function loadTags() {
  if (window.__tagsLoaded) return;
  window.__tagsLoaded = true;

  loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`);

  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    } as Fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq = fbq;
    loadScript("https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", META_PIXEL_ID);
    fbq("track", "PageView");
  }
}

export function GoogleTags() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      window.gtag = function gtag() {
        // gtag.js espera el objeto `arguments`, no un array.
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };
    }
    // `trackEvent` (conversion-events.tsx) también puede crear `gtag`: la
    // configuración va aparte para que se haga siempre, una sola vez.
    if (!window.__gtagConfigured) {
      window.__gtagConfigured = true;
      window.gtag("js", new Date());
      window.gtag("config", GA4_ID);
      window.gtag("config", ADS_ID);
    }
    if (window.__tagsLoaded) return;

    const onFirstInteraction = () => {
      for (const e of INTERACTION_EVENTS) window.removeEventListener(e, onFirstInteraction);
      loadTags();
    };
    for (const e of INTERACTION_EVENTS) {
      window.addEventListener(e, onFirstInteraction, { once: true, passive: true });
    }
    return () => {
      for (const e of INTERACTION_EVENTS) window.removeEventListener(e, onFirstInteraction);
    };
  }, []);

  return <Script id="callrail-swap" src={CALLRAIL_SWAP} strategy="lazyOnload" />;
}
