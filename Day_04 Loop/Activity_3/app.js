//task 5 write a rgoram to print number from 1 to 5 using a do...white loop

let value = 1;
do {
  console.log(value);
  value++;
} while (value <= 5);

//task6 write a program to calculate the factoirial of using a do.... whilteloop

let num1 = 11;
let j = 1;
do {
  if (num1 % j == 0) {
    console.log(j, `is factorial of ${num1}`);
  }
  j++;
} while (j <= num1);
