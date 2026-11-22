import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    q: 'Preciso já saber fazer tranças?',
    a: 'Não! O curso foi estruturado especialmente para quem está começando do absoluto zero, ensinando desde a postura das mãos e divisões básicas até modelos avançados.',
  },
  {
    q: 'O curso é online?',
    a: 'Sim. Todo o conteúdo é 100% digital e fica disponível em uma área de alunas moderna. Você acessa pelo celular, computador ou tablet com total comodidade.',
  },
  {
    q: 'Por quanto tempo tenho acesso?',
    a: 'O seu acesso é vitalício! Não há mensalidades nem taxas de renovação. O material será seu para sempre.',
  },
  {
    q: 'O que são os mais de 50 modelos?',
    a: 'São mais de 50 variações de Tranças Nagô catalogadas com fotos, diagramas e esquemas passo a passo para você ter um repertório vasto de inspiração e prática.',
  },
  {
    q: 'Os bônus estão incluídos?',
    a: 'Sim! Os 4 super bônus (Guia de Materiais, Guia de Divisão, Catálogo de Inspirações e Tabela de Preços) estão 100% inclusos no Acesso Premium.',
  },
  {
    q: 'Posso assistir às aulas novamente?',
    a: 'Sim, quantas vezes quiser! Você pode pausar nos detalhes importantes, voltar e rever cada movimento com calma.',
  },
  {
    q: 'Existe garantia?',
    a: 'Sim. Você conta com 7 dias de garantia incondicional. Se não gostar do conteúdo por qualquer motivo, basta solicitar e devolveremos todo o seu dinheiro.',
  },
  {
    q: 'Como e quando recebo meu acesso?',
    a: 'O envio é imediato e automático! Pagamentos via PIX ou Cartão de Crédito são aprovados na hora, e você recebe o link no seu e-mail em menos de 2 minutos.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section-pad bg-warm border-t border-border/50">
      <div className="mx-auto max-w-3xl px-4 sm:px-5">
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 text-primary font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">
            <HelpCircle className="size-4" /> Tire suas dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight">
            Perguntas <span className="text-primary">frequentes</span>
          </h2>
          <p className="mt-2 text-muted-foreground text-sm sm:text-base">
            Tudo o que você precisa saber antes de iniciar sua jornada com Tranças Nagô.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="border border-border/80 bg-card rounded-xl overflow-hidden transition-colors hover:border-primary/40 shadow-sm"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 py-4 sm:py-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-foreground cursor-pointer"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/40 pt-3 animate-in fade-in duration-200">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
