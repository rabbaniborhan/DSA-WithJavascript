const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

const array = [10, 20, 30, 40, 50];
console.log(linearSearch(array, 30)); // Output: 2
console.log(linearSearch(array, 60)); // Output: -1

// ✅ Space Complexity: O(1) (no extra space used)
