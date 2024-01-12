function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      // Swap elements
      const temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }

  return arr;
}

// Example usage:
const arr = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(arr);
console.log(sortedArray); // [11, 12, 22, 25, 64]
