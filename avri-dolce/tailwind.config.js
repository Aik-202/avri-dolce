/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'h-font': '"PT Serif", serif',
        'b-font': '"Istok Web", sans-serif',
        'p-font': '"Nunito", sans-serif',
      },
      colors: {
        'dark-green': '#006D57',
        'red': '#6D0016'
      }
    },
  },
  plugins: [],
}

