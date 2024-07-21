// Task 3: use array destructuring to extract the first and second element from an array of number and log them to the console

const numbers = [10, 20, 30, 40, 50];
const [first, second] = numbers;

console.log(first); // Output: 10
console.log(second); // Output: 20

// Task 4: use object destructuring to extract the tittle and author from a book object and log them to the console

const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};

const { title, author } = book;

console.log(title); // Output: To Kill a Mockingbird
console.log(author); // Output: Harper Lee
