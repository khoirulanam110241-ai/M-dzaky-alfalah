import React, { useState } from 'react';
import { X, MapPin, Navigation, Clock, ShieldCheck, ThermometerSun, Check, ExternalLink, Car } from 'lucide-react';

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitModal: React.FC<VisitModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const fullAddress = 'Alun-Alun Pancasila, Jl. Brigjen Sudiarto, Kel. Kalicacing, Kec. Sidomukti, Kota Salatiga, Jawa Tengah 50724';

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E6DDCF] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-[#F4EFE6] border-b border-[#E6DDCF] flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-[#78350F] uppercase tracking-wider block">
              Panduan Perjalanan
            </span>
            <h3 className="font-display text-2xl font-bold text-[#2B2119]">
              Kunjungi Alun-Alun Pancasila
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6B5B4D] hover:text-[#2B2119] hover:bg-[#EBE4D6] rounded-lg transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Quick Summary Cards */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E6DDCF]">
              <div className="flex items-center gap-1.5 text-[#78350F] font-semibold mb-1">
                <Clock className="w-4 h-4" />
                <span>Jam Buka</span>
              </div>
              <p className="font-bold text-[#2B2119]">24 Jam Non-Stop</p>
              <p className="text-[#806F60] mt-0.5">Tiket masuk 100% Gratis</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E6DDCF]">
              <div className="flex items-center gap-1.5 text-[#78350F] font-semibold mb-1">
                <ThermometerSun className="w-4 h-4" />
                <span>Karakter Cuaca</span>
              </div>
              <p className="font-bold text-[#2B2119]">21°–25°C Sejuk</p>
              <p className="text-[#806F60] mt-0.5">Disarankan jaket tipis saat malam</p>
            </div>
          </div>

          {/* Lokasi & Navigasi */}
          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E6DDCF] space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#78350F] uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Lokasi Titik Nol Salatiga</span>
            </div>
            <p className="text-sm font-medium text-[#2B2119] leading-relaxed">
              {fullAddress}
            </p>
            <p className="text-xs text-[#806F60]">
              Bersebelahan dengan Masjid Agung Darul Amal & Kantor Walikota Salatiga.
            </p>
          </div>

          {/* Panduan Parkir & Transportasi */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#544436] uppercase tracking-wider flex items-center gap-1.5">
              <Car className="w-4 h-4 text-[#78350F]" />
              <span>Titik Parkir Resmi</span>
            </h4>
            <ul className="text-xs text-[#6B5B4D] space-y-1.5 bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E6DDCF]">
              <li className="flex items-start gap-2">
                <span className="text-[#78350F] font-bold">·</span>
                <span><strong>Roda Dua (Motor):</strong> Tersedia di sepanjang perimeter Jalan Brigjen Sudiarto sisi utara & timur. Tarif resmi Rp 2.000.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#78350F] font-bold">·</span>
                <span><strong>Roda Empat (Mobil):</strong> Area parkir paralel teratur di jalan lingkar luar dan kantong parkir depan kompleks kantor pemerintah.</span>
              </li>
            </ul>
          </div>

          {/* Tata Tertib Sederhana */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#544436] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#78350F]" />
              <span>Etika Berkunjung</span>
            </h4>
            <div className="text-xs text-[#6B5B4D] bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E6DDCF] space-y-1">
              <p>✓ Buanglah sampah pada tempat sampah pilah yang telah disediakan di tiap 20 meter.</p>
              <p>✓ Jalur jogging track dikhususkan bagi yang berlari dan jalan kaki (dilarang sepeda/sepatu roda di track karet).</p>
              <p>✓ Jagalah kenyamanan dan kesopanan saat waktu ibadah shalat di Masjid Agung.</p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#F4EFE6] border-t border-[#E6DDCF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#2B2119] bg-[#EFE9DF] hover:bg-[#E5DDCF] border border-[#DDD3C2] rounded-xl transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#15803D]" />
                <span className="text-[#15803D]">Alamat Tersalin</span>
              </>
            ) : (
              <span>Salin Alamat</span>
            )}
          </button>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Alun-Alun+Pancasila+Salatiga"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#78350F] hover:bg-[#5C270A] rounded-xl shadow-xs transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <Navigation className="w-4 h-4" />
            <span>Navigasi Langsung (Google Maps)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
};
