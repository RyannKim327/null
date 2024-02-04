function mergeSortIterative(arr) {
  const len = arr.length;
  const sortedArr = [...arr]; // Create a copy of the input array

  for (let size = 1; size < len; size *= 2) {
    let low = 0;

    while (low + size < len) {
      const mid = low + size - 1;
      const high = Math.min(low + size * 2 - 1, len - 1);

      merge(sortedArr, low, mid, high);
      low += size * 2;
    }
  }

  return sortedArr;
}

function merge(arr, low, mid, high) {
  const leftArr = arr.slice(low, mid + 1);
  const rightArr = arr.slice(mid + 1, high + 1);

  let i = 0,
    j = 0,
    k = low;

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

// Example Usage:
const arr = [5, 2, 3, 1, 4];
const sortedArr = mergeSortIterative(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5]
