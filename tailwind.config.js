const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
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
