let arr : Array<number> = [1, 2, 3, 4, 5];
console.log("====================================");
console.log(...arr);

console.log("====================================");
arr.forEach((val, idx) => {
    console.log(val, idx);
});
console.log("====================================");

arr.map((val, idx) => {
    console.log(val, idx);
});
console.log("====================================");

arr.reduce((acc, val) => {
    return acc + val;
});
console.log("====================================");
