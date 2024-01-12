function findKthSmallestElement(array, k) {
  // Sort the array in ascending order
  array.sort((a, b) => a - b);
  
  // Return the kth smallest element
  return array[k - 1];
}

// Example usage
const arr = [5, 8, 2, 10, 3];
console.log(findKthSmallestElement(arr, 3)); // Output: 5
function findKthSmallestElement(array, k) {
  // Build a max heap from the array
  const maxHeap = new MaxHeap(array);
  
  // Extract the maximum element k times
  for (let i = 0; i < k - 1; i++) {
    maxHeap.extractMax();
  }
  
  // Return the kth smallest element
  return maxHeap.extractMax();
}

// Example usage
const arr = [5, 8, 2, 10, 3];
console.log(findKthSmallestElement(arr, 3)); // Output: 5
function findKthSmallestElement(array, k) {
  // Randomly choose a pivot
  const pivotIndex = Math.floor(Math.random() * array.length);
  const pivot = array[pivotIndex];
  
  const smaller = [];
  const equal = [];
  const larger = [];
  
  // Partition the array into sections based on the pivot value
  array.forEach((element, index) => {
    if (element < pivot) {
      smaller.push(element);
    } else if (element > pivot) {
      larger.push(element);
    } else {
      equal.push(element);
    }
  });
  
  // Recursive calls based on partitions
  if (k <= smaller.length) {
    return findKthSmallestElement(smaller, k);
  } else if (k <= smaller.length + equal.length) {
    return pivot;
  } else {
    return findKthSmallestElement(larger, k - smaller.length - equal.length);
  }
}

// Example usage
const arr = [5, 8, 2, 10, 3];
console.log(findKthSmallestElement(arr, 3)); // Output: 5
