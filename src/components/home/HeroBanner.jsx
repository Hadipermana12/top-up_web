import React, { useState, useEffect } from 'react';

const HeroBanner = ({ banners }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const activeBanner = banners[activeIndex];

  return (
    <div className="w-full relative group aspect-[2/1] sm:aspect-[2.3/1] md:aspect-auto md:h-[80vh] lg:h-[85vh] rounded-2xl md:rounded-3xl overflow-hidden mb-8 md:mb-12 shadow-2xl animate-fade-in border border-white/5">
      {banners.map((banner, index) => (
        <div 
          key={banner.id}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === activeIndex 
              ? 'opacity-100 scale-100 z-10' 
              : 'opacity-0 scale-105 z-0'
          }`}
        >
          <img 
            src={banner.image} 
            alt={banner.title} 
            className="w-full h-full object-cover"
          />
          {/* Enhanced Gradient Overlay for cinematic feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/70 via-transparent to-transparent opacity-60"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 md:p-16 z-30 flex flex-col justify-end h-full">
        <div className="max-w-3xl">
          <div className="hidden sm:inline-block px-3 py-1 mb-3 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] sm:text-xs font-bold tracking-wider uppercase backdrop-blur-md animate-slide-up">
            Terpopuler Hari Ini
          </div>
          <h2 className="text-lg sm:text-3xl md:text-5xl lg:text-7xl font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-tight mb-2 sm:mb-4 transition-all duration-700 transform translate-y-0 opacity-100">
            {activeBanner?.title}
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-lg max-w-xl drop-shadow-md mb-4 sm:mb-8 hidden md:block">
            Nikmati layanan top up game termurah, tercepat, dan terpercaya. Upgrade pengalaman bermainmu sekarang juga bersama Khadoetz Store!
          </p>
          <button className="bg-primary hover:bg-primaryHover text-white font-bold py-1.5 px-4 sm:py-3 sm:px-8 rounded-lg sm:rounded-xl text-[10px] sm:text-sm shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 sm:gap-2 w-fit">
            Top Up Sekarang
            <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 sm:w-5 h-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 flex gap-2 sm:gap-3 z-30">
        {banners.map((b, i) => (
          <button 
            key={b.id} 
            onClick={() => setActiveIndex(i)}
            className={`h-1.5 sm:h-2.5 rounded-full transition-all duration-500 ${
              i === activeIndex 
                ? 'w-6 sm:w-10 bg-primary shadow-[0_0_12px_rgba(16,185,129,0.8)]' 
                : 'w-1.5 sm:w-2.5 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
