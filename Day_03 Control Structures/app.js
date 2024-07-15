// Activity-1
// Task-1
let a = -85;
if (a < 0) {
  console.log("Number is negative");
} else if (a > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is zero");
}
// Task-2
let age = 18;
if (age >= 18) {
  console.log("Elgible");
} else {
  console.log("Not Eligible");
}

//Activity-2
let x = 0;
let y = 97;
let z = 21;
if (x > y && x > z) {
  console.log("x is greater");
} else if (y > z && y > x) {
  console.log("y is greater");
} else {
  console.log("z is greater");
}

//Activity-3
let num = 2;
switch (num) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Write the number from 1 to 7");
}

let score = 25;
switch (true) {
  case score > 80 && score <= 100:
    console.log("Grade: A");
    break;
  case score > 60 && score <= 80:
    console.log("Grade: B");
    break;
  case score > 40 && score <= 60:
    console.log("Grade: C");
    break;
  case score > 33 && score <= 40:
    console.log("Grade: D");
    break;
  case score > 0 && score < 33:
    console.log("Grade: F");
    break;
  default:
    console.log("Score is out of range");
}

//Activity -4
let n = 44;
n % 2 == 0 ? console.log("Even") : console.log("Odd");

//Activity -5
let year = 5000;
if (year % 4 == 0) {
  if (year % 100 != 0) {
    console.log("Leap Year");
  } else if (year % 400 == 0) {
    console.log("Leap Year");
  } else {
    console.log("Not Leap Year");
  }
} else {
  console.log("Not a Leap Year");
}
