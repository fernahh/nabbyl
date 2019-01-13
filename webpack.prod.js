const merge = require('webpack-merge')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    new MinifyPlugin({ mangle: false }, {
      exclude: /node_modules/
    })
  ]
})
