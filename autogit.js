function bubbleSort(array) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  }
  return array;
}

// Example usage:
const arr = [5, 3, 8, 1, 2];
console.log(bubbleSort(arr)); // Output: [1, 2, 3, 5, 8]
