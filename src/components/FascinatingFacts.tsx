import React from 'react';
import { Lightbulb, Sparkles } from 'lucide-react';
import { FUN_FACTS } from '../data/portugalData';

export const FascinatingFacts: React.FC = () => {
  return (
    <section id="ilginc" className="relative py-24 bg-[#0a0a0f] z-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Lightbulb className="w-4 h-4" />
            <span>Şaşırtıcı Gerçekler</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Biliyor muydunuz? <span className="text-amber-400 underline decoration-rose-500">İlginç Bilgiler</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Guinness rekorlarından Japon mutfağına, diplomatik ittifaklardan Barcelos horozuna şaşırtıcı gerçekler.
          </p>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FUN_FACTS.map((fact, idx) => (
            <div
              key={idx}
              className="bg-glass bg-glass-hover p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between group transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute -top-6 -right-6 font-playfair text-8xl font-black text-white/5 group-hover:text-amber-500/10 transition-colors select-none pointer-events-none">
                {fact.number}
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="font-playfair text-2xl font-black text-amber-400 font-mono bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/20">
                    {fact.number}
                  </span>
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {fact.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {fact.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-end text-xs text-amber-400/60 font-mono">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-400" />
                <span>Portekiz Kültür Arşivi</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
