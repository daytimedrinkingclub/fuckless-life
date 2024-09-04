/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#D2AC21",
        "header-bg": "#4697B1",
        "mybrown": "#633B48",
      },
      fontFamily: {
        sans: ['"Lexend Exa"', "sans-serif"],
        "lexend-exa": ['"Lexend Exa"', "sans-serif"],
        "lexend-deca": ['"Lexend Deca"', "sans-serif"],
        goblin: ['"Goblin One"', "cursive"],
      },
    },
  },
  plugins: [],
};
