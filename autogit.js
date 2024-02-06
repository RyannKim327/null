function findKthSmallest(arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}
const array = [6, 3, 8, 2, 9, 1];
const k = 3;

const kthSmallest = findKthSmallest(array, k);
console.log(kthSmallest); // Output: 3
