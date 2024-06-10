// for (let i = 0; i < 10; i++) {
//     const element =i;
//     console.log(element) 
// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element==5){
//         console.log(" 5 is good numbe")
//     }
//     // console.log(element)
    
// }
// for (let i = 1; i <=20; i++) {
//     console.log(`outer loop ${i}`)
//   for (let j = 1; j <=10; j++) {
//     // console.log(`inner loop value ${j} and inner lopp ${i}`)
//     console.log(i+ "*" + j +'='+i*j); 
    
//   }
    
// }
 
let myarray=["flash","Batman","supperman"]
console.log(myarray.length)

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element)
    
}

for (let i = 0; i < 20; i++) {
    const element = i;
    if(i==5){
        console.log(`break the loop 5 `)
        continue
    }
    console.log(element)
   
    
}