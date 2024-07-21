// Task 8: use enhanced object literal to crate an object with method and properties and log the object to the console
const name = "Adnan";
const age = 30;

const person = {
  name,
  age,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

console.log(person);
console.log(person.greet());

// Task 9: create an object with computed property names based on varible and log the object to the console

const key1 = "firstName";
const key2 = "lastName";

const persons = {
  [key1]: "John",
  [key2]: "Doe",
};

console.log(persons);
s;
