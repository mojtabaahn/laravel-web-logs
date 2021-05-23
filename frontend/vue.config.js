const WebpackAssetsManifest = require('webpack-assets-manifest')

module.exports = {
    outputDir: './../public/',
    publicPath: process.env.NODE_ENV === 'production' ? '/web-logs/assets/' : '/',
    filenameHashing: false,
}
