import React, { useState } from 'react';
import { Compass, MapPin, Star, Eye, X } from 'lucide-react';
import { TOURIST_DESTINATIONS, TouristSpot } from '../data/portugalData';

export const TourismInteractive: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string>('Tümü');
  const [selectedSpot, setSelectedSpot] = useState<TouristSpot | null>(null);

  const regions = ['Tümü', 'Lizbon & Çevresi', 'Kuzey (Porto)', 'Algarve', 'Adalar (Azor & Madeira)', 'Merkez & Alentejo'];

  const filteredSpots = activeRegion === 'Tümü'
    ? TOURIST_DESTINATIONS
    : TOURIST_DESTINATIONS.filter(s => s.region === activeRegion);

  return (
    <section id="turizm" className="relative py-24 bg-gradient-to-b from-[#0e0e18] via-[#121824] to-[#0a0a0f] z-10 border-b border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full text-sky-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Compass className="w-4 h-4" />
            <span>Güneşin Batmadığı Sahiller</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Turizm Rotaları & <span className="text-sky-400 underline decoration-amber-400">Keşif Rehberi</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8">
            Tarihi kalelerden masalsı şatolara, volkanik adalardan altın kumsallara uzanan büyüleyici rotalar.
          </p>

          {/* Filter Regions */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setActiveRegion(reg)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeRegion === reg
                    ? 'bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-[0_0_20px_rgba(14,165,233,0.5)] scale-105'
                    : 'bg-glass text-gray-300 hover:text-white hover:border-sky-500/40'
                }`}
              >
                {reg === 'Tümü' && <Compass className="w-3.5 h-3.5 inline mr-1.5 text-amber-300" />}
                {reg === 'Lizbon & Çevresi' && <MapPin className="w-3.5 h-3.5 inline mr-1.5 text-rose-400" />}
                {reg === 'Kuzey (Porto)' && <MapPin className="w-3.5 h-3.5 inline mr-1.5 text-sky-400" />}
                {reg === 'Algarve' && <MapPin className="w-3.5 h-3.5 inline mr-1.5 text-amber-400" />}
                {reg === 'Adalar (Azor & Madeira)' && <MapPin className="w-3.5 h-3.5 inline mr-1.5 text-emerald-400" />}
                {reg === 'Merkez & Alentejo' && <MapPin className="w-3.5 h-3.5 inline mr-1.5 text-purple-400" />}
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Tourist Spots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpots.map((spot) => (
            <div
              key={spot.id}
              onClick={() => setSelectedSpot(spot)}
              className="bg-glass bg-glass-hover rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col group cursor-pointer transition-all duration-500 relative"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-black/40 to-transparent" />
                
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 font-bold text-xs border border-white/10 shadow">
                    {spot.badge}
                  </span>
                  <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-400 font-bold text-xs border border-white/10">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{spot.rating}</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <h3 className="font-playfair text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {spot.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-sky-500/20 backdrop-blur-md text-sky-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                  {spot.desc}
                </p>

                <div>
                  <span className="text-xs text-sky-400 uppercase tracking-widest block mb-2 font-mono font-bold">🗺️ Önemli Noktalar:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {spot.highlights.slice(0, 3).map((hl, hIdx) => (
                      <span key={hIdx} className="text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-gray-200">
                        {hl}
                      </span>
                    ))}
                    {spot.highlights.length > 3 && (
                      <span className="text-xs bg-sky-500/10 border border-sky-500/30 px-2 py-1 rounded-md text-sky-300 font-bold">
                        +{spot.highlights.length - 3} daha
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Spot Detail Modal */}
        {selectedSpot && (
          <div
            className="fixed inset-0 z-[100000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn cursor-pointer"
            onClick={() => setSelectedSpot(null)}
          >
            <div
              className="bg-[#101622] border border-white/20 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row relative cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSpot(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-rose-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:w-1/2 h-72 md:h-auto relative overflow-hidden">
                <img src={selectedSpot.image} alt={selectedSpot.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3.5 py-1 bg-sky-500 text-black text-xs font-black rounded-full uppercase tracking-wider shadow">
                    {selectedSpot.region}
                  </span>
                </div>
              </div>

              <div className="md:w-1/2 p-8 sm:p-10 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-mono text-amber-400 font-bold">{selectedSpot.badge}</span>
                    <span className="flex items-center text-amber-400 text-sm font-bold">
                      <Star className="w-4 h-4 fill-current mr-1" /> {selectedSpot.rating}
                    </span>
                  </div>
                  <h3 className="font-playfair text-3xl sm:text-4xl font-black text-white mb-4">
                    {selectedSpot.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-8 font-light">
                    {selectedSpot.desc}
                  </p>

                  <div className="mb-6">
                    <span className="text-xs uppercase font-mono tracking-widest text-sky-400 block mb-3 font-bold">📍 Keşfedilecek Anahtar Noktalar:</span>
                    <ul className="space-y-2">
                      {selectedSpot.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-200">
                          <span className="text-emerald-400 font-bold">✓</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>Portekiz Turizm Bakanlığı</span>
                  <span className="text-sky-400 font-dancing text-lg">Boa viagem! ⛵</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
