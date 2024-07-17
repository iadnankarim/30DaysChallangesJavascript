//Activity 1: High order function Function 
//  Task 9 : write a high order function tahat take a function and a number and call the function that many time


const repeatFunction = (fn, times) => {
  for (let i = 0; i < times; i++) {
    fn();
  }
};


const sayHello = () => console.log("Hello!");

repeatFunction(sayHello, 3);
// Output:
// Hello!
// Hello!
// Hello!




//  Task 10 : write a high order function tahat take two function and value applies the first funtion to the value and then applies the second funtion to the result



const composeFunctions = (fn1, fn2, value) => fn2(fn1(value));


const addFive = (num) => num + 5;
const square = (num) => num * num;

let result = composeFunctions(addFive, square, 3);
console.log(result); // Output: 64 (since (3 + 5)^2 = 64)

result = composeFunctions(square, addFive, 3);
console.log(result); // Output: 14 (since 3^2 + 5 = 14)


