let input : any = process.argv[2];

// typeof
switch (typeof input) {
    case 'string':
        console.log('string');
        break;
    case 'number':
        console.log('number');
        break;
    case 'boolean':
        console.log('boolean');
        break;
    case 'object':
        console.log('object');
        break;
    default:
        console.log('no fit type');
        break;
}

// instanceof
let arr : Array<number> = [1, 2, 3, 4, 5];

if(arr instanceof Array){
    console.log('Array');
}

// property in object
let obj : object = { name: 'John', age: 30 };

if("name" in obj){
    console.log('true');
}

// type guard
let obj2 : Array<number> = [1, 2, 3, 4, 5];
if(Array.isArray(obj2)){
    console.log(obj2);
}

