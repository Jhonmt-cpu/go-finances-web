const formatValue = (value: number): string =>
  Intl.NumberFormat([], { style: 'currency', currency: 'BRL' }).format(value);

export const formatDate = (date: Date): string => {
  const dateConverted = new Date(date);
  return Intl.DateTimeFormat('pt-Br').format(dateConverted);
};

export default formatValue;
