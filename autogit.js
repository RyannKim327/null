function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

// Example usage:
const unsortedArray = [5, 2, 9, 1, 3];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 5, 9]
