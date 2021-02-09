module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  purge: {
    mode: 'layers',
    content: [
      // add your files with TailwindCSS classes
      './*.php',
      './**/*.php',
      './assets/**/*.js',
    ],
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
