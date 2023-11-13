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
        'third' :"hsl(213, 96%, 18%)",
        'lightBg':"hsl(217, 100%, 97%)",
        'stepBg':"hsl(206, 94%, 87%)",
        'PurplishBlue': "hsl(243, 100%, 62%)",
        'lightGrey': "hsl(229, 24%, 87%)",
        'coolGrey':"hsl(231, 11%, 63%)",
        'marineBlue':'hsl(213, 96%, 18%)',
        'pastelBlue': 'hsl(228, 100%, 84%)',
        'StrawberryRed':'hsl(354, 84%, 57%)',

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

