import React from 'react';

export function GlassCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-emerald-950/5 backdrop-blur-md border border-emerald-950/10 rounded-2xl shadow-xl ${className}`}>
      {children}
    </div>
  );
}
