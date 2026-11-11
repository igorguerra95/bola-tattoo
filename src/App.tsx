import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedStyleId, setSelectedStyleId] = useState<string | undefined>();
  const [selectedArtistId, setSelectedArtistId] = useState<string | undefined>();

  const handleOpenBooking = (styleId?: string, artistId?: string) => {
    setSelectedStyleId(styleId);
    setSelectedArtistId(artistId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedStyleId(undefined);
    setSelectedArtistId(undefined);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-[#F8FAFC] selection:bg-[#D4AF37]/30 selection:text-white relative">
      {/* Barra de Navegação Superior */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onNavigate={handleNavigate}
      />

      {/* Conteúdo Principal */}
      <main>
        {/* Seção 1: Início (Hero) */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onNavigate={handleNavigate}
        />

        {/* Seção 2: Estilos & Serviços */}
        <ServicesSection
          onSelectStyle={(styleId) => handleOpenBooking(styleId)}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Seção 3: Galeria de Obras */}
        <GallerySection />

        {/* Seção 4: Sobre o Estúdio & Artistas Residentes */}
        <AboutSection
          onSelectArtist={(artistId) => handleOpenBooking(undefined, artistId)}
        />

        {/* Seção 5: Contato & Orçamento */}
        <ContactSection
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Rodapé */}
      <Footer onNavigate={handleNavigate} />

      {/* Modal de Orçamento & Agendamento Interativo */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialStyleId={selectedStyleId}
        initialArtistId={selectedArtistId}
      />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
