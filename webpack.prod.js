const merge = require('webpack-merge')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '/static/'
  },
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    new MinifyPlugin({ mangle: false }, {
      exclude: /node_modules/
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: '../index.html'
    })
  ],
  resolve: {
    alias: {
      '@environment$': `${__dirname}/environments/production.js`,
    }
  }
})
