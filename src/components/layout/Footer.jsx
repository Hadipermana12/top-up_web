import React from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#0a0c10] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-black text-xl text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                K
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Khadoetz Store</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Platform layanan top-up game dan Joki MLBB termurah, tercepat, dan terpercaya di Indonesia. Tingkatkan pengalaman gaming Anda bersama kami!
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1">
                <FaTiktok className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1">
                <FaDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full"></span> Peta Situs
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-primary text-sm flex items-center gap-2 transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Beranda</Link></li>
              <li><Link to="/cek-transaksi" className="text-gray-400 hover:text-primary text-sm flex items-center gap-2 transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Cek Transaksi</Link></li>
              <li><Link to="/leaderboard" className="text-gray-400 hover:text-primary text-sm flex items-center gap-2 transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Leaderboard</Link></li>
              <li><Link to="/kalkulator" className="text-gray-400 hover:text-primary text-sm flex items-center gap-2 transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Kalkulator ML</Link></li>
              <li><Link to="/artikel" className="text-gray-400 hover:text-primary text-sm flex items-center gap-2 transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Artikel</Link></li>
            </ul>
          </div>

          {/* Column 3: Layanan & Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full"></span> Bantuan
            </h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-400 hover:text-primary text-sm flex items-center gap-2 transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Syarat & Ketentuan</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary text-sm flex items-center gap-2 transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Kebijakan Privasi</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary text-sm flex items-center gap-2 transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Pertanyaan Umum (FAQ)</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary text-sm flex items-center gap-2 transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full"></span> Hubungi Kami
            </h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
              <p className="text-xs text-gray-400 mb-4">Punya pertanyaan atau butuh bantuan terkait pesanan? Tim Support kami siap membantu 24/7!</p>
              <a href="#" className="w-full bg-primary hover:bg-primaryHover text-white text-sm font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:scale-[1.02]">
                <FaWhatsapp className="w-4 h-4" /> Chat Support
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="text-white font-semibold text-xs mb-3 uppercase tracking-wider">Metode Pembayaran</h4>
              <div className="flex flex-wrap gap-2">
                {/* Simulated Payment Icons */}
                <div className="bg-white px-2 py-1 rounded shadow-sm text-[10px] font-black text-blue-800 italic">BCA</div>
                <div className="bg-white px-2 py-1 rounded shadow-sm text-[10px] font-black text-orange-600">BNI</div>
                <div className="bg-white px-2 py-1 rounded shadow-sm text-[10px] font-black text-blue-600">MANDIRI</div>
                <div className="bg-white px-2 py-1 rounded shadow-sm text-[10px] font-black text-purple-600">OVO</div>
                <div className="bg-[#00A5CF] px-2 py-1 rounded shadow-sm text-[10px] font-black text-white">DANA</div>
                <div className="bg-[#009140] px-2 py-1 rounded shadow-sm text-[10px] font-black text-white italic">QRIS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 bg-black/40 backdrop-blur-md relative z-10">
        <div className="max-w-[1440px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="text-primary font-semibold">Khadoetz Store</span>. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <span className="hover:text-primary cursor-pointer transition-colors">Term of Service</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
