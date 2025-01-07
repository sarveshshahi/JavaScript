// // const a=NaN;

// // const b=Boolean(a)
// // console.log(typeof(b))
// // console.log(b)

// //prefix postfix

// // let a=10
// //  b=a++
// //  c=a
// //  console.log(b,a,c)


// //heap and stack

// // let a=10
// // b=a
// // b=11
// // console.log(a)
// // // console.log(b)

// // let a={
// //     name:"sarvesh",
// //     email:"sarvesh@gmail.com"
// // }

// // const b=a

// // b.email="aman@gmail.com";

// // console.log(a.email)
// // console.log(b.email)


// // let aa="  sarvesh shahi  "
// // console.log(aa.slice(-10,4))
// // console.log(aa.length)

// // console.log(aa.charAt(2))
// // console.log(aa.indexOf("r"))
// // console.log(aa.toLocaleLowerCase())
// // console.log(aa.toUpperCase())
// // console.log(aa.trim())
// // console.log(aa.trimStart())
// // console.log(aa.trimEnd())

// // //repleacxe
// // const url="https://localhost.com%20@gmail.com";
// // console.log(url.replace("%20","-"))
// // // console.log(object)

// // //split

// // const name="aman-shahi-heor"
// // console.log(name.split("-"))

// //Array

// let myarr=[1,2,3,4,5,6]
// let arr2=["a","b","c"]
// let arr3= new Array()
// arr3.push(1)
// arr3.push(2,3,4,5,6,7)
// // // console.log(arr3)
// // arr3.pop()
// // arr3.pop()
// // arr3.push()
// // // arr3.pop()
// // arr3.push()
// // arr3.pop()
// // arr3.push()
// // console.log( myarr.shift(8))
// // console.log(myarr)
// // myarr.unshift(9)
// // console.log(myarr)

// // myarr.includes(9)
// // console.log(myarr.includes(12))
// // console.log(myarr.indexOf(0))

// // console.log(myarr.join())

// console.log("a",myarr)
// console.log(myarr.slice(1,3))
// console.log("b",myarr)
// console.log(myarr.splice(1,3))
// console.log("c",myarr)




// // console.log(arr3)


//object///////////////////

// Create a Symbol
const mySymbol = Symbol("key");

// Define another Symbol to use as a value
const valueSymbol = Symbol("value");

// Define an object with various properties, including a Symbol key
let obj = {
    name: "aman",
    "full name": "aman shahi",
    email: "sarvesh@gmail.com",
    [mySymbol]: valueSymbol // Assign a Symbol as the value
};

console.log(obj[mySymbol])
// Access and log the type of the value associated with the Symbol key
console.log(typeof(obj[mySymbol])); // Output: symbol
