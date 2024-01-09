function mergeSort(array) {
  // Base case: if the array is empty or has only one element, return the array
  if (array.length <= 1) {
    return array;
  }
  
  // Split the array into two halves
  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);
  
  // Recursive call to mergeSort to sort the two halves
  const leftSorted = mergeSort(leftHalf);
  const rightSorted = mergeSort(rightHalf);
  
  // Merge the sorted halves
  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  let result = [];
  
  // Compare the elements of the left and right arrays and merge them in sorted order
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  
  // Append any remaining elements from the left and right arrays
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  
  return result;
}

// Example usage
const unsortedArray = [10, 2, 8, 5, 3, 9, 6, 1, 4, 7];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
