//singleton

//object literals
let symb=Symbol("Key1")

const user={
    name:"sarvesh",
    "full name":"aman shahi",
    [symb]:"mykey1",
    age:20,
    location:"Delhi",
    email:"sarveshshahi@gmail.com",
    isloggedIn:false,
    lastlogin:["monday","tuesday"],

}

// console.log(user.email)
// console.log(user["email"])
// console.log(user["full name"])
// console.log(user[symb])
// console.log(typeof(user[symb]))

user.email="aman@gamail.com"
// console.log(user.email)
// Object.freeze(user)
// user.email="sarvesh@gmail.com"
// console.log(user.email)



user.greeting=function(){
    console.log("hello js user");
}
user.greeting2=function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(user.greeting())
console.log(user.greeting2())

