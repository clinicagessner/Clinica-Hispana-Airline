"use client";

import { useEffect } from "react";

/**
 * Lightweight scroll animation hook using Intersection Observer
 * Adds 'is-visible' class to elements with 'animate-on-scroll' class
 *
 * Usage: Call this hook once in a layout or page component
 */
export function useAnimateOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Once animated, stop observing for better performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
