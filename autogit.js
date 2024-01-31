function findKthSmallest(arr, k) {
  // Sort the array in ascending order
  arr.sort(function(a, b) {
    return a - b;
  });

  // Return the kth element
  return arr[k - 1];
}
const array = [5, 2, 8, 3, 1, 9, 4];
const k = 3;

const kthSmallest = findKthSmallest(array, k);
console.log(kthSmallest); // Output: 3
