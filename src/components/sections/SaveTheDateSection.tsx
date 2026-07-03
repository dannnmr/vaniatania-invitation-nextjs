'use client';

import { motion } from 'framer-motion';
import { CalendarPlus, Heart } from 'lucide-react';
import { getCalendarLinks } from '@/lib/calendar';
import Image from 'next/image';

interface SaveTheDateProps {
  data: {
    event: {
      date: Date;
      receptionTime: string;
      locationName?: string;
    };
    client: {
      name: string;
    };
    assets: {
      decorations: {
        saveTheDate: string;
        tarjeta?: string;
        fairy?: string;
        corazon_verde?: string;
      };
    };
  };
  theme: {
    colors: {
      primary: string; // rosa perla / bebe
      gold: string; // esmeralda oscuro
      accent: string; // verde esmeralda
      rose: string; // palo de rosa
    };
  };
}

export function SaveTheDateSection({ data, theme }: SaveTheDateProps) {
  const { event, client, assets } = data;

  const handleAddToCalendar = () => {
    const isApple =
      /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const details = `Te invitamos a celebrar los 15 años de ${client.name}.\\nRecepción: ${event.receptionTime}\\n¡Te esperamos!`;
    const location = event.locationName || '';
    
    const { googleUrl, icsUrl } = getCalendarLinks(
      event.date, 
      `XV Años - ${client.name}`,
      details,
      location
    );

    if (isApple) {
      const link = document.createElement('a');
      link.href = icsUrl;
      link.download = `invitacion-${client.name.toLowerCase().replace(/\s+/g, '-')}.ics`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(googleUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Nombres del mes y año capitalizados
  const rawMonth = event.date.toLocaleDateString('es-ES', { month: 'long' });
  const monthName = rawMonth.charAt(0).toUpperCase() + rawMonth.slice(1);
  const yearNumber = event.date.getFullYear();

  // Generar la semana del evento (3 días antes y 3 días después)
  const daysOfWeek = [];
  for (let i = -3; i <= 3; i++) {
    const d = new Date(event.date);
    d.setDate(d.getDate() + i);
    daysOfWeek.push(d);
  }

  return (
    <section
      className="relative flex flex-col items-center justify-start py-16 overflow-hidden"
      style={{ backgroundColor: '#a1a86d' }}
    >
      {/* Imagen de fondo (Papel/Tarjeta) */}
      {assets.decorations.tarjeta && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={assets.decorations.tarjeta} 
            alt="Textura de fondo" 
            fill 
            className="object-cover object-center opacity-100 mix-blend-multiply scale-108"
          />
        </div>
      )}

      {/* Contenedor Principal Limitado */}
      <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center px-4">
        
        {/* Mes y Año (Top) - Usamos Verde Agua */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-6xl text-center drop-shadow-sm pt-5" 
          style={{ color: theme.colors.gold }}
        >
          {monthName}, {yearNumber}
        </motion.h2>

        {/* Fila de Días de la Semana y Números */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-end gap-3 md:gap-5 mt-6 w-full"
        >
          {daysOfWeek.map((d, i) => {
            const isTarget = i === 3; // El centro es nuestra fecha (el 0)
            const rawDayName = d.toLocaleDateString('es-ES', { weekday: 'short' });
            const dayName = rawDayName.substring(0, 2).toLowerCase(); // ej. 'lu', 'ma'
            const dayNum = d.getDate();

            return (
              <div key={i} className="flex flex-col items-center relative">
                {/* Días en palo de rosa más oscuro */}
                <span 
                  className="font-serif text-sm md:text-lg mb-2 font-medium" 
                  style={{ color: '#a64d59' }}
                >
                  {dayName}
                </span>
                
                <div className="relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14">
                  {isTarget ? (
                    <>
                      {/* Corazón Verde Imagen */}
                      {assets.decorations.corazon_verde ? (
                        <motion.div 
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24"
                        >
                          <Image 
                            src={assets.decorations.corazon_verde} 
                            alt="Corazón resaltado" 
                            fill 
                            className="object-contain drop-shadow-md"
                          />
                        </motion.div>
                      ) : (
                        <Heart 
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 fill-current drop-shadow-md" 
                          style={{ color: theme.colors.accent }} 
                          strokeWidth={0}
                        />
                      )}
                      {/* Número Blanco encima del corazón verde */}
                      <span className="relative z-10 font-serif text-2xl md:text-4xl text-white font-medium drop-shadow-sm">
                        {dayNum}
                      </span>
                    </>
                  ) : (
                    // Números normales en rosa oscuro
                    <span 
                      className="font-serif text-2xl md:text-4xl font-medium" 
                      style={{ color: '#a64d59' }}
                    >
                      {dayNum}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Ilustración Antigua Removida */}

        {/* Botón de Agendar Calendario con Hada */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }} // Ajuste del delay ya que quitamos la ilustración
          className="relative z-20 mt-38 md:mt-40 mb-8 flex justify-center"
        >
          {assets.decorations.fairy && (
            <div className="absolute bottom-[92%] w-48 h-48 md:w-56 md:h-56 z-10 opacity-90 pointer-events-none">
              <Image 
                src={assets.decorations.fairy} 
                alt="Hada sentada" 
                fill 
                className="object-contain object-bottom"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))' }}
              />
            </div>
          )}
          <button
            onClick={handleAddToCalendar}
            className="group flex items-center gap-3 px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-[1.5px]"
            style={{ 
              backgroundColor: 'transparent', 
              borderColor: '#a64d59',
              color: '#a64d59' 
            }}
          >
            <CalendarPlus className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="font-serif italic tracking-wide text-lg md:text-xl uppercase">
              Agendar en Calendario
            </span>
          </button>
        </motion.div>
      </div>

      {/* Ondas sólidas en la base (Footer de la sección en palo de rosa)
      <div className="w-full mt-auto">
        <svg viewBox="0 0 1440 100" className="w-full h-auto block" preserveAspectRatio="none">
          <path 
            fill={theme.colors.rose} 
            fillOpacity="1" 
            d="M0,32L80,32C160,32,320,32,480,48C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
}
