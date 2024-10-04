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
        '0%, 100%': { transform: 'translateY(0)', easing: 'ease-out' },
        '50%': { transform: 'translateY(-30px)', easing: 'ease-in' },
      },
    },
    animation: {
      bob: 'bob 1s infinite cubic-bezier(0.45, 0, 0.35, 1)',
    },
  },
  plugins: [],
};
