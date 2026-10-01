import React, { useState } from 'react';
import { FACILITIES_DATA } from '../data/salatigaData.ts';
import {
  Footprints,
  Landmark,
  Utensils,
  Building,
  Trees,
  Bath,
  Car,
  Accessibility,
  Check
} from 'lucide-react';

interface FacilitiesProps {
  onOpenVisitModal: () => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onOpenVisitModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Olahraga', 'Kenyamanan', 'Fasilitas Umum', 'Aksesibilitas'];

  const filteredFacilities = selectedCategory === 'Semua'
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter((item) => item.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Footprints':
        return <Footprints className="w-5 h-5 text-[#78350F]" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-[#78350F]" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-[#78350F]" />;
      case 'Building':
        return <Building className="w-5 h-5 text-[#78350F]" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-[#78350F]" />;
      case 'Bath':
        return <Bath className="w-5 h-5 text-[#78350F]" />;
      case 'Car':
        return <Car className="w-5 h-5 text-[#78350F]" />;
      case 'Accessibility':
        return <Accessibility className="w-5 h-5 text-[#78350F]" />;
      default:
        return <Check className="w-5 h-5 text-[#78350F]" />;
    }
  };

  return (
    <section id="fasilitas" className="relative py-20 md:py-28 bg-gradient-to-b from-[#F1E8DC] via-[#E9DFCD] to-[#F3EAE0] border-y border-[#DECFC0] overflow-hidden bg-topo-lines">
      {/* Soft ambient blur in background */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#78350F] uppercase tracking-wider block mb-2">
              Fasilitas Terpadu & Terawat
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B2119] tracking-tight text-balance">
              Kenyamanan Lengkap untuk Setiap Pengunjung
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6B5B4D] leading-relaxed">
              Dikelola secara berkala oleh Pemerintah Kota Salatiga demi menjamin kebersihan,
              keamanan, dan kenyamanan masyarakat berolahraga maupun berekreasi.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#E4D7C4] rounded-xl border border-[#D0BFAB] shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#78350F] text-white shadow-2xs'
                    : 'text-[#5A4A3B] hover:text-[#2B2119] hover:bg-[#D8C7B2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              className="p-6 rounded-2xl bg-[#FCFAF6] border border-[#DECFC0] shadow-xs hover:shadow-md hover:border-[#B45309]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#EFE3CF] border border-[#DECFC0] group-hover:scale-105 transition-transform text-[#78350F]">
                    {getIcon(fac.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-[#806F60] uppercase tracking-wider">
                    {fac.category}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-[#2B2119] group-hover:text-[#78350F] transition-colors">
                  {fac.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#6B5B4D] leading-relaxed">
                  {fac.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F2ECE1]">
                <span className="text-[11px] text-[#7A6B5C] font-medium block">
                  {fac.spec}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner: Masjid Agung & Titik Ibadah */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#E6DDCF] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-[#EFE7D8] text-[#78350F] shrink-0">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-[#2B2119]">
                Berdampingan Langsung dengan Masjid Agung Darul Amal Salatiga
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5B4D] mt-0.5">
                Pengunjung muslim dapat dengan sangat mudah menunaikan ibadah shalat fardhu tepat waktu cukup dengan menyeberang zebra cross yang aman.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenVisitModal}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#78350F] hover:bg-[#5C270A] rounded-xl whitespace-nowrap cursor-pointer transition-colors shadow-2xs"
          >
            Petunjuk Parkir & Akses
          </button>
        </div>
      </div>
    </section>
  );
};
