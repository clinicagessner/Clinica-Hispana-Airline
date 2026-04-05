import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Service } from "@/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLocalizedService(service: Service, locale: string) {
  const isEn = locale === "en";
  return {
    ...service,
    title: (isEn && service.titleEn) || service.title,
    description: (isEn && service.descriptionEn) || service.description,
    longDescription: (isEn && service.longDescriptionEn) || service.longDescription,
    features: (isEn && service.featuresEn) || service.features,
    keywords: (isEn && service.keywordsEn) || service.keywords,
  };
}
