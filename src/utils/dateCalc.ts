export const calculateMonthsBetweenDates = (startDate: Date, endDate: Date) => {
  const yearsToMonth = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  const monthsCalc = (endDate.getMonth() + 1) - startDate.getMonth();
  const total = yearsToMonth + monthsCalc;
  const years = Math.floor(total / 12);
  const months =  total % 12;
  return { years, months};
}
