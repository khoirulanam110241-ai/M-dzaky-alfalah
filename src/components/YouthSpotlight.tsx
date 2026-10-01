import React, { useState } from 'react';
import { Camera, Sparkles, Utensils, Shirt, Clock, ChevronRight, CheckCircle2, Wallet, Flame } from 'lucide-react';

interface YouthSpotlightProps {
  onOpenVisitModal: () => void;
}

export const YouthSpotlight: React.FC<YouthSpotlightProps> = ({ onOpenVisitModal }) => {
  const [activeTab, setActiveTab] = useState<'spots' | 'budget' | 'checklist'>('spots');
  const [selectedBudget, setSelectedBudget] = useState<'15k' | '25k' | '40k'>('25k');

  const photoSpots = [
    {
      id: 'neon-sign',
      name: 'Landmark Neon Sign "Alun Alun Salatiga"',
      bestTime: '18.30 – 21.30 WIB (Malam)',
      vibe: 'Cyberpunk & Night Lights',
      tip: 'Ambil foto dari angle agak rendah (low angle) agar tulisan putih dan ungu menyala tampak megah dengan refleksi lantai paving basah.',
      outfit: 'Oversized hoodie, loose jeans & sneakers putih',
      image: '/src/assets/images/hero_banner_alun_alun_malam_1790735251570.jpg'
    },
    {
      id: 'gunungan-fountain',
      name: 'Air Mancur Menari & Monumen Gunungan',
      bestTime: '06.30 – 08.00 & 16.30 WIB',
      vibe: 'Cultural & Monumental',
      tip: 'Berdiri di tepi pembatas kolam air mancur dengan pose candid melangkah. Semburan air vertikal memberi dinamika gerak yang estetik.',
      outfit: 'Sporty activewear atau kemeja santai earth-tone',
      image: '/src/assets/images/monumen_pancasila_air_mancur_1790734868643.jpg'
    },
    {
      id: 'masjid-dome',
      name: 'Siluet Masjid Agung & Paving Lengkung',
      bestTime: '17.15 – 17.50 WIB (Golden Hour)',
      vibe: 'Cinematic Sunset',
      tip: 'Arahkan kamera ke sisi barat daya untuk menangkap kubah hijau berpadu dengan semburat langit senja keemasan lereng Merbabu.',
      outfit: 'Jaket windbreaker atau cardigan kasual',
      image: '/src/assets/images/Alun-Alun_Pancasila_Kota_Salatiga.jpg'
    },
    {
      id: 'jogging-track',
      name: 'Jalur Jogging Track Karet Merah',
      bestTime: '06.00 – 07.30 WIB (Pagi Cerah)',
      vibe: 'Healthy & Energetic',
      tip: 'Manfaatkan garis kurva lintasan merah sebagai leading line visual. Cocok untuk reels/TikTok transisi running workout.',
      outfit: 'Running tee, compression shorts & smart watch',
      image: '/src/assets/images/jogging_track_pancasila_asli_1790734881496.jpg'
    }
  ];

  const budgetCombos = {
    '15k': {
      title: 'Paket Irit Nongkrong (Rp 15.000)',
      sub: 'Kenyang manis hangat pas di kantong pelajar',
      items: [
        { name: 'Wedang Ronde Jahe Asli', price: 'Rp 8.000', note: 'Kuah jahe pedas hangat + mochi isi kacang' },
        { name: 'Jagung Bakar Serut Manis Pedas', price: 'Rp 7.000', note: 'Aroma arang khas + taburan keju gurih' }
      ],
      total: 'Rp 15.000',
      vibeBadge: 'Super Hemat',
      tip: 'Cocok dinikmati sambil duduk santai di bangku taman depan videotron.'
    },
    '25k': {
      title: 'Paket Kenyang Puas (Rp 25.000)',
      sub: 'Kombinasi makanan berat + jajan anget favorit',
      items: [
        { name: 'Bakso Babat Gurih Spesial', price: 'Rp 15.000', note: 'Kuah kaldu sapi pekat + mie + potongan babat empuk' },
        { name: '2x Tahu Bakso Salatiga Crispy', price: 'Rp 5.000', note: 'Gurih garing di luar, kenyal daging di dalam' },
        { name: 'Es Coklat Roti Jadul / Susu Jahe', price: 'Rp 5.000', note: 'Penutup manis segar penyeimbang rasa' }
      ],
      total: 'Rp 25.000',
      vibeBadge: 'Paling Populer',
      tip: 'Pilihan paling ideal buat yang habis lari pagi atau nongkrong sepulang kuliah.'
    },
    '40k': {
      title: 'Paket Sultan Nongkrong Berdua (Rp 40.000)',
      sub: 'Traktir bestie atau doi tanpa takut dompet jebol',
      items: [
        { name: '2x Wedang Ronde Komplit', price: 'Rp 16.000', note: 'Dua mangkuk hangat buat ngobrol santai' },
        { name: '1 Porsi Siomay Bumbu Kacang Kental', price: 'Rp 12.000', note: 'Isi siomay, kentang, tahu, kubis empuk' },
        { name: '1 Jagung Bakar Keju Spesial', price: 'Rp 8.000', note: 'Diserut praktis buat sharing berdua' },
        { name: 'Serabi Solo Hangat (2 Biji)', price: 'Rp 4.000', note: 'Lumer rasa kelapa pandan di lidah' }
      ],
      total: 'Rp 40.000',
      vibeBadge: 'Duo Circle / Date Friendly',
      tip: 'Cukup bayar via QRIS bank apa saja, praktis tanpa ribet bawa receh.'
    }
  };

  const checklistTips = [
    {
      title: 'Outfit Friendly Cuaca 21°C',
      desc: 'Salatiga berhawa pegunungan sejuk. Siapkan jaket windbreaker, sweater, atau flannel santai jika nongkrong sampai lewat pukul 19.00 WIB.'
    },
    {
      title: 'Pembayaran 100% QRIS Friendly',
      desc: 'Hampir seluruh pedagang gerobak UMKM dan stan kuliner telah mendukung QRIS. Cukup bawa smartphone dan e-wallet aktif.'
    },
    {
      title: 'Timing Terbaik: Jam 16.30 WIB',
      desc: 'Datang menjelang sore: dapat momen lari santai keliling lapangan, berburu golden hour sunset di tugu, lalu lanjut kulineran malam.'
    },
    {
      title: 'Parkir Tertib & Ramah Helm',
      desc: 'Parkir kendaraan roda dua di kantong resmi sisi barat dan selatan (Jl. Adi Sucipto). Tarif resmi Rp 2.000 dijaga petugas ramah.'
    }
  ];

  return (
    <section id="anak-muda" className="relative py-20 md:py-28 bg-gradient-to-b from-[#F7F2E9] via-[#EFE6D5] to-[#F5EEE2] border-b border-[#DECFC0] overflow-hidden bg-topo-lines">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#78350F] tracking-wide uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Panduan Nongkrong & Hunting Foto</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B2119] tracking-tight text-balance">
              Spot Estetik & Vibe Favorit Anak Muda
            </h2>
            <p className="mt-3 text-base text-[#6B5B4D] leading-relaxed">
              Jadikan momen main ke Alun-Alun Pancasila makin seru bersama teman dan komunitas.
              Temukan spot foto terbaik, simulasi jajan hemat, dan tips santai berhawa sejuk.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="inline-flex p-1.5 bg-[#E6DAC8] rounded-xl border border-[#D5C5B0] shadow-2xs self-start md:self-auto">
            <button
              onClick={() => setActiveTab('spots')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'spots'
                  ? 'bg-[#78350F] text-white shadow-xs'
                  : 'text-[#544436] hover:text-[#2B2119] hover:bg-[#DDD0BE]'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Spot Foto Hits</span>
            </button>
            <button
              onClick={() => setActiveTab('budget')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'budget'
                  ? 'bg-[#78350F] text-white shadow-xs'
                  : 'text-[#544436] hover:text-[#2B2119] hover:bg-[#DDD0BE]'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>Jajan Hemat Pelajar</span>
            </button>
            <button
              onClick={() => setActiveTab('checklist')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'checklist'
                  ? 'bg-[#78350F] text-white shadow-xs'
                  : 'text-[#544436] hover:text-[#2B2119] hover:bg-[#DDD0BE]'
              }`}
            >
              <Shirt className="w-4 h-4" />
              <span>Checklist Nongkrong</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Spot Foto Hits */}
        {activeTab === 'spots' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photoSpots.map((spot) => (
              <div
                key={spot.id}
                className="group rounded-2xl overflow-hidden bg-[#FCFAF6] border border-[#DECFC0] shadow-xs hover:shadow-md hover:border-[#B45309]/50 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#241A12]">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-medium text-amber-200 border border-white/10 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{spot.bestTime}</span>
                  </div>
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold text-amber-300 block uppercase tracking-wider">
                      {spot.vibe}
                    </span>
                    <h4 className="text-sm font-bold line-clamp-1">
                      {spot.name}
                    </h4>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-[#FCFAF6]">
                  <div>
                    <div className="text-xs font-semibold text-[#78350F] flex items-center gap-1 mb-1">
                      <Camera className="w-3.5 h-3.5" />
                      <span>Tips Angle & Pose:</span>
                    </div>
                    <p className="text-xs text-[#5C4D40] leading-relaxed">
                      {spot.tip}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#EDE1D1]">
                    <div className="text-[11px] text-[#7A6B5C]">
                      <span className="font-semibold text-[#2B2119]">Outfit Ide: </span>
                      {spot.outfit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Kalkulator Jajan Hemat Pelajar */}
        {activeTab === 'budget' && (
          <div className="bg-[#FAF5EC] rounded-2xl border border-[#DECFC0] p-6 sm:p-8 shadow-sm">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#78350F] uppercase tracking-wider mb-1">
                <Wallet className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Simulasi Anggaran Nongkrong Ramah Kantong</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2B2119]">
                Pilih Budget Kamu Hari Ini
              </h3>
              <p className="text-sm text-[#6B5B4D] mt-1">
                Di Alun-Alun Salatiga, nongkrong kenyang nggak harus mahal. Pilih batas budget di bawah untuk melihat kombinasi kuliner terbaik:
              </p>

              {/* Budget Option Selectors */}
              <div className="flex flex-wrap gap-3 mt-5">
                {(['15k', '25k', '40k'] as const).map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBudget(b)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                      selectedBudget === b
                        ? 'bg-[#78350F] text-white shadow-sm ring-2 ring-[#78350F]/20'
                        : 'bg-[#EDE2D1] text-[#544436] hover:bg-[#E2D5C0] border border-[#D5C4AF]'
                    }`}
                  >
                    <span>{b === '15k' ? 'Rp 15.000' : b === '25k' ? 'Rp 25.000' : 'Rp 40.000 (Duo)'}</span>
                    {b === '25k' && (
                      <span className="text-[10px] bg-amber-400 text-stone-900 px-1.5 py-0.5 rounded-sm font-bold">
                        HITS
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Budget Breakdown Card */}
            {(() => {
              const currentCombo = budgetCombos[selectedBudget];
              return (
                <div className="bg-[#F3EAD9] rounded-xl border border-[#DECFC0] p-5 sm:p-6 shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#DECFC0] gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#78350F] uppercase tracking-wider">
                          {currentCombo.vibeBadge}
                        </span>
                      </div>
                      <h4 className="font-display text-xl font-bold text-[#2B2119] mt-0.5">
                        {currentCombo.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6B5B4D]">
                        {currentCombo.sub}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-xs text-[#7A6B5C] block">Total Estimasi</span>
                      <span className="text-2xl font-bold text-[#78350F] font-heading tabular-nums">
                        {currentCombo.total}
                      </span>
                    </div>
                  </div>

                  {/* Menu Items Breakdown */}
                  <div className="divide-y divide-[#DECFC0]/80 my-4">
                    {currentCombo.items.map((item, idx) => (
                      <div key={idx} className="py-3 flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-sm font-semibold text-[#2B2119] block">
                              {item.name}
                            </span>
                            <span className="text-xs text-[#6B5B4D]">
                              {item.note}
                            </span>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-[#2B2119] tabular-nums shrink-0">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Footer note */}
                  <div className="pt-3 border-t border-[#DECFC0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#6B5B4D]">
                    <div className="flex items-center gap-1.5">
                      <Flame className="w-4 h-4 text-amber-600 shrink-0" />
                      <span><strong>Tips: </strong>{currentCombo.tip}</span>
                    </div>
                    <button
                      onClick={onOpenVisitModal}
                      className="text-[#78350F] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer self-start sm:self-auto"
                    >
                      <span>Lihat Rute Menuju Lokasi</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Tab 3: Checklist Nongkrong */}
        {activeTab === 'checklist' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checklistTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-[#FCFAF6] rounded-2xl border border-[#DECFC0] p-6 shadow-xs flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-[#EFE4D2] border border-[#DECFC0] text-[#78350F] shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-[#2B2119]">
                    {tip.title}
                  </h4>
                  <p className="mt-1.5 text-sm text-[#6B5B4D] leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
