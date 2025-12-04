import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Registrar Entrega",
      content: (
        <ul className="space-y-2 text-slate-600 dark:text-slate-300">
          <li className="flex items-center">🔹 Seleciona Condomínio, Torre/Bloco e Apto</li>
          <li className="flex items-center">🔹 Define o tipo (Correios, Delivery, etc.)</li>
          <li className="flex items-center">🔹 Tira Foto da embalagem</li>
          <li className="flex items-center">🔹 Adiciona observações se necessário</li>
          <li className="font-semibold text-brand-600 dark:text-brand-400 mt-2">✨ Tudo salvo com data, hora e usuário.</li>
        </ul>
      )
    },
    {
      id: 2,
      title: "Notificação & Lembretes",
      content: (
        <ul className="space-y-2 text-slate-600 dark:text-slate-300">
          <li className="flex items-center">🔹 Sistema organiza a fila de entregas</li>
          <li className="flex items-center">🔹 Lembretes automáticos para evitar acúmulo</li>
          <li className="flex items-center">🔹 Avisos esquecidos são coisa do passado</li>
        </ul>
      )
    },
    {
      id: 3,
      title: "Retirada Segura",
      content: (
        <ul className="space-y-2 text-slate-600 dark:text-slate-300">
          <li className="flex items-center">🔹 Morador chega na portaria</li>
          <li className="flex items-center">🔹 Porteiro confirma a identidade</li>
          <li className="flex items-center">🔹 Marca como "Retirado" no app</li>
          <li className="font-semibold text-green-600 dark:text-green-400 mt-2">✅ Histórico da unidade atualizado na hora.</li>
        </ul>
      )
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Como funciona na prática
          </h2>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">
            Fluxo simples para não travar a operação da portaria
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="group h-full">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 h-full flex flex-col">
                  
                  {/* Spinning Ring Circle */}
                  <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white dark:bg-slate-900 rounded-full">
                    {/* Static Background Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-slate-100 dark:border-slate-800"></div>
                    
                    {/* Spinning Active Ring with Shadow - Always Spinning */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-600 border-r-brand-600 animate-spin-slow transition-all duration-500 shadow-[0_0_15px_rgba(37,99,235,0.3)]"></div>
                    
                    {/* Number (Static) */}
                    <span className="relative z-10 text-3xl font-bold text-brand-600 dark:text-brand-500">
                      {step.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-center text-slate-900 dark:text-white mb-6">
                    {step.title}
                  </h3>
                  <div className="flex-grow">
                    {step.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;