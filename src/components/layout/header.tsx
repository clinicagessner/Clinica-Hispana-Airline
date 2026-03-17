"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { List, X, Phone } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { NAV_ITEMS, CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/images/logo.webp"
                alt={SITE_CONFIG.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span
                className={cn(
                  "font-heading font-bold text-lg transition-colors",
                  isScrolled ? "text-blue-dark" : "text-white"
                )}
              >
                {SITE_CONFIG.shortName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-blue-light/50",
                  isScrolled
                    ? "text-slate-dark hover:text-blue-primary"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher isScrolled={isScrolled} />
            <Button asChild size="sm" className="gap-2">
              <a href={`tel:${CONTACT_INFO.phone}`}>
                <Phone className="size-4" weight="bold" />
                <span className="hidden xl:inline">{CONTACT_INFO.phoneFormatted}</span>
                <span className="xl:hidden">{t("cta.callNow")}</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher isScrolled={isScrolled} />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    isScrolled ? "text-slate-dark" : "text-white"
                  )}
                  aria-label={t("nav.menu")}
                >
                  <List className="size-6" weight="bold" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <SheetTitle className="sr-only">{t("nav.menu")}</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/" onClick={handleLinkClick} className="flex items-center gap-2">
                      <div className="relative w-10 h-10">
                        <Image
                          src="/images/logo.webp"
                          alt={SITE_CONFIG.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="font-heading font-bold text-lg text-blue-dark">
                        {SITE_CONFIG.shortName}
                      </span>
                    </Link>
                  </div>

                  <nav className="flex flex-col gap-1 flex-1">
                    {NAV_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleLinkClick}
                        className="px-4 py-3 rounded-lg text-slate-dark hover:bg-blue-light hover:text-blue-dark font-medium transition-colors"
                      >
                        {t(item.label)}
                      </Link>
                    ))}
                  </nav>

                  <div className="pt-6 border-t">
                    <Button asChild className="w-full gap-2" size="lg">
                      <a href={`tel:${CONTACT_INFO.phone}`}>
                        <Phone className="size-5" weight="bold" />
                        {t("cta.callNow")}
                      </a>
                    </Button>
                    <p className="text-center text-sm text-muted-foreground mt-3">
                      {CONTACT_INFO.phoneFormatted}
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
