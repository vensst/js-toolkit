import comp from "/Users/huyafei/workspace/my/001-github/js-toolkit/docs/.vuepress/.temp/pages/zh/v2/string.html.vue"
const data = JSON.parse("{\"path\":\"/zh/v2/string.html\",\"title\":\"String\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765439908000,\"contributors\":[{\"name\":\"yf_hu\",\"username\":\"\",\"email\":\"879649442@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"06752d32ea7b15524bb6f6d8302c1cf23ac7b79f\",\"time\":1765439908000,\"email\":\"879649442@qq.com\",\"author\":\"yf_hu\",\"message\":\"2.0.0-beta.1\"}]},\"filePathRelative\":\"zh/v2/string.md\"}")
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
