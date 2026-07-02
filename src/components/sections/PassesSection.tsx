'use client';

import { motion } from 'framer-motion';

interface PassesProps {
  data: {
    passes: { topLabel: string; mainTitle: string; ticketLabel: string; admitText: string; quantity: string; unitText: string };
  };
  theme: {
    colors: { primary: string; gold: string };
  };
}

export function PassesSection({ data, theme }: PassesProps) {
  return (
    <section className="py-24 px-6 flex flex-col items-center" style={{ backgroundColor: theme.colors.primary }}>
      <motion.p 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        className="font-mono text-xs uppercase tracking-[0.3em] mb-12 text-center" 
        style={{ color: theme.colors.gold }}
      >
        {data.passes.topLabel}
      </motion.p>

      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-emerald-950/10 backdrop-blur-md border border-emerald-950/20 shadow-2xl"
      >
        <div className="p-8 text-center border-b border-emerald-950/10">
          <h3 className="font-display text-4xl text-emerald-950 uppercase tracking-widest">{data.passes.mainTitle}</h3>
          <p className="font-sans text-xs text-emerald-950/50 uppercase tracking-widest mt-2">{data.passes.ticketLabel}</p>
        </div>
        
        <div className="p-8 text-center bg-black/20">
          <p className="font-serif text-lg italic text-emerald-950/70 mb-2">{data.passes.admitText}</p>
          <div className="flex items-center justify-center gap-3">
            <span className="font-display text-6xl" style={{ color: theme.colors.gold }}>{data.passes.quantity}</span>
            <span className="font-sans text-xl uppercase text-emerald-950 tracking-widest">{data.passes.unitText}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
