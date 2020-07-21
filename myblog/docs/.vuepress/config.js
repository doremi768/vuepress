module.exports = {
  title: 'doremi的学习笔记',
  description: "",
  head: [
    ["link",{rel: "icon", href: "/img/logo.png"}]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '目录', link: '/cacatalog/' },
      { text: 'HTML&CSS', link: '/html_css/' },
      { text: 'JavaScript', link: '/javascript/' },
      { text: '项目', link: '/project/' },
      { text: '码云', link: 'https://gitee.com/what_and' },
      { text: 'GitHub', link: 'https://github.com/doremi768' },
    ],
    sidebar: {
      "/html_css/": [""]
    }
  }
}