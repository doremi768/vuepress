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
      },
      {
        title: 'css 布局',
        path: '/html_css/css布局',  
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
    },
    {
      title: 'JS手写系列',
      path: '/javascript/JSWrite/1.数组常用api.html#数组常用api',
      children:[
        {
          title: '数组常用api',
          path: '/javascript/JSWrite/1.数组常用api.html#数组常用api'
        },
        {
          title: 'Promises/A+规范',
          path: '/javascript/JSWrite/2.Promises/A+规范.html#Promises/A+规范'
        }
      ]
    }
    ],
    sidebarDepth: 2,
  },
  {
    title: 'git命令大全',
    path: '/git/', 
    collapsable: false, 
    children: [
      {
        title: 'git',
        path: '/git/git命令大全',
      },
      
    ],
    sidebarDepth: 1, 
  },
  // {
  //   title: '项目指南',
  //   path: '/project/',  
  //   collapsable: false, 
  //   children: [
  //     {
  //       title: '信鸽',
  //       path: '/project/xinge/1.项目概述.html#项目概述',
  //       children: [
  //         {
  //           title: '项目概述',
  //           path: '/project/xinge/1.项目概述.html#项目概述'
  //         },
  //         {
  //           title: '前端技术要点',
  //           path: '/project/xinge/2.前端技术要点.html#技术要点'
  //         },
  //         {
  //           title: '后端技术要点',
  //           path: '/project/xinge/3.后端技术要点.html#后端技术要点'
  //         },
  //         {
  //           title: 'Mongoose增查改删',
  //           path: '/project/xinge/mongoose.html#Mongoose增查改删'
  //         }
  //       ]
  //     },
  //     {
  //       title: '仿饿了么',
  //       path: '/project/elm/1.项目概述.html#项目概述',
  //       children: [
  //         {
  //           title: '项目概述',
  //           path: '/project/elm/1.项目概述.html#项目概述'
  //         },
  //         {
  //           title: '定位功能',
  //           path: '/project/elm/2.定位功能.html#定位功能'
  //         }
  //       ]
  //     }
  //   ]
  // }
  

]
