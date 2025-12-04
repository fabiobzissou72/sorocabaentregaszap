import React from 'react';
import { Camera, Building2, Tag, LogOut, Bell, History } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Camera size={28} />,
      title: "Registro com Foto",
      description: "Tire uma foto da encomenda e do estado da embalagem para total transparência."
    },
    {
      icon: <Building2 size={28} />,
      title: "Identificação Precisa",
      description: "Selecione Bloco, Torre e Apartamento rapidamente para evitar confusões."
    },
    {
      icon: <Tag size={28} />,
      title: "Categorização Inteligente",
      description: "Defina se é Correios, iFood, Mercado Livre, Gás ou Visita."
    },
    {
      icon: <LogOut size={28} />,
      title: "Registro de Retirada",
      description: "Baixa automática quando o morador retira, garantindo o fim da custódia."
    },
    {
      icon: <Bell size={28} />,
      title: "Lembretes Automáticos",
      description: "Evita acúmulo de caixas na portaria alertando sobre entregas esquecidas."
    },
    {
      icon: <History size={28} />,
      title: "Histórico Completo",
      description: "Consulte quem recebeu, quem entregou e quando foi retirado a qualquer momento."
    }
  ];

  return (
    <section id="funcionalidades" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase">Funcionalidades</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Tudo o que sua portaria precisa
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto">
            Chega de cadernos de papel e planilhas confusas. O Entregas ZAP moderniza a gestão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 transform transition-all duration-300 hover:scale-105 hover:bg-brand-50 dark:hover:bg-slate-700 hover:shadow-xl hover:border-brand-200 dark:hover:border-brand-800"
            >
              <div className="text-brand-600 dark:text-brand-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand-600 dark:bg-brand-700 rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-6">Ideal para:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Condomínios', 'Portarias', 'Administradoras', 'Síndicos', 'Zeladores'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium border border-white/30 hover:bg-white/30 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;