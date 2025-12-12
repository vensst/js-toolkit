export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"@vensst/js-toolkit 文档\",\"description\":\"@vensst/js-toolkit 是 JavaScript 工具库，整合了前端一些常用的 js 函数\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/static/images/logo.png\"}]],\"locales\":{\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"@vensst/js-toolkit 文档\",\"description\":\"@vensst/js-toolkit 是 JavaScript 工具库，整合了前端一些常用的 js 函数\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"@vensst/js-toolkit Documentation\",\"description\":\"@vensst/js-toolkit is a JavaScript toolkit that integrates some commonly used js functions on the frontend\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
