module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: ['last']
    },
    maxWidth: {
      'sm': '24em',
      '80': '80%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
