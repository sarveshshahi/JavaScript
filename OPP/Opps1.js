const user={
    username:"sarvesh",
    loginCount:8,
    signedit:true,

    getuserDetails:function(){
        console.log(`username ${this.username}`)
        console.log(this)
    }
}
console.log(user.username)
// console.log(user.getuserDetails())
console.log(this)

function user(username, logincount, isLoggedin){
    this.username=username
    this.logincount=logincount
    this.isLoggedin=isLoggedin
    this.greeting=function(){
        console.log(`welcome ${this.username}`)
    }
    return this
}

const userOne=new user("hitesh",12,true)

const userTwo= new user("ram",12,true)
//  console.log(userOne)
console.log(userOne.constructor)



// // fetch("https://github.com/sarveshshahi").then((repose)=>{
// //     console.log(repose)
// //     return repose
// // }).then((username)=>{
// //     console.log(username.username)
// // })

// // fetch("https://api.github.com/users/sarveshshahi").then((response)=>{
// //     return response.json()
// // }).then((data)=>{
// //     console.log(data)
// // }).catch((error)=>{
// //     console.log(error)
// // })

// let url="https://api.github.com/users/sarveshshahi"
// fetch(url,{items}).then((response)=>{
//     return response.json()

// }).then((data)=>{
//     console.log(data.name)
// })