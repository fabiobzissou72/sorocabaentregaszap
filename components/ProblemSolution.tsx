import React, { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="problema" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* The Problem */}
          <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-2xl border border-red-100 dark:border-red-900/30 animate-alert-pulse relative z-10">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 dark:bg-red-900/40 p-3 rounded-full mr-4 text-red-600 dark:text-red-400">
                <AlertTriangle size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">O Problema</h2>
            </div>
            
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              Condomínios estão recebendo cada vez mais entregas: Correios, Transportadoras, Delivery, Uber, Gás...
            </p>
            
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Sem controle digital, surgem:</h3>
            <ul className="space-y-3">
              {[
                "Extravios de mercadorias",
                "Reclamações constantes de moradores",
                "Falta de registro confiável",
                "Riscos e acusações contra o porteiro",
                "Portaria desorganizada e cheia de caixas"
              ].map((item, index) => (
                <li key={index} className="flex items-start text-slate-600 dark:text-slate-400">
                  <span className="text-red-500 mr-2 font-bold">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* The Solution */}
          <div className="relative">
            {/* Parallax Background Glow */}
            <div 
              className="absolute inset-0 bg-brand-600 blur-3xl opacity-10 rounded-full"
              style={{ transform: `translateY(${(offsetY - 800) * 0.15}px) scale(1.2)` }}
            ></div>
            
            <div className="relative bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl z-10">
              <div className="flex items-center mb-6">
                <div className="bg-brand-100 dark:bg-brand-900/40 p-3 rounded-full mr-4 text-brand-600 dark:text-brand-400">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">A Solução</h2>
              </div>

              <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600 mb-4">
                Entregas ZAP
              </h3>
              
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Um app simples e completo que registra tudo que entra e sai da portaria em poucos segundos.
              </p>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                  <span className="text-2xl mr-4">📸</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">Registro com foto</span>
                </div>
                <div className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                  <span className="text-2xl mr-4">🏢</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">Organização por Bloco/Apto</span>
                </div>
                <div className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                  <span className="text-2xl mr-4">🔔</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">Notificações automáticas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;