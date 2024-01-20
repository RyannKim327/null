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
const array = [4, 2, 7, 1, 3];
console.log(insertionSort(array)); // Output: [1, 2, 3, 4, 7]
