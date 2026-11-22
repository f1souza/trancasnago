import React from 'react';
import { X, Play, Clock, CheckCircle2 } from 'lucide-react';
import { LessonItem } from './LessonsSection.tsx';

interface LessonModalProps {
  lesson: LessonItem | null;
  onClose: () => void;
  onGoToOffer: () => void;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  lesson,
  onClose,
  onGoToOffer,
}) => {
  if (!lesson) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl border-2 border-primary/60 bg-[#1e1321] p-5 sm:p-7 shadow-[0_0_50px_rgba(235,211,173,0.25)] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-card/80 text-muted-foreground hover:text-foreground transition-colors z-10"
          aria-label="Fechar"
        >
          <X className="size-5" />
        </button>

        <div className="relative aspect-video rounded-xl overflow-hidden bg-black/90 mb-5 border border-border/80 group">
          <img
            src={lesson.img}
            alt={lesson.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-between p-4">
            <span className="self-start text-[10px] font-bold uppercase bg-primary text-primary-foreground px-2.5 py-0.5 rounded-full shadow-sm">
              Aula {String(lesson.id).padStart(2, '0')} • {lesson.duration}
            </span>
            <div className="flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                <Play className="size-6 fill-current ml-1" />
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-white/90">
              <span className="flex items-center gap-1">
                <Clock className="size-3.5" /> Duração: {lesson.duration}
              </span>
              <span className="font-semibold text-primary">Qualidade Full HD 1080p</span>
            </div>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-black uppercase text-foreground">
          {lesson.title}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {lesson.description}
        </p>

        <div className="mt-4 pt-4 border-t border-border/50">
          <h4 className="text-xs font-extrabold uppercase text-primary tracking-wider mb-2.5">
            O que você aprende nesta aula:
          </h4>
          <div className="space-y-2">
            {lesson.chapters.map((chap, idx) => (
              <div key={chap} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground bg-card/60 px-3 py-2 rounded-lg border border-border/50">
                <CheckCircle2 className="size-4 text-primary shrink-0" />
                <span className="font-medium">Módulo {idx + 1}: {chap}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onGoToOffer();
            }}
            className="w-full sm:flex-1 btn-gold text-xs sm:text-sm py-3 uppercase tracking-wider font-bold"
          >
            Desbloquear Todas as Videoaulas
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-3 text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            Fechar Prévia
          </button>
        </div>
      </div>
    </div>
  );
};
