import { useEffect, useState } from 'react';

export const useDebounce = (keywords, delay) => {
  // Исправлено: передаются два аргумента, а не объект
  const [debouncedKeywords, setDebouncedKeywords] = useState(keywords);

  useEffect(() => {
    if (keywords === '') return;
    const timer = setTimeout(() => {
      setDebouncedKeywords(keywords);
    }, delay);

    return () => clearTimeout(timer);
  }, [keywords, delay]);

  return debouncedKeywords;
};
