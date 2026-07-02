'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { useTextReveal } from '@/hooks/useTextReveal';

interface HeroSectionProps {
  isEnvelopeOpen?: boolean;
  data: {
    client: {
      name: string;
      eventType: string;
      finalPhrase: string;
    };
    assets?: {
      decorations?: {
        bosque?: string;
        hada1?: string;
        hada2?: string;
      };
    };
  };
  theme: {
    colors: {
      primary: string;
      accent: string;
      gold: string;
    };
  };
}

export function HeroSection({ data, theme, isEnvelopeOpen }: HeroSectionProps) {
  // Parallax hook
  const { elementRef } = useGsapScroll({ yPercent: 20 });
  
  // Reveal hook for the phrase
  const { ref: phraseRef, play: playPhrase } = useTextReveal({
    autoPlay: false,
    delay: 0.1,
    duration: 0.8,
    stagger: 0.03
  });

  useEffect(() => {
    if (isEnvelopeOpen) {
      // Delay so it animates right when the envelope is opening
      const t = setTimeout(() => playPhrase(), 600);
      return () => clearTimeout(t);
    }
  }, [isEnvelopeOpen, playPhrase]);

  return (
    <section 
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: theme.colors.primary }}
    >
      {/* Background Parallax (Bosque o gradiente de fallback) */}
      <div 
        ref={elementRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none"
      >
        {data.assets?.decorations?.bosque ? (
          <img 
            src={data.assets.decorations.bosque} 
            alt="Fondo bosque" 
            className="w-full h-full object-cover object-center opacity-100 " 
          />
        ) : (
          <div className="w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5))' }} />
        )}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-between text-center px-4 w-full min-h-[100svh] py-16">
        
        {/* Parte Superior (Nombre y Evento) */}
        <div className="flex flex-col items-center flex-1 justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border px-6 py-2 rounded-full mb-6 bg-white/30 backdrop-blur-sm"
            style={{ borderColor: theme.colors.gold }}
          >
            <span 
              className="font-mono text-xs tracking-[0.4em] uppercase font-bold"
              style={{ color: theme.colors.gold }}
            >
              {data.client.eventType}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-7xl md:text-8xl lg:text-9xl text-emerald-950 mb-8 drop-shadow-xl"
          >
            {data.client.name}
          </motion.h1>
        </div>

        {/* Caja de Frase Final Animada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-auto px-6 py-4 max-w-sm rounded-xl border shadow-xl flex items-center justify-center text-center overflow-hidden"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.45)', // Glassmorphism claro adaptado a nuestro diseño
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderColor: 'rgba(5, 150, 105, 0.25)', // Borde sutil esmeralda
            boxShadow: '0 8px 32px rgba(5, 150, 105, 0.08)'
          }}
        >
          <p 
            ref={phraseRef as React.RefObject<HTMLParagraphElement>}
            className="font-serif text-[1rem] md:text-[1.1rem] italic leading-relaxed text-emerald-950/80 m-0"
          >
            "{data.client.finalPhrase}"
          </p>
        </motion.div>

      </div>
    </section>
  );
}
