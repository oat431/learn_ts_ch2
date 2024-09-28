let num:any = process.argv[2];

if (num % 2 == 0) {
    console.log('Even');
} else {
    console.log('Odd');
}

if(num % 3 == 0 && num % 5 == 0){
    console.log('FitBuzz');
} else if (num % 5 == 0){
    console.log('Buzz');
} else if (num % 3 == 0){
    console.log('Fit');
} else {
    console.log('Not Fit and Buzz');
}
