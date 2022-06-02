const {resolve} = require('path')
module.exports = {
  entry: {
    index: './src/utils/index.js'
  },
  output: {
    //资源发布地址，注意：这个配置直接影响页面404,
    // publicPath: '/',
    filename: 'index.js',
    path: resolve(__dirname, '../lib'),
    // 向外暴露的对象名称，用于通过对象调用的方式调用封装的函数,说明：https://webpack.docschina.org/configuration/output/#outputlibrary
    library: {
      name: 'jstk',
      type: 'umd',
    },
    clean: true,// 每次打包先清除 lib 文件
    //assetModuleFilename: "img/[name].[hash:8].[ext]",
  },
  // 优化
  // optimization: {
  //   usedExports: true,
  // },
  //配置模块解析
  resolve: {
    // 别名
    alias: {}
  },
  // 模块
  module: {
    // loader 类型转换，将其它类型转换为有效类型，webpack只能识别JavaScript 和 JSON 文件
    rules: [ // 规则
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
  plugins: []
}
