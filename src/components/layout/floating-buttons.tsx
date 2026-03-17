"use client";

import { useState, useEffect } from "react";
import { Phone, WhatsappLogo, MapPin } from "@phosphor-icons/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = CONTACT_INFO.phone.replace(/\D/g, "");
  const whatsappMessage = encodeURIComponent("Hola, me gustaría obtener información sobre sus servicios médicos.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      {/* Location Button */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={CONTACT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="size-14 rounded-full bg-slate-dark text-white shadow-lg flex items-center justify-center hover:bg-slate-primary transition-colors"
            aria-label="Ver ubicación en Google Maps"
          >
            <MapPin className="size-6" weight="fill" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Cómo Llegar</p>
        </TooltipContent>
      </Tooltip>

      {/* WhatsApp Button */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="size-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#128C7E] transition-colors"
            aria-label="Contactar por WhatsApp"
          >
            <WhatsappLogo className="size-7" weight="fill" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>WhatsApp</p>
        </TooltipContent>
      </Tooltip>

      {/* Phone Button - Primary CTA */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="size-16 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center animate-pulse-float"
            aria-label="Llamar ahora"
          >
            <Phone className="size-7" weight="fill" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Llamar Ahora</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
