// Function to heapify a subtree rooted at index i
function heapify(arr, n, i) {
  let largest = i; // Assume root is largest
  let left = 2 * i + 1; // Left child index
  let right = 2 * i + 2; // Right child index

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root, swap and heapify again
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
    heapify(arr, n, largest); // Recursively heapify
  }
}

// Heap Sort function
function heapSort(arr) {
  let n = arr.length;

  // Build max heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // One by one extract elements
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
  return arr;
}

// Example usage
console.log(heapSort([12, 11, 13, 5, 6, 7]));
