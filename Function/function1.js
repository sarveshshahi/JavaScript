// function myname(){
//     console.log("heloo aman");
// }
//  myname();  //() excute

// //add two numbers ek function create karna hai

// function addtwonumber(num1,num2){  //parameter 
//     console.log(num1+num2)

// }
// addtwonumber(2,3) //arugment

////////////////////////////////////////////////////////////
//////////////////////////////return////////////////////////
////////////////////////////////////////////////////////////

// function addtwonumbers(num1, num2){
//     let a=(num1+num2)
//     return a;
// }
// const result=addtwonumbers(2,4);
// console.log(result)]

// ${} stringintopolotion

// function loginguser(username){
//     return`${username} just logged in`
// }
// console.log(loginguser("aman"))


// function loginmsg(username){
//     if(username===undefined){
//         console.log("user name is plz enter")
//         return
//     }
//     return`${username}just login in`

// }
// console.log(loginmsg());


// function calcu(...num1){
//     return num1;
// }
// console.log(calcu(400,300,500,600))

const user={
    // username:"hitesh",
    // price:999,
    welcomemessage:function(){
        console.log(`${this.username}`)
        console.log(this)
    }
}
user.welcomemessage()
console.log(this)