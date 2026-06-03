import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Headset, Star, Gem, ChevronDown, ChevronUp, Plus, Minus, ShieldCheck, Clock, Zap } from 'lucide-react';
import { games, diamondItems, robuxItems, paymentCategories, faqs } from '../mocks/data';
import { formatCurrency } from '../utils/formatters';
import ConfirmModal from '../components/checkout/ConfirmModal';
import SuccessModal from '../components/checkout/SuccessModal';
import JokiLayout from '../components/transaction/JokiLayout';

import TransactionHero from '../components/transaction/TransactionHero';
import TopUpForm from '../components/transaction/TopUpForm';
import CheckoutSidebar from '../components/transaction/CheckoutSidebar';
import MobileCheckoutBar from '../components/transaction/MobileCheckoutBar';

const Transaction = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  
  // Checkout State
  const [userId, setUserId] = useState('');
  const [serverId, setServerId] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [whatsapp, setWhatsapp] = useState('');
  
  const [openPaymentCategory, setOpenPaymentCategory] = useState('coinpedia');
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    const foundGame = games.find(g => g.id === id) || games[0];
    setGame(foundGame);
    window.scrollTo(0, 0);
  }, [id]);

  if (!game) return null;

  // Dynamically select items based on game currency
  const isRobux = game.currency === 'robux';
  const topupItems = isRobux ? robuxItems : diamondItems;
  const currencyLabel = isRobux ? 'Robux' : 'Diamonds';
  // Robux icon: green R circle; Diamond: teal gem
  const CurrencyIcon = () => isRobux
    ? (
        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-green-500 text-white font-black text-[10px] leading-none">R</span>
      )
    : <Gem className="w-4 h-4 text-[#00bcd4]" />;

  const handleQuantity = (type) => {
    if (type === 'inc') setQuantity(q => q + 1);
    if (type === 'dec' && quantity > 1) setQuantity(q => q - 1);
  };

  const calculateTotal = () => {
    if (!selectedItem) return 0;
    return selectedItem.price * quantity;
  };

  const handleCheckoutClick = () => {
    // Reset error
    setValidationError('');

    // Validations
    let err = '';
    if (!userId.trim()) err = 'Mohon masukkan User ID Anda di Langkah 1.';
    else if (!serverId.trim()) err = 'Mohon masukkan Server ID Anda di Langkah 1.';
    else if (!selectedItem) err = 'Mohon pilih nominal top-up di Langkah 2.';
    else if (!quantity || quantity < 1) err = 'Jumlah pembelian minimal 1 di Langkah 3.';
    else if (!selectedPayment) err = 'Mohon pilih metode pembayaran di Langkah 5.';
    else if (!whatsapp.trim()) err = 'Mohon masukkan nomor WhatsApp di Langkah 6.';
    
    if (err) {
      setValidationError(err);
      if (window.innerWidth < 1024) {
        alert(err);
      }
      return;
    }
    
    // If all valid, open confirmation modal
    setIsConfirmOpen(true);
  };

  const handleConfirmPayment = () => {
    setIsConfirmOpen(false);
    setIsSuccessOpen(true);
  };

  const SectionTitle = ({ num, title }) => (
    <div className="flex items-center mb-4">
      <div className="bg-primary text-white font-bold text-lg w-10 h-10 flex items-center justify-center rounded-l-lg rounded-r-sm mr-4">
        {num}
      </div>
      <h2 className="text-white font-bold text-lg">{title}</h2>
    </div>
  );

  if (game.category === 'Joki MLBB') {
    return <JokiLayout game={game} />;
  }

  if (game.category === 'Beli Akun') {
    return (
      <div className="animate-fade-in pb-20">
        <TransactionHero game={game} />
        <div className="max-w-4xl mx-auto mt-8 px-4">
          <div className="bg-surface border border-primary/30 rounded-2xl p-8 text-center shadow-[0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-black text-white mb-4">Informasi Pembelian Akun</h2>
            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed max-w-2xl mx-auto">
              Katalog website ini hanya menampilkan informasi akun yang tersedia. Demi menjaga keamanan dan menghindari penipuan, pembelian akun <strong className="text-primary">tidak dapat diproses secara otomatis melalui website.</strong>
            </p>
            <div className="bg-[#0a0c10] rounded-xl p-6 border border-white/5 mb-8 inline-block text-left shadow-inner">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <Star className="text-yellow-400 w-5 h-5" /> Cara Membeli Akun:
              </h3>
              <ul className="text-gray-300 space-y-2 list-disc list-inside text-sm md:text-base">
                <li>Screenshot halaman akun ini.</li>
                <li>Hubungi Admin Khadoetz Store melalui WhatsApp.</li>
                <li>Atau kunjungi Store Offline kami untuk transaksi langsung (COD).</li>
              </ul>
            </div>
            <div>
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <Headset className="w-5 h-5" /> Hubungi Admin via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in pb-20">
      <TransactionHero game={game} />

      <div className="flex flex-col lg:flex-row gap-6">
        <TopUpForm 
          game={game}
          userId={userId} setUserId={setUserId}
          serverId={serverId} setServerId={setServerId}
          selectedItem={selectedItem} setSelectedItem={setSelectedItem}
          quantity={quantity} handleQuantity={handleQuantity}
          promoCode={promoCode} setPromoCode={setPromoCode}
          selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment}
          openPaymentCategory={openPaymentCategory} setOpenPaymentCategory={setOpenPaymentCategory}
          whatsapp={whatsapp} setWhatsapp={setWhatsapp}
          topupItems={topupItems} CurrencyIcon={CurrencyIcon}
          calculateTotal={calculateTotal} faqs={faqs}
        />

        <CheckoutSidebar 
          game={game}
          selectedItem={selectedItem}
          quantity={quantity}
          calculateTotal={calculateTotal}
          validationError={validationError}
          handleCheckoutClick={handleCheckoutClick}
        />
      </div>

      <ConfirmModal 
        isOpen={isConfirmOpen} 
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleConfirmPayment}
        data={{
          game,
          selectedItem,
          quantity,
          userId,
          serverId,
          selectedPayment,
          whatsapp,
          promoCode
        }}
      />

      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
      />

      <MobileCheckoutBar 
        selectedItem={selectedItem}
        calculateTotal={calculateTotal}
        handleCheckoutClick={handleCheckoutClick}
      />
    </div>
  );
};

export default Transaction;
