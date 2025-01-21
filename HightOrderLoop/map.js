// const nums=[1,2,3,4,5,6,7,8,9]

// const newnums=nums.map((nums)=>{
//     return (nums+10)
// })
// console.log(newnums)

//if we want to do this for each

// const mynums=[]
// nums.forEach((num)=>{
//    let add=num+10
//    mynums.push(add)
// })
// console.log(mynums)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////chaining//////////////////////////////////////////////////////////////////////////

// const Mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const numbers = Mynums.map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 40);

// console.log(numbers);


// const names = ["aman", "sarvesh", "harish", "ram", "gita", "sita"];

// const newNames=names.map((name,index)=>(
//   `${index}.${name}`
// ))
// console.log(newNames)

// const numbers = [10, 20, 30];
// const newnumbers=numbers.map((number,index)=>(
//   `index:${index}, value:${number}`
// ))
// console.log(newnumbers)

const names=["aman","sita","gita","Rohan","RAMEsh"]
const search="r"

const newname=names.filter((item)=>(item.toLowerCase().includes(search.toLowerCase())))
console.log(newname)
