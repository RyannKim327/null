function findKthSmallest(arr, k) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);
  
  // Return the kth smallest element
  return arr[k - 1];
}

// Example usage
const arr = [7, 2, 1, 6, 9];
const k = 3;
const kthSmallest = findKthSmallest(arr, k);
console.log(`The ${k}th smallest element is ${kthSmallest}`);
