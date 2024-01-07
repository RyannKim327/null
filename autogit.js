function mergeSort(array) {
  // Base case: Return if array length is less than or equal to 1
  if (array.length <= 1) {
    return array;
  }

  // Divide the array into two halves
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursive call to mergeSort for both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let merged = [];

  // Compare the first elements of the left and right halves,
  // and push the smaller element into the merged array
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  // Concatenate the remaining elements of the non-empty half
  return merged.concat(left, right);
}

// Example usage:
const unsortedArray = [5, 2, 6, 1, 3, 9];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);  // Output: [1, 2, 3, 5, 6, 9]
