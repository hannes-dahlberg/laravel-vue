let mix = require('laravel-mix')
let webpack = require('webpack')
let Dotenv = require('dotenv-webpack')

mix.ts('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .webpackConfig({
        plugins: [
            new Dotenv({
                path: './.env'
            })
        ]
    })

if (mix.inProduction) {
    mix.options({
        uglify: false
    }).version()
} else {
    mix.sourceMaps()
}