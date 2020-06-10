import { useState } from 'react';

function useToggle(initialVal = false) {
  // chemam useState, rezervam o 'bucata' din state
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  // returneaza o bucata din state si o functie care ii da toggle
  return [state, toggle];
}

export default useToggle;
