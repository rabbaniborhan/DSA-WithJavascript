// A sequence where:

// F(0) = 0

// F(1) = 1

// Each next number is the sum of the previous two:

// F(2) = F(1) + F(0) = 1

// F(3) = F(2) + F(1) = 2

// F(4) = F(3) + F(2) = 3

// F(5) = F(4) + F(3) = 5

// ...

// Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

//Iterative Approach (Efficient) – O(n) Time
const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib);
};

fibonacci(2); //[0,1]
fibonacci(3); //[0,1,1]
fibonacci(7); //[0,1,1,2,3,5,8]
