
# html 面试题

## 1.语义化的理解
① html语义化就是让页面的内容结构化，便于对浏览器，搜索引擎解析  
② 在没有样式css情况下也以一种文档格式显示，并且是容易阅读的  
③ 利于seo  
④ 减少网页间的差异性，方便后期开发和维护  

## 2.Doctype
### Doctype 的作用
`Doctype` 是 `Document type` 的简写，它是一种<font color="#3EAF7C">**标准通用标记语言的文档类型声明**</font>，目的是告诉解析器，使用什么样的文档类型定义来解析文档  

写了 <font color="#FA8072"> <!Doctype html> </font> 之后，相当于开启了标准模式，浏览器就会按照w3c标准解析渲染页面  

如果不写的话，浏览器会按照自己的方式解析渲染页面，那么，在不同的浏览器就会显示不同的样式


### html5 中为什么只需要写 <!DOCTYPE HTML>
因为html5不基于 `sgml`（标准通用标记语言），因此不需要对 `dtd` 进行引用，但是需要doctype来规范浏览器行为

## 3.五大浏览器，以及内核
* Chrome:blink   
* IE: trident  
* Firefox: gecko  
* Safari: webkit  
* Opera: 以前是 <font color="#FA8072">presto</font> 内核，现在已改用Chrome的 <font color="#FA8072">blink</font> 内核

## 4.img 标签的 title 和 alt 之区别
* Alt是 `<img>`  的 <font color="#3EAF7C">**特有属性**</font> ，是图片内容的等价描述，用于图片无法加载时显示。  

* Title可提高图片可访问性，除了纯装饰图片外都必须设置有意义的值，搜索引擎会重点分析

## 5.src 和 href 的区别
### ① 请求资源类型不同  
* href指向网络资源所在位置，建立和当前元素或当前文档之间的联系 
      
* 在请求src资源时会将其指向的资源下载并应用到文档中  
### ② 作用结构不同  
* href用于在当前文档和引用资源之间确定联系

* src是 <font color="#3EAF7C">**替换元素**</font> ，用于替换当前内容。

:::tip
替换元素就是：通过修改某个属性值呈现的内容就可以被替换的元素
:::
若在文档中添加 `<link href="style.css" rel="sytlesheet">` ，浏览器会识别该文档为css文件，就会<font color="#3EAF7C">**并行**</font>下载资源并且不会停止对当前文档的处理

而当浏览器解析到 `<script src="script.js"></script>` 会<font color="#3EAF7C">**暂停**</font>其他资源的下载和处理

## 6.link 和 @import 的区别
两者都是外部引用css的方式，区别是：

①Link是**xhtml**标签，除了能够加载css，还可以定义其他事务；而@import只可以加载css

②link引用css时，在页面加载时 <font color="#3EAF7C">**同时加载**</font> ；@import 需要页面完全载入以后再加载。

③link <font color="#3EAF7C">**无兼容问题**</font> ；@import是再css2.1提出的，低版本浏览器不支持

④link支持使用javascript控制dom改变样式；而@import不支持

## 7.伪类与伪元素
伪类的受体是文档树中<font color="#3EAF7C">**已有的元素**</font>，而伪元素则创建了一个DOM外的元素

伪类用于添加元素的特殊效果，而伪元素则是添加元素内容 

伪类使用的是一个冒号，伪元素使用两个冒号

## 8.Html5有哪些新特性
### ①语义标签  
```html
    <header>...</header>      头部    
    <nav>...</nav>            导航    
    <section>...</section>    定义文档中的节。比如章节、页眉、页脚或文档中的其它部分     
    <aside>...</aside>        侧边栏    
    <footer>...</footer>	  页脚    
    <article>...</article>    代表一个独立的、完整的相关内容块，可独立于页面其它内容使用。例如一篇完整的论坛帖子，一篇博客文章，一个用户评论等 
```

### ②增强型表单控件

### ③用于控制音视频播放的audio和video元素

### ④canvas 绘画和 svg绘画

* Canvas是通过javascript来绘制2D图形  
* svg是一种使用xml描述2d图形的语言

### ⑤drag和drop拖放api

### ⑥web worker （相当于给js制造了一个多线程环境）

### ⑦web storage <font color="#3EAF7C">**本地存储**</font>
* <font color="#FA8072">localStorage</font> 长期存储数据，浏览器关闭后数据不丢失
* <font color="#FA8072">sessionStorage</font>  的数据在浏览器关闭后自动删除

### ⑧webSocket （服务器推送技术）

### ⑨地理定位
Geolocation（地理定位）用于定位用户的位置  