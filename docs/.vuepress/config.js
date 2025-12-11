import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
import {searchPlugin} from '@vuepress/plugin-search'

export default defineUserConfig({
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      // '/en/': {
      //   selectLanguageName: 'English',
      // },
    },
    home: '/',
    sidebar: [
      "/README.md",
      "/docs/number.md",
      "/docs/string.md",
      "/docs/array.md",
      "/docs/object.md",
      "/docs/date.md",
      "/docs/function.md",
      "/docs/dom.md",
      "/docs/inspect.md",
      "/docs/math.md",
      "/docs/storage.md",
      "/docs/url.md",
      "/docs/file.md",
      "/docs/img.md",
      "/docs/http.md",
      "/docs/scroll.md",
      "/docs/window.md",
      "/docs/other.md",
      "/docs/thirdpart.md",
    ],
  }),
  lang: 'zh-CN',
  title: '@vensst/js-toolkit文档',
  description: '@vensst/js-toolkit 是 JavaScript 工具库，整合了前端一些常用的 js 函数',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
    // '/en/': {
    //   lang: 'en-US',
    // },
  },
})
