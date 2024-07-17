//Activity 1: Function Expression
//  Task 3 : write a function expression in JavaScript to find the maximum of two numbers and log the result to the console:

const findMax = function (a, b) {
  const max = a > b ? a : b;
  console.log(`max number: ${max}`);
};

console.log(10, 20);


//  Task 4 : write a function expression in JavaScript to concatenate two strings and return the result


const concatenateStrings = function(str1, str2) {
  return str1 + str2;
};

// Example usage:
let result = concatenateStrings("Hello, ", "world!");
console.log(result); // Output: "Hello, world!"
