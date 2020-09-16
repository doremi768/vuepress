
# CSS面试题

## 1.对于盒模型的理解？

当对一个文档进行布局 <font color="#FA8072">(lay out)</font> 的时候,浏览器的渲染引擎会根据标准之一的css基础框盒模型  <font color="#FA8072">(css basic box model)</font> ，将所有元素表示为一个个矩形的盒子。

有两种：**IE** 盒模型、**W3C** 盒子模型

每个盒子由四部分组成，分别是内容区域(content area)、内边距区域(padding area)、边框区域(border area)、外边距区域(margin area)。

区别：ie的content部分把border和padding计算了进去


## 2.块级元素和行内元素的区别？
① 我觉得所有的元素都是一个盒子。盒子又分为块级元素盒子和行内元素盒子

块级元素的盒子是由外在的”**块级盒子**”和内在的”**块级容器盒子**”组成  
行内元素的盒子是由外在的”**内联盒子**”和内在的”**内联容器盒子**”组成

② 外在的盒子控制是否换行显示，内在的盒子负责控制宽高、内容呈现等样式。

③ 在hlml5文档声明中，所有的<font color="#3EAF7C">**行框盒子**</font>前面有一个假想盒，也可以叫做”<font color="#FA8072">空白节点</font>”，它是一个同时拥有该元素的字体和行高属性，并且宽度为0的内联盒子。

## 3..CSS权重是什么？
1.一条样式规则的整体权重值包含四个独立的部分：[A,B,C,D]

①A表示<font color="#3EAF7C">**内联样式**</font>，只有1或者0两个值  
②B 表示规则中ID的数量  
③C 表示规则中除了ID,标签和伪元素以外的其它选择器数量  
④D表示规则中标签和伪元素的数量  

2.根据规范，计算权重值时，A,B,C,D四组值，从左到右，分组比较，如果A相同，就比较B，以此类推，都相同则<font color="#3EAF7C">**后定义的优先**</font>。

3.假如样式一的C大于样式二的C，则不管D谁大，样式一的权重都大于样式二

## 4. 优先级算法如何计算？
优先级就近原则，同权重情况下样式定义最近者为准

载入样式以最后载入的定位为准

优先级为： 
```css
  优先级关系： !important > 内联样式 > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器
```

## 5. 对于BFC规范的理解?
BFC全称 <font color="#FA8072">block formatting context</font>， 中文为 <font color="#3EAF7C">**块级格式化上下文**</font>。

从表现形式来看，如果一个元素设置了bfc，内部的子元素不管怎么设置，都不会影响外部的元素。  

BFC的应用场景：1.解决margin重叠的现象 2.清除浮动 3.BFC的最重要的用途实际上是实现更好的自适应布局

触发BFC的条件
```	css
<html>根元素
float的值不为none
overflow的值为auto,scroll或hidden
display的值为table-ceil、table-caption和inline-block中的任何一个
position的值不为relative和static
```
:::tip overflow
<font color="#FA8072">overflow: scroll</font>  
将隐藏所有溢出的内容并使滚动条出现在相关元素上。如果内容没有溢出，滚动条仍然可见，但被禁用。

<font color="#FA8072">overflow: auto</font>     
非常相似，但滚动条仅在内容溢出时出现。
:::
## 6.margin合并
### 什么是margin合并？

<font color="#3EAF7C">**块级元素**</font> 的上外边距与下外边距有时会合并为单个外边距，这种现象就是margin合并
::: tip
块级元素，<font color="#3EAF7C">**不包括**</font> 浮动和绝对定位,尽管它们可以让元素块状化   
只发生在和当前文档流方向的相垂直的方向上
::::

### margin合并的三种场景以及不让margin合并的方法

**①父级和第一个或最后一个子元素margin合并**   

不让margin合并的方法(任意一个)：   
```css
父元素设置为BFC元素   
border-top/bottom的值   
padding-top/bottom 的值   
和第一个子元素之间添加内联元素进行分隔    
```
**②相邻兄弟元素margin合并** (同下)   

**③空块级元素的margin合并**
:::tip
特性是即使自身没有设置Margin也是会发生
:::
不让margin合并的方法
```css
设置垂直方向的border
设置垂直方向的padding
里面添加内联元素  
设置height或者min-height
```
margin合并的计算规则： <font color="#FA8072">正正取大，正负相加，负负最负</font>

##  7.`Display:none` 和 `visibility: hidden` 的区别
首先它们的作用都是让 <font color="#3EAF7C">**元素不可见**</font>  
区别是：  
①`display:none;` 会让元素完全从渲染树中消失，渲染的时候 **不占据任何空间**  
`Visibility:hidden;` 不会让元素从渲染树中消失，渲染时元素 **继续占据空间，只是内容不可见**

②`Display: none;` 是 <font color="#3EAF7C">**非继承属性**</font> ，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示  
`Visibility: hidden;` 是 <font color="#3EAF7C">**继承属性**</font> ，子孙节点消失由于继承了 <font color="#FA8072">hidden</font> ,通过设置` visibility:visible;` 可以让子孙节点显示

③修改常规流中元素的display通常会造成 <font color="#3EAF7C">**文档重排**</font> 。修改visibility属性只会造成 <font color="#3EAF7C">**元素的重绘**</font>

④读屏器不会读取 `display:none;` 元素的内容。但会读取 `visibility: hiddenn;` 元素的内容


## 8.position的值,它们的不同特性以及定位原点是？
### 1.position：absolute

①当absolute和float <font color="#3EAF7C">**同时存在**</font> 的时候，float属性是无任何效果的 

②一旦postion属性为absolute或fixed，其display计算值就是 <font color="#FA8072">block 或者 table</font> 

③absolute的宽度是相对于第一个position <font color="#FA8072">不为static</font> 的 <font color="#3EAF7C">**祖先元素**</font> 计算的 

④absolute是非常独立的css属性，其样式和行为表现不依赖其它任何css属性就可以完成

⑤如果overflow不是定位元素，同时绝对定位元素和overflow容器之间也没有定位元素，则overflow无法对absolute元素进行剪裁  

### 2.Relative
①相对于自身定位

②当同时设置top/bottom使用时，<font color="#3EAF7C">**bottom无效**</font>；当同时设置left/right时，<font color="#3EAF7C">**right无效**</font>

### 3.Fixed
①固定定位元素的包含块是根元素

## 9.为什么要初始化css样式？
①因为浏览器的兼容问题，不同的浏览器对有些标签的默认值是不同的，如果没有对css初始化往往会出现浏览器之间的页面显示差异  

⑤提高编码质量，<font color="#000000">**减少了重复的样式**</font>

## 10.1rem、1em、1vh、1px各自代表的含义？
1.rem相对单位 相对<font color="#3EAF7C">**根元素**</font>html的字体大小来计算

2.em相对单位 基准点为父节点字体的大小，如果自身定义了 <font color="#FA8072">font-size</font> 按自身来计算（浏览器默认字体是16px）
```css
元素的宽 | 高 | padding | margin 用em的话是相对于该元素的 font-size
```
3.vw/vh相对单位
  视窗的宽度和高度，相对于屏幕宽度和高度的1%，处理宽度的时候%单位更合适，高度vh	 更合适

4.px绝对单位 像素，相对于<font color="#3EAF7C">**屏幕分辨率**</font>而言

## 11.rgba()和opacity的透明效果有什么不同？
rgba()和opacity都能实现透明效果，但最大的不同是 <font color="#FA8072">opacity</font> 是 <font color="#3EAF7C">**作用域元素**</font>，设置的是元素内的所有内容的透明度

而rgba()只作用于元素的颜色或其背景色。(设置rgba透明的元素的子元素 <font color="#000000">**不会继承透明效果**</font>)

## 12.Css3的新特性有哪些？
### ①新增的各种css选择器(举例)   
结构伪类选择器
::: details
```css
li:first-child{  /* 选择的是其父元素的首个子元素 */
    color: red;
}
li:last-child{  /* 选择的是其父元素的最后一个子元素 */
    color: yellow;
}
li:nth-child(n){  /* 匹配其父元素的第N个子元素 */
    color: green;
}
```   
:::

属性选择器
::: details
```css
div[class^=box] { /*匹配属性的属性值开头为box的每一个元素*/
    color: red;
}
div[class$=box] { /*匹配属性的属性值结尾为box的每一个元素*/
    color: yellow;
}
div[class*=box] { /*匹配属性的属性值中有box这几个字母的每一个元素*/
    color: green;
}
```
:::

伪元素选择器
::: details
```css
div::first-letter { /*文本的第一个单词或字*/
  color: red;
}

div::first-line { /*文本第一行*/
  color: yellow;
}

div::selection { /*可改变选中文本的样式*/
  color: green;
}
```
:::

### ②文本属性
text-shadow 文本阴影
:::details
```css
div{
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    /*
    第一个值：x轴位置
    第二个值：y轴位置
    第三个值：模糊半径
    第四个值：阴影颜色
    */
}
```
:::

Text Overflow 文本溢出属性
::: details
```css
    div{
        text-overflow: clip;/*修剪文本(多余文字不显示)*/
        text-overflow: ellipsis;/*显示省略符号来代表被修剪的文本*/
        text-overflow: string;/*使用给定的字符串来代表被修剪的文本*/
    }
```
:::

### ③边框
 box-shadow  边框阴影
 ::: details
 ```css
 div{
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    /*
    第一个值：x轴位置
    第二个值：y轴位置
    第三个值：模糊半径
    第四个值：阴影颜色
    */
}
```
:::
border-image 边框图片

border-radius 圆角边框

④背景

⑤渐变

⑥过渡

⑦动画，旋转

⑧多列布局

⑨flex布局

⑩@media媒体查询