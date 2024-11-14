/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'High': '#e74c3c',
        'Low' : '#f4d03f',
        'Medium' : '#e74c3c'
      }
    },
  },
  plugins: [],
}