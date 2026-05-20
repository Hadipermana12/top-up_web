import React from 'react';
import { Headset, Star } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

const CheckoutSidebar = ({ game, selectedItem, quantity, calculateTotal, validationError, handleCheckoutClick }) => {
  return (
    <div className="w-full lg:w-[350px] flex flex-col gap-4 relative">
      <div className="bg-surface rounded-2xl p-4 md:p-6 border border-white/8">
        <div className="text-gray-400 text-sm mb-2">Ulasan dan rating</div>
        <div className="flex items-end gap-3 mb-2">
          <span className="text-4xl font-bold text-white leading-none">4.99</span>
          <div className="flex text-primary pb-1">
            {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
          </div>
        </div>
        <div className="text-xs text-gray-400">Berdasarkan total 21.63jt rating</div>
      </div>

      <div className="bg-surface rounded-2xl p-6 border border-white/8 flex items-center gap-4">
        <div className="p-3 bg-gray-800 rounded-full text-gray-300">
          <Headset className="w-6 h-6" />
        </div>
        <div>
          <div className="text-sm font-bold text-white">Butuh Bantuan?</div>
          <div className="text-xs text-gray-400">Kamu bisa hubungi admin disini.</div>
        </div>
      </div>

      {/* Cart Summary */}
      <div className="sticky top-24">
        {selectedItem ? (
          <div className="bg-background rounded-2xl border border-white/8 overflow-hidden shadow-2xl animate-fade-in">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/8">
                <img src={game.image} alt={game.title} className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <h3 className="font-bold text-white">{game.title}</h3>
                  <div className="text-sm text-gray-400 mt-1">{selectedItem.name} x{quantity}</div>
                </div>
              </div>

              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Harga per item</span>
                  <span className="text-white font-medium">{formatCurrency(selectedItem.price)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pajak/Biaya Admin</span>
                  <span className="text-white font-medium">Rp 0</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6 pt-4 border-t border-white/8">
                <span className="font-bold text-white text-lg">Total Pembayaran</span>
                <span className="font-bold text-primary text-xl">{formatCurrency(calculateTotal())}</span>
              </div>
              
              {validationError && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-xs font-medium text-center">
                  {validationError}
                </div>
              )}

              <button 
                onClick={handleCheckoutClick}
                className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 bg-primary text-white hover:bg-primaryHover hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Pesan Sekarang
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-black/50 border border-white/8 border-dashed rounded-2xl p-8 text-center text-gray-400 flex justify-center items-center min-h-[150px]">
            Belum ada item produk yang dipilih.
          </div>
        )}
        
        {!selectedItem && (
          <button disabled className="w-full mt-4 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 bg-primary/50 text-white/50 cursor-not-allowed transition-all">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Pesan Sekarang!
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutSidebar;
