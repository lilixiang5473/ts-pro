import * as React from "react";
import "./App.module.less";
import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    // 注:注释要空一格

    // 枚举
    // enum Color {
    //   Red = 1,
    //   Green = 3,
    //   Blue
    // }
    // let c: Color = Color.Blue;
    // console.log(c);

    // 先let,才可以在函数return,都则函数获取不到变量,ts报错
    // let a = "222";
    // function test(): string {
    //   return a;
    // }
    // console.log(test());

    // 默认值设置，b可能没值，设置一个默认数值1001
    // function test(testObj: { a: string; b?: number }): void {
    //   let { a, b = 1001 } = testObj;
    //   console.log(a);
    //   console.log(b);
    // }
    // test({ a: "a", b: undefined });

    // 接口
    // interface TestObj {
    //   // readonly只读属性
    //   readonly name: string;
    //   readonly age: number;
    //   readonly total?: number | string;
    // }

    // const testObj: TestObj = {
    //   age: 19,
    //   name: "llx"
    // };
    // console.log(testObj);

    // ReadonlyArray<T>类型(只读且不可枚举,想枚举用类型断言)
    // let a: number[] = [1, 2, 3, 4];
    // let ro: ReadonlyArray<number> = a;
    // // let ro: ReadonlyArray<number> = [2, 3, 4];
    // // ro[0] = 12; // error!
    // // ro.push(5); // error!
    // // ro.length = 100; // error!
    // // a = ro; // error!
    // a = ro as number[]; // right
    // console.log(a);

    // 防止额外类型出现的报错方法
    // interface SquareConfig {
    //   color?: string;
    //   width?: number;
    //   [propName: string]: any;
    // }
    // function createSquare(
    //   config: SquareConfig
    // ): { color: string; area: number } {
    //   let { color = "", width = 0 } = config;
    //   console.log(config);
    //   let area = width * width;
    //   return { color, area };
    // }
    // // way1,使用类型断言解决ts报错
    // // let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);
    // // way2,propName额外属性解决报错(最佳方案)
    // let mySquare = createSquare({ colour: "red", width: 100 });
    // // way3,绕开类型检查,不推荐
    // // let squareOptions: any = { colour: "red", width: 100 };
    // // let mySquare = createSquare(squareOptions);
    // console.log(mySquare);

    // 接口定义函数
    // interface SearchFunc {
    //   (source: string, subString: number): boolean;
    // }
    // let func: SearchFunc;
    // func = function(): boolean {
    //   return true;
    // };
    // console.log(func("hello", 10));

    // 可索引的类型(定义两个类,想要同时可以索引这两个类的情况)
    // class Animal {
    //   public name: string = "hello";
    //   public age: number = 18;
    //   // private和protected类似，但是protected成员在子类中可以访问
    //   // private total: number = 100;
    //   // private只能在当前类访问
    //   private total: number = 100;
    //   public constructor() {
    //     this.total = 222;
    //     console.log(this.total);
    //   }
    //   public test = (): void => {
    //     console.log(this);
    //   };
    // }
    // interface TestPro {
    //   (one?: string): void;
    // }
    // class Dog extends Animal {
    //   public breed: string;
    //   public testPro: TestPro;
    //   public constructor() {
    //     super();
    //     // 暂时允许为空
    //     // tslint:disable-next-line:no-empty
    //     this.testPro = (): void => {};
    //   }
    // }
    // // 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型
    // interface Okay {
    //   [x: string]: Animal;
    //   [x: number]: Dog;
    // }
    // let test: Okay = {
    //   // 调用Animal类的name值(通过字符串调用)
    //   x: new Animal(),
    //   "0": new Dog()
    // };
    // console.log(test[0]);

    // 索引和普通类型之间的冲突(目前没有太好的解决方法，分开用)
    // interface Test {
    //   [index: string]: number;
    //   length: number; // 可以，length是number类型
    //   // name: string; // 错误，`name`的类型与索引类型返回值的类型不匹配
    // }
    // class Arr {
    //   public age: number = 18;
    // }
    // let test: Test = {
    //   arr: new Arr()["age"],
    //   length: 100
    //   // name: "llx"
    // };
    // console.log(test);

    // // 正常必须new实例调用方法
    // class TestStatic {
    //   public test = () => {
    //     console.log("hello");
    //   };
    // }
    // new TestStatic().test();
    // // static可以直接类.方法来调用方法，而不用new的实例来调用方法了
    // class TestStatic2 {
    //   public static test = () => {
    //     console.log("hello");
    //   };
    // }
    // TestStatic2.test();

    // public private protected的区别
    // class Father {
    //   public static str: string = "llx";
    //   public constructor() {
    //     // 初始化调用方法，子类继承也会自动调用，但是自动调用的是父类方法，this也是父类的，并且子类不可以手动调用该方法
    //     this.test();
    //   }
    //   private test: any = (): void => {
    //     console.log(Father.name);
    //   };
    // }

    // 继承接口
    // interface Father {
    //   say: string;
    //   test(d: string): Date;
    // }
    // class Son implements Father {
    //   public say: string;
    //   public test(d: string): Date {
    //     this.say = d;
    //     console.log(this.say);
    //     return new Date();
    //   }
    //   // public constructor() {
    //   //   // super();
    //   //   // Son.name = "new";
    //   // }
    // }
    // // Father.str = "hello";
    // // console.log(Father.str);
    // // console.log(new Father());
    // console.log(new Son().test("llx"));

    // interface ClockInterface {
    //   currentTime: Date;
    // }
    // class Clock implements ClockInterface {
    //   public currentTime: Date = new Date();
    //   public constructor(h: number, m: number) {
    //     console.log(h * m);
    //   }
    // }
    // let test = new Clock(10, 20);
    // console.log(test);

    // 继承接口(静态与实例区别的正确写法)
    // interface ClockInterface {
    //   // 必须有个tick函数
    //   tick(): any;
    // }
    // interface ClockConstructor {
    //   // 这个类型new完返回的是ClockInterface接口继承后再new出来的实例(也就是返回的是ClockInterface接口类型)
    //   new (hour: number, minute: number): ClockInterface;
    // }
    // function createClock(
    //   ctor: ClockConstructor,
    //   hour: number,
    //   minute: number
    // ): ClockInterface {
    //   return new ctor(hour, minute);
    // }
    // // 定义2个类，继承ClockConstructor接口
    // class DigitalClock implements ClockInterface {
    //   constructor(h: number) {
    //     console.log(h);
    //   }
    //   public tick(): void {
    //     console.log("beep beep");
    //   }
    // }
    // class AnalogClock implements ClockInterface {
    //   constructor(h: number, m: number) {
    //     console.log(h, m);
    //   }
    //   public tick(): void {
    //     console.log("tick tock");
    //   }
    // }
    // let digital = createClock(DigitalClock, 12, 17);
    // console.log(digital);
    // let analog = createClock(AnalogClock, 7, 32);
    // console.log(analog);

    // 自己写着玩
    // interface One {
    //   attr: Date;
    // }
    // interface Two {
    //   new (): One;
    // }
    // class Clock implements One {
    //   public attr: Date = new Date();
    //   private currentTime: Date = new Date();
    //   public constructor() {
    //     console.log(this.currentTime);
    //   }
    // }
    // const func = (type: Two): One => {
    //   return new type();
    // };
    // let test: One = func(Clock);
    // console.log(test);

    // 接口继承接口
    // interface Shape {
    //   color: string;
    // }
    // interface Square extends Shape {
    //   sideLength: number;
    // }
    // let square: Square = { color: "", sideLength: 0 };
    // square.color = "blue";
    // square.sideLength = 10;

    // 1个接口继承多个接口
    // interface A {
    //   color: string;
    // }
    // interface B {
    //   penWidth: number;
    // }
    // interface C extends A, B {
    //   sideLength: number;
    // }
    // let square: C = { color: "", penWidth: 0, sideLength: 0 };
    // square.color = "blue";
    // square.sideLength = 10;
    // square.penWidth = 5.0;

    // 混合类型
    // interface Counter {
    //   (start: number): string; // 当作函数用
    //   interval: number; // 当作对象用
    //   reset(): void; // 当作对象用
    // }
    // function getCounter(): Counter {
    //   // ts中的类型断言方式1：<类型>值(tsx中报错，会认为这是个react的element对象)
    //   // 类型断言方式2：值 as 类型(tsx必须用这一种，使用as来断言类型)
    //   let counter = function(start: number): string {
    //     console.log("self");
    //     return `${start}`;
    //   } as Counter;
    //   counter.interval = 123;
    //   counter.reset = function() {
    //     console.log("reset");
    //   };
    //   return counter;
    // }
    // let c = getCounter();
    // console.log(c);
    // c(10);
    // c.reset();
    // c.interval = 5.0;
    // console.log(c.interval);

    // 接口继承类
    // class Control {
    //   private state: string = "hello";
    //   public fuc: () => void = (): void => {
    //     console.log(this.state);
    //   };
    // }
    // 接口继承类，该接口一共有三个类型规定state、fuc、select
    // interface SelectableControl extends Control {
    //   select(): void;
    // }
    // Button类继承Control类的所有属性和方法，并且继承过来接口的select方法(select必填)
    // class Button extends Control implements SelectableControl {
    //   public select(): void {
    //     console.log("Button");
    //   }
    // }
    // 类继承类
    // class TextBox extends Control {
    //   public select(): void {
    //     console.log("TextBox");
    //   }
    // }
    // 错误：“Image”类型缺少“state”属性。
    // class Image implements SelectableControl {
    //   public select(): void {
    //     console.log("Image");
    //   }
    // }
    // 普通定义类
    // class Location {
    //   public date: Date = new Date();
    // }

    // TS类的继承
    // class Animal {
    //   public name: string;
    //   constructor(theName: string) {
    //     this.name = theName;
    //   }
    //   public move(distanceInMeters: number = 0) {
    //     console.log(`${this.name} moved ${distanceInMeters}m.`);
    //   }
    // }
    // class Snake extends Animal {
    //   // constructor(name: string) {
    //   //   super(name);
    //   // }
    //   public move(distanceInMeters = 5) {
    //     super.move(distanceInMeters);
    //   }
    // }
    // class Horse extends Animal {
    //   // constructor(name: string) {
    //   //   super(name);
    //   // }
    //   public move(distanceInMeters = 45) {
    //     super.move(distanceInMeters);
    //   }
    // }
    // let sam: Snake = new Snake("S");
    // let tom: Animal = new Horse("H");
    // sam.move();
    // tom.move(34);

    // private在不同类中的区别
    // class Animal {
    //   private name: string;
    //   constructor(theName: string) {
    //     this.name = theName;
    //     console.log(this.name);
    //   }
    // }
    // let animal = new Animal("Animal");
    // console.log(animal);
    // class Rhino extends Animal {
    //   constructor() {
    //     super("Rhino");
    //   }
    // }
    // let rhino = new Rhino();
    // console.log(rhino);
    // class Employee {
    //   private name: string;
    //   constructor(theName: string) {
    //     this.name = theName;
    //     console.log(this.name);
    //   }
    // }
    // let employee = new Employee("Employee");
    // console.log(employee);
    // animal = rhino; // 正确，继承类可以实现赋值
    // // animal = employee; // 错误: Animal 与 Employee 不兼容，如果全是public属性才可以赋值两个不同类

    // protected与private的区别，类与子类中可以访问，实例不可以访问protected
    // class Person {
    //   protected name: string;
    //   constructor(name: string) {
    //     this.name = name;
    //   }
    // }
    // class Employee extends Person {
    //   private department: string;
    //   constructor(name: string, department: string) {
    //     super(name);
    //     this.department = department;
    //   }
    //   public getElevatorPitch() {
    //     return `Hello, my name is ${this.name} and I work in ${
    //       this.department
    //     }.`;
    //   }
    // }
    // let howard = new Employee("Howard", "Sales");
    // console.log(howard.getElevatorPitch());
    // // console.log(howard.name); // 错误

    // protected2
    // class Person {
    //   protected name: string;
    //   protected constructor(theName: string) {
    //     this.name = theName;
    //   }
    // }
    // // Employee 能够继承 Person
    // class Employee extends Person {
    //   private department: string;
    //   constructor(name: string, department: string) {
    //     super(name);
    //     this.department = department;
    //   }
    //   public getElevatorPitch() {
    //     return `Hello, my name is ${this.name} and I work in ${
    //       this.department
    //     }.`;
    //   }
    // }
    // let howard = new Employee("Howard", "Sales");
    // console.log(howard);
    // // let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
    // // console.log(john);

    // readonly定义类的变量
    // // class Octopus {
    // //   public readonly name: string;
    // //   public readonly numberOfLegs: number = 8;
    // //   constructor(theName: string) {
    // //     this.name = theName;
    // //   }
    // // }
    // class Octopus {
    //   public readonly numberOfLegs: number = 8;
    //   constructor(public readonly name: string) {}
    // }
    // let dad = new Octopus("Man with the 8 strong legs");
    // // dad.name = "123"; // error
    // console.log(dad);

    // 存取器
    // 没有存取器,可以任意修改，对于有权限设计的页面会出现极大的漏洞
    // class Employee {
    //   public fullName: string;
    // }
    // let employee = new Employee();
    // employee.fullName = "Bob Smith";
    // if (employee.fullName) {
    //   console.log(employee.fullName);
    // }

    // set get方法，不允许随便改
    // let passcode = "secret passcode";
    // class Employee {
    //   private theFullName: string;
    //   get fullName(): string {
    //     return this.theFullName;
    //   }
    //   set fullName(newName: string) {
    //     if (passcode && passcode === "secret passcode") {
    //       this.theFullName = newName;
    //     } else {
    //       console.log("Error: Unauthorized update of employee!");
    //     }
    //   }
    // }
    // let employee = new Employee();
    // employee.fullName = "Bob Smith";
    // if (employee.fullName) {
    //   console.log(employee.fullName);
    // }

    // 计算到原点的距离公式
    // class Grid {
    //   public static origin = { x: 0, y: 0 };
    //   constructor(public scale: number) {}
    //   public calculateDistanceFromOrigin(point: { x: number; y: number }) {
    //     let xDist = point.x - Grid.origin.x;
    //     let yDist = point.y - Grid.origin.y;
    //     return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    //   }
    // }
    // let grid1 = new Grid(1.0); // 1x scale
    // let grid2 = new Grid(5.0); // 5x scale
    // console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    // console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

    // 抽象类
    // abstract class Animal {
    //   public abstract makeSound(): void;
    //   public move(): void {
    //     // console.log("roaming the earch...");
    //   }
    // }
    // console.log(Animal);

    // 抽象类继承
    // abstract class Department {
    //   constructor(public name: string) {}
    //   public printName(): void {
    //     console.log("Department name: " + this.name);
    //   }
    //   public abstract printMeeting(): void; // 必须在派生类中实现
    // }

    // class AccountingDepartment extends Department {
    //   constructor() {
    //     super("Accounting and Auditing"); // 在派生类的构造函数中必须调用 super()
    //   }
    //   public printMeeting(): void {
    //     console.log("The Accounting Department meets each Monday at 10am.");
    //   }
    //   public generateReports(): void {
    //     console.log("Generating accounting reports...");
    //   }
    // }
    // let department: Department; // 允许创建一个对抽象类型的引用
    // // department = new Department(); // 错误: 不能创建一个抽象类的实例
    // department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
    // console.log(department);
    // department.printName();
    // department.printMeeting();
    // // department.generateReports(); // 错误: 方法在声明的抽象类中不存在

    // 赋值构造函数
    // class Greeter {
    //   public static standardGreeting: string = "static";
    //   // public greeting: string;
    //   constructor(public greeting?: string) {}
    //   public greet() {
    //     if (this.greeting) {
    //       return this.greeting;
    //     } else {
    //       return Greeter.standardGreeting;
    //     }
    //   }
    // }
    // let greeter1: Greeter;
    // greeter1 = new Greeter();
    // console.log(greeter1.greet());
    // let greeterMaker: typeof Greeter = Greeter;
    // greeterMaker.standardGreeting = "new static"; // 修改了原本的静态属性
    // let greeter2: Greeter = new greeterMaker();
    // console.log(greeter2.greet());
    // let greeter3: Greeter = new greeterMaker("exist");
    // console.log(greeter3.greet());

    // 把类当作接口用
    // class Point {
    //   public x: number;
    //   public y: number;
    // }
    // interface Point3d extends Point {
    //   z: number;
    // }
    // let point3d: Point3d = { x: 1, y: 2, z: 3 };
    // console.log(point3d);

    // 函数
    // function add(x: number, y: number): number {
    //   return x + y;
    // }
    // console.log(add(2, 3));
    // let myAdd = function(x: number, y: number): number {
    //   return x + y;
    // };
    // console.log(myAdd(2, 3));

    // let myAdd: (x: number, y: number) => number = function(
    //   x: number,
    //   y: number
    // ): number {
    //   return x + y;
    // };
    // console.log(myAdd(2, 3));

    // let test: (x: number, y: number) => number = function(
    //   x: number,
    //   y: number
    // ): number {
    //   return x + y;
    // };
    // console.log(test(2, 3));

    // function buildName(firstName: string, lastName?: string) {
    // function buildName(firstName: string, lastName: string = "hello") {
    //   if (lastName) {
    //     return firstName + " " + lastName;
    //   } else {
    //     return firstName;
    //   }
    // }
    // console.log(buildName("one", "two"));

    // 剩余运算符
    // function buildName(firstName: string, ...restOfName: string[]) {
    //   console.log(restOfName);
    //   return firstName + " " + restOfName.join(" ");
    // }
    // let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
    // console.log(employeeName);

    // ...rest
    // function test(one: string, ...rest: any[]): void {
    //   console.log(rest[1]);
    // }
    // test("one", { a: "a" }, ["hello"]);

    // ***this在ts中的用法(重点，必会)***
    // interface Card {
    //   suit: string;
    //   card: number;
    // }
    // interface Deck {
    //   suits: string[];
    //   cards: number[];
    //   createCardPicker(this: Deck): () => Card;
    // }
    // let deck: Deck = {
    //   suits: ["hearts", "spades", "clubs", "diamonds"],
    //   cards: Array(52),
    //   createCardPicker: function(this: Deck) {
    //     return () => {
    //       let pickedCard = Math.floor(Math.random() * 52);
    //       let pickedSuit = Math.floor(pickedCard / 13);
    //       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    //     };
    //   }
    // };
    // let createCardPicker = deck.createCardPicker();
    // console.log(createCardPicker());
    // interface Test {
    //   suits: string;
    //   testFunc: (this: Test) => () => Card;
    // }
    // class TEST implements Test {
    //   public suits: string = "suits";
    //   public testFunc = function(this: Test) {
    //     return () => {
    //       let pickedCard = Math.floor(Math.random() * 52);
    //       return { suit: this.suits, card: pickedCard % 13 };
    //     };
    //   };
    // }
    // let test = new TEST().testFunc();
    // console.log(test());

    // 添加事件监听时需要定义this和event
    // interface UIElement {
    //   addClickListener(onclick: (this: void, e: string) => void): void;
    // }
    // class Test implements UIElement {
    //   public addClickListener: (
    //     onclick: (this: any, e: string) => void
    //   ) => void = (onClick): void => {
    //     onClick.call(this, "hello");
    //   };
    // }
    // class Handler {
    //   public info: any;
    //   public onClickBad(this: Handler, e: string): void {
    //     // oops, used this here. using this callback would crash at runtime
    //     console.log(this, e);
    //   }
    // }
    // let h = new Handler();
    // let uiElement = new Test();
    // h.onClickBad("hello");
    // uiElement.addClickListener(h.onClickBad);

    // class Test {
    //   public attr: string = "str";
    //   public test: (this: any) => void = function(this: any): void {
    //     console.log(this.attr);
    //   };
    // }
    // let test = new Test();
    // test.test();

    // 重载
    // let suits = ["hearts", "spades", "clubs", "diamonds"];
    // function pickCard(x: Array<{ suit: string; card: number }>): number;
    // function pickCard(x: number): { suit: string; card: number };
    // function pickCard(x: any): any {
    //   // Check to see if we're working with an object/array
    //   // if so, they gave us the deck and we'll pick the card
    //   if (typeof x === "object") {
    //     let pickedCard = Math.floor(Math.random() * x.length);
    //     return pickedCard;
    //   }
    //   // Otherwise just let them pick the card
    //   else if (typeof x === "number") {
    //     let pickedSuit = Math.floor(x / 13);
    //     return { suit: suits[pickedSuit], card: x % 13 };
    //   }
    // }
    // let myDeck = [
    //   { suit: "diamonds", card: 2 },
    //   { suit: "spades", card: 10 },
    //   { suit: "hearts", card: 4 }
    // ];
    // let pickedCard1 = myDeck[pickCard(myDeck)];
    // console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
    // let pickedCard2 = pickCard(15);
    // console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

    // 泛型(大项目会用，提高类型重用性)
    // function identity<T>(arg: T): T {
    //   return arg;
    // }
    // let output = identity<number>(2);
    // console.log(output);

    // function loggingIdentity<T>(arg: T[]): T[] {
    //   console.log(arg.length); // Array has a .length, so no more error
    //   return arg;
    // }
    // console.log(loggingIdentity<number | string>([0, "str"]));

    // function identity<T>(arg: T): T {
    //   return arg;
    // }
    // let myIdentity: <U>(arg: U) => U = identity;
    // console.log(myIdentity(2));

    // function identity<T>(arg: T): T {
    //   return arg;
    // }
    // let myIdentity: { <T>(arg: T): T } = identity;
    // console.log(myIdentity(2));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div
          ref={() => {
            return "event";
          }}
          onClick={this.eventClick}
          style={{ background: "pink", height: "50px" }}
        >
          event
          <dialog open={true}>dialog</dialog>
        </div>
      </div>
    );
  }

  public eventClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(event.target);
    console.log(this);
  };
}

export default App;
