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

const Mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbers = Mynums.map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(numbers);
