var path = require('path')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var webpackConfig = require('./build/webpack.dev')

webpackConfig.devtool = 'sourcemap'
webpackConfig.debug = true

var compiler = webpack(webpackConfig)

var server = new WebpackDevServer(compiler, {
  stats: {
    colors: true
  },
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true,
  contentBase: path.join(__dirname, 'src/')
})

var port = webpackConfig.devServer.port
server.listen(port, 'localhost', function () {
  console.log('Server listening at localhost:' + port)
})
