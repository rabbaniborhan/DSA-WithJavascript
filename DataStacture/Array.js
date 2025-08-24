//One-Dimensional Array → সাধারণ list

// let arr = [10, 20, 30];

//Two-Dimensional Array → Matrix / Grid
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Array creation
let arr = [10, 20, 30, 40, 50];

// Access
console.log(arr[2]); // 30

// Update
arr[1] = 25;

// Insert at end
arr.push(60);

// Delete last element
arr.pop();

// Search (linear)
let index = arr.indexOf(40);

console.log(arr, "Index of 40:", index);
