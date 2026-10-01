import React, { useState } from 'react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/salatigaData.ts';
import { Image as ImageIcon, X, ZoomIn, Clock } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('semua');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'semua', label: 'Semua Sudut' },
    { id: 'lari-pagi', label: 'Lari Pagi & Olahraga' },
    { id: 'kuliner', label: 'Kuliner & Keluarga' },
    { id: 'arsitektur', label: 'Lansekap & Tugu' },
    { id: 'malam', label: 'Suasana Malam' }
  ];

  const filteredPhotos = activeCategory === 'semua'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((photo) => photo.category === activeCategory);

  return (
    <section id="galeri" className="relative py-20 md:py-28 bg-gradient-to-b from-[#1C150E] via-[#120D07] to-[#1C150E] border-y border-[#3A2A1D] text-white overflow-hidden">
      {/* Ambient background glows for museum spotlight effect */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 tracking-wide uppercase mb-2">
              <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>Galeri Visual Lokasi</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">
              Potret Keindahan Alun-Alun Pancasila
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#D4C5B3] leading-relaxed">
              Dokumentasi nyata suasana dinamis setiap sudut alun-alun dari fajar menyingsing hingga malam berhias lampu kota.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/15">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                    : 'text-[#E2D5C5] hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-xl hover:border-amber-400/80 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#241A12] relative">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Hover zoom affordance */}
                <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-xs rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                  <ZoomIn className="w-4 h-4 text-amber-300" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs text-amber-300 mb-1">
                    <span className="font-semibold uppercase tracking-wider">{photo.categoryLabel}</span>
                    <span aria-hidden="true" className="text-white/40">·</span>
                    <span className="flex items-center gap-1 text-[#E0D4C5]">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {photo.timeLabel}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-[#D8CCC0] mt-1 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1A130C] rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/70 text-white rounded-full hover:bg-black/90 transition-colors border border-white/20"
              aria-label="Tutup"
            >
              <X className="w-5 h-5 text-amber-300" />
            </button>

            <div className="aspect-[16/10] max-h-[65vh] w-full bg-black relative">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-[#1A130C] border-t border-white/10 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-1">
                <span>{selectedPhoto.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#D4C5B3]">{selectedPhoto.timeLabel}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                {selectedPhoto.title}
              </h3>
              <p className="mt-2 text-sm text-[#D8CCC0] leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
