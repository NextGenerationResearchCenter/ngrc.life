// tailwind.config.js
module.exports = {
  purge: [],

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: false, // or 'media' or 'class'

  theme: {
    variants: {
      display: ['responsive', 'group-hover', 'group-focus'],
    },
    letterSpacing: {
      ultrawide: '.35em',
    },
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
        ngrcdarkred: '#AF3533',
        ngrclightred: '#C83D3C',
      },
      backgroundImage: (theme) => ({
        researchcenter: "url('/src/assets/img/forth.jpg')",
        hero: "url('/src/assets/img/hero_background3.png')",
      }),
    },
  },
  ts: {
    extend: {},
  },
  plugins: [],
};
