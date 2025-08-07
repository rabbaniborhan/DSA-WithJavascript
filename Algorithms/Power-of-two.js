function isPowerOfTwoBitWise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}
function isPowerOfTwo(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(18)); // false
console.log(isPowerOfTwoBitWise(16)); // true
console.log(isPowerOfTwoBitWise(18)); // false

// ✅ Big O:
// Time Complexity: O(log n)
// ➤ Each iteration divides n by 2, so it takes log n steps.
// Space Complexity: O(1)
// ➤ No extra memory is used, only a few variables.

// ✅ Big O:
// Time Complexity: O(1)
// ➤ Bitwise operations are constant time.
// Space Complexity: O(1)
