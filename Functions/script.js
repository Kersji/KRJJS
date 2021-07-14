'use strict'

console.log(`*** Function`);

function sub(num1, num2) {
    return(num1-num2);
}

console.log(sub(9, 7));

console.log(`*** Function Expression`);

const welcomeMsg = function (name, age, gender) {
    return (`My name is ${name}, I am ${age} years old and of gender ${gender}`);
}

console.log(welcomeMsg(`Dylan`, 10, `Male`));

console.log(`*** Arrow Function`);

const substract = (num1, num2) => {
    return (num1-num2);
}

let num3 = substract(1,2);
console.log(num3);

const welcome = (name, age, gender) => {
    return (`My name is ${name}, I am ${age} years old and of gender ${gender}`);
}

let welMsg = welcome(`Kersji`, 39, `Male`);
console.log(welMsg);

const powerUp = (n1, n2) =>{
    return (Math.pow(n1, n2));
}

let num4 = powerUp(7, 2);
console.log(num4);