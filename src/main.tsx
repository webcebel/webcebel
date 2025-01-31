import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes/Router'; // Importa el Router
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router /> {/* Usa el Router como raíz */}
  </React.StrictMode>
);