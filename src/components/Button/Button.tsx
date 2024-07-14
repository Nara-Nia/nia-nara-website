import Discord from '../../assets/discord.svg';

import { IButton } from './ButtonProps';

export function Button({ label, className, icon, href, onClick }: IButton) {
  const Button = href ? 'a' : 'button';
  const props = href ? { href: href, className } : { onClick, className };

  return (
    <Button {...props} className={`flex justify-center items-center h-12 bg-purple-700 rounded ${href ? 'transition-transform hover:scale-105' : 'hover:cursor-default'} ${className}`}>
      {icon && <img className="h-auto px-2" src={Discord} alt="ícone da logo do discord" />}
      <p className="text-2xl text-white font-normal">{label}</p>
    </Button>
  );
}
