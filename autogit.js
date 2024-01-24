function findKthSmallestElement(arr, k) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Return the kth element (index k-1)
  return arr[k - 1];
}
const array = [5, 8, 2, 10, 3];
const k = 3;

const kthSmallest = findKthSmallestElement(array, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);
function findKthSmallestElement(arr, k) {
  const sortedArray = [...arr].sort((a, b) => a - b);
  return sortedArray[k - 1];
}
