/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#421B7F',
          dark: "#160529",
          medium:"#421B7F" 
        },
        secondary: {
          DEFAULT: '#FC535D',
          light: '#f77a82'
        },
        third: {
          DEFAULT: '#FFAC3B'
        }
      }
    },
  },
  plugins: [],
}
