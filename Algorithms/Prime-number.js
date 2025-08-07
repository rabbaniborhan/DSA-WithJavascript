function isPrime(n) {
  if (n <= 1) return false;

  //   for (let i = 0; i < n; i++) {
  //     if(n % i ==0){
  //         return false
  //     }
  //   }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(12)); // false

// Time Complexity: O(√n)
// Space Complexity: O(1)
