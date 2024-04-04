const score = 100
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.3323
console.log(otherNumber.toPrecision(3));

const numBer = 1000000
console.log(numBer.toLocaleString('en-IN'));

//////////////// MATHS ///////////////////////////

// console.log(Math);
// console.log(Math.abs(-2));
// console.log(Math.round(4.2));
// console.log(Math.ceil(3.0));
// console.log(Math.floor(4.9));

// console.log(Math.min(4,4,3,2));
// console.log(Math.max(4,4,4,5));

console.log(Math.random());
console.log((Math.random()*10 )+1);
console.log((Math.random()*10) +1);


const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max- min + 1)) + min );