import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Send, CheckCircle2, Phone, Mail, Clock, ShieldCheck, ChevronDown, PenTool } from 'lucide-react';
import { FAQ_ITEMS } from '../data/tattooData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    styleInterest: 'Blackwork & Geometria',
    bodyPlacement: 'Antebraço / Braço',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const text = encodeURIComponent(
        `Olá, equipe Bola Tattoo! Gostaria de um orçamento para tatuagem.\n\n` +
        `👤 Nome: ${formData.name}\n` +
        `📱 WhatsApp: ${formData.phone}\n` +
        `🎨 Estilo: ${formData.styleInterest}\n` +
        `📍 Local do corpo: ${formData.bodyPlacement}\n` +
        `📝 Ideia do Projeto: ${formData.message}`
      );
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    }, 1200);
  };

  return (
    <section id="contato" className="relative py-28 bg-[#090D16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F172A] border border-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Canais Oficiais & Orçamento</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8FAFC] tracking-tight uppercase">
            Entre em <span className="text-gold-gradient font-serif">Contato</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] font-normal leading-relaxed font-body">
            Fale diretamente com nossa recepção para alinhar sua ideia, tirar dúvidas técnicas ou solicitar consultoria de projeto autoral.
          </p>
        </div>

        {/* Grid de Contato & Formulário */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Coluna Esquerda: Informações & Destaques */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-sm bg-[#0F172A] border border-white/10 shadow-xl space-y-6">
              <h3 className="font-heading text-2xl font-bold text-[#F8FAFC]">
                Atendimento & Sessões
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed font-body">
                Trabalhamos com atendimento agendado para dedicar foco absoluto a cada tela viva. Sala privativa, climatizada e com total privacidade para a sua sessão.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#090D16] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F8FAFC]">Horário de Funcionamento</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">Segunda a Sábado: 10h00 às 20h00</p>
                    <p className="text-xs text-[#94A3B8]">Sessões de Fechamento: Horário exclusivo sob agendamento</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#090D16] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F8FAFC]">Central de Orçamentos WhatsApp</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">Envie suas referências para análise prévia</p>
                    <button
                      onClick={onOpenBooking}
                      className="text-xs text-[#D4AF37] font-semibold hover:underline mt-1 block"
                    >
                      Clique para abrir simulador de orçamento →
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#090D16] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F8FAFC]">Protocolo Rigoroso de Higiene</h4>
                    <p className="text-xs text-[#94A3B8] mt-0.5">Agulhas e cartuchos descartáveis abertos na sua presença com assepsia completa.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dúvidas Frequentes (FAQ) */}
            <div className="p-8 rounded-sm bg-[#0F172A] border border-white/10 shadow-xl">
              <h3 className="font-heading text-xl font-bold text-[#F8FAFC] mb-6">
                Perguntas Frequentes
              </h3>
              <div className="space-y-3">
                {FAQ_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-white/5 rounded-sm overflow-hidden bg-[#090D16]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full p-3.5 text-left flex items-center justify-between text-xs font-bold text-[#F8FAFC] hover:text-[#D4AF37] transition-colors"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#D4AF37] transition-transform duration-200 shrink-0 ${
                          openFaqIndex === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaqIndex === idx && (
                      <div className="px-3.5 pb-4 text-xs text-[#94A3B8] leading-relaxed font-body border-t border-white/5 pt-2">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário de Mensagem Direta */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-sm bg-[#0F172A] border border-white/10 shadow-2xl relative">
              <h3 className="font-heading text-2xl font-bold text-[#F8FAFC]">
                Envie a Ideia do Seu Projeto
              </h3>
              <p className="mt-2 text-sm text-[#94A3B8] font-body">
                Preencha os campos abaixo para receber uma estimativa detalhada e retorno dos nossos artistas diretamente pelo WhatsApp.
              </p>

              {isSubmitted ? (
                <div className="my-10 p-8 rounded-sm bg-[#090D16] border border-[#D4AF37]/50 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-[#F8FAFC]">
                    Projeto Transmitido com Sucesso!
                  </h4>
                  <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
                    Obrigado, <strong className="text-[#F8FAFC]">{formData.name}</strong>. Nossa equipe entrará em contato em breve para apresentar a proposta e alinhar sua sessão.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        styleInterest: 'Blackwork & Geometria',
                        bodyPlacement: 'Antebraço / Braço',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-sm bg-[#0F172A] border border-white/20 text-[#F8FAFC] text-xs font-bold uppercase tracking-wider hover:border-[#D4AF37] transition-colors"
                  >
                    Enviar Outro Projeto
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#94A3B8] mb-2">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex.: Carlos Drummond"
                        className="w-full px-4 py-3 rounded-sm bg-[#090D16] border border-white/10 focus:border-[#D4AF37] text-[#F8FAFC] placeholder-[#64748B] text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#94A3B8] mb-2">
                        WhatsApp para Retorno *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(DDD) 99999-9999"
                        className="w-full px-4 py-3 rounded-sm bg-[#090D16] border border-white/10 focus:border-[#D4AF37] text-[#F8FAFC] placeholder-[#64748B] text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#94A3B8] mb-2">
                        Estilo de Interesse
                      </label>
                      <select
                        value={formData.styleInterest}
                        onChange={(e) => setFormData({ ...formData, styleInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-[#090D16] border border-white/10 focus:border-[#D4AF37] text-[#F8FAFC] text-sm focus:outline-none transition-colors"
                      >
                        <option value="Blackwork & Geometria">Blackwork & Geometria Sagrada</option>
                        <option value="Realismo Preto & Cinza">Realismo Preto & Cinza</option>
                        <option value="Fineline & Micro-realismo">Fineline & Traço Fino</option>
                        <option value="Fechamentos & Grandes Projetos">Fechamentos (Braço/Costas/Perna)</option>
                        <option value="Cover-Up / Reforma">Cover-Up & Reforma Técnica</option>
                        <option value="Body Piercing">Body Piercing em Titânio</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#94A3B8] mb-2">
                        Local do Corpo Desejado
                      </label>
                      <input
                        type="text"
                        value={formData.bodyPlacement}
                        onChange={(e) => setFormData({ ...formData, bodyPlacement: e.target.value })}
                        placeholder="Ex.: Antebraço, Panturrilha, Costela..."
                        className="w-full px-4 py-3 rounded-sm bg-[#090D16] border border-white/10 focus:border-[#D4AF37] text-[#F8FAFC] placeholder-[#64748B] text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#94A3B8] mb-2">
                      Descreva a sua ideia (tamanho aproximado em cm, referências ou significado)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte um pouco sobre a ideia da tatuagem, tamanho aproximado e se prefere algum dos nossos artistas residentes..."
                      className="w-full px-4 py-3 rounded-sm bg-[#090D16] border border-white/10 focus:border-[#D4AF37] text-[#F8FAFC] placeholder-[#64748B] text-sm focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-sm bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#090D16] text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-60 shadow-xl shadow-[#D4AF37]/20"
                    >
                      {isSubmitting ? (
                        <span>Enviando dados do projeto...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Entrar em contato</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
