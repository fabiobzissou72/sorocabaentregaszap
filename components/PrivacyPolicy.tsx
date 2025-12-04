import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={onBack}
          className="flex items-center text-brand-600 dark:text-brand-400 font-semibold mb-8 hover:underline transition-all"
        >
          <ArrowLeft size={20} className="mr-2" />
          Voltar para o início
        </button>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-brand-100 dark:bg-brand-900/30 rounded-full text-brand-600 dark:text-brand-400 mb-4">
              <Shield size={40} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Política de Privacidade</h1>
            <p className="text-slate-600 dark:text-slate-400">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          </div>

          <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                <FileText className="mr-2 text-brand-500" size={24} />
                1. Introdução
              </h2>
              <p>
                O <strong>Entregas ZAP</strong> está comprometido com a proteção dos seus dados e com a transparência sobre como suas informações são tratadas. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e compartilhamos informações ao utilizar nosso aplicativo de controle de portaria e entregas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                <Eye className="mr-2 text-brand-500" size={24} />
                2. Informações que Coletamos
              </h2>
              <p className="mb-2">Para garantir a segurança e a funcionalidade do sistema de gestão de entregas em condomínios, coletamos os seguintes dados:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Dados de Identificação:</strong> Nome do morador, unidade (bloco/apartamento) e telefone de contato.</li>
                <li><strong>Dados da Entrega:</strong> Fotos das embalagens, tipo de entrega (Correios, Delivery, etc.), código de rastreio (se aplicável) e data/hora do recebimento.</li>
                <li><strong>Dados do Usuário (Porteiro/Zelador):</strong> Nome, identificação de usuário e registros de ações no sistema (logs).</li>
                <li><strong>Dados de Retirada:</strong> Registro de quem retirou a encomenda (nome e documento, se exigido pelo condomínio) e assinatura digital (se aplicável).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                <Lock className="mr-2 text-brand-500" size={24} />
                3. Como Usamos Seus Dados
              </h2>
              <p>Utilizamos as informações coletadas para:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Gerenciar o recebimento, armazenamento e entrega de encomendas na portaria.</li>
                <li>Enviar notificações automáticas (via WhatsApp ou sistema) para os moradores sobre a chegada de encomendas.</li>
                <li>Manter um histórico seguro e auditável para resolver disputas ou extravios.</li>
                <li>Garantir a segurança do condomínio, registrando quem entregou e quem retirou cada item.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">4. Armazenamento e Segurança</h2>
              <p>
                Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda, destruição ou alteração. Os dados são armazenados em servidores seguros (nuvem) com criptografia e backups regulares. As imagens das encomendas são armazenadas apenas pelo tempo necessário conforme as regras do condomínio ou legislação vigente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">5. Compartilhamento de Dados</h2>
              <p>O Entregas ZAP não vende seus dados pessoais. As informações podem ser compartilhadas apenas nas seguintes situações:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Com a administração do condomínio (Síndico/Administradora) para fins de gestão.</li>
                <li>Com prestadores de serviço de tecnologia essenciais para o funcionamento do App (ex: servidores de banco de dados).</li>
                <li>Quando exigido por lei ou autoridade competente.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">6. Seus Direitos (LGPD)</h2>
              <p>Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Confirmar a existência de tratamento de dados.</li>
                <li>Acessar seus dados armazenados.</li>
                <li>Solicitar a correção de dados incompletos ou desatualizados.</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários (respeitando as obrigações legais de retenção do condomínio).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">7. Contato</h2>
              <p>
                Se tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato conosco:
              </p>
              <p className="mt-4 font-semibold text-brand-600 dark:text-brand-400">
                WhatsApp/Telefone: (15) 99272-4243<br/>
                Email: contato@entregaszap.com.br
              </p>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-center">
             <button 
              onClick={onBack}
              className="px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg transition-colors shadow-lg"
            >
              Entendi e concordo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
