'use client';

import { useAudio } from '@/hooks/useAudio';

interface AudioControllerProps {
  src: string;
}

/**
 * Botón flotante para controlar el audio ambient.
 * Posición: esquina inferior derecha.
 * No se monta si no hay src de audio.
 */
export function AudioController({ src }: AudioControllerProps) {
  const { isPlaying, toggle } = useAudio({ src, volume: 0.25 });

  if (!src) return null;

  return (
    <button
      onClick={toggle}
      aria-label={isPlaying ? 'Silenciar música' : 'Reproducir música'}
      data-cursor-hover
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        width: 56,
        height: 56,
        borderRadius: '50%',
        border: '1.5px solid #047857',
        backgroundColor: 'rgba(253, 244, 226, 0.65)',
        color: '#047857',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {isPlaying ? (
        /* Ícono de pausa: dos barras verticales */
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <rect x="6" y="4" width="4" height="16" rx="1" />
          <rect x="14" y="4" width="4" height="16" rx="1" />
        </svg>
      ) : (
        /* Ícono de reproducción: triángulo */
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l10-6.86a1 1 0 0 0 0-1.72l-10-6.86A1 1 0 0 0 8 5.14Z" />
        </svg>
      )}
    </button>
  );
}
