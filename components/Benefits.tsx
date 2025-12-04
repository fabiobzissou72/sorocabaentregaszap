import React from 'react';
import { Check } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefitsCondo = [
    "Transparência total nos processos",
    "Segurança aumentada na portaria",
    "Agilidade na entrega aos moradores",
    "Histórico digital pesquisável",
    "Profissionalização da equipe",
    "Redução drástica de reclamações"
  ];

  const benefitsSyndic = [
    "Controle total sobre o volume de entregas",
    "Portaria organizada e limpa",
    "Evidências digitais (fotos) em caso de disputas",
    "Menos conflitos entre moradores e portaria",
    "Melhora a gestão geral do patrimônio"
  ];

  return (
    <section id="beneficios" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Por que usar o Entregas ZAP?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card Condomínio */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden animate-alert-pulse">
            <div className="bg-brand-600 p-6">
              <h3 className="text-2xl font-bold text-white text-center">Para o Condomínio</h3>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                {benefitsCondo.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-slate-700 dark:text-slate-300">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card Síndico */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border-t-4 border-purple-600 animate-alert-pulse" style={{ animationDelay: '1.5s' }}>
            <div className="bg-slate-800 dark:bg-slate-950 p-6">
              <h3 className="text-2xl font-bold text-white text-center">Para o Síndico</h3>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                {benefitsSyndic.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-purple-500" />
                    </div>
                    <p className="ml-3 text-base text-slate-700 dark:text-slate-300">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;