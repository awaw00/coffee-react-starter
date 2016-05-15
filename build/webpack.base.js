var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.cjsx')
  },
  resolve: {
    extensions: ['', '.js', '.coffee', '.cjsx'],
    root: path.join(__dirname, '../src')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel',
      include: path.join(__dirname, '../src')
    }, {
      test: /.cjsx$/,
      loader: 'coffee!cjsx'
    }, {
      test: /.coffee$/,
      loader: 'coffee'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'coffee react starter',
      inject: 'body',
      filename: 'index.html',
      favicon: path.resolve(__dirname, '../src/static/favicon.ico'),
      template: path.resolve(__dirname, '../src/index.html'),
      minify: {
        collapseWhitespace: true
      }
    })
  ]
}
