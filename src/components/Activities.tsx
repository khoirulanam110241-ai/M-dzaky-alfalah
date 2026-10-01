import React, { useState } from 'react';
import { ACTIVITIES_DATA, TIME_SLOTS } from '../data/salatigaData.ts';
import { Clock, CheckCircle2, ChevronRight, Sparkles, HeartHandshake } from 'lucide-react';

interface ActivitiesProps {
  onOpenVisitModal: () => void;
}

export const Activities: React.FC<ActivitiesProps> = ({ onOpenVisitModal }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(0);
  const [activeTab, setActiveTab] = useState<'semua' | 'lari-pagi' | 'jajan'>('semua');

  const filteredActivities = activeTab === 'semua'
    ? ACTIVITIES_DATA
    : activeTab === 'lari-pagi'
    ? ACTIVITIES_DATA.filter((a) => a.id === 'lari-pagi' || a.id === 'rekreasi-anak')
    : ACTIVITIES_DATA.filter((a) => a.id === 'jajan-santai' || a.id === 'wisata-malam');

  return (
    <section id="aktivitas" className="relative py-20 md:py-28 bg-gradient-to-b from-[#F5EEE2] via-[#EAE1CF] to-[#F1E8DC] border-b border-[#DECFC0] overflow-hidden bg-topo-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#78350F] tracking-wide uppercase mb-2">
            <span>Aktivitas & Gaya Hidup Warga</span>
            <span aria-hidden="true">·</span>
            <span>Kota Salatiga</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B2119] tracking-tight text-balance">
            Dari Lari Pagi Menyegarkan Hingga Jajan Hangat Keluarga
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B5B4D] leading-relaxed">
            Sebagai pusat keramaian terbuka di pusat kota Salatiga, Alun-Alun Pancasila menghadirkan
            ritme kehidupan yang sehat dan hangat. Dua aktivitas paling favorit yang tak boleh Anda lewatkan:
            jogging di sejuknya pagi dan berburu camilan khas bersama orang-orang tercinta.
          </p>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="mt-6 flex flex-wrap items-center gap-2 p-1.5 bg-[#E6DAC8] rounded-xl w-fit border border-[#D5C5B0] shadow-2xs">
            <button
              onClick={() => setActiveTab('semua')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'semua'
                  ? 'bg-[#78350F] text-white shadow-xs'
                  : 'text-[#544436] hover:text-[#2B2119] hover:bg-[#DDD0BE]'
              }`}
            >
              Semua Aktivitas
            </button>
            <button
              onClick={() => setActiveTab('lari-pagi')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'lari-pagi'
                  ? 'bg-[#78350F] text-white shadow-xs'
                  : 'text-[#544436] hover:text-[#2B2119] hover:bg-[#DDD0BE]'
              }`}
            >
              Fokus Lari Pagi & Olahraga
            </button>
            <button
              onClick={() => setActiveTab('jajan')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'jajan'
                  ? 'bg-[#78350F] text-white shadow-xs'
                  : 'text-[#544436] hover:text-[#2B2119] hover:bg-[#DDD0BE]'
              }`}
            >
              Fokus Jajan & Keluarga
            </button>
          </div>
        </div>

        {/* Highlighted Activities Bento Grid */}
        <div className="space-y-12">
          {filteredActivities.map((activity, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={activity.id}
                className="rounded-2xl border border-[#DECFC0] bg-[#FCFAF6] shadow-sm hover:shadow-md hover:border-[#B45309]/50 transition-all overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Column */}
                  <div className={`lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] bg-[#EFE9DF] ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs font-semibold text-amber-200 tracking-wide uppercase">
                        {activity.category}
                      </span>
                      <p className="text-base sm:text-lg font-bold">{activity.tagline}</p>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      {/* Editorial Index */}
                      <div className="flex items-center justify-between text-xs font-semibold text-[#806F60] mb-3">
                        <span>0{index + 1}. Kategori Pilihan</span>
                        <div className="flex items-center gap-1.5 text-[#78350F]">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{activity.bestTime}</span>
                        </div>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B2119] tracking-tight">
                        {activity.title}
                      </h3>

                      <p className="mt-3 text-sm sm:text-base text-[#6B5B4D] leading-relaxed">
                        {activity.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-5 grid grid-cols-2 gap-2.5">
                        {activity.highlights.map((hl, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#4A3B2F]">
                            <CheckCircle2 className="w-4 h-4 text-[#78350F] shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pro Tips Box */}
                      <div className="mt-6 p-4 rounded-xl bg-[#FAF7F2] border border-[#E6DDCF]">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#78350F] uppercase tracking-wider mb-2">
                          <Sparkles className="w-3.5 h-3.5 text-[#B45309]" />
                          <span>Panduan & Tips Warga Lokal</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#6B5B4D]">
                          {activity.tips.map((tip, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2">
                              <span className="text-[#78350F] font-bold">·</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#EFE9DF] flex items-center justify-between">
                      <span className="text-xs text-[#806F60]">
                        Gratis & terbuka untuk umum
                      </span>
                      <button
                        onClick={onOpenVisitModal}
                        className="text-xs sm:text-sm font-semibold text-[#78350F] hover:text-[#5C270A] inline-flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        <span>Panduan Kunjungan</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Schedule Selector: Rekomendasi Waktu Kunjungan */}
        <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-[#F4EFE6] border border-[#E6DDCF]">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-semibold text-[#78350F] uppercase tracking-wider">
              Rekomendasi Waktu Terbaik
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B2119] mt-1">
              Kapan Waktu Paling Pas Buat Anda?
            </h3>
            <p className="text-sm text-[#6B5B4D] mt-2">
              Pilih waktu yang sesuai dengan rencana liburan atau akhir pekan Anda bersama keluarga:
            </p>
          </div>

          {/* Time Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {TIME_SLOTS.map((slot, idx) => (
              <button
                key={slot.id}
                onClick={() => setSelectedTimeSlot(idx)}
                className={`p-4 text-left rounded-xl border transition-all cursor-pointer ${
                  selectedTimeSlot === idx
                    ? 'bg-[#FFFFFF] border-[#78350F] shadow-xs ring-1 ring-[#78350F]'
                    : 'bg-[#FAF7F2] border-[#E6DDCF] hover:bg-[#FFFFFF]'
                }`}
              >
                <span className="text-xs font-bold text-[#78350F] block">
                  {slot.label}
                </span>
                <span className="font-heading text-sm font-bold text-[#2B2119] mt-1 block">
                  {slot.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active Slot Detailed Breakdown */}
          {TIME_SLOTS[selectedTimeSlot] && (
            <div className="p-6 rounded-xl bg-[#FFFFFF] border border-[#E6DDCF] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#EFE9DF]">
                <div>
                  <h4 className="text-lg font-bold text-[#2B2119]">
                    {TIME_SLOTS[selectedTimeSlot].title}
                  </h4>
                  <p className="text-sm text-[#6B5B4D] mt-0.5">
                    {TIME_SLOTS[selectedTimeSlot].desc}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#78350F] block">Estimasi Suhu</span>
                  <span className="text-sm font-bold text-[#2B2119] tabular-nums">
                    {TIME_SLOTS[selectedTimeSlot].weather}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="font-semibold text-[#544436] block mb-1">
                    Karakter Pengunjung:
                  </span>
                  <p className="text-[#6B5B4D]">{TIME_SLOTS[selectedTimeSlot].crowd}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#544436] block mb-1">
                    Saran Aktivitas Ideal:
                  </span>
                  <p className="text-[#6B5B4D]">{TIME_SLOTS[selectedTimeSlot].activitySuggestion}</p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end">
                <button
                  onClick={onOpenVisitModal}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#78350F] hover:bg-[#5C270A] rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>Rencanakan Kunjungan</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
