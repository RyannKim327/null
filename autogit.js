function mergeSortIterative(arr) {
  const n = arr.length;
  let subarraySize = 1; // Size of subarrays to merge
  let left, mid, right; // Indices for merging subarrays

  while (subarraySize < n) {
    left = 0;

    while (left + subarraySize < n) {
      mid = left + subarraySize - 1;
      right = Math.min(left + 2 * subarraySize - 1, n - 1);
      merge(arr, left, mid, right);
      left += 2 * subarraySize;
    }

    subarraySize *= 2;
  }

  return arr;
}

function merge(arr, left, mid, right) {
  const n1 = mid - left + 1; // Size of left subarray
  const n2 = right - mid; // Size of right subarray
  let leftArr = [], rightArr = [];

  // Fill subarrays with values from the original array
  for (let i = 0; i < n1; i++) {
    leftArr[i] = arr[left + i];
  }
  for (let j = 0; j < n2; j++) {
    rightArr[j] = arr[mid + 1 + j];
  }

  let i = 0, j = 0, k = left;

  // Merge the two subarrays back into the original array
  while (i < n1 && j < n2) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of leftArr (if any) into the original array
  while (i < n1) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  // Copy the remaining elements of rightArr (if any) into the original array
  while (j < n2) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}
const arr = [8, 5, 2, 9, 5, 6, 3];
console.log(mergeSortIterative(arr)); // Output: [2, 3, 5, 5, 6, 8, 9]
