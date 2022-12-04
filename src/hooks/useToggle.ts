import { useState } from 'react';

const useToggle: (initialValue: boolean) => [boolean, () => void] = (
  initialState
) => {
  const [value, setValue] = useState(initialState);

  const toggleValue = () => {
    setValue((prevState) => !prevState);
  };

  return [value, toggleValue];
};

export default useToggle;
