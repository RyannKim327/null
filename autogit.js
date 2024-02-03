function mergeSort(array) {
  // Base case: if the array only contains one element, it is already sorted
  if (array.length <= 1) {
    return array;
  }

  // Find the middle point to split the array into two halves
  const middle = Math.floor(array.length / 2);

  // Split the array into two halves
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  // Recursively sort the two halves
  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(leftHalf, rightHalf) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both halves and add the smaller one to the result array
  while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
    if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
      result.push(leftHalf[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightHalf[rightIndex]);
      rightIndex++;
    }
  }

  // Add any remaining elements from the left half
  while (leftIndex < leftHalf.length) {
    result.push(leftHalf[leftIndex]);
    leftIndex++;
  }

  // Add any remaining elements from the right half
  while (rightIndex < rightHalf.length) {
    result.push(rightHalf[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Test the mergeSort function
const unsortedArray = [8, 3, 6, 2, 7, 1, 5, 4];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
