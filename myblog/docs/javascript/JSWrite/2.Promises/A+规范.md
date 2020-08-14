# Promises/A+规范
&emsp;&emsp;对于`Promise`我是情有独中，还记得前两个月夏日的接踵而至，我刚好学习了`Promise`。不过当时的我也仅仅模糊的记住了`Promise`就是一个异步编程的解决方案，它有一个 `then` 方法。仅此而已。 

&emsp;&emsp;但当时我却想着用原生 JS 进行实现，毫无疑问的被泼了凉水。不过   后来每隔一段时间我就会尝试着理解以及如何实现`Promises/A+`。虽然或许这在工作中除了能够更熟练的使用`Promise`之外并没有什么实际性价值，不过我其实将它当作在JS学习路上的一个关卡，用以检验自己的对知识理解的水准。  

&emsp;&emsp;至此第5次对`Promises/A+`进行学习，前面几次从最开始查阅一些博客所实现的`Promise`，并加以总结之后自己进行实现，但始终会有一些步骤没有彻底理解，到现在终于能够理解到它的实现逻辑。当然我对实现之后的代码进行调试之后，没有发现与原生`Promises`的差异性。但或许这之中还存在着一些我没有发现的细节问题，不过随着学习的深入，我也会检查纰漏。(我尝试着总结`Promise`的实现逻辑，但发现以前难以理解的地方现在可以很容易的理解，所以就放弃了一步一步的总结，直接总结比较绕的点)

首先来看一个对`Promise`使用：
```js
new Promise((resolve,reject) => {
    resolve(1);
    reject(2);
}).then(result => {
    console.log(result);    //1
},reason => {
    console.log(reason);
})
```
上面代码中 `Promise` 执行时，传入了一个回调函数，这个回调函数有一个名字叫做 `executor`,它将两个函数作为参数，分别是 `resolve` 和  `reject`。而在MDN中有说明，`Promise` 构造函数执行时立即调用 `executor` 函数。   
并且可以看到，`reject(2)` 并没有生效。这是因为在 `Promises/A+` 中明确规定一个 `Promise` 必须处在规定好的以下三种状态之一： 
:::tip
pending: 初始状态，既不是成功，也不是失败状态。  
fulfilled: 意味着操作成功完成。  
rejected: 意味着操作失败。  
:::
代码实现如下：
```js
class Promise{
    constructor(executor) {
        //初始状态
        this.status = 'pending';

        let resolve = result => {
            if(this.status !== 'pending') return;
            this.status = 'fulfilled';

        };
        
        let reject = reason => {
            if(this.status !== 'pending') return;
            this.status = 'rejected';

        };

        try {
            executor(resolve,reject);
        } catch(e) {
            reject(e);
        };

    }
}
```
上面代码中使用了 `try...catch` 语句用来指定一个出现异常时抛出的响应。这是因为果在 `executor` 函数中抛出一个错误，那么该 `promise` 状态为`rejected`也就是调用 `reject()`。


## Promise.prototype.then
总结之后需要满足以下需求：  
1.当 `Promise` 状态为 `fulfilled` 时，调用 `then` 的 `onfulfilled` 方法；
当 `Promise` 状态为 `rejected` 时，调用 `then` 的 `onrejected` 方法。

2.`resolve` 或 `reject` 不是立即返回最终执行结果。  

3.`then` 方法返回一个新的 `Promise` 对象， 所以可以被链式调用。

4.当不写 `then` 中的 `onfulfilled` 或者 `onrejected` 方法时，会进行传透。
```js
class Promise{
    constructor(executor) {
        this.status = 'pending';
        this.value = undefined;
        this.onFulfilledAry = [];
        this.onRejectedAry = [];

        let resovle = result => {
            if(this.status !== 'pending') return;
            this.status = 'fulfilled';

            let timer = setTimeout(() => {
                clearTimeout(timer);
                this.value = result;
                this.onFulfilledAry.forEach(item => {
                    item(this.value);
                })
            },0)

        };
        
        let reject = reason => {
            if(this.status !== 'pending') return;
            this.status = 'rejected';

            let timer = setTimeout(() => {
                clearTimeout(timer);
                this.value = reason;
                this.onRejectedAry.forEach(item => {
                    item(this.value);
                })
            },0)
        }

        try{
            executor(resovle,reject);
        } catch(err) {
            reject(err);
        }
        
    }

    then(onFulfilled,onRejected) {
        //判断onFulfilled是否是函数，如果不是，那么将上一个then中的返回值原封不动的返回出去。
        typeof onFulfilled !== 'function' ? onFulfilled = result => result : null;
        //判断onRejected是否是函数，如果不是，那么就抛出异常。
        //并且判断Error的prototype属性是否存在于reason的原型链上。如果在，那么就将异常信息抛出
        typeof onRejected !== 'function' ? onRejected = reason => {
            throw new Error(reason instanceof Error ? Error.message : reason);
        } : null;

        //返回一个新的Promise
        return new Promise((resolve,reject) => {
            //将一个匿名函数放入数组中
            this.onFulfilledAry.push(() => {
                //执行resovle或者reject中的方法时会进行捕获。
                try{
                    //将onFulfilled方法执行，并用x来接收返回值
                    let x = onFulfilled(this.value);
                    //判断返回值是否是Promise来取决于如何执行。
                    x instanceof Promise ? x.then(resolve,reject) : resolve(x);
                } catch(err) {
                    reject(err);
                }
                
            });

            this.onRejectedAry.push(() => {
                try{
                    let x = onRejected(this.value);
                    x instanceof Promise ? x.then(resolve,reject) : resolve(x);
                } catch(err) {
                    reject(err);
                }
                
            })
        })
    }
};
```

## Promise.prototype.catch(onRejected)
此方法返回一个 `Promise`,并且处理 `onRejected` 的情况,实现如下：
```js
catch(onRejected){
    return this.then(null,onRejected);
}
```

## Promise.all(iterable)
1.此方法返回一个 `Promise`。

2.参数为一个可迭代对象。

3.只有当 `iterable` 中所有 `Promise` 都是成功的状态才会会把一个包含 `iterable` 里所有 `promise` 返回值的数组作为成功回调的返回值，顺序跟 `iterable` 的顺序保持一致。

4.如果参数中  `promise` 有一个失败，此实例回调失败，失败的原因是第一个失败 `promise` 的结果。

5.如果参数中包含非 `promise` 值，这些值将被忽略，但仍然会被放在返回数组中

实现如下：
```js
static all(iterable = []){
    //这个方法返回一个新的promise对象
    return new Promise((resolve,reject) => {
        let index = 0; 
        let result = [];    //当都成功需要返回的数组；
        for(let i = 0; i < iterable.length; i++) {
            //用于检测参数是否是Promise
            if(iterable[i] instanceof Promise) {
                iterable[i].then(res => {
                    index++;
                    result[i] = res;
                    //当相等时说明参数中的所有`Promise` 都是成功的状态
                    if(index === iterable.length) {
                        resolve(result);
                    }
                },reason)
            } else {
                //如果时非 `promise` 值，则忽略，仍然放在数组中。
                result[i] = iterable[i];
                index++;
            }

        }
    })
}
```
