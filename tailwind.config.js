// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'Bold'],  // Fixed the typo here by closing the quote
      },
      colors: {
        'text-color': '#ece4de',
        'bgcolor': 'rgb(71, 62, 103)',
        'bordercolor': 'rgb(93, 81, 135)',
      },
    },
  },
  plugins: [],
};
