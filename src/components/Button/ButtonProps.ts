import { ButtonHTMLAttributes } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className: string;
  icon?: boolean;
  href?: string;
  onClick?: () => void;
}
