//task 8 write a program to print number from 1 to 10 but skip the number 5 using the contiune statement

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

//task 9 write a program to pront number from 1 to 10 but stop the loop when the number is 7 using
//the break statement

for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
