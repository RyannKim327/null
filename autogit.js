function bubbleSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    // Last i elements are already in place
    for (let j = 0; j < length - i - 1; j++) {
      // Swap if the current element is greater than the next element
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

// Example usage:
const numbers = [9, 5, 7, 3, 1, 8];
console.log(bubbleSort(numbers)); // Output: [1, 3, 5, 7, 8, 9]
