import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { Headset } from 'lucide-react';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Mesh grid overlay */}
      <div className="mesh-overlay" />
      <Navbar />
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />

      {/* Floating CS Button */}
      <a 
        href="https://wa.me/6281234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 z-[60] bg-primary hover:bg-emerald-600 text-white p-3 md:p-4 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center animate-bounce-slow"
        aria-label="Customer Service"
      >
        <Headset className="w-7 h-7 md:w-8 md:h-8 drop-shadow-md" />
        
        {/* Tooltip Dropdown (Muncul saat di-hover desktop) */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 text-xs md:text-sm font-black px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl pointer-events-none whitespace-nowrap hidden md:block">
          Customer Service
          {/* Segitiga panah tooltip */}
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
        </span>
      </a>
    </div>
  );
};

export default MainLayout;
