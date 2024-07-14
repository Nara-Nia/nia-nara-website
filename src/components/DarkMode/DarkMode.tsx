import Moon from '../../assets/moon.svg';
import Sun from '../../assets/sun.svg';

import { Dispatch, SetStateAction } from "react";

interface IDarkMode {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export function DarkMode({ darkMode ,setDarkMode }: IDarkMode) {
  function toggleDarkMode() {
    return setDarkMode(!darkMode);
  }

  return (
    <button type='button' className="p-3 rounded-md active:bg-purple-500" onClick={toggleDarkMode}>
      <img className="h-5" src={darkMode ? Sun : Moon} alt="color mode" />
    </button>
  )
}