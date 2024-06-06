import Moon from '../assets/moon.svg';
import Sun from '../assets/sun.svg';

import { Divide as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';

import { Dispatch, SetStateAction, useState } from 'react';

interface IHeader {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export function Header({ darkMode, setDarkMode }: IHeader) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Comandos',
      link: '/commands',
    },
    {
      title: 'Suporte',
      link: '/support',
    },
  ];

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <header className="flex justify-between items-center bg-purple-700 w-full h-12 px-4 relative z-10">
        <h1 className="text-button text-slate-50 font-semibold">Nia & Nara</h1>

        <div className="flex justify-center items-center gap-1">
          <button className="p-3 rounded-md active:bg-purple-500" onClick={toggleDarkMode}>
            <img className="h-5" src={darkMode ? Sun : Moon} alt="color mode" />
          </button>

          <div className="hidden md:block">
            <div className="ml-12 flex align-baseline space-x-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  className="text-white font-semibold transition-all duration-500 hover:bg-purple-500 p-2.5"
                  to={link.link}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white active:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <Hamburger toggled={isOpen} toggle={setIsOpen} label="Show menu" color="#F9FAFB" size={24} />
            </button>
          </div>
        </div>
      </header>
      <div
        className={`md:hidden bg-gradient-to-b from-purple-700 to-purple-950 overflow-hidden transition-all duration-200 ease-out ${isOpen ? 'max-h-full translate-y-0' : 'max-h-0 -translate-y-52'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              className="text-gray-300 hover:bg-purple-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to={link.link}
              onClick={handleMenu}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
