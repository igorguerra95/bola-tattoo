import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, PenTool, Check, ArrowRight, ArrowLeft, Sparkles, MapPin, Ruler } from 'lucide-react';
import { TATTOO_STYLES, TATTOO_ARTISTS } from '../data/tattooData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStyleId?: string;
  initialArtistId?: string;
}

const BODY_PLACEMENTS = [
  'Antebraço', 'Braço Inteiro (Fechamento)', 'Bíceps / Ombro',
  'Panturrilha / Canela', 'Coxa', 'Perna Inteira (Fechamento)',
  'Costelas / Lateral', 'Costas Inteiras', 'Peitoral', 'Pescoço / Mãos'
];

const SIZE_OPTIONS = [
  'Pequeno (até 8 cm)',
  'Médio (8 a 15 cm)',
  'Grande (15 a 25 cm)',
  'Fechamento / Grande Escala (25 cm+)'
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialStyleId,
  initialArtistId
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [selectedStyleId, setSelectedStyleId] = useState<string>(initialStyleId || 'blackwork-geometria');
  const [selectedArtistId, setSelectedArtistId] = useState<string>(initialArtistId || 'qualquer');
  const [selectedPlacement, setSelectedPlacement] = useState<string>('Antebraço');
  const [selectedSize, setSelectedSize] = useState<string>('Médio (8 a 15 cm)');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [projectIdea, setProjectIdea] = useState<string>('');
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  useEffect(() => {
    if (initialStyleId) setSelectedStyleId(initialStyleId);
    if (initialArtistId) setSelectedArtistId(initialArtistId);
  }, [initialStyleId, initialArtistId]);

  if (!isOpen) return null;

  const selectedStyle = TATTOO_STYLES.find((s) => s.id === selectedStyleId) || TATTOO_STYLES[0];
  const selectedArtist = TATTOO_ARTISTS.find((a) => a.id === selectedArtistId);

  const handleFinishBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);

    const artistName = selectedArtist ? selectedArtist.name : 'Artista Mais Indicado para o Estilo';
    const message = encodeURIComponent(
      `⚡ *SOLICITAÇÃO DE ORÇAMENTO - BOLA TATTOO*\n\n` +
      `👤 *Cliente:* ${clientName}\n` +
      `📱 *WhatsApp:* ${clientPhone}\n` +
      `🎨 *Estilo Desejado:* ${selectedStyle.title}\n` +
      `👨‍🎨 *Artista Preferido:* ${artistName}\n` +
      `📍 *Local do Corpo:* ${selectedPlacement}\n` +
      `📏 *Tamanho Estimado:* ${selectedSize}\n` +
      (projectIdea ? `💡 *Ideia do Projeto:* ${projectIdea}\n` : '') +
      `\nGostaria de receber a estimativa de sessões e datas disponíveis!`
    );

    // Open WhatsApp
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  const handleResetAndClose = () => {
    setIsConfirmed(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative max-w-2xl w-full rounded-sm bg-[#0F172A] border border-[#D4AF37]/50 shadow-2xl my-8 overflow-hidden"
      >
        {/* Barra superior de status do modal */}
        <div className="p-5 sm:p-6 bg-[#090D16] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-[#0F172A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
              <PenTool className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F8FAFC]">
                Orçamento de Tatuagem
              </h3>
              <p className="text-[11px] text-[#94A3B8] uppercase tracking-wider">
                Bola Tattoo • Estúdio Autoral
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-sm bg-[#0F172A] text-[#94A3B8] hover:text-[#F8FAFC] border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Indicador de Passos */}
        {!isConfirmed && (
          <div className="px-6 py-3 bg-[#0C1322] border-b border-white/5 flex items-center justify-between text-xs font-semibold text-[#94A3B8]">
            <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-[#D4AF37]' : ''}`}>
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">1</span>
              <span>Estilo</span>
            </div>
            <span className="text-white/20">/</span>
            <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-[#D4AF37]' : ''}`}>
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">2</span>
              <span>Artista</span>
            </div>
            <span className="text-white/20">/</span>
            <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-[#D4AF37]' : ''}`}>
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">3</span>
              <span>Local/Tamanho</span>
            </div>
            <span className="text-white/20">/</span>
            <div className={`flex items-center gap-1.5 ${step >= 4 ? 'text-[#D4AF37]' : ''}`}>
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">4</span>
              <span>Confirmar</span>
            </div>
          </div>
        )}

        {/* Conteúdo dos Passos */}
        <div className="p-6 sm:p-8">
          {isConfirmed ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-heading text-3xl font-bold text-[#F8FAFC]">
                Solicitação Direcionada!
              </h4>
              <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                Perfeito, <strong className="text-[#F8FAFC]">{clientName}</strong>! Sua ideia foi enviada para análise técnica da equipe Bola Tattoo.
              </p>

              {/* Recibo do orçamento */}
              <div className="p-5 rounded-sm bg-[#090D16] border border-white/10 text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#94A3B8]">Estilo:</span>
                  <span className="font-bold text-[#F8FAFC]">{selectedStyle.title}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#94A3B8]">Base Estimada:</span>
                  <span className="font-bold text-[#D4AF37]">A partir de R$ {selectedStyle.priceFrom},00</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#94A3B8]">Artista:</span>
                  <span className="font-bold text-[#F8FAFC]">
                    {selectedArtist ? selectedArtist.name : 'Mais Indicado para o Estilo'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#94A3B8]">Local:</span>
                  <span className="font-bold text-[#F8FAFC]">{selectedPlacement}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#94A3B8]">Dimensão:</span>
                  <span className="font-bold text-[#D4AF37]">{selectedSize}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-3 rounded-sm bg-[#D4AF37] text-[#090D16] font-bold text-xs uppercase tracking-widest hover:bg-[#F3E5AB] transition-colors"
                >
                  Concluir e Fechar
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* PASSO 1: Selecionar Estilo */}
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="font-heading text-lg font-bold text-[#F8FAFC]">
                    Selecione o Estilo de Tatuagem:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1">
                    {TATTOO_STYLES.map((s) => (
                      <div
                        key={s.id}
                        onClick={() => setSelectedStyleId(s.id)}
                        className={`p-4 rounded-sm border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                          selectedStyleId === s.id
                            ? 'bg-[#141F38] border-[#D4AF37] shadow-md'
                            : 'bg-[#090D16] border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <h5 className="font-heading text-sm font-bold text-[#F8FAFC]">
                            {s.title}
                          </h5>
                          {selectedStyleId === s.id && (
                            <Check className="w-4 h-4 text-[#D4AF37]" />
                          )}
                        </div>
                        <div className="mt-3 flex items-baseline justify-between pt-2 border-t border-white/5">
                          <span className="text-[11px] text-[#94A3B8]">{s.durationEstimate}</span>
                          <span className="font-display text-base font-bold text-[#D4AF37]">
                            A partir de R$ {s.priceFrom}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-sm bg-[#D4AF37] text-[#090D16] font-bold text-xs uppercase tracking-widest hover:bg-[#F3E5AB] transition-colors flex items-center gap-2"
                    >
                      <span>Avançar para Artista</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* PASSO 2: Selecionar Artista */}
              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="font-heading text-lg font-bold text-[#F8FAFC]">
                    Escolha o Artista Residente:
                  </h4>
                  <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                    <div
                      onClick={() => setSelectedArtistId('qualquer')}
                      className={`p-3.5 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                        selectedArtistId === 'qualquer'
                          ? 'bg-[#141F38] border-[#D4AF37]'
                          : 'bg-[#090D16] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-sm bg-[#0F172A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-bold text-sm text-[#F8FAFC] block">
                            Melhor Artista para o Estilo Escolhido
                          </span>
                          <span className="text-xs text-[#94A3B8]">
                            Nossa equipe direciona para o tatuador ideal
                          </span>
                        </div>
                      </div>
                      {selectedArtistId === 'qualquer' && <Check className="w-4 h-4 text-[#D4AF37]" />}
                    </div>

                    {TATTOO_ARTISTS.map((artist) => (
                      <div
                        key={artist.id}
                        onClick={() => setSelectedArtistId(artist.id)}
                        className={`p-3.5 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                          selectedArtistId === artist.id
                            ? 'bg-[#141F38] border-[#D4AF37]'
                            : 'bg-[#090D16] border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={artist.avatar}
                            alt={artist.name}
                            className="w-10 h-10 rounded-sm object-cover"
                          />
                          <div>
                            <span className="font-bold text-sm text-[#F8FAFC] block">
                              {artist.name}
                            </span>
                            <span className="text-xs text-[#D4AF37]">
                              {artist.specialty}
                            </span>
                          </div>
                        </div>
                        {selectedArtistId === artist.id && <Check className="w-4 h-4 text-[#D4AF37]" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 rounded-sm bg-transparent border border-white/10 text-xs font-semibold text-[#94A3B8] hover:text-[#F8FAFC] flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Voltar</span>
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-sm bg-[#D4AF37] text-[#090D16] font-bold text-xs uppercase tracking-widest hover:bg-[#F3E5AB] transition-colors flex items-center gap-2"
                    >
                      <span>Avançar para Local e Tamanho</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* PASSO 3: Local e Tamanho */}
              {step === 3 && (
                <div className="space-y-5">
                  <h4 className="font-heading text-lg font-bold text-[#F8FAFC]">
                    Defina Local do Corpo e Dimensão:
                  </h4>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#94A3B8] mb-2">
                      Local do Corpo
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {BODY_PLACEMENTS.map((place) => (
                        <button
                          key={place}
                          type="button"
                          onClick={() => setSelectedPlacement(place)}
                          className={`py-2 px-3 rounded-sm text-xs border text-left transition-colors ${
                            selectedPlacement === place
                              ? 'bg-[#D4AF37] text-[#090D16] border-[#D4AF37] font-bold shadow-md'
                              : 'bg-[#090D16] border-white/10 text-[#CBD5E1] hover:border-white/30'
                          }`}
                        >
                          {place}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#94A3B8] mb-2">
                      Tamanho Estimado
                    </label>
                    <div className="space-y-2">
                      {SIZE_OPTIONS.map((size) => (
                        <div
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`p-3 rounded-sm border cursor-pointer text-xs flex items-center justify-between ${
                            selectedSize === size
                              ? 'bg-[#141F38] border-[#D4AF37] text-[#F8FAFC] font-bold'
                              : 'bg-[#090D16] border-white/10 text-[#94A3B8] hover:border-white/20'
                          }`}
                        >
                          <span>{size}</span>
                          {selectedSize === size && <Check className="w-4 h-4 text-[#D4AF37]" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setStep(2)}
                      className="px-4 py-2.5 rounded-sm bg-transparent border border-white/10 text-xs font-semibold text-[#94A3B8] hover:text-[#F8FAFC] flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Voltar</span>
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="px-6 py-3 rounded-sm bg-[#D4AF37] text-[#090D16] font-bold text-xs uppercase tracking-widest hover:bg-[#F3E5AB] transition-colors flex items-center gap-2"
                    >
                      <span>Avançar para Seus Dados</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* PASSO 4: Dados do Cliente & Confirmação Final */}
              {step === 4 && (
                <form onSubmit={handleFinishBooking} className="space-y-4">
                  <h4 className="font-heading text-lg font-bold text-[#F8FAFC]">
                    Seus Dados para o Orçamento:
                  </h4>

                  <div className="p-4 rounded-sm bg-[#090D16] border border-white/10 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[#94A3B8] block">Resumo do Projeto:</span>
                      <span className="font-bold text-[#F8FAFC]">
                        {selectedStyle.title} • {selectedPlacement} ({selectedSize})
                      </span>
                    </div>
                    <span className="font-display text-base font-bold text-[#D4AF37]">
                      A partir de R$ {selectedStyle.priceFrom}
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#94A3B8] mb-1.5">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Ex.: Lucas Silveira"
                      className="w-full px-4 py-2.5 rounded-sm bg-[#090D16] border border-white/10 focus:border-[#D4AF37] text-[#F8FAFC] text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#94A3B8] mb-1.5">
                      WhatsApp para Receber o Orçamento *
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="(DDD) 99999-9999"
                      className="w-full px-4 py-2.5 rounded-sm bg-[#090D16] border border-white/10 focus:border-[#D4AF37] text-[#F8FAFC] text-sm focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#94A3B8] mb-1.5">
                      Descreva sua ideia ou referências (opcional)
                    </label>
                    <input
                      type="text"
                      value={projectIdea}
                      onChange={(e) => setProjectIdea(e.target.value)}
                      placeholder="Ex.: Gostaria de um leão geométrico no antebraço direito..."
                      className="w-full px-4 py-2.5 rounded-sm bg-[#090D16] border border-white/10 focus:border-[#D4AF37] text-[#F8FAFC] text-sm focus:outline-none"
                    />
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-4 py-2.5 rounded-sm bg-transparent border border-white/10 text-xs font-semibold text-[#94A3B8] hover:text-[#F8FAFC] flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Voltar</span>
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-sm bg-[#D4AF37] text-[#090D16] font-bold text-xs uppercase tracking-widest hover:bg-[#F3E5AB] transition-colors flex items-center gap-2 shadow-lg shadow-[#D4AF37]/20"
                    >
                      <Check className="w-4 h-4" />
                      <span>Enviar Orçamento via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};
