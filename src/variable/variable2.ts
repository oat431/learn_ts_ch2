// primitive
let bool: boolean = true;
let str: string = 'hello';
let num1: number = 10;
let num2: number = 3.14;
let undf: undefined = undefined;
let nill: null = null;
let sym: symbol = Symbol('hello');
// let nev : never = (() => { throw new Error('error') })();
let bignum : bigint = 100n;

let any1 : any = 4;
let any2 : any = 'hello';
let any3 : any = true;
let any4 : any = undefined;
let any5 : any = null;
let any6 : any = Symbol('hello');
// let any7 : any = (() => { throw new Error('error') })();
let any8 : any = 100n;

console.log(bool);
console.log(str);
console.log(num1);
console.log(num2);
console.log(undf);
console.log(nill);
console.log(sym);
// console.log(nev);
console.log(bignum);

console.log("====================================");

console.log(any1);
console.log(any2);
console.log(any3);
console.log(any4);
console.log(any5);
console.log(any6);
// console.log(any7);
console.log(any8);

console.log("====================================");

let obj1 : object = { name: 'John', age: 30 };

console.log(obj1);

