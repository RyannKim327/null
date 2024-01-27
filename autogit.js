function bubbleSort(array) {
  const length = array.length;
  let swapped;

  for (let i = 0; i < length - 1; i++) {
    swapped = false;
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }

    // If no swaps were made in the inner loop, the array is already sorted
    if (!swapped) {
      break;
    }
  }

  return array;
}

// Example usage:
const unsortedArray = [6, 3, 8, 2, 9, 1];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray);
