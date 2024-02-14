function mergeSortIterative(arr) {
  const len = arr.length;
  const aux = new Array(len); // Auxiliary array to store merged sub-arrays

  for (let size = 1; size < len; size *= 2) {
    for (let leftStart = 0; leftStart < len; leftStart += 2 * size) {
      const mid = leftStart + size - 1; // Middle index
      const rightEnd = Math.min(leftStart + 2 * size - 1, len - 1); // Right end index

      merge(arr, aux, leftStart, mid, rightEnd);
    }
  }

  return arr;
}

function merge(arr, aux, leftStart, mid, rightEnd) {
  let left = leftStart; // Starting index of the left sub-array
  let right = mid + 1; // Starting index of the right sub-array
  let index = leftStart; // Starting index of merged sub-array

  // Merge the two sub-arrays into the auxiliary array
  while (left <= mid && right <= rightEnd) {
    if (arr[left] <= arr[right]) {
      aux[index] = arr[left];
      left++;
    } else {
      aux[index] = arr[right];
      right++;
    }
    index++;
  }

  // Copy the remaining elements from the left sub-array (if any) to the auxiliary array
  while (left <= mid) {
    aux[index] = arr[left];
    left++;
    index++;
  }

  // Copy the remaining elements from the right sub-array (if any) to the auxiliary array
  while (right <= rightEnd) {
    aux[index] = arr[right];
    right++;
    index++;
  }

  // Copy the sorted elements from the auxiliary array to the original array
  for (let i = leftStart; i <= rightEnd; i++) {
    arr[i] = aux[i];
  }
}
const array = [5, 2, 9, 1, 7, 6];
console.log(mergeSortIterative(array)); // Output: [1, 2, 5, 6, 7, 9]
