'use client';

import { motion } from 'framer-motion';

interface GalleryProps {
  data: { gallery: string[] };
  theme: { colors: { primary: string; gold: string } };
}

export function GallerySection({ data, theme }: GalleryProps) {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: theme.colors.primary }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-emerald-950">Galería</h2>
          <p className="font-mono text-sm tracking-widest mt-4 uppercase" style={{ color: theme.colors.gold }}>Nuestros Momentos</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {data.gallery.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.15 }}
              className="break-inside-avoid rounded-xl overflow-hidden bg-emerald-950/5 border border-emerald-950/10 relative"
            >
              {/* Fallback visual ya que no tenemos las imágenes reales */}
              <div className="w-full aspect-[3/4] flex items-center justify-center text-emerald-950/20 font-mono text-xs">
                {img}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
