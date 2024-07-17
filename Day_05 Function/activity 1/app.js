//Activity 1: Function Declaration
// wreite a  function to check if a number is even or odd and log the result to the console

const checkEvenOdd = function(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
};


checkEvenOdd(10); // Output: "10 is even"
checkEvenOdd(15); // Output: "15 is odd"



// write a function to calculate the square of a number and return the result

const calculateSquare = function(number) {
  return number * number;
};


let squareResult = calculateSquare(5);
console.log(squareResult); // Output: 25

squareResult = calculateSquare(8);
console.log(squareResult); // Output: 64
