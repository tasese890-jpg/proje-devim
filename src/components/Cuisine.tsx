import React, { useState } from 'react';
import { Utensils, Wine, Coffee, ChefHat, Eye, X } from 'lucide-react';
import { FOOD_MENU, FoodItem } from '../data/portugalData';

export const Cuisine: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');
  const [selectedDish, setSelectedDish] = useState<FoodItem | null>(null);

  const categories = ['Tümü', 'Ana Yemek', 'Tatlı', 'Deniz Ürünü', 'İçecek'];

  const filteredMenu = activeCategory === 'Tümü'
    ? FOOD_MENU
    : FOOD_MENU.filter(item => item.category === activeCategory);

  return (
    <section id="mutfak" className="relative py-24 bg-[#0a0a0f] z-10 border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <ChefHat className="w-4 h-4" />
            <span>Okyanus & Akdeniz Esintisi</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Portekiz Mutfağı & <span className="text-amber-400 underline decoration-emerald-500">Geleneksel Lezzetler</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8">
            365 farklı Bacalhau tarifinden gizli manastır tatlılarına ve Douro'nun asil şaraplarına uzanan bir damak şöleni.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-[0_0_20px_rgba(245,158,11,0.5)] scale-105'
                    : 'bg-glass text-gray-300 hover:text-white hover:border-amber-500/40'
                }`}
              >
                {cat === 'Tümü' && <Utensils className="w-3.5 h-3.5 inline mr-1.5 text-amber-300" />}
                {cat === 'Ana Yemek' && <ChefHat className="w-3.5 h-3.5 inline mr-1.5 text-rose-400" />}
                {cat === 'Tatlı' && <Coffee className="w-3.5 h-3.5 inline mr-1.5 text-amber-400" />}
                {cat === 'Deniz Ürünü' && <Utensils className="w-3.5 h-3.5 inline mr-1.5 text-sky-400" />}
                {cat === 'İçecek' && <Wine className="w-3.5 h-3.5 inline mr-1.5 text-purple-400" />}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedDish(item)}
              className="bg-glass bg-glass-hover rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col group cursor-pointer transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-amber-400 font-bold text-xs border border-white/10 shadow-lg">
                  {item.category}
                </span>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <h3 className="font-playfair text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 backdrop-blur-md text-amber-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                  {item.desc}
                </p>

                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-widest block mb-2 font-mono">Malzemeler:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.ingredients.slice(0, 4).map((ing, iIdx) => (
                      <span key={iIdx} className="text-xs bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-gray-300 font-medium">
                        {ing}
                      </span>
                    ))}
                    {item.ingredients.length > 4 && (
                      <span className="text-xs bg-amber-500/10 border border-amber-500/30 px-2 py-1 rounded-md text-amber-300 font-bold">
                        +{item.ingredients.length - 4} daha
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dish Detail Modal */}
        {selectedDish && (
          <div
            className="fixed inset-0 z-[100000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn cursor-pointer"
            onClick={() => setSelectedDish(null)}
          >
            <div
              className="bg-[#12121e] border border-white/20 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row relative cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-rose-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img src={selectedDish.image} alt={selectedDish.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full uppercase tracking-wider shadow">
                    {selectedDish.category}
                  </span>
                </div>
              </div>

              <div className="md:w-1/2 p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
                <div>
                  <h3 className="font-playfair text-3xl font-black text-white mb-3">
                    {selectedDish.name}
                  </h3>
                  <p className="text-amber-400 font-medium text-sm mb-6">
                    {selectedDish.desc}
                  </p>

                  <div className="mb-6">
                    <span className="text-xs uppercase font-mono tracking-widest text-gray-400 block mb-2 font-bold">🍳 Tam Malzeme Listesi:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedDish.ingredients.map((ing, iIdx) => (
                        <span key={iIdx} className="bg-white/10 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-lg border border-white/10">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-gray-400 block mb-2 font-bold">📜 Tarihçe & Kültür:</span>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light bg-black/30 p-4 rounded-2xl border border-white/5">
                      {selectedDish.history}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 text-right">
                  <span className="text-xs text-gray-500 font-dancing text-lg">Bom apetite! 🇵🇹</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
