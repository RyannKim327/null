function findKthSmallestElement(array, k) {
  // Sort the array in ascending order
  array.sort((a, b) => a - b);

  // Return the kth smallest element
  return array[k - 1];
}

// Example usage
const array = [7, 2, 9, 1, 6, 3];
const k = 3;
const kthSmallestElement = findKthSmallestElement(array, k);
console.log(kthSmallestElement);  // Output: 3
function findKthSmallestElement(array, k) {
  const sortedArray = array.slice().sort((a, b) => a - b);
  return sortedArray[k - 1];
}
