function mergeSort(arr) {
  // Base case: if the array is empty or contains only one element, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }
  
  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);
  
  // Recursively sort the two halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);
  
  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  // Compare elements from both arrays and push the smaller element to the result array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  // Push any remaining elements from the left and right arrays
  while (leftIndex < left.length) {
    mergedArr.push(left[leftIndex]);
    leftIndex++;
  }
  
  while (rightIndex < right.length) {
    mergedArr.push(right[rightIndex]);
    rightIndex++;
  }
  
  return mergedArr;
}

// Example usage:
const arr = [5, 3, 8, 4, 2, 1, 6, 7];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
