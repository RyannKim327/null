function mergeSort(array) {
  // Base case: if the array is empty or has only one element, it is already sorted
  if (array.length <= 1) {
    return array;
  }
  
  // Find the middle index of the array
  const middle = Math.floor(array.length / 2);
  
  // Split the array into two halves
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  
  // Recursively call mergeSort on the left and right halves
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);
  
  // Merge the sorted halves
  return merge(leftSorted, rightSorted);
}
function merge(left, right) {
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  // Compare elements from both arrays and add the smaller one to the merged array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  // Add the remaining elements from the left array
  while (leftIndex < left.length) {
    mergedArray.push(left[leftIndex]);
    leftIndex++;
  }

  // Add the remaining elements from the right array
  while (rightIndex < right.length) {
    mergedArray.push(right[rightIndex]);
    rightIndex++;
  }
  
  return mergedArray;
}
const arr = [5, 9, 2, 1, 6, 3, 8, 4, 7];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
