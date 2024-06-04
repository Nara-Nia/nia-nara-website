import Moon from '../assets/moon.svg';
import Sun from '../assets/sun.svg';
import { Divide as Hamburger } from 'hamburger-react';

import { Dispatch, SetStateAction, useState } from 'react';

interface IHeader {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export function Header({ darkMode, setDarkMode }: IHeader) {
  const [isOpen, setOpen] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <header className="flex justify-between items-center bg-darkPurple w-full h-12 px-4">
      <h1 className="text-button text-white font-semibold">Nia & Nara</h1>

      <div className="flex justify-center items-center gap-1">
        <button className="p-3" onClick={toggleDarkMode}>
          <img className="h-5" src={darkMode ? Sun : Moon} alt="color mode" />
        </button>
        <button>
          <Hamburger toggled={isOpen} toggle={setOpen} label="Show menu" color="#FAFAFA" size={28} />
        </button>
      </div>
    </header>
  );
}
