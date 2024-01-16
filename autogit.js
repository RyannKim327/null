function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the remaining unsorted portion of the array
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first unsorted element
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }

  return array;
}

// Example usage:
const unsortedArray = [9, 5, 1, 4, 3];
console.log(selectionSort(unsortedArray)); // Output: [1, 3, 4, 5, 9]
