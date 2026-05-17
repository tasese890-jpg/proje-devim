import React from 'react';
import { Handshake, Heart } from 'lucide-react';
import { TURKEY_PORTUGAL_RELATIONS } from '../data/portugalData';

export const TurkeyRelations: React.FC = () => {
  return (
    <section id="turkiye" className="relative py-24 bg-gradient-to-b from-[#0a0a0f] via-[#101820] to-[#0a0a0f] z-10 border-b border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 bg-teal-500/10 border border-teal-500/30 px-5 py-2 rounded-full text-teal-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 shadow-[0_0_25px_rgba(20,184,166,0.25)]">
            <span className="text-lg">🇹🇷</span>
            <Handshake className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-lg">🇵🇹</span>
            <span className="ml-2 font-mono">Dostluk & Stratejik Köprü</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            Türkiye – Portekiz <span className="text-gradient-pt underline decoration-teal-400">İlişkileri</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
            {TURKEY_PORTUGAL_RELATIONS.summary}
          </p>
        </div>

        {/* Flag Visual Break */}
        <div className="bg-glass rounded-3xl p-8 sm:p-12 mb-16 border border-teal-500/30 shadow-[0_0_50px_rgba(20,184,166,0.1)] relative overflow-hidden text-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="flex items-center justify-center space-x-6 sm:space-x-12 mb-6">
            <span className="text-7xl sm:text-9xl filter drop-shadow-[0_10px_20px_rgba(239,68,68,0.5)] transform hover:scale-110 transition-transform cursor-default select-none">🇹🇷</span>
            <div className="p-4 rounded-full bg-teal-500/20 border border-teal-400 text-teal-300 animate-pulse">
              <Heart className="w-8 h-8 fill-current text-rose-500" />
            </div>
            <span className="text-7xl sm:text-9xl filter drop-shadow-[0_10px_20px_rgba(16,185,129,0.5)] transform hover:scale-110 transition-transform cursor-default select-none">🇵🇹</span>
          </div>
          <p className="text-amber-300 font-dancing text-2xl sm:text-3xl max-w-xl mx-auto font-bold tracking-wide">
            "Akdeniz ve Atlantik'in İki Güçlü Kanadı"
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-white font-mono">NATO Müttefikleri</span>
            <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-white font-mono">$3 Milyar Ticaret</span>
            <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-white font-mono">THY Direkt Uçuşları</span>
          </div>
        </div>

        {/* 6 Relationship Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TURKEY_PORTUGAL_RELATIONS.points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-glass bg-glass-hover p-8 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between group transform transition-all duration-500 hover:-translate-y-2"
            >
              <div>
                <div className="text-4xl mb-4 p-3 bg-teal-500/10 rounded-2xl inline-block border border-teal-500/20 group-hover:scale-110 transition-transform">
                  {pt.icon}
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  {pt.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {pt.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-teal-400/80">
                <span>İkili İşbirliği Protokolü</span>
                <span className="font-bold">🇹🇷 - 🇵🇹</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
