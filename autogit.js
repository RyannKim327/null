function mergeSort(arr) {
  // Base case: if the array is empty or contains only 1 element, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  // Recursively sort the two halves
  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge the two arrays by comparing the elements
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Append remaining elements of the left array (if any)
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // Append remaining elements of the right array (if any)
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Example usage:
const arr = [8, 3, 1, 5, 2, 4, 7, 6];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
