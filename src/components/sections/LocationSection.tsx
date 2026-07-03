'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { CSSSparkle } from '@/components/ui/CSSSparkle';

interface LocationSectionProps {
  data: {
    event: {
      locationName?: string;
      locationUrl?: string;
    };
    assets?: {
      decorations?: {
        bosque?: string; // Usaremos el bosque como fondo editorial
        papel_abajo?: string;
        arbol?: string;
        hada1?: string;
        hada2?: string;
        espejo?: string;
        mariposas?: string;
        fairy_volando?: string;
        letrero?: string;
        flores?: string;
      };
    };
  };
  theme: {
    colors: {
      primary: string;
      accent: string;
      gold: string;
      rose: string;
    };
  };
}

export function LocationSection({ data, theme }: LocationSectionProps) {
  const { locationName, locationUrl } = data.event;

  if (!locationName || !locationUrl) return null;

  // Split name and address if separated by comma
  const parts = locationName.split(',');
  const venueTitle = parts[0].trim();
  const venueSubtitle = parts.length > 1 ? parts.slice(1).join(',').trim() : '';

  return (
    <section style={{ 
      position: 'relative', 
      backgroundColor: theme.colors.primary, 
      minHeight: 'auto', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      padding: '6rem 1.5rem',
      overflow: 'hidden',
      zIndex: 1
    }}>
      {/* Decorative Paper Divider Top */}
      {data.assets?.decorations?.papel_abajo && (
        <div className="absolute -top-3 left-0 w-full z-20 md:z-0 pointer-events-none transform -translate-y-[2px]">
          <Image 
            src={data.assets.decorations.papel_abajo} 
            alt="Papel decorativo" 
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="object-cover" 
          />
        </div>
      )}
      {/* Fondo Editorial (Imagen de Bosque a la derecha) */}
      {data.assets?.decorations?.fairy_volando && (
        <motion.div 
          initial={{ opacity: 0, scale: 1.1, x: 50 }}
          whileInView={{ opacity: 0.6, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{
            position: 'absolute',
            top: '20%',
            right: '-25%',
            width: '100%',
            maxWidth: '700px',
            height: '70%',
            zIndex: 0,
            opacity: 0.5, // Más visible
            pointerEvents: 'none'
          }}
        >
          <Image 
            src={data.assets.decorations.fairy_volando} 
            alt="Decoración Ubicación"
            fill
            sizes="(max-width: 700px) 100vw, 700px"
            style={{ objectFit: 'contain', filter: 'contrast(120%)' }}
          />
        </motion.div>
      )}

      {/* Sparkles */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        <CSSSparkle size={20} color={theme.colors.gold} top="20%" left="15%" delay="0s" />
        <CSSSparkle size={30} color={theme.colors.rose} top="10%" right="20%" delay="1s" />
      </div>

      {/* Massive Typography Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column' }}>
        
        {/* Tiny Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }}
          style={{ fontFamily: 'var(--font-mono)', color: theme.colors.rose, fontSize: '0.75rem', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
        >
          <span style={{ width: '40px', height: '1px', backgroundColor: theme.colors.rose }} />
          El Lugar
        </motion.p>

        {/* Massive Name */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} viewport={{ once: true }}
          style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: 'clamp(4rem, 10vw, 8rem)', 
            color: theme.colors.gold, 
            lineHeight: 0.9, 
            margin: '0 0 2rem 0',
            textShadow: '0 10px 30px rgba(77, 182, 172, 0.2)' 
          }}
        >
          {venueTitle}
        </motion.h2>

        {/* Address Grid */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} viewport={{ once: true }}
          style={{ paddingTop: '1rem', marginTop: '1rem' }}
        >
          {/* Address Details & Button */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '400px', marginLeft: '2rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <div>
              {venueSubtitle && (
                <p style={{ fontFamily: 'var(--font-serif)', color: theme.colors.rose, fontSize: '1.2rem', lineHeight: 1.6, letterSpacing: '0.05em', fontStyle: 'italic', whiteSpace: 'pre-line' }}>
                  {venueSubtitle}
                </p>
              )}
            </div>

            {/* Avant-Garde Map Button (Circular con texto rotatorio) */}
            <a href={locationUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', alignSelf: 'flex-start', marginLeft: '25px' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  position: 'relative', width: '90px', height: '90px', borderRadius: '50%', 
                  border: `1px solid ${theme.colors.gold}40`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: theme.colors.gold, backgroundColor: 'rgba(255,255,255,0.4)',
                  backdropFilter: 'blur(2px)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                }}
              >
                <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: -25, width: 'calc(100% + 50px)', height: 'calc(100% + 50px)' }} className="animate-spin-slow will-change-transform">
                  <path id="circleTextPathIconic" d="M 50, 50 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" fill="transparent" />
                  <text style={{ fontSize: '7px', fill: theme.colors.gold, fontFamily: 'var(--font-mono)', letterSpacing: '2.5px', textTransform: 'uppercase', fontWeight: 600 }}>
                    <textPath href="#circleTextPathIconic" startOffset="0%">
                      VER EN GOOGLE MAPS • RUTA AL EVENTO • 
                    </textPath>
                  </text>
                </svg>
                
                <MapPin size={38} strokeWidth={1} color={theme.colors.gold} />
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
