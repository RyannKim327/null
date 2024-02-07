function mergeSort(arr) {
  const n = arr.length;
  const tempArray = new Array(n);

  // Merge subarrays of size 1, 2, 4, 8, 16, ...
  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
      const mid = Math.min(leftStart + size - 1, n - 1);
      const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);
      merge(arr, tempArray, leftStart, mid, rightEnd);
    }
  }

  return arr;
}

// Merge two subarrays in sorted order
function merge(arr, tempArray, leftStart, mid, rightEnd) {
  let leftEnd = mid;
  let rightStart = mid + 1;

  let left = leftStart;
  let right = rightStart;
  let index = leftStart;

  // Merge the two subarrays into the tempArray
  while (left <= leftEnd && right <= rightEnd) {
    if (arr[left] <= arr[right]) {
      tempArray[index] = arr[left];
      left++;
    } else {
      tempArray[index] = arr[right];
      right++;
    }
    index++;
  }

  // Copy the remaining elements from the left subarray
  for (let i = left; i <= leftEnd; i++) {
    tempArray[index] = arr[i];
    index++;
  }

  // Copy the remaining elements from the right subarray
  for (let i = right; i <= rightEnd; i++) {
    tempArray[index] = arr[i];
    index++;
  }

  // Copy the merged elements back to the original array
  for (let i = leftStart; i <= rightEnd; i++) {
    arr[i] = tempArray[i];
  }
}

// Example usage
const numbers = [8, 4, 6, 2, 7, 1, 5, 3];
console.log(mergeSort(numbers));
