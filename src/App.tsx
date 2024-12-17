// src/App.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LolPage from './pages/LolPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lol" element={<LolPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Маршрут 404 */}
      </Routes>
    </div>
  );
}

export default App;
