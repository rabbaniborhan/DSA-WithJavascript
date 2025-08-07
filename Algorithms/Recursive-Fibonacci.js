function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(10));

// 🧠 Big O Complexity
// Time Complexity: O(2^n) → exponential
// Because it splits into 2 recursive calls at each level.

// Space Complexity: O(n) → due to the recursive call stack.
