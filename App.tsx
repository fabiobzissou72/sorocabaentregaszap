import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

type ViewState = 'home' | 'privacy';

const App: React.FC = () => {
  // Check system preference or localStorage for initial theme
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [currentView, setCurrentView] = useState<ViewState>('home');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Navigation handler
  const handleNavigate = (target: string) => {
    if (target === 'privacy') {
      setCurrentView('privacy');
      window.scrollTo(0, 0);
    } else {
      // If going to a section on home
      if (currentView !== 'home') {
        setCurrentView('home');
        // Give React time to render the home components before scrolling
        setTimeout(() => {
          const element = document.getElementById(target);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          } else {
             window.scrollTo(0, 0);
          }
        }, 100);
      } else {
        // Already on home, just scroll
        const element = document.getElementById(target);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        } else {
           window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        onNavigate={handleNavigate}
        currentView={currentView}
      />
      
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero />
            <ProblemSolution />
            <Features />
            <HowItWorks />
            <Benefits />
          </>
        ) : (
          <PrivacyPolicy onBack={() => handleNavigate('hero')} />
        )}
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
