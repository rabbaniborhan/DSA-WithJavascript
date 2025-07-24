// An algorithm in JavaScript is a step-by-step set of instructions written in code to solve a specific problem.
//  In JavaScript, algorithms are often written as functions that perform tasks like sorting, searching, or calculating.

function add(a, b) {
  return a + b;
}
// This is a simple algorithm to add two numbers.

// Time and space complexity are ways to measure the efficiency of an algorithm.

//  **Time Complexity**
// It describes **how the time** taken by an algorithm **grows with the size of the input**.
function printNumbers(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
} //  Time Complexity: O(n) – because it runs n times.

//  **Space Complexity**
// It measures **how much memory (space)** an algorithm uses with input size
function makeArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
} // Space Complexity: O(n) – because it creates an array of size n

// | Complexity |      Meaning      |            Example               |
// |    ---     |        ---        |              ---                 |
// | O(1)       | Constant time     | Accessing an array element       |
// | O(n)       | Linear time       | Loop through an array            |
// | O(n²)      | Quadratic time    | Nested loops                     |
// | O(log n)   | Logarithmic time  | Binary search                    |
// | O(n log n) | Linearithmic time | Merge sort, Quick sort (best/avg)|
