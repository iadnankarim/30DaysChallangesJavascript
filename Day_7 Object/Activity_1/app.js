//task :1
//create an object representing a book with properties like title author and year and log the object to the console
let book = {
  title: "The Guide",
  author: "Adnan",
  year: 1958,
  getInfo: function () {
    return `${this.title} by ${this.author}`;
  },
  updateYear: function (year) {
    this.year = year;
  },
  logInfo: function () {
    console.log(`${this.title} by ${this.year}`);
  },
};
console.log("book is", book);

//task 2
//access the log and the title and author properties of the book object
const { title, author } = book;
console.log("The title is", title);
console.log("The author is", author);
