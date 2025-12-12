/*
 * @Name: theme.js
 * @Description:
 * @Date: 2025-11-27 16:59:47
 * @Author: huyafei
 * @LastEditors: huyafei
 * @LastEditTime: 2025-11-27 16:59:47
 */
import {defaultTheme} from '@vuepress/theme-default'
import {navbarZh,navbarEn} from "./config/index.js"

const localeConf = {
  zh: {
    selectLanguageText: "选择语言",
    selectLanguageName: '简体中文',
    navbar: navbarZh,
    sidebar:{
      '/zh/v1/':[
        "README.md",
        "number.md",
        "string.md",
        "array.md",
        "object.md",
        "date.md",
        "function.md",
        "dom.md",
        "inspect.md",
        "math.md",
        "storage.md",
        "url.md",
        "file.md",
        "img.md",
        "http.md",
        "scroll.md",
        "window.md",
        "other.md",
        "thirdpart.md",
      ],
      '/zh/v2/':[
        "README.md",
        "number.md",
        "string.md",
        "array.md",
        "object.md",
        "date.md",
        "function.md",
        "dom.md",
        "inspect.md",
        "math.md",
        "storage.md",
        "url.md",
        "file.md",
        "img.md",
        "http.md",
        "scroll.md",
        "window.md",
        "other.md",
      ]
    }
  },
  en:{
    selectLanguageText: "Languages",
    selectLanguageName: 'English',
    navbar: navbarEn,
    sidebar:{
      '/en/v1/':[],
      '/en/v2/':[]
    }
  },
};


export default defaultTheme({
  locales: {
    '/':localeConf.zh,
    '/zh/':localeConf.zh,
    '/en/': localeConf.en
  },
  home: '/',
  logo: '/static/images/logo.png',
})
