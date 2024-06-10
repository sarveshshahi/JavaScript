//  const myarr=[1,2,3]

//  const initialvalue=0;
//  const sumwithinitial=myarr.reduce(
//     (accumulater,currentvalue)=>accumulater+currentvalue,
//     initialvalue
//  )
//  console.log(sumwithinitial);

// const getMax = (a, b) => Math.max(a, b);

// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue,index) {
//   const returns = (accumulator + currentValue)
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer,0);


// const myarr=[2,1,8,4,5,6]

// const arr=myarr.reduce((acc,currentvalue,index)=>{
//     console.log(`acc:${acc}  currentvalue:${currentvalue} index:${index}`)
//     return acc+currentvalue
// })
// console.log(arr)


const myshopingapp=[
    {"itemname":"js",
        "itemprice":200
    },
    {"itemname":"pythone",
        "itemprice":4000
    },
    {"itemname":"c++",
        "itemprice":4900
    }
]

const pricerate=myshopingapp.reduce((acc,item)=>(acc+item.itemprice),0)
console.log(pricerate)