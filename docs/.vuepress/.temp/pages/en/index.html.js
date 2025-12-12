import comp from "/Users/huyafei/workspace/my/001-github/js-toolkit/docs/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1765503371000,\"contributors\":[{\"name\":\"yf_hu\",\"username\":\"\",\"email\":\"879649442@qq.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"d6eafde7b963b0e234cceacc561a162cfa2e9596\",\"time\":1765503371000,\"email\":\"879649442@qq.com\",\"author\":\"yf_hu\",\"message\":\"2.0.0-beta.1\"},{\"hash\":\"06752d32ea7b15524bb6f6d8302c1cf23ac7b79f\",\"time\":1765439908000,\"email\":\"879649442@qq.com\",\"author\":\"yf_hu\",\"message\":\"2.0.0-beta.1\"}]},\"filePathRelative\":\"en/README.md\"}")
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
