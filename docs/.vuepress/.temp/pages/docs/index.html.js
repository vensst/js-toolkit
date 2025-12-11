import comp from "/Users/huyafei/workspace/my/001-github/js-toolkit/docs/.vuepress/.temp/pages/docs/index.html.vue"
const data = JSON.parse("{\"path\":\"/docs/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/static/images/hero.png\",\"actionText\":\"快速上手 →\",\"actionLink\":\"/guide/\",\"features\":[{\"title\":\"@vensst/js-toolkit\",\"details\":\"整合前端一些常用方法。\"},{\"title\":\"@vensst/vue-widget\",\"details\":\"基于vue整合了一些常用的功能组件\"},{\"title\":\"ven-ui\",\"details\":\"基于element-ui@2.15.3改写的ui组件库\"},{\"title\":\"@vensst/cli\",\"details\":\"快速搭建项目的模板脚手架\"}]},\"git\":{},\"filePathRelative\":\"docs/README.md\"}")
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
