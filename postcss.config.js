const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [tailwindcss('./src/assets/css/index.css'), require('autoprefixer')],
};
