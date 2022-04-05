import { useState } from 'react'

const useArray = (initValue = []) => {
  const [value, setValue] = useState(initValue);

  const push = element => {
    setValue(oldValue => [...oldValue, element]);
  };

  const remove = index => {
    setValue(oldValue => oldValue.filter((_, i) => i !== index));
  };

  const isEmpty = () => value.length === 0;
  
  return { value, setValue, push, remove, isEmpty };
};
