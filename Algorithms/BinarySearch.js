const binarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[midIndex] === target) {
      return midIndex;
    } else if (arr[midIndex] < target) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  return -1;
};

const numbers = [2, 4, 6, 8, 10, 12, 14];
const result = binarySearch(numbers, 10);
console.log(result);

// 📈 Big O Time and Space Complexity
// Operation	Complexity
// Time	          O(log n)
// Space	       O(1)
