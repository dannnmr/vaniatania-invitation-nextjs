'use client';

interface FooterProps {
  data: { client: { name: string } };
  theme: { colors: { primary: string; gold: string } };
}

export function FooterSection({ data, theme }: FooterProps) {
  return (
    <footer className="py-12 px-6 flex flex-col items-center border-t border-emerald-950/10" style={{ backgroundColor: theme.colors.primary }}>
      <p className="font-serif text-2xl italic text-emerald-950/50 mb-2">{data.client.name}</p>
      <p className="font-sans text-xs uppercase tracking-[0.2em] text-emerald-950/30">
        Made with ♥ by INVITATION
      </p>
    </footer>
  );
}
