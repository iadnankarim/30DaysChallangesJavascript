//Activity 1: Function Parameter and Default Value
//  Task 7 : write a function that take two parameter and return their product provide a default value for the second parameter

const multiply = function(a, b = 1) {
  return a * b;
};


let product = multiply(5, 2);
console.log(product); // Output: 10

product = multiply(5);
console.log(product); // Output: 5 (since b defaults to 1)



//  Task 8 : write a function that takes a person name and age and return a greeting message provide a default value for the age


const greet = function(name, age = 18) {
  return `Hello, ${name}! You are ${age} years old.`;
};


let greeting = greet("Alice", 25);
console.log(greeting); // Output: "Hello, Alice! You are 25 years old."

greeting = greet("Bob");
console.log(greeting); // Output: "Hello, Bob! You are 18 years old." (since age defaults to 18)

