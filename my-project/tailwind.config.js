/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",        // all HTML files in root
    "./assets/**/*.js" // only YOUR js files, not node_modules
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin')
  ],
}