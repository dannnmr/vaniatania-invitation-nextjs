'use client';

import { motion } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';
import { CSSSparkle } from '@/components/ui/CSSSparkle';

interface CountdownSectionProps {
  data: {
    event: {
      date: Date;
    };
  };
  theme: {
    colors: {
      primary: string;
      gold: string;
    };
  };
}

export function CountdownSection({ data, theme }: CountdownSectionProps) {
  const countdown = useCountdown(data.event.date);

  const items = [
    { label: 'DÍAS', value: countdown.days },
    { label: 'HRS', value: countdown.hours },
    { label: 'MIN', value: countdown.minutes },
    { label: 'SEG', value: countdown.seconds },
  ];

  return (
    <section 
      className="relative flex flex-col items-center py-24 px-6 overflow-hidden"
      style={{ backgroundColor: theme.colors.primary }}
    >
      <CSSSparkle size={20} color={theme.colors.gold} top="20%" left="15%" delay="0s" />
      <CSSSparkle size={30} color="#EAEAEA" top="10%" right="20%" delay="1s" />

      <div className="relative z-10 text-center mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.3em] mb-2 drop-shadow-md" style={{ color: theme.colors.gold }}>
          Empieza la cuenta
        </p>
        <h2 className="font-display text-5xl md:text-7xl text-emerald-950/90 leading-none drop-shadow-xl">
          Falta muy poco
        </h2>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        className="relative z-10 flex flex-wrap justify-center gap-4 md:gap-6"
      >
        {items.map((item, idx) => (
          <motion.div 
            key={idx} 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 15 } }
            }}
          >
            <div className="flex flex-col items-center justify-center w-20 h-28 md:w-28 md:h-36 rounded-3xl border border-emerald-950/20 bg-emerald-950/5 backdrop-blur-md shadow-2xl relative overflow-hidden animate-pulse" style={{ animationDuration: '4s', animationDelay: `${idx * 0.5}s` }}>
              <span className="font-serif text-4xl md:text-5xl text-emerald-950 font-medium z-10">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="font-mono text-[0.65rem] font-bold tracking-widest mt-2 z-10" style={{ color: theme.colors.gold }}>
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
