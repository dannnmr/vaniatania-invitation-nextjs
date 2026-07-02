'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface UseTextRevealOptions {
  delay?: number;
  duration?: number;
  stagger?: number;
  autoPlay?: boolean;
}

interface UseTextRevealReturn {
  ref: React.RefObject<HTMLElement | null>;
  play: () => void;
}

export function useTextReveal(
  options: UseTextRevealOptions = {}
): UseTextRevealReturn {
  const {
    delay    = 0,
    duration = 0.8,
    stagger  = 0.04,
    autoPlay = true,
  } = options;

  const ref       = useRef<HTMLElement>(null);
  const tlRef     = useRef<gsap.core.Timeline | null>(null);
  const splitRef  = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Obtener el texto original
    const text = el.textContent ?? '';
    if (!text.trim()) return;

    el.textContent = '';
    el.setAttribute('aria-label', text); 

    const words = text.split(' ');
    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.whiteSpace = 'nowrap';
      
      word.split('').forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        charSpan.style.display = 'inline-block';
        wordSpan.appendChild(charSpan);
        splitRef.current.push(charSpan);
      });
      
      el.appendChild(wordSpan);
      
      if (wordIndex < words.length - 1) {
        const spaceSpan = document.createElement('span');
        spaceSpan.innerHTML = '&nbsp;';
        spaceSpan.style.display = 'inline-block';
        el.appendChild(spaceSpan);
        splitRef.current.push(spaceSpan);
      }
    });

    gsap.set(splitRef.current, { y: '110%', opacity: 0 });

    tlRef.current = gsap.timeline({ paused: !autoPlay, delay });

    tlRef.current.to(splitRef.current, {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease: 'expo.out',
    });

    return () => {
      tlRef.current?.kill();
      el.textContent = text; // restaurar original
      splitRef.current = [];
    };
  }, [delay, duration, stagger, autoPlay]);

  function play() {
    tlRef.current?.play();
  }

  return { ref: ref as React.RefObject<HTMLElement | null>, play };
}
