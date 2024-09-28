// fuction type 1 : no parameter, no return value
// use case: print log, insert log
function func1() : void {
    console.log('func1');
}

// fuction type 2 : no parameter, return value
// use case: get current time, get random number
function func2() : string {
    return Date.now().toString();
}

// fuction type 3 : parameter, no return value
// use case: print log with parameter, insert log with parameter
function func3(msg: string) : void {
    console.log(msg);
}

// fuction type 4 : parameter, return value
// most common type
function func4(a: number, b: number) : number {
    return a + b;
}

// fuction type 5 : optional parameter, return value
// use case: get current time, get random number
function func5(a: number, b: number = 0) : number {
    return a + b;
}

// fuction type 6 : rest parameter, return value
// use case: sum of numbers
function func6(...args: number[]) : number {
    return args.reduce((acc, val) => acc + val);
}

console.log("====================================");

func1();
console.log(func2());
func3('hello');
console.log(func4(1, 2));
console.log(func5(1));
console.log(func6(1, 2, 3, 4, 5));
console.log(func6(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log("====================================");
// arrow function
let arrowfun1 = () => {
    console.log('arrowfun1');
}

let arrowfun2 = () => Date.now().toString();
let arrowfun3 = (msg: string) => console.log(msg);
let arrowfun4 = (a: number, b: number) => a + b;
let arrowfun5 = (a: number, b: number = 0) => a + b;
let arrowfun6 = (...args: number[]) => args.reduce((acc, val) => acc + val);

arrowfun1();
console.log(arrowfun2());
arrowfun3('hello');
console.log(arrowfun4(1, 2));
console.log(arrowfun5(1));
console.log(arrowfun6(1, 2, 3, 4, 5));
console.log(arrowfun6(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log("====================================");

let employee = {
    name: 'John',
    age: 30,
    print: () => {
        console.log('this is employee object');
    }
};

console.log(employee);
employee.print();