/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '0.125': '0.125rem',
      },
      colors: {
        'color-gold': '#D2AB51',
      }
    },
  },
  plugins: [],
}

