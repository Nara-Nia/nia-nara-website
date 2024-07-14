import Bots from '../assets/bots.svg';
import Logo from '../assets/logo.svg';
import Nia from '../assets/nia.svg';
import Nara from '../assets/nara.svg';

import { Button } from '../components/Button/Button';

import { useState } from 'react';
import { useMediaQuery } from '../utils/useMediaQuery';

export default function Home() {
  const [currentInfoBot, setCurrentInfoBot] = useState<string | null>(null);

  function renderInfoBot() {
    switch (currentInfoBot) {
      case 'Nia':
        return (
          <>
            <h3 className="text-blue-500 text-lg font-semibold">Nia: A Guardiã Administrativa</h3>

            <p className="text-slate-50 text-sm">
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
            <h3 className="text-pink-500 text-lg font-semibold">Nara: A Rainha da Diversão</h3>

            <p className="text-slate-50 text-sm">
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
            <h3 className="text-slate-50 text-lg font-semibold">Clique nos botões acima!</h3>

            <p className="text-slate-50 text-sm">
              Acessando mais informações sobre cada bot e descobrir todas as funcionalidades incríveis que Nia e Nara
              têm a oferecer.
            </p>

            <p className="text-slate-50 text-sm">
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
              className="flex justify-center items-center w-[55%] h-14 bg-blue-500 rounded text-2xl text-slate-50 font-normal border border-slate-50 transition-all duration-200"
              onClick={() => setCurrentInfoBot('Nia')}
            >
              Nia
            </button>
            <button
              className="flex justify-center items-center w-[40%] h-12 bg-purple-700 rounded opacity-60 text-2xl text-slate-50 font-normal hover:opacity-90 hover:transition-all hover:scale-[1.0] duration-200"
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
              className="flex justify-center items-center w-[40%] h-12 bg-purple-700 rounded opacity-60 text-2xl text-slate-50 font-normal hover:opacity-90 transition-all hover:scale-[1.02] duration-200"
              onClick={() => setCurrentInfoBot('Nia')}
            >
              Nia
            </button>
            <button
              className="flex justify-center items-center w-[55%] h-14 bg-pink-500 rounded text-2xl text-slate-50 font-normal border border-bgslate-50 transition-all duration-200"
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
              className="flex justify-center items-center w-[40%] h-12 bg-purple-700 rounded opacity-60 text-2xl text-slate-50 font-normal hover:opacity-90 transition-all hover:scale-[1.02] duration-200"
              onClick={() => setCurrentInfoBot('Nia')}
            >
              Nia
            </button>
            <button
              className="flex justify-center items-center w-[40%] h-12 bg-purple-700 rounded opacity-60 text-2xl text-slate-50 font-normal hover:opacity-90 transition-all hover:scale-[1.02] duration-200"
              onClick={() => setCurrentInfoBot('Nara')}
            >
              Nara
            </button>
          </>
        );
    }
  }

  return (
    <>
      <div className="p-4 flex justify-center md:flex-col md:items-center md:bg-slate-950">
        <img
          className="border border-purple-700 md:max-w-[30rem] mt-4"
          src={Bots}
          alt="ilustração dos bots Nia e Nara"
        />
        <p className="hidden text-2xl font-medium text-slate-50 text-center md:block mt-2 mb-8 min-w-full">
          Clique nas personagens para inspecionar mais informações
        </p>
      </div>

      <div className="mx-6 mb-7 md:mx-60 md:my-16">
        <h2 className="text-h2 uppercase font-semibold text-purple-500 text-center md:text-left md:text-4xl">Conheça os Bots</h2>
        <p className="text-lg text-center text-slate-950 dark:text-slate-50 md:text-left md:text-2xl">
          As bots irmãs para turbinar seu servidor Discord!
        </p>

        <Button
          className="my-4 md:flex md:w-full"
          label="Informações"
          href={useMediaQuery(728) ? "#info-bot" : undefined}
          icon
        />

        <p className="text-base text-slate-950 dark:text-slate-50 md:text-lg">
          Conheça os bots que vão transformar a experiência do seu servidor no Discord! Com Nia e Nara, você não precisa
          mais se preocupar com monitoramento constante ou a falta de diversão entre os membros.
        </p>
      </div>
      
      <div
        className="flex flex-col justify-between p-6 min-h-[35rem] bg-slate-950 bg-center bg-contain bg-no-repeat relative md:hidden"
        id="info-bot"
      >
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 w-96 p-8 rounded-full"
          src={currentInfoBot === 'Nia' ? Nia : currentInfoBot === 'Nara' ? Nara : Logo}
          alt="Foto de perfil do bot"
        />

        <div className="flex justify-between items-end mb-24">{renderButtonBot()}</div>

        <div className="flex flex-col gap-2 min-h-80">{renderInfoBot()}</div>

        {currentInfoBot === 'Nia' ? (
          <Button
            className="flex justify-center items-center min-w-full h-12 bg-blue-500 rounded animate-bounce hover:bg-blue-600 active:border active:border-slate-50"
            label="Me adicione!"
            icon
          />
        ) : (
          currentInfoBot === 'Nara' && (
            <Button
              className="flex justify-center items-center min-w-full h-12 bg-pink-500 rounded animate-bounce hover:bg-pink-600 active:border active:border-slate-50"
              label="Me adicione!"
              icon
            />
          )
        )}
      </div>
    </>
  );
}
