import comp from "/Users/huyafei/workspace/my/001-github/js-toolkit/docs/.vuepress/.temp/pages/zh/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/static/images/hero.png\",\"actions\":[{\"text\":\"快速上手\",\"link\":\"/zh/v2/\",\"type\":\"primary\"},{\"text\":\"项目简介\",\"link\":\"/zh/v2/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简洁至上\",\"details\":\"以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\"},{\"title\":\"Vue 驱动\",\"details\":\"享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。\"},{\"title\":\"高性能\",\"details\":\"VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。\"}],\"footer\":\"MIT Licensed | Copyright © 2018-至今 <a href='https://github.com/huyafei' target='_blank'>huyafei</a> | <a href='https://github.com/vensst' target='_blank'>vensst</a>\",\"footerHtml\":true},\"git\":{},\"filePathRelative\":\"zh/README.md\"}")
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
