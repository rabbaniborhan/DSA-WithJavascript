function bucketSort(arr, bucketSize = 5) {
  if (arr.length === 0) return arr;

  // 1. Find min and max
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  // 2. Calculate bucket count
  let bucketCount = Math.floor((max - min) / bucketSize) + 1;
  let buckets = Array.from({ length: bucketCount }, () => []);

  // 3. Distribute numbers into buckets
  for (let num of arr) {
    let bucketIndex = Math.floor((num - min) / bucketSize);
    buckets[bucketIndex].push(num);
  }

  // 4. Sort each bucket and combine
  return buckets.flatMap((bucket) => bucket.sort((a, b) => a - b));
}

// Example
console.log(bucketSort([42, 32, 33, 52, 37, 47, 51]));
// Output: [32, 33, 37, 42, 47, 51, 52]
