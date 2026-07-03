'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
import { Heart, Sparkles, Martini, Camera, Utensils, Music, Cake } from 'lucide-react';
import Image from 'next/image';

interface ItineraryProps {
  data: {
    itinerary: { time: string; title: string; description: string; icon?: string; image?: string }[];
    assets?: {
      decorations?: {
        flor_icon?: string;
      }
    };
  };
  theme: {
    colors: { primary: string; gold: string; accent: string };
  };
}

const FallbackIcon = ({ iconName, color }: { iconName?: string, color: string }) => {
  const props = { className: "w-8 h-8 md:w-12 md:h-12 opacity-40", style: { color, strokeWidth: 1 } };
  switch(iconName?.toLowerCase()) {
    case 'martini': return <Martini {...props} />;
    case 'camera': return <Camera {...props} />;
    case 'utensils': return <Utensils {...props} />;
    case 'music': return <Music {...props} />;
    case 'cake': return <Cake {...props} />;
    default: return <Sparkles {...props} />;
  }
}

// Generador de path dinámico usando dimensiones exactas en píxeles
const generateSnakePath = (count: number, w: number, h: number) => {
  if (count <= 1) return `M ${w/2}, 0 L ${w/2}, ${h}`;
  
  const PADDING = h * 0.1; // 10% superior e inferior
  const yStep = (h - 2 * PADDING) / (count - 1);
  
  // Posiciones X en 20% y 80% del ancho real
  const leftX = w * 0.2;
  const rightX = w * 0.8;
  
  let d = `M ${w/2}, 0\n`;
  d += `C ${w/2}, ${PADDING/2} ${leftX}, ${PADDING/2} ${leftX}, ${PADDING}\n`;
  
  for (let i = 0; i < count - 1; i++) {
    const currentIsLeft = i % 2 === 0;
    const nextIsLeft = (i + 1) % 2 === 0;
    
    const startX = currentIsLeft ? leftX : rightX;
    const endX = nextIsLeft ? leftX : rightX;
    
    const startY = PADDING + i * yStep;
    const endY = PADDING + (i + 1) * yStep;
    
    d += `C ${startX}, ${startY + yStep/2} ${endX}, ${endY - yStep/2} ${endX}, ${endY}\n`;
  }
  
  const lastIsLeft = (count - 1) % 2 === 0;
  const lastX = lastIsLeft ? leftX : rightX;
  d += `C ${lastX}, ${h - PADDING/2} ${w/2}, ${h - PADDING/2} ${w/2}, ${h}\n`;
  
  return d;
};

export function ItinerarySection({ data, theme }: ItineraryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const count = data.itinerary.length;
  
  // Estado para dimensiones responsivas precisas
  const [dimensions, setDimensions] = useState({ width: 0, height: Math.max(350, count * 90) });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.clientWidth;
        // Solo actualizamos si el ancho real cambia, para evitar parpadeos en móviles al scrollear (por la barra de direcciones)
        setDimensions(prev => {
          if (prev.width !== newWidth) {
            return {
              width: newWidth,
              height: Math.max(350, count * 90)
            };
          }
          return prev;
        });
      }
    };
    updateSize(); // Initial measure
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [count]);

  const dynamicPath = dimensions.width > 0 
    ? generateSnakePath(count, dimensions.width, dimensions.height)
    : '';

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    
    if (!containerRef.current || !heartRef.current || !pathRef.current || dimensions.width === 0) return;
    
    const ctx = gsap.context(() => {
      // 1. Corazón rastreando el Path
      gsap.to(heartRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          end: 'bottom 10%',
          scrub: 2, // Suavidad en el seguimiento
        },
        motionPath: {
          path: pathRef.current as any,
          align: pathRef.current as any,
          alignOrigin: [0.5, 0.5],
          autoRotate: false, 
        },
        ease: 'none'
      });
      
      // Eliminada la animación de entrada de los textos para evitar cualquier tipo de parpadeo
    }, containerRef);
    
    return () => ctx.revert();
  }, [count, dimensions]);

  return (
    <section className="py-6 md:py-8 px-2 md:px-4 relative overflow-hidden" style={{ backgroundColor: theme.colors.primary }}>
      
      {/* Título */}
      <div className="text-center mt-8 mb-4 relative z-20">
        <h2 className="font-display text-5xl md:text-6xl text-emerald-950 drop-shadow-sm" style={{ color: theme.colors.gold }}>
          Itinerario
        </h2>
      </div>
      
      {/* Contenedor del Timeline (Altura dinámica reducida) */}
      <div 
        ref={containerRef} 
        className="relative max-w-xl mx-auto w-full"
        style={{ height: `${dimensions.height}px` }}
      >
        
        {/* SVG Dinámico con curva en zigzag calculada en PÍXELES REALES */}
        <div className="absolute inset-0 w-full h-full pointer-events-none flex justify-center z-0 opacity-90">
          {dimensions.width > 0 && (
            <svg 
              width={dimensions.width} 
              height={dimensions.height} 
              viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
              className="overflow-visible"
            >
              <path 
                ref={pathRef}
                d={dynamicPath}
                fill="none" 
                stroke="rgba(5, 150, 105, 0.4)"
                strokeWidth="2.5" 
                strokeDasharray="8 8" 
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>

        {/* Corazón rastreador (Como DOM Element separado para GSAP tracking perfecto) */}
        {dimensions.width > 0 && (
          <div 
            ref={heartRef}
            className="absolute top-0 left-0 z-30 flex items-center justify-center "
            style={{ width: '40px', height: '40px' }} // alignOrigin centrará esto perfectamente
          >
            {data.assets?.decorations?.flor_icon ? (
              <Image src={data.assets.decorations.flor_icon} alt="Flor" width={48} height={48} className="w-12 h-12 object-contain" />
            ) : (
              <Heart fill={theme.colors.gold} stroke={theme.colors.gold} size={24} className="animate-pulse" />
            )}
          </div>
        )}

        {/* Bloques del Itinerario con Posicionamiento Absoluto Dinámico */}
        {dimensions.width > 0 && data.itinerary.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          const hasError = imgErrors[idx];
          
          const PADDING_PERCENT = 10;
          const topPercent = count > 1 
            ? PADDING_PERCENT + (idx / (count - 1)) * (100 - 2 * PADDING_PERCENT)
            : 50;

          return (
            <div 
              key={idx} 
              // La curva va hasta el 20% y 80% del ancho
              className={`itinerary-block absolute w-[20%] flex flex-col ${isLeft ? 'left-0 items-end text-right' : 'right-0 items-start text-left'}`}
              style={{ top: `${topPercent}%`, transform: 'translateY(-50%)' }}
            >
              
              {/* Punto de anclaje (El nudo de conexión exacto)
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full z-10"
                style={{ 
                  backgroundColor: theme.colors.gold,
                  [isLeft ? 'right' : 'left']: '-3px'
                }}
              /> */}

              {/* Contenedor del texto desplazado sutilmente hacia el centro (6px) */}
              <div className="flex flex-col items-center justify-center" style={{ transform: `translateX(${isLeft ? '6px' : '-6px'})` }}>
                <span className="font-serif text-2xl md:text-3xl text-emerald-950 font-medium italic leading-none">
                  {item.time}
                </span>
                
                <h3 className="font-sans font-bold text-emerald-950/80 text-[10px] md:text-xs uppercase tracking-wider mt-1 text-center">
                  {item.title}
                </h3>
                
                <div className="relative w-22 h-22 md:w-24 md:h-24 flex items-center justify-center mt-1">
                  {item.image && !hasError ? (
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      sizes="(max-width: 768px) 88px, 96px"
                      className="object-contain opacity-100"
                      onError={() => setImgErrors(prev => ({ ...prev, [idx]: true }))}
                    />
                  ) : (
                    <FallbackIcon iconName={item.icon} color={theme.colors.gold} />
                  )}
                </div>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}
