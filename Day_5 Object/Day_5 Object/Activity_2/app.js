//task 3
//add a method to the book object that return a sting with the book title and author and log the result of calling this method

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

console.log(book.getInfo());

//task 4
//add a method to the book object that take a parameter(year) and update  the books year property then log the updated object
book.updateYear(1111);
console.log("Updated object", book);
