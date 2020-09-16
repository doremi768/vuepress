# Mongoose增查改删

这个项目已进行了十天了，在此期间经常会查阅 `Mongoose` 的文档或者百度一些常用的增删改查，导致消耗了许多不必要的时间。为此我将常用的api进行总结，以便查阅。

## 增加

我项目中的实际需求举例，如下：
``` js
//将模型实例化
//userModel 是从 Schema 编译来的构造函数
let signIn = new userModel({
        username:'abc',
        email: '123456@qq.com',
        password: '123456abc'
    });
//保存数据
signIn.save(function(err,docs){
    if(err){
        res.send({status: 500})
    } else {
        res.send({status: 200})
    }
})
```
::: tip
`mongodb` 会给每条数据都加一个唯一的 `_id`。根据网上说， `_id`的组成分为四个部分：  
时间戳 -  机器码 -  pid -  计数器
:::

## 查询

### find()

### `实例.find(conditions[, projection][, options][, callback])`

### 参数一：conditions 
`conditions` 是需要查找的条件
```js
//全部查找
userModel.find();

//精确查找
userModel.find({username:'abc'});
```
#### 比较查询操作符 
|  符号   | 描述 |
|  :--  | :--   |
| $eq <img width=260/>| 与指定的值**相等**<img width=260/> |
| $ne | 与指定的值**不相等** |
| $gt | **大于**指定的值 |
| $gte | **大于等于**指定的值 |
| $lt | **小于**指定的值 |
| $lte | **小于等于**指定的值 |
| $in | 与查询数组中指定的值中任何一个匹配 |
| $nin | 与查询数组中指定的值中任何一个**不**匹配 |
```js
userModel.find({age: {$gt: 18, $lte: 30}});
//返回  age 字段大于 18 并且小于 30 的所有 document

userModel.find({age: {$in: [18,30]}});
//返回 age 字段等于 18 或者 30 的所有 document。

```


#### 逻辑查询操作符
|  符号   | 描述 |
|  :--  | :--   |
| $and <img width=220/> | 满足数组中指定的所有条件 <img width=220/> |
| $nor  | 不满足数组中指定的所有条件 |
| $or  | 满足数组中指定的条件的其中一个 |
| $not  | 返回不满足指定条件的文档 |
```js
userModel.find($or : [{username : 'abc'},{email : '123456@qq.com'}],function(err,docs){
    if(err){
        res.send({status: 500})
    }else{
        //返回满足数组中指定条件的其中一个的 document
        res.send({status:200,docs})
    }
})
```

在我的项目中的搜索关键字匹配用户的功能上用到了：  
 `$regex`（正则，用于模糊查询）匹配搜索关键字。   
 `$ne`在数据库查询中排除当前用户，也就是在搜素时过滤掉我自己的账号。  
 `$or`，只要搜索到邮箱、用户名其中的字符有一个匹配到了搜索关键字就返回。  
 部分代码如下：
```js
//searchUser是搜索关键字。
let users = new RegExp(searchUser,'i'); //i表示不区分大小写

let conditions = {
     $or : [ 
         {username : {$regex : users}},
         {email : {$regex : users}}
     ],
     _id:{$ne:meId} //过滤掉我自己的账号
 }
 userModel.find(conditions,function(err,docs){
     if(err){
         res.send({status: 500})
     }else{
         res.send({status:200,docs})
     }
 })
```

### 参数二：projection（可选）
指定要包含或者排除哪些 `document` 字段，在 `mongoose` 中有两种指定方式**字符串指定**和**对象形式指定**。   
**字符串指定**

```js
//只写字段名，代表包含
userModel.find({},'username');

//在字段前名加 - 号，代表排除。
userModel.find({},'-username');
```

**对象形式指定**

```js
//1表示包含
userModel.find({},{username: 1});

//0表示排除
userModel.find({},{username: 1});
```

**使用select()定义**

```js
userModel.find().select('username email');
userModel.find().select({username: 0});
```

### 参数三: options
常用的书写方式：`实例.find(conditions).<option>(xxx)`  
**sort**  
按照排序规则根据所给的字段进行排序,值可以是`asc`,`desc`,`ascending`,`escending`,1 和 -1。

```js
//字符串有 - 代表 descending 降序
userModel.find().sort('username -email'); 

userModel.find().sort({username:'asc',email: -1});
```

### 参数四: callback
**传入**

`Mongoose` 中所有传入 `callback` 的查询，其格式都是 `callback(err,docs)`这种形式。如果出错 `err` 是出错信息，`docs` 是 `null`;如果查询成功，则 `error` 是 `null`，`docs` 是查询结果。   
查询结果的构造形式是根据查询方法的不同而有不同形式的。     

`find()` 方法的查询结果是数组，即使没有查询到内容，也会返回 `[]` 空数组。

**不传**

不传回调函数时，查询方法返回的是一个 `Query` 实例，实例继承了 `Query` 原型上的所有方法，因此返回的实例可以**链式调用**其他方法，从而组成查询链。

```js
let query = userModel.find({username:'abc'});
query.select('username email -_id');;
```

如果查询方法不传入回调函数时，获取查询数据的方式有两种：

**1.exec()**
```js
let query = userModel.find({username:'abc'});
query.exec((err,docs) => {
    if(err) {
        res.send({status: 500});
    } else {
        res.send({satus: 200});
    }
})
```
**2.then()**

使用 `query` 实例的 `then()` 方法将查询链当作 `promise` 来处理
```js
query.then(result => {
    res.send({satus: 200});
},reason => {
    res.send({satus: 500});
})
```
### findOne()
### `实例.findOne(conditions[, projection][, options][, callback])`

#### 回调函数的查询结果
+ 返回数据的格式是 `{}` 对象形式。
+ 有多个数据满足查询条件的，只返回第一条。
+ 查询条件 `conditions` 为 `{}` , `null` 或者 `undefined`,将任意返回一条数据
+ 没有符合查询条件的数据，返回 `null`。

### findById()

### `实例.findById(conditions[, projection][, options][, callback])`
```js
//两者唯一的区别是:当findById的id 为 undefined或者null的时候，返回null
userModel.findById(id);
userModel.findOne({_id: id});
```
#### 回调函数的查询结果
+ 返回数据的格式是 `{}` 对象形式。
+ id 为 `undefined` 或者 `null` 的时候，返回`null`。
+ 没有符合查询条件的数据，返回 `null`。

## 修改
### findOneAndUpdate()
### `实例.findOneAndUpdate(conditions[, update][, options][, callback])`

#### 参数一：conditions
+ 和 `find()` 一样
+ `conditions` 为 `{}`,更新第一条数据

#### 参数二： update
如果没有操作符，或者操作符不是 `update` 操作符，统一被视为 `$set` 操作

#### 参数三： options
|  选项   | 描述 |
|  :--  | :--   |
| lean <img width=220/> | true返回普通对象，false返回Mongoose Documents <img width=220/> |
| new  | true返回更新后的数据，false返回更新前的数据 |
| select  | 指定返回的字段 |

#### 参数四： callback
+ 没有找到数据返回 `null`
+ 没有查询条件，则返回更新后的第一条数据

### update()
### `实例.update(conditions[, update][, options][, callback])`

#### options
+ `multi`: 默认为 `false`，只更新第一条数据。为 `true` 时，符合查询条件的多条文档都会更新。
+ `overwrite`: 默认为：`false`,即 `update` 参数如果没有操作符或操作符不是 `update`操作符，将会默认添加 `$set`。如果为 `true`,则不添加 `$set`，视为覆盖原有文档。

#### callback
```js
userModel.update({username:'abc'},{$set:{email:'654321@qq.com'}},function(err,docs) => {
    if(err) {
        res.send({satus: 500});
    } else {
        console.log(docs); //{n:1,nModified:1,ok：1}
        res.send({satus: 200});
    }
})
```
+ `n`: 要更新的文档数量。
+ `nModified`: 更新的文档数量，如果 `update` 的数据和之前没有变化，则 `nModified` 为 0；

### updateMany()
### `实例.updateMany(conditions[, update][, options][, callback])`
更新符合查询条件的所有文档。

## 删除
### findOneAndDelete()
### `实例.findOneAndDelete(conditions[, options][, callback])`

#### options
`rewResult`:如果为 `true`,则返回来原生结果

#### callback
+ 没有符合条件的数据时，返回 `null`。
+ 条件为空时，删除第一条数据。
+ 删除成功返回 `{}` 形式的原数据。
