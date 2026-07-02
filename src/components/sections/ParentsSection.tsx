'use client';

import { motion } from 'framer-motion';

interface ParentsSectionProps {
  data: {
    parents: {
      topLabel: string;
      fatherName: string;
      motherName: string;
      godparents?: string[];
    };
  };
  theme: {
    colors: {
      primary: string;
      gold: string;
    };
  };
}

export function ParentsSection({ data, theme }: ParentsSectionProps) {
  const { parents } = data;

  return (
    <section 
      className="relative py-24 px-4 flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: theme.colors.primary }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,191,184,0.1)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-mono text-xs uppercase tracking-[0.3em] mb-8 opacity-90"
          style={{ color: theme.colors.gold }}
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
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center">
            <h2 className="font-display text-4xl md:text-6xl text-emerald-950/90 leading-none">{parents.fatherName}</h2>
            <span className="font-serif text-3xl md:text-5xl italic my-2" style={{ color: theme.colors.gold }}>&</span>
            <h2 className="font-display text-4xl md:text-6xl text-emerald-950/90 leading-none">{parents.motherName}</h2>
          </motion.div>

          {parents.godparents && parents.godparents.length > 0 && (
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-12">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-950/50 block mb-6">Mis Padrinos</span>
              <div className="flex flex-col gap-4">
                {parents.godparents.map((g, idx) => (
                  <p key={idx} className="font-display text-3xl md:text-4xl text-emerald-950/90 leading-none">{g}</p>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
