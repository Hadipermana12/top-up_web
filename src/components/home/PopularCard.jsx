import React from 'react';
import { Link } from 'react-router-dom';

const PopularCard = ({ game, rank }) => {
  // Fallback rank if not provided (e.g. from early rendering)
  const displayRank = rank ? (rank < 10 ? `0${rank}` : rank) : '01';

  return (
    <Link to={`/game/${game.id}`} className="block group">
      {/* Container - Special Cyberpunk Ticket Layout */}
      <div className="relative rounded-2xl overflow-hidden bg-[#0a0c10] border border-primary/20 shadow-[0_0_20px_rgba(16,185,129,0.15)] group-hover:border-primary/60 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-500 ease-out group-hover:-translate-y-2 h-[140px] flex">

        {/* 1. Neon Accent Edge (Left) */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-emerald-950 opacity-100 group-hover:w-1.5 transition-all duration-300 z-30 shadow-[0_0_15px_rgba(16,185,129,0.9)]" />

        {/* 2. Giant Hollow Rank Number (Background) */}
        <div className="absolute -left-2 -top-8 z-0 select-none opacity-[0.05] group-hover:opacity-15 group-hover:translate-x-3 transition-all duration-700 ease-out pointer-events-none">
          <span className="text-[140px] font-black italic text-transparent leading-none" style={{ WebkitTextStroke: '2px #10B981' }}>
            {displayRank}
          </span>
        </div>

        {/* 3. Right Side Image (Angled Mask) */}
        <div className="absolute right-0 top-0 bottom-0 w-[65%] z-0 overflow-hidden pointer-events-none">
           {/* Angled cutoff for image using clip-path */}
           <div className="absolute inset-0 w-full h-full" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
             <img
               src={game.image}
               alt={game.title}
               className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-x-2 origin-right"
             />
             {/* Fade overlay so image blends into the dark background smoothly on the left */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10] via-[#0a0c10]/30 to-transparent" />
           </div>
        </div>

        {/* Auto Glowing Slash Effect (Every 5s) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl z-10">
          <div className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/15 to-transparent animate-auto-slash" />
        </div>

        {/* 4. Left Side Content (Text & Badges) */}
        <div className="relative z-20 flex flex-col justify-center h-full w-[65%] pl-6 pr-2 py-4">
           {/* Rank Badge */}
           <div className="flex items-center mb-2">
             <div className="bg-primary/20 backdrop-blur-sm text-primary text-[9px] uppercase tracking-widest font-black px-2 py-1 rounded-sm border border-primary/40 group-hover:border-primary/70 group-hover:bg-primary/30 transition-colors shadow-[0_0_10px_rgba(16,185,129,0.2)]">
               TOP {displayRank}
             </div>
           </div>
           
           <span className="text-white/60 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold mb-1 transition-colors duration-300 group-hover:text-gray-300 truncate">
             {game.publisher}
           </span>
           <span className="font-bold text-sm md:text-base text-white tracking-tight line-clamp-2 drop-shadow-md group-hover:text-primary transition-all duration-300">
             {game.title}
           </span>
        </div>

        {/* 5. Cyberpunk Decorative Dots (Bottom Right) */}
        <div className="absolute right-4 bottom-3 z-20 flex gap-1 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
          <div className="w-1.5 h-1 rounded-sm bg-primary animate-pulse" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-1 rounded-sm bg-primary animate-pulse" style={{ animationDelay: '300ms' }} />
        </div>

      </div>
    </Link>
  );
};

export default PopularCard;
