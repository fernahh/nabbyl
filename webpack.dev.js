const merge = require('webpack-merge')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 3000
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  resolve: {
    alias: {
      '@environment$': `${__dirname}/environments/development.js`,
    }
  }
})
