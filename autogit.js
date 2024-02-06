function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// Example usage
const array = [5, 3, 8, 2, 1, 4];
console.log(bubbleSort(array)); // Output: [1, 2, 3, 4, 5, 8]
