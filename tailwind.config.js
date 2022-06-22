/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        marino: {
          50: '#FFFFFF',
          100: '#F0F3F9',
          200: '#C4D0E9',
          300: '#97AED8',
          400: '#6B8BC7',
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
