const head = require('./config/head');
const plugins = require('./config/plugins');
const nav = require('./config/nav');
const sidebar = require('./config/sidebar');
module.exports = {
  base: "/blog/",
  title: 'Learning Notes',
  description: "",
  head,
  themeConfig: {
    nav,
    sidebar,
    //搜索
    search: true,
    searchMaxSuggestions: 10,
    //更新时间，以Git commit为准
    lastUpdated: '更新时间',
    //滚动效果
    smoothScroll: true
  },
  plugins
}