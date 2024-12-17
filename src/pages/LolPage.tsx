// src/pages/LolPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';


function LolPage() {
  return (
    <div className="flex flex-col min-h-screen w-full" >

<header className="bg-green-950 text-green-400  p-4  w-full ">
        <h1 className="text-2xl md:text-4xl font-semibold text-center">
          Добро пожаловать на  страницу LolPage
        </h1>
        <ul className="flex flex-row list-none p-0 space-x-4  items-center justify-center">

      
<li>  <Link to="/" className="" >
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2" className='hover:scale-110 duration-300'>
<path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
<path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
</svg>
</Link>
</li>
<li>
<Link to="/lol"   >
<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2" className='hover:scale-110 duration-300'>
<path d="M14 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
<path d="M21 10a3.5 3.5 0 0 0 -7 0"></path>
<path d="M14 10a3.5 3.5 0 0 1 -7 0"></path>
<path d="M14 17a3.5 3.5 0 0 0 0 -7"></path>
<path d="M14 3a3.5 3.5 0 0 0 0 7"></path>
<path d="M3 21l6 -6"></path>
</svg>
</Link>
</li>


</ul>
      </header>


      <main className="flex flex-col items-center justify-center flex-grow">
      <Link to="/">
        <button className="bg-green-950 text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Вернуться на главную страницу
        </button>
      </Link>
      </main>
      
      <footer className="bg-green-950 text-green-400 p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Ваша Компания. Все права защищены.</p>
      </footer>

      
    </div>
  );
}

export default LolPage;
