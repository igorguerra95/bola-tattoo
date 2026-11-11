import React from 'react';
import { motion } from 'motion/react';
import { STATS, TATTOO_ARTISTS, TESTIMONIALS } from '../data/tattooData';
import { Award, ShieldCheck, Users, Star, PenTool, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onSelectArtist: (artistId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectArtist }) => {
  return (
    <section id="artistas" className="relative py-28 bg-[#090D16] border-t border-white/5 overflow-hidden">
      {/* Luz ambiente e gradientes */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-[#0F172A] rounded-full blur-[140px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F172A] border border-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Tradição & Arte Permanente</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8FAFC] tracking-tight uppercase">
            Sobre o <span className="text-gold-gradient font-serif">Estúdio</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] font-normal leading-relaxed font-body">
            A Bola Tattoo foi construída sobre o alicerce da tatuagem autoral autêntica, onde cada linha é pensada para durar uma vida inteira com nitidez e reverência à anatomia humana.
          </p>
        </div>

        {/* Bloco Editorial de História & Filosofia */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-[#CBD5E1] text-base leading-relaxed font-body"
          >
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#F8FAFC] leading-snug">
              Não aplicamos desenhos em massa. Criamos identidades eternas.
            </h3>

            <p>
              Fundado há mais de 15 anos pelo artista <strong>Igor Bola</strong>, o estúdio se consolidou como referência nacional em projetos de alta complexidade técnica, fechamentos anatômicos e traços cirúrgicos.
            </p>

            <p>
              Em nosso estúdio de arte, a criatividade caminha lado a lado com a máxima biossegurança. Utilizamos exclusivamente agulhas e cartuchos descartáveis com membrana de segurança, tintas autorizadas pela Anvisa e esterilização de bancada com autoclave classe B monitorada por testes periódicos.
            </p>

            {/* Pilares da Casa */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-sm bg-[#0F172A] border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#F8FAFC] text-sm block">Higiene & Biossegurança</span>
                  <span className="text-xs text-[#94A3B8]">100% de materiais descartáveis abertos rigorosamente na sua presença.</span>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-[#0F172A] border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#F8FAFC] text-sm block">Desenho Autoral 100%</span>
                  <span className="text-xs text-[#94A3B8]">Estudo anatômico e arte única desenvolvida especificamente para você.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Imagem de Destaque da Seção Sobre */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#0F172A]">
              <img
                src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1000&q=80"
                alt="Artista Bola Tattoo em processo criativo"
                className="w-full h-[450px] object-cover object-center filter contrast-115 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#090D16]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block">
                    Assinatura Bola Tattoo
                  </span>
                  <span className="text-sm font-semibold text-[#F8FAFC]">
                    Precisão, Densidade de Tinta & Alma
                  </span>
                </div>
                <PenTool className="w-6 h-6 text-[#D4AF37]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Estatísticas com Números Grandes */}
        <div className="mb-28">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
              Métricas Consolidadas de Nossa Trajetória
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-sm bg-[#0F172A] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 shadow-lg"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none group-hover:bg-[#D4AF37]/10 transition-colors" />

                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl sm:text-6xl font-bold text-gold-gradient tracking-tight">
                    {stat.value}
                  </span>
                </div>

                <h4 className="mt-3 font-heading text-lg font-bold text-[#F8FAFC]">
                  {stat.label}
                </h4>

                <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed font-body">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Equipe de 5 Artistas Especialistas */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F172A] border border-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Corpo Artístico Residente</span>
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#F8FAFC]">
              5 Artistas Especialistas
            </h3>
            <p className="mt-3 text-sm text-[#94A3B8]">
              Cada residente domina uma linguagem visual profunda, garantindo que o seu projeto seja entregue com virtuosismo e conhecimento técnico de ponta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {TATTOO_ARTISTS.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-sm bg-[#0F172A] border border-white/10 hover:border-[#D4AF37]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-md hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-[#090D16]">
                    <img
                      src={artist.avatar}
                      alt={artist.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-sm bg-[#090D16]/90 border border-white/10 text-[#D4AF37] text-[10px] font-mono">
                      {artist.experience}
                    </span>
                  </div>

                  <div className="p-5">
                    <h4 className="font-heading text-lg font-bold text-[#F8FAFC] group-hover:text-[#D4AF37] transition-colors">
                      {artist.name}
                    </h4>
                    <span className="text-xs text-[#D4AF37] font-medium block mt-0.5">
                      {artist.role}
                    </span>
                    <p className="mt-3 text-xs text-[#94A3B8] leading-relaxed font-body">
                      {artist.bio}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onSelectArtist(artist.id)}
                    className="w-full py-2.5 rounded-sm bg-[#090D16] border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#F8FAFC] hover:text-[#090D16] text-[11px] font-bold uppercase tracking-wider transition-all duration-200"
                  >
                    Tatuar com {artist.name.split(' ')[0]}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Prova Social & Depoimentos Reais */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
              Experiência Comprovada na Pele
            </span>
            <h3 className="font-heading text-3xl font-bold text-[#F8FAFC] mt-2">
              Depoimentos de Quem Já Tatuou Conosco
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((depo) => (
              <div
                key={depo.id}
                className="p-6 rounded-sm bg-[#0F172A] border border-white/10 flex flex-col justify-between shadow-lg relative"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                    {[...Array(depo.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-sm text-[#CBD5E1] italic leading-relaxed font-body">
                    "{depo.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h5 className="font-heading text-sm font-bold text-[#F8FAFC]">
                      {depo.name}
                    </h5>
                    <span className="text-[11px] text-[#94A3B8]">{depo.tattooProject}</span>
                  </div>
                  <span className="text-[10px] text-[#D4AF37] font-mono px-2 py-0.5 rounded bg-[#090D16] border border-[#D4AF37]/20">
                    Cicatrizada
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
