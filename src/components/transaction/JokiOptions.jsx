import React from 'react';
import { Zap, CheckCircle, Star as StarIcon } from 'lucide-react';
import { FaKhanda, FaCrown, FaStar } from 'react-icons/fa';
import { formatCurrency } from '../../utils/formatters';

const SectionTitle = ({ num, title }) => (
  <div className="flex items-center mb-4">
    <div className="bg-primary text-white font-bold text-lg w-10 h-10 flex items-center justify-center rounded-l-lg rounded-r-sm mr-4 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
      {num}
    </div>
    <h2 className="text-white font-bold text-lg tracking-tight">{title}</h2>
  </div>
);

const packageCategories = [
  { 
    title: 'Epic', icon: <FaKhanda className="text-blue-400" />,
    packages: [
      { id: 'epic-legend', name: 'EPIC → LEGEND V', price: 189000 },
      { id: 'epic-mythic1', name: 'EPIC I → MYTHIC', price: 250425 },
      { id: 'epic-mythic2', name: 'EPIC II → MYTHIC', price: 288225 },
      { id: 'epic-mythic3', name: 'EPIC III → MYTHIC', price: 326025 },
      { id: 'epic-mythic4', name: 'EPIC IV → MYTHIC', price: 363825 },
      { id: 'epic-mythic5', name: 'EPIC V → MYTHIC', price: 401625 },
    ]
  },
  {
    title: 'Legend', icon: <FaCrown className="text-purple-400" />,
    packages: [
      { id: 'legend-mythic1', name: 'LEGEND I → MYTHIC', price: 42525 },
      { id: 'legend-mythic2', name: 'LEGEND II → MYTHIC', price: 85050 },
      { id: 'legend-mythic3', name: 'LEGEND III → MYTHIC', price: 127575 },
      { id: 'legend-mythic4', name: 'LEGEND IV → MYTHIC', price: 170100 },
      { id: 'legend-mythic5', name: 'LEGEND V → MYTHIC', price: 212625 },
    ]
  },
  {
    title: 'Mythic', icon: <FaStar className="text-red-400" />,
    packages: [
      { id: 'mythic-grade', name: 'MYTHIC GRADING (15 Bintang)', price: 189000 },
      { id: 'mythic-honor25', name: 'MYTHIC → MYTHIC HONOR 25', price: 378000 },
      { id: 'mythic-glory50', name: 'MYTHIC → MYTHIC GLORY 50', price: 897750 },
    ]
  },
];

const JokiOptions = ({
  rankConfigs,
  selectedRank, setSelectedRank,
  selectedPackage, setSelectedPackage,
  setPackagePrice, setPackageName,
  starsCount, setStarsCount, handleStarsChange,
  calculatePricePerStar, calculateTotal
}) => {
  return (
    <div className="bg-[#0f1118]/60 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/5 shadow-2xl">
      <SectionTitle num="2" title="Pilih Nominal" />
      
      <div className="ml-0 md:ml-14 space-y-8">
        {/* Section: Per Star */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-primary fill-current" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Per Star</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Object.keys(rankConfigs).map(key => {
              const r = rankConfigs[key];
              const isSelected = selectedRank === key && !selectedPackage;
              return (
                <button
                  key={key}
                  onClick={() => { setSelectedRank(key); setSelectedPackage(null); }}
                  className={`relative p-4 rounded-xl border text-left transition-all duration-300 group ${
                    isSelected
                      ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(16,185,129,0.2)] ring-1 ring-primary/40'
                      : 'border-white/8 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-bold text-white text-xs uppercase tracking-wider">{r.name}</span>
                    {isSelected && <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />}
                  </div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-9 h-9 flex items-center justify-center">
                      {r.icon}
                    </div>
                    <span className={`text-base font-bold ${isSelected ? 'text-primary' : 'text-white'}`}>
                      {formatCurrency(r.price)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-gray-500">
                    <Zap className="w-2.5 h-2.5" /> PROSES CEPAT
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section: Paket Rank Tujuan */}
        {packageCategories.map(section => (
          <div key={section.title}>
            <div className="flex items-center gap-2 mb-4">
              {section.icon}
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">{section.title}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {section.packages.map(pkg => {
                const isSelected = selectedPackage === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    onClick={() => { setSelectedPackage(pkg.id); setSelectedRank(null); setPackagePrice(pkg.price); setPackageName(pkg.name); }}
                    className={`relative p-4 rounded-xl border text-left transition-all duration-300 ${
                      isSelected
                        ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(16,185,129,0.2)] ring-1 ring-primary/40'
                        : 'border-white/8 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-bold text-white text-[10px] md:text-xs uppercase tracking-wider leading-tight">{pkg.name}</span>
                      {isSelected && <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 ml-1" />}
                    </div>
                    <div className={`text-sm md:text-base font-bold mb-2 ${isSelected ? 'text-primary' : 'text-white'}`}>
                      {formatCurrency(pkg.price)}
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-gray-500">
                      <Zap className="w-2.5 h-2.5" /> PROSES CEPAT
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Star Calculator - Only shown when Per Star is selected */}
        {selectedRank && !selectedPackage && (
          <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h4 className="font-bold text-white text-sm md:text-base flex items-center gap-2">
                  <StarIcon className="w-5 h-5 text-primary fill-current" /> Kalkulator Jumlah Bintang
                </h4>
                <p className="text-xs text-gray-400 mt-1">Sesuaikan jumlah bintang (bintang target dikurangi bintang sekarang)</p>
              </div>
              <div className="flex items-center gap-3 bg-[#0a0c10] border border-white/10 rounded-xl px-4 py-2 self-stretch md:self-auto justify-between">
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Bintang</span>
                <span className="text-lg font-black text-primary animate-pulse flex items-center gap-1">{starsCount} <FaStar /></span>
              </div>
            </div>

            <div className="flex items-center gap-4 py-2">
              <button 
                onClick={() => handleStarsChange('dec')}
                className="w-12 h-12 rounded-xl bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary text-white font-black text-xl flex items-center justify-center transition-all active:scale-95"
              >-</button>
              <div className="flex-1 px-4 relative flex items-center">
                <input 
                  type="range" min="1" max="100" value={starsCount} 
                  onChange={e => setStarsCount(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
                />
              </div>
              <button 
                onClick={() => handleStarsChange('inc')}
                className="w-12 h-12 rounded-xl bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary text-white font-black text-xl flex items-center justify-center transition-all active:scale-95"
              >+</button>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-xs">
              <span className="text-gray-400">Estimasi Tagihan:</span>
              <span className="font-semibold text-white">
                {starsCount} Bintang x {formatCurrency(calculatePricePerStar())} = 
                <span className="text-primary font-bold ml-1">{formatCurrency(calculateTotal())}</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JokiOptions;
