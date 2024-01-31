function selectionSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

// Example usage
const unsortedArray = [5, 2, 8, 6, 1, 3];
console.log(selectionSort(unsortedArray)); // Output: [1, 2, 3, 5, 6, 8]
