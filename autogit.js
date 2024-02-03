function findKthSmallest(arr, k) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Return the kth smallest element
  return arr[k - 1];
}
const arr = [7, 2, 1, 6, 8, 5];
const k = 3;

const kthSmallest = findKthSmallest(arr, k);
console.log(`The ${k}th smallest element is ${kthSmallest}`); // Output: The 3rd smallest element is 5
function findKthSmallest(arr, k) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  return sortedArr[k - 1];
}
