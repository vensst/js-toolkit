import comp from "/Users/huyafei/workspace/my/001-github/js-toolkit/docs/.vuepress/.temp/pages/docs/img.html.vue"
const data = JSON.parse("{\"path\":\"/docs/img.html\",\"title\":\"图片\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764226300000,\"contributors\":[{\"name\":\"yf_hu\",\"username\":\"\",\"email\":\"879649442@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"9f3449abfa7b65c88fc32856799bd924e94242fc\",\"time\":1764226300000,\"email\":\"879649442@qq.com\",\"author\":\"yf_hu\",\"message\":\"feat(arr): 重构数组工具函数并增强功能\"}]},\"filePathRelative\":\"docs/img.md\"}")
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
