'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface RSVPProps {
  data: { rsvp: { deadline: Date; webhookUrl: string; successMessage: string } };
  theme: { colors: { primary: string; gold: string } };
}

export function RSVPSection({ data, theme }: RSVPProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500); // Mock webhook logic
  };

  return (
    <section className="py-24 px-6 relative" style={{ backgroundColor: theme.colors.primary }}>
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-6xl text-emerald-950 mb-4">Confirma tu Asistencia</h2>
        <p className="font-sans text-sm text-emerald-950/60 mb-12">
          Antes del {data.rsvp.deadline.toLocaleDateString('es-ES', { month: 'long', day: 'numeric' })}
        </p>

        {status === 'success' ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 border border-emerald-950/20 rounded-xl bg-emerald-950/5">
            <h3 className="font-serif text-2xl text-emerald-950">{data.rsvp.successMessage}</h3>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
            <input required type="text" placeholder="Nombre completo" className="w-full bg-emerald-950/5 border border-emerald-950/20 rounded-lg px-6 py-4 text-emerald-950 focus:outline-none focus:border-emerald-950/50 transition-colors" />
            <select className="w-full bg-emerald-950/5 border border-emerald-950/20 rounded-lg px-6 py-4 text-emerald-950/70 focus:outline-none focus:border-emerald-950/50 transition-colors appearance-none">
              <option value="1">Sí, asistiré</option>
              <option value="0">No podré asistir</option>
            </select>
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="mt-4 w-full py-4 rounded-lg font-mono text-sm uppercase tracking-widest font-bold text-black"
              style={{ backgroundColor: theme.colors.gold }}
            >
              {status === 'loading' ? 'Enviando...' : 'Confirmar'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
