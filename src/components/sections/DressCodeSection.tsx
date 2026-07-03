'use client';

import { motion } from 'framer-motion';
import { Shirt, Ban } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface DressCodeProps {
  data: {
    dressCode: { description: string; notes: string; colors: string[] };
    assets?: {
      decorations?: {
        moño?: string;
        dress_code?: string;
      }
    };
  };
  theme: {
    colors: { primary: string; gold: string; accent: string };
  };
}

export function DressCodeSection({ data, theme }: DressCodeProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative py-6 md:py-8 px-4 flex justify-center overflow-hidden" style={{ backgroundColor: theme.colors.primary }}>
      
      {/* Tarjeta Central en forma de Arco */}
      <div 
        className="relative z-10 w-full max-w-sm mt-2 mb-6 pt-8 pb-6 px-6 rounded-t-[120px] border-[1.5px] shadow-sm flex flex-col items-center text-center backdrop-blur-md"
        style={{ 
          borderColor: theme.colors.gold,
          backgroundColor: 'rgba(255, 255, 255, 0.45)'
        }}
      >
        {/* Moño */}
        {data.assets?.decorations?.moño && (
          <div className="absolute -top-52 right-25 w-108 h-108 drop-shadow-md z-10 -rotate-15 opacity-85">
            <Image src={data.assets.decorations.moño} alt="Moño" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
          </div>
        )}

        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] z-20 mb-2 font-bold" style={{ color: theme.colors.gold }} >
          Sugerencia de estilo
        </span>
        
        <h2 className="font-display text-5xl md:text-6xl text-emerald-950 mb-2 leading-none z-20">
          Dress Code
        </h2>

        {/* Imagen central de etiqueta (o ícono) */}
        {data.assets?.decorations?.dress_code ? (
          <div 
            className="relative w-28 h-28 my-1 drop-shadow-lg flex justify-center items-center animate-float-medium will-change-transform"
          >
            <Image 
              src={data.assets.decorations.dress_code} 
              alt="Etiqueta Dress Code" 
              fill 
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'contain' }}
            />
          </div>
        ) : (
          <div 
            className="relative w-32 h-32 my-2 drop-shadow-lg flex justify-center items-center animate-float-medium will-change-transform"
          >
            {!imgError ? (
              <Image 
                src="/images/decorativas_v2/dress_etiqueta.webp" 
                alt="Etiqueta" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'contain' }}
                onError={() => setImgError(true)}
              />
            ) : (
              <Shirt size={64} style={{ color: theme.colors.accent }} />
            )}
          </div>
        )}

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
        <div className="flex flex-col items-center w-4/5">
          <div className="flex items-start gap-2 mt-2 text-left">
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
