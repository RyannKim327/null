function mergeSort(arr) {
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

function merge(leftHalf, rightHalf) {
  let sortedArray = [];

  while (leftHalf.length && rightHalf.length) {
    if (leftHalf[0] < rightHalf[0]) {
      // Add the smallest element from the left to the sorted array
      sortedArray.push(leftHalf.shift());
    } else {
      // Add the smallest element from the right to the sorted array
      sortedArray.push(rightHalf.shift());
    }
  }

  // Add the remaining elements from the left and right halves (if any)
  sortedArray = [...sortedArray, ...leftHalf, ...rightHalf];

  return sortedArray;
}

// Example usage
const unsortedArray = [5, 2, 1, 7, 8, 4, 3];

console.log("Unsorted Array:", unsortedArray);
const sortedArray = mergeSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
