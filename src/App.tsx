/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { FactsStrip } from './components/FactsStrip.tsx';
import { FestiveEvents } from './components/FestiveEvents.tsx';
import { YouthSpotlight } from './components/YouthSpotlight.tsx';
import { Activities } from './components/Activities.tsx';
import { Facilities } from './components/Facilities.tsx';
import { Gallery } from './components/Gallery.tsx';
import { CulinarySpotlight } from './components/CulinarySpotlight.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { Footer } from './components/Footer.tsx';
import { VisitModal } from './components/VisitModal.tsx';

export default function App() {
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);

  const handleOpenVisitModal = () => {
    setIsVisitModalOpen(true);
  };

  const handleCloseVisitModal = () => {
    setIsVisitModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F2E9] text-[#2B2119] flex flex-col font-sans selection:bg-[#E8DFD3] selection:text-[#5C3317]">
      {/* Top Navigation Bar */}
      <Navbar onOpenVisitModal={handleOpenVisitModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenVisitModal={handleOpenVisitModal} />

        {/* Factual Quantitative Strip */}
        <FactsStrip />

        {/* Semarak Agenda Meriah, Atraksi Air Mancur & Roda Hoki Jajan */}
        <FestiveEvents onOpenVisitModal={handleOpenVisitModal} />

        {/* Spot Foto Estetik & Panduan Nongkrong Anak Muda */}
        <YouthSpotlight onOpenVisitModal={handleOpenVisitModal} />

        {/* Aktivitas Utama: Lari Pagi & Jajan Santai Bersama Keluarga */}
        <Activities onOpenVisitModal={handleOpenVisitModal} />

        {/* Fasilitas Lengkap & Terawat */}
        <Facilities onOpenVisitModal={handleOpenVisitModal} />

        {/* Galeri Visual Lokasi */}
        <Gallery />

        {/* Kuliner & Jajan Khas Salatiga */}
        <CulinarySpotlight onOpenVisitModal={handleOpenVisitModal} />

        {/* Lokasi di Pusat Kota Salatiga & Akses Rute */}
        <LocationSection onOpenVisitModal={handleOpenVisitModal} />
      </main>

      {/* Footer */}
      <Footer onOpenVisitModal={handleOpenVisitModal} />

      {/* Interactive Visit Modal ("Kunjungi Sekarang") */}
      <VisitModal isOpen={isVisitModalOpen} onClose={handleCloseVisitModal} />
    </div>
  );
}
