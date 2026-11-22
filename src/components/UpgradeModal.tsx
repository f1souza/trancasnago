import React from 'react';
import { X, Sparkles, Video, Award, Gift, ShieldCheck, ArrowRight, Flame } from 'lucide-react';

import { getDynamicDate } from '../utils/dateUtils.ts';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  upgradeUrl: string;
  basicUrl: string;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isOpen,
  onClose,
  upgradeUrl,
  basicUrl,
}) => {
  if (!isOpen) return null;
  const dateInfo = getDynamicDate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl border-2 border-primary bg-[#1f1322] shadow-[0_0_50px_rgba(235,211,173,0.3)] overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Top Warning Ribbon */}
        <div className="bg-gradient-to-r from-amber-600 via-primary to-accent py-2 px-4 text-center text-[#1c121e]">
          <p className="text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Flame className="size-4 animate-bounce fill-current" />
            OFERTA ÚNICA E EXCLUSIVA DESTA PÁGINA
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-10 right-4 p-1.5 rounded-full bg-card/80 text-muted-foreground hover:text-foreground hover:bg-card transition-colors z-10"
        >
          <X className="size-5" />
        </button>

        <div className="p-5 sm:p-7 text-center">
          <span className="inline-flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 border border-primary/30 px-3 py-1 rounded-full mb-3">
            <Sparkles className="size-3.5 text-primary" /> Upgrade Recomendado
          </span>

          <h3 id="modal-headline" className="text-2xl sm:text-3xl font-black uppercase text-foreground leading-tight">
            Espere! Leve o <span className="text-primary">Acesso Premium</span> com super desconto
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Você selecionou o Pack Básico, mas somente nesta tela você pode desbloquear o{' '}
            <strong className="text-foreground">Curso Completo com Videoaulas e Certificado</strong> por uma condição que nunca mais vai se repetir:
          </p>

          {/* Price Box */}
          <div className="my-5 rounded-xl border border-primary/50 bg-[#291a2c] p-4 text-center relative overflow-hidden shadow-gold">
            <div className="absolute -right-10 top-3 rotate-45 bg-red-600 text-white text-[10px] font-black uppercase py-0.5 px-10 shadow-sm">
              60% OFF
            </div>

            <p className="text-xs text-muted-foreground">De <span className="line-through">R$ 19,90</span> por apenas:</p>
            <div className="flex items-baseline justify-center gap-1 mt-1">
              <span className="text-xl font-bold text-primary">R$</span>
              <span className="text-5xl sm:text-6xl font-black text-primary tracking-tight">12,90</span>
            </div>
            <p className="text-[11px] text-[#ebd3ad]/90 font-medium mt-1">
              Pagamento único • Válido somente hoje ({dateInfo.fullText}) • Apenas R$ 5,00 a mais que o básico!
            </p>
          </div>

          {/* Benefits Comparison */}
          <div className="text-left space-y-2.5 mb-6 bg-card/70 border border-border/70 rounded-xl p-4">
            <p className="text-xs font-extrabold uppercase text-primary tracking-wider text-center border-b border-border/50 pb-2">
              O que você ganha com o Upgrade Premium:
            </p>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
              <div className="p-0.5 rounded bg-primary/20 text-primary mt-0.5">
                <Video className="size-3.5" />
              </div>
              <span><strong>Todas as Videoaulas Práticas Passo a Passo</strong> (veja cada movimento das mãos)</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
              <div className="p-0.5 rounded bg-primary/20 text-primary mt-0.5">
                <Award className="size-3.5" />
              </div>
              <span><strong>Certificado Oficial de Conclusão Nominal</strong> pronto para imprimir</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
              <div className="p-0.5 rounded bg-primary/20 text-primary mt-0.5">
                <Gift className="size-3.5" />
              </div>
              <span><strong>Todos os 4 Bônus Exclusivos</strong> (Materiais, Divisão, Catálogo e Precificação)</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
              <div className="p-0.5 rounded bg-primary/20 text-primary mt-0.5">
                <Sparkles className="size-3.5" />
              </div>
              <span><strong>Sorteio Mensal do Kit Profissional</strong> para trancista</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <a
              href={upgradeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full btn-gold text-sm sm:text-base py-3.5 rounded-xl shadow-gold font-black uppercase flex items-center justify-center gap-2 group animate-pulse"
            >
              <span>Sim! Quero o Premium por apenas R$ 12,90</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={basicUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="block w-full py-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors underline decoration-dotted"
            >
              Não, quero continuar apenas com o Pack Básico por R$ 7,90
            </a>
          </div>

          <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
            <ShieldCheck className="size-3.5 text-primary" /> Garantia incondicional de 7 dias mantida para ambos os planos.
          </p>
        </div>
      </div>
    </div>
  );
};
