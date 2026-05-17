import React from 'react';
import { Map, Mountain, Waves, Sun, Palmtree, Trees } from 'lucide-react';

export const Geography: React.FC = () => {
  const geoCards = [
    {
      icon: <Map className="w-8 h-8 text-sky-400" />,
      title: "Konum ve Sınırlar",
      details: [
        "Avrupa'nın en batısındaki egemen devlet",
        "İber Yarımadası'nın Atlantik kıyısında",
        "Kuzey ve doğuda İspanya ile 1.214 km sınır",
        "Batı ve güneyde Atlas Okyanusu ile 1.793 km sahil şeridi",
        "Cabo da Roca: Kıta Avrupası'nın en batı burnu"
      ]
    },
    {
      icon: <Mountain className="w-8 h-8 text-emerald-400" />,
      title: "Dağlar ve Zirveler",
      details: [
        "Ponta do Pico (Azorlar): 2.351 m ile ülkenin en yüksek dağı",
        "Serra da Estrela (Anakara): 1.993 m, kayak ve buzul gölleri merkezi",
        "Kuzey bölgesi dağlık, engebeli ve yemyeşil ormanlarla kaplı",
        "Güney ve Alentejo bölgesi geniş, düz ve ılıman tarım arazileri"
      ]
    },
    {
      icon: <Waves className="w-8 h-8 text-blue-400" />,
      title: "Nehirler ve Havzalar",
      details: [
        "Tejo (Tagus): İberya'nın en uzunu, Lizbon'dan okyanusa dökülür",
        "Douro: Dünyaca ünlü şarap teraslarına hayat veren kuzey nehri",
        "Guadiana: İspanya ile güneydoğu doğal sınırını oluşturan akarsu",
        "Mondego: Tamamen Portekiz sınırları içinde doğup dökülen en büyük nehir"
      ]
    },
    {
      icon: <Sun className="w-8 h-8 text-amber-400" />,
      title: "İklim Kuşakları",
      details: [
        "Kuzey ve Kıyı Şeridi: Ilıman Atlantik iklimi, bol yağışlı ve serin",
        "Güney (Algarve): Akdeniz iklimi, yılda 300+ gün güneşli ve sıcak",
        "Azor Adaları: Ilıman ve yüksek nemli okyanus iklimi",
        "Madeira: Yıl boyu 20-25°C subtropikal cennet iklimi"
      ]
    },
    {
      icon: <Palmtree className="w-8 h-8 text-teal-400" />,
      title: "Ada Toprakları (Özerk)",
      details: [
        "Azor Adaları: Atlas Okyanusu'nda 9 volkanik adadan oluşan takımada",
        "Madeira Adaları: Afrika açıklarında subtropikal tatil cenneti",
        "Her iki ada grubu da kendi parlamentosuna sahip özerk yönetimlerdir"
      ]
    },
    {
      icon: <Trees className="w-8 h-8 text-lime-400" />,
      title: "Doğa ve Milli Parklar",
      details: [
        "Peneda-Gerês Milli Parkı: Ülkenin tek resmi UNESCO milli parkı",
        "Mantar meşesi (Montado) ekosistemleri ve endemik bitki türleri",
        "Ria Formosa Lagünü: Binlerce göçmen kuşun mola noktası",
        "Berlengas Adaları: Bakir deniz yaşamı koruma alanı"
      ]
    }
  ];

  return (
    <section id="cografya" className="relative py-24 bg-[#0e0e18] z-10 border-t border-b border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 rounded-full text-sky-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Map className="w-4 h-4" />
            <span>Atlantik Kıyısı & İberya</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Coğrafi Konum & <span className="text-sky-400 underline decoration-emerald-500">Doğal Çeşitlilik</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Kıta Avrupası'nın en batısında, dağlardan okyanusa uzanan muazzam bir coğrafya.
          </p>
        </div>

        {/* 3x2 Geography Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {geoCards.map((card, idx) => (
            <div key={idx} className="bg-glass bg-glass-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between group">
              <div>
                <div className="p-3 bg-white/5 rounded-2xl inline-block mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">
                  {card.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {card.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-sm text-gray-300 flex items-start space-x-2.5">
                      <span className="text-emerald-400 mt-1 font-bold">•</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs text-sky-400/80 font-mono">
                Portekiz Coğrafya Enstitüsü
              </div>
            </div>
          ))}
        </div>

        {/* Parallax Break banner simulated */}
        <div className="mt-20 relative h-80 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center text-center p-8 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/90" />
          <div className="relative z-10 max-w-3xl">
            <span className="text-5xl block mb-4 animate-bounce">⛵</span>
            <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Okyanusların Kapısı
            </h3>
            <p className="text-lg sm:text-xl font-dancing text-amber-300 tracking-wider">
              "Tanrı okyanusa bu kadar toprak verdi ki, denizin nerede bittiğini ve toprağın nerede başladığını kimse bilemez."
            </p>
            <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">— Luís de Camões</p>
          </div>
        </div>
      </div>
    </section>
  );
};
