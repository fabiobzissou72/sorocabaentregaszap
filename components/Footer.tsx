import React from 'react';
import { Phone, PackageCheck, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (target: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    onNavigate(target);
  };

  return (
    <footer id="contato" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <PackageCheck size={32} className="text-brand-500 mr-2" />
              <span className="text-2xl font-bold text-white">Entregas ZAP</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Mais segurança, mais organização, mais tranquilidade para o seu condomínio. O fim dos extravios na portaria.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Fale Conosco</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-brand-500" />
                <a href="tel:+5515992724243" className="hover:text-white transition-colors">
                  (15) 99272-4243
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-brand-500" />
                <a href="mailto:contato@entregaszap.com.br" className="hover:text-white transition-colors">
                  contato@entregaszap.com.br
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-brand-500" />
                <span>Brasil</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Acesso Rápido</h3>
            <ul className="space-y-2">
              <li><a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="hover:text-brand-400 transition-colors">Início</a></li>
              <li><a href="#funcionalidades" onClick={(e) => handleNavClick(e, 'funcionalidades')} className="hover:text-brand-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#beneficios" onClick={(e) => handleNavClick(e, 'beneficios')} className="hover:text-brand-400 transition-colors">Benefícios</a></li>
              <li>
                <a 
                  href="#privacy" 
                  onClick={(e) => handleNavClick(e, 'privacy')}
                  className="hover:text-brand-400 transition-colors text-sm text-slate-500 hover:underline"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Call To Action Box */}
        <div className="bg-brand-900/50 rounded-2xl p-10 text-center border border-brand-800 mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Seu condomínio muito mais seguro e organizado.
          </h3>
          <p className="mb-8 text-brand-200 text-lg">
            Agende uma demonstração gratuita hoje mesmo.
          </p>
          <a
            href="https://wa.me/5515992724243"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 text-xl uppercase tracking-wide bg-green-600 hover:bg-green-700 text-white font-extrabold rounded-lg shadow-2xl transition-all hover:scale-105 animate-heartbeat"
          >
            Chamar no WhatsApp
          </a>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Entregas ZAP. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">
             <a href="#privacy" onClick={(e) => handleNavClick(e, 'privacy')} className="hover:text-white transition-colors">Política de Privacidade</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
