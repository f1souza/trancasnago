import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ModelsSectionProps {
  onCtaClick: () => void;
}

export const ModelsSection: React.FC<ModelsSectionProps> = ({ onCtaClick }) => {
  const modelCategories = [
    'Nagô reta clássica simples e dupla',
    'Nagô diagonal e zig-zag geométrico',
    'Nagô coração em V e curvaturas estilizadas',
    'Tiara frontal e semipreso Nagô',
    'Nagô com rabo de cavalo e coque alto',
    'Nagô masculina com alinhamento na régua',
    'Modelos infantis sem dor e com alta durabilidade',
    'Finalizações com anéis, piercings e fios dourados',
  ];

  return (
    <section className="section-pad bg-warm overflow-hidden border-t border-border/50 relative">
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-accent/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-5 text-center relative z-10">
        <span className="inline-block text-accent font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">
          Um repertório para praticar
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight">
          Mais de <span className="text-primary">50 modelos de Tranças Nagô</span>
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Você não fica presa a apenas alguns estilos básicos. Tenha dezenas de referências com passo a passo para estudar, praticar e encantar suas clientes em um único acesso.
        </p>

        {/* Large Mockup Showcase */}
        <div className="mt-10 mx-auto max-w-3xl rounded-2xl p-2 bg-gradient-to-b from-primary/30 via-border/50 to-transparent shadow-2xl">
          <div className="rounded-xl overflow-hidden bg-[#1a111c] border border-border/80">
            <img
              src="/images/nago-modelos-mockup.png"
              alt="Mais de 50 modelos de Tranças Nagô organizados em catálogo completo"
              className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-3xl mx-auto">
          {modelCategories.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-card/60 border border-border/60 rounded-lg px-4 py-3 hover:border-primary/40 transition-colors"
            >
              <CheckCircle2 className="size-4 shrink-0 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button onClick={onCtaClick} className="btn-gold text-base sm:text-lg px-8 sm:px-10 py-3.5 group">
            <span>Quero aprender Tranças Nagô</span>
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-3 text-xs text-muted-foreground">Catálogo completo liberado imediatamente após a inscrição</p>
        </div>
      </div>
    </section>
  );
};
