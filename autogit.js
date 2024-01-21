function mergeSort(array) {
  // Base case: if the array is empty or has only one element, it is already sorted
  if (array.length <= 1) {
    return array;
  }

  // Split the array into two halves
  const middleIndex = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIndex);
  const rightHalf = array.slice(middleIndex);

  // Recursively sort the two halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const merged = [];

  // Compare the elements of the two arrays and add them to the merged array in order
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  // Add any remaining elements from the left and right arrays
  return merged.concat(left, right);
}

// Example usage:
const unsortedArray = [8, 3, 1, 5, 2, 7, 4, 6];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
