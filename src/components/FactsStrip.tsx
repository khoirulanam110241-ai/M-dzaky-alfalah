import React from 'react';
import { Clock, Footprints, UtensilsCrossed, ShieldCheck } from 'lucide-react';

export const FactsStrip: React.FC = () => {
  const facts = [
    {
      icon: Clock,
      value: '24 Jam',
      title: 'Buka Bebas & Kapan Saja',
      subtitle: 'Mau lari subuh, nyore golden hour, atau nongkrong malam bareng circle bebas jam tutup.'
    },
    {
      icon: Footprints,
      value: '400 M',
      title: 'Track Lari Karet Sintetis',
      subtitle: 'Permukaan empuk anti-selip, cocok buat jogging santai, cardio, atau cari personal best.'
    },
    {
      icon: UtensilsCrossed,
      value: '50+ Stan',
      title: 'Jajan Murmer & 100% QRIS',
      subtitle: 'Wedang Ronde, Jagung Bakar, Tahu Bakso mulai Rp 5rb. Cukup scan smartphone tanpa ribet receh.'
    },
    {
      icon: ShieldCheck,
      value: 'Rp 0',
      title: 'Gratis Tiket Masuk',
      subtitle: 'Healing gratis di pusat kota dengan fasilitas bersih, penerangan terang, dan petugas sigap.'
    }
  ];

  return (
    <section id="tentang" className="relative py-10 bg-gradient-to-r from-[#EDE3D3] via-[#F5ECE0] to-[#EBE0CF] border-y border-[#DECFC0] overflow-hidden bg-topo-pattern">
      {/* Soft warm light glow in background */}
      <div className="absolute top-0 right-1/4 w-72 h-32 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#FCFAF6]/90 backdrop-blur-xs border border-[#DECFC0] shadow-xs hover:shadow-md hover:border-[#B45309]/40 transition-all duration-200"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#EFE5D4] to-[#E3D3BE] text-[#78350F] shadow-2xs shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold text-[#2B2119] tabular-nums tracking-tight">
                    {fact.value}
                  </div>
                  <div className="text-sm font-bold text-[#544436] mt-0.5">
                    {fact.title}
                  </div>
                  <p className="text-xs text-[#736354] mt-1 leading-relaxed">
                    {fact.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
