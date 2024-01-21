function selectionSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    // Find the index of the smallest element in the unsorted portion
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the smallest element with the first element of the unsorted portion
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example usage
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
