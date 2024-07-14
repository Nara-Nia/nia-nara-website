import { Divide as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';

import { IHeader } from './HeaderProps';
import { useState } from 'react';
import { DarkMode } from '../DarkMode/DarkMode';

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

  function handleMenu() {
    return setIsOpen(!isOpen);
  }

  return (
    <div>
      <header className="flex justify-between items-center bg-purple-700 w-full h-12 px-4 relative z-10">
        <h1 className="text-2xl text-slate-50 font-semibold md:text-3xl">Nia & Nara</h1>

        <div className="flex items-center gap-2 md:gap-8">
          <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />

          <button
            type="button"
            onClick={handleMenu}
            className="flex items-center rounded-md text-gray-400 hover:text-white active:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white md:hidden"
          >

            <span className="sr-only">Open main menu</span>
            <Hamburger toggled={isOpen} toggle={setIsOpen} label="Show menu" color="#F9FAFB" size={24} />
          </button>

          <div className="hidden md:flex">
            <div className="flex gap-4">
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
