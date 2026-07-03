'use client';

import { motion } from 'framer-motion';
import { useGsapScroll } from '@/hooks/useGsapScroll';
import { useTextReveal } from '@/hooks/useTextReveal';
import { useEffect } from 'react';

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
        espejo?: string;
        luces?: string;
        footer?: string;
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

  const { ref: phraseRef, play: playPhrase } = useTextReveal({ 
    autoPlay: false, 
    delay: 0.1, 
    duration: 0.5, 
    stagger: 0.02 
  });

  useEffect(() => {
    if (isEnvelopeOpen) {
      // Retraso mínimo para que aparezca junto con la apertura del sobre
      const t = setTimeout(() => playPhrase(), 100);
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

      {/* Luces colgantes en la parte superior */}
      {data.assets?.decorations?.luces && (
        <>
          <img
            src={data.assets.decorations.luces}
            alt=""
            className="absolute top-0 left-0 pointer-events-none select-none z-20"
            style={{ height: '160px', width: 'auto', opacity: 0.9 }}
          />
          <img
            src={data.assets.decorations.luces}
            alt=""
            className="absolute top-0 right-0 pointer-events-none select-none z-20"
            style={{ height: '160px', width: 'auto', opacity: 0.9, transform: 'scaleX(-1)' }}
          />
        </>
      )}

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-between text-center px-4 w-full min-h-[100svh] py-16">
        
        {/* Parte Superior (Nombre y Evento) */}
        <div className="flex flex-col items-center flex-1 justify-center">

          {/* XV Años: Marca de agua - encima del espejo */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: isEnvelopeOpen ? 1 : 0, y: isEnvelopeOpen ? 0 : -10 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="select-none pointer-events-none text-center mb-3 block"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.8rem, 9vw, 4.5rem)',
              fontWeight: 700,
              fontStyle: 'italic',
              color: 'transparent',
              WebkitTextStroke: `1.2px ${theme.colors.primary}`,
              opacity: 0.55,
              lineHeight: 1,
              letterSpacing: '0.04em',
            }}
          >
            XV Años
          </motion.span>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isEnvelopeOpen ? 1 : 0, scale: isEnvelopeOpen ? 1 : 0.95 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative flex items-center justify-center w-[90vw] max-w-[400px] md:max-w-[500px] aspect-[4/5] mb-8 mx-auto"
            style={{ willChange: 'transform, opacity' }} // Optimize performance
          >
            {/* Espejo de fondo */}
            {data.assets?.decorations?.espejo && (
              <img 
                src={data.assets.decorations.espejo} 
                alt="Marco espejo" 
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
              />
            )}


            {/* Hada 1 (Arriba a la izquierda) */}
            {data.assets?.decorations?.hada1 && (
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: isEnvelopeOpen ? 1 : 0, x: isEnvelopeOpen ? 0 : -20, y: isEnvelopeOpen ? 0 : -20 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="absolute top-3 -left-2 md:-top-8 md:-left-12 z-20 pointer-events-none rotate-15"
              >
                <motion.img 
                  animate={{ y: [0, -15, 0], rotate: [-2, 3, -2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  src={data.assets.decorations.hada1} 
                  alt="Hada" 
                  className="w-28 md:w-36 object-contain drop-shadow-lg"
                  style={{ filter: 'brightness(1.15) contrast(1.1)' }}
                />
              </motion.div>
            )}

            {/* Hada 2 (Abajo a la derecha) */}
            {data.assets?.decorations?.hada2 && (
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: isEnvelopeOpen ? 1 : 0, x: isEnvelopeOpen ? 0 : 20, y: isEnvelopeOpen ? 0 : 20 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="absolute -bottom-2 -right-4 md:-bottom-12 md:-right-12 z-20 pointer-events-none"
              >
                <motion.img 
                  animate={{ y: [0, -12, 0], rotate: [2, -3, 2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  src={data.assets.decorations.hada2} 
                  alt="Hada" 
                  className="w-28 md:w-26 object-contain drop-shadow-lg"
                  style={{ transform: 'scaleX(-1)' }}
                />
              </motion.div>
            )}
            
            {/* Nombres centrados en el espejo */}
            <h1 className="relative z-10 font-display text-6xl md:text-7xl lg:text-8xl text-emerald-950 text-center flex flex-col items-center justify-center -mt-2 md:-mt-12">
              {data.client.name.includes(' y ') ? (
                <>
                  <span>{data.client.name.split(' y ')[0]}</span>
                  <span className="font-serif italic text-3xl md:text-4xl my-1" style={{ color: theme.colors.gold }}>&</span>
                  <span>{data.client.name.split(' y ')[1]}</span>
                </>
              ) : (
                <span>{data.client.name}</span>
              )}
            </h1>
          </motion.div>
        </div>


        {/* Caja de Frase Final Animada */}
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: isEnvelopeOpen ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.1 }} // Retraso mínimo

          className="mt-auto px-6 py-4 max-w-sm flex items-center justify-center text-center shadow-2xl relative"
          style={{ 
            backgroundColor: 'rgba(2, 44, 30, 0.35)', // Cristal oscuro (esmeralda muy oscuro y translúcido)
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            border: '1px solid rgba(212, 175, 55, 0.3)', // Borde dorado muy sutil
            borderRadius: '20px', // Bordes más afilados, chic minimalista
          }}
        >
          <p 
            ref={phraseRef as React.RefObject<HTMLParagraphElement>}
            className="font-serif text-[1rem] md:text-[1.1rem] italic leading-relaxed text-emerald-50 font-light m-0 relative z-10"
          >
            "{data.client.finalPhrase}"
          </p>
        </motion.div>

      </div>
    </section>
  );
}
