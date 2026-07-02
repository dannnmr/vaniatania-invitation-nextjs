'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseGsapScrollProps {
  yPercent?: number;
  scrub?: number;
}

/**
 * Hook reutilizable para Parallax y Scroll-linked animations.
 */
export function useGsapScroll({ yPercent = 15, scrub = 1.5 }: UseGsapScrollProps = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Configuración inicial parallax
    gsap.set(element, { yPercent: -yPercent });

    const trigger = gsap.to(element, {
      yPercent: yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: element.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: scrub,
      },
    });

    return () => {
      trigger.kill();
    };
  }, [yPercent, scrub]);

  return { elementRef };
}
