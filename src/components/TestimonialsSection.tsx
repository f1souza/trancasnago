import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

const TESTIMONIALS = [
  { img: '/images/depoimento-trancas-nago-32.png', alt: 'Depoimento aluna 1: elogiando a didática e primeiras clientes' },
  { img: '/images/depoimento-trancas-nago-33.png', alt: 'Depoimento aluna 2: resultado das tranças nagô perfeitas' },
  { img: '/images/depoimento-trancas-nago-34.png', alt: 'Depoimento aluna 3: gratidão pelo certificado e facilidade' },
  { img: '/images/depoimento-trancas-nago-35.png', alt: 'Depoimento aluna 4: faturando já nas primeiras semanas' },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-background overflow-hidden border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-accent font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">
            <MessageCircle className="size-4" /> Depoimentos Reais
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight">
            O que estão <span className="text-primary">dizendo sobre o curso</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
            Prints de conversas no WhatsApp com feedbacks espontâneos de quem aplicou o método na prática.
          </p>

          <div className="mt-4 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-4 text-amber-400 fill-amber-400" />
            ))}
            <span className="text-xs font-bold text-foreground ml-2">4.9 / 5.0 (Mais de 1.450 alunas satisfeitas)</span>
          </div>
        </div>

        {/* Carousel of conversation screenshots */}
        <div className="manual-carousel py-4">
          <div className="manual-carousel-track chat-carousel-track">
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} className="manual-carousel-group chat-carousel-group" aria-hidden={copyIndex === 1}>
                {TESTIMONIALS.map((t, idx) => (
                  <div key={`${t.img}-${idx}`} className="chat-carousel-image bg-card">
                    <img
                      src={t.img}
                      alt={t.alt}
                      width={265}
                      height={470}
                      className="block h-auto w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
