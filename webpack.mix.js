let mix = require('laravel-mix');

mix
  .setPublicPath('dist')
  .js('src/js/app.js', '')
  .sass('src/sass/tailwind.scss', '')
  .sass('src/sass/app.scss', '')
  .options({
    processCssUrls: false,
    postCss: [require('tailwindcss')],
  })
  .browserSync({
    proxy: process.env.MIX_APP_HOST,
    host: process.env.MIX_APP_HOST,
    open: 'external',
    files: ['./**/*.php', './**/*.css', './**/*.js'],
  });
