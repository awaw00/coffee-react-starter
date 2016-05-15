var path = require('path')
var base = require('./webpack.base')
var webpack = require('webpack')
var config = Object.assign({}, base)

config.devServer = {port: 8080}
config.entry.app = [
  'webpack-dev-server/client?http://localhost:' + config.devServer.port,
  'webpack/hot/only-dev-server',
  config.entry.app
]

config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development')
  }
}))
// config.module.loaders = config.module.loaders.map(function (item) {
//   if (item.test.test('.js') || item.test.test('.cjsx')) {
//     item.loader = 'react-hot!' + item.loader
//     console.log(item.loader)
//   }
//   return item
// })
config.module = {
  loaders: [{
    test: /\.jsx?$/,
    loader: 'react-hot!babel',
    include: path.join(__dirname, 'src')
  }, {
    test: /\.cjsx$/,
    loader: 'react-hot!coffee!cjsx'
  }, {
    test: /\.coffee$/,
    loader: 'coffee'
  }]
}
module.exports = config
