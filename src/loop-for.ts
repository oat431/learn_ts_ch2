// for loop 1
console.log("====================================");
for(let i = 0; i < 5; i++){
    console.log(i);
}
console.log("====================================");

// for loop 2
console.log("====================================");
let arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log("====================================");

// or

console.log("====================================");
for(let i in arr){
    console.log(arr[i]);
}
console.log("====================================");

console.log("====================================");
// for loop 3
let str:String = 'hello';

for(let i = 0; i < str.length; i++){
    console.log(str[i]);
}
console.log("====================================");

// or

console.log("====================================");
for(let s of str){
    console.log(s);
}
console.log("====================================");
