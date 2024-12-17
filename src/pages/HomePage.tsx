import React from 'react';  // Импортирует библиотеку React для работы с компонентами.
import { Link } from 'react-router-dom';  // Импортирует компонент Link из библиотеки react-router-dom, чтобы использовать для создания ссылок внутри приложения.
import sinImage from './images/sin.png';  // Импортирует изображение персонажа (sin.png), которое будет использовано на странице.

function LolPage() {  // Определяет функциональный компонент с именем LolPage.
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
        <h1 className="text-2xl md:text-4xl font-poppins font-bold text-center text-text-color">
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

      <main>
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
              <span className="text-2xl font-poppins  font-bold  whitespace-nowrap text-text-color ">Син Цю</span>
              {/* Имя персонажа с размером текста 2xl и цветом текста cyan */}
              <span className="text-2xl font-poppins  font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-text-color" >
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
        <div
  className="flex flex-col items-start justify-end space-y-4 p-6 rounded-[20px] max-w-[250px] group"
  style={{
    backgroundColor: "rgb(71, 62, 103)",
    border: "2px solid rgb(93, 81, 135)",
    position: "relative",
    top: "4em",
    left: "2em", // Add this line to move the element to the right
 
    maxWidth: "350px",

  }}
>
  <div className="inline-flex items-center space-x-3">

<a id="profile" className="font-poppins  font-bold text-[20px]  text-text-color" >О персонаже</a>

  </div>
</div>





        {/* Изображение персонажа */}
        <img src={sinImage} alt="Описание изображения" className="mt-4" />
        {/* Изображение персонажа (sin.png), добавленное с отступом сверху (mt-4). */}
      </main>

      <footer className="bg-bgcolor border-bordercolor text-text-color p-4 text-center font-poppins  font-bold text-text-color" style={{ border: "2px solid rgb(93, 81, 135)", borderBottom: "none", borderLeft: "none", borderRight: "none" }}>
        {/* Подвал страницы с фоновым цветом и рамкой вокруг (border) */}
        <p>&copy; {new Date().getFullYear()} Все права защищены.</p>
        {/* Текст с копирайтом, который отображает текущий год */}
      </footer>
    </div>
  );
}

export default LolPage;
