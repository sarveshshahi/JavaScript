// let a=10
// const b=20
// const c=30
var c=200


if(true){
    let a=10
    const b=20
    var c=30 
}

// console.log(a)
// console.log(b)
console.log(c)

 array=[1,2,2,2,3,3,4,455,3]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}



// nexsted scope


function one(){
    let username="hitesh"
    function tow(){
        // let websites="chai aur code"
        console.log(username)
    }
    // console.log(websites)
    tow()
}
one()

 
if(true){
    const username="aman"
    if(username==="aman"){
        const website="youtube"
        console.log(username+website)
    }


    // console.log(website)


}

// console.log(username)
console.log(addNumber(2))
function addNumber(num){
     return num+2
}

// console.log(addNumber(2))


const townumber=function(num){
    return num-2
}

console.log(townumber(3))

//++++++++++++++++++++++++instresting+++++++++++++++++++++++
  