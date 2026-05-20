import React from 'react';
import { X, CheckCircle, Info } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
import { paymentCategories } from '../../mocks/data';

const ConfirmModal = ({ isOpen, onClose, onConfirm, data }) => {
  if (!isOpen || !data) return null;

  const { game, selectedItem, quantity, userId, serverId, selectedPayment, whatsapp } = data;

  // Find payment name
  let paymentName = '';
  paymentCategories.forEach(cat => {
    const method = cat.methods.find(m => m.id === selectedPayment);
    if (method) paymentName = method.name;
  });

  const totalPrice = selectedItem.price * quantity;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-background w-full max-w-md rounded-2xl border border-white/8 shadow-2xl relative animate-scale-in flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/8 bg-surface rounded-t-2xl">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Info className="w-5 h-5 text-primary" /> Konfirmasi Pesanan
          </h2>
          <button onClick={onClose} className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-sm">
          <p className="text-gray-400 mb-4">Mohon pastikan data pesanan Anda sudah benar sebelum melakukan pembayaran.</p>

          <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="flex justify-between">
              <span className="text-gray-400">Game</span>
              <span className="text-white font-semibold">{game.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">ID / Server</span>
              <span className="text-white font-semibold">{userId} {serverId ? `(${serverId})` : ''}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Item</span>
              <span className="text-white font-semibold">{selectedItem.name} x{quantity}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Pembayaran</span>
              <span className="text-white font-semibold">{paymentName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">No. WhatsApp</span>
              <span className="text-white font-semibold">{whatsapp}</span>
            </div>
          </div>

          <div className="flex justify-between items-center p-4 bg-primary/10 rounded-xl border border-primary/20 mt-4">
            <span className="font-bold text-gray-300">Total Tagihan</span>
            <span className="font-bold text-2xl text-primary">{formatCurrency(totalPrice)}</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 pt-0 flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 py-3 rounded-xl font-bold text-white bg-gray-700 hover:bg-gray-600 transition-all"
          >
            Batal
          </button>
          <button 
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl font-bold text-white bg-primary hover:bg-primaryHover transition-all flex items-center justify-center gap-2"
          >
            Lanjut Bayar <CheckCircle className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ConfirmModal;
