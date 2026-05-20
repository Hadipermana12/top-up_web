import mlbbImg from '../assets/images/mlbb.jfif';
import ffImg from '../assets/images/ff.jfif';
import pubgImg from '../assets/images/pubg.jfif';
import valorantImg from '../assets/images/valorant.jfif';
import genshinImg from '../assets/images/genshin_impact.jfif';
import codImg from '../assets/images/cod.jfif';
import robloxImg from '../assets/images/Roblox.jfif';
import hokImg from '../assets/images/HOK.jfif';
import joki from "../assets/images/rank.jfif"
import coc  from "../assets/images/coc.jpg"
import clashRoyal from "../assets/images/clash_royal.jpg"
import apex from "../assets/images/apex.jpg"
import fcMobile from "../assets/images/fc-mobile.jpg"
import zoneZero from "../assets/images/zone-zero.jpg"
import honkai from "../assets/images/honkai.jpg"
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jfif';
import banner3 from '../assets/images/banner3.jfif';


export const banners = [
  { id: 1, image: banner1, title: 'Special Event Top Up' },
  { id: 2, image: banner2, title: 'Weekend Promo' },
  { id: 3, image: banner3, title: 'New Season' }
];

export const categories = [
  'Top Up Games', 'Joki MLBB'
];

export const games = [
  {
    id: 'mobile-legends',
    title: 'Mobile Legends',
    publisher: 'Moonton',
    image: mlbbImg,
    isHot: true,
    isPopular: true,
    description: 'Khadoetz Store mempersembahkan penawaran istimewa untuk para gamers sejati! Kami hadir dengan layanan Top Up resmi dan 100% legal untuk Mobile Legends : Bang Bang, yang dirancang khusus untuk meningkatkan pengalaman bermain game Anda. Nikmati kemudahan, keamanan, dan harga yang terjangkau dalam setiap transaksi Top Up Anda.',
    specs: ['Platform: Android, iOS', 'Genre: MOBA', 'Developer: Moonton']
  },
  {
    id: 'free-fire',
    title: 'Free Fire',
    publisher: 'Garena',
    image: ffImg,
  },
  {
    id: 'pubg-mobile',
    title: 'PUBG Mobile',
    publisher: 'Tencent Games',
    image: pubgImg,
  },
  {
    id: 'valorant',
    title: 'Valorant',
    publisher: 'Riot Games',
    image: valorantImg,
    category: 'Top Up Games'
  },
  {
    id: 'genshin-impact',
    title: 'Genshin Impact',
    publisher: 'HoYoverse',
    image: genshinImg,
    category: 'Top Up Games'
  },
  {
    id: 'call-of-duty',
    title: 'Call of Duty: Mobile',
    publisher: 'Garena',
    image: codImg,
    category: 'Top Up Games'
  },
  {
    id: 'roblox',
    title: 'Roblox',
    publisher: 'Roblox Corporation',
    image: robloxImg,
    category: 'Top Up Games',
    isHot: true,
    isPopular: true,
    currency: 'robux',
    description: 'Top Up Robux Roblox dengan cepat, aman, dan harga terbaik! Robux adalah mata uang virtual dalam game Roblox yang dapat digunakan untuk membeli berbagai item eksklusif, aksesori karakter, dan fitur premium lainnya.'
  },
  {
    id: 'joki-rank-mlbb',
    title: 'Joki Rank Mobile Legends',
    publisher: 'Khadoetz Store',
    image: joki,
    category: 'Joki MLBB',
    isPopular: true,
    isHot : true
  },
 
  {
    id: 'honor-of-kings',
    title: 'Honor Of Kings',
    publisher: 'Tencent Games',
    image: hokImg,
    category: 'Top Up Games',
  },
  
  {
    id: 'joki-mlbb-glory',
    title: 'Joki MLBB ke Mythical Glory',
    publisher: 'Pro Player',
    image: mlbbImg,
    category: 'Joki MLBB'
  },
  {
    id: 'honkai-star-rail',
    title: 'Honkai: Star Rail',
    publisher: 'HoYoverse',
    image: honkai,
    category: 'Top Up Games'
  },
  {
    id: 'ea-fc-mobile',
    title: 'EA FC Mobile',
    publisher: 'Electronic Arts',
    image: fcMobile,
    category: 'Top Up Games',
  },
  {
    id: 'apex-legends',
    title: 'Apex Legends Mobile',
    publisher: 'Electronic Arts',
    image: apex,
    category: 'Top Up Games'
  },
  {
    id: 'clash-of-clans',
    title: 'Clash of Clans',
    publisher: 'Supercell',
    image: coc,
    category: 'Top Up Games'
  },
  {
    id: 'clash-royale',
    title: 'Clash Royale',
    publisher: 'Supercell',
    image: clashRoyal,
    category: 'Top Up Games'
  },
  {
    id: 'zenless-zone-zero',
    title: 'Zenless Zone Zero',
    publisher: 'HoYoverse',
    image: zoneZero,
    category: 'Top Up Games'
  }
];

export const diamondItems = [
  { id: 'f1', name: 'Weekly Diamond Pass (PROMO)', price: 27777, category: 'FLASH SALE', outOfStock: true },
  { id: 'f2', name: '518 (467+51) Diamonds', price: 138888, category: 'FLASH SALE', outOfStock: true },
  { id: 'f3', name: '1048 (946+112) Diamonds', price: 274444, category: 'FLASH SALE', outOfStock: true },
  
  { id: 1, name: '5 Diamonds', price: 1426, isInstant: true },
  { id: 2, name: '10 (9+1) Diamonds', price: 2853, isInstant: true },
  { id: 3, name: '14 (13+1) Diamonds', price: 3993, isInstant: true },
  { id: 4, name: '18 (17+1) Diamonds', price: 4755, isInstant: true },
  { id: 5, name: '28 (26+2) Diamonds', price: 7987, isInstant: true },
  { id: 6, name: '36 (33+3) Diamonds', price: 9508, isInstant: true },
  { id: 7, name: '44 (40+4) Diamonds', price: 11411, isInstant: true },
  { id: 8, name: '59 (53+6) Diamonds', price: 15214, isInstant: true },
  { id: 9, name: '74 (67+7) Diamonds', price: 19018, isInstant: true },
  { id: 10, name: '85 (77+8) Diamonds', price: 21871, isInstant: true },
  { id: 11, name: '96 (86+10) Diamonds', price: 25074, isInstant: true },
  { id: 12, name: '112 (102+10) Diamonds', price: 28750, isInstant: true },
  { id: 13, name: '110 (100+10) Diamonds', price: 30807, isInstant: true },
  { id: 14, name: '113 (102+11) Diamonds', price: 31401, isInstant: true },
  { id: 15, name: '112 (101+11) Diamonds', price: 31723, isInstant: true },
  { id: 16, name: '116 (105+11) Diamonds', price: 32750, isInstant: true },
  { id: 17, name: '129 (117+12) Diamonds', price: 35452, isInstant: true },
  { id: 18, name: '128 (116+12) Diamonds', price: 35774, isInstant: true },
  { id: 19, name: '148 (134+14) Diamonds', price: 41075, isInstant: true },
  { id: 20, name: '140 (127+13) Diamonds', price: 42562, isInstant: true },
  { id: 21, name: '172 (156+16) Diamonds', price: 43883, isInstant: true },
  { id: 22, name: '170 (154+16) Diamonds', price: 46593, isInstant: true },
  { id: 23, name: '176 (160+16) Diamonds', price: 49293, isInstant: true },
  { id: 24, name: '257 (234+23) Diamonds', price: 66635, isInstant: true },
  { id: 25, name: '284 (258+26) Diamonds', price: 73387, isInstant: true },
  { id: 26, name: '296 (269+27) Diamonds', price: 76540, isInstant: true },
  { id: 27, name: '344 (312+32) Diamonds', price: 88874, isInstant: true },
  { id: 28, name: '366 (333+33) Diamonds', price: 95111, isInstant: true },
  { id: 29, name: '408 (371+37) Diamonds', price: 105634, isInstant: true },
  { id: 30, name: '429 (390+39) Diamonds', price: 111100, isInstant: true },
];

export const robuxItems = [
  { id: 'rb-f1', name: '400 Robux (PROMO)', price: 65000, category: 'FLASH SALE', outOfStock: true },
  { id: 'rb-f2', name: '800 Robux (PROMO)', price: 119000, category: 'FLASH SALE', outOfStock: true },
  { id: 'rb-f3', name: '2000 Robux (PROMO)', price: 285000, category: 'FLASH SALE', outOfStock: true },

  { id: 'rb1', name: '40 Robux', price: 8500, isInstant: true },
  { id: 'rb2', name: '80 Robux', price: 15000, isInstant: true },
  { id: 'rb3', name: '160 Robux', price: 29000, isInstant: true },
  { id: 'rb4', name: '240 Robux', price: 42000, isInstant: true },
  { id: 'rb5', name: '320 Robux', price: 55000, isInstant: true },
  { id: 'rb6', name: '400 Robux', price: 67000, isInstant: true },
  { id: 'rb7', name: '800 Robux', price: 132000, isInstant: true },
  { id: 'rb8', name: '1000 Robux', price: 163000, isInstant: true },
  { id: 'rb9', name: '1200 Robux', price: 195000, isInstant: true },
  { id: 'rb10', name: '1600 Robux', price: 258000, isInstant: true },
  { id: 'rb11', name: '2000 Robux', price: 319000, isInstant: true },
  { id: 'rb12', name: '2400 Robux', price: 379000, isInstant: true },
  { id: 'rb13', name: '4500 Robux', price: 700000, isInstant: true },
  { id: 'rb14', name: '10000 Robux', price: 1550000, isInstant: true },
];

export const testimonials = [
  { id: 1, name: 'Budi Santoso', game: 'Mobile Legends', review: 'Proses top up sangat cepat dan aman. Diamond langsung masuk dalam hitungan detik!', rating: 5 },
  { id: 2, name: 'Andi Gaming', game: 'PUBG Mobile', review: 'Harga termurah dibandingkan tempat lain. Sangat direkomendasikan untuk beli UC.', rating: 5 },
];

export const faqs = [
  { id: 1, question: 'Cara Top Up ML di Khadoetz Store?', answer: 'Pilih nominal, masukkan ID dan Server, pilih pembayaran, lalu checkout.' },
  { id: 2, question: 'Metode Pembayaran untuk Top Up ML di Khadoetz Store?', answer: 'QRIS, GoPay, OVO, Dana, Virtual Account, dll.' },
  { id: 3, question: 'Mengapa Harus Top Up ML di Khadoetz Store?', answer: 'Cepat, aman, dan harga terbaik.' },
  { id: 4, question: 'Berapa Lama Proses Top Up ML di Khadoetz Store?', answer: 'Kurang dari 1 menit untuk layanan instan.' },
  { id: 5, question: 'Apakah Top Up ML di Khadoetz Store Aman?', answer: 'Sangat aman dan 100% legal.' },
];

export const paymentCategories = [
  {
    id: 'coinpedia',
    name: 'Coinpedia',
    bestPrice: true,
    methods: [
      { id: 'cp1', name: 'Coinpedia', icon: 'coin' }
    ]
  },
  {
    id: 'qris',
    name: 'QRIS (All Payment Method)',
    bestPrice: true,
    methods: [
      { id: 'qr1', name: 'QRIS', icon: 'qris' }
    ]
  },
  {
    id: 'ewallet',
    name: 'E-Wallet',
    methods: [
      { id: 'ew1', name: 'GoPay', icon: 'gopay' },
      { id: 'ew2', name: 'OVO', icon: 'ovo' },
      { id: 'ew3', name: 'DANA', icon: 'dana' }
    ]
  },
  {
    id: 'va',
    name: 'Virtual Account',
    methods: [
      { id: 'va1', name: 'BCA Virtual Account', icon: 'bca' },
      { id: 'va2', name: 'Mandiri Virtual Account', icon: 'mandiri' }
    ]
  },
  {
    id: 'retail',
    name: 'Convenience Store',
    methods: [
      { id: 'rt1', name: 'Indomaret', icon: 'indomaret' },
      { id: 'rt2', name: 'Alfamart', icon: 'alfamart' }
    ]
  }
];

export const articles = [
  {
    id: 1,
    title: '5 Hero META Mobile Legends Terbaik untuk Push Rank Season Ini',
    category: 'Tips & Trik',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
    date: '19 Mei 2026',
    author: 'Khadoetz Editor',
    excerpt: 'Mau cepat naik ke Mythic? Ini dia daftar hero META terkuat di Mobile Legends season ini yang wajib Anda kuasai untuk mendominasi pertandingan solo rank!',
    readTime: '5 Menit'
  },
  {
    id: 2,
    title: 'Setting Sensitivitas & Layout PUBG Mobile Terbaik Ala Pro Player',
    category: 'Panduan',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600&auto=format&fit=crop',
    date: '18 Mei 2026',
    author: 'Pro Gamer',
    excerpt: 'Meningkatkan akurasi tembakan recoil senjata di PUBG Mobile ternyata sangat dipengaruhi oleh setting sensitivitas Anda. Simak guide lengkap layout 4 jari berikut!',
    readTime: '7 Menit'
  },
  {
    id: 3,
    title: 'Bocoran Update Karakter Baru Genshin Impact & Jadwal Rilisnya',
    category: 'Update Info',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop',
    date: '17 Mei 2026',
    author: 'Teyvat News',
    excerpt: 'HoYoverse kembali menghadirkan bocoran karakter bintang 5 terbaru di versi berikutnya! Cari tahu kemampuannya dan persiapkan Primogems Anda sekarang.',
    readTime: '4 Menit'
  }
];
