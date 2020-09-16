(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{368:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[t._v("#")]),t._v(" Module")]),t._v(" "),a("p",[t._v("JavaScript 一直没有模块 "),a("font",{attrs:{color:"#FA8072"}},[t._v("（module）")]),t._v(" 体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。")],1),t._v(" "),a("p",[t._v("在 ES6 之前，社区制定了一些模块加载方案，最主要的有 "),a("font",{attrs:{color:"#FA8072"}},[t._v("CommonJS")]),t._v(" 和 "),a("font",{attrs:{color:"#FA8072"}},[t._v("AMD")]),t._v(" 两种。前者用于服务器，后者用于浏览器")],1),t._v(" "),a("p",[t._v("ES6 模块的设计思想是尽量的"),a("font",{attrs:{color:"#3EAF7C"}},[a("strong",[t._v("静态化")])]),t._v("，使得编译时就能确定模块的"),a("font",{attrs:{color:"#3EAF7C"}},[a("strong",[t._v("依赖关系")])]),t._v("，以及输入和输出的变量。 "),a("font",{attrs:{color:"#FA8072"}},[t._v("CommonJS")]),t._v(" 和 "),a("font",{attrs:{color:"#FA8072"}},[t._v("AMD")]),t._v(" 两模块，都只能在运行时确定这些东西。")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("ES6 模块之中，顶层的 "),a("font",{attrs:{color:"#FA8072"}},[t._v("this")]),t._v(" 指向 "),a("font",{attrs:{color:"#FA8072"}},[t._v("undefined")]),t._v("，即不应该在顶层代码使用 "),a("font",{attrs:{color:"#FA8072"}},[t._v("this")]),t._v("。")],1)]),t._v(" "),a("h2",{attrs:{id:"export命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export命令"}},[t._v("#")]),t._v(" export命令")]),t._v(" "),a("p",[t._v("模块功能主要由两个命令构成："),a("font",{attrs:{color:"#FA8072"}},[t._v("export")]),t._v(" 和 "),a("font",{attrs:{color:"#FA8072"}},[t._v("import")]),t._v("。 "),a("font",{attrs:{color:"#FA8072"}},[t._v("export")]),t._v(" 命令用于规定模块的"),a("font",{attrs:{color:"#3EAF7C"}},[a("strong",[t._v("对外接口")])]),t._v("，"),a("font",{attrs:{color:"#FA8072"}},[t._v("import")]),t._v(" 命令用于输入其他模块提供的功能。")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" name1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" name2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("通常情况下，"),a("font",{attrs:{color:"#FA8072"}},[t._v("export")]),t._v(" 输出的变量就是本来的名字，但是可以使用 "),a("font",{attrs:{color:"#FA8072"}},[t._v("as")]),t._v(" 关键字重命名。")],1),t._v(" "),a("p",[t._v("需要特别注意的是，"),a("font",{attrs:{color:"#FA8072"}},[t._v("export")]),t._v(" 命令规定的是对外的接口,如下：")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("上面例子第一种写法直接输出 1，第二种写法通过变量m，还是直接输出 1。1只是一个值，不是接口。正确的写法是下面这样：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写法一")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写法二")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写法三")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("另外，"),a("font",{attrs:{color:"#FA8072"}},[t._v("export")]),t._v(" 语句输出的接口，与其对应的值是"),a("font",{attrs:{color:"#3EAF7C"}},[a("strong",[t._v("动态绑定关系")])]),t._v("，即通过该接口，可以取到模块"),a("font",{attrs:{color:"#3EAF7C"}},[a("strong",[t._v("内部实时的值")])]),t._v("。如下：")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//500毫秒后foo的值变为 'baz'")]),t._v("\n")])])]),a("p",[t._v("这一点与 "),a("font",{attrs:{color:"#FA8072"}},[t._v("CommonJS")]),t._v(" 规范完全不同。 "),a("font",{attrs:{color:"#FA8072"}},[t._v("CommonJS")]),t._v(" 模块输出的是值的"),a("font",{attrs:{color:"#3EAF7C"}},[a("strong",[t._v("缓存")])]),t._v("，不存在动态更新。")],1),t._v(" "),a("h2",{attrs:{id:"import-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-命令"}},[t._v("#")]),t._v(" import 命令")]),t._v(" "),a("p",[t._v("使用 "),a("font",{attrs:{color:"#FA8072"}},[a("strong",[t._v("export")])]),t._v(" 命令定义了模块的对外接口以后，其他 JS 文件就可以通过 "),a("font",{attrs:{color:"#FA8072"}},[t._v("import")]),t._v(" 命令加载这个模块。如下：")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./xx.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("import 命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，须与被导入模块 "),a("code",[t._v("./xx.js")]),t._v(" 对外接口的名称相同。可以用 "),a("font",{attrs:{color:"#FA8072"}},[t._v("as")]),t._v(" 关键字重命名。")],1),t._v(" "),a("p",[t._v("import 命令输入的变量都是"),a("font",{attrs:{color:"#3EAF7C"}},[a("strong",[t._v("只读的")])]),t._v("，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。如下：")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./xxx.js'")]),t._v("\n\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Syntax Error : 'a' is read-only;")]),t._v("\n")])])]),a("p",[t._v("上面代码中，脚本加载了变量 "),a("font",{attrs:{color:"#FA8072"}},[t._v("a")]),t._v("，对其重新赋值就会报错，因为 "),a("font",{attrs:{color:"#FA8072"}},[t._v("a")]),t._v(" 是一个只读的接口，但是，如果 "),a("font",{attrs:{color:"#FA8072"}},[t._v("a")]),t._v(" 是一个对象，改写 "),a("font",{attrs:{color:"#FA8072"}},[t._v("a")]),t._v(" 的属性是允许的。如下：")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//a 是一个对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./xxx.js'")]),t._v("\n\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("上面的这种做法虽然可以，但是建议不要轻易改变它的属性，因为这种做法很难查错。")])]),t._v(" "),a("p",[t._v("注意，"),a("font",{attrs:{color:"#FA8072"}},[t._v("import")]),t._v(" 命令具有 "),a("font",{attrs:{color:"#3EAF7C"}},[a("strong",[t._v("提升")])]),t._v(" 效果，会提升到整个模块的头部，首先执行。")],1),t._v(" "),a("p",[t._v("最后，"),a("font",{attrs:{color:"#FA8072"}},[t._v("import")]),t._v(" 语句会执行所加载的模块，因此可以有下面的写法。")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("上面代码仅仅执行 "),a("font",{attrs:{color:"#FA8072"}},[t._v("aaa")]),t._v(" 模块，但是不输入任何值。并且对于上面的两条相同 "),a("font",{attrs:{color:"#FA8072"}},[t._v("import")]),t._v(" 语句，不会多次执行，只会执行一句。")],1),t._v(" "),a("h2",{attrs:{id:"export-default命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-default命令"}},[t._v("#")]),t._v(" export default命令")]),t._v(" "),a("p",[t._v("先看看如下代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ed.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("上面例子中，"),a("code",[t._v("ed.js")]),t._v("它默认输出的是一个函数。")]),t._v(" "),a("p",[t._v("其他模块加载该模块的时候， "),a("font",{attrs:{color:"#FA8072"}},[t._v("import")]),t._v(" 命令可以为该匿名函数指定任意的名字。如下。")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" aaa "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ed.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("aaa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("可以看到 "),a("font",{attrs:{color:"#FA8072"}},[t._v("import")]),t._v(" 语句这时不需要使用大括号，这是因为， "),a("font",{attrs:{color:"#FA8072"}},[t._v("export default")]),t._v(" 命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此， "),a("font",{attrs:{color:"#FA8072"}},[t._v("export default")]),t._v(" 只能使用一次，所以  "),a("font",{attrs:{color:"#FA8072"}},[t._v("import")]),t._v(" 命令后面才不用加大括号。")],1),t._v(" "),a("p",[t._v("本质上， export default就是输出一个叫做 default 的变量或方法，所以它的后面不能跟变量声明语句。如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);