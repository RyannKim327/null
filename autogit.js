function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
}

// Example usage:
const unsortedArray = [7, 3, 1, 9, 5];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 3, 5, 7, 9]
