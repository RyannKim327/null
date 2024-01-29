function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const temp = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = temp;
  }

  return array;
}

// Example usage:
const unsortedArray = [5, 2, 4, 6, 1, 3];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6]
