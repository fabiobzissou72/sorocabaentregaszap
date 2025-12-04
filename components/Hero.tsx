import React, { useEffect, useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-28 transition-colors duration-300 min-h-[85vh] flex items-center">
      
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-[120%] -z-20 pointer-events-none"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: 'url("/images/imagemfundo.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/90 dark:bg-slate-950/90 -z-10 transition-colors duration-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-100/80 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 text-sm font-semibold mb-8 animate-fade-in-up backdrop-blur-sm border border-brand-200 dark:border-brand-700">
          <ShieldCheck size={16} className="mr-2" />
          Segurança e Agilidade
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
          Entregas ZAP <br />
          <span className="text-brand-600 dark:text-brand-500">
            Controle rápido, seguro e organizado.
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 mb-10 font-medium">
          Tudo registrado, nada perdido. O app definitivo para acabar com extravios e modernizar a portaria do seu condomínio.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contato"
            onClick={(e) => handleNavClick(e, '#contato')}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 dark:bg-brand-600 dark:hover:bg-brand-500 md:text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
          >
            Solicitar Demonstração
            <ArrowRight className="ml-2 -mr-1" size={20} />
          </a>
          <a
            href="#como-funciona"
            onClick={(e) => handleNavClick(e, '#como-funciona')}
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 md:text-lg transition-all duration-200 backdrop-blur-sm"
          >
            Como funciona
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;