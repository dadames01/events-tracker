export const useDate = (currentDate: Date) => {
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const firstWeekDay = getStartingWeekDay(currentYear, currentMonth);
  const lastDayOfMonth = getLastDayOfMonth(currentMonth, currentYear);

  const currentMonthString = months[currentMonth];

  const daysInfo = computed(() => {
    const array = [];
    let counter = 1;
    let foundStartingDay = false;

    while (counter < lastDayOfMonth) {
      for (let i = 0; i < 7; i++) {
        if (firstWeekDay === i && counter === 1) {
          foundStartingDay = true;
        }
        if (foundStartingDay && counter <= lastDayOfMonth) {
          array.push({ dayNumber: counter });
          counter++;
        } else {
          array.push({ dayNumber: 0 });
        }
      }
    }
    return array;
  });

  return {
    month: currentMonthString,
    year: currentYear,
    daysInfo,
  };
};
