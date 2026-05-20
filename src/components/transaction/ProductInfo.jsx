import React, { useState } from 'react';

const ProductInfo = ({ game }) => {
  const [activeTab, setActiveTab] = useState('description');

  if (!game) return null;

  return (
    <div className="bg-surface rounded-2xl border border-white/8 mt-6 overflow-hidden">
      <div className="flex border-b border-white/8">
        <button
          onClick={() => setActiveTab('description')}
          className={`flex-1 py-4 text-center font-semibold transition-colors ${
            activeTab === 'description' ? 'text-primary border-b-2 border-primary bg-background/50' : 'text-gray-400 hover:text-white'
          }`}
        >
          Deskripsi
        </button>
        <button
          onClick={() => setActiveTab('specs')}
          className={`flex-1 py-4 text-center font-semibold transition-colors ${
            activeTab === 'specs' ? 'text-primary border-b-2 border-primary bg-background/50' : 'text-gray-400 hover:text-white'
          }`}
        >
          Spesifikasi Akun
        </button>
      </div>

      <div className="p-6 text-gray-300 text-sm leading-relaxed">
        {activeTab === 'description' ? (
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Tentang {game.title}</h3>
            <p>{game.description || 'Deskripsi game tidak tersedia.'}</p>
          </div>
        ) : (
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Spesifikasi Detail</h3>
            <ul className="list-disc pl-5 space-y-2">
              {game.specs ? game.specs.map((spec, i) => <li key={i}>{spec}</li>) : <li>Informasi tidak tersedia.</li>}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
