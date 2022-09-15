/**
 * 1. 接口概念
 * 1.1 接口描述了一个实例，包含 属性 与 方法；
 * 1.2 接口只定义了属性、方法的原型，没有具体实现；
 * 1.3 接口像是一个规范/协议，规定了类中需要提供的属性和方法，是一个抽象的概念；
 *     而类则是实现了这个协议，满足了这个规范的具体实例，是一个具体的概念
 *
 * 2. 接口属性
 * 2.1 可选属性：<变量名>?: 类型
 * 2.2 只读属性：readonly
 * 2.3 额外的属性检查：[propName: string]: any;
 * 2.4 可索引类型
 *
 * 3. 函数接口、类实现接口、接口继承
 *
 * 4. 可索引类型
 */

// 接口定义
interface Person {
    readonly id: string;
    name: string;
    age?: number;
    [propName: string]: any
    say(): string
};

//接口继承
interface Teacher extends Person {
    teach(): string
}

// 接口实现
const person = {
    id: "123456",
    name: "dell",
    sex: "male",
    say() { return 'say hello' }
};
const teacher = {
    id: "123456",
    name: "dell",
    sex: "male",
    say() { return 'say hello' },
    teach() { return 'teach'}
}

// 使用
const getPersonInfo = (person: Person) => {
    console.log(person);
}

// 使用
const setPersonName = (person: Person, name: string) => {
    person.name = name;
}
const setTeacherName = (teacher: Teacher, name: string) => {
    person.name = name;
}

// 调用
getPersonInfo(person);
// getPersonInfo({id: "123456", name: "dell", sex: "male"})  // wrong if without [propName: string]: any
setPersonName(person, "Antonia");
setTeacherName(teacher, "Lee")

// 函数接口
interface SayHi {
    (word: string): string
}

const say: SayHi = (word: string): string => {
    return "hello"
}

// 类实现接口，属性、方法需对应
class User implements Person {
    id = "123456"
    name = "dell"
    say() {
        return 'hello'
    }
}

// 可索引类型
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
