function findKthSmallest(arr, k) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Return the kth smallest element
  return arr[k - 1];
}

// Example usage
const array = [4, 2, 7, 1, 5];
const k = 3;
console.log(findKthSmallest(array, k)); // Output: 4
