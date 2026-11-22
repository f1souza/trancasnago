import React, { useState } from 'react';
import { Check, Gift, PlayCircle, Award, ArrowRight, Star, Calendar } from 'lucide-react';
import { UpgradeModal } from './UpgradeModal.tsx';
import { getDynamicDate } from '../utils/dateUtils.ts';

const CHECKOUT_URLS = {
  premium: 'https://ggcheckout.app/checkout/v2/uQwtxHYErrS0yHPjcOt5zB',
  upgrade: 'https://ggcheckout.app/checkout/v2/x3cjypQVlco2YK1NVrC8Gj',
  basic: 'https://ggcheckout.app/checkout/v2/HQuTZqV6fVPUXH7iswIBTP',
};

export const PricingSection: React.FC = () => {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const premiumFeatures = [
    'Videoaulas passo a passo completas em HD',
    'Apostilas e materiais de apoio ilustrados',
    'Mais de 50 modelos de Tranças Nagô detalhados',
    'Bônus 1: Guia de Materiais e Produtos',
    'Bônus 2: Guia de Divisão e Preparação Cirúrgica',
    'Bônus 3: Catálogo de Inspirações em Alta Resolução',
    'Bônus 4: Tabela Inteligente de Preços para Lucrar',
    'Certificado Oficial de Conclusão Nominal',
    'Acesso online e vitalício em qualquer dispositivo',
    'Participação automática no Sorteio Mensal do Kit',
    'Garantia incondicional de 7 dias',
  ];

  const basicFeatures = [
    'Apostilas e materiais de apoio ilustrados em PDF',
    'Mais de 50 modelos de Tranças Nagô passo a passo',
    'Guia de Materiais básicos para trancista',
    'Acesso online e vitalício',
    'Garantia incondicional de 7 dias',
  ];

  const handleBasicClick = () => {
    // Open the upgrade popout modal as requested by user!
    setIsUpgradeModalOpen(true);
  };

  const dateInfo = getDynamicDate();

  return (
    <section id="oferta" className="section-pad bg-warm scroll-mt-12 border-t border-border/50 relative">
      {/* Upgrade Modal */}
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        upgradeUrl={CHECKOUT_URLS.upgrade}
        basicUrl={CHECKOUT_URLS.basic}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-5">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-black uppercase tracking-wider mb-3">
            <Calendar className="size-3.5" />
            Condição Especial Válida Somente Hoje ({dateInfo.fullText.toUpperCase()})
          </div>
          <span className="block text-primary font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">
            Seu acesso
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight">
            Escolha como aprender <span className="text-primary">Tranças Nagô</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
            Desconto promocional liberado exclusivamente para hoje, <strong className="text-foreground">{dateInfo.fullText}</strong>. Comece hoje mesmo com acesso vitalício e garantia total de 7 dias.
          </p>
        </div>

        {/* PREMIUM CARD (HIGHLIGHTED) */}
        <div className="overflow-hidden rounded-2xl border-2 border-primary bg-card text-center shadow-gold hover:shadow-gold-lg transition-all duration-300 relative">
          {/* Top Badge */}
          <div className="bg-gradient-to-r from-primary via-[#dfbe8d] to-accent px-4 py-2 text-xs sm:text-sm font-black uppercase text-primary-foreground tracking-wider flex items-center justify-center gap-1.5 shadow-sm">
            <Star className="size-4 fill-current text-primary-foreground" />
            Oferta Mais Vendida & Recomendada
          </div>

          <div className="p-6 sm:p-10">
            <span className="inline-flex items-center gap-1.5 text-primary font-bold uppercase text-xs sm:text-sm bg-primary/10 border border-primary/25 px-3 py-1 rounded-full">
              <Gift className="size-4" /> 4 bônus inclusos + Certificado
            </span>

            <h3 className="text-2xl sm:text-4xl uppercase font-black mt-4 text-foreground">
              Acesso Premium
            </h3>

            <p className="mx-auto mt-2 max-w-lg text-sm sm:text-base text-muted-foreground">
              Aprenda acompanhando os movimentos nas videoaulas práticas e consulte as apostilas enquanto treina.
            </p>

            {/* Course Mockup Image */}
            <div className="mt-6 mx-auto max-w-md rounded-xl p-1.5 bg-gradient-to-b from-primary/40 via-accent/25 to-transparent shadow-gold">
              <div className="overflow-hidden rounded-lg bg-[#160d19] border border-primary/40">
                <img
                  src="/images/trancas-nago-mockup.png"
                  alt="Mocape do Curso Tranças Nagô Acesso Premium com videoaulas, apostilas, bônus e certificado"
                  className="block w-full h-auto rounded-md"
                  width={1272}
                  height={1236}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Price block */}
            <div className="mt-5 mb-6">
              <p className="text-xs sm:text-sm text-muted-foreground uppercase font-semibold">Pagamento único de</p>
              <div className="flex items-baseline justify-center gap-1 mt-1">
                <span className="text-2xl sm:text-3xl font-bold text-primary">R$</span>
                <span className="text-6xl sm:text-7xl font-black text-primary tracking-tight">19,90</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Sem mensalidades • Acesso Vitalício</p>
            </div>

            {/* Exclusive Premium Highlights Box */}
            <div className="my-6 border-y border-primary/30 py-5 text-left bg-primary/5 rounded-xl px-4 sm:px-6">
              <p className="mb-4 text-center text-xs sm:text-sm font-black uppercase text-primary tracking-wider">
                ⭐ Só no Pacote Premium:
              </p>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3 text-sm">
                  <PlayCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <strong className="block text-foreground">Videoaulas passo a passo</strong>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      Veja em detalhes os movimentos de posicionamento das mãos, pause e reveja no seu ritmo.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Gift className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <strong className="block text-foreground">Os 4 bônus exclusivos inclusos</strong>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      Guia de materiais, divisão e preparação, catálogo de inspirações e tabela inteligente de preços.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Award className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <strong className="block text-foreground">Certificado Oficial de Conclusão Nominal</strong>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      Receba seu certificado pronto para imprimir e expor para suas clientes.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Full Checklist */}
            <p className="text-xs font-bold uppercase text-muted-foreground tracking-wider mb-4 text-left">
              Tudo o que você recebe no Acesso Premium:
            </p>
            <ul className="space-y-2.5 text-left">
              {premiumFeatures.map((feat) => (
                <li key={feat} className="flex gap-2.5 items-start text-xs sm:text-sm">
                  <Check className="size-4 shrink-0 text-primary mt-0.5" />
                  <span className="text-foreground">{feat}</span>
                </li>
              ))}
            </ul>

            {/* Premium CTA */}
            <div className="mt-8">
              <a
                href={CHECKOUT_URLS.premium}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-gold text-base sm:text-lg py-4 rounded-xl shadow-gold hover:shadow-gold-lg uppercase tracking-wider font-black flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Quero o curso completo por R$ 19,90</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              Acesso online imediato • Acesso vitalício • Garantia incondicional de 7 dias
            </p>
          </div>
        </div>

        {/* BASIC PLAN SECTION */}
        <div className="mt-14 mb-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground">
            Prefere estudar somente pelas apostilas digitais?
          </p>
        </div>

        <div className="mx-auto w-full max-w-lg rounded-xl border border-border/80 bg-card/60 backdrop-blur-sm px-6 py-7 sm:px-9 text-center hover:border-primary/40 transition-colors shadow-lg">
          <span className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
            Acesso básico
          </span>
          <h3 className="mt-1 text-2xl sm:text-3xl font-bold uppercase text-foreground">
            Pack básico
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Pagamento único de</p>
          <div className="flex items-baseline justify-center gap-1 mt-1">
            <span className="text-xl font-bold text-foreground">R$</span>
            <span className="text-4xl sm:text-5xl font-black text-foreground">7,90</span>
          </div>

          <ul className="mt-6 space-y-2.5 text-left">
            {basicFeatures.map((feat) => (
              <li key={feat} className="flex gap-2.5 items-start text-xs sm:text-sm">
                <Check className="size-4 shrink-0 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">{feat}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs text-muted-foreground bg-muted/40 p-3 rounded-lg border border-border/40">
            ⚠️ Somente apostilas e materiais de apoio em PDF. Não inclui videoaulas nem certificado oficial.
          </p>

          <button
            type="button"
            onClick={handleBasicClick}
            className="w-full btn-outline-gold mt-6 py-3 text-sm font-bold uppercase tracking-wider cursor-pointer"
          >
            Quero o acesso básico por R$ 7,90
          </button>
        </div>

        {/* MONTHLY RAFFLE SECTION */}
        <div className="mt-16 text-center">
          <span className="text-xs sm:text-sm font-bold uppercase text-primary tracking-widest">
            Sorteio mensal
          </span>
          <h3 className="mt-2 text-2xl sm:text-4xl font-black uppercase leading-tight">
            Kit profissional para <span className="text-primary">trancista Nagô</span>
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            Quem adquire o curso já participa automaticamente todos os meses do sorteio de um kit profissional para trançar completo.
          </p>

          <div className="mt-7 overflow-hidden rounded-xl border border-primary/70 shadow-gold max-w-2xl mx-auto group">
            <img
              src="/images/kit-profissional-nago-real-DIVdn5TZ.jpg"
              alt="Imagem ilustrativa de um kit profissional para tranças Nagô, com maleta, pentes, presilhas e acessórios"
              width={1200}
              height={900}
              loading="lazy"
              className="block w-full h-auto aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground italic">
            Imagem ilustrativa. Os itens e marcas do kit podem variar conforme disponibilidade.
          </p>
        </div>
      </div>
    </section>
  );
};
