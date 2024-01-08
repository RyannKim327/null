function mergeSort(array) {
  // Base case: if the array is empty or has only one element, it is already sorted
  if (array.length <= 1) {
    return array;
  }

  // Split the array into two halves
  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  // Recursively sort the two halves
  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  // Merge the two sorted halves
  return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from the two arrays and add the smaller one to the result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add the remaining elements from the left array
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // Add the remaining elements from the right array
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Example usage:
const array = [9, 4, 7, 2, 1, 5, 6, 8, 3];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
