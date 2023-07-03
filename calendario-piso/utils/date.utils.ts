export const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export const days = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];

export const getStartingWeekDay = (
  currentYear: number,
  currentMonth: number
) => {
  return new Date(currentYear, currentMonth, 1).getDay();
};

export const getLastDayOfMonth = (
  currentYear: number,
  currentMonth: number
) => {
  if (currentMonth === 11) {
    return 31;
  }
  return new Date(currentYear, currentMonth + 1, 0).getDate();
};
