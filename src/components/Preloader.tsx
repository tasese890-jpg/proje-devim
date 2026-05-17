import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-[#0a0a0f] flex flex-col items-center justify-center transition-all duration-700 ease-out">
      <div className="relative flex flex-col items-center">
        <span className="text-8xl md:text-9xl animate-bounce mb-6 filter drop-shadow-[0_10px_25px_rgba(16,185,129,0.4)]">🇵🇹</span>
        <h1 className="text-2xl md:text-4xl font-playfair font-black tracking-[0.4em] text-gradient-pt uppercase mb-2">
          PORTEKİZ
        </h1>
        <p className="text-sm md:text-base font-dancing text-emerald-400 tracking-widest mb-8">
          Keşiflerin ve Fado'nun Yurdu
        </p>
        <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden p-0.5">
          <div className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-rose-500 rounded-full animate-[preloaderSlide_1.5s_ease-in-out_infinite]" style={{ width: '40%' }}></div>
        </div>
      </div>
    </div>
  );
};
