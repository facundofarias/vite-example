/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // DeployHQ brand palette (extracted from deployhq.com)
        // Primary blue and common tints/shades seen in site CSS
        brand: {
          50: '#f8fcff',
          100: '#f0f8ff',
          200: '#dff1ff',
          400: '#299ffe',
          500: '#0187f3',
          600: '#0273ff',
          700: '#047ac4',
        },
      },
    },
  },
  plugins: [],
}
