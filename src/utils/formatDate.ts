export const formatDate = (date: number) => {
  const objectOfDate = {};

  const formattedParts = new Intl.DateTimeFormat('en-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).formatToParts(date);

  formattedParts.forEach(({ type, value }) => {
    objectOfDate[type] = value;
  });

  return `${objectOfDate['month']} ${objectOfDate['day']}, ${objectOfDate['year']}`;
};
