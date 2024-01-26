function findKthSmallest(arr, k) {
  // Check if the array is valid and k is within the array's bounds
  if (arr.length === 0 || k < 1 || k > arr.length) {
    return null;
  }
  
  // Define a helper function to partition the array
  function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left;
    
    for (let j = left; j < right; j++) {
      if (arr[j] <= pivot) {
        // Swap elements arr[i] and arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    
    // Swap elements arr[i] and pivot
    [arr[i], arr[right]] = [arr[right], arr[i]];
    
    return i;
  }
  
  // Perform the quickselect algorithm
  function quickselect(arr, left, right, k) {
    // Base case: if the subarray contains only one element, return it
    if (left === right) {
      return arr[left];
    }
  
    // Partition the array and get the position of the pivot
    const pivotIndex = partition(arr, left, right);
    
    // Determine the number of elements in the left subarray
    const numElements = pivotIndex - left + 1;
    
    // Recurse on the left subarray if k is less than the number of elements
    if (k < numElements) {
      return quickselect(arr, left, pivotIndex - 1, k);
    }
  
    // Recurse on the right subarray if k is greater than the number of elements
    if (k > numElements) {
      return quickselect(arr, pivotIndex + 1, right, k - numElements);
    }
  
    // If k equals the number of elements, we've found the kth smallest element
    return arr[pivotIndex];
  }
  
  // Call the quickselect function on the entire array
  return quickselect(arr, 0, arr.length - 1, k);
}
const arr = [7, 2, 9, 3, 1, 6];
const k = 3;

const kthSmallest = findKthSmallest(arr, k);
console.log(kthSmallest); // Output: 3
