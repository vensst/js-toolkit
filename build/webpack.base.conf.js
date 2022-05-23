const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index:'./src/utils/index.js'
  },
  output: {
    //资源发布地址，注意：这个配置直接影响页面404,
    publicPath: '/',
    filename: 'index.js',
    path: path.resolve(__dirname, '../lib'),
    // 向外暴露的对象名称，用于通过对象调用的方式调用封装的函数
    library: '_jtk',
    // 可以让打包生成的库可以通过 esmodule/commonjs/requirejs 的语法引入 https://www.webpackjs.com/guides/author-libraries/
    libraryTarget:'umd',
    clean: true,// 每次打包先清除 lib 文件
    //assetModuleFilename: "img/[name].[hash:8].[ext]",
  },
  optimization: {
    usedExports: true,
  },
  //配置模块解析
  resolve: {
    alias: {}
  },
  // 模块
  module: {
    // loader 类型转换，将其它类型转换为有效类型，webpack只能识别JavaScript 和 JSON 文件
    rules: [ // 规则
      {
        test: /\.css$/, // 匹配所有的css文件
        // use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: [ "style-loader", "css-loader"]
      },
      // {
      //   test: /\.(png|jpg|gif|jpeg)$/i, // 匹配图片文件
      //   type: 'asset' // 在导出一个 data URI 和一个单独的文件之间自动选择
      //   // 小于8kb的, 转成data URI(图片转成base64字符串打包进js中)
      //   // 大于8kb的, 直接复制文件到dist目录下(因为转base64会体积增30%)
      // },
      {
        test: /\.js$/, // 匹配js结尾文件
        exclude: /(node_modules)/, // 不转换这个文件夹里的js
        use: {
          loader: 'babel-loader', // 使用加载器-处理
          options: {
            presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
          }
        }
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   // 以此为基准生成打包后html文件
    //   template: './public/index.html'
    // }),

  ]
}
