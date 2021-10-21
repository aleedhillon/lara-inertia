const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
*/

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sourceMaps()
    .sass('resources/sass/app.scss', 'public/css');
    // .postCss('resources/css/app.css', 'public/css', [
    //     //
    // ]);

    mix.webpackConfig(webpack => {
        return {
            plugins: [
                new webpack.DefinePlugin({
                    __VUE_OPTIONS_API__: true, // If you are using the options api.
                    __VUE_PROD_DEVTOOLS__: false, // If you don't want people sneaking around your components in production.
                }),
            ],
        }
    })
