// tailwind.config.js
module.exports = {
  purge: [],

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        montheavy: ['montheavy'],
        montlight: ['montlight'],
        montregular: ['montregular'],
      },
      colors: {
        graydark: '#4D4D4D',
        graymedium: '#666666',
        graylight: '#4D4D4D',
      },
    },
  },
  ts: {
    extend: {},
  },
  plugins: [],
};
