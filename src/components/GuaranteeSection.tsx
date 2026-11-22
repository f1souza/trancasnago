import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="section-pad bg-cool border-t border-border/50 text-center relative overflow-hidden">
      <div className="mx-auto max-w-3xl px-4 sm:px-5">
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6 shadow-gold">
          <ShieldCheck className="size-9 text-primary" />
        </div>

        <div className="mx-auto max-w-2xl text-center mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight">
            Você tem <span className="text-primary">7 dias de garantia incondicional</span>
          </h2>
        </div>

        <p className="text-muted-foreground text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
          Acesse o conteúdo, assista às videoaulas e consulte todas as apostilas. Se em até 7 dias você entender que o treinamento não é para você, devolvemos 100% do seu investimento sem complicações. O risco é todo nosso!
        </p>

        <p className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-primary bg-primary/10 border border-primary/20 py-2.5 px-4 rounded-full max-w-md mx-auto">
          <Lock className="size-4 shrink-0 text-primary" />
          Sua compra está totalmente protegida e segura por 7 dias.
        </p>
      </div>
    </section>
  );
};
