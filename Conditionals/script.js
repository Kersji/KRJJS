'use strict'

console.log(`Conditionals`);

let age=5;
if ( age>=18 && age<=65 ) {
    console.log(age + `: Age range is 18 - 65`);
} else if (age < 18) {
    console.log(age +`: Underage - less than 18`);
} else {
    console.log (age + `: Where has the days gone? Retired now`);
}

let ageCheck=`50`;
age > ageCheck? console.log(`Age is above 50`) : console.log(`Age is 50 or under`);