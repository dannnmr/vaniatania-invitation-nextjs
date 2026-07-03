'use client';

import { motion } from 'framer-motion';
import { Gift, Mail } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface GiftRegistryProps {
  data: {
    giftRegistry: { message: string; banks: { name: string; account: string; owner: string }[] };
  };
  theme: {
    colors: { primary: string; gold: string; accent: string };
  };
}

export function GiftRegistrySection({ data, theme }: GiftRegistryProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section 
      aria-label="Mesa de regalos" 
      className="relative flex flex-col items-center justify-center overflow-hidden py-24 px-6"
      style={{ backgroundColor: theme.colors.primary }}
    >
      {/* Decoración de fondo */}
      <div
        className="absolute -top-4 -right-12 w-64 h-64 md:w-80 md:h-80 z-0 opacity-20 pointer-events-none animate-float-medium will-change-transform"
      >
        <Image 
          src="/images/decorativas_v2/boladisco2.png"
          alt=""
          fill
          style={{ objectFit: 'contain' }}
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      </div>

      <div className="text-center max-w-2xl z-10 mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] mb-2 font-bold" style={{ color: theme.colors.gold }}>
          REGALOS
        </p>
        <h2 className="font-display text-5xl md:text-6xl text-emerald-950 mb-4">
          El Mejor Regalo
        </h2>
      </div>

      {/* Tarjeta Horizontal estilo Glassmorphism */}
      <div 
        className="relative z-10 flex flex-col md:flex-row items-center gap-6 w-full max-w-xl p-8 rounded-3xl border border-emerald-950/20 shadow-2xl backdrop-blur-xl"
        style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
      >
        {/* Lado Izquierdo: Imagen o Icono */}
        <div className="relative w-32 h-32 flex-shrink-0 flex items-center justify-center drop-shadow-md">
          {!imageError ? (
            <Image
              src="/images/decorativas_v2/regalo_sobre.png"
              alt="Lluvia de Sobres"
              fill
              style={{ objectFit: 'contain' }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-emerald-950/10 rounded-full flex items-center justify-center">
               <Mail size={48} style={{ color: theme.colors.gold }} />
            </div>
          )}
        </div>

        {/* Lado Derecho: Textos */}
        <div className="flex-1 text-center md:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-1 font-bold" style={{ color: theme.colors.gold }}>
            REGALOS
          </p>
          <h4 className="font-display text-3xl text-emerald-950 mb-2">
            Lluvia de Sobres
          </h4>
          <p className="font-sans text-sm text-emerald-950/70 leading-relaxed m-0">
            {data.giftRegistry.message || 'Compartir este dia contigo sera el mejor regalo. Cualquier muestra de afecto sera recibida con gratitud'}
          </p>
        </div>
      </div>
    </section>
  );
}
