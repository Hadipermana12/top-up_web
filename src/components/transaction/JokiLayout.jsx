import React, { useState } from 'react';
import { ShieldCheck, Clock, Zap, Star as StarIcon, Headset, CheckCircle, HelpCircle, Eye, EyeOff, ChevronUp, ChevronDown } from 'lucide-react';
import { FaShieldAlt, FaKhanda, FaCrown, FaStar, FaFire, FaMedal } from 'react-icons/fa';
import mythicImmortalImg from '../../assets/images/mitik-imo.png';
import bannerJoki from '../../assets/images/banner_joki.jfif';
import epicImg from '../../assets/images/epic.png';
import legendImg from '../../assets/images/legend.png';
import mythicHonorImg from '../../assets/images/mytich_honor.png';
import grandmasterImg from '../../assets/images/grandmaster.png';
import mythicImg from '../../assets/images/mytich.png';
import mythicGloryImg from '../../assets/images/mytich-glory.png';
import { formatCurrency } from '../../utils/formatters';
import { paymentCategories } from '../../mocks/data';
import ConfirmModal from '../checkout/ConfirmModal';
import SuccessModal from '../checkout/SuccessModal';

import JokiHero from './JokiHero';
import JokiAccountForm from './JokiAccountForm';
import JokiOptions from './JokiOptions';
import JokiPaymentSelection from './JokiPaymentSelection';
import JokiSidebar from './JokiSidebar';
import MobileJokiCheckoutBar from './MobileJokiCheckoutBar';
const JokiLayout = ({ game }) => {
  // Account Joki State
  const [userId, setUserId] = useState('');
  const [serverId, setServerId] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginVia, setLoginVia] = useState('moonton');
  const [nickname, setNickname] = useState('');
  const [heroRequest, setHeroRequest] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  // Joki Options State
  const [selectedRank, setSelectedRank] = useState('epic');
  const [starsCount, setStarsCount] = useState(5);
  const [promoCode, setPromoCode] = useState('');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [openPaymentCategory, setOpenPaymentCategory] = useState('coinpedia');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [packagePrice, setPackagePrice] = useState(0);
  const [packageName, setPackageName] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Rank configurations with pricing per star
  const RankIcon = ({ src, alt }) => <img src={src} alt={alt} className="w-7 h-7 object-contain drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]" />;

  const rankConfigs = {
    grandmaster: { name: 'Grandmaster', price: 4000, color: 'from-[#d97706] to-[#b45309]', icon: <RankIcon src={grandmasterImg} alt="Grandmaster" /> },
    epic: { name: 'Epic', price: 5500, color: 'from-[#2563eb] to-[#1d4ed8]', icon: <RankIcon src={epicImg} alt="Epic" /> },
    legend: { name: 'Legend', price: 7500, color: 'from-[#9333ea] to-[#7e22ce]', icon: <RankIcon src={legendImg} alt="Legend" /> },
    mythic: { name: 'Mythic (0-25)', price: 11000, color: 'from-[#e11d48] to-[#be123c]', icon: <RankIcon src={mythicImg} alt="Mythic" /> },
    honor: { name: 'Mythical Honor (25-50)', price: 13500, color: 'from-[#be123c] to-[#9f1239]', icon: <RankIcon src={mythicHonorImg} alt="Mythic Honor" /> },
    glory: { name: 'Mythical Glory (50-100)', price: 16000, color: 'from-[#ca8a04] to-[#a16207]', icon: <RankIcon src={mythicGloryImg} alt="Mythic Glory" /> },
    immortal: { name: 'Mythical Immortal (100+)', price: 22000, color: 'from-[#10b981] to-[#047857]', icon: <RankIcon src={mythicImmortalImg} alt="Mythical Immortal" /> },
  };

  const calculatePricePerStar = () => {
    return rankConfigs[selectedRank]?.price || 0;
  };

  const calculateTotal = () => {
    if (selectedPackage) return packagePrice;
    return calculatePricePerStar() * starsCount;
  };

  const handleStarsChange = (action) => {
    if (action === 'inc') setStarsCount(s => Math.min(100, s + 1));
    if (action === 'dec') setStarsCount(s => Math.max(1, s - 1));
  };

  const handleCheckoutClick = () => {
    setValidationError('');

    // Validations
    if (!userId.trim()) return setValidationError('Mohon masukkan Game ID Anda.');
    if (!serverId.trim()) return setValidationError('Mohon masukkan Server ID Anda.');
    if (!nickname.trim()) return setValidationError('Mohon masukkan Nickname akun Anda.');
    if (!loginEmail.trim()) return setValidationError('Mohon masukkan Email / No HP Login.');
    if (!loginPassword.trim()) return setValidationError('Mohon masukkan Password Login.');
    if (!whatsapp.trim()) return setValidationError('Mohon masukkan nomor WhatsApp untuk komunikasi.');
    if (!selectedPayment) return setValidationError('Mohon pilih metode pembayaran.');

    setIsConfirmOpen(true);
  };

  const handleConfirmPayment = () => {
    setIsConfirmOpen(false);
    setIsSuccessOpen(true);
  };

  const SectionTitle = ({ num, title }) => (
    <div className="flex items-center mb-4">
      <div className="bg-primary text-white font-bold text-lg w-10 h-10 flex items-center justify-center rounded-l-lg rounded-r-sm mr-4 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
        {num}
      </div>
      <h2 className="text-white font-bold text-lg tracking-tight">{title}</h2>
    </div>
  );

  return (
    <div className="animate-fade-in pb-20">
      <JokiHero game={game} />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Form & Selection */}
        <div className="flex-1 space-y-6">
          <JokiAccountForm 
            userId={userId} setUserId={setUserId}
            serverId={serverId} setServerId={setServerId}
            nickname={nickname} setNickname={setNickname}
            whatsapp={whatsapp} setWhatsapp={setWhatsapp}
            loginVia={loginVia} setLoginVia={setLoginVia}
            loginEmail={loginEmail} setLoginEmail={setLoginEmail}
            loginPassword={loginPassword} setLoginPassword={setLoginPassword}
            showPassword={showPassword} setShowPassword={setShowPassword}
            heroRequest={heroRequest} setHeroRequest={setHeroRequest}
          />

          <JokiOptions 
            rankConfigs={rankConfigs}
            selectedRank={selectedRank} setSelectedRank={setSelectedRank}
            selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage}
            setPackagePrice={setPackagePrice} setPackageName={setPackageName}
            starsCount={starsCount} setStarsCount={setStarsCount}
            handleStarsChange={handleStarsChange}
            calculatePricePerStar={calculatePricePerStar}
            calculateTotal={calculateTotal}
          />

          <JokiPaymentSelection 
            promoCode={promoCode} setPromoCode={setPromoCode}
            selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment}
            openPaymentCategory={openPaymentCategory} setOpenPaymentCategory={setOpenPaymentCategory}
            calculateTotal={calculateTotal}
          />
        </div>

        {/* Right Column - Boost Summary Sidebar */}
        <JokiSidebar 
          selectedRank={selectedRank}
          selectedPackage={selectedPackage}
          packageName={packageName}
          rankConfigs={rankConfigs}
          starsCount={starsCount}
          nickname={nickname}
          calculatePricePerStar={calculatePricePerStar}
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
          selectedItem: {
            name: `Joki MLBB: ${selectedPackage ? packageName : rankConfigs[selectedRank]?.name}`,
            price: calculatePricePerStar()
          },
          quantity: starsCount,
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

      <MobileJokiCheckoutBar 
        selectedRank={selectedRank}
        selectedPackage={selectedPackage}
        packageName={packageName}
        rankConfigs={rankConfigs}
        calculateTotal={calculateTotal}
        handleCheckoutClick={handleCheckoutClick}
      />
    </div>
  );
};

export default JokiLayout;
