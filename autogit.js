function mergeSortIterative(arr) {
  const length = arr.length;
  const tempArray = new Array(length); // Create a temporary array to store the sorted sub-arrays

  // Start with individual elements and merge them in pairs
  for (let blockSize = 1; blockSize < length; blockSize *= 2) {
    for (let start = 0; start < length - blockSize; start += 2 * blockSize) {
      const low = start;
      const mid = start + blockSize - 1;
      const high = Math.min(start + 2 * blockSize - 1, length - 1);

      // Merge the two sub-arrays within the main array
      merge(arr, low, mid, high, tempArray);
    }
  }

  return arr;
}

// Merge two sub-arrays of arr[]
function merge(arr, low, mid, high, tempArray) {
  let i = low; // Initial index of first sub-array
  let j = mid + 1; // Initial index of second sub-array
  let k = low; // Initial index of merged sub-array

  // Merge the sub-arrays by comparing elements
  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      tempArray[k] = arr[i];
      i++;
    } else {
      tempArray[k] = arr[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of the first sub-array, if any
  while (i <= mid) {
    tempArray[k] = arr[i];
    i++;
    k++;
  }

  // Copy the remaining elements of the second sub-array, if any
  while (j <= high) {
    tempArray[k] = arr[j];
    j++;
    k++;
  }

  // Copy the merged elements back to the original array
  for (let m = low; m <= high; m++) {
    arr[m] = tempArray[m];
  }
}
const arr = [6, 5, 3, 1, 8, 7, 2, 4];
const sortedArray = mergeSortIterative(arr);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
