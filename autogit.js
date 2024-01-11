function mergeSort(array) {
  // Base case: if the array is empty or contains only one element, return the array
  if (array.length <= 1) {
    return array;
  }
  
  // Find the middle index to divide the array into two halves
  const middle = Math.floor(array.length / 2);
  
  // Divide the array into two halves
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);
  
  // Recursively call mergeSort on the left and right halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);
  
  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  // Compare elements from both subarrays and merge them into the mergedArray in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  // Add remaining elements from the left subarray (if any)
  while (leftIndex < left.length) {
    mergedArray.push(left[leftIndex]);
    leftIndex++;
  }
  
  // Add remaining elements from the right subarray (if any)
  while (rightIndex < right.length) {
    mergedArray.push(right[rightIndex]);
    rightIndex++;
  }
  
  return mergedArray;
}

// Example usage:
const array = [5, 3, 8, 4, 2, 1, 6, 9, 7];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
