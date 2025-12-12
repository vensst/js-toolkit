export const themeData = JSON.parse("{\"locales\":{\"/\":{\"selectLanguageName\":\"简体中文\"}},\"home\":\"/\",\"sidebar\":[\"/README.md\",\"/docs/number.md\",\"/docs/string.md\",\"/docs/array.md\",\"/docs/object.md\",\"/docs/date.md\",\"/docs/function.md\",\"/docs/dom.md\",\"/docs/inspect.md\",\"/docs/math.md\",\"/docs/storage.md\",\"/docs/url.md\",\"/docs/file.md\",\"/docs/img.md\",\"/docs/http.md\",\"/docs/scroll.md\",\"/docs/window.md\",\"/docs/other.md\",\"/docs/thirdpart.md\"],\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
