function mergeSort(arr) {
  if (arr.length <= 1) {
    // Array has zero or one element, already sorted
    return arr;
  }
  
  // Divide the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  // Recursively sort the two halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  
  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  // Merge elements in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  // Add remaining elements from the left array
  while (leftIndex < left.length) {
    mergedArray.push(left[leftIndex]);
    leftIndex++;
  }
  
  // Add remaining elements from the right array
  while (rightIndex < right.length) {
    mergedArray.push(right[rightIndex]);
    rightIndex++;
  }
  
  return mergedArray;
}

// Example usage
const arrayToSort = [7, 2, 9, 4, 1, 5, 3, 8, 6];
const sortedArray = mergeSort(arrayToSort);
console.log(sortedArray);
