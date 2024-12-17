// src/pages/NotFoundPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-600 mb-6">
        404 - Страница не найдена
      </h1>

      <Link to="/">
        <button className="bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Вернуться на главную страницу
        </button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
