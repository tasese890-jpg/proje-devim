import React from 'react';
import { Landmark, UserCheck, ShieldAlert, Building, Globe, CheckCircle2 } from 'lucide-react';

export const Politics: React.FC = () => {
  const leaderships = [
    {
      role: "Cumhurbaşkanı (Devlet Başkanı)",
      name: "Marcelo Rebelo de Sousa",
      status: "Görevde",
      details: "Doğrudan halk tarafından 5 yıllık dönem için seçilir. Silahlı kuvvetlerin başkomutanıdır ve en fazla iki ardışık dönem görev yapabilir. Hukuk profesörü ve eski gazetecidir.",
      icon: <UserCheck className="w-8 h-8 text-amber-400" />,
      color: "border-amber-500/30 bg-amber-500/5"
    },
    {
      role: "Başbakan (Hükümet Başkanı)",
      name: "Luís Montenegro",
      status: "Görevde",
      details: "Genel seçim sonuçlarına göre parlamento çoğunluğunu sağlayan lider olarak Cumhurbaşkanı tarafından atanır. Bakanlar Kurulu'na başkanlık eder ve yürütmenin başıdır.",
      icon: <Landmark className="w-8 h-8 text-emerald-400" />,
      color: "border-emerald-500/30 bg-emerald-500/5"
    },
    {
      role: "Parlamento (Assembleia da República)",
      name: "230 Milletvekili",
      status: "Tek Meclisli Yapı",
      details: "Halk tarafından nispi temsil sistemiyle 4 yılda bir seçilen 230 sandalyeli yasama organıdır. Lizbon'daki tarihi São Bento Sarayı'nda toplanır.",
      icon: <Building className="w-8 h-8 text-sky-400" />,
      color: "border-sky-500/30 bg-sky-500/5"
    }
  ];

  const memberships = [
    { name: "NATO (Kurucu Üye - 1949)", bg: "from-sky-900/60 to-sky-700/60 border-sky-400 text-sky-300" },
    { name: "Avrupa Birliği (AB - 1986)", bg: "from-blue-900/60 to-blue-700/60 border-blue-400 text-blue-300" },
    { name: "Birleşmiş Milletler (BM - 1955)", bg: "from-emerald-900/60 to-emerald-700/60 border-emerald-400 text-emerald-300" },
    { name: "Schengen Bölgesi (1995)", bg: "from-purple-900/60 to-purple-700/60 border-purple-400 text-purple-300" },
    { name: "Euro Para Birimi Bölgesi (1999)", bg: "from-amber-900/60 to-amber-700/60 border-amber-400 text-amber-300" },
    { name: "CPLP (Portekizce Ülkeler Topluluğu)", bg: "from-rose-900/60 to-rose-700/60 border-rose-400 text-rose-300" },
    { name: "OECD (Ekonomik İşbirliği)", bg: "from-teal-900/60 to-teal-700/60 border-teal-400 text-teal-300" },
    { name: "Avrupa Konseyi", bg: "from-indigo-900/60 to-indigo-700/60 border-indigo-400 text-indigo-300" }
  ];

  return (
    <section id="siyaset" className="relative py-24 bg-[#0a0a0f] z-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full text-rose-400 text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldAlert className="w-4 h-4" />
            <span>Demokratik Yönetim</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Siyasi Yapı & <span className="text-rose-500 underline decoration-amber-400">Yönetim Modeli</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Karanfil Devrimi'nden doğan güçlü, istikrarlı ve katılımcı bir yarı-başkanlık cumhuriyeti.
          </p>
        </div>

        {/* Leadership 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {leaderships.map((item, idx) => (
            <div key={idx} className={`p-8 rounded-3xl border shadow-2xl relative overflow-hidden flex flex-col justify-between ${item.color} backdrop-blur-md transition-transform duration-500 hover:-translate-y-2`}>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#0a0a0f] rounded-2xl border border-white/10 shadow-inner">
                    {item.icon}
                  </div>
                  <span className="text-xs uppercase font-mono px-3 py-1 rounded-full bg-white/10 text-white font-bold border border-white/10">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xs uppercase tracking-[0.2em] font-extrabold text-gray-400 mb-1">
                  {item.role}
                </h3>
                <h4 className="font-playfair text-3xl font-black text-white mb-4">
                  {item.name}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                  {item.details}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center space-x-2 text-xs text-gray-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Portekiz Anayasası (1976)</span>
              </div>
            </div>
          ))}
        </div>

        {/* International Memberships Grid */}
        <div className="bg-glass p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Globe className="w-8 h-8 text-sky-400" />
            <h3 className="font-playfair text-3xl font-bold text-white">
              Küresel Üyelikler & İttifaklar
            </h3>
          </div>
          
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-light">
            Portekiz, Atlantik ve Akdeniz'in kilit bir aktörü olarak küresel barış, serbest dolaşım ve ekonomik kalkınma platformlarında kurucu öncülerdendir.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {memberships.map((m, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl bg-gradient-to-br ${m.bg} border backdrop-blur-md shadow-lg flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-300`}
              >
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs font-bold tracking-wide">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
