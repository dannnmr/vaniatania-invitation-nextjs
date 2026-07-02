'use client';

import { useEnvelopeSession } from '@/hooks/useEnvelopeSession';
import { EnvelopeScreen } from '@/components/core/EnvelopeScreen';
import { HeroSection } from '@/components/sections/HeroSection';
import { ParentsSection } from '@/components/sections/ParentsSection';
import { CountdownSection } from '@/components/sections/CountdownSection';
import { SaveTheDateSection } from '@/components/sections/SaveTheDateSection';
import { ItinerarySection } from '@/components/sections/ItinerarySection';
import { DressCodeSection } from '@/components/sections/DressCodeSection';
import { GiftRegistrySection } from '@/components/sections/GiftRegistrySection';
import { PassesSection } from '@/components/sections/PassesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { MusicSection } from '@/components/sections/MusicSection';
import { RSVPSection } from '@/components/sections/RSVPSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { baseTemplateConfig } from '@/config/templates/base';

export default function Home() {
  const { isOpen, openEnvelope } = useEnvelopeSession();

  return (
    <>
      <EnvelopeScreen 
        isOpen={isOpen} 
        onOpen={openEnvelope} 
        data={baseTemplateConfig} 
        theme={baseTemplateConfig.theme} 
      />
      
      {/* 
        Ocultamos el contenido si el sobre no está abierto. 
        Opcional: usar className={isOpen ? 'block' : 'hidden'} o similar 
        para evitar scroll mientras el sobre está cerrado.
      */}
      <main className={`min-h-screen bg-background ${isOpen ? 'overflow-auto' : 'h-screen overflow-hidden'}`}>
        <HeroSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} isEnvelopeOpen={isOpen} />
        <ParentsSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        <CountdownSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        <SaveTheDateSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        <ItinerarySection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        <DressCodeSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        {/* <GiftRegistrySection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        <PassesSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} /> */}
        
        {/* <GallerySection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        <MusicSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
        <RSVPSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} /> */}
        <FooterSection data={baseTemplateConfig} theme={baseTemplateConfig.theme} />
      </main>
    </>
  );
}
