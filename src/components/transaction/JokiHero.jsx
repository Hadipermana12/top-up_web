import React from 'react';
import { Zap, Headset, ShieldCheck } from 'lucide-react';
import bannerJoki from '../../assets/images/banner_joki.jfif';

const JokiHero = ({ game }) => {
  return (
    <div className="relative w-full h-[200px] md:h-[320px] rounded-2xl overflow-hidden mb-6 shadow-2xl">
      {/* Background Image */}
      <img 
        src={bannerJoki} 
        alt={game.title} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10]/80 to-transparent" />
      
      {/* Banner Content */}
      <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 z-10">
        <div className="flex items-end gap-4 md:gap-6">
          {/* Game Logo Card */}
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-[0_0_30px_rgba(16,185,129,0.3)] flex-shrink-0">
            <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-3xl font-black text-white tracking-tight mb-1 drop-shadow-lg">JOKI MLBB</h1>
            <p className="text-sm md:text-base text-gray-300 font-medium mb-3">Khadoetz Store Pro Booster</p>
            
            {/* Feature Badges */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 bg-primary/15 border border-primary/30 text-primary text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                <Zap className="w-3 h-3 fill-current" /> Proses Cepat
              </div>
              <div className="flex items-center gap-1.5 bg-blue-500/15 border border-blue-500/30 text-blue-400 text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                <Headset className="w-3 h-3" /> Chat 24/7
              </div>
              <div className="flex items-center gap-1.5 bg-violet-500/15 border border-violet-500/30 text-violet-400 text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                <ShieldCheck className="w-3 h-3" /> Pembayaran Aman
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JokiHero;
