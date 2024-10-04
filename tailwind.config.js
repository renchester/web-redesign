/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        onest: ['Onest', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
    keyframes: {
      bob: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
      },
    },
    animation: {
      bob: 'bob 1.5s ease-in-out infinite',
    },
  },
  plugins: [],
};
