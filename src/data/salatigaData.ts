export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  bestTime: string;
  tips: string[];
  image: string;
  highlights: string[];
}

export interface FacilityItem {
  id: string;
  title: string;
  category: 'Olahraga' | 'Kenyamanan' | 'Fasilitas Umum' | 'Aksesibilitas';
  description: string;
  spec: string;
  iconName: string;
}

export interface CulinaryItem {
  id: string;
  name: string;
  type: string;
  category: 'sarapan' | 'camilan' | 'malam';
  description: string;
  priceRange: string;
  popularPairing: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'lari-pagi' | 'kuliner' | 'arsitektur' | 'malam';
  categoryLabel: string;
  caption: string;
  timeLabel: string;
  image: string;
}

export interface TravelOrigin {
  city: string;
  distance: string;
  duration: string;
  via: string;
  routeTip: string;
}

export const ACTIVITIES_DATA: ActivityItem[] = [
  {
    id: 'lari-pagi',
    title: 'Lari Pagi & Olahraga Segar',
    category: 'Kebugaran',
    tagline: 'Mulai pagi Anda dengan udara pegunungan yang bersih dan sejuk di kaki Merbabu',
    description: 'Alun-Alun Pancasila menjadi magnet bagi ribuan pegiat lari pagi setiap hari, khususnya akhir pekan. Lintasan jogging track melingkari area hijau dengan permukaan yang ramah lutut, dikelilingi pepohonan rindang penyuplai oksigen murni.',
    bestTime: '05.30 – 08.30 WIB',
    tips: [
      'Waktu terbaik mulai pukul 06.00 saat sinar matahari pagi hangat menyapa',
      'Tersedia titik stretching dan calisthenics di sisi barat lapangan',
      'Setiap Minggu pagi diselenggarakan senam kebugaran bersama gratis'
    ],
    image: '/src/assets/images/jogging_track_pancasila_asli_1790734881496.jpg',
    highlights: ['Track lari 400m terstandar', 'Udara sejuk 20°–24°C', 'Senam minggu pagi', 'Komunitas pelari ramah']
  },
  {
    id: 'jajan-santai',
    title: 'Jajan Santai Bersama Keluarga',
    category: 'Kuliner & Keluarga',
    tagline: 'Surga kuliner UMKM khas Salatiga yang memanjakan lidah seluruh anggota keluarga',
    description: 'Setelah berolahraga atau saat nyore santai, puluhan gerobak kuliner tertata rapi siap menyajikan aneka sajian khas. Mulai dari Wedang Ronde hangat aromatik, Jagung Bakar aneka rasa, Bakso Babat gurih, hingga aneka street food kekinian yang higienis dan terjangkau.',
    bestTime: '15.30 – 22.00 WIB (Puncak keramaian sore & malam)',
    tips: [
      'Coba Wedang Ronde tradisional dengan kuah jahe rempah asli yang menghangatkan',
      'Area tempat duduk pedestrian dilengkapi bangku kayu rindang di bawah payung taman',
      'Bawa uang tunai pecahan kecil atau gunakan QRIS untuk kemudahan transaksi UMKM'
    ],
    image: '/src/assets/images/family_culinary_streetfood_1790733941388.jpg',
    highlights: ['50+ gerobak UMKM', 'Wedang Ronde legendaris', 'Bangku santai beratap teduh', 'Sistem bayar QRIS merata']
  },
  {
    id: 'rekreasi-anak',
    title: 'Rekreasi & Wahana Bermain Anak',
    category: 'Keluarga',
    tagline: 'Ruang lapang yang aman dan gembira bagi tumbuh kembang si kecil',
    description: 'Hamparan rumput hijau yang luas dan plaza berlantai batu paving memberikan ruang leluasa bagi anak-anak untuk berlari, bermain sepeda roda tiga, hingga menikmati wahana mini dalam pengawasan orang tua yang santai.',
    bestTime: '06.30 – 10.00 WIB & 16.00 – 18.00 WIB',
    tips: [
      'Area tengah rumput bebas dari kendaraan bermotor sehingga sangat aman untuk balita',
      'Tersedia penjual gelembung sabun, balon terbang, dan layangan mini saat cuaca cerah',
      'Awasi anak tetap berada di batas pagar pembatas tanaman hijau'
    ],
    image: '/src/assets/images/Alun-Alun_Pancasila_Salatiga_2.jpg',
    highlights: ['Area pedestrian bebas kendaraan', 'Penyewaan mobil mini edukatif', 'Ruang hijau terbuka', 'Ramah stroller bayi']
  },
  {
    id: 'wisata-malam',
    title: 'Pesona Monumen Gunungan & Air Mancur',
    category: 'Ikon Wisata Kota',
    tagline: 'Arsitektur khas gunungan wayang dengan patung tiga pahlawan dan air mancur menari',
    description: 'Monumen bersejarah berbentuk Gunungan Wayang dengan ornamen emas lambang Garuda Pancasila dan patung tiga pahlawan nasional (Brigjen Sudiarto, Yos Sudarso, Agustinus Adisucipto) berdiri megah diiringi gemercik air mancur yang menyejukkan.',
    bestTime: 'Sepanjang Hari & Senja Pukul 16.00 – 21.00 WIB',
    tips: [
      'Spot foto paling estetik tepat di depan kolam air mancur dengan latar tugu gunungan',
      'Kenakan jaket tipis saat malam hari karena udara Salatiga cukup sejuk',
      'Duduk santai di bangku pedestrian bertingkat menikmati semilir angin sejuk'
    ],
    image: '/src/assets/images/monumen_pancasila_air_mancur_1790734868643.jpg',
    highlights: ['Bentuk gunungan wayang khas Jawa', 'Patung 3 pahlawan nasional', 'Air mancur menari', 'Spot foto terpopuler']
  }
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'jogging-track',
    title: 'Jogging Track Sintetis',
    category: 'Olahraga',
    description: 'Lintasan lari mengelilingi alun-alun dengan lapisan karet sintetis empuk yang melindungi persendian pelari.',
    spec: 'Keliling 400 meter · 3 lajur pelari & pejalan kaki',
    iconName: 'Footprints'
  },
  {
    id: 'monumen-pancasila',
    title: 'Tugu Pancasila & Garuda Emas',
    category: 'Fasilitas Umum',
    description: 'Monumen bersejarah ikonik di titik tengah alun-alun sebagai lambang persatuan dan kebanggaan warga Salatiga.',
    spec: 'Ketinggian 17 meter · Lampu sorot LED malam',
    iconName: 'Landmark'
  },
  {
    id: 'sentra-kuliner',
    title: 'Pujasera UMKM Terpadu',
    category: 'Kenyamanan',
    description: 'Zona khusus puluhan pedagang kuliner tradisional dan modern tertata bersih dengan standar sanitasi terjaga.',
    spec: '50+ stan makanan · Tersedia tempat duduk & tempat sampah terpilah',
    iconName: 'Utensils'
  },
  {
    id: 'masjid-agung',
    title: 'Akses Masjid Agung Darul Amal',
    category: 'Fasilitas Umum',
    description: 'Berdampingan langsung dengan masjid raya kebanggaan Salatiga untuk kemudahan ibadah shalat berjamaah.',
    spec: 'Berjarak 50 meter · Jalur penyeberangan aman',
    iconName: 'Building'
  },
  {
    id: 'bangku-taman',
    title: 'Bangku Pedestrian & Pohon Trembesi',
    category: 'Kenyamanan',
    description: 'Deretan kursi taman kayu ergonomis dinaungi pohon-pohon peneduh raksasa yang menyaring terik matahari.',
    spec: '60+ titik bangku · Tempat duduk santai berundak',
    iconName: 'Trees'
  },
  {
    id: 'toilet-wudhu',
    title: 'Toilet Bersih & Titik Cuci Tangan',
    category: 'Fasilitas Umum',
    description: 'Fasilitas sanitasi yang rutin dibersihkan oleh petugas dinas kebersihan lengkap dengan sabun dan wastafel.',
    spec: 'Toilet pria/wanita terpisah · Air pegunungan segar',
    iconName: 'Bath'
  },
  {
    id: 'parkir-terpadu',
    title: 'Kantong Parkir Terkelola',
    category: 'Aksesibilitas',
    description: 'Area parkir resmi di sepanjang perimeter jalan luar dengan penjagaan juru parkir berseragam resmi.',
    spec: 'Kapasitas 300+ motor · 80+ mobil',
    iconName: 'Car'
  },
  {
    id: 'jalur-difabel',
    title: 'Ramp Akses Ramah Difabel',
    category: 'Aksesibilitas',
    description: 'Tersedia ramp landai di setiap sudut pintu masuk alun-alun untuk kenyamanan pengguna kursi roda dan stroller bayi.',
    spec: 'Kemiringan standar · Guiding block difabel netra',
    iconName: 'Accessibility'
  }
];

export const CULINARY_DATA: CulinaryItem[] = [
  {
    id: 'wedang-ronde',
    name: 'Wedang Ronde Khas Salatiga',
    type: 'Minuman Hangat Tradisional',
    category: 'camilan',
    description: 'Bulatan ketan kenyal berisi tumbukan kacang tanah gurih manis, disiram kuah jahe kental wangi serai dan kolang-kaling.',
    priceRange: 'Rp 8.000 – Rp 12.000',
    popularPairing: 'Nikmat disantap bersama jagung bakar atau tahu goreng'
  },
  {
    id: 'jagung-bakar',
    name: 'Jagung Bakar Serut & Tongkol',
    type: 'Camilan Malam Santai',
    category: 'malam',
    description: 'Jagung manis lokal pilihan dipanggang langsung di atas arang dengan olesan bumbu mentega, manis pedas, atau keju gurih.',
    priceRange: 'Rp 10.000 – Rp 15.000',
    popularPairing: 'Cocok dinikmati sambil ngobrol santai keluarga di bangku taman'
  },
  {
    id: 'bakso-babat',
    name: 'Bakso Babat & Mie Hangat',
    type: 'Makanan Utama Berkuah',
    category: 'sarapan',
    description: 'Bakso daging sapi asli kenyal dengan irisan babat lembut serta kuah kaldu sapi bening gurih khas Salatiga.',
    priceRange: 'Rp 15.000 – Rp 22.000',
    popularPairing: 'Menu pemulih energi paling favorit setelah sesi lari pagi'
  },
  {
    id: 'sate-sapi-suruh',
    name: 'Sate Sapi Bumbu Manis Rempah',
    type: 'Kuliner Khas Legendaris',
    category: 'malam',
    description: 'Daging sapi empuk tanpa lemak yang dibumbui rempah ketumbar dan gula aren, disajikan dengan lontong lembut.',
    priceRange: 'Rp 25.000 – Rp 35.000 / porsi',
    popularPairing: 'Santap bersama lontong dan acar bawang merah segar'
  },
  {
    id: 'tahu-serabi',
    name: 'Tahu Bakso & Serabi Solo Hangat',
    type: 'Jajan Tradisional',
    category: 'camilan',
    description: 'Tahu cokelat gurih isi adonan daging sapi kukus/goreng serta serabi manis lembut rasa kelapa gurih.',
    priceRange: 'Rp 3.000 – Rp 8.000 / biji',
    popularPairing: 'Camilan wajib tentengan keluarga saat duduk santai sore'
  },
  {
    id: 'kopi-teh-tarik',
    name: 'Kopi Tubruk & Teh Jahe Rempah',
    type: 'Minuman Tradisional & Kopi',
    category: 'sarapan',
    description: 'Kopi robusta lereng Gunung Kelir Salatiga diseduh panas dengan aroma khas yang memicu semangat pagi.',
    priceRange: 'Rp 5.000 – Rp 10.000',
    popularPairing: 'Teman setia para pelari pagi dan penikmat angin sore'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g-tugu-masjid',
    title: 'Monumen Gunungan Pancasila & Masjid Agung',
    category: 'arsitektur',
    categoryLabel: 'Foto Asli Lokasi',
    caption: 'Tugu Pancasila berbentuk gunungan wayang yang megah berdiri di tengah plaza berlantai batu, dengan kubah dan menara Masjid Agung Darul Amal Salatiga di latar belakang.',
    timeLabel: 'Suasana Nyata Salatiga',
    image: '/src/assets/images/Alun-Alun_Pancasila_Kota_Salatiga.jpg'
  },
  {
    id: 'g-air-mancur',
    title: 'Kolam Air Mancur & Patung Pahlawan Nasional',
    category: 'arsitektur',
    categoryLabel: 'Ikon Monumen',
    caption: 'Air mancur menari di depan tugu berornamen emas Garuda dan patung Brigjen Sudiarto, Yos Sudarso, serta Adisucipto.',
    timeLabel: 'Siang Hari Cerah',
    image: '/src/assets/images/monumen_pancasila_air_mancur_1790734868643.jpg'
  },
  {
    id: 'g-jogging',
    title: 'Lintasan Lari Pagi & Jogging Track',
    category: 'lari-pagi',
    categoryLabel: 'Lari Pagi',
    caption: 'Warga Salatiga rutin menjaga kebugaran di lintasan lari sintetis merah dengan latar belakang pepohonan asri dan hawa sejuk.',
    timeLabel: 'Pagi Hari (06.30 WIB)',
    image: '/src/assets/images/jogging_track_pancasila_asli_1790734881496.jpg'
  },
  {
    id: 'g-kuliner',
    title: 'Kehangatan Jajan Santai Bersama Keluarga',
    category: 'kuliner',
    categoryLabel: 'Kuliner & Keluarga',
    caption: 'Keluarga berkumpul menikmati semangkuk Wedang Ronde hangat jahe dan jagung bakar aromatik di area pedestrian.',
    timeLabel: 'Sore Hari (17.30 WIB)',
    image: '/src/assets/images/family_culinary_streetfood_1790733941388.jpg'
  },
  {
    id: 'g-lansekap',
    title: 'Hamparan Ruang Terbuka Hijau Pusat Kota',
    category: 'arsitektur',
    categoryLabel: 'Lansekap',
    caption: 'Sudut pandang luas lapangan terbuka hijau yang asri dan sejuk di titik nol pusat kota Salatiga.',
    timeLabel: 'Pagi Hari',
    image: '/src/assets/images/Alun-Alun_Pancasila_Salatiga_2.jpg'
  }
];

export const TRAVEL_ORIGINS: TravelOrigin[] = [
  {
    city: 'Kota Semarang',
    distance: '±48 km',
    duration: '45 – 55 Menit',
    via: 'Tol Semarang - Solo (Keluar Exit Tol Bawen atau Salatiga)',
    routeTip: 'Keluar di Exit Tol Salatiga (Tingkir), lalu ikuti Jl. Jenderal Sudirman lurus menuju pusat kota.'
  },
  {
    city: 'Kota Solo (Surakarta)',
    distance: '±52 km',
    duration: '50 – 60 Menit',
    via: 'Tol Solo - Semarang (Keluar Exit Tol Salatiga)',
    routeTip: 'Akses sangat mulus via tol, langsung terhubung ke jalan protokol kota Salatiga.'
  },
  {
    city: 'Ambarawa & Bandungan',
    distance: '±18 km',
    duration: '25 – 30 Menit',
    via: 'Jalan Raya Utama Ambarawa - Salatiga',
    routeTip: 'Melewati panorama Danau Rawa Pening dengan pemandangan pegunungan yang asri.'
  },
  {
    city: 'Kabupaten Boyolali',
    distance: '±22 km',
    duration: '30 Menit',
    via: 'Jalan Nasional Boyolali - Salatiga',
    routeTip: 'Jalur jalan lebar dengan hawa sejuk di antara lereng Gunung Merapi dan Merbabu.'
  }
];

export const TIME_SLOTS = [
  {
    id: 'pagi',
    label: 'Pagi Hari (05.30 – 09.00)',
    title: 'Waktu Emas Lari Pagi & Sarapan Hangat',
    desc: 'Waktu terbaik untuk joging, lari maraton mini, senam santai, dan menikmati sarapan soto/bubur ayam serta udara terbersih di Salatiga.',
    crowd: 'Ramai pegiat olahraga',
    weather: '19°C – 22°C (Sejuk Segar)',
    activitySuggestion: 'Lari 3–5 putaran di track sintetis, peregangan di bawah pohon trembesi, lalu sarapan Wedang Ronde atau Bakso Babat.'
  },
  {
    id: 'sore',
    label: 'Sore Hari (15.30 – 18.00)',
    title: 'Nyore Teduh & Rekreasi Bersama Keluarga',
    desc: 'Matahari mulai teduh, angin sepoi-sepoi berhembus. Ideal untuk mengajak anak bermain, jalan santai sore, dan menikmati camilan serabi manis.',
    crowd: 'Didominasi keluarga & anak-anak',
    weather: '23°C – 25°C (Teduh Nyaman)',
    activitySuggestion: 'Duduk santai di bangku taman, memotret anak bermain di lapangan rumput, membeli jagung bakar manis.'
  },
  {
    id: 'malam',
    label: 'Malam Hari (18.30 – 22.00)',
    title: 'Jelajah Kuliner Malam & Suasana Kota Romantis',
    desc: 'Lampu temaram mulai menyala, semerbak aroma jahe ronde dan sate sapi bakar mengisi udara malam Salatiga yang dingin syahdu.',
    crowd: 'Santai & hangat berkumpul',
    weather: '20°C – 22°C (Sejuk Dingin)',
    activitySuggestion: 'Nongkrong bersama sahabat atau pasangan, menyeruput kopi jahe panas, mendengarkan musik akustik santai.'
  }
];
