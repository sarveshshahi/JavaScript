//privitive type => call by value
// string number boolean null undefined symbol bigint

const score =100
const scoreValue=100.3

const isloggedIn=false
const outsidetemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
const bigNumber=98765432n


///reference(Non primitive)
//Array, Object, Function

const heros=["sktiman","naagraj","doga"]
let muobj={
    name:sarvesh,
    age: 22,
}

const myFunction=function(){
    console.log("hello Wold")
}