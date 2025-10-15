/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pinkBase: '#ffc0cb',
      },
      fontFamily: {
        fancy: ['"Poppins"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
