let score=400
console.log(score);

let balance= new Number(100)
console.log(balance)
console.log(typeof(balance))

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(3))

const anothernumber=1233.553537;
console.log(anothernumber.toPrecision(4))

const number=1000000000
console.log(number.toLocaleString('en-IN'));


//+++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++//

// console.log("maths start")
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.4))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.1))
// console.log(Math.sqrt(4))
// console.log(Math.min(9,3,4,5,2,5))
// console.log(Math.max(2,3,5,6,7))

console.log(Math.random())

console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1);

const low=10
const max=20

console.log(Math.floor(Math.random()*(max-low+1))+low)


