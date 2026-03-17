"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export function LanguageSwitcher({ isScrolled = true }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === "es" ? "en" : "es";
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname || `/${newLocale}`);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className={cn(
        "gap-1.5 font-medium",
        isScrolled
          ? "text-slate-dark hover:text-blue-primary hover:bg-blue-light/50"
          : "text-white/90 hover:text-white hover:bg-white/10"
      )}
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <Globe className="size-4" weight="bold" />
      <span className="uppercase">{locale === "es" ? "EN" : "ES"}</span>
    </Button>
  );
}
