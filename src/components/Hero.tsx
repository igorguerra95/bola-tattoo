import React from 'react';
import { motion } from 'motion/react';
import { Calendar, PhoneCall, Star, Award, PenTool, ArrowDown, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 bg-[#090D16]"
    >
      {/* Background Hero com Imagem Imersiva de Tatuagem Autoral */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=2000&q=85"
          alt="Estúdio Bola Tattoo - Tatuagem autoral em andamento e detalhes de tinta preta"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.22] contrast-125"
        />
        {/* Gradientes atmosféricos em Preto Elegante (#0F172A) e #090D16 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/80 to-[#0F172A]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090D16] via-transparent to-[#090D16]" />
        {/* Glow sutil central */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#D4AF37]/5 blur-[140px] pointer-events-none rounded-full" />
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* Badge Autoritário */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A]/90 border border-[#D4AF37]/35 text-[#F3E5AB] text-xs font-semibold uppercase tracking-[0.2em] mb-8 shadow-xl backdrop-blur-md"
        >
          <PenTool className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>ESTÚDIO DE TATUAGEM & PIERCING • DESDE 2009</span>
        </motion.div>

        {/* Título Principal: BOLA TATTOO */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-[#F8FAFC] leading-[0.95] uppercase max-w-5xl mx-auto"
        >
          <span className="block font-serif">Bola</span>
          <span className="block text-gold-gradient font-serif">Tattoo</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl lg:text-2xl text-[#94A3B8] font-normal max-w-3xl mx-auto leading-relaxed tracking-wide font-body"
        >
          Arte autoral, traço preciso e projetos exclusivos desenvolvidos sob medida para a sua identidade.
        </motion.p>

        {/* CTAs de Alta Conversão */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-[#0F172A] border-2 border-[#D4AF37] text-[#F8FAFC] font-display text-base font-bold uppercase tracking-widest shadow-2xl hover:shadow-[#D4AF37]/25 hover:bg-[#D4AF37] hover:text-[#090D16] transition-all duration-300 flex items-center justify-center gap-3 group active:scale-95"
          >
            <Calendar className="w-5 h-5 text-[#D4AF37] group-hover:text-[#090D16] transition-colors" />
            <span>Solicitar Orçamento</span>
          </button>

          <button
            onClick={() => onNavigate('contato')}
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-transparent border border-white/20 text-[#F8FAFC] font-display text-base font-bold uppercase tracking-widest hover:border-white/50 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
          >
            <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
            <span>Entrar em contato</span>
          </button>
        </motion.div>

        {/* Credenciais em Grid Rápido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10"
        >
          <div className="flex flex-col items-center p-3 rounded bg-[#0F172A]/40 border border-white/5 backdrop-blur-sm">
            <span className="font-display text-3xl font-bold text-[#F8FAFC] text-gold-gradient">15+</span>
            <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-medium mt-1">Anos de História</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded bg-[#0F172A]/40 border border-white/5 backdrop-blur-sm">
            <span className="font-display text-3xl font-bold text-[#F8FAFC]">12.000+</span>
            <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-medium mt-1">Tattoos Eternizadas</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded bg-[#0F172A]/40 border border-white/5 backdrop-blur-sm">
            <span className="font-display text-3xl font-bold text-[#F8FAFC]">5</span>
            <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-medium mt-1">Artistas Residentes</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded bg-[#0F172A]/40 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-1">
              <span className="font-display text-3xl font-bold text-[#F8FAFC]">4.9</span>
              <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
            </div>
            <span className="text-xs uppercase tracking-wider text-[#94A3B8] font-medium mt-1">Avaliação Máxima</span>
          </div>
        </motion.div>

        {/* Indicador de rolagem */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-col items-center justify-center text-[#94A3B8]/60 hover:text-[#D4AF37] transition-colors cursor-pointer"
          onClick={() => onNavigate('servicos')}
        >
          <span className="text-[10px] uppercase tracking-widest font-mono mb-2">Role para explorar</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
        </motion.div>
      </div>
    </section>
  );
};
