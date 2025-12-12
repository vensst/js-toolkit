import comp from "/Users/huyafei/workspace/my/001-github/js-toolkit/docs/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/static/images/hero.png\",\"actions\":[{\"text\":\"Get starte\",\"link\":\"/en/v2/\",\"type\":\"primary\"},{\"text\":\"Introduction\",\"link\":\"/en/v2/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Simplicity is paramount\",\"details\":\"A Markdown-centric project structure that helps you focus on writing with minimal configuration.\"},{\"title\":\"Vue drive\",\"details\":\"Enjoy the Vue development experience with Vue components in Markdown and Vue to develop custom themes.\"},{\"title\":\"Performance\",\"details\":\"VuePress generates static HTML for each page pre-render, and each page runs as a SPA when it is loaded.\"}],\"footer\":\"MIT Licensed | Copyright © 2018-current <a href='https://github.com/huyafei' target='_blank'>huyafei</a> | <a href='https://github.com/vensst' target='_blank'>vensst</a>\",\"footerHtml\":true},\"git\":{\"updatedTime\":1765439908000,\"contributors\":[{\"name\":\"yf_hu\",\"username\":\"\",\"email\":\"879649442@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"06752d32ea7b15524bb6f6d8302c1cf23ac7b79f\",\"time\":1765439908000,\"email\":\"879649442@qq.com\",\"author\":\"yf_hu\",\"message\":\"2.0.0-beta.1\"}]},\"filePathRelative\":\"en/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
