// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-color': 'rgb(229, 231, 235)',
        'bgcolor': 'rgb(71, 62, 103);',
        'bordercolor': 'rgb(93, 81, 135)'
      },
    },
  },
  plugins: [],
};
