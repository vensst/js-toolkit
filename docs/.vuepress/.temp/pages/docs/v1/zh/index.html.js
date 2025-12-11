import comp from "/Users/huyafei/workspace/my/001-github/js-toolkit/docs/.vuepress/.temp/pages/docs/v1/zh/index.html.vue"
const data = JSON.parse("{\"path\":\"/docs/v1/zh/\",\"title\":\"指南\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"docs/v1/zh/README.md\"}")
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
