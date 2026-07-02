'use client';

import { motion } from 'framer-motion';
import { Music } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

interface MusicProps {
  data: { music: { suggestLabel: string; spotifyPlaylistUrl: string } };
  theme: { colors: { primary: string; gold: string } };
}

export function MusicSection({ data, theme }: MusicProps) {
  return (
    <section className="py-24 px-6 flex flex-col items-center text-center" style={{ backgroundColor: theme.colors.primary }}>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
        <Music size={40} className="mx-auto mb-6" style={{ color: theme.colors.gold }} />
        <h2 className="font-display text-4xl md:text-5xl text-emerald-950 mb-6">¿Qué no puede faltar?</h2>
        
        <GlassCard className="p-8 mt-8 max-w-sm mx-auto">
          <p className="font-sans text-emerald-950/80 mb-6">{data.music.suggestLabel}</p>
          <a 
            href={data.music.spotifyPlaylistUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-3 rounded-full font-mono text-xs uppercase tracking-widest font-bold text-black"
            style={{ backgroundColor: theme.colors.gold }}
          >
            Sugerir Canción
          </a>
        </GlassCard>
      </motion.div>
    </section>
  );
}
