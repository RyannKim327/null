function mergeSortIterative(array) {
  let workArray = array.slice();
  let chunkSize = 1;

  while (chunkSize < array.length) {
    let i = 0;

    while (i < array.length) {
      mergeChunks(workArray, i, chunkSize);
      i += chunkSize * 2;
    }

    chunkSize *= 2;
  }

  return workArray;
}

function mergeChunks(array, start, size) {
  const left = array.slice(start, start + size);
  const right = array.slice(start + size, start + size * 2);
  let leftIndex = 0;
  let rightIndex = 0;
  let mergedIndex = start;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      array[mergedIndex] = left[leftIndex];
      leftIndex++;
    } else {
      array[mergedIndex] = right[rightIndex];
      rightIndex++;
    }
    mergedIndex++;
  }

  while (leftIndex < left.length) {
    array[mergedIndex] = left[leftIndex];
    leftIndex++;
    mergedIndex++;
  }

  while (rightIndex < right.length) {
    array[mergedIndex] = right[rightIndex];
    rightIndex++;
    mergedIndex++;
  }
}

// Example usage:
const arr = [8, 5, 2, 9, 5, 6, 3];
console.log(mergeSortIterative(arr)); // Output: [2, 3, 5, 5, 6, 8, 9]
