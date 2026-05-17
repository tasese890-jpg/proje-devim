import React, { useState, useEffect } from 'react';
import { Menu, X, Music, Volume2, Compass } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => new Audio('https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf70a.mp3')); // acoustic guitar ambient fado style

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    audio.loop = true;
    audio.volume = 0.3;
    return () => {
      window.removeEventListener('scroll', handleScroll);
      audio.pause();
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(e => console.log('Audio autoplay blocked:', e));
      setIsPlaying(true);
    }
  };

  const navLinks = [
    { id: 'genel', label: 'Genel & Nüfus' },
    { id: 'cografya', label: 'Coğrafya' },
    { id: 'tarih', label: 'Tarih' },
    { id: 'siyaset', label: 'Siyaset' },
    { id: 'ekonomi', label: 'Ekonomi' },
    { id: 'kultur', label: 'Kültür' },
    { id: 'mutfak', label: 'Mutfak' },
    { id: 'spor', label: 'Spor' },
    { id: 'turizm', label: 'Turizm' },
    { id: 'ilginc', label: 'İlginç' },
    { id: 'turkiye', label: '🇹🇷-🇵🇹' },
    { id: 'quiz', label: 'Quiz' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[10000] transition-all duration-500 ${
      scrolled 
        ? 'bg-[#0a0a0f]/90 backdrop-blur-md py-3.5 border-b border-emerald-500/20 shadow-2xl shadow-black/80' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-2.5 group">
          <span className="text-2xl md:text-3xl transform group-hover:scale-110 transition-transform">🇵🇹</span>
          <span className="font-playfair text-xl md:text-2xl font-black text-gradient-pt tracking-wider">
            Portugal
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeSection === link.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Fado Music Player Toggle */}
          <button
            onClick={toggleMusic}
            title={isPlaying ? "Fado Müziğini Durdur" : "Fado Ruhu: Müzik Dinle"}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 cursor-pointer ${
              isPlaying
                ? 'bg-emerald-500 text-white border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)] animate-pulse'
                : 'bg-gray-900/80 text-gray-400 border-gray-700 hover:text-amber-400 hover:border-amber-400'
            }`}
          >
            {isPlaying ? <Volume2 className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} /> : <Music className="w-4 h-4" />}
            <span className="hidden sm:inline font-dancing text-sm">{isPlaying ? "Fado Çalıyor 🎵" : "Fado Dinle"}</span>
          </button>

          {/* Quick Guide Button */}
          <a
            href="#turizm"
            className="hidden md:flex items-center space-x-1.5 bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Rehber</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[60px] bg-[#0a0a0f]/98 backdrop-blur-2xl z-[10001] flex flex-col px-6 py-8 overflow-y-auto border-t border-emerald-500/20 animate-fadeIn">
          <div className="flex flex-col space-y-3 mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-bold mb-2">Bölümler</span>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  activeSection === link.id
                    ? 'bg-emerald-500/20 text-emerald-300 border-l-4 border-emerald-500 font-bold'
                    : 'text-gray-200 hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs opacity-40">🇵🇹</span>
              </a>
            ))}
          </div>
          <div className="mt-auto pt-6 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-400 font-dancing text-lg">"Esta é a ditosa Pátria minha amada"</p>
          </div>
        </div>
      )}
    </nav>
  );
};
