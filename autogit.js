function mergeSortIterative(array) {
  const n = array.length;
  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
      const mid = Math.min(leftStart + size - 1, n - 1);
      const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);
      merge(array, leftStart, mid, rightEnd);
    }
  }
  return array;
}

function merge(array, leftStart, mid, rightEnd) {
  const left = array.slice(leftStart, mid + 1);
  const right = array.slice(mid + 1, rightEnd + 1);
  let i = 0,
    j = 0,
    k = leftStart;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      array[k] = left[i];
      i++;
    } else {
      array[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < left.length) {
    array[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    array[k] = right[j];
    j++;
    k++;
  }
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Unsorted array: ", arr);
const sortedArr = mergeSortIterative(arr);
console.log("Sorted array: ", sortedArr);
