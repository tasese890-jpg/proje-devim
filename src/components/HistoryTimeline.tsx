import React, { useState } from 'react';
import { Scroll, Calendar, Shield, Compass } from 'lucide-react';
import { TIMELINE_EVENTS, TimelineEvent } from '../data/portugalData';

export const HistoryTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'Tümü' | 'Antik & Orta Çağ' | 'Keşifler Çağı' | 'Modern Tarih'>('Tümü');

  const filteredEvents = filter === 'Tümü'
    ? TIMELINE_EVENTS
    : TIMELINE_EVENTS.filter(e => e.category === filter);

  const categories = ['Tümü', 'Antik & Orta Çağ', 'Keşifler Çağı', 'Modern Tarih'];

  return (
    <section id="tarih" className="relative py-24 bg-gradient-to-b from-[#0e0e18] via-[#151522] to-[#0a0a0f] z-10 border-b border-amber-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Scroll className="w-4 h-4" />
            <span>Asırlar Boyu Miras</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Portekiz Tarihi & <span className="text-amber-400 underline decoration-rose-500">Zaman Tüneli</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Roma eyaletinden küresel imparatorluğa, diktatörlükten modern demokrasiye uzanan destansı bir yolculuk.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105'
                    : 'bg-glass text-gray-300 hover:text-white hover:border-amber-500/50'
                }`}
              >
                {cat === 'Tümü' && <Scroll className="w-3.5 h-3.5 inline mr-1.5 text-amber-300" />}
                {cat === 'Antik & Orta Çağ' && <Shield className="w-3.5 h-3.5 inline mr-1.5 text-emerald-400" />}
                {cat === 'Keşifler Çağı' && <Compass className="w-3.5 h-3.5 inline mr-1.5 text-sky-400" />}
                {cat === 'Modern Tarih' && <Calendar className="w-3.5 h-3.5 inline mr-1.5 text-rose-400" />}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Flow */}
        <div className="relative border-l-2 sm:border-l-4 border-amber-500/30 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-16">
          {filteredEvents.map((ev: TimelineEvent, idx: number) => (
            <div key={idx} className="relative group animate-fadeIn">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[58px] top-1.5 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#0a0a0f] border-4 border-amber-400 group-hover:border-rose-500 transition-colors flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.8)] z-10" />

              <div className="bg-glass bg-glass-hover p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-[60px] pointer-events-none" />

                {/* Event Image */}
                {ev.image && (
                  <div className="w-full md:w-1/3 h-48 md:h-64 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                )}

                {/* Event Text */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center space-x-3 mb-3">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-600 text-white font-mono text-xs font-bold tracking-wider shadow-md">
                      {ev.year}
                    </span>
                    <span className="text-xs font-semibold text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full bg-amber-500/10 backdrop-blur-sm">
                      {ev.category}
                    </span>
                  </div>

                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {ev.title}
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                    {ev.desc}
                  </p>

                  <div className="flex items-center text-xs text-gray-500 space-x-1 font-mono">
                    <span>Miras Kaydı</span>
                    <span className="text-emerald-500">•</span>
                    <span>Portekiz Ulusal Arşivleri</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
