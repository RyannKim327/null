function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentElement = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currentElement) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = currentElement;
  }

  return array;
}

// Example usage:
const unsortedArray = [5, 3, 8, 2, 1, 4];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 8]
