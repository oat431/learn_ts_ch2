// arithmetic operations
console.log("Arithmetic Operations");
let arit1 :number = 10;
let arit2 :number = 3;

console.log(`${arit1} + ${arit2} = ${arit1 + arit2}`);
console.log(`${arit1} - ${arit2} = ${arit1 - arit2}`);
console.log(`${arit1} * ${arit2} = ${arit1 * arit2}`);
console.log(`${arit1} / ${arit2} = ${arit1 / arit2}`);
console.log(`${arit1} % ${arit2} = ${arit1 % arit2}`);

let arit3 :number = 10;
console.log(`arit3++ = ${arit3++}`);
console.log(`arit3 = ${arit3}`);

let arit4 :number = 10;
console.log(`arit4 = ${arit4}`);
console.log(`++arit4 = ${++arit4}`);

let arit5 :number = 10;
console.log(`arit5-- = ${arit5--}`);

let arit6 :number = 10;
console.log(`arit6 = ${arit6}`);
console.log(`--arit6 = ${--arit6}`);

console.log("====================================");

// comparison operations
console.log("Comparison Operations");
let comp1 :number = 10;
let comp2 :number = 5;
let comp3 :number = 10;

console.log(`${comp1} > ${comp2} = ${comp1 > comp2}`);
console.log(`${comp1} > ${comp3} = ${comp1 > comp3}`);
console.log(`${comp1} < ${comp2} = ${comp1 < comp2}`);
console.log(`${comp1} < ${comp3} = ${comp1 < comp3}`);
console.log(`${comp1} >= ${comp2} = ${comp1 >= comp2}`);
console.log(`${comp1} >= ${comp3} = ${comp1 >= comp3}`);
console.log(`${comp1} <= ${comp2} = ${comp1 <= comp2}`);
console.log(`${comp1} <= ${comp3} = ${comp1 <= comp3}`);
console.log(`${comp1} == ${comp2} = ${comp1 == comp2}`);
console.log(`${comp1} == ${comp3} = ${comp1 == comp3}`);
console.log(`${comp1} != ${comp2} = ${comp1 != comp2}`);
console.log(`${comp1} != ${comp3} = ${comp1 != comp3}`);

// console.log("type comparison");
// let comp4 :string = "10";
// let comp5 :number = 10;
// console.log(`${comp4} == ${comp5} = ${comp4 == comp5}`);
// console.log(`${comp4} === ${comp5} = ${comp4 === comp5}`);


console.log("====================================");

console.log("Logical Operations");
let logic1 :boolean = true;
let logic2 :boolean = false;

console.log(`${logic1} && ${logic2} = ${logic1 && logic2}`);
console.log(`${logic1} || ${logic2} = ${logic1 || logic2}`);
console.log(`!${logic1} = ${!logic1}`);
console.log(`!${logic2} = ${!logic2}`);

console.log("====================================");

console.log("Bitwise Operations");
let bit1 :number = 2;
let bit2 :number = 3;

console.log(`${bit1} & ${bit2} = ${bit1 & bit2}`);
console.log(`${bit1} | ${bit2} = ${bit1 | bit2}`);
console.log(`${bit1} ^ ${bit2} = ${bit1 ^ bit2}`);
console.log(`~${bit1} = ${~bit1}`);
console.log(`${bit1} << ${bit2} = ${bit1 << bit2}`);
console.log(`${bit1} >> ${bit2} = ${bit1 >> bit2}`);
console.log(`${bit1} >>> ${bit2} = ${bit1 >>> bit2}`);

console.log("====================================");

console.log("Assignment Operations");
let assign1 :number = 10;
let assign2 :number = 5;

console.log(`assign1 = ${assign1}`);
console.log(`assign1 += ${assign2} = ${assign1 += assign2}`);
assign1 = 10;   
console.log(`assign1 -= ${assign2} = ${assign1 -= assign2}`);
assign1 = 10;   
console.log(`assign1 *= ${assign2} = ${assign1 *= assign2}`);
assign1 = 10;   
console.log(`assign1 /= ${assign2} = ${assign1 /= assign2}`);
assign1 = 10;   
console.log(`assign1 %= ${assign2} = ${assign1 %= assign2}`);
assign1 = 10;   
console.log(`assign1 &= ${assign2} = ${assign1 &= assign2}`);
assign1 = 10;   
console.log(`assign1 |= ${assign2} = ${assign1 |= assign2}`);
assign1 = 10;   
console.log(`assign1 ^= ${assign2} = ${assign1 ^= assign2}`);
assign1 = 10;   
console.log(`assign1 <<= ${assign2} = ${assign1 <<= assign2}`);
assign1 = 10;   
console.log(`assign1 >>= ${assign2} = ${assign1 >>= assign2}`);
assign1 = 10;   
console.log(`assign1 >>>= ${assign2} = ${assign1 >>>= assign2}`);

console.log("====================================");

console.log("Ternary Operations");
let tern1 :number = 10;
let tern2 :number = 5;

let tern3 :number = (tern1 > tern2) ? tern1 : tern2;

console.log(`tern3 = ${tern3}`);

console.log("====================================");

console.log("String Operations");

let str1 :string = "Hello";
let str2 :string = "World";

console.log(`${str1} + ${str2} = ${str1 + str2}`);
console.log(`${str1} += ${str2} = ${str1 += str2}`);

console.log("====================================");

console.log("Type Operations");