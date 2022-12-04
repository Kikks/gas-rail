/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    fontFamily: {
      inter: ['"Inter", sans-serif'],
    },
    fontSize: {
      xxs: '0.65rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '4.5rem',
    },
    extend: {
      colors: {
        'rails-bg-light': '#FBECE5',
        'rails-dark-gray': '#1C1C1C',
        primary: {
          main: '#F86822',
          light: '#FFB693',
          dark: '#DC5210',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
