export const useDate = (currentDate: Date) => {
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  return { month, year };
};
