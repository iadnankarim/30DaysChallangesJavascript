//task 8
//use a for...in loop to iterate over the properties of the book object and log each property and its value
const library = {
  name: "adnan",
  books: [
    {
      title: "karim",
      author: "adnan",
      year: 1212,
    },
    {
      title: "karim",
      author: "adnan",
      year: 1212,
    },
    {
      title: "karim",
      author: "adnan",
      year: 1212,
    },
  ],
  printBooks: function () {
    console.log(this.name);
    this.books.forEach((book, index) => {
      console.log(`Book ${index + 1}:`);
      for (let prop in book) {
        console.log(`${prop}: ${book[prop]}`);
      }
      console.log(); // empty line for separation
    });
  },
};

library.printBooks();

//task 9
// use object.key and object.value method to log alll the key value of the book object
const keys = Object.keys(book);
const vals = Object.values(book);
console.log("Keys are :", keys);
console.log("Values are :", vals);
