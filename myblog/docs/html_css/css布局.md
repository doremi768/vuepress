# css布局

## flex布局

flex是 <font color="#FA8072">flexible Box</font> 的缩写。

1. 采用flex布局的元素，称为flex容器。它的所有子元素自动成为容器成员，称为flex项目。  

2. flex布局原理：就是通过给父盒子添加flex属性，来控制子盒子的位置和排列方式。    

3. 当为**父盒子**设为flex布局以后，**子元素**的 <font color="#FA8072">float,clear 和 vertical-align</font> 属性将**失效**。  

### flex布局父项常见属性

#### flex-diretion 
设置<font color="#3EAF7C">**主轴**</font>的方向

```js
row             //从左到右 
row-reverse     //从右到左  
column          //从上到下  
column-reverse  //从下到上  
```

#### justify-content 
设置<font color="#3EAF7C">**主轴上的子元素**</font>排列方式

```js
flex-start          //默认值，从头部开始 如果主轴是X轴，则从左到右
flex-end            //从尾部开始排列
content             //在主轴居中对齐
space-around        //平分剩余空间
space-between       //先两边贴边 再平分剩余空间
```

#### flex-wrap 
设置<font color="#3EAF7C">**子元素是否换行**</font>
:::tip
flex布局中，默认的子元素是不换行的，如果装不开，会缩小子元素的宽度，放到父元素里面
:::

```js
nowrap;             //不换行
wrap;               //换行
```

#### align-content
设置<font color="#3EAF7C">**侧轴上的子元素**</font>的排列方式(<font color="#3EAF7C">**多行**</font>，只用用于子项出现换行的情况，在单行下是没有效果的)

```js
flex-start          //默认值在侧轴的头部开始排列
flex-end            //在侧轴的尾部开始排列
center              //在侧轴中间显示
space-around        //子项在侧轴平分剩余空间
space-between       //子项在侧轴先分布在两头，再平分剩余空间
stretch             //设置子项元素高度平分父元素高度
```

#### align-items
设置<font color="#3EAF7C">**侧轴上的子元素**</font>排列方式(<font color="#3EAF7C">**单行**</font>)

```js
flex-start         //默认值 从上到下
flex-end           //从下到上
center             //垂直居中
stretch            //拉伸(有高度无法拉伸)
```

#### flex-flow
复合属性，相当于同时设置了 <font color="#FA8072">flex-direction</font> 和 <font color="#FA8072">flex-wrap</font> ,如下

```css
flex-flow:row-reverse wrap;
```
   
### flex布局子项常见属性

#### flex 
**子项目占的份数**，flex属性定义子项目分配剩余空间，用flex来表示占多少份数

#### align-self 
**控制子项自己再侧轴的排列方式**，<font color="#FA8072">align-self</font> 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 <font color="#FA8072">align-items</font> 属性。  
默认值为 <font color="#FA8072">auto</font>,表示继承父元素的 <font color="#FA8072">align-items</font> 属性，如果没有父元素，则等同于 <font color="#FA8072">stretch</font>

#### order
**属性定义子项的排列顺序(先后顺序)**，数值越小，排列越靠前，默认为0，和 <font color="#FA8072">z-index</font> 不一样


## 响应式布局

### 响应式原理

使用<font color="#3EAF7C">**媒体查询**</font>针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的。

响应式需要一个父级作为布局容器，来配合子级元素来实现变化效果。

原理就是在不同屏幕下，通过媒体查询来改变这个布局容器的大小，再改变里面子元素的排列方式和大小，从而实现不同屏幕下，看到不同的页面布局和样式变化。

### 正常响应式尺寸划分
超小屏幕(小于768px)   
大屏幕(大于等于768px)   
中等屏幕(大于等于993px)   
大屏幕(大于等于1200px)  

### 媒体查询(Media Query)

```css
 @media mediatype and|not|only (media feature){css-code};
```

#### 用 @media 开头

#### mediatype 媒体类型
```js
all         //用于所有设备
print       //用于打印机和打印预览
scree       //用于电脑屏幕，平板电脑，智能手机等
```

####  关键字 and not only

#### media feature 媒体特性 必须有小括号包含

```js
width:      //定义输出设备中页面可见区域的宽度
min-width:  //定义输出设备中页面最小可见区域的宽度
max-width:  //定义输出设备中页面最大可见区域的宽度
```
