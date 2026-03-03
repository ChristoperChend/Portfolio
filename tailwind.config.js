/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '200px'
      },

      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'sans-serif'],
        jetBrains: ['JetBrains Mono', 'sans-serif'],
        ibm: ['IBM Plex Mono', 'sans-serif'],
        indie: ['Indie Flower', 'sans-serif']
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}