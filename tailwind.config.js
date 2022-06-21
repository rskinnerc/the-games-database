/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        marino: {
          50: '#C4D0E9',
          100: '#B5C5E3',
          200: '#97AED8',
          300: '#7A96CD',
          400: '#5C7FC2',
          500: '#4369B2',
          600: '#345189',
          700: '#243960',
          800: '#152138',
          900: '#06090F',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        gill: ['gill-sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
