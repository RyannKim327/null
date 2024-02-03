// Function to merge two sorted arrays
function merge(arr, start, mid, end) {
  const leftArr = arr.slice(start, mid + 1);
  const rightArr = arr.slice(mid + 1, end + 1);

  let i = 0, j = 0, k = start;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}

// Iterative Merge Sort function
function mergeSort(arr) {
  const n = arr.length;

  for (let currSize = 1; currSize < n; currSize = 2 * currSize) {
    for (let start = 0; start < n - 1; start += 2 * currSize) {
      const mid = start + currSize - 1;
      const end = Math.min(start + 2 * currSize - 1, n - 1);

      merge(arr, start, mid, end);
    }
  }

  return arr;
}

// Example usage:
const arr = [9, 5, 1, 3, 8, 4, 7];
console.log(mergeSort(arr));
