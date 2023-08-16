/**
 * Display a flexible count with abbreviations like "k" (thousands) and "M" (millions)
 *
 * @param count — The actual count number to abbreviate
 *
 */
export const getCountFormat = (count: number) => {
  const isMillion = 1000000;
  const isKilo = 1000;

  if (count >= isMillion) {
    return (count / isMillion).toFixed(2) + 'M';
  } else if (count >= isKilo) {
    return (count / isKilo).toFixed(2) + 'K';
  }
  return count.toString();
};
