const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums=myNum.filter((num)=>num>4)
// console.log(newNums)

//if we use filter under scope it is medtrory to user return....
// const newUser=myNum.filter((nums)=>{
//     return nums>4
// })
// console.log(newUser)

///if we user for each loop for return

// const newnums=[]

// myNum.forEach((nums)=>{
//     if(nums>4){
//         newnums.push(nums)

//     }

// })
// console.log(newnums)

const books =[
    {
      "name": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "year": 1960,
      "genre": "Historical Fiction"
    },
    {
      "name": "1984",
      "author": "George Orwell",
      "year": 1949,
      "genre": "Science Fiction"
    },
    {
      "name": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "year": 1925,
      "genre": "Historical Fiction"
    },
    {
      "name": "Pride and Prejudice",
      "author": "Jane Austen",
      "year": 1813,
      "genre": "Romance"
    },
    {
      "name": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "year": 1951,
      "genre": "Literary Fiction"
    },
    {
      "name": "Harry Potter and the Philosopher's Stone",
      "author": "J.K. Rowling",
      "year": 1997,
      "genre": "Fantasy"
    },
    {
      "name": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "year": 1954,
      "genre": "Fantasy"
    },
    {
      "name": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "year": 1937,
      "genre": "Fantasy"
    },
    {
      "name": "Animal Farm",
      "author": "George Orwell",
      "year": 1945,
      "genre": "Political Satire"
    },
    {
      "name": "The Da Vinci Code",
      "author": "Dan Brown",
      "year": 2003,
      "genre": "Historical Fiction"
    },
    {
      "name": "The Alchemist",
      "author": "Paulo Coelho",
      "year": 1988,
      "genre": "Historical Fiction"
    },
    {
      "name": "Jane Eyre",
      "author": "Charlotte Brontë",
      "year": 1847,
      "genre": "Historical Fiction"
    },
    {
      "name": "The Adventures of Huckleberry Finn",
      "author": "Mark Twain",
      "year": 1884,
      "genre": "Historical Fiction"
    },
    {
      "name": "Brave New World",
      "author": "Aldous Huxley",
      "year": 1932,
      "genre": "Science Fiction"
    },
    {
      "name": "The Chronicles of Narnia",
      "author": "C.S. Lewis",
      "year": 1950,
      "genre": "Fantasy"
    },
    {
      "name": "The Picture of Dorian Gray",
      "author": "Oscar Wilde",
      "year": 1890,
      "genre": "Historical Fiction"
    },
    {
      "name": "Gone with the Wind",
      "author": "Margaret Mitchell",
      "year": 1936,
      "genre": "Historical Fiction"
    },
    {
      "name": "Moby-Dick",
      "author": "Herman Melville",
      "year": 1851,
      "genre": "Historical Fiction"
    },
    {
      "name": "The Hunger Games",
      "author": "Suzanne Collins",
      "year": 2008,
      "genre": "Science Fiction"
    },
    {
      "name": "A Brief History of Time",
      "author": "Stephen Hawking",
      "year": 1988,
      "genre": "Mathematics"
    },
    {
      "name": "The Code Book",
      "author": "Simon Singh",
      "year": 1999,
      "genre": "Mathematics"
    },
    {
      "name": "The Man Who Knew Infinity",
      "author": "Robert Kanigel",
      "year": 1991,
      "genre": "Mathematics"
    },
    {
      "name": "Longitude",
      "author": "Dava Sobel",
      "year": 1995,
      "genre": "Mathematics"
    },
    {
      "name": "Fermat's Enigma",
      "author": "Simon Singh",
      "year": 1997,
      "genre": "Mathematics"
    },
    {
      "name": "A Short History of Nearly Everything",
      "author": "Bill Bryson",
      "year": 2003,
      "genre": "Science"
    },
    {
      "name": "Cosmos",
      "author": "Carl Sagan",
      "year": 1980,
      "genre": "Science"
    },
    {
      "name": "Sapiens: A Brief History of Humankind",
      "author": "Yuval Noah Harari",
      "year": 2011,
      "genre": "Historical"
    },
    {
      "name": "The Structure of Scientific Revolutions",
      "author": "Thomas S. Kuhn",
      "year": 1962,
      "genre": "Science"
    },
    {
      "name": "The Elegant Universe",
      "author": "Brian Greene",
      "year": 1999,
      "genre": "Science"
    },
    {
      "name": "The Immortal Life of Henrietta Lacks",
      "author": "Rebecca Skloot",
      "year": 2010,
      "genre": "Science"
    }
  ];

  let mybooks=books.filter((bk)=> bk.genre==="Historical Fiction")
//   console.log(mybooks)

  mybooks=books.filter((bk)=>{ 
    return bk.year>=1988 && bk.genre==="Historical Fiction"
})
  console.log(mybooks)