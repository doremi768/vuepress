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
      title: 'JavaScript基础',
      path: '/javascript/grammar/1.data_type.html#数据类型',
      children:[
        {
          title: '数据类型',
          path: '/javascript/grammar/1.data_type.html#数据类型'
        },
        {
          title: '相等运算符与比较运算符',
          path: '/javascript/grammar/2.oc.html#相等运算符与比较运算符'
        },
        {
          title:'变量',
          path: '/javascript/grammar/3.variable.html#变量'
        },
        {
          title:'闭包',
          path: '/javascript/grammar/4.闭包.html#闭包'
        },
        {
          title: 'this',
          path: '/javascript/grammar/5.this.html#this'
        },
        {
          title: '循环和遍历',
          path: '/javascript/grammar/6.循环和遍历.html#循环和遍历'
        },
        {
          title: '对象',
          path: '/javascript/grammar/7.对象.html#对象'
        },
        {
          title: '对象&类&函数',
          path: '/javascript/grammar/8.对象&类&函数.html#对象&类&函数'
        }
      ]
    },
    {
      title: 'ES6',
      path: '/javascript/ES6/1.变量的解构赋值.html#变量的解构赋值',
      children:[
        {
          title: '变量的解构赋值',
          path: '/javascript/ES6/1.变量的解构赋值.html#变量的解构赋值'
        },
        {
          title: '函数的扩展',
          path: '/javascript/ES6/2.函数的扩展.html#函数的扩展'
        },
        {
          title: 'Set和Map数据结构',
          path: '/javascript/ES6/3.Set和Map数据结构.html#Set和Map数据结构'
        },
        {
          title: 'Proxy&Reflect',
          path: '/javascript/ES6/4.Proxy&Reflect.html#Proxy&Reflect'
        },
        {
          title: 'Generator&Iterator',
          path: '/javascript/ES6/5.Generator.html#Grnerator&Iterator'
        },
        {
          title: 'Class',
          path: '/javascript/ES6/6.Class.html#Class'
        },
        {
          title: 'Module',
          path: '/javascript/ES6/7.Module.html#Module'
        }
      ]
    }
    ],
    sidebarDepth: 2,
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