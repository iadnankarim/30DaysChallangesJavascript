// Task 5: use the spread operator to create a new array that include all element of an existing array plus additional element and log the new array to the console

const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5, 6];

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

// Task 6: use the rest operator in a function to accept an arbitrary of argument sum them and return the result

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const result = sum(1, 2, 3, 4, 5);
console.log(result); // Output: 15
