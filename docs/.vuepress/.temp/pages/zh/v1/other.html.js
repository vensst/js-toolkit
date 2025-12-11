import comp from "/Users/huyafei/workspace/my/001-github/js-toolkit/docs/.vuepress/.temp/pages/zh/v1/other.html.vue"
const data = JSON.parse("{\"path\":\"/zh/v1/other.html\",\"title\":\"其它\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"zh/v1/other.md\"}")
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
