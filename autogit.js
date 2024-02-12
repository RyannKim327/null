function mergeSort(array) {
  // Base case: if the array is empty or only contains one element, it is already sorted
  if (array.length <= 1) {
    return array;
  }

  // Find the middle index of the array
  const middle = Math.floor(array.length / 2);

  // Divide the array into two halves
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  // Recursively call mergeSort on the left and right halves
  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(leftArray, rightArray) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and push the smaller element to the result array
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  // Push any remaining elements from the left and right arrays
  while (leftIndex < leftArray.length) {
    result.push(leftArray[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArray.length) {
    result.push(rightArray[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Example usage:
const array = [5, 3, 8, 4, 2, 1, 6];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 8]
