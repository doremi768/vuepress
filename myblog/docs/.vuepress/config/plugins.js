module.exports = [
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
    ],
    // [
    //   "vuepress-plugin-auto-sidebar", {
    //     titleMode: "titlecase",
    //     titleMap: {
    //       "cacatalog": "目录",
    //       "html_css":"html&css",
    //       "javascript":"JavaScript",
    //       "grammar":"JavaScript"
    //     }
    //   }
    // ]
]