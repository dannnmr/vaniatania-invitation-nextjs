import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono, Inter, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { AudioController } from '@/components/core/AudioController';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const pinyonScript = Pinyon_Script({
  weight: "400",
  variable: "--font-pinyon",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tania-vania-xv-invitation.danmr.com'),
  title: "Tania & Vania - XV Años",
  description: "En una noche llena de magia, sueños y encanto les invitamos a celebrar nuestros 15 años.",
  openGraph: {
    images: [
      {
        url: "/invitacion/metadata_vt.png",
        width: 1200,
        height: 630,
        alt: "Tania & Vania - XV Años",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/invitacion/metadata_vt.png"],
  },
  icons: {
    icon: "/broche_hadas.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${dmMono.variable} ${inter.variable} ${pinyonScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
