import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(darkModeMediaQuery.matches);

    function handleChange(e: MediaQueryListEvent) {
      return setDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'dark' : 'light'} min-h-screen bg-slate-100 dark:bg-slate-900`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
