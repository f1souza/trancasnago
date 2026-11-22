import React from 'react';
import { Award, CheckCircle, ShieldCheck, Printer } from 'lucide-react';

export const CertificateSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-background border-t border-border/50 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-5 text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 text-primary font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">
          <Award className="size-4" /> Sua conquista profissional
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight">
          Receba também seu <span className="text-primary">certificado de conclusão</span>
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Ao concluir as aulas, você emite seu Certificado Oficial de Conclusão para comprovar sua qualificação, marcar sua vitória e passar muito mais autoridade e credibilidade para suas clientes.
        </p>

        {/* Certificate Card Display */}
        <div className="mt-8 sm:mt-10 mx-auto max-w-2xl rounded-2xl p-2.5 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 shadow-gold hover:shadow-gold-lg transition-shadow duration-300">
          <div className="overflow-hidden rounded-xl border-2 border-primary/50 bg-[#160d19]">
            <img
              src="/images/certificado-trancas-nago-D1dT-NLa.jpg"
              alt="Certificado Oficial de Conclusão do Curso Tranças Nagô"
              className="block w-full h-auto object-cover"
              width={1024}
              height={724}
              loading="lazy"
            />
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground italic">Imagem ilustrativa do certificado.</p>

        {/* Certificate Highlights */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center max-w-2xl mx-auto">
          <div className="p-4 rounded-xl bg-card border border-border/70">
            <CheckCircle className="size-5 text-primary mx-auto mb-2" />
            <h4 className="font-bold text-sm text-foreground">Certificado Nominal</h4>
            <p className="text-xs text-muted-foreground mt-1">Emitido com seu nome completo e carga horária.</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border/70">
            <ShieldCheck className="size-5 text-primary mx-auto mb-2" />
            <h4 className="font-bold text-sm text-foreground">Válido no Brasil Todo</h4>
            <p className="text-xs text-muted-foreground mt-1">Reconhecido como capacitação profissional livre.</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border/70">
            <Printer className="size-5 text-primary mx-auto mb-2" />
            <h4 className="font-bold text-sm text-foreground">Pronto para Imprimir</h4>
            <p className="text-xs text-muted-foreground mt-1">Alta resolução para emoldurar no seu espaço de atendimento.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
