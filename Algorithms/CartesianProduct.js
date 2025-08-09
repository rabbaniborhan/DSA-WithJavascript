function cartesianProduct(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
}

// Example
const a = [1, 2];
const b = ["a", "b", "c"];
console.log(cartesianProduct(a, b));
// Output: [
//   [1, 'a'], [1, 'b'], [1, 'c'],
//   [2, 'a'], [2, 'b'], [2, 'c']
// ]
