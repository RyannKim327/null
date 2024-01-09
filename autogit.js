function mergeSort(array) {
  // Base case: an array of one or no elements is already sorted
  if (array.length <= 1) {
    return array;
  }

  // Divide the array into two halves
  const middleIndex = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middleIndex);
  const rightHalf = array.slice(middleIndex);

  // Recursively sort the left and right halves
  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(leftHalf, rightHalf) {
  let resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare the elements from both halves and add the smaller element to the result
  while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
    if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
      resultArray.push(leftHalf[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(rightHalf[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate the remaining elements from the left or right half
  return resultArray.concat(leftHalf.slice(leftIndex)).concat(rightHalf.slice(rightIndex));
}

// Example usage:
const unsortedArray = [9, 5, 3, 1, 6, 8, 2, 4, 7];
console.log("Unsorted array:", unsortedArray);

const sortedArray = mergeSort(unsortedArray);
console.log("Sorted array:", sortedArray);
