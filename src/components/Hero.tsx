import React, { useState, useEffect } from 'react';
import { Compass, MapPin, Eye } from 'lucide-react';
import { PORTUGAL_GALLERY_INTRO } from '../data/portugalData';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeModalImg, setActiveModalImg] = useState<string | null>(null);

  const heroBgs = [
    "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80", // Lisbon tram
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80", // Algarve
    "https://images.unsplash.com/photo-1555881400-69c5bf5f4094?w=1920&q=80", // Porto
    "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=1920&q=80", // Sintra
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBgs.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroBgs.length]);

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Background carousel */}
      {heroBgs.map((bg, idx) => (
        <div
          key={bg}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 transform scale-105 ${
            idx === currentSlide ? 'opacity-35 z-0' : 'opacity-0 -z-10'
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f] z-1" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-12 mb-16">
        <div className="inline-flex items-center space-x-2 bg-emerald-500/15 border border-emerald-500/30 px-5 py-2 rounded-full text-emerald-400 text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>Avrupa'nın En Batı Ucu</span>
        </div>

        <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tight">
          <span className="text-gradient-pt filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            Portekiz
          </span>
        </h1>

        <p className="font-dancing text-2xl sm:text-3xl md:text-4xl text-amber-300 mb-6 font-semibold filter drop-shadow">
          República Portuguesa
        </p>

        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
          Keşiflerin vatanı, <span className="text-white font-semibold underline decoration-emerald-500">fado</span>'nun ruhu, <span className="text-white font-semibold underline decoration-amber-400">saudade</span>'nin yurdu. Atlas Okyanusu'nun kıyısında tarih, kültür, lezzet ve doğanın buluştuğu büyülü topraklara hoş geldiniz.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#genel"
            className="flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 rounded-full text-base font-bold shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.6)] transform hover:-translate-y-1 transition-all duration-300"
          >
            <Compass className="w-5 h-5" />
            <span>Kapsamlı Rehberi Başlat</span>
          </a>
          <a
            href="#turizm"
            className="flex items-center space-x-2 bg-glass border-2 border-white/20 hover:border-amber-400 text-white hover:text-amber-300 px-8 py-4 rounded-full text-base font-bold shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>Turizm Rotaları</span>
          </a>
        </div>
      </div>

      {/* User request: "daha fazla resim ekle en başa" -> Gorgeous Intro Gallery Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-8 mb-12">
        <div className="text-center mb-8">
          <h3 className="font-playfair text-2xl md:text-3xl text-white font-bold tracking-wide">
            📷 İlk Bakış: Portekiz Kartpostalları
          </h3>
          <p className="text-sm text-gray-400 mt-1">Büyütmek için fotoğrafların üzerine tıklayın</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTUGAL_GALLERY_INTRO.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveModalImg(item.image)}
              className="group relative h-64 md:h-72 rounded-3xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-[0_20px_40px_rgba(16,185,129,0.25)]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="font-playfair text-xl text-white font-bold mb-1 transform group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-300 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="relative z-10 flex items-center space-x-3 mt-4">
        {heroBgs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-12 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentSlide ? 'bg-gradient-to-r from-emerald-500 to-amber-400 w-16 shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-gray-700/60 hover:bg-gray-500'
            }`}
            aria-label={`Slayt ${idx + 1}`}
          />
        ))}
      </div>

      {/* Image Modal */}
      {activeModalImg && (
        <div
          className="fixed inset-0 z-[100000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer animate-fadeIn"
          onClick={() => setActiveModalImg(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            <img src={activeModalImg} alt="Büyük Görünüm" className="w-full max-h-[85vh] object-contain" />
            <div className="absolute top-4 right-4 bg-black/80 text-white p-2 rounded-full hover:bg-rose-600 transition-colors cursor-pointer">
              <span className="text-sm font-bold px-2">Kapat (X)</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
