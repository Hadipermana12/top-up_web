import React from 'react';
import { Zap } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

const MobileJokiCheckoutBar = ({
  selectedRank, selectedPackage,
  packageName, rankConfigs,
  calculateTotal, handleCheckoutClick
}) => {
  const isSelected = selectedRank !== null || selectedPackage !== null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0c0d14]/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex items-center justify-between gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.6)]">
      <div className="min-w-0 flex-1">
        <div className={`text-[10px] uppercase tracking-wider line-clamp-1 font-extrabold ${isSelected ? 'text-gray-400' : 'text-red-400 animate-pulse'}`}>
          {isSelected 
            ? `Joki MLBB: ${selectedPackage ? packageName : rankConfigs[selectedRank]?.name}` 
            : 'Belum ada item dipilih'}
        </div>
        <div className="text-lg font-black text-primary leading-none mt-1">
          {formatCurrency(calculateTotal())}
        </div>
      </div>
      <button 
        onClick={handleCheckoutClick}
        className="flex-shrink-0 bg-primary hover:bg-primaryHover text-white px-7 py-3.5 rounded-xl font-bold text-sm flex items-center gap-1.5 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95 transition-all"
      >
        <Zap className="w-4 h-4 fill-current" />
        Order Joki
      </button>
    </div>
  );
};

export default MobileJokiCheckoutBar;
