import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

const SectionTitle = ({ num, title }) => (
  <div className="flex items-center mb-4">
    <div className="bg-primary text-white font-bold text-lg w-10 h-10 flex items-center justify-center rounded-l-lg rounded-r-sm mr-4 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
      {num}
    </div>
    <h2 className="text-white font-bold text-lg tracking-tight">{title}</h2>
  </div>
);

const JokiAccountForm = ({
  userId, setUserId,
  serverId, setServerId,
  nickname, setNickname,
  whatsapp, setWhatsapp,
  loginVia, setLoginVia,
  loginEmail, setLoginEmail,
  loginPassword, setLoginPassword,
  showPassword, setShowPassword,
  heroRequest, setHeroRequest
}) => {
  return (
    <div className="bg-[#0f1118]/60 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/5 shadow-2xl">
      <SectionTitle num="1" title="Lengkapi Data Akun Mobile Legends" />
      
      <div className="ml-0 md:ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">User ID</label>
          <input 
            type="text" 
            value={userId} 
            onChange={e => setUserId(e.target.value)} 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" 
            placeholder="Contoh: 12345678" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Server ID</label>
          <input 
            type="text" 
            value={serverId} 
            onChange={e => setServerId(e.target.value)} 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" 
            placeholder="Contoh: 1234" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Nickname Akun</label>
          <input 
            type="text" 
            value={nickname} 
            onChange={e => setNickname(e.target.value)} 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" 
            placeholder="Masukkan Nickname" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">WhatsApp Kamu</label>
          <input 
            type="text" 
            value={whatsapp} 
            onChange={e => setWhatsapp(e.target.value)} 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" 
            placeholder="Contoh: 08123456789" 
          />
        </div>
      </div>

      <div className="ml-0 md:ml-14 mt-6 pt-6 border-t border-white/5 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Login Akun Melalui</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: 'moonton', name: 'Moonton' },
              { id: 'vk', name: 'VK' },
              { id: 'facebook', name: 'Facebook' },
              { id: 'tiktok', name: 'TikTok' }
            ].map(platform => (
              <button
                key={platform.id}
                onClick={() => setLoginVia(platform.id)}
                className={`py-3 rounded-xl border text-sm font-semibold tracking-wide transition-all ${
                  loginVia === platform.id
                    ? 'border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                    : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                }`}
              >
                {platform.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Email / No HP Akun</label>
            <input 
              type="text" 
              value={loginEmail} 
              onChange={e => setLoginEmail(e.target.value)} 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" 
              placeholder="Masukkan Email/HP Login" 
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Password Akun</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                value={loginPassword} 
                onChange={e => setLoginPassword(e.target.value)} 
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" 
                placeholder="Masukkan Password Login" 
              />
              <button 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Request Hero / Catatan Khusus (Opsional)</label>
          <input 
            type="text" 
            value={heroRequest} 
            onChange={e => setHeroRequest(e.target.value)} 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300" 
            placeholder="Contoh: Req Hero Fanny, Gusion, Chou (Min 3 hero)" 
          />
        </div>
      </div>
    </div>
  );
};

export default JokiAccountForm;
