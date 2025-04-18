/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brass: {
          DEFAULT: '#b5a642',
          dark: '#8c7e32',
        },
        copper: {
          DEFAULT: '#b87333',
          dark: '#8c5626',
        },
        steel: {
          DEFAULT: '#71797e',
          700: '#5d6569',
          800: '#4a4f52',
          900: '#2e3133',
        },
      },
      fontFamily: {
        terminal: ['Special Elite', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};