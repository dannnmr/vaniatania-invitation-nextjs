'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen } from 'lucide-react';

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
  onStartOpen?: () => void; // Added onStartOpen
  data: { 
    client: { name: string; eventType: string };
    assets?: {
      envelope?: {
        envelope_complete?: string;
        left?: string;
        right?: string;
        sello?: string;
      }
    }
  };
  theme: { colors: { primary: string; gold: string } };
}

export function EnvelopeScreen({ isOpen, onOpen, onStartOpen, data, theme }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (isOpening) {
      const timer = setTimeout(() => {
        onOpen();
      }, 1500); // 1.5s igual que el original
      return () => clearTimeout(timer);
    }
  }, [isOpening, onOpen]);

  if (isOpen) return null;

  const envAssets = data.assets?.envelope;
  const hasImages = envAssets?.left && envAssets?.right;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden pointer-events-auto flex items-center justify-center"
      style={{ backgroundColor: 'transparent' }}
    >
      
      {/* Background (Cuerpo base del sobre) */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0 z-20"
            style={{ backgroundColor: theme.colors.primary }}
          >
            {envAssets?.envelope_complete && (
              <img
                src={envAssets.envelope_complete}
                alt="Sobre fondo"
                className="w-full h-full object-cover object-center scale-[1]"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lado Izquierdo */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpening ? "-100%" : 0 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        className={`absolute inset-0 z-30 ${!hasImages ? 'w-1/2 border-r border-emerald-950/10' : 'w-full'}`}
        style={!hasImages ? { backgroundColor: theme.colors.primary } : {}}
      >
        {hasImages ? (
          <img
            src={envAssets.left}
            alt="Solapa Izquierda"
            className="w-full h-full object-cover object-center scale-[1]"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(0,0,0,0.05)_0%,transparent_100%)]" />
        )}
      </motion.div>

      {/* Lado Derecho */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpening ? "100%" : 0 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        className={`absolute inset-0 z-30 ${!hasImages ? 'left-1/2 w-1/2 border-l border-emerald-950/10' : 'w-full'}`}
        style={!hasImages ? { backgroundColor: theme.colors.primary } : {}}
      >
        {hasImages ? (
          <img
            src={envAssets.right}
            alt="Solapa Derecha"
            className="w-full h-full object-cover object-center scale-[1]"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(0,0,0,0.05)_0%,transparent_100%)]" />
        )}
      </motion.div>

      {/* Sello y Botón */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div
            exit={{ opacity: 0, scale: 1.8 }}
            transition={{ duration: 0.5 }}
            className="relative z-40 flex flex-col items-center pointer-events-none"
          >
            {envAssets?.sello ? (
              <motion.button
                onClick={() => {
                  setIsOpening(true);
                  if (onStartOpen) onStartOpen();
                }}
                animate={{ scale: [1, 1.03, 1], rotate: [0, 1, -1, 0] }}
                transition={{
                  scale: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.08, rotate: 3 }}
                whileTap={{ scale: 0.92 }}
                className="pointer-events-auto relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] cursor-pointer drop-shadow-2xl"
              >
                <img
                  src={envAssets.sello}
                  alt="Sello de invitación"
                  className="w-full h-full object-contain"
                />
              </motion.button>
            ) : (
              // Fallback UI si no hay sello gráfico
              <div className="flex flex-col items-center">
                <p className="font-mono text-sm uppercase tracking-[0.3em] mb-6" style={{ color: theme.colors.gold }}>
                  {data.client.eventType}
                </p>
                <h1 className="font-display text-6xl md:text-8xl text-emerald-950 mb-12 drop-shadow-lg text-center">
                  {data.client.name}
                </h1>
                <button
                  onClick={() => {
                    setIsOpening(true);
                    if (onStartOpen) onStartOpen();
                  }}
                  className="pointer-events-auto flex items-center gap-3 px-8 py-4 rounded-full border border-emerald-950/20 bg-white/50 hover:bg-white/80 transition-all backdrop-blur-sm group shadow-xl"
                >
                  <MailOpen size={20} style={{ color: theme.colors.gold }} className="group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs uppercase tracking-widest text-emerald-950 font-bold">Abrir Invitación</span>
                </button>
              </div>
            )}
            
            <motion.p
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute -bottom-12 w-full text-center font-mono text-[0.7rem] uppercase tracking-[0.2em]"
              style={{ color: theme.colors.primary }}
            >
              Toca para abrir
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
