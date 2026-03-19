"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { List, Phone } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { NAV_ITEMS, CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy to detect active section
  useEffect(() => {
    const sectionIds = ["home", ...NAV_ITEMS
      .filter(item => item.href.includes("#"))
      .map(item => item.href.split("#")[1])];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      // Find the section that's currently in view
      let currentSection = "home";

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isActiveLink = (href: string) => {
    if (href.includes("#")) {
      return activeSection === href.split("#")[1];
    }
    return false;
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
          <Link href="/" className="block">
            <div className="relative w-28 h-12 md:w-36 md:h-14 lg:w-44 lg:h-16 bg-white rounded-md shadow-sm p-1">
              <Image
                src="/images/logo.webp"
                alt={SITE_CONFIG.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActiveLink(item.href)
                    ? isScrolled
                      ? "bg-red-primary text-white"
                      : "bg-white text-red-primary"
                    : isScrolled
                      ? "text-slate-dark hover:text-red-primary hover:bg-red-light/50"
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
                    <Link href="/" onClick={handleLinkClick} className="block">
                      <div className="relative w-32 h-12 bg-white rounded-md shadow-sm p-1">
                        <Image
                          src="/images/logo.webp"
                          alt={SITE_CONFIG.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </Link>
                  </div>

                  <nav className="flex flex-col gap-1 flex-1">
                    {NAV_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleLinkClick}
                        className={cn(
                          "px-4 py-3 rounded-lg font-medium transition-colors",
                          isActiveLink(item.href)
                            ? "bg-red-primary text-white"
                            : "text-slate-dark hover:bg-red-light hover:text-red-dark"
                        )}
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
