import React, { useState } from 'react'; // Добавлено useState для управления состоянием.
import { Link } from 'react-router-dom';  // Импортирует компонент Link из библиотеки react-router-dom, чтобы использовать для создания ссылок внутри приложения.

import sinImagee from './images/xingqiu.webp';  // Импортирует изображение персонажа (sin.png), которое будет использовано на странице.



function LolPage() {  // Определяет функциональный компонент с именем LolPage.
  const [activeSection, setActiveSection] = useState("profile");

  

  
 
  const [value, setValue] = useState(0); // Предполагается, что это в функциональном компоненте React
/*const statsByLevel: { [key: number]: Stats } = {
  20: { hp: 2202, atk: 43, def: 163, atkBonus: "0%" },
  40: { hp: 4257, atk: 84, def: 316, atkBonus: "0%", price: 20000 },
  50: { hp: 5420, atk: 107, def: 402, atkBonus: "6%", price: 40000 },
  60: { hp: 6735, atk: 133, def: 499, atkBonus: "12%", price: 60000 },
  70: { hp: 7897, atk: 156, def: 585, atkBonus: "12%", price: 80000 },
  80: { hp: 9060, atk: 179, def: 671, atkBonus: "18%", price: 100000 },
  90: { hp: 10222, atk: 202, def: 758, atkBonus: "24%", price: 120000 },
};
*/
  return (

    <div className="flex flex-col min-h-screen w-full" style={{ backgroundColor: "rgba(49,43,71)" }}>
      {/* Главный контейнер страницы. Он использует классы Tailwind CSS:
          - `flex` - задаёт флексбокс для выравнивания дочерних элементов.
          - `flex-col` - выравнивание дочерних элементов по вертикали.
          - `min-h-screen` - минимальная высота блока равна высоте экрана.
          - `w-full` - ширина блока на 100% экрана.
          - `backgroundColor: "rgba(49,43,71)"` - задаёт цвет фона в виде полупрозрачного оттенка с RGB значениями. */}

      {/* Header */}
      <header  className="bg-cyan-950 p-4 w-full text-text-color" style={{ backgroundColor: "rgb(71, 62, 103)", border: "2px solid rgb(93, 81, 135)", borderTop: "none", borderLeft: "none", borderRight: "none" }}>
        {/* Шапка страницы. Внешний стиль с фоном и границей.
            - `bg-cyan-950` - класс Tailwind для фона.
            - `p-4` - отступы вокруг содержимого.
            - `w-full` - ширина блока на 100%.
            - `text-text-color` - для определения цвета текста.
            - Внутренний стиль в `style={{}}`: 
              - `backgroundColor: "rgb(71, 62, 103)"` задаёт тёмный фоновый цвет для шапки.
              - `border: "2px solid rgb(93, 81, 135)"` — рамка вокруг шапки с цветом и толщиной 2px.
              - `borderTop: "none"`, `borderLeft: "none"`, `borderRight: "none"` — убирает видимость рамки сверху, слева и справа, оставляя рамку только снизу. */}

        <div className="container mx-auto">
        <h1 className="text-2xl md:text-4xl text-center text-text-color">
  Добро пожаловать на главную страницу
</h1>

          {/* Заголовок на странице, который изменяет размер текста в зависимости от ширины экрана:
              - `text-2xl` - на маленьких экранах размер текста 2xl.
              - `md:text-4xl` - на экранах среднего размера (md) размер текста становится 4xl.
              - `font-semibold` - полужирный шрифт.
              - `text-center` - выравнивание текста по центру. */}
          
          <ul className="flex flex-row list-none p-0 space-x-4 items-center justify-center">
            {/* Список навигации с иконками. Классы Tailwind:
                - `flex flex-row` - элементы списка выравниваются по горизонтали.
                - `list-none` - убирает стандартные маркеры списка.
                - `p-0` - убирает отступы.
                - `space-x-4` - добавляет отступы между элементами списка.
                - `items-center` - вертикальное выравнивание элементов.
                - `justify-center` - горизонтальное выравнивание элементов. */}
            
            <li>
              <Link to="/">
                {/* Ссылка на главную страницу */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  width="24"
                  height="24"
                  stroke-width="2"
                  className="hover:scale-110 duration-300"
                >
                  {/* SVG иконка стрелки, ведущей на главную страницу. */}
                  <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                </svg>
              </Link>
            </li>
            
            <li>
              <Link to="/lol">
                {/* Ссылка на текущую страницу */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  width="24"
                  height="24"
                  stroke-width="2"
                  className="hover:scale-110 duration-300"
                >
                  {/* SVG иконка */}
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
        </div>
      </header>
<div className="wrapper" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <main style={{ flex: 1 }}>
        {/* Основная часть страницы */}
        <div
          className="flex flex-col items-start justify-start space-y-4 p-6 rounded-tr-[25px] rounded-br-[25px] max-w-[250px] hover:max-w-[380px] duration-300 group"
          style={{ backgroundColor: "rgb(71, 62, 103)", border: "2px solid rgb(93, 81, 135)", position: "relative", top: "50px", borderLeft: "none" }}
        >
          {/* Контейнер для информации о персонаже:
              - `flex flex-col` - выравнивание элементов по вертикали.
              - `items-start` - выравнивание по левому краю.
              - `justify-start` - выравнивание элементов по верхнему краю.
              - `space-y-4` - добавление вертикальных отступов между элементами.
              - `p-6` - отступы внутри контейнера.
              - `rounded-tr-[25px]`, `rounded-br-[25px]` - скругление правых верхнего и нижнего углов на 25px.
              - `max-w-[250px]` - максимальная ширина контейнера 250px.
              - `hover:max-w-[350px]` - при наведении ширина контейнера увеличивается до 350px.
              - `duration-300` - плавная анимация перехода ширины. */}

          {/* Иконка элемента и имя персонажа */}
          <div className="inline-flex items-center space-x-3">
            {/* Блок для изображения и текста с персонажем */}
            <img
              src="https://gi.yatta.moe/assets/UI/UI_Buff_Element_Water.png?vh=2024111801"
              alt="Avatar Element"
              className="w-12 h-12"
            />
            {/* Изображение элемента персонажа, размер 12x12 */}
            <div className="inline-flex items-center space-x-2">
              {/* Блок для имени персонажа и дополнительных данных */}
              <span className="text-2xl  whitespace-nowrap text-text-color ">Син Цю</span>
              {/* Имя персонажа с размером текста 2xl и цветом текста cyan */}
              <span className="text-2xl  opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-text-color" >
                Галантный юноша
              </span>
              {/* Текст, который будет видим только при наведении (opacity-0 по умолчанию) */}
            </div>
          </div>

          {/* Рейтинг персонажа (звёзды) */}
          <div className="flex space-x-2">
            {/* Контейнер для рейтинга персонажа */}
            {[...Array(4)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
                className="w-8 h-8 text-orange-500"
              >
                <path d="M381.2 150.3l143.7 21.2c11.9 1.7 21.9 10.1 25.7 21.6 3.8 11.6.7 24.2-7.9 32.8L438.5 328.1l24.6 146.6c2 12-2.9 24.2-12.9 31.3-9.9 7.1-23 8-33.7 2.3l-128.4-68.5-128.3 68.5c-10.8 5.7-23.9 4.8-33.8-2.3-9.9-7.1-14.9-19.3-12.8-31.3l24.6-146.6L33.58 225.9c-8.61-8.6-11.67-21.2-7.89-32.8 3.77-11.5 13.74-19.9 25.73-21.6L195 150.3l64.4-132.33C264.7 6.954 275.9-.04 288.1-.04c12.3 0 23.5 6.994 28.8 18.01l64.3 132.33z"></path>
              </svg>
            ))}
          </div>
          {/* Отображение 4 звёзд для рейтинга персонажа. */}
        </div>
        <div className="relative flex">
  <div
    className="flex flex-col items-start space-y-4 p-6 rounded-[20px] max-w-[350px] group w-[600px]" 
    style={{
      backgroundColor: "rgb(71, 62, 103)",
      border: "2px solid rgb(93, 81, 135)",
      position: "relative",
      top: "4em",
      left: "2em",
      zIndex:"10000",
    }}
  ><ul className="flex flex-col w-full space-y-2 ">
  {[
    { id: "profile", label: "О персонаже" },
    { id: "talents", label: "Таланты" },
    { id: "constellation", label: "Созвездие" },
    { id: "ascension", label: "Возвышение" },
    { id: "guides", label: "Гайды" },
    { id: "other", label: "Другое" },
    { id: "story", label: "История" },
    { id: "quotes", label: "Цитаты" },
  ].map((item) => (
    <li key={item.id} className="w-full">
      <button
        onClick={() => setActiveSection(item.id)}
        className={`block w-full p-2 text-[20px] text-left text-text-color rounded transition duration-300 border-2 ${
          activeSection === item.id 
          ? "bg-bordercolor border-bordercolor" 
          : "bg-transparent border-transparent hover:bg-bordercolor"
      } rounded-[10px]`} 
    >
  {item.label}
</button>

            </li>
          ))}
        </ul>
      </div>
      

      <div className="absolute inset-0 flex justify-center items-center ">
  <div
    className="snap-x flex justify-center items-center h-full w-full p-6 rounded-[20px]"
    style={{
      position: "relative",
      top: "4em",
    }}
  >
    {activeSection === "profile" && (
<div className="snap-center text-center absolute">
  <h2 className="text-2xl text-text-color">О персонаже</h2>
  <img
    src={sinImagee}
    alt="Син Цю"
    className="lol"
    style={{ width: "100%", height: "800px" }}
  />









<div className="flex   ">
    <div
      className="snap-end bg-bgcolor border-bordercolor transform scale-75 "
      style={{ border: "2px solid rgb(93, 81, 135)", position: "absolute", right: "-43em", top: "-8.5em", width: "900px" }}
    >

<div className="flex items-center ">
  <span className="text-text-color text-[30px] rounded-lg p-1" style={{ background: "rgb(93, 81, 135)", margin: "20px" }}>
    lv.20
  </span>
  <span className="text-text-color text-[30px] rounded-lg p-1 flex items-center" style={{ background: "rgb(93, 81, 135)" }}>
  Таблица
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 ml-2">
    <path fill="currentColor" d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 4v4h6V8zm8 0v4h6V8zm-8 6v4h6v-4zm8 0v4h6v-4z"></path>
  </svg>
</span>
<div className="w-full max-w-md mx-auto p-4  ">
   
      
      <input 
  type="range"
  min="0"
  max="6"
  value={value}
  onChange={(e) => setValue(parseInt(e.target.value))}
  className="slider w-full transform scale-110"  
/>
    </div>

   
</div>
<div className=' gap-4 flex flex-col   p-5   '>
<table className="stat-table hover w-full " ><tr>
  <td className="flex flex-row items-center gap-2 text-text-color    " style={{ backgroundColor: 'rgb(80, 72, 111)'}} ><span><svg aria-hidden="true" data-icon="hp_primary" width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="h-4 w-4 fill-current text-white"><path fill="currentColor" d="M3.5 7.654a.978.978 0 01.449-.571c1.51-.85 3.586 2.117 6.544.548 1.927 6.083-8.893 6.247-6.992.023zM7 14c-3.373 0-6.75-2.421-5.134-7.26A18.543 18.543 0 016.57.213.748.748 0 017 0a.751.751 0 01.432.212 18.543 18.543 0 014.705 6.528C13.749 11.579 10.376 14 7 14zm.22-12.19A.639.639 0 007 1.735a.649.649 0 00-.22.075C5.07 3.134 2.7 7.092 2.839 9.21A4.019 4.019 0 007 12.753a4.019 4.019 0 004.162-3.538c.139-2.123-2.231-6.081-3.942-7.405z"></path><path fill="currentColor" d="M7.98 8.03a12.566 12.566 0 011.573-1.509c.569-.413.94 1.11.94 1.11a3.731 3.731 0 01-2.513.399z" color="gray" fill-opacity=".497"></path></svg></span><span> Базовое HP </span>
  </td>
  
  
  <td className="text-right text-text-color" style={{ backgroundColor: 'rgb(80, 72, 111)', paddingRight: '30px' }}>
  2202
</td>

</tr><tr><td className="flex flex-row items-center gap-2 text-text-color" style={{ backgroundColor: 'rgb(67, 59, 98)'}}><span><svg aria-hidden="true" data-icon="Atk" width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="h-4 w-4 fill-current text-white"><path fill="currentColor" d="M7.755 1.651l1.643 1.643 1.928-1.926L11.3.25a.228.228 0 01.228-.22h2.2a.228.228 0 01.228.229c-.121 2.66.556 2.457-1.337 2.4l-1.933 1.925L12.33 6.23a.228.228 0 010 .322c-1.167 1.208-.775.907-1.892-.106l-7.151 7.147a.457.457 0 01-.313.137 21.32 21.32 0 01-2.954.238 21.172 21.172 0 01.238-2.953.451.451 0 01.134-.319l7.146-7.153-.838-.839a.229.229 0 010-.323l.732-.73a.228.228 0 01.322 0z"></path></svg></span><span  > Базовая атака </span></td><td className="text-right text-text-color" style={{ backgroundColor: 'rgb(67, 59, 98)', paddingRight: '30px' }}> 43 </td>

</tr><tr><td className="flex flex-row items-center gap-2 text-text-color" style={{ backgroundColor: 'rgb(80, 72, 111)'}}  ><span><svg aria-hidden="true" data-prefix="faga" data-icon="Def" width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="h-4 w-4 fill-current text-white"><path fill="currentColor" d="M13.442.726a.291.291 0 00-.175-.268C12.859.286 11.503 0 7 0S1.143.286.735.458a.291.291 0 00-.176.269v7.44a.868.868 0 00.125.453c1.579 2.6 5.347 4.855 6.16 5.339a.292.292 0 00.3 0c.79-.482 4.56-2.688 6.169-5.335a.868.868 0 00.127-.455zM7 11.968c.059.013-3.56-2.017-4.824-4.368V1.565s0-.452 4.824-.452z"></path></svg></span><span  > Базовая защита </span></td><td className="text-right text-text-color" style={{ backgroundColor: 'rgb(80, 72, 111)', paddingRight: '30px' }} > 163 </td></tr>
  <tr><td className="flex flex-row items-center gap-2 text-text-color" style={{backgroundColor: 'rgb(67, 59, 98)'}}><span><svg aria-hidden="true" data-icon="Atk" width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="h-4 w-4 fill-current text-white"><path fill="currentColor" d="M11.53.031a.228.228 0 00-.23.219l.026 1.117-1.928 1.928-1.644-1.643a.228.228 0 00-.322 0l-.73.73a.229.229 0 000 .323l.837.838-7.146 7.154a.451.451 0 00-.135.319 21.172 21.172 0 00-.237 2.953 21.32 21.32 0 002.954-.239.457.457 0 00.312-.136L6.383 10.5a2.843 2.843 0 01-.117-.258l-.002-.006-.002-.01a3.019 3.019 0 01-.186-1.07c0-.352.056-.703.182-1.04l.006-.032.002-.004c.12-.316.296-.618.543-.875.247-.257.55-.454.877-.582A2.7 2.7 0 018.7 6.428a2.72 2.72 0 011.385.373l.353-.354c.183.166.319.308.434.432a.735.735 0 01.133-.115 1.28 1.28 0 01.724-.225h.612a.228.228 0 00-.012-.309l-1.643-1.646 1.932-1.926c1.893.057 1.217.26 1.338-2.4a.228.228 0 00-.228-.227h-2.2z"></path><path fill="currentColor" d="M11.731 7.69h1.547q.096.033.072.112-3.764 5.239-4.45 6.093-.04.087-.168.071h-.988q-.176 0-.208-.096 3.884-5.2 4.155-5.717.04-.065.04-.143 0-.089-.104-.247.017-.073.104-.073zM7.225 9.159q0-.374.112-.663.112-.294.303-.494.199-.208.47-.31.27-.112.59-.112.327 0 .599.111.271.104.463.312.198.2.31.494.112.286.112.662 0 .367-.112.663-.112.286-.312.494-.19.199-.461.31-.272.105-.598.105-.32 0-.59-.104-.272-.112-.471-.312-.191-.208-.303-.494-.112-.295-.112-.663zm2.066 0q0-.255-.048-.455-.04-.199-.12-.334-.071-.143-.183-.216-.112-.08-.24-.08-.134 0-.246.079-.104.073-.184.217-.072.135-.12.334-.04.2-.04.455t.04.455q.048.199.12.342.078.143.182.216.114.071.247.071.13 0 .24-.071t.184-.216q.08-.143.12-.342.048-.2.048-.455zm1.73 3.007q0-.376.112-.663.112-.294.303-.494.199-.208.47-.312.272-.11.59-.11.327 0 .599.111.271.104.463.312.198.2.312.494.11.286.11.662 0 .367-.112.662-.112.286-.312.494-.19.2-.461.312-.272.104-.598.104-.319 0-.59-.104-.272-.112-.471-.312-.191-.208-.303-.494-.112-.295-.112-.663zm2.066-.025q0-.255-.048-.455-.04-.199-.12-.334-.071-.143-.183-.216-.104-.079-.24-.079-.127 0-.238.08-.112.072-.192.215-.072.135-.12.336-.04.198-.04.455 0 .254.04.453.048.2.12.343.08.143.192.215.111.073.239.073.135 0 .239-.073.112-.072.183-.215.08-.143.12-.343.048-.199.048-.455z" stroke="none" aria-label="%" font-size="6.135" stroke-width="1.846"></path></svg></span><span > Сила атаки </span></td><td className="text-right  text-text-color" style={{ backgroundColor: 'rgb(67, 59, 98)', paddingRight: '30px' }}> 0% </td></tr>
  </table>

  <div 
  className='inline-flex items-center justify-center bg-newbgcolor w-full p-4 rounded-[15px]' 
  style={{background: 'rgb(57, 49, 82)'}}
>
  <h2 className='text-text-color text-lg font-medium'>Предметы для прокачки не нужны!</h2>
  
</div>



</div>
<ul className="flex flex-col items-start justify-start  p-6  ">

  <li className="inline-flex items-center justify-between bg-newbgcolor w-full p-4 " 
   style={{ backgroundColor: 'rgb(80, 72, 111)' }}>

    <h2 className="text-left text-text-color text-lg font-medium " >Элемент</h2>

  
    <img
      src="https://gi.yatta.moe/assets/UI/UI_Buff_Element_Water.png?vh=2024111801"
      alt="Avatar Element"
      className="w-12 h-12 rounded-full"
    />
  </li>

  <li className="inline-flex items-center justify-between bg-newbgcolor space-x-20 w-full p-4 "
   style={{ backgroundColor: 'rgb(67, 59, 98)' }}>
 
    <h2 className="text-left text-text-color text-lg font-medium " >Оружие</h2>

    <img
      src="https://gi.yatta.moe/assets/UI/UI_GachaTypeIcon_Sword.png?vh=2024111801"
      alt="Avatar Element"
      className="w-12 h-12 rounded-full"
    />
  </li>

  <li className="inline-flex items-center justify-between bg-newbgcolor space-x-20 w-full p-4 "
    style={{ backgroundColor: 'rgb(80, 72, 111)' }}>

    <h2 className="text-left text-text-color text-lg font-medium " >Созвездие</h2>


   <h2 className='text-right text-text-color text-lg font-medium'>Пёстрый Гобелен</h2>
  </li>
  <li className="inline-flex items-center justify-between bg-newbgcolor space-x-20 w-full p-4 "
   style={{ backgroundColor: 'rgb(67, 59, 98)' }}>

    <h2 className="text-left text-text-color text-lg font-medium " >Группа</h2>

  
   <h2 className='text-right text-text-color text-lg font-medium'>Торговая гильдия «Фэйюнь»</h2>
  </li>

  <li className="inline-flex items-center justify-between bg-newbgcolor space-x-20 w-full p-4 "
   style={{ backgroundColor: 'rgb(80, 72, 111)' }}>

    <h2 className="text-left text-text-color text-lg font-medium " >День рождения</h2>

   
   <h2 className='text-right text-text-color text-lg font-medium'>10/9</h2>
  </li>

  <li className="inline-flex items-center justify-between bg-newbgcolor space-x-20 w-full p-4 "
   style={{ backgroundColor: 'rgb(67, 59, 98)' }}>

    <h2 className="text-left text-text-color text-lg font-medium " >Озвучка (EN)</h2>


   <h2 className='text-right text-text-color text-lg font-medium'>Cristina Vee Valenzuela</h2>
  </li>
  <li className="inline-flex items-center justify-between bg-newbgcolor w-full p-4"
    style={{ backgroundColor: 'rgb(80, 72, 111)' }}>
    <h2 className="text-left text-text-color text-lg font-medium">Озвучка (CHS)</h2>
    <h2 className='text-right text-text-color text-lg font-medium'>唐雅菁</h2>
  </li>

  <li className="inline-flex items-center justify-between bg-newbgcolor w-full p-4"
    style={{ backgroundColor: 'rgb(67, 59, 98)' }}>
    <h2 className="text-left text-text-color text-lg font-medium">Озвучка (JP)</h2>
    <h2 className='text-right text-text-color text-lg font-medium'>皆川純子</h2>
  </li>

  <li className="inline-flex items-center justify-between bg-newbgcolor w-full p-4"
    style={{ backgroundColor: 'rgb(80, 72, 111)' }}>
    <h2 className="text-left text-text-color text-lg font-medium">Озвучка (KR)</h2>
    <h2 className='text-right text-text-color text-lg font-medium'>Kwak Kyu-mi</h2>
  </li>

  <li className=" w-full p-4 flex"
 >

  <h2 className='text-text-color'>
    Молодой любитель книг с благородным сердцем и длинным мечом.
  </h2>


  </li>
</ul>

    </div>
  </div>
</div>
/*  <li 
  className="bg-blackedbgcolor" 
  style={{ backgroundColor: 'rgb(57, 49, 82)' }}
>
  Текст
</li> */

    )}
    {activeSection === "talents" && (
      <div>
        <h2 className="text-2xl text-text-color">Таланты</h2>
        <p className="text-text-color mt-4">Описание талантов персонажа.</p>
      </div>
    )}
    {/* Добавьте другие секции аналогично */}
  </div>
</div>

      
    </div>



      </main>


      <footer className="bg-bgcolor border-bordercolor text-text-color p-4 text-center" style={{ border: "2px solid rgb(93, 81, 135)", borderBottom: "none", borderLeft: "none", borderRight: "none" }}>
    {/* Подвал страницы с фоновым цветом и рамкой вокруг (border) */}
    <p>&copy; {new Date().getFullYear()} Все права защищены.</p>
    {/* Текст с копирайтом, который отображает текущий год */}
  </footer>
    </div>
    </div>
  );
}

export default LolPage;








