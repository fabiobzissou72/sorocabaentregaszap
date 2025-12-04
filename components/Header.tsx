import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  onNavigate: (target: string) => void;
  currentView: 'home' | 'privacy';
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme, onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', target: 'hero' },
    { name: 'O Problema', target: 'problema' },
    { name: 'Funcionalidades', target: 'funcionalidades' },
    { name: 'Como Funciona', target: 'como-funciona' },
    { name: 'Benefícios', target: 'beneficios' },
    { name: 'Contato', target: 'contato' },
  ];

  const handleLogoClick = () => {
    onNavigate('hero');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    onNavigate(target);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={handleLogoClick}>
            <img
              src="/images/logo.jpg"
              alt="Entregas ZAP Logo"
              className="h-14 w-auto mr-3 rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
              Entregas<span className="text-brand-600 dark:text-brand-500">ZAP</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.target}`}
                  onClick={(e) => handleNavClick(e, link.target)}
                  className="px-4 py-2 rounded-full text-sm font-bold text-slate-700 dark:text-slate-300 transition-all duration-300 hover:bg-brand-600 hover:text-white hover:shadow-lg hover:scale-105 dark:hover:bg-brand-500 dark:hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Dark Mode Toggle Desktop */}
              <button
                onClick={toggleTheme}
                className="p-2 ml-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                aria-label="Alternar tema"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Alternar tema"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-slate-100 dark:bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-brand-600 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none"
              aria-label="Menu principal"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                className="block px-3 py-3 rounded-md text-base font-bold text-slate-700 dark:text-slate-300 hover:bg-brand-600 hover:text-white transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;