/**
 * 1. var 声明 (js)
 * 1.1 函数作用域: var声明可以在包含它的函数，模块，命名空间或全局作用域内部任何位置被访问
 * 1.1.1 多次声明同一个变量并不会报错, 均指向同一个变量
 * 1.1.2 在块内声明的变量, 在块外亦可访问
 */
for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);  // return '[10, 10, ...]'
        }, 100 * i);
    // setTimeout 函数在若干毫秒后执行一个函数,
    // 且是在 for 循环结束后, 因此每次打印的值为 10
}
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() {
            console.log(i);
            }, 100 * i);
    })(i);
    // 使用立即执行的函数表达式（IIFE）来捕获每次迭代时i的值
}


/**
 * 2. let 声明
 * 2.1 块作用域: 在包含它们的块或 for 循环之外是不能访问的
 * 2.1.1 在声明之前不能被读或写, 属于暂时性死区
 * 2.1.2 可以在 拥有块作用域的函数中 获取未声明的变量, 但是不能在变量声明前调用那个函数
 * 2.1.3 在每次进入一个作用域时, 创建了一个变量的环境, 就算作用域内代码已经执行完毕, 该环境与其捕获的变量依然存在
 * 2.2 重定义及屏蔽
 * 2.2.1 可在明显不同的块里声明 同名变量, 内部变量会屏蔽外部变量
 */
for (let i = 0; i < 10 ; i++) {
    setTimeout(function() {
        console.log(i);
        }, 100 * i);
}


/**
 * 3. const 声明
 * 3.1 与 let 声明类似, 但被赋值后将不能再改变
 */
const numLivesForCat = 9;


/**
 * 4. 解构
 * 4.1 数组, 对象解构, ... 创建剩余变量
 * 4.2 默认值: 在属性为 undefined 时使用缺省值: "?"
 * 4.3 展开: 将一个数组/对象展开为另一个数组/对象
 * 4.3.1 展开对象时会丢失其方法
 */
// 数组解构
let input = [1, 2, 3, 4];
let [first] = input;
let [, second, , fourth] = input;
let [first1, ...rest] = [1, 2, 3, 4];

// 对象解构
let o = { a: "foo", b: 12, c: "bar"};
let { a, b } = o;
({ a, b } = { a: "baz", b: 101 });
let {...rest1} = o
let { a: newName1, b: newName2 } = o;  // 属性重命名

// 默认值
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}

// 展开
let first2 = [1, 2];
let second2 = [3, 4];
let bothPlus = [0, ...first2, ...second2, 5];

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
