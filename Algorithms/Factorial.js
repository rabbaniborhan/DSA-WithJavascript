//Factorial of n (n!) = n × (n-1) × (n-2) × ... × 1

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  console.log(result);
};

factorial(0); // 1
factorial(1); // 1
factorial(5); // 120

// Time Complexity: O(n)
// Space Complexity: O(1) (no extra space used)
