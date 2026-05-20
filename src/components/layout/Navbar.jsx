import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(false);
    }, 1000); // Bersihkan class transform setelah animasi masuk selesai (1 detik)
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: 'Topup', active: true },
    { name: 'Cek Transaksi', active: false },
    { name: 'Leaderboard', active: false },
    { name: 'Artikel', active: false },
    { name: 'Kalkulator', active: false }
  ];

  return (
    <div className={`w-full sticky top-0 z-50 ${shouldAnimate ? 'animate-slide-up' : ''}`}>
      <div 
        className={`transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/45 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-1' 
            : 'bg-[#0D0E15]/85 border-b border-white/5 py-2'
        }`}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4">
          
          {/* Top Row: Logo, Search, Action Buttons */}
          <div className="h-16 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8 pt-2">
            
            {/* Mobile Hamburger & Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button 
                className="md:hidden text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              
              <Link to="/" className="flex items-center gap-2.5 group">
                <div className="w-9 h-9 bg-gradient-to-br from-primary to-emerald-600 rounded-xl flex items-center justify-center font-black text-background italic shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:scale-105 transition-transform duration-300 flex-shrink-0">K</div>
                <span className="font-bold text-xl tracking-tight hidden lg:block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Khadoetz Store</span>
              </Link>
            </div>
            
            {/* Search Bar - Sleek Pill (Desktop & Mobile) */}
            <div className="flex-1 max-w-xl relative group">
              <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-500 group-focus-within:text-primary transition-colors duration-300" />
              </div>
              <input
                type="text"
                className="block w-full pl-9 md:pl-11 pr-3 md:pr-4 py-2 md:py-2.5 border border-white/10 rounded-full bg-white/5 text-gray-200 placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:ring-1 focus:ring-primary focus:border-primary text-xs md:text-sm transition-all duration-300 shadow-inner"
                placeholder="Cari..."
              />
            </div>

            {/* Auth & Currency */}
            <div className="flex items-center gap-1.5 md:gap-5 flex-shrink-0">
              <button className="hidden md:flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white bg-white/5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition-all">
                <img src="https://flagcdn.com/w20/id.png" alt="ID" className="w-4 h-auto rounded-[2px]" />
                IDR
              </button>
              
              <div className="h-5 w-px bg-white/10 hidden md:block"></div>

              <div className="flex items-center gap-1 md:gap-2">
                <button className="text-xs md:text-sm font-semibold text-gray-300 hover:text-white px-2 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-white/5 transition-colors flex items-center">
                  Masuk
                </button>
                <button className="text-xs md:text-sm font-bold text-background bg-primary hover:bg-primaryHover px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all hover:scale-105 flex items-center">
                  Daftar
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row: Navigation Links (Desktop Only) */}
          <div className="hidden md:flex items-center space-x-8 h-12">
            {navLinks.map((item) => (
              <Link 
                key={item.name}
                to="#" 
                className={`relative px-3 py-3 text-sm font-medium min-w-max transition-colors duration-300 ${item.active ? 'text-primary' : 'text-gray-400 hover:text-white'}`}
              >
                {item.name}
                {item.active && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-t-full shadow-[0_-2px_10px_rgba(16,185,129,1)]"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Dropdown (Burger Nav) */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10 animate-fade-in">
              <div className="flex flex-col space-y-1">
                {navLinks.map((item) => (
                  <Link 
                    key={item.name}
                    to="#" 
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${item.active ? 'bg-primary/10 text-primary border border-primary/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
