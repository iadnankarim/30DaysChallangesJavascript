
//
const arr = new Array(1, 2, 3, 4, 5);
console.log(arr);



// Activity-5

// Task 12
//create a two dimensional array (matrix) and log the entire array to the console
let twoArr = [
  [1, 2, 3],
  [4, 5, 6],
];
combArr = [];
for (let i = 0; i < twoArr.length; i++) {
  for (let j = 0; j < twoArr[i].length; j++) {
    combArr.push(twoArr[i][j]);
  }
}
console.log(combArr);

//Task 12
//access and log a specific element from the two dimensional array

//looged element at 3rd index as its 2nd ro and 1st column
console.log(twoArr[1][0]);
