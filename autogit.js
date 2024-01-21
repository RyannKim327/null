function bubbleSort(array) {
  const length = array.length;
  
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // Swapping the elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  
  return array;
}

// Example usage:
const numbers = [5, 2, 8, 12, 1];
console.log(bubbleSort(numbers)); // Output: [1, 2, 5, 8, 12]
