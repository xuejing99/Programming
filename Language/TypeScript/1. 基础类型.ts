/**
 * 1. 布尔值
 */
let isDone: boolean = false;
let isTodo: boolean = true;

/**
 * 2. 数值 Number
 * 2.1 所有数字都是浮点数
 */
let decLiteral: number = 6;  // 十进制
let hexLiteral: number = 0xf00d;  // 十六进制
let binaryLiteral: number = 0b1010;  // 二进制
let octalLiteral: number = 0o744;  // 八进制

/**
 * 3. 字符串 String
 * 3.1 使用双引号 (") 或单引号 (') 表示字符串
 * 3.2 模版字符串：反引号包围 (`)，${ expr } 嵌入
 */
let myName: string = "bob";
let sentence: string = `Hello, my name is ${ myName }.`

/**
 * 4. 数组
 * 4.1 元素类型后面接上[]
 * 4.2 数组泛型，Array<元素类型>
 */
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

/**
 * 5. 元组 Tuple
 * 5.1 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
 */
let x: [string, number];
x = ['hello', 10];

/**
 * 6. 枚举 Enum
 * 6.1 默认情况下，从0开始为元素编号，也可以手动的指定成员的数值
 */
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
let colorName: string = Color[2];  // 由枚举的值得到它的名字

/**
 * 7. 任意值 Any
 * 7.1 在编译阶段还不清楚类型的变量
 * 7.2 any 类型的变量可调用对应的方法，而 object 类型的变量无法调用其方法
 */
let notSure: any = 4;
notSure = "maybe a string instead";
let list: any[] = [1, true, "free"];

/**
 * 8. 空值 Void
 * 8.1 表示没有任何类型
 * 8.2 void 类型的取值为 undefined 和 null
 * 8.3 undefined 和 null 时所有类型的子类型
 */
let unusable: void = undefined;

/**
 * 9. Never
 * 9.1 表示用不存在的值的类型
 * 9.2 never 是任何类型的子类型，也可以赋值给任何类型
 * 9.3 never 类型没有子集，也不能被赋值
 */
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

/**
 * 10. 类型断言
 * 10.1 进行类型转换，只在编译阶段起作用
 * 10.2 表示：尖括号法；as 语法
 */
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength1: number = (someValue as string).length;
