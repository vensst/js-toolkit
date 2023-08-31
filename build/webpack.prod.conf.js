const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
//js压缩 webpack5自带
const TerserWebpackPlugin = require('terser-webpack-plugin');

const webpackBase = require('./webpack.base.conf.js');

module.exports = function (env, argv) {
  return merge(webpackBase, {
    mode: "production",
    // devtool: 'source-map',
    // devtool: 'none',
    // 模块
    module: {
      // loader 类型转换，将其它类型转换为有效类型，webpack只能识别JavaScript 和 JSON 文件
      rules: [],
    },
    // 插件，loader处理不了的用插件，例如打包优化，资源管理，注入环境变量
    plugins: [
      // 每次构建前清理dist文件夹
      new CleanWebpackPlugin(),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserWebpackPlugin({
          extractComments: false
        }),
      ],
    },
  });
}

