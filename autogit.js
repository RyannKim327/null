function mergeSortIterative(arr) {
  const n = arr.length;
  
  for (let currSize = 1; currSize <= n - 1; currSize = 2 * currSize) {
    for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * currSize) {
      const mid = Math.min(leftStart + currSize - 1, n - 1);
      const rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);

      merge(arr, leftStart, mid, rightEnd);
    }
  }

  return arr;
}

function merge(arr, left, mid, right) {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const leftArr = arr.slice(left, left + n1);
  const rightArr = arr.slice(mid + 1, mid + 1 + n2);

  let i = 0, j = 0, k = left;

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

  while (i < n1) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}

// Test the function
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSortIterative(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
