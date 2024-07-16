//task 7 write a program to print a pattern using nested for loops

let number1 = 1;
while (number1 <= 5) {
  let number2 = 1;
  let result = "";
  while (number2 <= number1) {
    result += "*";
    number2++;
  }
  console.log(result);
  number1++;
}
