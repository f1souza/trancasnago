import React from 'react';
import { ArrowDown, ShieldCheck, PlayCircle, BookOpen, Award, Sparkles } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <header className="section-pad pt-4 pb-12 sm:pt-7 sm:pb-16 overflow-hidden bg-gold-glow relative">
      {/* Decorative ambient background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-5 text-center relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-wider mb-5">
            <Sparkles className="size-3.5 text-primary animate-pulse" />
            Método 100% Prático Passo a Passo
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.08] tracking-tight">
            Aprenda a fazer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ebd3ad] via-[#f5e4c8] to-[#c9937b]">Tranças Nagô do zero</span>
          </h1>

          <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground font-normal leading-relaxed">
            Aprenda passo a passo com <strong className="font-bold text-primary">videoaulas práticas</strong>,{' '}
            <strong className="font-bold text-foreground">apostilas de apoio</strong> e{' '}
            <strong className="font-bold text-primary">mais de 50 modelos</strong> para estudar, praticar e reproduzir.{' '}
            <strong className="font-bold text-foreground">Mesmo que você ainda não saiba fazer tranças.</strong>
          </p>

          {/* Floating Mockup with levitation shadow */}
          <div className="mockup-stage mt-8 sm:mt-10 mx-auto max-w-xl px-2">
            <div className="mockup-float group">
              <img
                src="/images/trancas-nago-mockup.png"
                alt="Mocape do Curso Tranças Nagô com videoaulas, apostilas, bônus e certificado"
                className="block w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                width={1272}
                height={1236}
                loading="eager"
              />
            </div>
            <div className="mockup-shadow" aria-hidden="true" />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-[#ebd3ad]">
            <span className="flex items-center gap-1.5 bg-card/80 border border-border px-3 py-1.5 rounded-lg shadow-sm">
              <PlayCircle className="size-4 text-primary" /> Videoaulas
            </span>
            <span className="flex items-center gap-1.5 bg-card/80 border border-border px-3 py-1.5 rounded-lg shadow-sm">
              <BookOpen className="size-4 text-primary" /> Apostilas Digitais
            </span>
            <span className="flex items-center gap-1.5 bg-card/80 border border-border px-3 py-1.5 rounded-lg shadow-sm">
              <Sparkles className="size-4 text-primary" /> +50 Modelos
            </span>
            <span className="flex items-center gap-1.5 bg-card/80 border border-border px-3 py-1.5 rounded-lg shadow-sm">
              <Award className="size-4 text-primary" /> 4 Bônus Exclusivos
            </span>
          </div>

          <div className="mt-8">
            <button
              onClick={onCtaClick}
              className="btn-gold text-base sm:text-lg px-8 sm:px-12 py-4 rounded-xl shadow-gold hover:shadow-gold-lg group"
            >
              <span>Quero aprender Tranças Nagô agora</span>
              <ArrowDown className="size-5 transition-transform group-hover:translate-y-1" />
            </button>
          </div>

          <p className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <ShieldCheck className="size-4 text-primary" />
            Acesso Imediato e Vitalício • Garantia Incondicional de 7 dias
          </p>
        </div>
      </div>
    </header>
  );
};
