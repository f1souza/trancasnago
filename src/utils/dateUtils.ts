/**
 * Utility to provide dynamic, localized date strings that update automatically
 * according to the current day.
 */

export const getDynamicDate = () => {
  const now = new Date();

  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];

  const weekdays = [
    'domingo',
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
    'sábado',
  ];

  const day = now.getDate();
  const monthName = months[now.getMonth()];
  const weekday = weekdays[now.getDay()];
  const year = now.getFullYear();

  return {
    day,
    weekday,
    monthName,
    year,
    // e.g. "quarta-feira, 12 de novembro"
    fullText: `${weekday}, ${day} de ${monthName}`,
    // e.g. "12 de novembro"
    shortText: `${day} de ${monthName}`,
    // e.g. "12/11/2026"
    numeric: `${String(day).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${year}`,
  };
};
