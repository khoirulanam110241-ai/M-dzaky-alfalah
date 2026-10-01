import React, { useState } from 'react';
import { CULINARY_DATA } from '../data/salatigaData.ts';
import { UtensilsCrossed, Coffee, Flame, Heart, Info } from 'lucide-react';

interface CulinaryProps {
  onOpenVisitModal: () => void;
}

export const CulinarySpotlight: React.FC<CulinaryProps> = ({ onOpenVisitModal }) => {
  const [filter, setFilter] = useState<'semua' | 'sarapan' | 'camilan' | 'malam'>('semua');

  const filteredItems = filter === 'semua'
    ? CULINARY_DATA
    : CULINARY_DATA.filter((item) => item.category === filter);

  return (
    <section id="kuliner" className="relative py-20 md:py-28 bg-gradient-to-b from-[#F7F2E9] via-[#EFE6D5] to-[#F5EEE2] border-b border-[#DECFC0] overflow-hidden bg-warm-mesh">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#78350F] tracking-wide uppercase mb-2">
              <UtensilsCrossed className="w-3.5 h-3.5 text-amber-600" />
              <span>Jajan Santai Bersama Keluarga</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B2119] tracking-tight text-balance">
              Sensasi Kuliner Hangat Khas Kota Salatiga
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6B5B4D] leading-relaxed">
              Mulai dari sarapan hangat pengganjal perut sesudah lari pagi hingga aneka jajan malam
              pengantar obrolan hangat keluarga di bawah sejuknya malam pegunungan.
            </p>
          </div>

          {/* Meal Timing Filters */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#E6DAC8] rounded-xl border border-[#D5C5B0] shadow-2xs">
            <button
              onClick={() => setFilter('semua')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'semua'
                  ? 'bg-[#78350F] text-white shadow-2xs'
                  : 'text-[#5A4A3B] hover:text-[#2B2119] hover:bg-[#DDD0BE]'
              }`}
            >
              Semua Menu
            </button>
            <button
              onClick={() => setFilter('sarapan')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'sarapan'
                  ? 'bg-[#78350F] text-white shadow-2xs'
                  : 'text-[#5A4A3B] hover:text-[#2B2119] hover:bg-[#DDD0BE]'
              }`}
            >
              Sarapan Pasca Lari
            </button>
            <button
              onClick={() => setFilter('camilan')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'camilan'
                  ? 'bg-[#78350F] text-white shadow-2xs'
                  : 'text-[#5A4A3B] hover:text-[#2B2119] hover:bg-[#DDD0BE]'
              }`}
            >
              Camilan Sore Keluarga
            </button>
            <button
              onClick={() => setFilter('malam')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filter === 'malam'
                  ? 'bg-[#78350F] text-white shadow-2xs'
                  : 'text-[#5A4A3B] hover:text-[#2B2119] hover:bg-[#DDD0BE]'
              }`}
            >
              Santap Malam Hangat
            </button>
          </div>
        </div>

        {/* Culinary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#FCFAF6] border border-[#DECFC0] shadow-xs hover:shadow-md hover:border-[#B45309]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#806F60] pb-2 mb-3 border-b border-[#EDE1D1]">
                  <span className="font-semibold text-[#78350F]">{item.type}</span>
                  <span className="font-bold text-[#2B2119] tabular-nums">{item.priceRange}</span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#2B2119]">
                  {item.name}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#6B5B4D] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#DECFC0] bg-[#F3EAD9] -mx-6 -mb-6 p-4 rounded-b-2xl">
                <div className="flex items-start gap-2 text-xs text-[#5C4D40]">
                  <Heart className="w-3.5 h-3.5 text-[#B45309] shrink-0 mt-0.5" />
                  <span className="italic">{item.popularPairing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Family Culinary Experience Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#EBE0CE] border border-[#DECFC0] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-[#78350F] shrink-0" />
            <p className="text-xs sm:text-sm text-[#4A3C30]">
              <strong>Tips Kulineran Hemat & Nyaman:</strong> Mayoritas gerobak pedagang UMKM di Alun-Alun Pancasila menerima pembayaran non-tunai via <strong>QRIS</strong>. Tersedia bangku dan meja makan teratur di tepi lingkar pedestrian.
            </p>
          </div>
          <button
            onClick={onOpenVisitModal}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#78350F] hover:bg-[#5C270A] rounded-xl whitespace-nowrap cursor-pointer transition-colors shadow-2xs"
          >
            Lihat Denah Pujasera
          </button>
        </div>
      </div>
    </section>
  );
};
