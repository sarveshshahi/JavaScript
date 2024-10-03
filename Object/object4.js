// Object.create; //singloton object

// let user={} //object literals

// let mysymbol=Symbol("key")

// let Jsuser={
//     name:"sarvesh",
//     "full name":"sarvesh shahi",
//      [mysymbol]:"mykey1",
//     email:"sarveshshahi121@GamepadHapticActuator.com",
//       islogdin:false,
// }

// console.log(Jsuser.name)//its good but not best pratice
// console.log(Jsuser["email"]) //its bestpratice
// console.log(Jsuser["full name"])
// console.log(Jsuser[mysymbol])
// console.log(typeof(Jsuser[mysymbol]))

// Object.freeze(Jsuser)// for freeze the obj we cant change any things


// Jsuser.name="aman";
// console.log(Jsuser.name)

// Object.freeze(Jsuser["full name"])

// delete Jsuser["full name"]
// console.log(Jsuser)

// let myobj={
// }

// myobj.name="aman"
// myobj.email="okey its right"

// console.log(myobj)

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let user = {
//   name: "John",
//   age: 30
// };

// rl.question("What do you want to know about the user? (name/age): ", function(key) {
//   if (user[key] !== undefined) {
//     console.log(user[key]); // John (if enter "name")
//   } else {
//     console.log("Invalid key. Please enter 'name' or 'age'.");
//   }
//   rl.close();
// });


// const tinderuser={};
// tinderuser.name="aman";
// tinderuser.id="nxt222";
// tinderuser.isloggedin=false;
// console.log(tinderuser)


// const regularuser={
//     email:"aman@gmail.com",
//     fullname:{
//         username:"aman",
//         lastname:"shahi",
//         qualification:{
//             course:"betch",
//             branch:"cse",
//         }
//     }
// }

// console.log(regularuser.fullname.qualification.branch)


// const obj1={
//     1:"a",
//     2:"b",
// }

// const obj2={
//     3:"c",
//     4:"d",
// }

// const obj4={
//     5:"e",
//     6:"f",
// }

// let obj3=(Object.assign(obj1,obj2)) //(traget,source)
// console.log(obj3)

// let obj5={...obj1, ...obj2, ...obj4}


// const data=[
//     {
//         id:1,
//         name:"aman",
//     },
//     {
//         id:2,
//         name:"sita",
//     }
// ]
// console.log(data[0].id)


// const tinderuser={};
// tinderuser.name="aman";
// tinderuser.id="nxt222";
// tinderuser.isloggedin=false;

// // Object.key() to check keys

// // console.log(Object.keys(tinderuser))
// // console.log(Object.values(tinderuser)) all data in array
// // console.log(Object.entries(tinderuser))


// console.log(tinderuser.hasOwnProperty('name'))


///////////////////////////////////////////////////////////////////
/////////////////Destructring/////////////////////////////////////
//////////////////////////////////////////////////////////////////

const myobj={
    name:"aman",
    course:"javascrpit",
    price:"300",
}

let {name}=myobj;
console.log(name)

name="sarvesh";

console.log(name)

