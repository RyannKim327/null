function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort the two halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge the two arrays into a single sorted array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate the remaining elements (if any)
  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
const arr = [5, 2, 9, 1, 7, 6, 4, 8, 3];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
