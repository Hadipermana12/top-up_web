import React from 'react';
import { Zap, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { paymentCategories } from '../../mocks/data';
import { formatCurrency } from '../../utils/formatters';
import FAQ from '../home/FAQ';

const SectionTitle = ({ num, title }) => (
  <div className="flex items-center mb-4">
    <div className="bg-primary text-white font-bold text-lg w-10 h-10 flex items-center justify-center rounded-l-lg rounded-r-sm mr-4">
      {num}
    </div>
    <h2 className="text-white font-bold text-lg">{title}</h2>
  </div>
);

const TopUpForm = ({
  game,
  userId, setUserId,
  serverId, setServerId,
  selectedItem, setSelectedItem,
  quantity, handleQuantity,
  promoCode, setPromoCode,
  selectedPayment, setSelectedPayment,
  openPaymentCategory, setOpenPaymentCategory,
  whatsapp, setWhatsapp,
  topupItems, CurrencyIcon,
  calculateTotal, faqs
}) => {
  return (
    <div className="flex-1 space-y-6">
      
      {/* Step 1: Account */}
      <div className="bg-surface rounded-2xl p-4 md:p-6 border border-white/8">
        <SectionTitle num="1" title="Masukkan Data Akun" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-0 md:ml-14">
          <div>
            <label className="block text-xs text-gray-400 mb-2">ID</label>
            <input type="text" value={userId} onChange={e=>setUserId(e.target.value)} className="w-full bg-white/5 border border-transparent rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition" placeholder="Masukkan ID" />
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-2">Server</label>
            <input type="text" value={serverId} onChange={e=>setServerId(e.target.value)} className="w-full bg-white/5 border border-transparent rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition" placeholder="Masukkan Server" />
          </div>
        </div>
      </div>

      {/* Step 2: Nominal */}
      <div className="bg-surface rounded-2xl p-4 md:p-6 border border-white/8">
        <SectionTitle num="2" title="Pilih Nominal" />
        
        <div className="ml-0 md:ml-14 border border-primary/50 rounded-xl p-4">
          <h3 className="text-primary font-bold mb-4 flex items-center gap-2"><Zap className="w-5 h-5 fill-current" /> FLASH SALE</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {topupItems.filter(i => i.category === 'FLASH SALE').map(item => {
              const isSelected = selectedItem?.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => !item.outOfStock && setSelectedItem(item)}
                  disabled={item.outOfStock}
                  className={`relative p-3 rounded-xl text-left border transition-all duration-200 ${
                    item.outOfStock
                      ? 'opacity-40 cursor-not-allowed bg-white/5 border-white/5'
                      : isSelected
                      ? 'border-primary bg-primary/10 shadow-[0_0_18px_rgba(16,185,129,0.28)] ring-1 ring-primary/40'
                      : 'border-white/10 bg-white/5 hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  <div className="text-white/70 text-xs mb-2 line-clamp-1 font-medium">{item.name}</div>
                  <div className="flex items-center gap-1.5">
                    <CurrencyIcon />
                    <span className={`font-bold text-sm ${isSelected ? 'text-primary' : 'text-white'}`}>{formatCurrency(item.price)}</span>
                  </div>
                  {item.outOfStock && <div className="mt-2 text-[10px] text-white/30 text-center border border-white/10 py-1 rounded-lg">Out of Stock</div>}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {topupItems.filter(i => !i.category).map(item => {
              const isSelected = selectedItem?.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`relative p-3 rounded-xl text-left border transition-all duration-200 ${
                    isSelected
                      ? 'border-primary bg-primary/10 shadow-[0_0_18px_rgba(16,185,129,0.28)] ring-1 ring-primary/40'
                      : 'border-white/10 bg-white/5 hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  <div className="text-white/70 text-xs mb-2 line-clamp-1 font-medium">{item.name}</div>
                  <div className="flex items-center gap-1.5 mb-5">
                    <CurrencyIcon />
                    <span className={`font-bold text-sm ${isSelected ? 'text-primary' : 'text-white'}`}>{formatCurrency(item.price)}</span>
                  </div>
                  {item.isInstant && (
                    <div className="absolute bottom-2 right-2 bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded text-[9px] font-bold text-primary flex items-center">
                      <Zap className="w-2 h-2 mr-1" /> INSTAN
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Step 3: Quantity */}
      <div className="bg-surface rounded-2xl p-4 md:p-6 border border-white/8">
        <SectionTitle num="3" title="Masukkan Jumlah Pembelian" />
        <div className="ml-0 md:ml-14 flex items-center gap-4">
          <input type="text" value={quantity} readOnly className="w-full max-w-sm bg-white/5 border border-transparent rounded-lg px-4 py-3 text-white focus:outline-none" />
          <button onClick={()=>handleQuantity('inc')} className="bg-primary text-white w-12 h-12 flex justify-center items-center rounded-lg font-bold hover:bg-primaryHover"><Plus className="w-5 h-5"/></button>
          <button onClick={()=>handleQuantity('dec')} className="bg-primary text-white w-12 h-12 flex justify-center items-center rounded-lg font-bold hover:bg-primaryHover"><Minus className="w-5 h-5"/></button>
        </div>
      </div>

      {/* Step 4: Promo */}
      <div className="bg-surface rounded-2xl p-4 md:p-6 border border-white/8">
        <SectionTitle num="4" title="Kode Promo" />
        <div className="ml-0 md:ml-14">
          <div className="flex gap-2 mb-4">
            <input type="text" value={promoCode} onChange={e=>setPromoCode(e.target.value)} placeholder="Ketik Kode Promo Kamu" className="flex-1 bg-white/5 border border-transparent rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary" />
            <button className="bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primaryHover">Gunakan</button>
          </div>
          <button className="border border-primary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary/10 transition flex items-center gap-2">
            <span className="w-5 h-5 bg-primary rounded-full text-white flex items-center justify-center font-bold">%</span> Pakai Promo Yang Tersedia
          </button>
        </div>
      </div>

      {/* Step 5: Payment */}
      <div className="bg-surface rounded-2xl p-4 md:p-6 border border-white/8">
        <SectionTitle num="5" title="Pilih Pembayaran" />
        <div className="ml-0 md:ml-14 space-y-3">
          {paymentCategories.map(cat => (
            <div key={cat.id} className="border border-white/10 rounded-xl overflow-hidden bg-background">
              <button onClick={() => setOpenPaymentCategory(openPaymentCategory === cat.id ? null : cat.id)} className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition">
                <span className="font-semibold text-gray-300">{cat.name}</span>
                {openPaymentCategory === cat.id ? <ChevronUp className="w-5 h-5 text-gray-500"/> : <ChevronDown className="w-5 h-5 text-gray-500"/>}
              </button>
              
              {openPaymentCategory === cat.id && (
                <div className="p-4 pt-0 grid grid-cols-1 gap-2">
                  {cat.methods.map(method => (
                    <div 
                      key={method.id} 
                      onClick={() => setSelectedPayment(method.id)}
                      className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedPayment === method.id ? 'border-primary bg-primary/5' : 'border-transparent bg-white/5 hover:border-gray-500'}`}
                    >
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs mr-4">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-white">{method.name}</div>
                      </div>
                      <div className="text-right">
                        {selectedItem ? (
                          <div className="text-primary font-bold">{formatCurrency(calculateTotal())}</div>
                        ) : (
                          <div className="text-gray-500 text-sm">Pilih nominal</div>
                        )}
                      </div>
                      {cat.bestPrice && (
                        <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">BEST PRICE</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step 6: Contact */}
      <div className="bg-surface rounded-2xl p-4 md:p-6 border border-white/8">
        <SectionTitle num="6" title="Detail Kontak" />
        <div className="ml-0 md:ml-14">
          <label className="block text-xs text-gray-400 mb-2">No. WhatsApp</label>
          <div className="flex gap-2">
            <div className="bg-white/5 px-4 py-3 rounded-lg flex items-center gap-2 border border-transparent">
              <img src="https://flagcdn.com/w20/id.png" alt="ID" className="w-5" />
              <span className="text-white">+62</span>
            </div>
            <input type="text" value={whatsapp} onChange={e=>setWhatsapp(e.target.value)} placeholder="Nomor WhatsApp" className="flex-1 bg-white/5 border border-transparent rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary" />
          </div>
          <p className="text-[10px] text-gray-500 mt-2">*Nomor ini akan dihubungi jika terjadi masalah</p>
        </div>
      </div>

      {/* Game Description */}
      <div className="bg-surface rounded-2xl p-4 md:p-6 border border-white/8">
        <div className="bg-primary px-4 py-2 rounded-t-lg inline-block font-bold text-white">
          Deskripsi {game.title}
        </div>
        <div className="p-4 border border-t-0 border-white/10 rounded-b-lg rounded-tr-lg text-sm text-gray-300 leading-relaxed">
          {game.description}
        </div>
      </div>

      {/* FAQ */}
      <FAQ faqs={faqs} />
    </div>
  );
};

export default TopUpForm;
