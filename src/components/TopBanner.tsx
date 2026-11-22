import React, { useState, useEffect } from 'react';
import { Clock, Sparkles } from 'lucide-react';
import { getDynamicDate } from '../utils/dateUtils.ts';

export const TopBanner: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(getDynamicDate());
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // Update date dynamically and calculate countdown to midnight of the current day
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      setCurrentDate(getDynamicDate());

      // End of current day (23:59:59)
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const diff = endOfDay.getTime() - now.getTime();
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedHours = String(timeLeft.hours).padStart(2, '0');
  const formattedMinutes = String(timeLeft.minutes).padStart(2, '0');
  const formattedSeconds = String(timeLeft.seconds).padStart(2, '0');

  return (
    <div className="sticky top-0 z-50 w-full bg-linear-to-r from-[#ebd3ad] via-[#dfbe8d] to-[#c9937b] text-[#1c121e] shadow-md border-b border-[#ffdca8]/40">
      <div className="mx-auto max-w-6xl px-3 py-2 sm:py-2.5 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-center">
        {/* Pulsing indicator + Current Date Discount Message */}
        <div className="flex items-center justify-center gap-2">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1c121e] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1c121e]"></span>
          </span>
          <p className="text-[11px] leading-tight sm:text-xs md:text-sm font-black uppercase tracking-wide">
            DESCONTO LIBERADO SOMENTE HOJE, <span className="underline decoration-[#1c121e] decoration-2 underline-offset-2">{currentDate.fullText.toUpperCase()}</span>.
          </p>
        </div>

        {/* Countdown Badge */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black bg-[#1c121e] text-[#ebd3ad] px-2.5 py-0.5 rounded-full shadow-xs">
            <Clock className="size-3 text-[#ebd3ad] animate-pulse" />
            ENCERRA ÀS 23:59H ({formattedHours}h {formattedMinutes}m {formattedSeconds}s)
          </span>

          <span className="hidden lg:inline-flex items-center gap-1 text-[11px] font-bold text-[#1c121e] bg-white/30 backdrop-blur-xs px-2 py-0.5 rounded-md">
            <Sparkles className="size-3" />
            Vagas Limitadas
          </span>
        </div>
      </div>
    </div>
  );
};
