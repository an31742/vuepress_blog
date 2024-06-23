---
title: typeScript
icon: circle-info
---

### typeScript

TypeScript 是 JavaScript 的类型的超集，支持ES6语法，支持面向对象编程的概念，如类、接口、继承、泛型等

### 特性

- **类型批注和编译时类型检查** ：在编译时批注变量类型
- **类型推断**：ts 中没有批注变量类型会自动推断变量的类型
- **类型擦除**：在编译过程中批注的内容和接口会在运行时利用工具擦除
- **接口**：ts 中用接口来定义对象类型
- **枚举**：用于取值被限定在一定范围内的场景 
- **Mixin**：可以接受任意类型的值
- **泛型编程**：写代码时使用一些以后才指定的类型
- **名字空间**：名字只在该区域内有效，其他区域可重复使用该名字而不冲突
- **元组**：元组合并了不同类型的对象，相当于一个可以装不同类型数据的数组

### 枚举 
定义：被命名的整型常数的集合
使用：用于声明一组命名的常数,当一个变量有几种可能的取值时

```javascript
enum xxx { ... }
```
### 

### 接口
定义：一系列抽象方法的声明
使用：一个接口所描述的是一个对象相关的属性和方法，但并不提供具体创建此对象实例的方法

```javascript
interface interface_name {
}
```

### 类
定义：实现信息封装的基础
使用：封装方法

```javascript
class Car {
    // 字段
    engine:string;

    // 构造函数
    constructor(engine:string) {
        this.engine = engine
    }

    // 方法
    disp():void {
        console.log("发动机为 :   "+this.engine)
    }
}
```

### 函数
定义：帮助我们实现抽象层、模拟类、信息隐藏和模块
使用：针对方法的封装

```javascript
const add = (a: number, b: number) => a + b
```

### 泛型
定义：就是可重用类型
使用：在实例化时作为参数指明这些类型 在typescript中，定义函数，接口或者类的时候，不预先定义好具体的类型，而在使用的时候在指定类型的一种特性

```javascript
function returnItem (para: number): number {
    return para
}

function returnItem (para: string): string {
    return para
}

//一个函数即可接受数字类型又可以接受字符串类型就可以使用T
function returnItem<T>(para: T): T {
    return para
}

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]
```
### 高级类型

- 交叉类型
- 联合类型
- 类型别名
- 类型索引
- 类型约束
- 映射类型
- 条件类型
### unknown 和 any有什么区别
unknown 和 any 的主要区别是 unknown 类型会更加严格：在对 unknown 类型的值执行大多数操作之前，我们必须进行某种形式的检查。而在对 any 类型的值执行操作之前，我们不必进行任何检查。
any 和 unknown 都是顶级类型，但是 unknown 更加严格，不像 any 那样不做类型检查，反而 unknown 因为未知性质，不允许访问属性，不允许赋值给其他有明确类型的变量

### type 和 interface有什么区别
相同点：

1. 都可以描述 '对象' 或者 '函数'
2. 都允许拓展(extends)：interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同


不同点：
1.type 可以声明基本类型，联合类型，元组
2.type 可以使用 typeof 获取实例的类型进行赋值
3.多个相同的 interface 声明可以自动合并

### any和泛型的区别

泛型有类型推论，编译器会根据传入的参数自动地帮助我们确定T的类型

any则是不检验

