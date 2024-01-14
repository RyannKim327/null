function bubbleSort(array) {
  const length = array.length;
  
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements using a temporary variable
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

// Example usage:
const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // [2, 3, 4, 5, 8]
