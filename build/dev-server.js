// dev-server.js的主要功能
// 引入相关插件和配置
// 创建express服务器和webpack编译器
// 配置开发中间件（webpack-dev-middleware）和热重载中间件（webpack-hot-middleware）
// 挂载代理服务和中间件
// 配置静态资源
// 启动服务器监听特定端口（8080）
// 自动打开浏览器并打开特定网址（localhost:8080）



// 检查node和npm的版本
require('./check-versions')()

// 获取config中所有的配置，基本上config文件夹下的配置的都是一些变量
var config = require('../config')

// 如果node的环境变量中没有设置当前的换将（NODE_ENV），那么就使用config中的环境配置当做变量
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
// 调用默认软件，打开浏览器打开dev-server监听的端口例如localhost:8080。
var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')

// 一个express中间件，用于将http请求代理到其他服务器
// 例：localhost:8080/api/xxx  -->  localhost:3000/api/xxx
// 这里使用该插件可以将前端开发中涉及到的请求代理到API服务器上，方便与服务器对接
var proxyMiddleware = require('http-proxy-middleware')

// 引入webpack.dev.config中的配置
var webpackConfig = require('./webpack.dev.conf')

// dev-server监听的端口，默认的是config中配置好的dev.port,其实就是config文件夹下index中的dev配置文件中的端口
var port = process.env.PORT || config.dev.port
// 一个布尔值，也是config中dev下的一个配置，是否自动打开浏览器，默认是true
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
// // 定义 HTTP 代理表，代理到 API 服务器
var proxyTable = config.dev.proxyTable

// 创建1个 express 实例
var app = express()
// 根据webpack配置文件创建Compiler对象
var compiler = webpack(webpackConfig)

// webpack-dev-middleware使用compiler对象来对相应的文件进行编译和绑定
// 编译绑定后将得到的产物存放在内存中而没有写进磁盘
// 将这个中间件交给express使用之后即可访问这些编译后的产品文件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

// webpack-hot-middleware，用于实现热重载功能的中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
// 将 proxyTable 中的代理请求配置挂在到express服务器上
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
    // 格式化options，例如将'www.example.com'变成{ target: 'www.example.com' }
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
// 重定向不存在的URL，常用于SPA
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
// 使用webpack开发中间件
// 即将webpack编译后输出到内存中的文件资源挂到express服务器上
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
// 将热重载中间件挂在到express服务器上
app.use(hotMiddleware)

// serve pure static assets
// 静态资源的路径
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// 将静态资源挂到express服务器上
app.use(staticPath, express.static('./static'))
// 应用的地址信息，例如：http://localhost:8080
var uri = 'http://localhost:' + port

// Promise 一个异步处理函数
var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
// webpack开发中间件合法（valid）之后输出提示语到控制台，表明服务器已启动
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

// 启动express服务器并监听相应的端口（8080）
var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
