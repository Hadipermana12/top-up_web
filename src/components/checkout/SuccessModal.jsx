import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SuccessModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleDone = () => {
    onClose();
    navigate('/');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-surface w-full max-w-sm rounded-2xl border border-white/8 p-8 text-center shadow-2xl animate-scale-in">
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">Pembayaran Berhasil!</h2>
        <p className="text-gray-400 text-sm mb-8">
          Pesanan Anda sedang diproses dan item akan segera masuk ke akun Anda dalam waktu kurang dari 1 menit.
        </p>

        <button 
          onClick={handleDone}
          className="w-full py-3 rounded-xl font-bold text-background bg-primary hover:bg-primaryHover transition-all flex items-center justify-center gap-2"
        >
          Kembali ke Beranda <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
