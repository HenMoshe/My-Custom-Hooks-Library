import {useEffect, useState} from 'react'
function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
  const handleDebounce = setTimeout(() => {
  setDebouncedValue(value);
  }, delay);
  return () => {
    clearTimeout(handleDebounce);
  };
  },
  [value, delay]
  );
  return debouncedValue;
  }
