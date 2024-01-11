function findKthSmallestElement(array, k) {
  // Sort the array in ascending order
  array.sort(function(a, b) {
    return a - b;
  });

  // Access the kth element in the sorted array
  return array[k - 1];
}

// Example usage
const arr = [9, 4, 7, 1, 3, 5];
const k = 3;

const kthSmallest = findKthSmallestElement(arr, k);
console.log(kthSmallest); // Output: 4
