// builtin type
console.log('Array');
let arr : Array<number> = [1, 2, 3, 4, 5];
arr.forEach((element) => {
    console.log(element);
});
console.log("====================================");

console.log('Boolean');
let bool : Boolean = true;
console.log(bool.valueOf());
console.log("====================================");

console.log('Date');
let date : Date = new Date();
console.log(date.toDateString());
console.log(date.getTime());
console.log("====================================");

console.log('Math');
let math : Math = Math;
console.log(math.PI);
console.log(math.abs(-10));
console.log(math.ceil(10.1));
console.log("====================================");

console.log('Number');
let num : Number = 10;
console.log(num.valueOf());
console.log(num.toFixed(2));
console.log(num.toExponential(2));
console.log("====================================");


console.log('String');
let str : String = 'hello';
console.log(str.toLowerCase());
console.log("====================================");


console.log('RegExp');
let reg : RegExp = new RegExp('hello');
console.log(reg.test('hello'));
console.log("====================================");


