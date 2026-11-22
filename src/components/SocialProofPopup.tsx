import React, { useState, useEffect } from 'react';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

const RECENT_PURCHASES = [
  { name: 'Mariana Silva', city: 'São Paulo - SP', plan: 'Acesso Premium', time: 'há 2 minutos' },
  { name: 'Camila Santos', city: 'Rio de Janeiro - RJ', plan: 'Acesso Premium', time: 'há 4 minutos' },
  { name: 'Juliana Oliveira', city: 'Belo Horizonte - MG', plan: 'Acesso Premium', time: 'há 7 minutos' },
  { name: 'Larissa Souza', city: 'Salvador - BA', plan: 'Acesso Premium', time: 'há 11 minutos' },
  { name: 'Beatriz Costa', city: 'Brasília - DF', plan: 'Acesso Premium', time: 'há 14 minutos' },
  { name: 'Fernanda Lima', city: 'Curitiba - PR', plan: 'Acesso Premium', time: 'há 18 minutos' },
];

export const SocialProofPopup: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // First appearance after 4 seconds
    const initialTimer = setTimeout(() => {
      setCurrentIdx(0);
      setIsVisible(true);
    }, 4000);

    // Loop interval
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIdx((prev) => ((prev ?? 0) + 1) % RECENT_PURCHASES.length);
        setIsVisible(true);
      }, 1000);
    }, 9000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || currentIdx === null || !isVisible) return null;

  const item = RECENT_PURCHASES[currentIdx];

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-xs sm:max-w-sm rounded-xl border border-primary/40 bg-[#1e1322]/95 backdrop-blur-md p-3 shadow-2xl shadow-black/80 animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 text-primary">
          <Sparkles className="size-4" />
        </div>
        <div className="flex-1 pr-4">
          <p className="text-xs font-bold text-foreground leading-tight">
            {item.name} <span className="text-[10px] text-muted-foreground font-normal">({item.city})</span>
          </p>
          <p className="text-[11px] text-primary font-medium mt-0.5">
            Acabou de adquirir o <strong>{item.plan}</strong>
          </p>
          <p className="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-1">
            <CheckCircle2 className="size-3 text-emerald-400" /> Compra verificada • {item.time}
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-muted-foreground hover:text-foreground p-0.5 -mt-1 -mr-1"
          aria-label="Fechar"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
};
