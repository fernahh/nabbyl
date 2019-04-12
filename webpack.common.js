const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const argv = require('yargs').argv
const env = argv.env || 'development'

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'application.[contenthash].js',
    path: path.resolve(__dirname, 'dist/static/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: [
          'file-loader'
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: 'application.[contenthash].css',
    })
  ],
  resolve: {
    alias: {
      '@environment$': `${__dirname}/environments/${env}.js`,
      '@src': `${__dirname}/src/`
    }
  }
}
