export const formateDate = (date) => {
  const options = {
    day: 'numeric',
    weekday: 'long',
    month: 'long',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-EN', options);
};
