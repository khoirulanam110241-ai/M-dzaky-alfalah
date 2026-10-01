import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Music, Waves, PartyPopper, Calendar, Clock, Trophy, RefreshCw, Flame, ChevronRight, Volume2, VolumeX } from 'lucide-react';

interface FestiveEventsProps {
  onOpenVisitModal: () => void;
}

export const FestiveEvents: React.FC<FestiveEventsProps> = ({ onOpenVisitModal }) => {
  // Wheel states
  const [spinning, setSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState<string | null>(null);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [activeTab, setActiveTab] = useState<'events' | 'spinner' | 'crowd'>('events');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const wheelItems = [
    { name: 'Wedang Ronde Jahe Komplit', color: '#D97706', tag: 'Hangat Gurih' },
    { name: 'Jagung Bakar Keju Pedas', color: '#B45309', tag: 'Aroma Arang' },
    { name: 'Bakso Babat Salatiga', color: '#78350F', tag: 'Paling Kenyang' },
    { name: 'Es Coklat Roti Jadul', color: '#D97706', tag: 'Manis Lumer' },
    { name: 'Tahu Bakso Crispy Panas', color: '#B45309', tag: 'Camilan Favorit' },
    { name: 'Siomay Bumbu Kacang', color: '#78350F', tag: 'Bumbu Medok' },
    { name: 'Serabi Solo Pandan Keju', color: '#D97706', tag: 'Lumer Manis' },
    { name: 'Susu Jahe + Pisang Aroma', color: '#B45309', tag: 'Penghangat Malam' },
  ];

  // Play synthesized celebratory chime sound via Web Audio API
  const playWinChime = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 chord arpeggio
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.15, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.6);
      });
    } catch {
      // Audio autoplay policy fallback
    }
  };

  // Confetti Particle System on Win
  const triggerConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const colors = ['#F59E0B', '#EF4444', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#FBBF24'];
    interface Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      vx: number;
      vy: number;
      rotation: number;
      vRot: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.7) * 16,
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10
      });
    }

    let animationFrameId: number;
    let frame = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.rotation += p.vRot;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });

      frame++;
      if (frame < 120) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  };

  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);
    setSpinResult(null);

    // Pick random index
    const randomIndex = Math.floor(Math.random() * wheelItems.length);
    const itemAngle = 360 / wheelItems.length;
    // Calculate final rotation (multiple full spins + align slice to top indicator)
    const extraRotations = 5 * 360;
    const targetSliceAngle = 360 - (randomIndex * itemAngle + itemAngle / 2);
    const totalRotation = wheelRotation + extraRotations + (targetSliceAngle - (wheelRotation % 360));

    setWheelRotation(totalRotation);

    setTimeout(() => {
      setSpinning(false);
      setSpinResult(wheelItems[randomIndex].name);
      playWinChime();
      triggerConfetti();
    }, 3200);
  };

  const festiveEvents = [
    {
      id: 'fountain',
      title: 'Atraksi Air Mancur Menari Spektakuler',
      schedule: 'Jumat & Sabtu · Pukul 19.30 & 20.30 WIB',
      badge: 'Atraksi Ikonik',
      badgeColor: 'bg-emerald-500 text-white',
      desc: 'Semburan air setinggi 12 meter menari dinamis diiringi tata cahaya LED warna-warni dan alunan musik instrumen. Spot tontonan paling meriah di depan Monumen Gunungan!',
      tip: 'Ambil posisi di sisi timur kolam air mancur untuk sudut pandang terbaik.',
      icon: Waves,
      image: '/src/assets/images/monumen_pancasila_air_mancur_1790734868643.jpg'
    },
    {
      id: 'festival-malam',
      title: 'Pasar Malam UMKM & Wahana Mobil Gowes LED',
      schedule: 'Setiap Hari · Pukul 17.00 – 23.00 WIB',
      badge: 'Paling Ramai',
      badgeColor: 'bg-amber-500 text-stone-950 font-bold',
      desc: 'Keriaan malam penuh lampu gantung, deretan 50+ stan jajanan khas, serta mobil kayuh hias berlampu neon warna-warni memutari lingkar pedestrian.',
      tip: 'Tarif sewa mobil hias gowes Rp 25.000 – Rp 35.000 per putaran puas keliling bersama bestie/keluarga.',
      icon: PartyPopper,
      image: '/src/assets/images/festival_meriah_alun_alun_1790736338150.jpg'
    },
    {
      id: 'cfd',
      title: 'Car Free Day (CFD) Akbar Salatiga',
      schedule: 'Setiap Minggu Pagi · 06.00 – 09.00 WIB',
      badge: 'Agenda Mingguan',
      badgeColor: 'bg-blue-600 text-white',
      desc: 'Pesta olahraga dan kuliner rakyat terbesar se-Salatiga! Seluruh jalan lingkar alun-alun bebas kendaraan, ada panggung senam Zumba massal, komunitas hobi, dan ratusan kuliner sarapan.',
      tip: 'Datang sebelum pukul 06.30 WIB untuk menikmati jalanan luas yang sejuk dan belum terlalu padat.',
      icon: Calendar,
      image: '/src/assets/images/jogging_track_pancasila_asli_1790734881496.jpg'
    },
    {
      id: 'acoustic',
      title: 'Pentas Akustik Senja & Panggung Terbuka',
      schedule: 'Malam Akhir Pekan · Pukul 19.00 – 21.30 WIB',
      badge: 'Live Performance',
      badgeColor: 'bg-purple-600 text-white',
      desc: 'Musisi lokal Salatiga membawakan lagu-lagu hits pop akustik dan lagu daerah modern di panggung sayap timur, menciptakan atmosfer syahdu nan meriah di bawah langit malam.',
      tip: 'Nikmati live music sambil menyantap semangkuk ronde hangat di bangku taman.',
      icon: Music,
      image: '/src/assets/images/hero_banner_alun_alun_malam_1790735251570.jpg'
    }
  ];

  const crowdLevels = [
    { time: '05.30 – 08.00 WIB', status: 'Segar & Berenergi', crowd: '65%', desc: 'Komunitas pelari pagi, jalan santai, senam lansia, dan udara sejuk Merbabu.' },
    { time: '09.00 – 15.00 WIB', status: 'Teduh & Rileks', crowd: '35%', desc: 'Warga bersantai di bawah pohon rindang, makan siang kuliner barat, dan istirahat sejenak.' },
    { time: '16.00 – 18.00 WIB', status: 'Ramai Menyenangkan', crowd: '85%', desc: 'Golden hour sunset, anak muda nongkrong hunting foto, dan keluarga berolahraga sore.' },
    { time: '18.30 – 22.00 WIB', status: '🎉 Puncak Sangat Meriah!', crowd: '98%', desc: 'Lampu landmark menyala penuh, air mancur atraksi, mobil gowes hias, dan pesta kuliner malam.' }
  ];

  return (
    <section id="agenda-meriah" className="relative py-20 md:py-28 bg-gradient-to-b from-[#1E160F] via-[#2A1D13] to-[#1E160F] text-white border-y border-[#3E2D1E] overflow-hidden">
      {/* Decorative Overhead Festival Fairy String Lights */}
      <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none overflow-hidden z-10 opacity-90">
        <svg className="w-full h-16" preserveAspectRatio="none" viewBox="0 0 1200 60">
          {/* Wire catenary curve */}
          <path d="M0,10 Q300,35 600,10 Q900,35 1200,10" fill="none" stroke="#665038" strokeWidth="2" />
          {/* Glowing bulbs */}
          {[60, 140, 220, 300, 380, 460, 540, 620, 700, 780, 860, 940, 1020, 1100, 1180].map((cx, i) => {
            const cy = 10 + 20 * Math.sin(((cx % 600) / 600) * Math.PI);
            const bulbColors = ['#F59E0B', '#EF4444', '#10B981', '#38BDF8', '#FBBF24', '#EC4899'];
            const color = bulbColors[i % bulbColors.length];
            return (
              <g key={i}>
                <line x1={cx} y1={cy} x2={cx} y2={cy + 8} stroke="#443222" strokeWidth="2" />
                <circle cx={cx} cy={cy + 12} r="5" fill={color} filter="drop-shadow(0 0 6px rgba(251,191,36,0.8))" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Semarak Pesta Rakyat Kota Salatiga</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">
              Agenda Meriah & Atraksi Seru
            </h2>
            <p className="mt-3 text-base text-[#D8CCC0] leading-relaxed">
              Alun-Alun Pancasila selalu berdenyut riang! Rasakan gemerlap pertunjukan air mancur menari berlampu warna-warni, keriaan mobil gowes lampu kelap-kelip, hingga permainan putar roda hoki kuliner.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-black/40 backdrop-blur-md rounded-xl border border-white/15 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('events')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'events'
                  ? 'bg-amber-400 text-stone-950 font-bold shadow-md'
                  : 'text-[#E2D5C5] hover:text-white hover:bg-white/10'
              }`}
            >
              <PartyPopper className="w-4 h-4" />
              <span>4 Atraksi Meriah</span>
            </button>
            <button
              onClick={() => setActiveTab('spinner')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'spinner'
                  ? 'bg-amber-400 text-stone-950 font-bold shadow-md'
                  : 'text-[#E2D5C5] hover:text-white hover:bg-white/10'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Roda Hoki Jajan</span>
            </button>
            <button
              onClick={() => setActiveTab('crowd')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'crowd'
                  ? 'bg-amber-400 text-stone-950 font-bold shadow-md'
                  : 'text-[#E2D5C5] hover:text-white hover:bg-white/10'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>Jam Keramaian</span>
            </button>
          </div>
        </div>

        {/* Tab 1: 4 Atraksi Meriah Cards */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {festiveEvents.map((evt) => {
              const Icon = evt.icon;
              return (
                <div
                  key={evt.id}
                  className="rounded-2xl overflow-hidden bg-black/40 border border-white/15 shadow-xl hover:border-amber-400/60 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#241A12]">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${evt.badgeColor} shadow-xs`}>
                        {evt.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-xs text-amber-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 w-fit">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="font-semibold">{evt.schedule}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-5 h-5 text-amber-400" />
                        <h3 className="font-display text-xl font-bold text-white">
                          {evt.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#D8CCC0] leading-relaxed">
                        {evt.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3 text-xs text-amber-200">
                      <span className="italic">💡 {evt.tip}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Roda Hoki Jajan Meriah (Interactive Lucky Spinner) */}
        {activeTab === 'spinner' && (
          <div className="relative bg-gradient-to-br from-[#261A10] to-[#17100B] rounded-3xl border border-amber-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden">
            {/* Confetti canvas overlay */}
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-30 w-full h-full" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Spinner Wheel Graphic (Col 6) */}
              <div className="lg:col-span-6 flex flex-col items-center">
                <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center">
                  {/* Outer glowing ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-amber-400/40 shadow-[0_0_35px_rgba(245,158,11,0.25)] animate-pulse" />

                  {/* Top Pointer Arrow */}
                  <div className="absolute -top-3 z-20 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[24px] border-t-amber-400 filter drop-shadow(0 2px 4px rgba(0,0,0,0.8))" />

                  {/* SVG Wheel */}
                  <svg
                    viewBox="0 0 300 300"
                    className="w-full h-full transition-transform duration-[3200ms] ease-out rounded-full"
                    style={{
                      transform: `rotate(${wheelRotation}deg)`
                    }}
                  >
                    {wheelItems.map((item, idx) => {
                      const totalSlices = wheelItems.length;
                      const sliceAngle = 360 / totalSlices;
                      const startAngle = idx * sliceAngle;
                      const endAngle = (idx + 1) * sliceAngle;
                      const startRad = (startAngle * Math.PI) / 180;
                      const endRad = (endAngle * Math.PI) / 180;

                      // Coordinates for pie slice
                      const x1 = 150 + 140 * Math.cos(startRad);
                      const y1 = 150 + 140 * Math.sin(startRad);
                      const x2 = 150 + 140 * Math.cos(endRad);
                      const y2 = 150 + 140 * Math.sin(endRad);

                      const midRad = ((startAngle + sliceAngle / 2) * Math.PI) / 180;
                      const textX = 150 + 85 * Math.cos(midRad);
                      const textY = 150 + 85 * Math.sin(midRad);
                      const textAngle = startAngle + sliceAngle / 2;

                      const colors = ['#78350F', '#92400E', '#B45309', '#D97706', '#78350F', '#92400E', '#B45309', '#D97706'];
                      const sliceFill = colors[idx % colors.length];

                      return (
                        <g key={idx}>
                          <path
                            d={`M150,150 L${x1},${y1} A140,140 0 0,1 ${x2},${y2} Z`}
                            fill={sliceFill}
                            stroke="#3A2819"
                            strokeWidth="2"
                          />
                          <text
                            x={textX}
                            y={textY}
                            fill="#FFFFFF"
                            fontSize="9"
                            fontWeight="bold"
                            textAnchor="middle"
                            dominantBaseline="central"
                            transform={`rotate(${textAngle + 90}, ${textX}, ${textY})`}
                          >
                            {item.name.split(' ')[0]} {item.name.split(' ')[1] || ''}
                          </text>
                        </g>
                      );
                    })}

                    {/* Wheel Center Peg */}
                    <circle cx="150" cy="150" r="28" fill="#1C140C" stroke="#F59E0B" strokeWidth="4" />
                    <circle cx="150" cy="150" r="12" fill="#D97706" />
                  </svg>
                </div>

                {/* Spin Button */}
                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={handleSpin}
                    disabled={spinning}
                    className={`px-8 py-4 rounded-2xl text-base font-bold transition-all shadow-xl flex items-center gap-2.5 cursor-pointer ${
                      spinning
                        ? 'bg-amber-600/50 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 hover:brightness-110 active:scale-95 shadow-amber-500/25 ring-4 ring-amber-400/20'
                    }`}
                  >
                    <RefreshCw className={`w-5 h-5 ${spinning ? 'animate-spin' : ''}`} />
                    <span>{spinning ? 'Roda Berputar...' : 'PUTAR RODA JAJAN!'}</span>
                  </button>

                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10"
                    title={soundEnabled ? 'Matikan Suara Kemenangan' : 'Nyalakan Suara Kemenangan'}
                  >
                    {soundEnabled ? <Volume2 className="w-5 h-5 text-amber-300" /> : <VolumeX className="w-5 h-5 text-stone-400" />}
                  </button>
                </div>
              </div>

              {/* Spin Result & Explanations (Col 6) */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>Tantangan Kuliner Seru Bareng Teman</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Bingung Mau Jajan Apa Malam Ini?
                </h3>
                <p className="text-sm text-[#D8CCC0] leading-relaxed">
                  Putar roda di samping untuk mendapatkan rekomendasi kuliner acak khas Alun-Alun Salatiga. Ajak bestie, doi, atau keluargamu buat ikut tantangan jajan yang keluar dari roda hoki!
                </p>

                {/* Result Announcement Box */}
                {spinResult ? (
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-600/15 to-transparent border-2 border-amber-400/80 animate-fade-in space-y-2">
                    <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block">
                      🎉 REKOMENDASI TERPILIH UNTUKMU:
                    </span>
                    <div className="text-2xl sm:text-3xl font-bold text-white font-display">
                      {spinResult}
                    </div>
                    <p className="text-xs text-[#E0D4C5]">
                      Langsung meluncur ke stan Pujasera sisi barat atau timur alun-alun. Dijamin mantap disantap selagi hangat!
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={onOpenVisitModal}
                        className="px-4 py-2 text-xs font-bold bg-amber-400 text-stone-950 rounded-lg inline-flex items-center gap-1.5 hover:bg-amber-300 transition-colors"
                      >
                        <span>Cek Rute Menuju Stan Pujasera</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 rounded-2xl bg-black/40 border border-white/10 text-xs text-[#C5B5A4] flex items-center gap-3">
                    <RefreshCw className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Klik tombol kuning di samping untuk memutar roda hoki dan temukan kejutan jajan malam ini!</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Jam Keramaian Real-Time (Crowd Heatmap) */}
        {activeTab === 'crowd' && (
          <div className="bg-black/40 rounded-3xl border border-white/15 p-6 sm:p-8 shadow-xl">
            <div className="max-w-2xl mb-8">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Indikator Ritme & Suasana Warga Salatiga</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Kapan Waktu Paling Asyik Berkunjung?
              </h3>
              <p className="text-sm text-[#D8CCC0] mt-1">
                Pilih jam yang sesuai dengan rencanamu, dari yang ingin berolahraga tenang berhawa segar hingga yang mencari keriaan pasar malam semarak:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {crowdLevels.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    idx === 3
                      ? 'bg-amber-500/15 border-amber-400/60 shadow-lg shadow-amber-500/10'
                      : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-amber-300">{item.time}</span>
                    <span className="font-bold px-2 py-0.5 rounded-full bg-white/10 text-white text-[11px]">
                      {item.crowd}
                    </span>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-white mb-1.5">
                    {item.status}
                  </h4>
                  <p className="text-xs text-[#C5B5A4] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
