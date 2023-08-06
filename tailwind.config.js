/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'someBlue': '#483EFF',
        'secondary':'#AEACFF',
        'third' :"#03295A",
        'lightBg':"#F8F9FE",
        'stepBg':"#BBDDFF"
      },
      padding: {
        '5px': '5px',
      },
      borderRadius: {
        'circle': '50%',
      },
      fontFamily: {
        Ubuntu:['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}

