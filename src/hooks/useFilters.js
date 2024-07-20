import { useState } from 'react';

export const useFilters = (initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);

  const chengeFilter = (key, value) => {
    setFilters((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  return { filters, chengeFilter };
};
