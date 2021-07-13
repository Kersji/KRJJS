'use strict'
let a = 100;

console.log(`If Statements`);
do {
    
    if (a%2 == 0) {  
        console.log(a + " -");
    } else {
        console.log(a + " *");
    }
    a++;
} while (a <= 105);

a = 100;
console.log(`Switch Cases`);
do {
    switch(a%2) {
        case 0:
            console.log(a + " -");
            break;
        case 1: 
            console.log(a + " *");
            break;
        default:
            console.log(`Won't happen`);    
    }
    a++;
} while (a <= 105);