"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quotes } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useCallback } from "react";
import type { GoogleReview } from "@/lib/google-places";

interface TestimonialsCarouselProps {
  reviews: GoogleReview[];
}

export function TestimonialsCarousel({ reviews }: TestimonialsCarouselProps) {
  const t = useTranslations("testimonials");

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <Card className="h-full bg-red-bg border-0">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quotes
                    className="size-8 text-red-primary/30 mb-4"
                    weight="fill"
                  />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-5 ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        weight="fill"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-dark mb-6 line-clamp-4">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="relative size-12 rounded-full overflow-hidden bg-red-light">
                      <Image
                        src={review.profile_photo_url}
                        alt={review.author_name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-dark">
                        {review.author_name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {review.relative_time_description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="rounded-full"
          aria-label={t("verifiedReview")}
        >
          <CaretLeft className="size-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="rounded-full"
          aria-label={t("verifiedReview")}
        >
          <CaretRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}
