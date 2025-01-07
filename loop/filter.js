// // const book=[
// //     {
// //       "name": "To Kill a Mockingbird",
// //       "genre": "Fiction",
// //       "published_date": "1960-07-11",
// //       "author": "Harper Lee"
// //     },
// //     {
// //       "name": "1984",
// //       "genre": "Dystopian",
// //       "published_date": "1949-06-08",
// //       "author": "George Orwell"
// //     },
// //     {
// //       "name": "Pride and Prejudice",
// //       "genre": "Romance",
// //       "published_date": "1813-01-28",
// //       "author": "Jane Austen"
// //     },
// //     {
// //       "name": "The Great Gatsby",
// //       "genre": "Classic",
// //       "published_date": "1925-04-10",
// //       "author": "F. Scott Fitzgerald"
// //     },
// //     {
// //       "name": "Moby-Dick",
// //       "genre": "Adventure",
// //       "published_date": "1851-10-18",
// //       "author": "Herman Melville"
// //     },
// //     {
// //       "name": "The Catcher in the Rye",
// //       "genre": "Fiction",
// //       "published_date": "1951-07-16",
// //       "author": "J.D. Salinger"
// //     },
// //     {
// //       "name": "Harry Potter and the Sorcerer's Stone",
// //       "genre": "Fantasy",
// //       "published_date": "1997-06-26",
// //       "author": "J.K. Rowling"
// //     },
// //     {
// //       "name": "The Lord of the Rings",
// //       "genre": "Fantasy",
// //       "published_date": "2000-07-29",
// //       "author": "J.R.R. Tolkien"
// //     },
// //     {
// //       "name": "The Hobbit",
// //       "genre": "Fantasy",
// //       "published_date": "1937-09-21",
// //       "author": "J.R.R. Tolkien"
// //     },
// //     {
// //       "name": "Animal Farm",
// //       "genre": "Dystopian",
// //       "published_date": "1945-08-17",
// //       "author": "George Orwell"
// //     }
// //   ]


// //   let userbooks=book.filter((bk)=>bk.genre==="Fantasy")
// //   userbooks=book.filter((bk)=>bk.published_date<="2000-04-06"&&bk.genre==="Fantasy")

// //   console.log(userbooks)

// //REDUCe

// let arr=[1,2,3,4,5,6,7,8]

// let initialvalue=0
// let sumofArr=arr.reduce((acc,current)=>(acc+current),
// initialvalue)
// console.log(sumofArr)

// const numbers = [5, 12, 8, 20, 7];

// // Use filter to get numbers <= 10
// const filteredNumbers = numbers.filter(num => num + 10);

// console.log(filteredNumbers); // Output: [5, 8, 7]



// Problem 1:
// From an array of numbers, create a new array containing only the even numbers.

// const numbers = [3, 7, 2, 8, 1, 4, 6];
// const evenNumber=numbers.filter((num)=>num%2==0)
// console.log(evenNumber)


// //Problem:2
// // Transform an array of numbers by multiplying each number by 3.
// const numbers = [1, 2, 3, 4, 5];
// const newNumber=numbers.map((num)=>num*3)
// console.log(newNumber)

// // Problem 3:
// // Extract all strings that have more than 5 characters from an array.

// const words = ["apple", "banana", "kiwi", "grapefruit", "pear"];
// const newWords=words.filter((word)=>word.length>=5)
// console.log(newWords)

// Problem 4:
// From an array of objects, extract the name property from each object into a new array.


// Problem 5:
// Create a new array containing only the numbers greater than 50.
// const numbers = [20, 55, 30, 75, 90, 15];

// const greaterFifty=numbers.filter(item=>item>50)
// console.log(greaterFifty)

// Problem 6:
// Transform an array of strings by converting each string to uppercase.

// const words = ["hello", "world", "javascript", "map", "filter"];
// const upercase=words.map((word)=>word.toUpperCase())
// console.log(upercase)


// // Problem 9:
// // Filter out all the words that start with the letter "a" from an array.

// const words = ["apple", "banana", "avocado", "grape", "kiwi"];
// const newWords=words.filter((word)=>word[0]==="a")
// console.log(newWords)


// // Problem 10:
// // Create a new array containing the ages of users older than 30.

// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 35 },
//     { name: "Charlie", age: 30 },
//     { name: "David", age: 40 },
//   ];

//   const newUser=users.filter((word)=>word.age>=30)
//   console.log(newUser)



// Here are 5 challenging problems that require a mix of creativity and understanding of map, filter, or even a combination of both. These problems will push you to think about how to process arrays effectively.

// Problem 1: Transform and Filter
// Given an array of products, create a new array of product names where the price is greater than $50. Convert the names to uppercase.

// const products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Mouse", price: 25 },
//     { name: "Keyboard", price: 75 },
//     { name: "Monitor", price: 150 },
//     { name: "USB Cable", price: 10 },
// ];

// const newproduct = products.filter(item => item.price >= 50).map(item => ({ name: item.name.toUpperCase(), price: item.price }))
// console.log(newproduct)



// Problem 2: Nested Data Transformation
// Given an array of users, extract the names of users who have at least one completed task.
// debugger
// const users = [

//     {
//       name: "Alice",
//       tasks: [
//         { title: "Task 1", completed: false },
//         { title: "Task 2", completed: true },
//       ],
//     },
//     {
//       name: "Bob",
//       tasks: [
//         { title: "Task 1", completed: false },
//         { title: "Task 2", completed: false },
//       ],
//     },
//     {
//       name: "Charlie",
//       tasks: [
//         { title: "Task 1", completed: true },
//         { title: "Task 2", completed: true },
//       ],
//     },
//   ];

//   const newUser=users.filter((user)=>user.tasks.find(task=>task.completed)).map(item=>item.name)
//    console.log(newUser)


// Problem 3: Grouped Data Transformation
// Given an array of student objects, create a new array containing only the names of students who scored above 75 in both math and science.
// const students = [
//     { name: "Alice", scores: { math: 80, science: 90 } },
//     { name: "Bob", scores: { math: 70, science: 85 } },
//     { name: "Charlie", scores: { math: 85, science: 60 } },
//     { name: "David", scores: { math: 90, science: 95 } },
//   ];
  

//   const newStudents = students
//   .filter((student) => student.scores.math>75&&student.scores.science>75)
//   .map((item) => item.name);
//   console.log(newStudents)



// Problem 5: Multi-Step Transformation
// Given an array of employee objects, create a new array of strings in the format "Employee Name (Department)" for employees who have worked for more than 5 years.



  
// const employees = [
//     { name: "Alice", department: "HR", yearsWorked: 3 },
//     { name: "Bob", department: "Engineering", yearsWorked: 7 },
//     { name: "Charlie", department: "Finance", yearsWorked: 5 },
//     { name: "David", department: "Engineering", yearsWorked: 10 },
//   ];
  

//   const newEmploye=employees.filter(employe=>employe.yearsWorked>5).map(item=>({name:item.name,department:item.department}))
//   console.log(newEmploye)

// const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// // Step 1: Flatten the array
// const flatArray = nestedArray.flat();

// // Step 2: Filter out the even numbers
// const evenNumbers = flatArray.filter(item => item % 2 === 0);

// // Step 3: Sum the even numbers
// const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);

// console.log(sum); // Output: 30


// Problem 1: Flatten and Sum Nested Arrays
// You have an array of nested arrays containing numbers. Use map and filter to flatten the array and then sum up all the even numbers.
// const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const newarr=nestedArray.flat();
// let filternumer=newarr.filter(item=>item%2===0)
// let add=filternumer.reduce((acc,curr)=>acc+curr,0)
// console.log(add)

// Problem 2: Create a Student Report Card
// You have an array of student objects. Each student has a name and a list of scores for different subjects. You need to create a report card for each student where the report card includes the name, the average score, and a status based on whether the average score is above 60.

// const students = [
//     { name: "Alice", scores: [90, 80, 85] },
//     { name: "Bob", scores: [60, 50, 55] },
//     { name: "Charlie", scores: [70, 75, 80] },
//   ];

// const report=students.map(student=>{
//     const totalscore=Object.values(student.scores).reduce((acc,curr)=>acc+curr,0)
//     const average=totalscore/Object.values(student.scores).length
//     const status=[average].filter(score=>score>60).length>0?"pass":"fail"
//     return{
//         name:student.name,
//         averageScore:average,
//         status:status
//     }
// })
// console.log(report)


// Problem 3: Group Items by Category
// You have an array of products, each with a name and a category.
//  Use map and filter to group the products by category, returning an object where the keys 
// are categories and the values are arrays of product names.
// 
let products = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Phone', category: 'Electronics' },
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Shoes', category: 'Clothing' },
    { name: 'Washing Machine', category: 'Home Appliances' }
  ];
  
  // {
  //   Fruit : ["Apple", "Banana"],
  //   Vegetable: ["Carrot", "Cucumber"],
  //   Dairy: ["Milk"]
  // }
  


  // Group products by category using reduce
  // const groupedProducts = products.reduce((acc, product) => {
  //   // If the category doesn't exist in the accumulator, initialize it as an empty array
  //   if (!acc[product.category]) {
  //     acc[product.category] = [];
  //   }
  //   // Push the product name to the corresponding category array
  //   acc[product.category].push(product.name);
  //   return acc;
  // }, {});
  
  // console.log(groupedProducts);
  


  let uniqueCategories = [...new Set(products.map(product => product.category))];

console.log(uniqueCategories);

  // console.log(uniqueCategories)
