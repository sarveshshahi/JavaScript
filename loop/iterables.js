// // let num=[100,200,300]
// // let iter=num[Symbol.iterator]();
// // console.log(iter.next())          //{ value: 100, done: false }
// // console.log(iter.next())          //{ value: 200, done: false }
// // console.log(iter.next())          //{ value: 300, done: false }
// // console.log(iter.next())          //{ value: undefiend, done: true}
// // //note when value is present the show done==>false if value is not present data ==>true

// let a="sarvesh shahi"
// // for(let char of a){
// //     console.log(char);
// // }
// let b=a[Symbol.iterator]();
// let result=b.next()

// while(!result.done){
//     result=b.next()
//     console.log(result)
// }

let numberiterator=function(arr){
    console.log(arr)
    let Nextnum=0
    return{
        next(){
            if(Nextnum<arr.length){
                return{
                    value:arr[Nextnum++],
                    done:false
                }
            }
            else{
                return{
                   
                    done:true
                }
            }
          
        }
    }
}

let nums=[100,200,300];
let numbers=numberiterator(nums)
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
