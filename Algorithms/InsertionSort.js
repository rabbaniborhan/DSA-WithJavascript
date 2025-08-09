const InsertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
};

console.log(InsertionSort([5, 3, 8, 4, 2]));

// 📊 Big O Complexity

//       Case                	Time Complexity                  	Explanation
// Best Case              	       O(n)	                    When array is already sorted
// Average Case	                 O(n^2)	                       Typical case
// Worst Case	                   O(n^2)	                 When array is sorted in reverse order
// Space	                         O(1)	                     In-place sorting
