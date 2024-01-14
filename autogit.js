function findKthSmallestElement(arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}
const array = [8, 6, 2, 11, 5, 9];
const k = 3;
const kthSmallest = findKthSmallestElement(array, k);

console.log(kthSmallest); // Output: 6
