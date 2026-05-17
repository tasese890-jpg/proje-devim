import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GeneralInfo } from './components/GeneralInfo';
import { Geography } from './components/Geography';
import { HistoryTimeline } from './components/HistoryTimeline';
import { Politics } from './components/Politics';
import { Economy } from './components/Economy';
import { Culture } from './components/Culture';
import { Cuisine } from './components/Cuisine';
import { Sports } from './components/Sports';
import { TourismInteractive } from './components/TourismInteractive';
import { FascinatingFacts } from './components/FascinatingFacts';
import { TurkeyRelations } from './components/TurkeyRelations';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { FinalGallery } from './components/FinalGallery';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'genel', 'cografya', 'tarih', 'siyaset', 'ekonomi', 'kultur', 'mutfak', 'spor', 'turizm', 'ilginc', 'turkiye', 'quiz', 'galeri'];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-[#e0e0e0] overflow-hidden font-inter selection:bg-emerald-500 selection:text-white">
      {/* 1. Preloader */}
      <Preloader />

      {/* 2. Custom Cursor */}
      <CustomCursor />

      {/* 3. Particle Background */}
      <ParticleBackground />

      {/* 4. Navbar */}
      <Navbar activeSection={activeSection} />

      {/* 5. Main Content Wrapper */}
      <main className="relative z-10">
        <Hero />
        <GeneralInfo />
        <Geography />
        <HistoryTimeline />
        <Politics />
        <Economy />
        <Culture />
        <Cuisine />
        <Sports />
        <TourismInteractive />
        <FascinatingFacts />
        <TurkeyRelations />
        <InteractiveQuiz />
        <FinalGallery />
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
};

export default App;
