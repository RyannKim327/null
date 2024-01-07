function bubbleSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let swapped = false;

    for (let j = 0; j < length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swapping elements
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) {
      // Array is already sorted, no need to continue
      break;
    }
  }

  return array;
}

// Example usage
const unsortedArray = [5, 3, 8, 4, 2];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 4, 5, 8]
