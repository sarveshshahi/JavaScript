let arr1=[1,2,3,4,5,6]
let arr2=["hitesh","sarvesh","rohan"];
let arr3=new Array(1,2,3,4,5,6)

//instert and remove element from end
// let arr=arr1;
// arr.push(3)
// arr.push(4)
// arr.pop();
// console.log(arr);
// console.log(arr1);


// //add element start and remove start but not a good pratice because all arrays element shift is not good condition because if we are using undhift and shift our machine get over loader..
// arr.unshift(1)
// console.log(arr)
// arr.shift()
// console.log(arr)

//join//

const newArr =arr1.join()

console.log(arr1);
console.log(newArr)
console.log(typeof newArr)


console.log("A" ,arr1);
const myn1=arr1.slice(1,3)
console.log(myn1)


console.log("B",arr1)
const  myn2=arr1.splice(1,3);
console.log(myn2)
console.log("c" ,arr1);




