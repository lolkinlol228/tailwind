// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // Импорт BrowserRouter

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter> {/* Оборачиваем приложение в BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
