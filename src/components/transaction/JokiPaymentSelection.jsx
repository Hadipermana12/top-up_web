import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { paymentCategories } from '../../mocks/data';
import { formatCurrency } from '../../utils/formatters';

const SectionTitle = ({ num, title }) => (
  <div className="flex items-center mb-4">
    <div className="bg-primary text-white font-bold text-lg w-10 h-10 flex items-center justify-center rounded-l-lg rounded-r-sm mr-4 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
      {num}
    </div>
    <h2 className="text-white font-bold text-lg tracking-tight">{title}</h2>
  </div>
);

const JokiPaymentSelection = ({
  promoCode, setPromoCode,
  selectedPayment, setSelectedPayment,
  openPaymentCategory, setOpenPaymentCategory,
  calculateTotal
}) => {
  return (
    <>
      {/* Step 3: Promo */}
      <div className="bg-[#0f1118]/60 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/5 shadow-2xl">
        <SectionTitle num="3" title="Masukkan Kode Promo" />
        <div className="ml-0 md:ml-14">
          <div className="flex gap-2 mb-4">
            <input 
              type="text" 
              value={promoCode} 
              onChange={e => setPromoCode(e.target.value)} 
              placeholder="Ketik Kode Promo Kamu" 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" 
            />
            <button className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primaryHover transition-all">Gunakan</button>
          </div>
        </div>
      </div>

      {/* Step 4: Pilih Pembayaran */}
      <div className="bg-[#0f1118]/60 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/5 shadow-2xl">
        <SectionTitle num="4" title="Metode Pembayaran Joki" />
        <div className="ml-0 md:ml-14 space-y-3">
          {paymentCategories.map(cat => (
            <div key={cat.id} className="border border-white/10 rounded-xl overflow-hidden bg-[#0a0c10]">
              <button 
                onClick={() => setOpenPaymentCategory(openPaymentCategory === cat.id ? null : cat.id)} 
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition duration-300"
              >
                <span className="font-semibold text-gray-300">{cat.name}</span>
                {openPaymentCategory === cat.id ? <ChevronUp className="w-5 h-5 text-gray-500"/> : <ChevronDown className="w-5 h-5 text-gray-500"/>}
              </button>
              
              {openPaymentCategory === cat.id && (
                <div className="p-4 pt-0 grid grid-cols-1 gap-2">
                  {cat.methods.map(method => (
                    <div 
                      key={method.id} 
                      onClick={() => setSelectedPayment(method.id)}
                      className={`relative flex items-center p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                        selectedPayment === method.id 
                          ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(16,185,129,0.2)]' 
                          : 'border-white/10 bg-white/5 hover:border-white/30'
                      }`}
                    >
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs mr-4">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white">{method.name}</div>
                      </div>
                      <div className="text-right font-bold text-primary">
                        {formatCurrency(calculateTotal())}
                      </div>
                      {cat.bestPrice && (
                        <div className="absolute top-0 right-0 bg-primary text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg rounded-tr-lg">BEST VALUE</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JokiPaymentSelection;
