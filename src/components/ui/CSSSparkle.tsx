import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CSSSparkleProps {
  size?: number | string;
  color?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: string;
  className?: string;
}

export function CSSSparkle({
  size = 20,
  color = '#C5A059',
  top,
  left,
  right,
  bottom,
  delay = '0s',
  className
}: CSSSparkleProps) {
  return (
    <div
      className={cn("absolute opacity-80 mix-blend-screen animate-pulse pointer-events-none", className)}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        animationDelay: delay,
        animationDuration: '3s',
        filter: `drop-shadow(0 0 8px ${color})`,
      }}
    >
      <div 
        className="w-full h-full"
        style={{
          backgroundColor: color,
          clipPath: 'polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)'
        }}
      />
    </div>
  );
}
