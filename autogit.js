function mergeSort(arr) {
  const n = arr.length;
  const sortedArr = Array(n).fill(0);

  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
      const leftEnd = Math.min(leftStart + size, n);
      const rightStart = leftEnd;
      const rightEnd = Math.min(rightStart + size, n);

      let i = leftStart;
      let j = rightStart;
      let k = leftStart;

      while (i < leftEnd && j < rightEnd) {
        if (arr[i] <= arr[j]) {
          sortedArr[k++] = arr[i++];
        } else {
          sortedArr[k++] = arr[j++];
        }
      }

      while (i < leftEnd) {
        sortedArr[k++] = arr[i++];
      }

      while (j < rightEnd) {
        sortedArr[k++] = arr[j++];
      }
    }

    // Copy sorted array back to original array
    for (let i = 0; i < n; i++) {
      arr[i] = sortedArr[i];
    }
  }

  return arr;
}

// Example usage
const arr = [8, 3, 1, 7, 0, 10, 2];
console.log(mergeSort(arr)); // Output: [0, 1, 2, 3, 7, 8, 10]
