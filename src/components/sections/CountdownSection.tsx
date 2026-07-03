'use client';

import { motion } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';
import Image from 'next/image';
import { CSSSparkle } from '@/components/ui/CSSSparkle';

interface CountdownSectionProps {
  data: {
    event: {
      date: Date;
    };
    assets?: {
      decorations?: {
        papel_arriba?: string;
        mariposa_rosa?: string;
        luces?: string;
      }
    };
  };
  theme: {
    colors: {
      primary: string;
      rose: string;
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
      {/* Luces colgantes - extremo derecho e izquierdo */}
      {data.assets?.decorations?.luces && (
        <>
          {/* Izquierda */}
          <div className="absolute top-0 left-0 w-[50%] h-[180px] pointer-events-none select-none z-10 opacity-85">
            <Image
              src={data.assets.decorations.luces}
              alt="Luces colgantes"
              fill
              sizes="50vw"
              className="object-cover object-right"
            />
          </div>
          {/* Derecha (espejada) */}
          <div className="absolute top-0 right-0 w-[50%] h-[180px] pointer-events-none select-none z-10 opacity-85" style={{ transform: 'scaleX(-1)' }}>
            <Image
              src={data.assets.decorations.luces}
              alt="Luces colgantes"
              fill
              sizes="50vw"
              className="object-cover object-right"
            />
          </div>
        </>
      )}

      <style>{`
        @keyframes firefly-float {
          0%, 100% { 
            opacity: 0; 
            transform: translate(0, 0) scale(0.8); 
          }
          30% { 
            opacity: 0.6; 
          }
          50% { 
            opacity: 0.8; 
            transform: translate(15px, -20px) scale(1.2); 
          }
          70% { 
            opacity: 0.4; 
          }
        }
        .firefly {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          animation: firefly-float infinite ease-in-out;
        }
      `}</style>

      {/* Luciérnagas / Destellos sutiles en CSS */}
      <div className="firefly" style={{ width: 3, height: 3, backgroundColor: '#bef264', boxShadow: '0 0 6px 1px #bef264', top: '15%', left: '20%', animationDuration: '6s', animationDelay: '0s' }} />
      <div className="firefly" style={{ width: 2, height: 2, backgroundColor: '#fef08a', boxShadow: '0 0 5px 1px #fef08a', top: '10%', right: '15%', animationDuration: '7s', animationDelay: '1.5s' }} />
      <div className="firefly" style={{ width: 3, height: 3, backgroundColor: '#fde047', boxShadow: '0 0 6px 1px #fde047', top: '80%', left: '10%', animationDuration: '5s', animationDelay: '3s' }} />
      <div className="firefly" style={{ width: 2, height: 2, backgroundColor: '#bef264', boxShadow: '0 0 5px 1px #bef264', top: '75%', right: '25%', animationDuration: '8s', animationDelay: '0.5s' }} />
      <div className="firefly" style={{ width: 3, height: 3, backgroundColor: '#fef08a', boxShadow: '0 0 6px 1px #fef08a', top: '40%', right: '8%', animationDuration: '6.5s', animationDelay: '2s' }} />
      <div className="firefly" style={{ width: 2, height: 2, backgroundColor: '#fde047', boxShadow: '0 0 4px 1px #fde047', top: '50%', left: '30%', animationDuration: '5.5s', animationDelay: '4s' }} />
      <div className="firefly" style={{ width: 3, height: 3, backgroundColor: '#bef264', boxShadow: '0 0 6px 1px #bef264', top: '25%', right: '40%', animationDuration: '7.5s', animationDelay: '1s' }} />
      <div className="firefly" style={{ width: 2, height: 2, backgroundColor: '#fef08a', boxShadow: '0 0 5px 1px #fef08a', top: '85%', right: '45%', animationDuration: '6s', animationDelay: '2.5s' }} />


      {/* Mariposas animadas */}
      {data.assets?.decorations?.mariposa_rosa && (
        <>
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute top-10 left-4 md:top-16 md:left-24 z-20 pointer-events-none"
          >
            <motion.img 
              animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src={data.assets.decorations.mariposa_rosa} 
              alt="Mariposa" 
              className="w-16 md:w-20 object-contain drop-shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute bottom-20 right-4 md:bottom-32 md:right-24 z-20 pointer-events-none"
          >
            <motion.img 
              animate={{ y: [0, -12, 0], rotate: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              src={data.assets.decorations.mariposa_rosa} 
              alt="Mariposa" 
              className="w-12 md:w-16 object-contain drop-shadow-md"
              style={{ transform: 'scaleX(-1)' }}
            />
          </motion.div>
        </>
      )}

      <div className="relative z-10 text-center mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.3em] mb-2 drop-shadow-md" style={{ color: theme.colors.rose}}>
          Empieza la cuenta
        </p>
        <h2 className="font-display text-5xl md:text-7xl leading-none drop-shadow-md" style={{ color: theme.colors.gold }}>
          Falta muy poco
        </h2>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        className="relative z-10 grid grid-cols-4 gap-2 sm:gap-4 md:flex md:justify-center md:gap-6 w-full max-w-md md:max-w-none mx-auto px-1"
      >
        {items.map((item, idx) => (
          <motion.div 
            key={idx} 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 15 } }
            }}
          >
            <div className="flex flex-col items-center justify-center w-full aspect-[3/4] md:w-28 md:h-36 rounded-4xl md:rounded-5xl border-[1px] shadow-2xl relative overflow-hidden backdrop-blur-md" style={{ borderColor: theme.colors.gold, backgroundColor: 'rgba(255,255,255,0.45)', boxShadow: `0 8px 32px ${theme.colors.gold}30` }}>
              <span className="font-serif text-4xl md:text-5xl font-medium z-10 drop-shadow-md" style={{ color: theme.colors.gold }}>
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="font-mono text-[0.65rem] font-bold tracking-widest mt-2 z-10 opacity-90" style={{ color: theme.colors.gold }}>
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Paper Divider Bottom */}
      {data.assets?.decorations?.papel_arriba && (
        <div className="absolute -bottom-7 left-0 w-full h-[15vw] min-h-[50px] z-20 md:z-0 pointer-events-none transform translate-y-[2px]">
          <Image 
            src={data.assets.decorations.papel_arriba} 
            alt="Papel decorativo" 
            fill
            sizes="100vw"
            className="object-cover object-bottom" 
          />
        </div>
      )}
    </section>
  );
}
