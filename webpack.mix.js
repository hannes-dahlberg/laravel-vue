let mix = require('laravel-mix');
let webpack = require('webpack');

mix.js('resources/assets/js/app.js', 'public/js')
    .autoload({
        jquery: ['$', 'jQuery', 'window.$', 'window.jQuery']
    })
    .sass('resources/assets/sass/app.scss', 'public/css')
    .webpackConfig({
        plugins: [
            new webpack.ProvidePlugin({
                Popper: ['popper.js', 'default']
            })
        ]
    });

if (mix.config.inProduction) {
   mix.version();
}