// Merge two sorted arrays
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Push remaining elements from the left array
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // Push remaining elements from the right array
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Perform bottom-up merge sort iteratively
function mergeSortIterative(array) {
  const n = array.length;
  let blockSize = 1;

  while (blockSize < n) {
    let left = 0;

    while (left + blockSize < n) {
      const mid = left + blockSize - 1;
      const right = Math.min(left + 2 * blockSize - 1, n - 1);
      const merged = merge(
        array.slice(left, mid + 1),
        array.slice(mid + 1, right + 1)
      );
      array.splice(left, merged.length, ...merged);
      left = right + 1;
    }

    blockSize *= 2;
  }

  return array;
}

// Example usage:
const arr = [9, 5, 1, 4, 3, 8, 6, 2, 7];
const sortedArr = mergeSortIterative(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
