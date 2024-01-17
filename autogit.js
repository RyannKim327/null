function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

// Usage example:
const arr = [64, 25, 12, 22, 11];
const sortedArr = selectionSort(arr);
console.log(sortedArr); // Output: [11, 12, 22, 25, 64]
