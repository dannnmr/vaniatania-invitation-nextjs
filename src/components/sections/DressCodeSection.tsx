'use client';

import { motion } from 'framer-motion';
import { Shirt, Ban } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface DressCodeProps {
  data: {
    dressCode: { description: string; notes: string; colors: string[] };
  };
  theme: {
    colors: { primary: string; gold: string; accent: string };
  };
}

export function DressCodeSection({ data, theme }: DressCodeProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative py-24 px-4 flex justify-center overflow-hidden" style={{ backgroundColor: theme.colors.primary }}>
      
      {/* Tarjeta Central en forma de Arco */}
      <div 
        className="relative z-10 w-full max-w-sm pt-12 pb-10 px-6 rounded-t-[150px] border border-emerald-950/20 shadow-xl flex flex-col items-center text-center"
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(12px)'
        }}
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] mb-2 font-bold" style={{ color: theme.colors.gold }}>
          Sugerencia de estilo
        </span>
        
        <h2 className="font-display text-5xl md:text-6xl text-emerald-950 mb-6 leading-none">
          Dress Code
        </h2>

        {/* Imagen central de etiqueta (o ícono) */}
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-32 h-32 my-2 drop-shadow-lg flex justify-center items-center"
        >
          {!imgError ? (
            <Image 
              src="/images/decorativas_v2/dress_etiqueta.webp" 
              alt="Etiqueta" 
              fill 
              style={{ objectFit: 'contain' }}
              onError={() => setImgError(true)}
            />
          ) : (
            <Shirt size={64} style={{ color: theme.colors.accent }} />
          )}
        </motion.div>

        {/* Círculos de texturas/colores */}
        <div className="flex flex-wrap gap-3 justify-center my-6 z-10 relative">
          {data.dressCode.colors.map((color, idx) => (
            <div 
              key={idx}
              className="w-12 h-12 rounded-full border border-emerald-950/20 shadow-md"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Nota Especial */}
        <div className="flex flex-col items-center mt-6 pt-6 border-t border-emerald-950/20 w-4/5">
          <span className="font-pinyon text-4xl leading-[0.8]" style={{ color: theme.colors.gold }}>
            Nota Especial
          </span>
          <div className="flex items-start gap-2 mt-4 text-left">
            <Ban size={16} style={{ color: theme.colors.gold, marginTop: '2px', flexShrink: 0 }} />
            <p className="font-sans text-xs italic text-emerald-950/70 leading-relaxed tracking-wide m-0">
              {data.dressCode.notes}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
