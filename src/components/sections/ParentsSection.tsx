'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CSSSparkle } from '@/components/ui/CSSSparkle';

interface ParentsSectionProps {
  data: {
    parents: {
      topLabel: string;
      fatherName: string;
      motherName: string;
      godparents?: { role: string; couple: string }[];
    };
    assets?: {
      decorations?: {
        mariposa_rosa?: string;
        enredadera?: string;
      };
    };
  };
  theme: {
    colors: {
      primary: string;
      gold: string; // Used for titles or accents
      accent: string; // Verde agua
      rose: string; // Palo de rosa
    };
  };
}

export function ParentsSection({ data, theme }: ParentsSectionProps) {
  const { parents, assets } = data;

  return (
    <section 
      className="relative py-24 px-4 flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: theme.colors.primary }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,191,184,0.1)_0%,transparent_60%)] pointer-events-none" />

      {/* Chispas Mágicas de Fondo
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <CSSSparkle size={25} color={theme.colors.gold} top="15%" left="20%" delay="0s" />
        <CSSSparkle size={15} color={theme.colors.rose} top="40%" right="15%" delay="1.5s" />
        <CSSSparkle size={20} color={theme.colors.gold} bottom="20%" left="25%" delay="0.5s" />
        <CSSSparkle size={30} color={theme.colors.rose} bottom="30%" right="25%" delay="2s" />
      </div> */}

      {/* Enredaderas Decorativas */}
      {assets?.decorations?.enredadera && (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          {/* Arriba Izquierda */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 left-0 w-40 h-56 md:w-64 md:h-80 -scale-x-100 opacity-80"
          >
            <Image src={assets.decorations.enredadera} alt="Enredadera Izquierda" fill className="object-contain object-top-right" />
          </motion.div>
          
          {/* Arriba Derecha */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-40 h-56 md:w-64 md:h-80 opacity-80"
          >
            <Image src={assets.decorations.enredadera} alt="Enredadera Derecha" fill className="object-contain object-top-right" />
          </motion.div>

          {/* Abajo Izquierda (volteada hacia arriba) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute bottom-0 left-0 w-40 h-56 md:w-64 md:h-80 -scale-x-100 -scale-y-100 opacity-60"
          >
            <Image src={assets.decorations.enredadera} alt="Enredadera Abajo Izquierda" fill className="object-contain object-top-right" />
          </motion.div>

          {/* Abajo Derecha (volteada hacia arriba) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute bottom-0 right-0 w-40 h-56 md:w-64 md:h-80 -scale-y-100 opacity-60"
          >
            <Image src={assets.decorations.enredadera} alt="Enredadera Abajo Derecha" fill className="object-contain object-top-right" />
          </motion.div>
        </div>
      )}

      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-serif italic text-lg md:text-xl tracking-wide mb-8 opacity-90"
          style={{ color: theme.colors.rose }}
        >
          {parents.topLabel}
        </motion.p>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          
          className="flex flex-col gap-4"
        >
          {/* PADRES */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center relative">
            
            {/* Mariposas flotando alrededor de los nombres */}
            {assets?.decorations?.mariposa_rosa && (
              <>
                <motion.div 
                  animate={{ y: [0, -15, 0], x: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -top-10 -left-6 md:-left-20 w-12 h-12 md:w-16 md:h-16 opacity-70 pointer-events-none"
                >
                  <Image src={assets.decorations.mariposa_rosa} alt="Mariposa flotando" fill className="object-contain -scale-x-100" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, -20, 0], x: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 -right-6 md:-right-16 w-10 h-10 md:w-14 md:h-14 opacity-70 pointer-events-none"
                >
                  <Image src={assets.decorations.mariposa_rosa} alt="Mariposa flotando" fill className="object-contain" />
                </motion.div>
              </>
            )}

            <h2 className="font-display text-4xl md:text-5xl leading-none drop-shadow-sm" style={{ color: theme.colors.gold }}>{parents.fatherName}</h2>
            <div className="flex items-center gap-4 my-4 w-full justify-center">
              <div className="h-[1px] w-12 bg-current opacity-30" style={{ backgroundColor: theme.colors.rose }}></div>
              <span className="font-serif text-3xl md:text-4xl italic" style={{ color: theme.colors.rose }}>&</span>
              <div className="h-[1px] w-12 bg-current opacity-30" style={{ backgroundColor: theme.colors.rose }}></div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-none drop-shadow-sm" style={{ color: theme.colors.gold }}>{parents.motherName}</h2>
          </motion.div>

          {/* DIVISOR DE SECCIÓN (Mariposa) */}
          {parents.godparents && parents.godparents.length > 0 && assets?.decorations?.mariposa_rosa && (
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} 
              className="w-full flex justify-center py-2 relative h-16 md:h-20"
            >
              <Image 
                src={assets.decorations.mariposa_rosa} 
                alt="Mariposa" 
                fill 
                className="object-contain opacity-80"
              />
            </motion.div>
          )}

          {/* PADRINOS - ESTILO CRÉDITOS + LÍNEAS */}
          {parents.godparents && parents.godparents.length > 0 && (
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col gap-6">
              {parents.godparents.map((g, idx) => (
                <div key={idx} className="flex flex-col items-center relative">
                  {/* Mariposas revoloteando para padrinos (alternando lados) */}
                  {assets?.decorations?.mariposa_rosa && (
                    <motion.div 
                      animate={{ 
                        y: [0, idx % 2 === 0 ? -10 : -15, 0], 
                        x: [0, idx % 2 === 0 ? 5 : -5, 0], 
                        rotate: [0, idx % 2 === 0 ? 5 : -5, 0] 
                      }}
                      transition={{ repeat: Infinity, duration: 4 + (idx * 0.5), ease: "easeInOut", delay: idx * 0.5 }}
                      className={`absolute top-6 md:top-8 ${idx % 2 === 0 ? 'right-2 md:-right-2' : 'left-2 md:-left-2'} w-8 h-8 md:w-10 md:h-10 opacity-70 pointer-events-none`}
                    >
                      <Image 
                        src={assets.decorations.mariposa_rosa} 
                        alt="Mariposa flotando" 
                        fill 
                        className={`object-contain ${idx % 2 !== 0 ? '-scale-x-100' : ''}`} 
                      />
                    </motion.div>
                  )}

                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] block mb-3 opacity-80" style={{ color: theme.colors.rose }}>
                    {g.role}
                  </span>
                  <p className="font-display text-2xl md:text-4xl leading-snug max-w-[80%] drop-shadow-sm" style={{ color: theme.colors.gold }}>
                    {g.couple}
                  </p>
                  
                  {/* Línea divisoria elegante entre padrinos (excepto el último) */}
                  {idx !== parents.godparents!.length - 1 && (
                    <div className="w-16 h-[1px] mt-6 opacity-30" style={{ backgroundColor: theme.colors.rose }}></div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
