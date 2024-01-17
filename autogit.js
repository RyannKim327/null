function findKthSmallestElement(arr, k) {
  if (k < 1 || k > arr.length) {
    return null;
  }
  
  arr.sort(function(a, b) {
    return a - b;
  });
  
  return arr[k - 1];
}

// Example usage:
const array = [5, 2, 8, 3, 1];
const k = 3;
const kthSmallest = findKthSmallestElement(array, k);
console.log(kthSmallest); // Output: 3
