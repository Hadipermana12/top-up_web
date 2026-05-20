import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';
import { FaFire } from 'react-icons/fa';
import ElectricBorder from '../.././components/layout/ElectricBorder'

const GameCard = ({ game }) => {
  return (
    <ElectricBorder
      color="#10B981"
      speed={1}
      chaos={0.12}
      thickness={2}
      style={{ borderRadius: 16 }}
      className="group"
    >
      <Link to={`/game/${game.id}`} className="block">
        <div className="relative rounded-2xl overflow-hidden bg-surface transition-all duration-500 ease-out border border-white/5 group-hover:border-primary/40 group-hover:shadow-[0_12px_40px_-10px_rgba(16,185,129,0.5)] group-hover:-translate-y-2 aspect-[3/4] sm:aspect-auto sm:h-[280px]">
          
          {/* Game Image */}
          <img 
            src={game.image} 
            alt={game.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Dark gradient for premium text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Auto Glowing Slash Effect (Desktop mostly) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-10 hidden md:block">
            <div className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-auto-slash" />
          </div>

          {/* Hot Badge */}
          {game.isHot && (
            <div className="absolute top-2 right-2 md:top-3 md:right-3 z-20">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-[9px] md:text-xs font-black px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.6)] border border-red-400/30 flex items-center gap-1">
                <FaFire className="animate-pulse text-yellow-300 w-2.5 h-2.5 md:w-3 md:h-3" /> HOT
              </div>
            </div>
          )}

          {/* Glassmorphism Text Area (Mobile optimized) */}
          <div className="absolute bottom-0 left-0 w-full p-3 md:p-5 z-20 transition-all duration-500 ease-out group-hover:-translate-y-2">
            
            <p className="text-primary text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-extrabold mb-1 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)] truncate">
              {game.publisher}
            </p>
            
            <h3 className="font-bold text-white text-sm md:text-lg tracking-tight leading-tight mb-2 md:mb-3 drop-shadow-md group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {game.title}
            </h3>

            {/* Top Up Action Button - Visible CTA on mobile */}
            <div className="flex items-center gap-2 mt-auto">
              <div className="w-full bg-white/10 border border-white/20 backdrop-blur-md rounded-lg py-1.5 md:py-2 flex items-center justify-center gap-1.5 transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(16,185,129,0.6)]">
                <Gamepad2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">Top Up</span>
              </div>
            </div>

          </div>
        </div>
      </Link>
    </ElectricBorder>
  );
};

export default GameCard;
