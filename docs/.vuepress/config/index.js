/*
 * @Name: index.js
 * @Description:
 * @Date: 2025-11-28 11:17:00
 * @Author: huyafei
 * @LastEditors: huyafei
 * @LastEditTime: 2025-11-28 11:17:00
 */
const langs = ['zh', 'en'];
const versions = ['v1', 'v2'];



const navbarZh = [
  // NavbarLink
  {
    text: '版本',
    children: [
      {
        text: 'v1.x',
        link: '/zh/v1/',
      },
      {
        text: 'v2.x',
        link: '/zh/v2/',
      },
    ]
  }
]
const navbarEn = [
  {
    text: 'Version',
    children: [
      {
        text: 'v1.x',
        link: '/en/v1/',
      },
      {
        text: 'v2.x',
        link: '/en/v2/',
      },
    ]
  }
]

const navbar = {
  sidebar: [
    "/README.md",
    // "/docs/number.md",
    // "/docs/string.md",
    // "/docs/array.md",
    // "/docs/object.md",
    // "/docs/date.md",
    // "/docs/function.md",
    // "/docs/dom.md",
    // "/docs/inspect.md",
    // "/docs/math.md",
    // "/docs/storage.md",
    // "/docs/url.md",
    // "/docs/file.md",
    // "/docs/img.md",
    // "/docs/http.md",
    // "/docs/scroll.md",
    // "/docs/window.md",
    // "/docs/other.md",
    // "/docs/thirdpart.md",
  ],
}




export  {
  navbarZh,
  navbarEn,
}
