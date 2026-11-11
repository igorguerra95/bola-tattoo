import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      'Olá, equipe Bola Tattoo! Gostaria de informações sobre orçamento e disponibilidade para tatuagem.'
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip Discreto com Fechamento */}
      {showTooltip && (
        <div className="relative p-3 rounded-sm bg-[#0F172A] border border-[#D4AF37]/50 shadow-2xl text-xs max-w-[220px] animate-fade-in text-[#F8FAFC]">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-[#94A3B8] hover:text-[#F8FAFC]"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold text-[11px] mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span>Orçamentos Online</span>
          </div>
          <p className="text-[11px] text-[#94A3B8] leading-tight font-body">
            Fale com nossos artistas e tire dúvidas do seu projeto pelo WhatsApp.
          </p>
        </div>
      )}

      {/* Botão Flutuante */}
      <button
        onClick={handleWhatsAppClick}
        className="relative group p-4 rounded-full bg-[#0F172A] border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-[#090D16] transition-all duration-300 shadow-2xl hover:shadow-[#25D366]/30 active:scale-95 flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-pulse pointer-events-none" />
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};
