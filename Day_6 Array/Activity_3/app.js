



const arr = new Array(1, 2, 3, 4, 5);
console.log(arr);





// Task 7
// use the map method to craete a new arary where each number is doubled and log the new array
const newArr = [];
arr.map((element) => {
  newArr.push(element * 2);
});
console.log(newArr);

//Task 8
//use the filter method to craete a new array with only even numbers and log the new aray
function even(num) {
  return num % 2 == 0;
}
let array = new Array(1, 2, 3, 4, 5, 6);
let newarray = array.filter(even);
console.log(newarray);

//Task 9
//use the reduce method to calcuate the sum of all numbers in the array and log the result
const add = arr.reduce((accumelator, current) => {
  accumelator += current;
  return accumelator;
});

console.log(add);
