/**
 * 1. 类的定义，继承，使用父类方法属性
 *
 * 2. public, protected, private 访问类型
 * 2.1 public 允许在类的内外被调用
 * 2.2 private 允许在类内被使用
 * 2.3 protected 允许在类内及继承的子类中使用
 *
 * 3. 构造器 construct
 * 3.1 在 new 实例时，自动执行 construct 函数
 * 3.2 子类调用构造函数时，一定要调用父类的构造函数，且一定要传参
 *
 * 4. 静态属性、存储器（Setter, Getter）
 * 4.1 静态属性，static，将方法挂在类的上面，而非类的实例上
 */
class Person {
    private id: string;
    protected age: number;
    // 传统写法
    // public name: string;
    // constructor(name: string) {
        // this.name = name;
    // }
    // 简化代码
    constructor(public name: string, id: string, age: number) {
        this.name = name;
        this.id = id
        this.age = age
    }
    getName() { return this.name }
}

class Teacher extends Person {
    constructor(name: string, public age: number) {
        super(name, "123", age);  // 调用父类的构造函数，需要传参
    }
    getTeacherName() { return "Teacher" }
    getName(): string { return super.getName() + " lee" }
    getUid() {
        // return this.id  // wrong because of its property is private
    }
    getAge() {
        return this.age
    }
}

const person = new Person("dell", "123", 20);
const teacher = new Teacher("lee", 48);
// teacher.age = 20  // wrong because of its property is protected
console.log(person.getName());
console.log(teacher.getTeacherName());
console.log(teacher.getName());
console.log(teacher.getAge());


// 通过 get，set 保护私有属性
class Animal {
    constructor(private _name: string) {
    }
    get name() {
        return 'hello, ' + this._name
    }
    set name(name: string) {
        this._name = name
    }
}

const animal = new Animal('dog')
console.log(animal.name)
animal.name = 'cat'


// 单例模式：只允许创建、获取一个类的实例
class Demo {
    private static instance: Demo;
    private constructor() {}
    static getInstance() {
        if (!this.instance) {
            this.instance =  new Demo();
        }
        return this.instance
    }
}
const demo1 = Demo.getInstance()
const demo2 = Demo.getInstance()
