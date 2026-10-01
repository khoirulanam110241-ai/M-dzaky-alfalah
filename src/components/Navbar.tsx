import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenVisitModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVisitModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E6DDCF] text-[#2B2119]'
          : 'bg-[#140F0A]/70 backdrop-blur-md border-b border-white/10 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single text element wordmark (Display face) */}
          <a
            href="#"
            className={`font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
              isScrolled
                ? 'text-[#2B2119] hover:text-[#78350F]'
                : 'text-white hover:text-amber-300'
            }`}
          >
            Alun-Alun Pancasila
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav
            className={`hidden md:flex items-center gap-7 text-sm font-medium ${
              isScrolled ? 'text-[#6B5B4D]' : 'text-[#E2D5C5]'
            }`}
          >
            <a
              href="#tentang"
              className={`transition-colors py-1 hover:border-b-2 ${
                isScrolled
                  ? 'hover:text-[#2B2119] hover:border-[#78350F]'
                  : 'hover:text-white hover:border-amber-400'
              }`}
            >
              Tentang
            </a>
            <a
              href="#agenda-meriah"
              className={`transition-colors py-1 hover:border-b-2 ${
                isScrolled
                  ? 'hover:text-[#2B2119] hover:border-[#78350F] text-amber-700 font-bold'
                  : 'hover:text-white hover:border-amber-400 text-amber-300 font-bold'
              }`}
            >
              🎉 Atraksi & Agenda
            </a>
            <a
              href="#anak-muda"
              className={`transition-colors py-1 hover:border-b-2 ${
                isScrolled
                  ? 'hover:text-[#2B2119] hover:border-[#78350F]'
                  : 'hover:text-white hover:border-amber-400'
              }`}
            >
              Spot Foto
            </a>
            <a
              href="#aktivitas"
              className={`transition-colors py-1 hover:border-b-2 ${
                isScrolled
                  ? 'hover:text-[#2B2119] hover:border-[#78350F]'
                  : 'hover:text-white hover:border-amber-400'
              }`}
            >
              Aktivitas
            </a>
            <a
              href="#fasilitas"
              className={`transition-colors py-1 hover:border-b-2 ${
                isScrolled
                  ? 'hover:text-[#2B2119] hover:border-[#78350F]'
                  : 'hover:text-white hover:border-amber-400'
              }`}
            >
              Fasilitas
            </a>
            <a
              href="#galeri"
              className={`transition-colors py-1 hover:border-b-2 ${
                isScrolled
                  ? 'hover:text-[#2B2119] hover:border-[#78350F]'
                  : 'hover:text-white hover:border-amber-400'
              }`}
            >
              Galeri
            </a>
            <a
              href="#kuliner"
              className={`transition-colors py-1 hover:border-b-2 ${
                isScrolled
                  ? 'hover:text-[#2B2119] hover:border-[#78350F]'
                  : 'hover:text-white hover:border-amber-400'
              }`}
            >
              Kuliner
            </a>
            <a
              href="#lokasi"
              className={`transition-colors py-1 hover:border-b-2 ${
                isScrolled
                  ? 'hover:text-[#2B2119] hover:border-[#78350F]'
                  : 'hover:text-white hover:border-amber-400'
              }`}
            >
              Lokasi
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenVisitModal}
              className={`px-5 py-2.5 text-sm font-semibold text-white rounded-lg shadow-xs hover:shadow-sm transition-all duration-150 whitespace-nowrap inline-flex items-center gap-2 cursor-pointer ${
                isScrolled
                  ? 'bg-[#78350F] hover:bg-[#5C270A]'
                  : 'bg-[#D97706] hover:bg-[#B45309]'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Kunjungi Sekarang</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenVisitModal}
              className={`px-3 py-1.5 text-xs font-semibold text-white rounded-md whitespace-nowrap ${
                isScrolled ? 'bg-[#78350F]' : 'bg-[#D97706]'
              }`}
            >
              Kunjungi
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-[#2B2119] hover:bg-[#EFEAE1]'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E6DDCF] px-4 pt-2 pb-6 space-y-3">
          <a
            href="#tentang"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#2B2119] hover:bg-[#F3EDE2] rounded-md"
          >
            Tentang
          </a>
          <a
            href="#agenda-meriah"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-bold text-amber-800 bg-amber-100/60 rounded-md"
          >
            🎉 Atraksi & Agenda Meriah
          </a>
          <a
            href="#anak-muda"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#2B2119] hover:bg-[#F3EDE2] rounded-md"
          >
            Spot Foto & Vibe Gen-Z
          </a>
          <a
            href="#aktivitas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#2B2119] hover:bg-[#F3EDE2] rounded-md"
          >
            Aktivitas
          </a>
          <a
            href="#fasilitas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#2B2119] hover:bg-[#F3EDE2] rounded-md"
          >
            Fasilitas
          </a>
          <a
            href="#galeri"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#2B2119] hover:bg-[#F3EDE2] rounded-md"
          >
            Galeri
          </a>
          <a
            href="#kuliner"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#2B2119] hover:bg-[#F3EDE2] rounded-md"
          >
            Kuliner & Jajan
          </a>
          <a
            href="#lokasi"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#2B2119] hover:bg-[#F3EDE2] rounded-md"
          >
            Lokasi & Rute
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVisitModal();
              }}
              className="w-full py-3 text-sm font-semibold text-white bg-[#78350F] rounded-lg flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Kunjungi Sekarang</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
