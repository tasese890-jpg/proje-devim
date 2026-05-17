import React, { useState, useEffect } from 'react';
import { Users, Building2, MapPin, Globe2, Landmark, Flag, Euro, Clock, Phone, Music, Compass } from 'lucide-react';
import { GENERAL_STATS, POPULATION_CITIES, DEMOGRAPHIC_INSIGHTS } from '../data/portugalData';

export const GeneralInfo: React.FC = () => {
  const [popCount, setPopCount] = useState(10300000);
  const [activeCityTab, setActiveCityTab] = useState(POPULATION_CITIES[0]);

  // Live population simulation increment
  useEffect(() => {
    const timer = setInterval(() => {
      setPopCount(prev => prev + Math.floor(Math.random() * 2));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="genel" className="relative py-24 bg-gradient-to-b from-[#0a0a0f] via-[#12121c] to-[#0a0a0f] z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Landmark className="w-4 h-4" />
            <span>Resmi Kimlik & İstatistikler</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Genel Bilgiler & <span className="text-gradient-pt font-extrabold underline decoration-emerald-500">Nüfus Rehberi</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Portekiz Cumhuriyeti'nin demografik yapısı, nüfus dinamikleri ve resmi yönetim profili.
          </p>
        </div>

        {/* User Request: Prominent Animated Population Display */}
        <div className="bg-gradient-to-r from-emerald-900/40 via-amber-900/30 to-rose-900/40 p-1 rounded-3xl mb-16 shadow-[0_0_50px_rgba(16,185,129,0.15)] border border-emerald-500/30">
          <div className="bg-[#0a0a0f]/90 backdrop-blur-2xl rounded-[23px] p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />
            
            <span className="inline-block p-4 rounded-2xl bg-emerald-500/20 text-emerald-400 text-4xl mb-4 shadow-inner">
              👥
            </span>
            <h3 className="text-xs sm:text-sm uppercase tracking-[0.3em] font-extrabold text-emerald-400 mb-2">
              Güncel Tahmini Nüfus Sayacı
            </h3>
            <div className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gradient-pt tracking-tighter mb-4 font-mono">
              {popCount.toLocaleString('tr-TR')}
            </div>
            <p className="text-base sm:text-xl text-amber-300 max-w-2xl mx-auto font-medium">
              Portekiz nüfusunun ~%68'i sahil şeridindeki büyük metropollerde ve kentsel alanlarda yaşar. Medyan yaş 46.8'dir.
            </p>
          </div>
        </div>

        {/* 4x2 General Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {GENERAL_STATS.map((stat, idx) => (
            <div key={idx} className="bg-glass bg-glass-hover p-6 rounded-2xl border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="font-playfair text-3xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-emerald-400 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-400">{stat.detail}</div>
            </div>
          ))}
        </div>

        {/* User Request: Detailed City Populations Showcase */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <Building2 className="w-8 h-8 text-amber-400" />
            <h3 className="font-playfair text-3xl font-bold text-white">
              Büyük Şehirler ve Nüfus Dağılımı
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* City Selector List */}
            <div className="lg:col-span-1 space-y-3">
              {POPULATION_CITIES.map((city) => (
                <button
                  key={city.city}
                  onClick={() => setActiveCityTab(city)}
                  className={`w-full text-left p-4 rounded-2xl flex items-center justify-between border transition-all duration-300 cursor-pointer ${
                    activeCityTab.city === city.city
                      ? 'bg-gradient-to-r from-emerald-600/30 to-emerald-900/20 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.2)] font-bold'
                      : 'bg-glass border-white/5 text-gray-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <MapPin className={`w-5 h-5 ${activeCityTab.city === city.city ? 'text-amber-400' : 'text-gray-500'}`} />
                    <span className="text-base">{city.city}</span>
                  </div>
                  <span className="text-xs font-mono bg-black/40 px-3 py-1 rounded-full text-emerald-400 font-bold border border-white/10">
                    {city.population}
                  </span>
                </button>
              ))}
            </div>

            {/* Active City Detail Panel */}
            <div className="lg:col-span-2 bg-glass border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col sm:flex-row">
              <div className="sm:w-1/2 h-64 sm:h-auto relative overflow-hidden">
                <img
                  src={activeCityTab.image}
                  alt={activeCityTab.city}
                  className="w-full h-full object-cover transform scale-105 transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:hidden" />
                <div className="absolute bottom-4 left-4 sm:hidden">
                  <span className="bg-emerald-500/80 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                    {activeCityTab.city}
                  </span>
                </div>
              </div>
              <div className="sm:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
                    <Globe2 className="w-4 h-4" />
                    <span>Şehir ve Nüfus Analizi</span>
                  </div>
                  <h4 className="font-playfair text-3xl font-bold text-white mb-4">
                    {activeCityTab.city}
                  </h4>
                  <div className="grid grid-cols-2 gap-4 bg-black/30 p-4 rounded-2xl mb-6 border border-white/5">
                    <div>
                      <span className="text-xs text-gray-400 block mb-1">Şehir İçi Nüfus</span>
                      <span className="text-lg font-bold text-emerald-400 font-mono">{activeCityTab.population}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block mb-1">Metropol Havzası</span>
                      <span className="text-lg font-bold text-amber-400 font-mono">{activeCityTab.metroPopulation}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {activeCityTab.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>Portekiz İstatistik Kurumu (INE)</span>
                  <span className="text-emerald-400">Güncel Veriler</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demographic Insights */}
        <div className="mb-20">
          <h3 className="font-playfair text-2xl font-bold text-white mb-6 text-center">
            📊 Demografik Derinlik & Toplumsal Dinamikler
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEMOGRAPHIC_INSIGHTS.map((item, idx) => (
              <div key={idx} className="bg-glass p-6 rounded-2xl border border-white/10">
                <span className="text-2xl font-black text-gradient-pt block mb-2">{item.stat}</span>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Official Country Profile Table */}
        <div className="bg-glass border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
          <h3 className="font-playfair text-3xl font-bold text-white mb-8 flex items-center space-x-3 border-b border-white/10 pb-6">
            <Landmark className="w-8 h-8 text-emerald-400" />
            <span>Resmi Ülke Profili</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm">
            <div className="flex items-center justify-between border-b border-white/5 py-3.5">
              <span className="text-emerald-400 font-semibold flex items-center space-x-2.5">
                <Flag className="w-4 h-4 text-amber-400" />
                <span>Resmi Adı</span>
              </span>
              <span className="text-gray-200 font-medium">Portekiz Cumhuriyeti (República Portuguesa)</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 py-3.5">
              <span className="text-emerald-400 font-semibold flex items-center space-x-2.5">
                <Landmark className="w-4 h-4 text-amber-400" />
                <span>Başkent</span>
              </span>
              <span className="text-gray-200 font-medium">Lizbon (Lisboa)</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 py-3.5">
              <span className="text-emerald-400 font-semibold flex items-center space-x-2.5">
                <Globe2 className="w-4 h-4 text-amber-400" />
                <span>Resmi Dil</span>
              </span>
              <span className="text-gray-200 font-medium">Portekizce ve Mirandaca (bölgesel)</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 py-3.5">
              <span className="text-emerald-400 font-semibold flex items-center space-x-2.5">
                <Users className="w-4 h-4 text-amber-400" />
                <span>Yönetim Biçimi</span>
              </span>
              <span className="text-gray-200 font-medium">Yarı-Başkanlık Tipi Cumhuriyet</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 py-3.5">
              <span className="text-emerald-400 font-semibold flex items-center space-x-2.5">
                <Euro className="w-4 h-4 text-amber-400" />
                <span>Para Birimi</span>
              </span>
              <span className="text-gray-200 font-medium">Euro (€) (2002'den önce Esküdo)</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 py-3.5">
              <span className="text-emerald-400 font-semibold flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Zaman Dilimi</span>
              </span>
              <span className="text-gray-200 font-medium">WET (UTC+0) / Yaz: WEST (UTC+1)</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 py-3.5">
              <span className="text-emerald-400 font-semibold flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Uluslararası Kodlar</span>
              </span>
              <span className="text-gray-200 font-medium">Tel: +351 | İnternet: .pt</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 py-3.5">
              <span className="text-emerald-400 font-semibold flex items-center space-x-2.5">
                <Music className="w-4 h-4 text-amber-400" />
                <span>Ulusal Marş</span>
              </span>
              <span className="text-gray-200 font-medium font-dancing text-base">A Portuguesa</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 py-3.5">
              <span className="text-emerald-400 font-semibold flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Milli Gün</span>
              </span>
              <span className="text-gray-200 font-medium">10 Haziran (Dia de Portugal)</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 py-3.5">
              <span className="text-emerald-400 font-semibold flex items-center space-x-2.5">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Trafik Akışı</span>
              </span>
              <span className="text-gray-200 font-medium">Sağdan (1928'den beri)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
