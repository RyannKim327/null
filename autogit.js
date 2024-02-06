function findKthSmallestElement(array, k) {
  // Step 1: Sort the array in ascending order
  array.sort(function(a, b) {
    return a - b; // Sort numbers in ascending order
  });

  // Step 2: Retrieve the kth smallest element
  return array[k - 1];
}

// Testing the function
const arr = [7, 2, 9, 1, 5];
const k = 3;
const kthSmallest = findKthSmallestElement(arr, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);
