function mergeSort(arr) {
  // Base case: if the array is empty or has only one element, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle point of the array
  const middle = Math.floor(arr.length / 2);

  // Divide the array into two halves
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort the two halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the two sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays and push the smaller one into the result
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Push remaining elements from the left array, if any
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  // Push remaining elements from the right array, if any
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

// Example usage:
const arr = [8, 5, 2, 9, 5, 6, 3];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
