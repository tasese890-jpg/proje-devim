import React from 'react';
import { DollarSign, Cpu, Trees, Palmtree, Wind, Briefcase } from 'lucide-react';

export const Economy: React.FC = () => {
  const econHighlights = [
    {
      icon: <Trees className="w-8 h-8 text-amber-500" />,
      title: "Mantar (Cork) Üretiminde Dünya Tekeli",
      desc: "Dünya mantar ağacı kabuğu arzının %52'den fazlası Portekiz'in Alentejo ormanlarından elde edilir. Şarap mantarından uzay araçları izolasyonuna kadar muazzam bir ihracat kalemi."
    },
    {
      icon: <Palmtree className="w-8 h-8 text-emerald-400" />,
      title: "Turizm & Konaklama Lokomotifi",
      desc: "Yılda 30 milyonu aşkın yabancı ziyaretçi ağırlayarak GSYİH'sinin yaklaşık %18-20'sini turizm ve hizmet sektöründen sağlar. Algarve, Lizbon ve Porto küresel cazibe merkezleridir."
    },
    {
      icon: <Cpu className="w-8 h-8 text-sky-400" />,
      title: "Teknoloji, Startup & Dijital Göçebeler",
      desc: "Lizbon, her yıl 70.000'den fazla teknoloji liderini buluşturan 'Web Summit'e ev sahipliği yapar. Ülke, sağladığı dijital göçebe vizesi (D8) ve vergi avantajlarıyla bir teknoloji merkezidir."
    },
    {
      icon: <Wind className="w-8 h-8 text-teal-400" />,
      title: "%100 Yenilenebilir Enerji Rekorları",
      desc: "Atlas Okyanusu rüzgarları, güneş santralleri ve hidroelektrik ile Avrupa'nın yeşil dönüşüm liderlerindendir. Bazı haftalarda tüm ülke elektriğini sıfır karbonla üretmektedir."
    }
  ];

  return (
    <section id="ekonomi" className="relative py-24 bg-[#0e0e18] z-10 border-b border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
            <DollarSign className="w-4 h-4" />
            <span>Küresel & Dinamik Pazar</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Ekonomik Görünüm & <span className="text-emerald-400 underline decoration-amber-400">Ana Sektörler</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Geleneksel tarım ve şarapçılıktan, yüksek teknolojiye ve sürdürülebilir turizme geçiş yapan esnek bir Avrupa ekonomisi.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {econHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-glass bg-glass-hover p-8 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="p-3.5 bg-white/5 rounded-2xl inline-block mb-6 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center space-x-2 text-xs text-gray-400">
                <Briefcase className="w-4 h-4 text-amber-400" />
                <span>Portekiz Yatırım ve Dış Ticaret Ajansı (AICEP)</span>
              </div>
            </div>
          ))}
        </div>

        {/* Economic Quick Stats Strip */}
        <div className="bg-gradient-to-r from-emerald-950/60 via-[#151525] to-emerald-950/60 p-8 rounded-3xl border border-emerald-500/30 shadow-2xl flex flex-col md:flex-row justify-around items-center gap-8 text-center">
          <div>
            <span className="text-xs uppercase font-mono text-emerald-400 block mb-1 tracking-widest font-bold">Kişi Başı Ortalama GSYİH</span>
            <span className="font-playfair text-4xl sm:text-5xl font-extrabold text-white">~$27.500</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/10" />
          <div>
            <span className="text-xs uppercase font-mono text-amber-400 block mb-1 tracking-widest font-bold">Yıllık Dış Ticaret Hacmi</span>
            <span className="font-playfair text-4xl sm:text-5xl font-extrabold text-white">~$120 Milyar+</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/10" />
          <div>
            <span className="text-xs uppercase font-mono text-sky-400 block mb-1 tracking-widest font-bold">İhracatta En Büyük Partnerler</span>
            <span className="font-playfair text-2xl sm:text-3xl font-extrabold text-white">🇪🇸 İspanya & 🇫🇷 Fransa</span>
          </div>
        </div>
      </div>
    </section>
  );
};
