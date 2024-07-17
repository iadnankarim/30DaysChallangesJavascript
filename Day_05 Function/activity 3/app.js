//Activity 1: Arrow Function 
//  Task 5 : wwrite a arrow function that take two parameter and reutrn their product procide a default value for the second parameter


const multiply = (a, b = 1) => a * b;


let product = multiply(5, 2);
console.log(product); // Output: 10

product = multiply(5);
console.log(product); // Output: 5 (since b defaults to 1)



//  Task 6 : write a function that take a person name and age and return a greeting message provide a default value for the age



const greet = (name, age = 18) => `Hello, ${name}! You are ${age} years old.`;


let greeting = greet("Alice", 25);
console.log(greeting); // Output: "Hello, Alice! You are 25 years old."

greeting = greet("Bob");
console.log(greeting); // Output: "Hello, Bob! You are 18 years old." (since age defaults to 18)


