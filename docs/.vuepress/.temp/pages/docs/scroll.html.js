import comp from "/Users/huyafei/workspace/my/001-github/js-toolkit/docs/.vuepress/.temp/pages/docs/scroll.html.vue"
const data = JSON.parse("{\"path\":\"/docs/scroll.html\",\"title\":\"滚动\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764226300000,\"contributors\":[{\"name\":\"yfhu\",\"username\":\"yfhu\",\"email\":\"879649442@qq.com\",\"commits\":1,\"url\":\"https://github.com/yfhu\"},{\"name\":\"yf_hu\",\"username\":\"\",\"email\":\"879649442@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"9f3449abfa7b65c88fc32856799bd924e94242fc\",\"time\":1764226300000,\"email\":\"879649442@qq.com\",\"author\":\"yf_hu\",\"message\":\"feat(arr): 重构数组工具函数并增强功能\"},{\"hash\":\"7c88d9e8e01f050ed67ba1edf0abb1ce93fe3e57\",\"time\":1690961277000,\"email\":\"879649442@qq.com\",\"author\":\"yfhu\",\"message\":\"refactor： * 修改了一些函数名称 * 对一些函数重新分类 * 增加了一些新的函数和第三方库（uuid、crypto-js） * 修改了一些问题\",\"tag\":\"v1.1.0-beta.11\"}]},\"filePathRelative\":\"docs/scroll.md\"}")
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
