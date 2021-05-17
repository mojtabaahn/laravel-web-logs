const WebpackAssetsManifest = require('webpack-assets-manifest')

module.exports = {
    outputDir: './../public/',
    publicPath: process.env.NODE_ENV === 'production' ? '/vendor/web-logs' : '/',
    filenameHashing : true,
    configureWebpack: {
        plugins: [
            new WebpackAssetsManifest({
                output: 'manifest.json'
            })
        ]
    }
}
