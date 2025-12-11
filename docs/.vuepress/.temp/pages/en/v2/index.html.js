import comp from "/Users/huyafei/workspace/my/001-github/js-toolkit/docs/.vuepress/.temp/pages/en/v2/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/v2/\",\"title\":\"Guide\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"en/v2/README.md\"}")
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
