import {viteBundler} from '@vuepress/bundler-vite'

import {defineUserConfig} from 'vuepress'
import {searchPlugin} from '@vuepress/plugin-search'
import { markdownIncludePlugin } from '@vuepress/plugin-markdown-include'
import theme from "./theme";

export default defineUserConfig({
  // public: `${sourceDir}/.vuepress/public`,
  // 站点配置（主题不配置默认） 或者使用 Frontmatter 配置
  base: '/',
  lang: 'zh-CN',
  title: '@vensst/js-toolkit 文档',
  description: '@vensst/js-toolkit 是 JavaScript 工具库，整合了前端一些常用的 js 函数',
  head: [['link', {rel: 'icon', href: '/static/images/logo.png'}]],
  // 多语言支持的各个语言 locales
  locales: {
    '/zh/': {
      lang: 'zh-CN',
      title: '@vensst/js-toolkit 文档',
      description: '@vensst/js-toolkit 是 JavaScript 工具库，整合了前端一些常用的 js 函数',
    },
    '/en/': {
      lang: 'en-US',
      title: '@vensst/js-toolkit Documentation',
      description: '@vensst/js-toolkit is a JavaScript toolkit that integrates some commonly used js functions on the frontend',
    },
  },
  // 主题配置
  theme,
  // 打包
  bundler: viteBundler(),

  // 插件
  plugins: [
    searchPlugin({
      // 配置项
    }),
    markdownIncludePlugin()
  ],


})
