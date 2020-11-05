export const getDate = (): string => {
  const currentDate = new Date();
  const [, , dayOfTheMonth, year, time] = currentDate.toString().split(' ');
  const month = currentDate.getMonth() + 1;

  return `${dayOfTheMonth}/${month}/${year} ${time}`;
};
