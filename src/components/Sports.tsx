import React from 'react';
import { Trophy, Shield, Waves, Award } from 'lucide-react';

export const Sports: React.FC = () => {
  const trophies = [
    { title: "UEFA Euro 2016 Şampiyonu", icon: <Trophy className="w-5 h-5 text-amber-400" />, desc: "Fransa'yı Eder'in uzatma golüyle devirerek tarihindeki ilk Avrupa Şampiyonluğu'na ulaştı." },
    { title: "UEFA Uluslar Ligi 2019 Şampiyonu", icon: <Trophy className="w-5 h-5 text-amber-400" />, desc: "Kendi evinde Hollanda'yı Gonçalo Guedes'in golüyle yenerek ilk Uluslar Ligi kupasını kazandı." },
    { title: "5x Ballon d'Or (CR7)", icon: <Award className="w-5 h-5 text-amber-400" />, desc: "Cristiano Ronaldo'nun kazandığı 5 muazzam Altın Top ödülü ile dünya futbol tarihinin zirvesi." }
  ];

  const clubs = [
    { name: "SL Benfica", color: "from-rose-900/60 to-rose-700/60 border-rose-500", titles: "37+ Lig Şampiyonluğu", desc: "Lizbon'un efsanevi kırmızı beyazlı takımı. Işık Stadyumu'nda (Estádio da Luz) maç öncesi kartal uçurma geleneğiyle ünlüdür." },
    { name: "Sporting CP", color: "from-emerald-900/60 to-emerald-700/60 border-emerald-500", titles: "20+ Lig Şampiyonluğu", desc: "Cristiano Ronaldo, Luís Figo ve Quaresma gibi sayısız yıldızı yetiştiren dünyaca ünlü Alvalade akademisi." },
    { name: "FC Porto", color: "from-sky-900/60 to-sky-700/60 border-sky-500", titles: "30+ Lig Şampiyonluğu & 2x UCL", desc: "Jose Mourinho yönetiminde 2004'te Şampiyonlar Ligi'ni kazanarak Avrupa'yı fetheden Kuzeyin Ejderhaları (Dragões)." }
  ];

  return (
    <section id="spor" className="relative py-24 bg-[#0e0e18] z-10 border-b border-rose-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full text-rose-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Trophy className="w-4 h-4" />
            <span>Futbolun & Dalgaların Efendileri</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Spor Tutkusu & <span className="text-rose-500 underline decoration-amber-400">Küresel Zaferler</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Cristiano Ronaldo ve Eusébio'nun yeşil sahadaki zarafetinden, Nazaré'nin dev dalgalarını ehlileştiren sörfçülere.
          </p>
        </div>

        {/* Hero Sports Box - CR7 & Trophies */}
        <div className="bg-glass rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-16 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 h-80 lg:h-auto bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80')" }}>
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
            <div className="absolute bottom-8 left-8 max-w-md">
              <span className="bg-amber-500 text-black font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block shadow">
                Futbolun Zirvesi
              </span>
              <h3 className="font-playfair text-3xl sm:text-4xl font-black text-white mb-2">
                Efsanelerin Vatanı
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Portekiz Milli Futbol Takımı (Seleção das Quinas), yeşil kırmızı formasıyla dünya futboluna zarafet katan, bitmek bilmeyen tutkusuyla kupa koleksiyonunu genişleten bir futbol ekolüdür.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between bg-black/40">
            <h4 className="font-playfair text-2xl sm:text-3xl font-bold text-amber-400 mb-6 flex items-center space-x-3 border-b border-white/10 pb-4">
              <Trophy className="w-8 h-8 text-amber-400 animate-bounce" />
              <span>Tarihi Kupalar & Başarılar</span>
            </h4>

            <div className="space-y-6 mb-8">
              {trophies.map((t, idx) => (
                <div key={idx} className="flex items-start space-x-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20">
                    {t.icon}
                  </div>
                  <div>
                    <h5 className="font-playfair text-lg font-bold text-white mb-1">{t.title}</h5>
                    <p className="text-xs text-gray-300 leading-relaxed font-light">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 text-center font-mono">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <span className="text-2xl sm:text-3xl font-black text-gradient-pt block mb-1">CRISTIANO</span>
                <span className="text-xs text-gray-400">900+ Kariyer Golü</span>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <span className="text-2xl sm:text-3xl font-black text-amber-400 block mb-1">EUSÉBIO</span>
                <span className="text-xs text-gray-400">'Kara Panter' Efsanesi</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Clubs Cards */}
        <div className="mb-16">
          <h3 className="font-playfair text-3xl font-bold text-white mb-8 text-center flex items-center justify-center space-x-3">
            <Shield className="w-8 h-8 text-rose-500" />
            <span>Portekiz'in 3 Büyük Kulübü (Os Três Grandes)</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clubs.map((c, idx) => (
              <div key={idx} className={`bg-gradient-to-b ${c.color} p-8 rounded-3xl border shadow-2xl relative overflow-hidden backdrop-blur-md flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-500`}>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Shield className="w-10 h-10 text-white" />
                    <span className="text-xs font-mono px-3 py-1 bg-black/50 text-amber-300 rounded-full font-bold border border-white/10">
                      {c.titles}
                    </span>
                  </div>
                  <h4 className="font-playfair text-3xl font-black text-white mb-3">{c.name}</h4>
                  <p className="text-gray-200 text-sm leading-relaxed font-light mb-6">{c.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                  <span>Primeira Liga</span>
                  <span className="text-amber-400 font-bold">★ Efsane</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Surfing Highlight */}
        <div className="bg-glass p-8 sm:p-12 rounded-3xl border border-sky-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 bg-sky-500/5">
          <div className="md:w-2/3">
            <div className="flex items-center space-x-2.5 text-sky-400 font-bold text-xs uppercase tracking-widest mb-3">
              <Waves className="w-5 h-5 animate-pulse" />
              <span>Dünya Sörf Rekorları Merkezi</span>
            </div>
            <h4 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              Nazaré & Ericeira Sörf Cenneti
            </h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Nazaré Denizaltı Kanyonu'nun okyanus dalgalarını huni gibi sıkıştırıp fırlatmasıyla oluşan 25-30 metrelik devasa su kuleleri, dünya sörf şampiyonlarının en büyük sınav alanıdır. Ericeira ise Avrupa'nın ilk ve tek resmi Dünya Sörf Koruma Alanı unvanına sahiptir.
            </p>
          </div>
          <div className="md:w-1/3 text-center bg-black/50 p-6 rounded-2xl border border-white/10">
            <span className="font-playfair text-5xl font-black text-gradient-pt block mb-2">26.21m</span>
            <span className="text-xs text-gray-400 font-mono">Guinness Dünya Rekoru Sörflenmiş En Yüksek Dalga (Nazaré)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
