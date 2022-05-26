const mix = require('laravel-mix');

mix
    .options({
        fileLoaderDirs: {fonts: 'fonts', images: 'images'}
    })
    .setPublicPath("public")
    .setResourceRoot('/vendor/web-logs/')
    // .options({processCssUrls: false})
    .js("resources/js/app.js", "js").vue({'version': 3})
    .postCss("resources/css/app.css", "css", [
        require("tailwindcss"),
    ])
    .version()
    .disableNotifications()
