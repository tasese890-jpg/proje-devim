import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Compass, Globe2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050508] text-gray-400 pt-20 pb-12 z-10 border-t border-white/10 overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-rose-500" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-4">
            <a href="#hero" className="flex items-center space-x-2.5">
              <span className="text-3xl">🇵🇹</span>
              <span className="font-playfair text-2xl font-black text-gradient-pt tracking-wider">Portugal</span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Keşiflerin vatanı, fado'nun ruhu, saudade'nin yurdu. Avrupa'nın en batısındaki büyüleyici topraklar için hazırlanmış en kapsamlı dijital rehber.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-amber-400 block mb-1">Motto:</span>
              <p className="font-dancing text-lg text-emerald-300">"Esta é a ditosa Pátria minha amada"</p>
              <span className="text-[10px] text-gray-500 block">— Luís de Camões</span>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 border-b border-white/10 pb-2 flex items-center space-x-2">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Keşfet</span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#genel" className="hover:text-emerald-400 transition-colors">Genel Bilgiler & Nüfus</a></li>
              <li><a href="#cografya" className="hover:text-emerald-400 transition-colors">Coğrafya ve Sınırlar</a></li>
              <li><a href="#tarih" className="hover:text-emerald-400 transition-colors">Tarihçe ve Zaman Tüneli</a></li>
              <li><a href="#siyaset" className="hover:text-emerald-400 transition-colors">Siyasi Yönetim Yapısı</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 border-b border-white/10 pb-2 flex items-center space-x-2">
              <Heart className="w-4 h-4 text-amber-400" />
              <span>Kültür & Yaşam</span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#kultur" className="hover:text-amber-400 transition-colors">Sanat, Fado & Edebiyat</a></li>
              <li><a href="#mutfak" className="hover:text-amber-400 transition-colors">Geleneksel Mutfak & Şaraplar</a></li>
              <li><a href="#spor" className="hover:text-amber-400 transition-colors">Spor Başarıları & Sörf</a></li>
              <li><a href="#ekonomi" className="hover:text-amber-400 transition-colors">Ekonomi & Startup Ekosistemi</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 border-b border-white/10 pb-2 flex items-center space-x-2">
              <Globe2 className="w-4 h-4 text-rose-500" />
              <span>Özel Bölümler</span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#turizm" className="hover:text-rose-400 transition-colors">Turizm Rotaları & Adalar</a></li>
              <li><a href="#ilginc" className="hover:text-rose-400 transition-colors">Şaşırtıcı 12 İlginç Bilgi</a></li>
              <li><a href="#turkiye" className="hover:text-rose-400 transition-colors">🇹🇷-🇵🇹 İkili İlişkiler</a></li>
              <li><a href="#quiz" className="hover:text-rose-400 transition-colors">İnteraktif Bilgi Yarışması</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0 font-mono">
          <div className="flex items-center space-x-2">
            <span>© 2026 Portekiz Kapsamlı Rehberi. Tüm Hakları Saklıdır.</span>
          </div>
          <div>
            <span>Gelişmiş Web Teknolojileri & Kusursuz Tasarım</span>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.5)] transform transition-all duration-300 hover:scale-110 cursor-pointer ${
          showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'
        }`}
        aria-label="Yukarı Çık"
      >
        <ArrowUp className="w-6 h-6 font-black" />
      </button>
    </footer>
  );
};
