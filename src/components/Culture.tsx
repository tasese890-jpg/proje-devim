import React from 'react';
import { Palette, Music, BookOpen, Heart, Sparkles } from 'lucide-react';

export const Culture: React.FC = () => {
  return (
    <section id="kultur" className="relative py-24 bg-gradient-to-b from-[#0e0e18] via-[#161224] to-[#0a0a0f] z-10 border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Palette className="w-4 h-4" />
            <span>Sanat & Ruhun İfadesi</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Kültür & Sanat: <span className="text-purple-400 underline decoration-amber-400">Fado, Azulejo ve Saudade</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Melankolik ezgilerden mavi-beyaz çinilere, Pessoa'nın dizelerinden okyanus özlemine uzanan derin bir estetik.
          </p>
        </div>

        {/* 2 Main Columns: Fado & Literature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Fado Card */}
          <div className="bg-glass bg-glass-hover p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-amber-500/20 rounded-2xl text-amber-400 border border-amber-500/30">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-white group-hover:text-amber-300 transition-colors">
                Fado Müziği (UNESCO Mirası)
              </h3>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-6 font-light">
              1820'lerde Lizbon'un Alfama ve Mouraria sokaklarında doğan, Portekiz gitarının ağlayan tınıları eşliğinde söylenen ulusal müzik türüdür. Kadere boyun eğişi, denize açılıp dönmeyen denizcileri ve bitmeyen aşkları anlatır.
            </p>
            <div className="space-y-3 pt-6 border-t border-white/10 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-amber-400 font-bold">👑</span>
                <span className="text-white font-bold">Amália Rodrigues:</span>
                <span className="text-gray-400">Fado'nun efsanevi kraliçesi</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-amber-400 font-bold">🌟</span>
                <span className="text-white font-bold">Mariza & Ana Moura:</span>
                <span className="text-gray-400">Modern fado yıldızları</span>
              </div>
            </div>
          </div>

          {/* Literature Card */}
          <div className="bg-glass bg-glass-hover p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-purple-500/20 rounded-2xl text-purple-400 border border-purple-500/30">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                Edebiyat ve Şiir Devi
              </h3>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-6 font-light">
              Portekiz edebiyatı okyanus kaşiflerinin günlüklerinden beslenir. Kelimelere duyulan derin tutku, ülkeyi dünya edebiyatına yön veren benzersiz yazarların anavatanı yapmıştır.
            </p>
            <div className="space-y-3 pt-6 border-t border-white/10 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-purple-400 font-bold">📜</span>
                <span className="text-white font-bold">Luís de Camões:</span>
                <span className="text-gray-400">'Os Lusíadas' ulusal destanının şairi</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400 font-bold">🎩</span>
                <span className="text-white font-bold">Fernando Pessoa:</span>
                <span className="text-gray-400">Heteronimler yaratan dahi şair</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400 font-bold">🏆</span>
                <span className="text-white font-bold">José Saramago:</span>
                <span className="text-gray-400">1998 Nobel Edebiyat Ödülü sahibi</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Secondary Highlights: Architecture, Azulejo, Saudade */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-glass p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-3xl block mb-4">🏛️</span>
              <h4 className="font-playfair text-2xl font-bold text-white mb-3">Manuelin Mimarisi</h4>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Kral I. Manuel döneminde ortaya çıkan, halatlar, deniz kabukları, koral motifleri ve haçlarla bezenmiş, Gotik ve Rönesans esintili muazzam Portekiz denizci mimarisidir (Örn: Jerónimos Manastırı).
              </p>
            </div>
          </div>

          <div className="bg-glass p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-3xl block mb-4">🎨</span>
              <h4 className="font-playfair text-2xl font-bold text-white mb-3">Azulejo Çini Sanatı</h4>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Arapça 'küçük cilalı taş' kelimesinden türeyen, sarayları, kiliseleri ve metro istasyonlarını süsleyen 500 yıllık mavi-beyaz sırlı seramik geleneğidir. Porto'daki São Bento İstasyonu en ünlü başyapıtıdır.
              </p>
            </div>
          </div>

          <div className="bg-glass p-8 rounded-3xl border border-white/10 shadow-xl flex flex-col justify-between border-purple-500/30 bg-purple-500/5">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Heart className="w-6 h-6 text-rose-500 animate-pulse" />
                <h4 className="font-playfair text-2xl font-bold text-gradient-pt">Saudade Felsefesi</h4>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed font-medium">
                Başka hiçbir dile tek kelimeyle çevrilemeyen derin bir Portekizce kavram: Kaybedilmiş, uzakta olan veya bir daha asla geri gelmeyecek olan güzel bir şeye ya da kişiye duyulan yoğun, hüzünlü ve nostaljik özlem.
              </p>
            </div>
          </div>
        </div>

        {/* Famous Pessoa Quote Box */}
        <div className="bg-gradient-to-r from-purple-900/40 via-[#161224] to-purple-900/40 p-10 sm:p-14 rounded-3xl border border-purple-500/30 text-center relative shadow-2xl">
          <Sparkles className="absolute top-6 left-6 w-8 h-8 text-amber-400 opacity-40 animate-pulse" />
          <Sparkles className="absolute bottom-6 right-6 w-8 h-8 text-amber-400 opacity-40 animate-pulse" />
          <p className="font-playfair text-2xl sm:text-3xl md:text-4xl italic text-white max-w-4xl mx-auto leading-relaxed mb-6">
            "Ben kim olduğumu bilmiyorum, ne hissettiğimi bilmiyorum. Bilmediğimi bilmiyorum. Ama yine de seviyorum."
          </p>
          <div className="text-base sm:text-lg font-bold text-purple-400 font-dancing tracking-widest">
            — Fernando Pessoa
          </div>
        </div>
      </div>
    </section>
  );
};
