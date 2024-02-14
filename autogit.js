function mergeSort(array) {
  const length = array.length;
  const tempArray = new Array(length); // Create a temporary array for merging

  for (let blockSize = 1; blockSize < length; blockSize *= 2) {
    for (let start = 0; start < length; start += 2 * blockSize) {
      const start1 = start;
      const end1 = Math.min(start + blockSize, length);
      const start2 = end1;
      const end2 = Math.min(start + 2 * blockSize, length);

      merge(array, tempArray, start1, end1, start2, end2);
    }
  }

  return array;
}

function merge(array, tempArray, start1, end1, start2, end2) {
  let index = start1;

  while (start1 < end1 && start2 < end2) {
    if (array[start1] <= array[start2]) {
      tempArray[index] = array[start1];
      start1++;
    } else {
      tempArray[index] = array[start2];
      start2++;
    }
    index++;
  }

  while (start1 < end1) {
    tempArray[index] = array[start1];
    start1++;
    index++;
  }

  while (start2 < end2) {
    tempArray[index] = array[start2];
    start2++;
    index++;
  }

  // Copy sorted elements back to the original array
  for (let i = start1; i < end2; i++) {
    array[i] = tempArray[i];
  }
}
const array = [8, 4, 1, 7, 2, 6, 3, 5];
console.log(mergeSort(array)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
