import React from 'react';
import { ShieldCheck, Lock, Award } from 'lucide-react';

interface FooterProps {
  onCtaClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCtaClick }) => {
  return (
    <footer className="section-pad border-t border-border/70 bg-[#120914] text-center relative">
      <div className="mx-auto max-w-3xl px-4 sm:px-5">
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-foreground leading-tight">
          Aprenda <span className="text-primary">Tranças Nagô</span> do zero
        </h2>

        <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
          Videoaulas práticas, apostilas ilustradas, mais de 50 modelos e quatro bônus exclusivos para você estudar e praticar no seu próprio ritmo.
        </p>

        <div className="mt-7">
          <button
            onClick={onCtaClick}
            className="btn-gold text-base sm:text-lg px-8 sm:px-12 py-3.5 shadow-gold hover:shadow-gold-lg"
          >
            Conhecer o curso completo
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Lock className="size-3.5 text-primary" /> Pagamento 100% Seguro
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-primary" /> Garantia de 7 Dias
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Award className="size-3.5 text-primary" /> Certificado Incluso
          </span>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-xs text-muted-foreground/75 space-y-2">
          <p>© {new Date().getFullYear()} Curso Tranças Nagô Oficial — Todos os direitos reservados.</p>
          <p className="text-[11px] max-w-xl mx-auto text-muted-foreground/50">
            Aviso Legal: Os resultados podem variar de pessoa para pessoa. Este produto é um curso livre de capacitação profissional e não possui vínculo institucional com o Facebook, Instagram ou Meta.
          </p>
        </div>
      </div>
    </footer>
  );
};
