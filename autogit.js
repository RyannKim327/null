function mergeSort(array) {
  let sortedArray = array;
  let size = array.length;

  for (let blockSize = 1; blockSize < size; blockSize *= 2) {
    for (let leftStart = 0; leftStart < size - blockSize; leftStart += 2 * blockSize) {
      const leftEnd = leftStart + blockSize - 1;
      const rightStart = leftStart + blockSize;
      const rightEnd = Math.min(leftStart + 2 * blockSize - 1, size - 1);
      merge(sortedArray, leftStart, leftEnd, rightStart, rightEnd);
    }
  }

  return sortedArray;
}

function merge(array, leftStart, leftEnd, rightStart, rightEnd) {
  const leftArr = array.slice(leftStart, leftEnd + 1);
  const rightArr = array.slice(rightStart, rightEnd + 1);
  const mergedArr = [];

  let i = 0;
  let j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      mergedArr.push(leftArr[i]);
      i++;
    } else {
      mergedArr.push(rightArr[j]);
      j++;
    }
  }

  while (i < leftArr.length) {
    mergedArr.push(leftArr[i]);
    i++;
  }

  while (j < rightArr.length) {
    mergedArr.push(rightArr[j]);
    j++;
  }

  for (let k = 0; k < mergedArr.length; k++) {
    array[leftStart + k] = mergedArr[k];
  }
}

// Example usage:
const arr = [8, 4, 2, 9, 10, 1, 5];
console.log(mergeSort(arr)); // Output: [1, 2, 4, 5, 8, 9, 10]
