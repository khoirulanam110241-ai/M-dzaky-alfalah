import React from 'react';
import { MapPin, Navigation, Heart } from 'lucide-react';

interface FooterProps {
  onOpenVisitModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVisitModal }) => {
  return (
    <footer className="bg-[#261E17] text-[#D8CDC0] border-t border-[#3B3026] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3B3026]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-display text-2xl font-bold text-[#F4EFE6] block">
              Alun-Alun Pancasila
            </span>
            <p className="text-sm text-[#A89888] leading-relaxed max-w-sm">
              Ruang publik terbuka hijau di pusat kota Salatiga, Jawa Tengah. Destinasi favorit untuk lari pagi berhawa sejuk, rekreasi ramah anak, dan santap kuliner malam bersama keluarga.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C7B7A5] pt-1">
              <MapPin className="w-4 h-4 text-[#D97706]" />
              <span>Titik 0 Km Pusat Kota Salatiga, Jawa Tengah 50724</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#F4EFE6] uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-sm text-[#B3A393]">
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">
                  Tentang Alun-Alun
                </a>
              </li>
              <li>
                <a href="#aktivitas" className="hover:text-white transition-colors">
                  Lari Pagi & Aktivitas
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-white transition-colors">
                  Fasilitas & Lapangan
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-white transition-colors">
                  Galeri Visual
                </a>
              </li>
              <li>
                <a href="#kuliner" className="hover:text-white transition-colors">
                  Jajan UMKM Salatiga
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-white transition-colors">
                  Lokasi & Akses
                </a>
              </li>
            </ul>
          </div>

          {/* Visit Direct CTA */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-[#F4EFE6] uppercase tracking-wider">
              Rencanakan Perjalanan
            </h4>
            <p className="text-xs text-[#A89888] leading-relaxed">
              Kunjungi Alun-Alun Pancasila kapan saja. Buka 24 jam dengan tiket masuk gratis dan akses mudah dari Semarang maupun Solo.
            </p>
            <button
              onClick={onOpenVisitModal}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#854D0E] hover:bg-[#A16207] rounded-xl transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Navigation className="w-4 h-4" />
              <span>Buka Panduan Kunjungan</span>
            </button>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F7F70]">
          <p>© {new Date().getFullYear()} Destinasi Wisata Alun-Alun Pancasila Kota Salatiga.</p>
          <p className="flex items-center gap-1.5">
            <span>Dikelola untuk kemaslahatan ruang publik & warga Salatiga</span>
            <Heart className="w-3.5 h-3.5 text-[#B45309]" />
          </p>
        </div>
      </div>
    </footer>
  );
};
