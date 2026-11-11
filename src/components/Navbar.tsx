import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PenTool, Menu, X, Calendar, PhoneCall, Sparkles, Shield } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (styleId?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: 'inicio' },
    { label: 'Estilos & Serviços', href: 'servicos' },
    { label: 'Galeria', href: 'galeria' },
    { label: 'Artistas', href: 'artistas' },
    { label: 'Contato', href: 'contato' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090D16]/95 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-[#090D16]/90 to-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Marca Bola Tattoo */}
            <button
              onClick={() => handleLinkClick('inicio')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-sm bg-[#0F172A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] group-hover:scale-105 transition-all duration-300 shadow-md">
                <PenTool className="w-5 h-5 -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-[#F8FAFC] group-hover:text-[#D4AF37] transition-colors leading-none">
                  BOLA TATTOO
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#94A3B8] font-medium uppercase mt-1">
                  Estúdio de Tatuagem Autoral
                </span>
              </div>
            </button>

            {/* Links Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-sm font-medium tracking-wide text-[#94A3B8] hover:text-[#F8FAFC] transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* Ações Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => handleLinkClick('contato')}
                className="text-xs uppercase tracking-widest font-semibold text-[#94A3B8] hover:text-[#F8FAFC] px-3 py-2 transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
                Entrar em contato
              </button>
              <button
                onClick={() => onOpenBooking()}
                className="relative group overflow-hidden px-5 py-2.5 rounded-sm bg-[#0F172A] border border-[#D4AF37]/50 hover:border-[#D4AF37] text-[#F8FAFC] text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/20 flex items-center gap-2 active:scale-95"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Solicitar Orçamento</span>
              </button>
            </div>

            {/* Botão Mobile Menu */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="p-2 rounded-sm bg-[#0F172A] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold flex items-center gap-1.5 px-3 py-1.5"
                aria-label="Orçamento rápido"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span className="text-[11px] uppercase tracking-wider">Orçamento</span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-sm bg-[#0F172A] border border-white/10 text-[#F8FAFC] hover:text-[#D4AF37] transition-colors focus:outline-none"
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Gaveta Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-[#090D16]/98 backdrop-blur-xl border-b border-white/10 shadow-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-xs text-[#D4AF37] tracking-widest uppercase font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Navegação Principal</span>
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left py-2.5 text-base font-medium tracking-wide text-[#F8FAFC] hover:text-[#D4AF37] transition-colors flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#94A3B8] font-mono">→</span>
                </button>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-sm bg-gradient-to-r from-[#0F172A] to-[#1E293B] border border-[#D4AF37]/60 text-[#F8FAFC] font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>Solicitar Orçamento</span>
                </button>
                <button
                  onClick={() => handleLinkClick('contato')}
                  className="w-full py-3 rounded-sm bg-transparent border border-white/15 text-[#94A3B8] hover:text-[#F8FAFC] text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Entrar em contato</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
