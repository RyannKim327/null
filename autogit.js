function findKthSmallestElement(arr, k) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);
  
  // Return the kth smallest element
  return arr[k - 1];
}

// Example usage
const array = [4, 2, 7, 1, 9, 5];
const k = 3;

const kthSmallestElement = findKthSmallestElement(array, k);
console.log(`The ${k}th smallest element is: ${kthSmallestElement}`);
