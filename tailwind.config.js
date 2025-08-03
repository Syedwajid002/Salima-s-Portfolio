/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0f5',
          100: '#cce1eb',
          200: '#99c3d7',
          300: '#66a5c3',
          400: '#3387af',
          500: '#0a4d68',
          600: '#094659',
          700: '#073947',
          800: '#052d35',
          900: '#031823',
        },
        secondary: {
          50: '#e6f9f9',
          100: '#ccf3f3',
          200: '#99e7e7',
          300: '#66dbdb',
          400: '#33cfcf',
          500: '#06bebe',
          600: '#05aaaa',
          700: '#048686',
          800: '#036363',
          900: '#022121',
        },
        accent: {
          50: '#fef2e6',
          100: '#fde5cc',
          200: '#fbcb99',
          300: '#fab166',
          400: '#f89733',
          500: '#f48c06',
          600: '#db7e05',
          700: '#a96204',
          800: '#784603',
          900: '#462a02',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        heading: ['"Source Sans 3"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};