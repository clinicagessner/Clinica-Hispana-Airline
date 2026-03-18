"use client";

import { useState, useEffect } from "react";
import { CaretUp } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const t = useTranslations("accessibility");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 left-6 z-40 size-12 rounded-full bg-red-light text-red-dark shadow-lg flex items-center justify-center hover:bg-red-primary hover:text-white transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label={t("scrollToTop")}
    >
      <CaretUp className="size-6" weight="bold" />
    </button>
  );
}
