const recursiveFactorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(5));

// 📊 Time & Space Complexity
// Time Complexity: O(n) → Because it makes n recursive calls.
// Space Complexity: O(n) → Because each recursive call is stored in the call stack.
