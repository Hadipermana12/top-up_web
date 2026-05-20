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
    if (!userId.trim()) return setValidationError('Mohon masukkan User ID Anda di Langkah 1.');
    if (!serverId.trim()) return setValidationError('Mohon masukkan Server ID Anda di Langkah 1.');
    if (!selectedItem) return setValidationError('Mohon pilih nominal top-up di Langkah 2.');
    if (!quantity || quantity < 1) return setValidationError('Jumlah pembelian minimal 1 di Langkah 3.');
    if (!selectedPayment) return setValidationError('Mohon pilih metode pembayaran di Langkah 5.');
    if (!whatsapp.trim()) return setValidationError('Mohon masukkan nomor WhatsApp di Langkah 6.');
    
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
