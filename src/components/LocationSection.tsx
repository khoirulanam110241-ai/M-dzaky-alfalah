import React, { useState } from 'react';
import { TRAVEL_ORIGINS } from '../data/salatigaData.ts';
import { MapPin, Navigation, Copy, Check, Car, Compass, ExternalLink } from 'lucide-react';

interface LocationProps {
  onOpenVisitModal: () => void;
}

export const LocationSection: React.FC<LocationProps> = ({ onOpenVisitModal }) => {
  const [copied, setCopied] = useState(false);
  const [activeCityTab, setActiveCityTab] = useState(0);

  const fullAddress = 'Alun-Alun Pancasila, Jl. Brigjen Sudiarto, Kel. Kalicacing, Kec. Sidomukti, Kota Salatiga, Jawa Tengah 50724';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="lokasi" className="relative py-20 md:py-28 bg-gradient-to-b from-[#F5EEE2] via-[#ECE1CF] to-[#F7F2E9] overflow-hidden bg-topo-pattern">
      {/* Soft ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#78350F] tracking-wide uppercase mb-2">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Lokasi Strategis di Pusat Kota</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B2119] tracking-tight text-balance">
            Tepat di Titik Nol Jantung Kota Salatiga
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B5B4D] leading-relaxed">
            Berada di pusat kota Salatiga yang sejuk dan asri, Alun-Alun Pancasila dikelilingi jalan protokol yang lebar,
            berdampingan langsung dengan Kantor Walikota, Masjid Agung, dan sentra pertokoan legendaris.
          </p>
        </div>

        {/* Location Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address Card & Surrounding Landmarks */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FCFAF6] border border-[#DECFC0] shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold text-[#78350F] uppercase tracking-wider block mb-1">
                  Alamat Lengkap
                </span>
                <p className="text-base sm:text-lg font-semibold text-[#2B2119]">
                  {fullAddress}
                </p>
                <p className="text-xs text-[#806F60] mt-1">
                  Koordinat: -7.3308° LS, 110.5084° BT · Elevasi: ±600 mdpl
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Alun-Alun+Pancasila+Salatiga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-sm font-semibold text-white bg-[#78350F] hover:bg-[#5C270A] rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer shadow-2xs"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="px-4 py-3 text-sm font-semibold text-[#2B2119] bg-[#EFE3CF] hover:bg-[#E2D5BF] border border-[#D5C4AC] rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#15803D]" />
                      <span className="text-[#15803D]">Tersalin ke Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#78350F]" />
                      <span>Salin Alamat</span>
                    </>
                  )}
                </button>
              </div>

              {/* Nearby Landmarks Strip */}
              <div className="pt-4 border-t border-[#EDE1D1]">
                <span className="text-xs font-bold text-[#544436] uppercase tracking-wider block mb-3">
                  Landmark & Titik Penting Sekitar
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#F5EDE0] border border-[#DECFC0]">
                    <span className="font-semibold text-[#2B2119] block">Masjid Agung Darul Amal</span>
                    <span className="text-[#806F60]">50 meter (Sisi Barat)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F5EDE0] border border-[#DECFC0]">
                    <span className="font-semibold text-[#2B2119] block">Kantor Walikota Salatiga</span>
                    <span className="text-[#806F60]">200 meter (Sisi Selatan)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F5EDE0] border border-[#DECFC0]">
                    <span className="font-semibold text-[#2B2119] block">Pasar Raya Salatiga</span>
                    <span className="text-[#806F60]">500 meter (Sisi Timur)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F5EDE0] border border-[#DECFC0]">
                    <span className="font-semibold text-[#2B2119] block">Exit Tol Salatiga (Tingkir)</span>
                    <span className="text-[#806F60]">10-15 menit berkendara</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Route Guide from Major Cities */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F5ECE0] border border-[#DECFC0] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-[#78350F] uppercase tracking-wider mb-2">
                <Car className="w-4 h-4 text-amber-600" />
                <span>Panduan Rute Perjalanan Luar Kota</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#2B2119] mb-4">
                Akses Mudah dari Kota Sekitar
              </h3>

              {/* City Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-[#E4D7C4] rounded-xl border border-[#D0BFAB] mb-5 shadow-2xs">
                {TRAVEL_ORIGINS.map((origin, idx) => (
                  <button
                    key={origin.city}
                    onClick={() => setActiveCityTab(idx)}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer truncate ${
                      activeCityTab === idx
                        ? 'bg-[#78350F] text-white shadow-2xs'
                        : 'text-[#5A4A3B] hover:text-[#2B2119] hover:bg-[#D8C7B2]'
                    }`}
                  >
                    {origin.city.replace('Kota ', '').replace('Kabupaten ', '')}
                  </button>
                ))}
              </div>

              {/* Active Route Details */}
              {TRAVEL_ORIGINS[activeCityTab] && (
                <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E6DDCF] space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F2ECE1]">
                    <div>
                      <span className="text-xs text-[#806F60]">Asal Perjalanan</span>
                      <p className="font-heading text-lg font-bold text-[#2B2119]">
                        {TRAVEL_ORIGINS[activeCityTab].city}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#806F60]">Estimasi Waktu</span>
                      <p className="font-heading text-base font-bold text-[#78350F] tabular-nums">
                        {TRAVEL_ORIGINS[activeCityTab].duration}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs space-y-1.5">
                    <div>
                      <span className="font-semibold text-[#544436]">Jalur Utama:</span>
                      <p className="text-[#6B5B4D] mt-0.5">{TRAVEL_ORIGINS[activeCityTab].via}</p>
                    </div>
                    <div className="pt-1">
                      <span className="font-semibold text-[#544436]">Tips Navigasi:</span>
                      <p className="text-[#6B5B4D] mt-0.5">{TRAVEL_ORIGINS[activeCityTab].routeTip}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Interactive Transport Helper */}
              <div className="mt-5 p-4 rounded-xl bg-[#FAF7F2] border border-[#E6DDCF] flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs text-[#544436]">
                  <Compass className="w-4 h-4 text-[#78350F] shrink-0" />
                  <span>Dilewati angkutan kota jalur 1, 2, 4, dan bus AKDP</span>
                </div>
                <button
                  onClick={onOpenVisitModal}
                  className="text-xs font-bold text-[#78350F] hover:underline cursor-pointer whitespace-nowrap"
                >
                  Panduan Lengkap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
