function mergeSort(arr) {
  const n = arr.length;
  const aux = new Array(n);
  
  // Merge subarrays of size 1, 2, 4, 8, 16, ...
  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n - size; leftStart += 2 * size) {
      const mid = leftStart + size - 1;
      const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);
      merge(arr, aux, leftStart, mid, rightEnd);
    }
  }
  
  return arr;
}

// Merge function to combine two sorted subarrays into a sorted array
function merge(arr, aux, leftStart, mid, rightEnd) {
  let left = leftStart;
  let right = mid + 1;
  let k = leftStart;
  
  while (left <= mid && right <= rightEnd) {
    if (arr[left] <= arr[right]) {
      aux[k] = arr[left];
      left++;
    } else {
      aux[k] = arr[right];
      right++;
    }
    k++;
  }
  
  // Copy remaining elements from the left subarray
  while (left <= mid) {
    aux[k] = arr[left];
    left++;
    k++;
  }
  
  // Copy remaining elements from the right subarray
  while (right <= rightEnd) {
    aux[k] = arr[right];
    right++;
    k++;
  }
  
  // Copy back the merged elements to the original array
  for (let i = leftStart; i <= rightEnd; i++) {
    arr[i] = aux[i];
  }
}

// Example usage
const arr = [8, 4, 2, 9, 1, 5, 7, 3, 6];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
