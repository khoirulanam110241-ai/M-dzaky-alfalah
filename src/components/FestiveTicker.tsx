import React from 'react';
import { Sparkles, Calendar, Waves, ChevronRight } from 'lucide-react';

export const FestiveTicker: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-stone-950 text-xs font-bold py-2 px-4 shadow-sm border-b border-amber-400 relative z-30 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Animated Marquee / Highlights */}
        <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
          <span className="flex items-center gap-1.5 bg-stone-950 text-amber-300 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider shrink-0 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            LIVE SEMARAK
          </span>

          <div className="flex items-center gap-4 text-xs font-semibold overflow-x-auto no-scrollbar py-0.5">
            <span className="flex items-center gap-1">
              <Waves className="w-3.5 h-3.5 text-stone-950 shrink-0" />
              <span>Showtime Air Mancur Menari: Malam Ini 19.30 & 20.30 WIB</span>
            </span>
            <span className="opacity-50">·</span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-stone-950 shrink-0" />
              <span>Pasar Malam & Mobil Gowes LED Siap Keliling</span>
            </span>
            <span className="opacity-50">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-stone-950 shrink-0" />
              <span>Car Free Day Minggu Pagi Mulai 06.00 WIB</span>
            </span>
          </div>
        </div>

        {/* Quick jump to festive section */}
        <a
          href="#agenda-meriah"
          className="hidden sm:inline-flex items-center gap-1 text-[11px] font-extrabold bg-stone-950 text-amber-300 hover:bg-stone-900 px-2.5 py-1 rounded-md shrink-0 transition-colors cursor-pointer"
        >
          <span>Agenda Meriah</span>
          <ChevronRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
