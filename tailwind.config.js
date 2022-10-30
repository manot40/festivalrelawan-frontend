const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        typo: ['Inter', ...defaultTheme.fontFamily.sans],
        sans: ['Something Looks Natural', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'gray-50': "#F8F9FA",
        'sky-500': "#09F",
      }
    },
  },
  plugins: [],
};
