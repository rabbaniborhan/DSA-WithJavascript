// Big O in Objects

const person = {};

// O(1) - Insert
person.name = "John";

// O(1) - Access
console.log(person.name); // "John"

// O(1) - Remove
delete person.name;

// O(n) - Search (by value)
for (let key in person) {
  if (person[key] === "John") {
    console.log("Found John");
  }
}

// O(n) - Get all keys or values
const keys = Object.keys(person); // O(n)
const values = Object.values(person); // O(n)

// Big O in Arrays
const numbers = [1, 2, 3, 4, 5];

// O(1) - Insert at end
numbers.push(6);

// O(1) - Remove at end
numbers.pop();

// O(n) - Insert at start
numbers.unshift(0);

// O(n) - Remove at start
numbers.shift();

// O(1) - Access by index
console.log(numbers[2]); // 3

// O(n) - Search by value
for (let num of numbers) {
  if (num === 3) {
    console.log("Found 3");
  }
}

// O(n) - Loop through
numbers.forEach((num) => console.log(num));

// O(n) - Slice (copy part of array)
const part = numbers.slice(1, 3);

// O(n) - Splice (insert/remove in middle)
numbers.splice(2, 0, 99);

// Summary (In Code Comments)

// OBJECTS
// Insert, Access, Delete by key — O(1)
// Search by value or get keys/values — O(n)

// ARRAYS
// push, pop — O(1)
// shift, unshift, splice, slice — O(n)
// access by index — O(1)
// search, loop — O(n)
