import React from 'react';
import { Gift, CheckCircle2 } from 'lucide-react';

const BONUSES_LIST = [
  {
    tag: 'Bônus 01',
    title: 'Guia de Materiais',
    img: '/images/bonus-nago-materiais-premium-DpMWlwFi.jpg',
    alt: 'Capa do Guia de Materiais de Tranças Nagô',
    text: 'Conheça os principais materiais utilizados para começar a trabalhar com Tranças Nagô. Quais pomadas modeladoras não ressecam, pentes ideais e fibras com melhor acabamento.',
  },
  {
    tag: 'Bônus 02',
    title: 'Guia de Divisão e Preparação',
    img: '/images/bonus-nago-divisao-premium-XPR35Gna.jpg',
    alt: 'Mockup do Guia de Divisão e Preparação do Cabelo',
    text: 'O segredo da divisão limpa. Domine o passo a passo da preparação capilar, alinhamento dos fios e repartições simétricas antes de colocar a mão na massa.',
  },
  {
    tag: 'Bônus 03',
    title: 'Catálogo de Inspirações',
    img: '/images/bonus-nago-inspiracoes-premium-D_BSvVAC.jpg',
    alt: 'Mockup do Catálogo de Inspirações de Tranças Nagô',
    text: 'Mais de 100 fotos em altíssima resolução para praticar diferentes estilos, atualizar seu feed e enviar diretamente para suas clientes escolherem.',
  },
  {
    tag: 'Bônus 04',
    title: 'Tabela Inteligente de Preços',
    img: '/images/bonus-nago-tabela-precos-card-L0giji9K.png',
    alt: 'Mockup da Tabela Inteligente de Preços para Trancistas',
    text: 'Como precificar cada tipo de trança considerando o tempo gasto, custo dos materiais e margem de lucro real. Nunca mais cobre menos do que seu trabalho vale.',
  },
];

export const BonusesSection: React.FC = () => {
  return (
    <section className="section-pad bg-cool border-t border-border/50 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-primary font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">
            <Gift className="size-4" /> Presentes Especiais Para Você
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight">
            Você também recebe <span className="text-primary">4 super bônus</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Materiais exclusivos que complementam seu aprendizado e aceleram o seu sucesso profissional.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {BONUSES_LIST.map((b) => (
            <div
              key={b.tag}
              className="group border border-border/70 bg-card rounded-2xl overflow-hidden shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[16/10] bg-[#1a111c] overflow-hidden relative">
                <img
                  src={b.img}
                  alt={b.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {b.tag}
                </span>
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-primary text-xs font-bold px-2.5 py-1 rounded-md border border-primary/20">
                  Incluso Grátis
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display uppercase text-foreground group-hover:text-primary transition-colors">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {b.text}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-primary">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5" /> Acesso Digital Imediato
                  </span>
                  <span className="text-muted-foreground line-through">Valor individual: R$ 47,00</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
