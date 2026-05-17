import React from 'react';

export const ParticleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient glowing blobs */}
      <div className="absolute top-[10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-emerald-600/10 blur-[120px] animate-pulse-glow"></div>
      <div className="absolute top-[50%] right-[-10%] w-[550px] h-[550px] rounded-full bg-amber-500/10 blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[5%] left-[25%] w-[400px] h-[400px] rounded-full bg-rose-600/10 blur-[130px] animate-pulse-glow" style={{ animationDelay: '4s' }}></div>

      {/* Tiny floating stars/particles */}
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-30 animate-float" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber-300 rounded-full opacity-40 animate-float" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-rose-400 rounded-full opacity-30 animate-float" style={{ animationDuration: '9s', animationDelay: '3s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-50 animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/2 right-1/5 w-2 h-2 bg-emerald-300 rounded-full opacity-25 animate-float" style={{ animationDuration: '10s', animationDelay: '4s' }}></div>
    </div>
  );
};
