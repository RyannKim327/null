function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = currentValue;
  }

  return array;
}

// Usage example:
const unsortedArray = [5, 3, 1, 4, 2];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);
