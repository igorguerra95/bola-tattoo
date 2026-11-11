import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TATTOO_STYLES } from '../data/tattooData';
import { TattooStyle } from '../types';
import { PenTool, Clock, Check, Calendar, Sparkles, Plus, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServicesSectionProps {
  onSelectStyle: (styleId: string) => void;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectStyle, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<'todos' | 'principais'>('principais');
  const [simulatedStyleId, setSimulatedStyleId] = useState<string>('blackwork-geometria');
  const [simulatedSize, setSimulatedSize] = useState<'pequeno' | 'medio' | 'grande' | 'fechamento'>('medio');

  const displayedStyles = selectedCategory === 'principais'
    ? TATTOO_STYLES.filter(s => ['blackwork-geometria', 'realismo-preto-cinza', 'fineline-micro', 'fechamentos-grandes-projetos'].includes(s.id))
    : TATTOO_STYLES;

  const sizeMultipliers = {
    pequeno: { label: 'Até 8 cm (Delicado)', factor: 1 },
    medio: { label: '8 a 15 cm (Médio Porte)', factor: 1.6 },
    grande: { label: '15 a 25 cm (Destaque)', factor: 2.8 },
    fechamento: { label: 'Fechamento (Braço/Costas)', factor: 4.5 }
  };

  const currentSimulatedStyle = TATTOO_STYLES.find(s => s.id === simulatedStyleId) || TATTOO_STYLES[0];
  const estimatedValue = Math.round(currentSimulatedStyle.priceFrom * sizeMultipliers[simulatedSize].factor);

  return (
    <section id="servicos" className="relative py-28 bg-[#090D16] border-t border-white/5 overflow-hidden">
      {/* Elementos visuais de fundo */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0F172A] rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F172A] border border-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <PenTool className="w-3.5 h-3.5" />
            <span>Estilos & Especialidades Autorais</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8FAFC] tracking-tight uppercase">
            Estilos & <span className="text-gold-gradient font-serif">Serviços</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] font-normal leading-relaxed font-body">
            Cada trabalho é projetado de forma única para a sua pele. Não reproduzimos tatuagens prontas da internet sem recriação autoral exclusiva.
          </p>

          {/* Filtro simples */}
          <div className="mt-8 inline-flex p-1 rounded-sm bg-[#0F172A] border border-white/10">
            <button
              onClick={() => setSelectedCategory('principais')}
              className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all duration-300 ${
                selectedCategory === 'principais'
                  ? 'bg-[#D4AF37] text-[#090D16] shadow-md font-bold'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC]'
              }`}
            >
              Estilos Mais Procurados
            </button>
            <button
              onClick={() => setSelectedCategory('todos')}
              className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all duration-300 ${
                selectedCategory === 'todos'
                  ? 'bg-[#D4AF37] text-[#090D16] shadow-md font-bold'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC]'
              }`}
            >
              Ver Todos os Estilos
            </button>
          </div>
        </div>

        {/* Grid de Cards de Estilos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedStyles.map((style, index) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-sm bg-[#0F172A] border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-400 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#0F172A]/80"
            >
              {/* Imagem do Estilo com Overlay */}
              <div className="relative h-60 w-full overflow-hidden bg-[#090D16]">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />

                {/* Badge de Destaque / Duração */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  {style.tag ? (
                    <span className="px-2.5 py-1 rounded-sm bg-[#D4AF37] text-[#090D16] text-[10px] font-bold uppercase tracking-wider shadow-md">
                      {style.tag}
                    </span>
                  ) : <span />}
                  <span className="px-2.5 py-1 rounded-sm bg-[#090D16]/80 backdrop-blur-md border border-white/10 text-[#F8FAFC] text-[11px] font-mono flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    {style.durationEstimate}
                  </span>
                </div>

                {/* Preço Estimado */}
                <div className="absolute bottom-4 left-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-[#94A3B8] font-bold">A partir de R$</span>
                    <span className="font-display text-4xl font-bold text-[#F8FAFC] tracking-tight">
                      {style.priceFrom}
                    </span>
                    <span className="text-[11px] text-[#94A3B8] font-mono">,00</span>
                  </div>
                </div>
              </div>

              {/* Informações Textuais do Estilo */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[#F8FAFC] group-hover:text-[#D4AF37] transition-colors">
                    {style.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed font-body">
                    {style.description}
                  </p>

                  {/* O que inclui */}
                  <div className="mt-6 pt-5 border-t border-white/5 space-y-2.5">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] block">
                      Garantia de procedimento:
                    </span>
                    {style.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="leading-tight">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão de Ação Direta */}
                <div className="mt-8 pt-4 border-t border-white/10">
                  <button
                    onClick={() => onSelectStyle(style.id)}
                    className="w-full py-3 px-4 rounded-sm bg-[#090D16] border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#F8FAFC] hover:text-[#090D16] text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn active:scale-95"
                  >
                    <Calendar className="w-4 h-4 text-[#D4AF37] group-hover/btn:text-[#090D16] transition-colors" />
                    <span>Solicitar Este Projeto</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simulador Interativo de Projeto de Tatuagem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 p-8 sm:p-10 rounded-sm bg-gradient-to-r from-[#0F172A] via-[#141F38] to-[#0F172A] border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden"
        >
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Simulador de Projeto</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                Calcule a Estimativa da Sua Ideia
              </h3>
              <p className="mt-2 text-sm text-[#94A3B8]">
                Selecione o estilo desejado e o tamanho aproximado para ter uma base de investimento e iniciar o contato direto com nossos artistas.
              </p>

              {/* Seleção de Estilo */}
              <div className="mt-5 space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-bold block">
                  1. Escolha o Estilo:
                </span>
                <div className="flex flex-wrap gap-2">
                  {TATTOO_STYLES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSimulatedStyleId(s.id)}
                      className={`px-3 py-1.5 rounded-sm text-xs font-medium border transition-all duration-200 ${
                        simulatedStyleId === s.id
                          ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#F8FAFC]'
                          : 'bg-[#090D16]/60 border-white/10 text-[#94A3B8] hover:border-white/30'
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seleção de Tamanho */}
              <div className="mt-4 space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-bold block">
                  2. Dimensão Aproximada:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(Object.keys(sizeMultipliers) as Array<keyof typeof sizeMultipliers>).map((sizeKey) => (
                    <button
                      key={sizeKey}
                      onClick={() => setSimulatedSize(sizeKey)}
                      className={`p-2.5 rounded-sm text-xs border text-left transition-all ${
                        simulatedSize === sizeKey
                          ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#F8FAFC]'
                          : 'bg-[#090D16]/60 border-white/10 text-[#94A3B8] hover:border-white/30'
                      }`}
                    >
                      <span className="font-bold block capitalize">{sizeKey}</span>
                      <span className="text-[10px] text-[#94A3B8]">{sizeMultipliers[sizeKey].label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Totalizador & Botão de Solicitação */}
            <div className="w-full lg:w-auto p-6 rounded-sm bg-[#090D16]/90 border border-white/10 flex flex-col items-center sm:items-start min-w-[270px]">
              <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold">
                Estimativa Inicial de Investimento:
              </span>
              <div className="flex items-baseline gap-1 my-1">
                <span className="text-sm font-bold text-[#D4AF37]">A partir de R$</span>
                <span className="font-display text-4xl font-bold text-[#F8FAFC]">{estimatedValue}</span>
                <span className="text-xs text-[#94A3B8]">,00</span>
              </div>
              <span className="text-[11px] text-[#94A3B8]">
                {currentSimulatedStyle.title} • {sizeMultipliers[simulatedSize].label}
              </span>

              <button
                onClick={() => onSelectStyle(simulatedStyleId)}
                className="mt-4 w-full py-3 px-5 rounded-sm bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#090D16] text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-[#D4AF37]/20"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
