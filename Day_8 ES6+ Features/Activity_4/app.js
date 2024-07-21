// Task 7: write a function that take two parameter and return their prodcut with the second parameter having a default value of 1 log the result of calling this function with and without the second parameter

function multiply(a, b = 1) {
  return a * b;
}

const result1 = multiply(5, 3);
const result2 = multiply(5);

console.log(result1); // Output: 15
console.log(result2); // Output: 5
