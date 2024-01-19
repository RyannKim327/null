function findKthSmallest(arr, k) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Return the kth element from the sorted array
  return arr[k - 1];
}
const array = [5, 2, 8, 10, 1, 9];
const k = 3;

const kthSmallest = findKthSmallest(array, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);
The 3rd smallest element is: 5
function findKthSmallest(arr, k) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  return sortedArr[k - 1];
}
