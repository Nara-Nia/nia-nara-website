import React, { createContext, useState, ReactNode, useContext } from 'react';
import Cookies from 'js-cookie';
import { IUser } from '../types/userType';

interface UserContextType {
  user: IUser | null;
  setUser: any;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  let initialUser = null;

  try {
    const cookieUser = Cookies.get('discord_user');
    if (cookieUser) {
      initialUser = JSON.parse(cookieUser);
    }
    throw Error('Não foi possível localizar o cookie');
  } catch (e: any) {
    if (import.meta.env.DEV) {
      console.warn(e);
    };
  }

  const [user, setUser] = useState(initialUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within an UserProvider');
  }
  return context;
};
