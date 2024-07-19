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

//task 7
//add a method to the book object that use the this keyword to return a string with the book title and year and log the result of calling this method
book.logInfo();
