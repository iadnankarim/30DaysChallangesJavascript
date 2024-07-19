//task 8
//use a for...in loop to iterate over the properties of the book object and log each property and its value
for (const key in book) {
  console.log(book[key]);
}

//task 9
// use object.key and object.value method to log alll the key value of the book object
const keys = Object.keys(book);
const vals = Object.values(book);
console.log("Keys are :", keys);
console.log("Values are :", vals);
