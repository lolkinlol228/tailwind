/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-color': '#ece4de',
        'bgcolor': 'rgb(71, 62, 103)',
        'bordercolor': 'rgb(93, 81, 135)',
        'newbgcolor': 'rgb(67, 59, 98)',
        'blackedbgcolor': 'rgb(57, 49, 82)',
      },
    },
  },
  plugins: [],
};
