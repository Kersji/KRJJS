'use strict'

console.log(`FizzBuzz Challenge`);

for (let i=1; i<=35; i++) {
    if ((i%3==0) && (i%5!=0)) {
        console.log(`Fizz`);      
    }
    else if ((i%3!=0) && (i%5==0)) {
        console.log(`Buzz`);      
    } else if ((i%3==0) && (i%5==0)) {
        console.log(`FizzBuzz`);
    } else { 
        console.log(i);
    }
}