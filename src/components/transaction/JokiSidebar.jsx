import React from 'react';
import { Headset, Zap, Star as StarIcon } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import { formatCurrency } from '../../utils/formatters';

const JokiSidebar = ({
  selectedRank, selectedPackage,
  packageName, rankConfigs,
  starsCount, nickname,
  calculatePricePerStar, calculateTotal,
  validationError, handleCheckoutClick
}) => {
  return (
    <div className="w-full lg:w-[350px] flex flex-col gap-4 relative">
      <div className="bg-[#0f1118]/60 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/5 shadow-2xl">
        <div className="text-gray-400 text-sm mb-2">Pro Player Booster</div>
        <div className="flex items-end gap-3 mb-2">
          <span className="text-4xl font-bold text-white leading-none">5.00</span>
          <div className="flex text-primary pb-1">
            {[1, 2, 3, 4, 5].map(star => <StarIcon key={star} className="w-5 h-5 fill-current" />)}
          </div>
        </div>
        <div className="text-xs text-gray-400">Joki bintang 100% amanah & aman</div>
      </div>

      <div className="bg-[#0f1118]/60 backdrop-blur-md rounded-2xl p-6 border border-white/5 shadow-2xl flex items-center gap-4">
        <div className="p-3 bg-gray-800 rounded-full text-gray-300 shadow-inner">
          <Headset className="w-6 h-6" />
        </div>
        <div>
          <div className="text-sm font-bold text-white">Butuh Bantuan Joki?</div>
          <div className="text-xs text-gray-400">Hubungi CS 24 Jam di pojok kanan bawah.</div>
        </div>
      </div>

      {/* Sticky Boost Summary */}
      <div className="sticky top-24">
        <div className="bg-[#050608] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-emerald-800 flex items-center justify-center font-bold text-2xl text-background">
                <FaStar className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-white">Joki MLBB</h3>
                <div className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-semibold">
                  {selectedPackage ? packageName : rankConfigs[selectedRank]?.name}
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-gray-400">{selectedPackage ? 'Paket' : 'Rank Terpilih'}</span>
                <span className="text-white font-medium text-right max-w-[180px] truncate">
                  {selectedPackage ? packageName : rankConfigs[selectedRank]?.name}
                </span>
              </div>
              {!selectedPackage && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Jumlah Bintang</span>
                    <span className="text-primary font-bold">{starsCount} Bintang</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Harga Per Bintang</span>
                    <span className="text-white font-medium">{formatCurrency(calculatePricePerStar())}</span>
                  </div>
                </>
              )}
              {nickname && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Nickname</span>
                  <span className="text-white font-medium truncate max-w-[150px]">{nickname}</span>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center mb-6 pt-4 border-t border-white/10">
              <span className="font-bold text-gray-300 text-base">Total Pembayaran</span>
              <span className="font-black text-primary text-2xl tracking-tight shadow-primary/20 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                {formatCurrency(calculateTotal())}
              </span>
            </div>

            {validationError && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-xs font-semibold text-center">
                {validationError}
              </div>
            )}

            <button 
              onClick={handleCheckoutClick}
              className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 bg-primary text-white hover:bg-primaryHover hover:shadow-lg hover:shadow-primary/20 transition-all hover:scale-[1.02] duration-300"
            >
              <Zap className="w-5 h-5 fill-current" />
              Order Joki Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JokiSidebar;
