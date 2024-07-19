//task 5
//create a nested object respresenting a library with properties like name
//and book ( an array of book object) and log the library object to the console

let library = {
  name: "My Library",
  books: [
    {
      title: "The Guide",
      author: "R. K. Narayan",
      year: "1958",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: "1960",
    },
    {
      title: "1984",
      author: "George Orwell",
      year: "1949",
    },
  ],
  printBooks: function () {
    console.log(`Books in ${this.name}:`);
    this.books.forEach((book) => {
      console.log(`${book.title} by ${book.author} (${book.year})`);
    });
  },
};

library.printBooks();

// task 6
// access tand log the name of library and the title of all the books in the libaray
console.log("Name of library is", library.name);
library.books.forEach((book) => {
  console.log(`title of book is`, book.title);
});
