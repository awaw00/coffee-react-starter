var base = require('./webpack.base')
var webpack = require('webpack')
var config = Object.assign({}, base)

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
}))
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
}))

module.exports = config
