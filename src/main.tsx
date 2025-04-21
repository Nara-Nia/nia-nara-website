import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import Routes from './routes/AppRouter';
import './styles/global.css';
import { UserProvider } from './contexts/UserContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
);
