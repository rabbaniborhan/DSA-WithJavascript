function countingSort(arr) {
  if (arr.length === 0) return arr;

  // Step 1: Find min and max values
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  // Step 2: Create count array
  let count = new Array(max - min + 1).fill(0);

  // Step 3: Count each element
  for (let num of arr) {
    count[num - min]++;
  }

  // Step 4: Build sorted array
  let sortedArr = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      sortedArr.push(i + min);
      count[i]--;
    }
  }

  return sortedArr;
}

// Example
console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));
// Output: [1, 2, 2, 3, 3, 4, 8]
