/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.js", "./src/App.js", "./src/Components/Navbar.js", "./src/Components/Card.js"],
  theme: {
    screens:{
     'xs': '320px',
     'sm': '375px',
     'md': '576px',
     'lg': '767px',
     'xl': '992px',
     '2xl': '1200px',
     '3xl': '1440px',
     '4xl': '1600px'
    },
    extend: {},
  },
  plugins: [],
}

