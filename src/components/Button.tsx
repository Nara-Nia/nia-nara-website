import Discord from '../assets/discord.svg';

interface IButton {
  label: string;
  className: string;
  icon?: boolean;
  click?: string;
  onClick?: () => void;
}

export function Button({ label, className, icon, click, onClick }: IButton) {
  const Button = click ? 'a' : 'button';
  const props = click ? { href: click, className } : { onClick, className };

  return (
    <Button {...props}>
      {icon && <img className="h-auto px-2" src={Discord} alt="ícone da logo do discord" />}
      <p className="text-2xl text-white font-normal">{label}</p>
    </Button>
  );
}
