import Bots from '../assets/bots.svg';
import Logo from '../assets/logo.svg';
import Nia from '../assets/nia.svg';
import Nara from '../assets/nara.svg';

import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';

import { useEffect, useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('theme') === 'dark');
  const [currentInfoBot, setCurrentInfoBot] = useState<string | null>(null);

  useEffect(() => {
    darkMode ? localStorage.setItem('theme', 'dark') : localStorage.removeItem('theme');
  }, [darkMode]);

  function renderInfoBot() {
    switch (currentInfoBot) {
      case 'Nia':
        return (
          <>
            <h3 className="text-blue-default text-lg font-semibold">Nia: A Guardiã Administrativa</h3>

            <p className="text-white text-sm">
              Nia é a guardiã que seu servidor precisa. Com seu sistema de verificação, registro e IDs únicos, ela
              garante a segurança e organização de todos os membros. Nia apresenta os canais, cargos e conteúdos do
              servidor de forma clara, monitora e registra todas as atividades, e mantém um olho atento para garantir
              que tudo esteja funcionando perfeitamente.
            </p>
          </>
        );
      case 'Nara':
        return (
          <>
            <h3 className="text-pink-default text-lg font-semibold">Nara: A Rainha da Diversão</h3>

            <p className="text-white text-sm">
              Nara é a responsável por trazer alegria e interação para o seu servidor. Com vídeos engraçados, sistemas
              de shippar membros e ranks que incentivam a competição saudável, ela mantém a comunidade entretida e
              engajada. Nara também cuida dos anúncios, mantendo todos informados sobre novidades e notificando quando
              seus streamers favoritos estão online.
            </p>
          </>
        );
      default:
        return (
          <>
            <h3 className="text-white text-lg font-semibold">Clique nos botões acima!</h3>

            <p className="text-white text-sm">
              Acessando mais informações sobre cada bot e descobrir todas as funcionalidades incríveis que Nia e Nara
              têm a oferecer.
            </p>

            <p className="text-white text-sm">
              Deixe seu servidor nas mãos dessas duas super ajudantes e veja a mágica acontecer!
            </p>
          </>
        );
    }
  }

  function renderButtonBot() {
    switch (currentInfoBot) {
      case 'Nia':
        return (
          <>
            <button
              className="flex justify-center items-center w-[55%] h-14 bg-blue-default rounded text-2xl text-white font-normal border border-bgWhite transition-all"
              onClick={() => setCurrentInfoBot('Nia')}
            >
              Nia
            </button>
            <button
              className="flex justify-center items-center w-[40%] h-12 bg-darkPurple rounded opacity-60 text-2xl text-white font-normal hover:opacity-90 hover:transition-all hover:scale-[1.02]"
              onClick={() => setCurrentInfoBot('Nara')}
            >
              Nara
            </button>
          </>
        );
      case 'Nara':
        return (
          <>
            <button
              className="flex justify-center items-center w-[40%] h-12 bg-darkPurple rounded opacity-60 text-2xl text-white font-normal hover:opacity-90 transition-all hover:scale-[1.02]"
              onClick={() => setCurrentInfoBot('Nia')}
            >
              Nia
            </button>
            <button
              className="flex justify-center items-center w-[55%] h-14 bg-pink-default rounded text-2xl text-white font-normal border border-bgWhite transition-all"
              onClick={() => setCurrentInfoBot('Nara')}
            >
              Nara
            </button>
          </>
        );
      default:
        return (
          <>
            <button
              className="flex justify-center items-center w-[40%] h-12 bg-darkPurple rounded opacity-60 text-2xl text-white font-normal hover:opacity-90 transition-all hover:scale-[1.02]"
              onClick={() => setCurrentInfoBot('Nia')}
            >
              Nia
            </button>
            <button
              className="flex justify-center items-center w-[40%] h-12 bg-darkPurple rounded opacity-60 text-2xl text-white font-normal hover:opacity-90 transition-all hover:scale-[1.02]"
              onClick={() => setCurrentInfoBot('Nara')}
            >
              Nara
            </button>
          </>
        );
    }
  }

  return (
    <div className={`${darkMode ? 'dark' : 'light'} min-h-screen bg-white dark:bg-black`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="mx-2 mt-6 flex justify-center">
        <img className="border border-darkPurple" src={Bots} alt="ilustração dos bots Nia e Nara" />
      </div>
      <div className="px-6 my-6">
        <h2 className="text-button uppercase font-semibold text-lightPurple text-center">Conheça os Bots</h2>
        <p className="text-body2 text-center align-middle text-black dark:text-white">
          As bots irmãs para turbinar seu servidor Discord!
        </p>

        <Button
          className="flex justify-center items-center w-auto h-12 bg-darkPurple min-w-full rounded my-4 transition-transform hover:scale-[1.01]"
          label="Informações"
          click="#info-bot"
          icon
        />

        <p className="text-body2 text-black dark:text-white">
          Conheça os bots que vão transformar a experiência do seu servidor no Discord! Com Nia e Nara, você não precisa
          mais se preocupar com monitoramento constante ou a falta de diversão entre os membros.
        </p>
      </div>

      <div
        className="flex flex-col justify-between p-6 h-[35rem] bg-bgBlack bg-center bg-contain bg-no-repeat relative"
        id="info-bot"
      >
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 w-96 p-8 rounded-full"
          src={currentInfoBot === 'Nia' ? Nia : currentInfoBot === 'Nara' ? Nara : Logo}
          alt=""
        />

        <div className="flex justify-between items-end mb-24">{renderButtonBot()}</div>

        <div className="flex flex-col gap-2 min-h-80">{renderInfoBot()}</div>

        <div>
          {currentInfoBot === 'Nia' ? (
            <Button
              className="flex justify-center items-center min-w-full h-12 bg-blue-default rounded animate-bounce hover:bg-blue-hover active:border border-white"
              label="Me adicione!"
              icon
            />
          ) : (
            currentInfoBot === 'Nara' && (
              <Button
                className="flex justify-center items-center min-w-full h-12 bg-pink-default rounded animate-bounce hover:bg-pink-hover active:border border-white"
                label="Me adicione!"
                icon
              />
            )
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
