module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      screens: {
        xl: '1300px',
      },
      colors: {
        'c-light-blue': '#081221',
        'c-dark-blue': '#03080f',
        'c-accent-blue': '#5692e8',
        'c-gray': '#c1d1e8',
        'c-stone': '#182c47',
        'c-firefly': '#0e1a2b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
