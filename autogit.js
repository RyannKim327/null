function findKthSmallestElement(arr, k) {
  // Sort the array in ascending order
  arr.sort(function(a, b) {
    return a - b;
  });

  // Access the kth element
  if (k > 0 && k <= arr.length) {
    return arr[k - 1];
  } else {
    return "Invalid input";
  }
}

// Example usage
const array = [12, 5, 7, 8, 2];
const k = 3;
const kthSmallest = findKthSmallestElement(array, k);

console.log(kthSmallest); // Output: 7
