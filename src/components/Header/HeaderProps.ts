import { Dispatch, SetStateAction } from 'react';

export interface IHeader {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}
