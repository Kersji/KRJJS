'use strict'

let curDay = new Date();
let dayOfWeek = curDay.getDay();

switch(dayOfWeek) {
        case 0:
            console.log(dayOfWeek + `: It is a Sunday`);
            break;  
        case 1:
            console.log(dayOfWeek + `: It is a Monday`);
        case 2:
            console.log(dayOfWeek + `: It is a Tuesday`);
        case 3:
            console.log(dayOfWeek + `: It is a Wednesday`);
        case 4:
            console.log(dayOfWeek + `: It is a Thursday`);
        case 5:
            console.log(dayOfWeek + `: It is a Friday`);
            break;
        case 6:
            console.log(dayOfWeek + `: It is a Saturday`);
            break;
        default:
            console.log(`Invalid Date`);    
}