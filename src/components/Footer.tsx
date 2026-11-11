import React from 'react';
import { PenTool, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080E] text-[#94A3B8] border-t border-white/10 pt-16 pb-12 font-body text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Marca & Descrição */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#0F172A] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
                <PenTool className="w-4 h-4 -rotate-45" />
              </div>
              <span className="font-display text-xl font-bold tracking-wider text-[#F8FAFC]">
                BOLA TATTOO
              </span>
            </div>
            <p className="text-xs text-[#94A3B8] max-w-sm leading-relaxed">
              Estúdio de tatuagem autoral e body piercing de alta precisão. Arte anatômica permanente com rigor asséptico e respeito absoluto à sua pele.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#D4AF37]">
              <ShieldCheck className="w-4 h-4" />
              <span>Biossegurança e conformidade Anvisa • Materiais 100% descartáveis</span>
            </div>
          </div>

          {/* Navegação Rápida */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#F8FAFC] font-bold">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicos')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Estilos & Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('galeria')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Galeria de Obras
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('artistas')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Artistas Residentes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contato')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Contato & Orçamento
                </button>
              </li>
            </ul>
          </div>

          {/* Horários & Políticas */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#F8FAFC] font-bold">
              Atendimento & Sessões
            </h4>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Atendimento com hora marcada em salas privativas climatizadas. Orçamento prévio gratuito com análise de referências e estudo anatômico.
            </p>
            <p className="text-xs text-[#CBD5E1]">
              Segunda a Sábado das 10h às 20h
            </p>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748B]">
          <div>
            © {new Date().getFullYear()} Bola Tattoo Estúdio de Tatuagem Autoral. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Brasil • Arte & Tatuagem Autoral</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm bg-[#0F172A] border border-white/10 text-[#94A3B8] hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors flex items-center gap-1.5"
              aria-label="Voltar ao topo"
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
