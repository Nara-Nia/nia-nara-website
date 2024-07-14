import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    darkMode ? localStorage.setItem('theme', 'dark') : localStorage.removeItem('theme');
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'dark' : 'light'} min-h-screen bg-slate-100 dark:bg-slate-900`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
