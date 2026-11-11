import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/tattooData';
import { GalleryItem } from '../types';
import { Camera, X, ZoomIn, PenTool, User, Tag } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'todos', label: 'Todos os Trabalhos' },
    { id: 'blackwork', label: 'Blackwork' },
    { id: 'realismo', label: 'Realismo P&B' },
    { id: 'fineline', label: 'Fineline' },
    { id: 'oriental', label: 'Irezumi Oriental' },
    { id: 'piercing', label: 'Body Piercing' },
  ];

  const filteredItems = activeFilter === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="relative py-28 bg-[#090D16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F172A] border border-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Portfólio & Tatuagens Cicatrizadas</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F8FAFC] tracking-tight uppercase">
            Galeria & <span className="text-gold-gradient font-serif">Obras</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] font-normal leading-relaxed font-body">
            Trabalhos reais produzidos em nosso estúdio. Linhas sólidas, contrastes duradouros e cicatrização impecável.
          </p>

          {/* Abas de Filtros */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all duration-300 border ${
                  activeFilter === tab.id
                    ? 'bg-[#0F172A] border-[#D4AF37] text-[#D4AF37] shadow-lg shadow-black/60'
                    : 'bg-[#090D16] border-white/10 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Imagens da Galeria */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedItem(item)}
                className="group relative h-80 rounded-sm bg-[#0F172A] border border-white/10 overflow-hidden cursor-pointer shadow-lg hover:border-[#D4AF37]/60 transition-all duration-500"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-110 group-hover:brightness-100"
                />

                {/* Overlay Elegante com Informações */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Ícone de Zoom */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-sm bg-[#090D16]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#F8FAFC] group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/40 transition-colors">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Categoria Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-sm bg-[#0F172A]/90 backdrop-blur-md border border-white/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Textos Inferiores */}
                <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-heading text-lg font-bold text-[#F8FAFC] group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-[#94A3B8]">
                    <span className="flex items-center gap-1 font-medium">
                      <User className="w-3 h-3 text-[#D4AF37]" />
                      {item.artistName}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-[#CBD5E1] line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body">
                    {item.technique}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full rounded-sm bg-[#0F172A] border border-[#D4AF37]/40 overflow-hidden shadow-2xl"
              >
                {/* Botão Fechar */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-sm bg-[#090D16]/80 text-[#F8FAFC] hover:text-[#D4AF37] border border-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col md:flex-row">
                  <div className="md:w-3/5 h-80 md:h-[480px] bg-black">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#0F172A]">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#090D16] border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-4">
                        <Tag className="w-3 h-3" />
                        <span>{selectedItem.categoryLabel}</span>
                      </div>

                      <h3 className="font-heading text-2xl font-bold text-[#F8FAFC]">
                        {selectedItem.title}
                      </h3>

                      <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block font-semibold">
                            Artista Residente
                          </span>
                          <span className="text-sm font-bold text-[#F8FAFC] mt-0.5 block">
                            {selectedItem.artistName}
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#94A3B8] block font-semibold">
                            Técnica & Material
                          </span>
                          <span className="text-sm text-[#CBD5E1] mt-0.5 block font-body">
                            {selectedItem.technique}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="text-xs text-[#94A3B8] mb-4">
                        Deseja criar um projeto personalizado neste estilo? Nossos tatuadores desenham exclusivamente para a sua anatomia.
                      </p>
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="w-full py-3 rounded-sm bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#090D16] font-bold text-xs uppercase tracking-widest transition-colors shadow-lg"
                      >
                        Fechar Visualização
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
