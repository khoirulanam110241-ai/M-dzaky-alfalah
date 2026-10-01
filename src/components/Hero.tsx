import React, { useState } from 'react';
import { MapPin, Navigation, ArrowRight, Sparkles, Sun, Moon, Flame, Camera, Footprints, UtensilsCrossed } from 'lucide-react';

interface HeroProps {
  onOpenVisitModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVisitModal }) => {
  const [dayPhotoError, setDayPhotoError] = useState(false);
  const [selectedVibe, setSelectedVibe] = useState<'workout' | 'photo' | 'food' | 'night'>('night');

  const vibeDetails = {
    workout: {
      label: 'Lari & Workout Pagi',
      time: '05.30 – 08.30 WIB',
      desc: 'Track lari karet 400m empuk, hawa sejuk 21°C kaki Merbabu, dan komunitas pelari ramah.',
      target: '#aktivitas',
      badge: 'Sehat & Segar'
    },
    photo: {
      label: 'Hunting Foto & OOTD',
      time: '16.00 – 18.00 WIB (Golden Hour)',
      desc: 'Siluet tugu gunungan wayang megah, kolam air mancur menari, dan view Masjid Agung.',
      target: '#anak-muda',
      badge: 'Instagrammable'
    },
    food: {
      label: 'Jajan Hemat & Chill',
      time: '16.00 – 21.30 WIB',
      desc: '50+ gerobak UMKM: Wedang Ronde jahe hangat, jagung bakar, tahu bakso. Mulai Rp 5.000.',
      target: '#kuliner',
      badge: 'Ramah Kantong'
    },
    night: {
      label: 'Nongkrong Malam Syahdu',
      time: '18.30 – 22.30 WIB',
      desc: 'Landmark neon sign "Alun Alun Salatiga" menyala, bangku taman estetik, dan obrolan seru.',
      target: '#anak-muda',
      badge: 'Vibe Paling Hits'
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#1A130C]">
      {/* Background Banner Image (Night Landmark Sign from user upload) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_banner_alun_alun_malam_1790735251570.jpg"
          alt="Background Banner Alun-Alun Pancasila Salatiga Malam Hari dengan tulisan menyala"
          className="w-full h-full object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic Scrim & Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#140F0A]/95 via-[#1D150E]/85 to-[#1D150E]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140F0A]/85 via-transparent to-black/30" />

        {/* Soft bottom blend into the cream background */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#FAF7F2]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Festive Announcement Badge */}
            <div className="pt-2">
              <a
                href="#agenda-meriah"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/30 via-amber-400/20 to-amber-500/30 border border-amber-400/60 backdrop-blur-md text-amber-200 text-xs font-bold hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg shadow-amber-500/20 group"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block shrink-0" />
                <span className="text-amber-300 font-extrabold uppercase tracking-wider">SEMARAK HARI INI:</span>
                <span className="text-white font-medium truncate">Air Mancur Menari 19.30 WIB & Wahana Mobil Gowes</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0 group-hover:rotate-12 transition-transform" />
              </a>
            </div>

            {/* Unboxed Metadata Header (No pills, clean typographic separator) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-amber-200">
              <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Pusat Kota Salatiga
              </span>
              <span aria-hidden="true" className="text-amber-200/40">·</span>
              <span className="text-[#E8DDD0]">Ketinggian 600 mdpl</span>
              <span aria-hidden="true" className="text-amber-200/40">·</span>
              <span className="text-[#E8DDD0]">Akses 24 Jam Buka</span>
              <span aria-hidden="true" className="text-amber-200/40">·</span>
              <span className="text-emerald-300 font-medium">100% Gratis Tiket</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] text-balance drop-shadow-xs">
              Titik Kumpul Favorit & Oase Sejuk Salatiga
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#E0D4C5] leading-relaxed max-w-xl">
              Ruang terbuka hijau bersejarah yang jadi denyut nadi warga dan anak muda.
              Mulai dari <strong className="text-white font-semibold">lari pagi berhawa sejuk 21°C</strong> di kaki Merbabu,
              <strong className="text-white font-semibold"> berburu jajan hemat bareng circle</strong>,
              hingga <strong className="text-white font-semibold">hunting foto estetik</strong> di depan landmark neon malam hari.
            </p>

            {/* Interactive Vibe Selector for Youth */}
            <div className="pt-1">
              <div className="text-xs font-semibold text-amber-300 mb-2.5 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Pilih Vibe Kamu Hari Ini:</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => setSelectedVibe('night')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 border ${
                    selectedVibe === 'night'
                      ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md font-bold'
                      : 'bg-black/40 text-[#E0D4C5] border-white/15 hover:bg-white/10'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Malam Hits</span>
                </button>
                <button
                  onClick={() => setSelectedVibe('food')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 border ${
                    selectedVibe === 'food'
                      ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md font-bold'
                      : 'bg-black/40 text-[#E0D4C5] border-white/15 hover:bg-white/10'
                  }`}
                >
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                  <span>Jajan Murmer</span>
                </button>
                <button
                  onClick={() => setSelectedVibe('workout')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 border ${
                    selectedVibe === 'workout'
                      ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md font-bold'
                      : 'bg-black/40 text-[#E0D4C5] border-white/15 hover:bg-white/10'
                  }`}
                >
                  <Footprints className="w-3.5 h-3.5" />
                  <span>Lari Pagi</span>
                </button>
                <button
                  onClick={() => setSelectedVibe('photo')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 border ${
                    selectedVibe === 'photo'
                      ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md font-bold'
                      : 'bg-black/40 text-[#E0D4C5] border-white/15 hover:bg-white/10'
                  }`}
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Spot Foto</span>
                </button>
              </div>

              {/* Dynamic Vibe Preview Card */}
              <div className="mt-3 p-3.5 rounded-xl bg-black/40 border border-white/15 backdrop-blur-xs flex items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-300">
                      {vibeDetails[selectedVibe].label}
                    </span>
                    <span className="text-[11px] text-[#A89886]">
                      · {vibeDetails[selectedVibe].time}
                    </span>
                  </div>
                  <p className="text-xs text-[#E0D4C5] mt-0.5 line-clamp-1">
                    {vibeDetails[selectedVibe].desc}
                  </p>
                </div>
                <a
                  href={vibeDetails[selectedVibe].target}
                  className="text-xs font-bold text-amber-300 hover:text-white shrink-0 inline-flex items-center gap-1 hover:underline"
                >
                  <span>Cek Info</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenVisitModal}
                className="px-6 py-3.5 text-base font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md hover:shadow-lg transition-all duration-150 inline-flex items-center justify-center gap-2.5 cursor-pointer font-bold"
              >
                <Navigation className="w-4 h-4 text-stone-950" />
                <span>Kunjungi Sekarang</span>
              </button>
              <a
                href="#anak-muda"
                className="px-6 py-3.5 text-base font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-xs rounded-xl transition-all duration-150 inline-flex items-center justify-center gap-2"
              >
                <span>Spot Foto & Vibe Gen-Z</span>
                <Sparkles className="w-4 h-4 text-amber-300" />
              </a>
            </div>

            {/* Quick Context Highlights on Dark Banner */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block font-heading text-xl sm:text-2xl font-bold text-white tabular-nums">
                  21°–25°C
                </span>
                <span className="text-xs text-[#C9BAA9] leading-tight block mt-0.5">
                  Hawa Sejuk Pegunungan
                </span>
              </div>
              <div>
                <span className="block font-heading text-xl sm:text-2xl font-bold text-white tabular-nums">
                  400 M
                </span>
                <span className="text-xs text-[#C9BAA9] leading-tight block mt-0.5">
                  Lintasan Jogging Karet
                </span>
              </div>
              <div>
                <span className="block font-heading text-xl sm:text-2xl font-bold text-white tabular-nums">
                  50+ Stan
                </span>
                <span className="text-xs text-[#C9BAA9] leading-tight block mt-0.5">
                  Jajan Murmer & QRIS
                </span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/40 backdrop-blur-xs">
              <div className="aspect-[4/3] relative overflow-hidden bg-[#2A1F16]">
                {!dayPhotoError ? (
                  <img
                    src="/src/assets/images/Alun-Alun_Pancasila_Kota_Salatiga.jpg"
                    alt="Foto asli Monumen Gunungan Alun-Alun Pancasila dan Masjid Agung Darul Amal Salatiga"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    onError={() => setDayPhotoError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-white">
                    <Sun className="w-10 h-10 text-amber-300 mb-2" />
                    <h3 className="font-display text-lg font-bold">Monumen Gunungan Salatiga</h3>
                  </div>
                )}

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Night banner indicator pill inside card */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-medium text-amber-200 border border-white/10 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Foto Asli Lokasi Salatiga</span>
                </div>

                {/* Caption at bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between pointer-events-none">
                  <div>
                    <p className="text-xs font-medium text-amber-200 uppercase tracking-wider">Ikon Landmark Kota</p>
                    <p className="text-sm sm:text-base font-semibold">Tugu Gunungan Pancasila & Masjid Agung</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md text-amber-100 border border-white/10">
                    <span>Siang Hari</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Accent Glow Behind Card */}
            <div className="absolute -bottom-6 -right-6 -z-10 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
