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
          dark: "#421B7F",
          light:"#421B7F" 
        },
        secondary: {
          DEFAULT: '#FC535D',
          light: '#FC535D'
        },
      }
    },
  },
  plugins: [],
}
