function mergeSortIterative(arr) {
  const len = arr.length;
  const tempArray = new Array(len); // Create a temporary array to store merged subarrays

  // Perform bottom-up merge sort
  for (let size = 1; size < len; size *= 2) {
    for (let leftStart = 0; leftStart < len - 1; leftStart += 2 * size) {
      const mid = Math.min(leftStart + size - 1, len - 1); // Calculate mid index
      const rightEnd = Math.min(leftStart + 2 * size - 1, len - 1); // Calculate right end index

      merge(arr, tempArray, leftStart, mid, rightEnd);
    }
  }

  return arr;
}

// Merge two sorted subarrays into a single sorted subarray
function merge(arr, tempArray, leftStart, mid, rightEnd) {
  let leftEnd = mid;
  let rightStart = mid + 1;
  let tempIndex = leftStart;
  
  // Merge subarrays while elements are present in both
  while (leftStart <= leftEnd && rightStart <= rightEnd) {
    if (arr[leftStart] <= arr[rightStart]) {
      tempArray[tempIndex] = arr[leftStart];
      leftStart++;
    } else {
      tempArray[tempIndex] = arr[rightStart];
      rightStart++;
    }
    tempIndex++;
  }

  // Copy the remaining elements from the left subarray, if any
  while (leftStart <= leftEnd) {
    tempArray[tempIndex] = arr[leftStart];
    leftStart++;
    tempIndex++;
  }

  // Copy the remaining elements from the right subarray, if any
  while (rightStart <= rightEnd) {
    tempArray[tempIndex] = arr[rightStart];
    rightStart++;
    tempIndex++;
  }

  // Copy the sorted subarray from the temporary array back into the original array
  for (let i = leftEnd; i <= rightEnd; i++) {
    arr[i] = tempArray[i];
  }
}
const arr = [7, 2, 9, 1, 6];
console.log(mergeSortIterative(arr)); // Output: [1, 2, 6, 7, 9]
