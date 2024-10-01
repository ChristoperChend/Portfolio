/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px'
      },

      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'sans-serif'],
        jetBrains: ['JetBrains Mono', 'sans-serif'],
        ibm: ['IBM Plex Mono', 'sans-serif'],
        indie: ['Indie Flower', 'sans-serif']
      },
    },
  },
  plugins: [],
}