import React, { useState } from 'react';
import { Camera, Send, Heart, Eye, X } from 'lucide-react';
import { MORE_IMAGES_END } from '../data/portugalData';

export const FinalGallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string>(MORE_IMAGES_END[0].url);
  const [senderName, setSenderName] = useState<string>('');
  const [recipientName, setRecipientName] = useState<string>('');
  const [message, setMessage] = useState<string>('Lizbon\'un rüzgarlı tepelerinden ve fado ezgilerinin yurdundan kucak dolusu sevgiler!');
  const [postcardGenerated, setPostcardGenerated] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <section id="galeri" className="relative py-24 bg-gradient-to-b from-[#0a0a0f] via-[#14121e] to-[#0a0a0f] z-10 border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 shadow">
            <Camera className="w-4 h-4" />
            <span>Görsel Hafıza & Anılar</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Son Bakış: <span className="text-gradient-pt font-extrabold underline decoration-amber-400">Portekiz Hatıraları</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8">
            Rehberimizin sonunda Portekiz'in büyüleyici manzaralarında kaybolun ve sevdiklerinize sanal bir kartpostal gönderin.
          </p>
        </div>

        {/* User Request: "daha fazla resim ekle en sona" -> Stunning Masonry / Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {MORE_IMAGES_END.map((img, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-2xl border border-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-[0_25px_50px_rgba(16,185,129,0.3)] ${
                idx === 0 ? 'sm:col-span-2 sm:h-96' : 'h-72 sm:h-80'
              }`}
              onClick={() => setModalImg(img.url)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-xs uppercase font-mono px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full font-bold border border-amber-500/30 mb-2 w-max backdrop-blur-sm">
                  {img.tag}
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-black text-white transform group-hover:text-amber-300 transition-colors">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Virtual Postcard Customizer */}
        <div className="bg-glass rounded-3xl p-8 sm:p-14 border border-white/20 shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
          <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="text-center mb-10 relative z-10">
            <span className="text-4xl block mb-2">💌</span>
            <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-2">
              Kendi Portekiz Kartpostalınızı Yaratın
            </h3>
            <p className="text-sm text-gray-300 font-light">Görsel seçin, notunuzu yazın ve anında dijital hatıranızı önizleyin.</p>
          </div>

          {!postcardGenerated ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {/* Form Controls */}
              <div className="space-y-5 bg-black/40 p-6 sm:p-8 rounded-2xl border border-white/10">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-emerald-400 font-mono font-bold mb-2">1. Görsel Seçin</label>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {MORE_IMAGES_END.map((img, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedImg(img.url)}
                        className={`w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                          selectedImg === img.url ? 'border-amber-400 scale-110 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img.url} className="w-full h-full object-cover" alt="" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-emerald-400 font-mono font-bold mb-1">2. Gönderen İsmi</label>
                  <input
                    type="text"
                    placeholder="Adınız..."
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 font-medium text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-emerald-400 font-mono font-bold mb-1">3. Alıcı İsmi</label>
                  <input
                    type="text"
                    placeholder="Alıcının Adı..."
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 font-medium text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-emerald-400 font-mono font-bold mb-1">4. Mesajınız</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 font-medium text-sm"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setPostcardGenerated(true)}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 text-black font-extrabold text-sm uppercase tracking-wider shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kartpostalı Tamamla</span>
                </button>
              </div>

              {/* Live Preview Box */}
              <div className="flex flex-col justify-center">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-2 text-center">Canlı Kartpostal Önizlemesi</span>
                <div className="bg-[#fcf8f2] text-gray-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="h-48 overflow-hidden relative">
                    <img src={selectedImg} alt="Seçilen" className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded text-[10px] font-mono font-bold uppercase border border-dashed border-gray-400 shadow">
                      🇵🇹 PORTUGAL CORREIOS
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="border-b border-gray-300 pb-4 mb-4">
                      <p className="font-dancing text-2xl text-gray-800 leading-snug">
                        "{message}"
                      </p>
                    </div>
                    <div className="flex justify-between items-end text-xs font-mono text-gray-600 font-bold">
                      <div>
                        <span className="block text-[10px] text-gray-400 uppercase">Kime:</span>
                        <span className="text-sm font-extrabold text-gray-900">{recipientName || 'Sevgili Dostum'}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[10px] text-gray-400 uppercase">Gönderen:</span>
                        <span className="font-dancing text-lg text-emerald-800">{senderName || 'Portekiz Gezgini'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-10 relative z-10 animate-fadeIn max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-bounce">
                <Heart className="w-8 h-8 fill-current" />
              </div>
              <h4 className="font-playfair text-4xl font-bold text-white mb-2">Hatıranız Hazır!</h4>
              <p className="text-gray-300 text-sm mb-8">Aşağıdaki özel kartpostalı ekran görüntüsü alarak sevdiklerinizle paylaşabilir veya hatıra olarak saklayabilirsiniz.</p>

              <div className="bg-[#fcf8f2] text-gray-900 rounded-2xl overflow-hidden shadow-2xl border-8 border-white mb-8 text-left">
                <div className="h-64 overflow-hidden relative">
                  <img src={selectedImg} alt="Seçilen" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-1.5 rounded-full backdrop-blur-sm text-xs font-mono font-bold">
                    🇵🇹 SAUDADES DE PORTUGAL
                  </div>
                  <div className="absolute top-4 right-4 bg-amber-400 text-black px-4 py-2 rounded text-xs font-mono font-black uppercase border border-dashed border-black shadow-lg transform rotate-3">
                    PUL / STAMP (€1.50)
                  </div>
                </div>
                <div className="p-8">
                  <p className="font-dancing text-3xl text-gray-800 leading-relaxed mb-6 border-b border-gray-300 pb-6">
                    "{message}"
                  </p>
                  <div className="flex justify-between items-end text-sm font-mono text-gray-700">
                    <div>
                      <span className="block text-xs text-gray-500 uppercase">Alıcı:</span>
                      <span className="text-lg font-black text-rose-900">{recipientName || 'Sevgili Dostum'}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs text-gray-500 uppercase">Gönderen:</span>
                      <span className="font-dancing text-2xl text-emerald-800 font-bold">{senderName || 'Portekiz Gezgini'}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setPostcardGenerated(false)}
                className="px-8 py-3 rounded-full bg-glass text-white font-bold border border-white/20 hover:bg-white/10 transition-colors cursor-pointer"
              >
                Yeni Bir Kartpostal Oluştur
              </button>
            </div>
          )}
        </div>

        {/* Modal for Gallery Image View */}
        {modalImg && (
          <div
            className="fixed inset-0 z-[100000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer animate-fadeIn"
            onClick={() => setModalImg(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <img src={modalImg} alt="Büyük Görünüm" className="w-full max-h-[85vh] object-contain" />
              <div className="absolute top-4 right-4 bg-black/80 text-white p-2 rounded-full hover:bg-rose-600 transition-colors cursor-pointer">
                <X className="w-5 h-5" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
