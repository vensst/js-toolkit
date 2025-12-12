export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"@vensst/js-toolkit文档\",\"description\":\"@vensst/js-toolkit 是 JavaScript 工具库，整合了前端一些常用的 js 函数\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\"}}}")

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
