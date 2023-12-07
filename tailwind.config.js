/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    fontFamily: {
      'sans': 'Segoe UI'
    },
    container: {
      center: true,
      padding: '20px',
      screens: {
        sm: '375px',
        md: '575px',
        lg: '767px',
        xl: '1036px',
      },
    },
    colors: {
      'blue': '#00b6ba',
      'black': '#16140f',
      'white': '#FFFFFF',
      'gray': '#a3a3a3',
      'gray-2': '#f9f9f9',
      'red': '#ff506e',
      'yellow': '#FFC554'
    },
    extend: {
      fontSize: {
        '4xl': ['40px', '1']
      },
    },
  },
  plugins: [],
}

