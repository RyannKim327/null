function mergeSort(array) {
  // Base case: if the array is empty or has only one element, it is already sorted
  if (array.length <= 1) {
    return array;
  }

  // Find the middle of the array
  const mid = Math.floor(array.length / 2);

  // Divide the array into two halves
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  // Recursively sort the two halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from the left and right arrays and add them to the result array in ascending order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add any remaining elements from the left and right arrays to the result array
  result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

  return result;
}

// Example usage:
const array = [8, 4, 2, 9, 5, 1, 6, 3, 7];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
