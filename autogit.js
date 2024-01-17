function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursive calls to mergeSort to sort the two halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge the left and right arrays into the result array in ascending order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate the remaining elements in the left or right array
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const arr = [5, 1, 4, 2, 8];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 4, 5, 8]
