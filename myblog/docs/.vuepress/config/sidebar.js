// module.exports = {
//     '/html_css/':['','html','css'],
//     '/javascript/':[''],
//     '/javascript/grammar/':['','1.data_type','2.variable']
//   }

module.exports = [
  //html&css
  {
    title: 'html&css指南',
    path: '/html_css/', 
    collapsable: false, 
    children: [
      {
        title: 'html 面试题',
        path: '/html_css/html',
      },
      {
        title: 'css 面试题',
        path: '/html_css/css',  
      }
    ],
    sidebarDepth: 1, 
  },
  {
    title: 'JavaScript指南',
    path: '/javascript/',  
    collapsable: false, 
    children:[
    {
      title: 'JavaScript语法',
      path: '/javascript/grammar/1.data_type.html#数据类型',
      children:[
        {
          title: '数据类型',
          path: '/javascript/grammar/1.data_type.html#数据类型'
        },
        {
          title: '相等运算符与比较运算符',
          path: '/javascript/grammar/2.oc.html#数据类型'
        },
        {
          title:'变量',
          path: '/javascript/grammar/3.variable.html#变量'
        }
      ]
    }
    ],
    sidebarDepth: 1,
  }
  

]
// {title: '数据类型',path: '/javascript/1.data_type'},
//       {title: '变量',path: '/javascript/2.variable'},
// module.exports = {
//   '/html_css/':['','html','css'],
//   '/javascript/':[{
//     title: '导航',
//     collapsable: false,
//     children: [
//       {title: '',path: '/javascript/grammar/'},
//       {title: '',path: '/javascript/grammar/1.data_type'},
//       {title: '',path: '/javascript/grammar/2.variable'}
      
//     ]
//   }]
// }