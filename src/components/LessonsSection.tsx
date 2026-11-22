import React from 'react';
import { Video, BookOpen, Sparkles, Scissors, CheckCircle, Play, Heart, Bookmark, Eye } from 'lucide-react';

export interface LessonItem {
  id: number;
  title: string;
  img: string;
  chapters: string[];
  description: string;
  duration: string;
}

export const LESSONS_DATA: LessonItem[] = [
  {
    id: 1,
    title: 'Preparação e divisão',
    img: '/images/aula-nago-divisao-BWNameCQ.jpg',
    duration: '14 min',
    description: 'Aprenda os segredos da higienização, desembaraço, alinhamento dos fios e linhas de divisão milimetricamente limpas com pomada modeladora.',
    chapters: ['Materiais e preparação', 'Divisão das mechas', 'Organização do cabelo'],
  },
  {
    id: 2,
    title: 'Nagô reta simples',
    img: '/images/aula-nago-raiz-CiWzQ29y.jpg',
    duration: '22 min',
    description: 'O fundamento primordial da trança nagô. Como alimentar a mecha sem dor, sem tensionar o couro cabeludo e mantendo espessura constante.',
    chapters: ['Iniciando na raiz', 'Trançando as mechas', 'Finalização da trança'],
  },
  {
    id: 3,
    title: 'Nagô reta dupla',
    img: '/images/aula-nago-dupla-C7Ulq95H.jpg',
    duration: '18 min',
    description: 'Técnica de alinhamento duplo simétrico, ideal para penteados masculinos, femininos e infantis com visual impecável.',
    chapters: ['Divisão central', 'Primeira trança', 'Segunda trança'],
  },
  {
    id: 4,
    title: 'Nagô diagonal',
    img: '/images/aula-nago-diagonal-8vAt-LGs.jpg',
    duration: '26 min',
    description: 'Domine a curvatura e ângulos diagonais com acabamento de alto padrão para desenhos geométricos modernos.',
    chapters: ['Desenho das linhas', 'Direção das tranças', 'Acabamento diagonal'],
  },
  {
    id: 5,
    title: 'Nagô coração',
    img: '/images/aula-nago-coracao-DJdZa0hu.jpg',
    duration: '31 min',
    description: 'Um dos modelos mais pedidos e lucrativos nos salões. Marcação em V, curvas orgânicas perfeitas e simetria de alto valor.',
    chapters: ['Marcação do coração', 'Trançando as curvas', 'Acabamento final'],
  },
];

const APOSTILAS_DATA = [
  { img: '/images/apostila-trancas-nago-11.png', name: 'Nagô clássica reta simples' },
  { img: '/images/apostila-trancas-nago-12.png', name: 'Nagô clássica reta simples — passo a passo' },
  { img: '/images/apostila-trancas-nago-13.png', name: 'Nagô clássica reta dupla' },
  { img: '/images/apostila-trancas-nago-14.png', name: 'Nagô diagonal com desenho' },
  { img: '/images/apostila-trancas-nago-15.png', name: 'Nagô coração em V' },
];

const HIGHLIGHT_CARDS = [
  {
    Icon: Video,
    title: 'Videoaulas passo a passo',
    text: 'Acompanhe a execução das técnicas e reveja as aulas sempre que precisar, no seu próprio ritmo.',
  },
  {
    Icon: BookOpen,
    title: 'Apostilas de apoio',
    text: 'Materiais digitais ricamente ilustrados para acompanhar os estudos e consultar onde estiver.',
  },
  {
    Icon: Sparkles,
    title: 'Mais de 50 modelos',
    text: 'Referências e esquemas práticos para estudar, praticar e ampliar o catálogo para suas clientes.',
  },
  {
    Icon: Scissors,
    title: 'Preparação e divisão',
    text: 'Entenda como preparar, alinhar e organizar o cabelo antes de começar com precisão cirúrgica.',
  },
  {
    Icon: CheckCircle,
    title: 'Acabamento e finalização',
    text: 'Aprenda detalhes importantes para um trabalho sem frizz, alinhado e que dura muito mais tempo.',
  },
];

interface LessonsSectionProps {
  onSelectLesson: (lesson: LessonItem) => void;
}

export const LessonsSection: React.FC<LessonsSectionProps> = ({ onSelectLesson }) => {
  return (
    <section className="section-pad bg-cool overflow-hidden border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <span className="inline-block text-primary font-bold text-xs sm:text-sm uppercase tracking-widest mb-2">
            O que você vai encontrar
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight">
            Aprenda com <span className="text-primary">aulas e materiais de apoio</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Uma formação completa estruturada para quem está saindo do zero até quem deseja aperfeiçoar sua técnica e faturar como trancista.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {HIGHLIGHT_CARDS.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="border border-border/70 bg-card/60 backdrop-blur-sm rounded-xl p-5 sm:p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <Icon className="size-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-foreground font-display tracking-wide">{title}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{text}</p>
            </div>
          ))}

          {/* Quick Bonus Metric Card */}
          <div className="border border-primary/40 bg-linear-to-br from-card to-primary/10 rounded-xl p-5 sm:p-6 flex flex-col justify-center items-start shadow-gold">
            <span className="text-xs uppercase font-extrabold text-primary tracking-wider">Acesso Imediato</span>
            <h3 className="font-bold text-xl sm:text-2xl text-foreground mt-1 font-display">Estude quando e onde quiser</h3>
            <p className="text-muted-foreground text-sm mt-2">Disponível no celular, computador ou tablet com acesso vitalício.</p>
          </div>
        </div>

        {/* Apostilas Section */}
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase text-accent tracking-widest block mb-1">Guias Ilustrados</span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
            Apostilas e <span className="text-primary">materiais de consulta</span>
          </h3>
          <p className="text-muted-foreground text-sm mt-2 max-w-md mx-auto">
            Esquemas gráficos vetorizados passo a passo para você imprimir ou visualizar enquanto treina.
          </p>
        </div>

        {/* Infinite Carousel of Apostilas */}
        <div className="manual-carousel mb-20 py-4">
          <div className="manual-carousel-track">
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} className="manual-carousel-group" aria-hidden={copyIndex === 1}>
                {APOSTILAS_DATA.map((apostila, idx) => (
                  <div
                    key={`${apostila.name}-${idx}`}
                    className="w-[200px] sm:w-[240px] shrink-0 rounded-xl border border-border/70 bg-card overflow-hidden shadow-xl hover:border-primary/60 transition-all duration-300 group"
                  >
                    <div className="aspect-[259/373] bg-[#1a121c] p-2 flex items-center justify-center overflow-hidden">
                      <img
                        src={apostila.img}
                        alt={apostila.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 bg-card border-t border-border/50 text-center">
                      <p className="text-xs font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                        {apostila.name}
                      </p>
                      <span className="text-[10px] text-muted-foreground uppercase font-semibold">Material Oficial PDF</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Video Lessons Section */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase text-primary tracking-widest block mb-1">Aulas Práticas em Vídeo</span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
            Videoaulas <span className="text-primary">práticas em alta definição</span>
          </h3>
          <p className="mt-2 text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
            Assista, pratique, pause, reveja os movimentos de perto e evolua no seu próprio ritmo. Clique em qualquer aula para ver a prévia.
          </p>
        </div>

        {/* Phone Carousel for Lessons */}
        <div className="manual-carousel py-4">
          <div className="manual-carousel-track lesson-carousel-track">
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} className="manual-carousel-group lesson-carousel-group" aria-hidden={copyIndex === 1}>
                {LESSONS_DATA.map((lesson, idx) => (
                  <div
                    key={`${lesson.title}-${idx}`}
                    onClick={() => onSelectLesson(lesson)}
                    className="lesson-phone cursor-pointer group"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="lesson-phone-screen">
                      {/* Phone Header */}
                      <div className="lesson-phone-header">
                        <span className="lesson-phone-brand">
                          TRANÇAS<br />
                          <strong>NAGÔ</strong>
                        </span>
                        <span className="lesson-phone-course">AULA HD • {lesson.duration}</span>
                      </div>

                      {/* Phone Video Cover */}
                      <div className="lesson-phone-image">
                        <img
                          src={lesson.img}
                          alt={lesson.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <span className="lesson-play group-hover:scale-110">
                          <Play className="size-3.5 fill-current text-[#1c121e]" />
                        </span>
                        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[9px] font-bold text-white">
                          HD
                        </div>
                      </div>

                      {/* Video Progress Bar */}
                      <div className="lesson-progress">
                        <span />
                      </div>

                      {/* Phone Body */}
                      <div className="lesson-phone-body">
                        <span className="lesson-phone-label">
                          AULAS DO CURSO · {String(lesson.id).padStart(2, '0')}
                        </span>
                        <strong className="lesson-phone-title text-foreground group-hover:text-primary transition-colors">
                          {lesson.title}
                        </strong>

                        <div className="lesson-phone-chapters">
                          {lesson.chapters.map((chap, cIdx) => (
                            <div key={chap} className="lesson-phone-chapter">
                              <span className="lesson-chapter-number">{String(cIdx + 1).padStart(2, '0')}</span>
                              <span className="text-muted-foreground truncate">{chap}</span>
                              <span className="lesson-chapter-play">▶</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Phone Footer Bar */}
                      <div className="lesson-phone-footer">
                        <Heart size={14} className="hover:text-red-400 transition-colors" />
                        <Bookmark size={14} className="hover:text-primary transition-colors" />
                        <Eye size={14} className="hover:text-primary transition-colors" />
                      </div>
                    </div>
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
