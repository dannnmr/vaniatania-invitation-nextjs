'use client';

import { useEnvelopeSession } from '@/hooks/useEnvelopeSession';
import { EnvelopeScreen } from '@/components/core/EnvelopeScreen';
import { HeroSection } from '@/components/sections/HeroSection';
import { ParentsSection } from '@/components/sections/ParentsSection';
import { CountdownSection } from '@/components/sections/CountdownSection';
import { SaveTheDateSection } from '@/components/sections/SaveTheDateSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { ItinerarySection } from '@/components/sections/ItinerarySection';
import { DressCodeSection } from '@/components/sections/DressCodeSection';
import { GiftRegistrySection } from '@/components/sections/GiftRegistrySection';
import { PassesSection } from '@/components/sections/PassesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { MusicSection } from '@/components/sections/MusicSection';
import { RSVPSection } from '@/components/sections/RSVPSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { AudioController } from '@/components/core/AudioController';
import { baseTemplateConfig } from '@/config/templates/base';
import { useState } from 'react';

export default function Home() {
  const { isOpen, openEnvelope } = useEnvelopeSession();
  const [isRevealed, setIsRevealed] = useState(false);

  // Si el sobre ya estaba abierto por el estado global, marcamos revelado inmediatamente
  if (isOpen && !isRevealed) {
    setIsRevealed(true);
  }

  return (
    <>
      <EnvelopeScreen 
        isOpen={isOpen} 
        onOpen={openEnvelope} 
        onStartOpen={() => setIsRevealed(true)}
        data={baseTemplateConfig} 
        theme={baseTemplateConfig.theme} 
      />
      
      {/* 
        Ocultamos el contenido si el sobre no está abierto. 
        Opcional: usar className={isOpen ? 'block' : 'hidden'} o similar 
        para evitar scroll mientras el sobre está cerrado.
      */}
      <main className={`min-h-screen bg-background ${isOpen ? 'overflow-auto' : 'h-screen overflow-hidden'}`}>
        <HeroSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} isEnvelopeOpen={isRevealed} />
        <ParentsSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        <ItinerarySection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        <CountdownSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        <SaveTheDateSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        <LocationSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        <DressCodeSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        {/* <GiftRegistrySection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        <PassesSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} /> */}
        
        {/* <GallerySection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        <MusicSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        <RSVPSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} /> */}
        <FooterSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        {isOpen && <AudioController src={baseTemplateConfig.music.ambientTrack} />}
      </main>
    </>
  );
}
