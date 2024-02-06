function mergeSort(arr) {
  // Base case: if the array is empty or has only one element, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }
  
  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);
  
  // Recursively sort the two halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);
  
  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  // Compare elements from left and right arrays and add the smaller one to the result array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  // Add any remaining elements from the left and right arrays
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  
  return result;
}

// Example usage:
const arr = [5, 3, 8, 4, 2, 1, 6, 7];
const sortedArr = mergeSort(arr);
console.log(sortedArr);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]
