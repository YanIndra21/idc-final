/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary : '#ff0000',
        dark : '#0f172a',
      }
    },
  },
  plugins: [],
}

