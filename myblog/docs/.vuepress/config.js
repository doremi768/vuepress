module.exports = {
  base: "/blog/",
  title: 'doremi的学习笔记',
  description: "",
  head: [
    ["link",{rel: "icon", href: "/img/logo.png"}],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]

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
      '/html_css/':['','html','css'],
      '/javascript/':['','grammar']
    },
    //搜索
    search: true,
    searchMaxSuggestions: 10,
    //更新时间，以Git commit为准
    lastUpdated: '更新时间',
    //滚动效果
    smoothScroll: true
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale('zh-cn')
          return moment(timestamp).format('LLLL')
        }
      }
    ]
  ]
}