function selectionSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first element of the unsorted part
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }

  return arr;
}

// Example usage:
const arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr)); // Output: [11, 12, 22, 25, 64]
