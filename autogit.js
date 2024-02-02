function mergeSort(arr) {
  // Base case: if the array is empty or contains only one element, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index of the array
  const mid = Math.floor(arr.length / 2);

  // Divide the array into two halves
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  // Recursively apply mergeSort on the left and right halves
  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  // Merge the sorted left and right halves
  return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(leftArr, rightArr) {
  let result = [];

  // Compare the elements of the left and right arrays, and add the smallest element to the result array
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }

  // Add any remaining elements (if there are any) from the left and right arrays
  return [...result, ...leftArr, ...rightArr];
}

// Example usage:
const unsortedArray = [8, 4, 2, 9, 5, 1, 6, 3, 7];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
